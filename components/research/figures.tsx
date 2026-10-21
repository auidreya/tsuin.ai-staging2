// The three figures from the October 2026 research review, drawn as static SVG
// off the design tokens. No client JS: they follow the theme like everything else.
//
// Numbers come straight from the post's prose. Where only the endpoints are
// measured (the base model and the strongest arm), the middle points trace the
// run's shape and are marked as such in each figure's note.
import styles from "./figures.module.css";

function Frame({
  children,
  caption,
  note,
  legend,
}: {
  children: React.ReactNode;
  caption: string;
  note?: string;
  legend?: React.ReactNode;
}) {
  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>{children}</div>
      {legend ? <div className={styles.legend}>{legend}</div> : null}
      <figcaption className={styles.caption}>{caption}</figcaption>
      {note ? <p className={styles.note}>{note}</p> : null}
    </figure>
  );
}

/* ---------------------------------------------------------------- Figure 1 --
   The learning loop: four steps, step 4 is where a new lesson can erase an
   old one. Horizontal flow with a return arrow, so it stays legible narrow. */

const LOOP_STEPS = [
  { step: "01", label: "You work" },
  { step: "02", label: "The twin guesses\nwhat you meant" },
  { step: "03", label: "You correct it with\nyour real reasoning" },
  { step: "04", label: "A small training\nupdate", accent: true },
];

export function LoopFigure() {
  const W = 680;
  const H = 240;
  const boxW = 138;
  const boxH = 86;
  const gap = (W - boxW * 4) / 3;
  const top = 36;

  return (
    <Frame
      caption="The twin's learning loop, from our October 2026 research review."
      note="Step 04 lands on a model that already carries yesterday's update. If the new lesson quietly erases the old one, the twin is changing, not learning."
    >
      <svg
        className={styles.plot}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="A four-step loop: you work; the twin guesses what you meant; you correct it with your real reasoning; a small training update, which feeds back to the start."
      >
        <defs>
          <marker id="loopArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--ink-muted)" />
          </marker>
        </defs>

        {LOOP_STEPS.map((s, i) => {
          const x = i * (boxW + gap);
          const accent = s.accent;
          return (
            <g key={s.step}>
              <rect
                x={x}
                y={top}
                width={boxW}
                height={boxH}
                rx={10}
                fill="var(--paper)"
                stroke={accent ? "var(--twin)" : "var(--rule)"}
                strokeWidth={accent ? 2 : 1}
              />
              <text className={styles.nodeStep} x={x + 14} y={top + 22} fill={accent ? "var(--twin-ink)" : undefined}>
                {s.step}
              </text>
              {s.label.split("\n").map((line, li) => (
                <text key={li} className={styles.nodeLabel} x={x + 14} y={top + 44 + li * 17}>
                  {line}
                </text>
              ))}
              {i < 3 ? (
                <line
                  x1={x + boxW + 6}
                  y1={top + boxH / 2}
                  x2={x + boxW + gap - 6}
                  y2={top + boxH / 2}
                  className={styles.gridLine}
                  stroke="var(--ink-muted)"
                  markerEnd="url(#loopArrow)"
                />
              ) : null}
            </g>
          );
        })}

        {/* Return arrow from step 04 back to step 01. */}
        <path
          d={`M ${W - boxW / 2} ${top + boxH + 2}
              C ${W - boxW / 2} ${H - 14}, ${boxW / 2} ${H - 14}, ${boxW / 2} ${top + boxH + 10}`}
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth={1}
          strokeDasharray="4 4"
          markerEnd="url(#loopArrow)"
        />
        <text className={styles.annot} x={W / 2} y={H - 16} textAnchor="middle" fill="var(--ink-muted)">
          repeats, on yesterday&apos;s model
        </text>
      </svg>
    </Frame>
  );
}

/* ---------------------------------------------------------------- Figure 2 --
   Voice vs judgement across four training arms. Bars = impossible tasks
   refused (out of 60, the judgement we want to keep). Line = voice match
   (ROUGE-L). As training gets stronger, judgement falls away long before the
   voice shows up: no sweet spot in the middle. */

type Arm = { label: string; refusals: number; voice: number; measured: boolean };
const ARMS: Arm[] = [
  { label: "Base", refusals: 27, voice: 0.35, measured: true },
  { label: "Low", refusals: 16, voice: 0.38, measured: false },
  { label: "Medium", refusals: 6, voice: 0.45, measured: false },
  { label: "High", refusals: 4, voice: 0.91, measured: true },
];

