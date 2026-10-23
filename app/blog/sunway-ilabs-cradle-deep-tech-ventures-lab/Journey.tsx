"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./journey.css";

const IMG = "/blog/dtvl";

function Star() {
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M12 0c.6 6 5.4 10.8 12 11.4C17.4 12 12.6 16.8 12 24c-.6-7.2-5.4-12-12-12.6C6.6 10.8 11.4 6 12 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Journey() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const q = <T extends Element>(sel: string) =>
      Array.from(root.querySelectorAll<T>(sel));

    if (reduce) {
      q<HTMLElement>(".num").forEach((el) => {
        el.textContent = (el.dataset.to || "") + (el.dataset.suffix || "");
      });
      q(".pin .step").forEach((s) => s.classList.add("on"));
      q<HTMLElement>(".rail__fill").forEach((f) => (f.style.height = "100%"));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    const raf = (t: number) => lenis.raf(t * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      /* word-mask reveal */
      const splitWords = (el: HTMLElement) => {
        if (el.querySelector(".word")) return el.querySelectorAll<HTMLElement>(".word > span");
        const nodes = Array.from(el.childNodes);
        el.innerHTML = "";
        nodes.forEach((node) => {
          if (node.nodeType === 3) {
            (node.textContent || "").split(/(\s+)/).forEach((tok) => {
              if (tok.trim() === "") {
                el.appendChild(document.createTextNode(tok));
                return;
              }
              const w = document.createElement("span");
              w.className = "word";
              const i = document.createElement("span");
              i.textContent = tok;
              w.appendChild(i);
              el.appendChild(w);
            });
          } else {
            const w = document.createElement("span");
            w.className = "word";
            (node as HTMLElement).style.display = "inline-block";
            w.appendChild(node);
            el.appendChild(w);
          }
        });
        return el.querySelectorAll<HTMLElement>(".word > span");
      };
      q<HTMLElement>(".mask").forEach((el) => {
        if (el.closest(".hero")) return; // hero plays on load, below handles the rest
        const inners = splitWords(el);
        gsap.set(inners, { yPercent: 115 });
        gsap.to(inners, {
          yPercent: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.045,
          scrollTrigger: { trigger: el, start: "top 86%" },
        });
      });

      /* fade-rise (below the fold) */
      q<HTMLElement>(".fade").forEach((el) => {
        if (el.closest(".hero")) return;
        gsap.from(el, {
          autoAlpha: 0,
          y: 18,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });

      /* hero intro — above the fold, so animate on load, not on scroll */
      const heroH1 = root.querySelector<HTMLElement>(".hero h1.mask");
      if (heroH1) {
        const hi = splitWords(heroH1);
        gsap.set(hi, { yPercent: 115 });
        gsap.to(hi, { yPercent: 0, duration: 0.9, ease: "power3.out", stagger: 0.05, delay: 0.1 });
      }
      gsap.from(".hero .fade", { autoAlpha: 0, y: 16, duration: 0.8, ease: "power2.out", stagger: 0.08, delay: 0.45 });
      gsap.from(".hero .hero__frame", { autoAlpha: 0, y: 30, duration: 1, ease: "power3.out", delay: 0.35 });

      /* image clip reveal + parallax */
      q<HTMLElement>(".scene .frame, .finale .frame, .pin__media .frame").forEach((f) => {
        const img = f.querySelector("img");
        gsap.set(f, { clipPath: "inset(0% 0% 100% 0%)" });
        gsap.to(f, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: f, start: "top 85%" },
        });
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.22 },
            { scale: 1.08, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: f, start: "top 85%" } }
          );
          gsap.fromTo(
            img,
            { yPercent: -7 },
            { yPercent: 5, ease: "none", scrollTrigger: { trigger: f, start: "top bottom", end: "bottom top", scrub: true } }
          );
        }
      });
      const heroImg = root.querySelector("#jHeroImg");
      if (heroImg) {
        gsap.fromTo(
          heroImg,
          { yPercent: -6 },
          { yPercent: 6, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } }
        );
      }

      /* scroll-velocity skew */
      const skewTo = gsap.quickTo(".jrny .frame", "skewY", { duration: 0.5, ease: "power3" });
      lenis.on("scroll", (e: { velocity?: number }) => {
        skewTo(Math.max(-5, Math.min(5, (e.velocity || 0) * 0.06)));
      });

      /* rail fill + nodes */
      q<HTMLElement>(".timeline").forEach((tl) => {
        const fill = tl.querySelector(".rail__fill");
        if (!fill) return;
        gsap.fromTo(
          fill,
          { height: "0%" },
          { height: "100%", ease: "none", scrollTrigger: { trigger: tl, start: "top 60%", end: "bottom 60%", scrub: true } }
        );
      });
      q<HTMLElement>(".scene").forEach((s) => {
        ScrollTrigger.create({
          trigger: s,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => {
            const n = s.querySelector(".node");
            if (n) n.classList.toggle("on", self.isActive);
          },
        });
      });

      /* count-up */
      q<HTMLElement>(".num").forEach((el) => {
        const to = parseFloat(el.dataset.to || "0");
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              v: to,
              duration: 1.2,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.round(obj.v) + suffix;
              },
            });
          },
        });
      });
      q<HTMLElement>(".stat").forEach((el) => {
        gsap.from(el, { y: 30, autoAlpha: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });

      /* pinned word-swap (sticky via CSS) */
      q<HTMLElement>(".pin").forEach((pin) => {
        const steps = pin.querySelectorAll(".step");
        const dots = pin.querySelector(".pin__dots");
        if (dots && !dots.children.length) {
          steps.forEach((_, i) => {
            const d = document.createElement("span");
            d.className = "pdot" + (i === 0 ? " on" : "");
            dots.appendChild(d);
          });
        }
        const pdots = pin.querySelectorAll(".pdot");
        ScrollTrigger.create({
          trigger: pin,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
            steps.forEach((s, i) => s.classList.toggle("on", i === idx));
            pdots.forEach((d, i) => d.classList.toggle("on", i === idx));
          },
        });
      });

      /* horizontal pinned gallery */
      const htrack = root.querySelector<HTMLElement>("#jHtrack");
      if (htrack && window.matchMedia("(min-width:821px)").matches) {
        const amt = () => htrack.scrollWidth - window.innerWidth;
        gsap.to(htrack, {
          x: () => -amt(),
          ease: "none",
          scrollTrigger: {
            trigger: ".hgallery",
            start: "top top",
            end: () => "+=" + amt(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      /* kinetic marquee */
      const mtrack = root.querySelector<HTMLElement>("#jMtrack");
      const mhalf = root.querySelector<HTMLElement>(".mhalf");
      if (mtrack && mhalf) {
        const w = mhalf.getBoundingClientRect().width;
        const mtl = gsap.to(mtrack, {
          x: -w,
          duration: 18,
          ease: "none",
          repeat: -1,
          modifiers: { x: (x) => (parseFloat(x) % w) + "px" },
        });
        lenis.on("scroll", (e: { velocity?: number }) => {
          const ts = 1 + Math.min(6, Math.abs((e.velocity || 0) * 0.08));
          gsap.to(mtl, { timeScale: ts, duration: 0.3, overwrite: true });
          gsap.to(mtl, { timeScale: 1, duration: 1.2, delay: 0.3, overwrite: false });
        });
      }

      ScrollTrigger.refresh();
    }, root);

    // Recompute trigger positions once images/fonts settle.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(refreshTimer);
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="jrny" ref={rootRef}>
      {/* HERO */}
      <header className="hero" data-own="tsuin">
        <span className="spark tsuin" style={{ top: "14%", left: "12%" }}><Star /></span>
        <span className="spark human" style={{ top: "22%", right: "14%", width: 18 }}><Star /></span>
        <div className="wrap">
          <div className="eyebrow label">Sunway iLabs &times; Cradle &middot; Deep Tech Ventures Lab</div>
          <h1 className="mask">Our deep tech journey with Sunway iLabs.</h1>
          <p className="hero__sub fade">
            A six-month sprint through the Startup Deep Tech Ventures Lab. More show than tell, scroll to live it.
          </p>
          <div className="hero__meta fade">
            <span>By Audrey Aui Yong, Tsuin AI</span>
            <span>July&ndash;December 2025</span>
          </div>
        </div>
        <div className="hero__frame">
          <div className="frame">
            <img id="jHeroImg" src={`${IMG}/01-launch.webp`} alt="The Startup Deep Tech Ventures Lab launch" />
            <span className="tag">The launch</span>
          </div>
        </div>
        <div className="cue fade">Scroll</div>
      </header>

      {/* MARQUEE */}
      <section className="marquee" aria-hidden="true">
        <div className="marquee__track" id="jMtrack">
          {[0, 1].map((k) => (
            <div className="mhalf" key={k}>
              <span>Inspire</span><span className="star">&#10022;</span>
              <span>Build</span><span className="star">&#10022;</span>
              <span>Scale</span><span className="star">&#10022;</span>
              <span>Deep tech</span><span className="star">&#10022;</span>
              <span>Capture the mind</span><span className="star">&#10022;</span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats wrap">
        <span className="spark twin" style={{ top: "18%", right: "8%", width: 20 }}><Star /></span>
        <h2 className="mask">One cohort, chosen carefully.</h2>
        <div className="stats__grid">
          <div className="stat"><b className="num" data-to="20">0</b><span>startups selected</span></div>
          <div className="stat"><b className="num" data-to="69">0</b><span>applicants</span></div>
          <div className="stat"><b className="num" data-to="29" data-suffix="%">0</b><span>acceptance rate</span></div>
          <div className="stat"><b className="num" data-to="7">0</b><span>deep tech verticals</span></div>
        </div>
      </section>

      {/* TIMELINE 1 */}
      <div className="timeline wrap">
        <div className="rail"><div className="rail__fill" /></div>

        <section className="scene" data-side="left" data-own="tsuin">
          <div className="scene__media">
            <span className="node" />
            <div className="frame"><img src={`${IMG}/02-ilabs-inspire-build-scale.jpg`} alt="At the Sunway iLabs Inspire Build Scale wall" loading="lazy" /><span className="tag">Sunway iLabs</span></div>
          </div>
          <div className="scene__text">
            <div className="kicker"><span className="no">01</span><span className="label">Stepping in</span></div>
            <h2 className="mask">Inspire. Build. Scale.</h2>
            <p>We walked into Sunway iLabs knowing the order mattered. One of 20 startups, picked from 69.</p>
          </div>
        </section>

        <section className="scene" data-side="right" data-own="tsuin">
          <div className="scene__media">
            <span className="node" />
            <div className="frame"><img src={`${IMG}/03-dtvl-backdrop-2025.jpg`} alt="Startup Deep Tech Ventures Lab 2025 partner backdrop" loading="lazy" /><span className="tag">The partners</span></div>
          </div>
          <div className="scene__text">
            <div className="kicker"><span className="no">02</span><span className="label">Backed well</span></div>
            <h2 className="mask">Organised by iLabs, <span className="em-brand">powered by Cradle</span>.</h2>
            <p>Strategic partners from Cambridge to Singapore: Deep Tech Labs, CloudMile, and Investible.</p>
          </div>
        </section>
      </div>

      {/* PIN A */}
      <section className="pin" data-side="left" data-steps="4" data-own="tsuin">
        <div className="pin__sticky">
          <div className="pin__media">
            <div className="frame"><img src={`${IMG}/06-booth-visitor.jpg`} alt="Explaining the AI Twin at the Sunway iLabs booth" loading="lazy" /><span className="tag">Six months of work</span></div>
          </div>
          <div className="pin__steps">
            <div className="pin__track" />
            <div className="pin__dots" />
            <div className="pin__badge label">02 &middot; The build</div>
            <div className="step on"><h2>Workshops.</h2><p>Expert-led, every week. We rebuilt how we explain what we are building.</p></div>
            <div className="step"><h2>Mentorship.</h2><p>Monthly office hours with people who had already done the hard parts.</p></div>
            <div className="step"><h2>Investor-ready.</h2><p>Sessions that turned a demo into a story investors could follow.</p></div>
            <div className="step"><h2>One cohort.</h2><p>Seven verticals, from AI to energy transition, pushing each other forward.</p></div>
          </div>
        </div>
      </section>

      {/* TIMELINE 2 */}
      <div className="timeline wrap">
        <div className="rail"><div className="rail__fill" /></div>

        <section className="scene" data-side="left" data-own="twin">
          <div className="scene__media">
            <span className="node" />
            <div className="frame"><img src={`${IMG}/05-booth-poster.jpg`} alt="The tsuin.ai booth poster: your code has a story" loading="lazy" /><span className="tag">The message</span></div>
          </div>
          <div className="scene__text">
            <div className="kicker"><span className="no">03</span><span className="label">The hook</span></div>
            <div className="twin-bubble float">Your code has a story. Don&rsquo;t let it die when developers leave.<span className="meta">&middot; meet your AI Twin</span></div>
          </div>
        </section>

        <section className="scene" data-side="right" data-own="tsuin">
          <div className="scene__media">
            <span className="node" />
            <div className="frame"><img src={`${IMG}/08-vips-booth.jpg`} alt="VIP visit at the booth during the summit" loading="lazy" /><span className="tag">VIP walkabout</span></div>
          </div>
          <div className="scene__text">
            <div className="kicker"><span className="no">04</span><span className="label">The floor</span></div>
            <h2 className="mask">Everyone stopped by.</h2>
            <p>Founders, investors, and a steady stream of VIPs. This is why you show up in person.</p>
          </div>
        </section>
      </div>

      {/* HORIZONTAL GALLERY */}
      <section className="hgallery">
        <div className="hgallery__head">
          <span className="label">The cohort</span>
          <h2>Scroll the floor.</h2>
        </div>
        <div className="hgallery__inner">
          <div className="hgallery__track" id="jHtrack">
            <div className="hcard"><div className="frame"><img src={`${IMG}/07-cohort-booth.jpg`} alt="The cohort at the Sunway iLabs booth" loading="lazy" /><span className="tag">At the booth</span></div></div>
            <div className="hcard tall"><div className="frame"><img src={`${IMG}/10-cohort-thumbsup.jpg`} alt="Cohort celebrating at the booth" loading="lazy" /><span className="tag">Thumbs up</span></div></div>
            <div className="hcard"><div className="frame"><img src={`${IMG}/09-cohort-group.jpg`} alt="The cohort group photo" loading="lazy" /><span className="tag">The cohort</span></div></div>
            <div className="hcard tall"><div className="frame"><img src={`${IMG}/12-pitch-closeup.jpg`} alt="Audrey on stage" loading="lazy" /><span className="tag">On the mic</span></div></div>
            <div className="hcard"><div className="frame"><img src={`${IMG}/04-booth-demo-ai-twin.jpg`} alt="Live AI Twin demo" loading="lazy" /><span className="tag">Live demo</span></div></div>
          </div>
        </div>
      </section>

      {/* PIN B */}
      <section className="pin" data-side="right" data-steps="3" data-own="twin">
        <div className="pin__sticky">
          <div className="pin__media">
            <div className="frame"><img src={`${IMG}/04-booth-demo-ai-twin.jpg`} alt="Live AI Twin demo on screen at the booth" loading="lazy" /><span className="tag">Live at the booth</span></div>
          </div>
          <div className="pin__steps">
            <div className="pin__track" />
            <div className="pin__dots" />
            <div className="pin__badge label" style={{ color: "var(--twin-ink)" }}>03 &middot; The demo</div>
            <div className="step on"><h2>We went live.</h2><p>The AI Twin on the big screen, capturing a developer&rsquo;s thinking in real time.</p></div>
            <div className="step"><h2>Every &lsquo;why&rsquo; preserved.</h2><p>Every decision remembered, so the knowledge stays when people move on.</p></div>
            <div className="step"><h2>Every demo, a talk.</h2><p>That is where you learn what actually resonates.</p></div>
          </div>
        </div>
      </section>

      {/* FINALE */}
      <section className="finale">
        <span className="spark tsuin" style={{ top: "8%", left: "10%" }}><Star /></span>
        <span className="spark human" style={{ top: "14%", right: "11%", width: 18 }}><Star /></span>
        <div className="wrap">
          <div className="frame tsuin">
            <img src={`${IMG}/11-pitch-stage.jpg`} alt="Pitching Tsuin AI on stage: Capturing the Developer's Mind" loading="lazy" />
            <span className="tag">Capturing the Developer&rsquo;s Mind</span>
          </div>
          <div className="letter">
            <span className="label">From the stage</span>
            <blockquote className="mask">
              &ldquo;Moving forward, our startup&rsquo;s journey is <span className="em-act">very exciting</span>, because through the Deep Tech Ventures Lab we are progressing really fast.&rdquo;
            </blockquote>
            <div className="by">Audrey Aui Yong &middot; Founder &amp; CEO, Tsuin AI</div>
          </div>
          <div className="parties" aria-hidden="true"><i className="p1" /><i className="p2" /><i className="p3" /></div>
          <div><a className="btn" href="https://tsuin.ai">See what we are building &rarr;</a></div>
        </div>
      </section>
    </div>
  );
}
