import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  {
    num: "01",
    title: "Sub-Second Computation",
    desc: "Decodes questions and computes answers in under 0.5 seconds. Never run out of time on 60-minute countdown test portals.",
    metric: "< 0.5s",
    metricLabel: "Average decision time",
  },
  {
    num: "02",
    title: "Negative Marking Shield",
    desc: "With university portals imposing -2 marks for wrong answers, guessing is lethal. Honest calculates with extreme precision so your score only climbs.",
    metric: "99%+",
    metricLabel: "Pattern match accuracy",
  },
  {
    num: "03",
    title: "Undetectable Overlay",
    desc: 'Operates as an ultra-compact desktop HUD that never injects into browser DOM, active exam tabs, or screen recording tools. "Teacher could not see it."',
    metric: "F10",
    metricLabel: "Instant ghost key",
  },
  {
    num: "04",
    title: "Dual Operation Modes",
    desc: "Use F8 for full hands-free automation (analyze, select answer, and advance) or F9 for quiet advisory mode where you click yourself.",
    metric: "F8 / F9",
    metricLabel: "Full or advisory mode",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-5xl px-4 py-10 sm:py-14 scroll-mt-20">
      <div className="mb-8 text-center">
        <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Built For Results
        </p>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Zero noise. Maximum marks.
        </h2>
        <p className="mx-auto max-w-lg text-sm text-muted-foreground">
          Engineered for students who want high accuracy without stress, complex setups, or risk of getting caught.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {features.map((f) => (
          <Card
            key={f.title}
            className="group relative overflow-hidden border-border/70 bg-card/70 p-6"
          >
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-muted-foreground">
                  {f.num}
                </span>
                <span className="size-1.5 rounded-full bg-border" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                {f.title}
              </h3>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                {f.desc}
              </p>
              <div className="flex items-baseline gap-2.5 border-t border-border/50 pt-4">
                <span className="font-mono text-xl font-black text-foreground">
                  {f.metric}
                </span>
                <span className="text-xs text-muted-foreground">
                  {f.metricLabel}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