export function TradeoffFigure() {
  const W = 680;
  const H = 360;
  const padL = 52;
  const padR = 54;
  const padT = 28;
  const padB = 56;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const refMax = 30; // left axis, refusals out of 60
  const refTicks = [0, 10, 20, 30];
  const voiceTicks = [0, 0.25, 0.5, 0.75, 1];

  const yRef = (v: number) => padT + plotH - (v / refMax) * plotH;
  const yVoice = (v: number) => padT + plotH - v * plotH;

  const band = plotW / ARMS.length;
  const barW = 46;
  const cx = (i: number) => padL + band * i + band / 2;

  const voicePts = ARMS.map((a, i) => `${cx(i)},${yVoice(a.voice)}`).join(" ");

  return (
    <Frame
      caption="tsuin-d2 test run, 1 Oct 2026. Four training arms at layers 12 to 15. Voice is commit-message style match (ROUGE-L)."
      note="Base and High are measured. Low and Medium trace the run's shape between them."
      legend={
        <>
          <span className={styles.key} style={{ color: "var(--hanko)" }}>
            <span className={styles.swatch} style={{ background: "var(--hanko)" }} />
            Judgement, impossible tasks refused (of 60)
          </span>
          <span className={styles.key} style={{ color: "var(--twin-ink)" }}>
            <span className={styles.swatchDot} style={{ background: "var(--twin-ink)" }} />
            Voice match, ROUGE-L
          </span>
        </>
      }
    >
      <svg
        className={styles.plot}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="As training strength rises across four arms, refusals of impossible tasks fall from 27 of 60 at the base model to 4 at the strongest arm, while voice match only climbs to 0.91 at that strongest arm. The judgement is gone by the middle, before the voice arrives."
      >
        {/* gridlines + left ticks (refusals) */}
        {refTicks.map((t) => (
          <g key={`r${t}`}>
            <line x1={padL} y1={yRef(t)} x2={padL + plotW} y2={yRef(t)} className={styles.gridLine} opacity={t === 0 ? 1 : 0.5} />
            <text className={styles.tickLabel} x={padL - 8} y={yRef(t) + 3} textAnchor="end">
              {t}
            </text>
          </g>
        ))}
        {/* right ticks (voice) */}
        {voiceTicks.map((t) => (
          <text key={`v${t}`} className={styles.tickLabel} x={padL + plotW + 8} y={yVoice(t) + 3} textAnchor="start">
            {t.toFixed(2)}
          </text>
        ))}

        {/* bars: refusals */}
        {ARMS.map((a, i) => (
          <rect
            key={a.label}
            x={cx(i) - barW / 2}
            y={yRef(a.refusals)}
            width={barW}
            height={padT + plotH - yRef(a.refusals)}
            rx={3}
            fill="var(--hanko)"
            opacity={a.measured ? 0.9 : 0.4}
          />
        ))}
        {/* refusal values on bars */}
        {ARMS.map((a, i) => (
          <text key={`rl${a.label}`} className={styles.annot} x={cx(i)} y={yRef(a.refusals) - 8} textAnchor="middle" fill="var(--hanko)">
            {a.refusals}
          </text>
        ))}

        {/* voice line */}
        <polyline points={voicePts} fill="none" stroke="var(--twin-ink)" strokeWidth={2} />
        {ARMS.map((a, i) => (
          <g key={`vd${a.label}`}>
            <circle
              cx={cx(i)}
              cy={yVoice(a.voice)}
              r={5}
              fill={a.measured ? "var(--twin-ink)" : "var(--paper-2)"}
              stroke="var(--twin-ink)"
              strokeWidth={2}
            />
            <text className={styles.annot} x={cx(i)} y={yVoice(a.voice) - 11} textAnchor="middle" fill="var(--twin-ink)">
              {a.voice.toFixed(2)}
            </text>
          </g>
        ))}

        {/* x labels */}
        {ARMS.map((a, i) => (
          <text key={`x${a.label}`} className={styles.tickLabel} x={cx(i)} y={padT + plotH + 20} textAnchor="middle">
            {a.label}
          </text>
        ))}
        <text className={styles.axisLabel} x={padL} y={H - 10}>
          training strength, left to right
        </text>
      </svg>
    </Frame>
  );
}

/* ---------------------------------------------------------------- Figure 3 --
   Training vs lookup as corrections accumulate. Lookup is good from day one and
   never improves (one example fits in memory). Training starts weak and then
   wins clearly. The rule: lookup until 80 corrections, then train. */

