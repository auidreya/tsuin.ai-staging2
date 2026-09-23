// Server Component: the dark "twin side" terminal. No header or footer. The chat
// answers are shown in their final state (the legacy forced them when dark).
import { STRIPE_PREORDER_URL } from "@/lib/site";
import styles from "../home.module.css";
import { A1, A2 } from "./demo-copy";

const PS1 = "from.audrey's@desk ~ % ";
const TWIN_ANSWER = "from.ada's@desk ~ % tsuin Twin answer";

type Row = { key: string; value: React.ReactNode; wrap: boolean };

const SPEC: Row[] = [
  { key: "twin model", value: "Shibasuke 1.0", wrap: true },
  { key: "trained by", value: "David Fu, Chief AI Officer of tsuin.ai", wrap: true },
  { key: "method", value: "RLPF: Reinforcement Learning from Personal Feedback", wrap: true },
  { key: "runs on", value: "hosting locally", wrap: true },
  { key: "data storage", value: "with your twin", wrap: true },
  { key: "licence", value: "your name", wrap: false },
  {
    key: "min. requirements",
    value: (
      <>
        16GB GPU VRAM (NVIDIA)
        <br />
        16GB CPU RAM
        <br />
        32GB available storage
      </>
    ),
    wrap: false,
  },
];

const OWN = [
  { num: "01", text: "runs on your machine — local, on-premise for solo plan" },
  {
    num: "02",
    text: "no LLM API required — your work is not somebody's training set, your Twin can drive claude code or any other AI tool, if you ask it",
  },
  { num: "03", text: "own your intelligence — reasoning and decisions stored in your own Twin model" },
  {
    num: "04",
    text: "more to come — the only subscription is the cloud version for twin-to-twin communication (release date TBC)",
  },
];

const PRICE: Row[] = [
  {
    key: "solo plan",
    value: (
      <>
        USD500 <span className={styles.muted}>— one time, no subscription</span>
      </>
    ),
    wrap: true,
  },
  { key: "terms", value: "pre-order solo plan, lifetime access · launching on steam", wrap: true },
];

function KeyValues({ rows }: { rows: Row[] }) {
  return (
    <div className={styles.kv}>
      {rows.map((r) => (
        <div key={r.key} className={r.wrap ? `${styles.kvRow} ${styles.kvWrap}` : styles.kvRow}>
          <span className={styles.kvKey}>{r.key}</span>
          <span>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

export function TwinView() {
  return (
    <main className={styles.twin}>
      <div className={styles.term}>
        <div className={styles.muted}>
          tsuin twin model shibasuke 1.0 (シバスケ) · local · running on 16GB GPU VRAM (NVIDIA)
        </div>

        <div>
          <div className={styles.prompt}>{PS1}tsuin --why</div>
          <div className={styles.out}>
            {
              "Most of what you know was never written down. Right now it leaks into someone else's model — one that gets smarter about everyone and never becomes yours.\nYour twin learns you instead. You train it. You own it."
            }
          </div>
        </div>

        <div>
          <div className={styles.prompt}>{PS1}tsuin spec</div>
          <KeyValues rows={SPEC} />
        </div>

        <div>
          <div className={styles.prompt}>
            {PS1}tsuin ask &quot;why do we shed requests past the queue cap instead of buffering?&quot;
          </div>
          <div className={styles.twinPrompt}>{TWIN_ANSWER}</div>
          <div className={styles.answer}>
            <div className={styles.pre}>{A1}</div>
            <div className={styles.warn}>not yet · no sources</div>
          </div>
        </div>

        <div>
          <div className={styles.prompt}>
            {PS1}tsuin train &quot;a buffered request is a promise already broken — shed early, keep the queue worth
            answering&quot;
          </div>
          <div className={styles.twinPrompt}>{TWIN_ANSWER}</div>
          <div className={styles.answer}>
            <div className={styles.pre}>{A2}</div>
            <div className={styles.ok}>✓ trained · filed to your twin</div>
          </div>
        </div>

        <div>
          <div className={styles.prompt}>{PS1}tsuin own</div>
          <div className={styles.kv}>
            {OWN.map((o) => (
              <div key={o.num} className={styles.kvRow}>
                <span className={styles.muted}>{o.num}</span>
                <span>{o.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.prompt}>{PS1}tsuin price</div>
          <KeyValues rows={PRICE} />
        </div>

        <div>
          <div className={styles.prompt}>{PS1}cat founder.txt</div>
          <div className={styles.out}>
            {
              "\"The best developer is not the one who codes the fastest, but the one who thinks the deepest.\"\nGood ideas are difficult to come by, and you're looking at one right now."
            }
          </div>
          <div className={styles.signoff}>— Audrey Aui Yong, CEO, tsuin.ai&nbsp;</div>
        </div>

        <div>
          <div className={styles.prompt}>{PS1}tsuin preorder</div>
          <div className={`${styles.out} ${styles.preorderOut}`}>
            Checkout runs on Stripe: <a href={STRIPE_PREORDER_URL}>tsuin.ai/pricing</a>
            {"\nSolo plan, USD500 one time — lifetime access."}
          </div>
        </div>

        <div>
          <div className={styles.prompt}>{PS1}tsuin waitlist --email you@yourdomain.dev</div>
          <div className={styles.out}>Not sure yet? Join our waitlist to learn more about our Tsuin Research.</div>
        </div>

        <div className={styles.prompt}>
          {PS1}
          <span className={styles.cursor}>_</span>
        </div>

        <div className={styles.twinFoot}>
          tsuin.ai · launching on Steam soon · switch to the human&apos;s side any time
        </div>
      </div>
    </main>
  );
}