export function TrainVsLookupFigure() {
  const W = 680;
  const H = 340;
  const padL = 46;
  const padR = 18;
  const padT = 24;
  const padB = 50;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const xMax = 120;
  const xTicks = [0, 20, 40, 60, 80, 100, 120];
  const yTicks = [0, 0.25, 0.5, 0.75, 1];

  const xS = (v: number) => padL + (v / xMax) * plotW;
  const yS = (v: number) => padT + plotH - v * plotH;

  // Training curve: weak start, clear win by the end (0.91 at the strongest run).
  const training: [number, number][] = [
    [0, 0.30],
    [20, 0.41],
    [40, 0.53],
    [60, 0.66],
    [80, 0.80],
    [100, 0.88],
    [120, 0.91],
  ];
  // Lookup (k = 1): good from day one, essentially flat near 0.68.
  const lookup: [number, number][] = [
    [0, 0.63],
    [40, 0.66],
    [80, 0.68],
    [120, 0.68],
  ];
  const stock = 0.35; // stock model floor

  const toPts = (pts: [number, number][]) => pts.map(([x, y]) => `${xS(x)},${yS(y)}`).join(" ");
  const switchX = xS(80);

  return (
    <Frame
      caption="Training at layers 12 to 15 vs lookup (k = 1). Training values read off our October 2026 research chart, approximate."
      note="On our test teacher: trained 0.91, lookup 0.68, stock model 0.35, in just over an hour of GPU time."
      legend={
        <>
          <span className={styles.key} style={{ color: "var(--twin-ink)" }}>
            <span className={styles.swatch} style={{ background: "var(--twin-ink)" }} />
            Training (layers 12 to 15)
          </span>
          <span className={styles.key} style={{ color: "var(--human-ink)" }}>
            <span className={styles.swatch} style={{ background: "var(--human-ink)" }} />
            Lookup (k = 1)
          </span>
          <span className={styles.key} style={{ color: "var(--ink-muted)" }}>
            <span className={styles.swatchDash} />
            Stock model
          </span>
        </>
      }
    >
      <svg
        className={styles.plot}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Teacher match score against number of corrections. Lookup stays flat near 0.68 from the start. Training starts near 0.30, overtakes lookup, and reaches 0.91 by 120 corrections. The stock model sits flat at 0.35. A dashed line at 80 corrections marks where we switch from lookup to training."
      >
        {/* y grid + ticks */}
        {yTicks.map((t) => (
          <g key={`y${t}`}>
            <line x1={padL} y1={yS(t)} x2={padL + plotW} y2={yS(t)} className={styles.gridLine} opacity={t === 0 ? 1 : 0.5} />
            <text className={styles.tickLabel} x={padL - 8} y={yS(t) + 3} textAnchor="end">
              {t.toFixed(2)}
            </text>
          </g>
        ))}
        {/* x ticks */}
        {xTicks.map((t) => (
          <text key={`x${t}`} className={styles.tickLabel} x={xS(t)} y={padT + plotH + 18} textAnchor="middle">
            {t}
          </text>
        ))}

        {/* stock floor */}
        <line x1={padL} y1={yS(stock)} x2={padL + plotW} y2={yS(stock)} stroke="var(--ink-muted)" strokeWidth={2} strokeDasharray="5 5" />

        {/* switch rule at 80 */}
        <line x1={switchX} y1={padT} x2={switchX} y2={padT + plotH} stroke="var(--hanko)" strokeWidth={1} strokeDasharray="3 4" />
        <text className={styles.annot} x={switchX + 6} y={padT + 14} fill="var(--hanko)">
          80 corrections: start training
        </text>

        {/* lookup then training (training on top) */}
        <polyline points={toPts(lookup)} fill="none" stroke="var(--human-ink)" strokeWidth={2.5} />
        <polyline points={toPts(training)} fill="none" stroke="var(--twin-ink)" strokeWidth={2.5} />

        {/* endpoint markers + values */}
        <circle cx={xS(120)} cy={yS(0.91)} r={4.5} fill="var(--twin-ink)" />
        <text className={styles.annot} x={xS(120)} y={yS(0.91) - 10} textAnchor="end" fill="var(--twin-ink)">
          0.91
        </text>
        <circle cx={xS(120)} cy={yS(0.68)} r={4.5} fill="var(--human-ink)" />
        <text className={styles.annot} x={xS(120)} y={yS(0.68) + 18} textAnchor="end" fill="var(--human-ink)">
          0.68
        </text>
        <text className={styles.annot} x={padL + 6} y={yS(stock) - 8} fill="var(--ink-muted)">
          stock 0.35
        </text>

        <text className={styles.axisLabel} x={padL} y={H - 8}>
          corrections given
        </text>
      </svg>
    </Frame>
  );
}
