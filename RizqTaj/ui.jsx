/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   LOGO MARK — Rizq sparkle (four-pointed star with concave sides)
   ============================================================ */
function RizqMark({ size = 28, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path
        d="M50 4 C 52 30 70 48 96 50 C 70 52 52 70 50 96 C 48 70 30 52 4 50 C 30 48 48 30 50 4 Z"
        fill={color}
      />
    </svg>
  );
}

function RizqLogo({ tone = "ink" }) {
  const mark = tone === "light" ? "var(--brand)" : "var(--bg-deep)";
  const text = tone === "light" ? "var(--inverse)" : "var(--ink)";
  return (
    <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <RizqMark size={26} color={mark} />
      <span style={{
        fontFamily: "var(--f-sans)",
        fontWeight: 800,
        fontSize: 22,
        letterSpacing: "-0.04em",
        color: text,
      }}>Rizq</span>
    </a>
  );
}

/* ============================================================
   ICONS — minimal stroke set
   ============================================================ */
const Icon = {
  arrow: (p) => <svg viewBox="0 0 24 24" width={p?.size||16} height={p?.size||16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  check: (p) => <svg viewBox="0 0 24 24" width={p?.size||18} height={p?.size||18} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>,
  shield: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>,
  bolt: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/></svg>,
  heart: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.35-9.5-9.2C.7 8.2 3 5 6.2 5c1.9 0 3.4 1 4.3 2.4l1.5 2.1 1.5-2.1C14.4 6 15.9 5 17.8 5 21 5 23.3 8.2 21.5 11.8 19 16.65 12 21 12 21z"/></svg>,
  wallet: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18"/><circle cx="17" cy="15" r="1.4"/></svg>,
  users: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="17" cy="9" r="2.5"/><path d="M22 19c0-2.5-2-4.5-4.5-4.5"/></svg>,
  chart: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16"/><rect x="6" y="11" width="3" height="6"/><rect x="11" y="7" width="3" height="10"/><rect x="16" y="13" width="3" height="4"/></svg>,
  clock: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  smile: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14c1.2 1.5 2.5 2.2 4 2.2s2.8-.7 4-2.2"/><circle cx="9" cy="10" r="0.6" fill="currentColor"/><circle cx="15" cy="10" r="0.6" fill="currentColor"/></svg>,
  building: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"/></svg>,
  link: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14a4 4 0 015.66 0l3-3a4 4 0 00-5.66-5.66L11 7"/><path d="M14 10a4 4 0 01-5.66 0l-3 3a4 4 0 005.66 5.66L13 17"/></svg>,
  bank: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-6 9 6"/><path d="M5 10v8M19 10v8M9 10v8M15 10v8"/><path d="M3 20h18"/></svg>,
  lock: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>,
  alert: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l10 18H2L12 3z"/><path d="M12 10v5M12 18v.5"/></svg>,
  ban: () => <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/></svg>,
  spark: (p) => <svg viewBox="0 0 24 24" width={p?.size||18} height={p?.size||18} fill="currentColor" aria-hidden="true"><path d="M12 1 c.4 5 3.6 8.1 8.6 8.6 -5 .4 -8.2 3.6 -8.6 8.6 -.4 -5 -3.6 -8.2 -8.6 -8.6 5 -.4 8.2 -3.6 8.6 -8.6z"/></svg>,
  chevron: (p) => <svg viewBox="0 0 24 24" width={p?.size||18} height={p?.size||18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>,
};

/* ============================================================
   PLACEHOLDER — striped image placeholder with mono label
   ============================================================ */
function Placeholder({ label, h = 160, tone = "sand" }) {
  const bg = tone === "dark" ? "oklch(0.30 0.04 158)" : "oklch(0.91 0.02 80)";
  const fg = tone === "dark" ? "oklch(0.25 0.04 158)" : "oklch(0.86 0.022 80)";
  const text = tone === "dark" ? "oklch(0.7 0.02 85)" : "oklch(0.45 0.015 100)";
  return (
    <div style={{
      position: "relative",
      height: h,
      borderRadius: 16,
      overflow: "hidden",
      background: `repeating-linear-gradient(135deg, ${bg} 0 14px, ${fg} 14px 16px)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <span style={{
        fontFamily: "var(--f-mono)",
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: text,
        background: tone === "dark" ? "oklch(0.20 0.04 158)" : "oklch(0.97 0.014 85)",
        padding: "6px 10px",
        borderRadius: 6,
      }}>{label}</span>
    </div>
  );
}

/* ============================================================
   PHONE — employee app mockup, animated multi-screen demo
   ============================================================ */
function PhoneMock({ scale = 1, hideHint = false }) {
  // 0: home, 1: withdraw, 2: card + ujra, 3: transfer (processing), 4: success
  const [screen, setScreen] = React.useState(0);
  const [amount, setAmount] = React.useState(500000);
  const [interacted, setInteracted] = React.useState(false);
  const balanceMax = 1720000;

  // Auto-advance only on "Перевод" (processing) — simulates bank handoff.
  React.useEffect(() => {
    if (screen !== 3) return;
    const id = setTimeout(() => setScreen(4), 2200);
    return () => clearTimeout(id);
  }, [screen]);

  const go = (n) => { setScreen(n); setInteracted(true); };
  const reset = () => { setScreen(0); setAmount(500000); setInteracted(false); };

  const SCREEN_LABELS = ["Главная", "Вывод", "Карта + комиссия", "Перевод", "Успех"];

  return (
    <div style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      {/* "Try it" hint above phone — visible until interaction */}
      {!hideHint && (
      <div className="rizq-try-hint" style={{
        position: "absolute",
        bottom: `calc(100% + ${20 * scale}px)`,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6 * scale,
        opacity: interacted ? 0 : 1,
        transition: "opacity .4s",
        pointerEvents: "none",
        zIndex: 4,
        whiteSpace: "nowrap",
      }}>
        <div style={{
          fontFamily: "var(--f-display)",
          fontStyle: "italic",
          fontSize: 22 * scale,
          color: "var(--ink)",
          letterSpacing: "-0.01em",
          display: "flex",
          alignItems: "center",
          gap: 8 * scale,
        }}>
          <span>смотри, как работает</span>
          <span style={{
            fontFamily: "var(--f-sans)",
            fontWeight: 700,
            fontSize: 15 * scale,
            color: "var(--brand-2)",
            background: "oklch(0.94 0.04 145)",
            padding: `${3 * scale}px ${8 * scale}px`,
            borderRadius: 999,
            border: "1px solid var(--brand)",
          }}>попробуй сам</span>
        </div>
        {/* squiggle arrow pointing down */}
        <svg width={72 * scale} height={62 * scale} viewBox="0 0 72 62" fill="none" style={{ color: "var(--ink-2)" }} aria-hidden="true">
          <path d="M8 4 C 16 22, 28 30, 36 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 6" />
          <path d="M28 38 C 36 42, 46 40, 56 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 6" />
          <path d="M56 28 L 50 54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 44 L 50 56 L 60 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
      )}

      {/* Reset chip — shown after interaction */}
      <button
        onClick={reset}
        className="rizq-reset-chip"
        style={{
          position: "absolute",
          bottom: `calc(100% + ${18 * scale}px)`,
          left: "50%",
          transform: "translateX(-50%)",
          padding: `${8 * scale}px ${14 * scale}px`,
          borderRadius: 999,
          border: "1px solid var(--line-2)",
          background: "var(--card)",
          color: "var(--ink)",
          fontSize: 13 * scale,
          fontWeight: 600,
          cursor: "pointer",
          display: interacted ? "inline-flex" : "none",
          alignItems: "center",
          gap: 8 * scale,
          boxShadow: "var(--sh-soft)",
          zIndex: 4,
          whiteSpace: "nowrap",
        }}>
        <svg width={14 * scale} height={14 * scale} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 12a9 9 0 109-9 9 9 0 00-7.5 4"/><path d="M3 4v4h4"/>
        </svg>
        <span>{SCREEN_LABELS[screen]} · начать заново</span>
      </button>

      <div style={{
        width: 320 * scale,
        height: 660 * scale,
        borderRadius: 48 * scale,
        background: "oklch(0.16 0.02 155)",
        padding: 10 * scale,
        boxShadow: "0 40px 80px -20px rgba(8, 30, 22, 0.45), 0 0 0 1px oklch(0.10 0.02 155)",
        position: "relative",
      }}>
        <div style={{
          width: "100%",
          height: "100%",
          borderRadius: 40 * scale,
          background: "linear-gradient(180deg, oklch(0.96 0.012 85) 0%, oklch(0.93 0.018 85) 100%)",
          overflow: "hidden",
          position: "relative",
        }}>
          {/* status bar */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: `${14 * scale}px ${24 * scale}px 6px`,
            fontSize: 12 * scale, fontWeight: 600, color: "var(--ink)",
          }}>
            <span>9:41</span>
            <span style={{ display: "flex", gap: 4 * scale, alignItems: "center" }}>
              <span style={{ width: 16 * scale, height: 8 * scale, borderRadius: 2, border: "1px solid currentColor" }}/>
              <span>100%</span>
            </span>
          </div>

          {/* Cross-fade screen stack */}
          <div style={{ position: "relative", flex: 1, height: `calc(100% - ${(14 + 6 + 12) * scale}px)` }}>
            <PhoneScreenHome    scale={scale} visible={screen === 0} onTapWithdraw={() => go(1)}/>
            <PhoneScreenWithdraw scale={scale} visible={screen === 1} amount={amount} setAmount={setAmount} balance={balanceMax} onNext={() => go(2)} onBack={() => go(0)}/>
            <PhoneScreenCard    scale={scale} visible={screen === 2} amount={amount} onConfirm={() => go(3)} onBack={() => go(1)}/>
            <PhoneScreenTransfer scale={scale} visible={screen === 3} amount={amount}/>
            <PhoneScreenSuccess scale={scale} visible={screen === 4} amount={amount} onDone={reset}/>
          </div>

          {/* bottom nav — fixed to bottom of phone */}
          <div style={{
            position: "absolute", left: 0, right: 0, bottom: 0,
            padding: `${10 * scale}px ${16 * scale}px ${16 * scale}px`,
            background: "linear-gradient(180deg, oklch(0.96 0.012 85 / 0) 0%, oklch(0.94 0.018 85) 35%, oklch(0.93 0.018 85) 100%)",
            borderTop: "1px solid var(--line)",
            zIndex: 5,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 * scale }}>
              {[
                { l: "Главная", icon: "home" },
                { l: "История", icon: "history" },
                { l: "Карта", icon: "card" },
                { l: "Профиль", icon: "profile" },
              ].map((tab, i) => {
                const active = screen === 0 && i === 0;
                return (
                  <div key={tab.l} style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 4 * scale,
                    padding: `${6 * scale}px ${4 * scale}px`,
                    color: active ? "var(--brand-2)" : "var(--ink-3)",
                    transition: "color .3s",
                  }}>
                    <div style={{ width: 22 * scale, height: 22 * scale, display: "grid", placeItems: "center" }}>
                      {tab.icon === "home" && (
                        <svg width={20 * scale} height={20 * scale} viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 11.5L12 4l9 7.5V20a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-8.5z" fillOpacity={active ? 0.18 : 0}/>
                        </svg>
                      )}
                      {tab.icon === "history" && (
                        <svg width={20 * scale} height={20 * scale} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 12a9 9 0 109-9 9 9 0 00-7.5 4"/><path d="M3 4v4h4"/><path d="M12 7v5l3 2"/>
                        </svg>
                      )}
                      {tab.icon === "card" && (
                        <svg width={20 * scale} height={20 * scale} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>
                        </svg>
                      )}
                      {tab.icon === "profile" && (
                        <svg width={20 * scale} height={20 * scale} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/>
                        </svg>
                      )}
                    </div>
                    <div style={{ fontSize: 10 * scale, fontWeight: active ? 700 : 600 }}>{tab.l}</div>
                  </div>
                );
              })}
            </div>
            <div style={{
              margin: `${8 * scale}px auto 0`,
              width: 110 * scale, height: 4 * scale,
              borderRadius: 4,
              background: "var(--ink)",
              opacity: 0.7,
            }}/>
          </div>

          {/* progress dots — 5 screens */}
          <div style={{
            position: "absolute",
            top: 14 * scale, left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: 4 * scale,
            zIndex: 6, pointerEvents: "none",
          }}>
            {[0,1,2,3,4].map(i => (
              <span key={i} style={{
                width: i === screen ? 14 * scale : 5 * scale,
                height: 5 * scale,
                borderRadius: 999,
                background: i === screen ? "var(--brand-2)" : "var(--line-2)",
                transition: "width .35s, background .35s",
              }}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Wrapper for cross-fade screens */
function PhoneSlot({ visible, scale, children, style }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      paddingBottom: 76 * scale,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) scale(1)" : "translateY(8px) scale(.985)",
      pointerEvents: visible ? "auto" : "none",
      transition: "opacity .45s cubic-bezier(.4,.7,.2,1), transform .45s cubic-bezier(.4,.7,.2,1)",
      display: "flex",
      flexDirection: "column",
      ...style,
    }}>{children}</div>
  );
}

function PhoneScreenHome({ scale, visible, onTapWithdraw }) {
  const days = 17;
  const total = 30;
  return (
    <PhoneSlot scale={scale} visible={visible}>
      <div style={{ padding: `${10 * scale}px ${22 * scale}px 0`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 13 * scale, color: "var(--ink-3)" }}>Ассалом, Алишер</div>
          <div style={{ fontSize: 17 * scale, fontWeight: 700, letterSpacing: "-0.02em" }}>Сегодня, 14 марта</div>
        </div>
        <div style={{ width: 36 * scale, height: 36 * scale, borderRadius: "50%", background: "var(--bg-deep)", display: "grid", placeItems: "center", color: "var(--brand)" }}>
          <RizqMark size={16 * scale} color="currentColor" />
        </div>
      </div>

      <div style={{
        margin: `${16 * scale}px ${16 * scale}px ${12 * scale}px`,
        background: "var(--bg-deep)",
        color: "var(--inverse)",
        borderRadius: 22 * scale,
        padding: `${18 * scale}px ${20 * scale}px`,
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden style={{
          position: "absolute", top: -30 * scale, right: -30 * scale,
          width: 140 * scale, height: 140 * scale, color: "oklch(0.32 0.07 155)",
        }}>
          <RizqMark size={140 * scale} color="currentColor" />
        </div>
        <div style={{ fontSize: 11 * scale, color: "var(--inverse-2)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--f-mono)", position: "relative" }}>Доступно к выводу</div>
        <div style={{ marginTop: 6 * scale, display: "flex", alignItems: "baseline", gap: 6 * scale, flexWrap: "wrap", position: "relative" }}>
          <span className="rizq-num-pop" style={{ fontSize: 30 * scale, fontWeight: 700, letterSpacing: "-0.03em" }}>1 720 000</span>
          <span style={{ fontSize: 14 * scale, color: "var(--inverse-2)" }}>сум</span>
        </div>

        <div style={{ marginTop: 14 * scale, position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontSize: 12 * scale, color: "var(--inverse-2)" }}>Отработано дней</div>
            <div style={{ fontSize: 13 * scale, fontWeight: 700, color: "var(--inverse)", fontFamily: "var(--f-mono)" }}>
              <span style={{ color: "var(--brand)" }}>{days}</span> / {total}
            </div>
          </div>
          <div style={{ marginTop: 8 * scale, height: 5 * scale, borderRadius: 4, background: "oklch(0.30 0.04 158)", overflow: "hidden" }}>
            <div style={{
              width: `${(days/total)*100}%`,
              height: "100%",
              background: "var(--brand)",
              boxShadow: `0 0 ${10 * scale}px oklch(0.78 0.24 142 / 0.6)`,
              animation: "rizq-bar-grow 1.2s cubic-bezier(.4,.7,.2,1)",
            }}/>
          </div>
        </div>
      </div>

      <div style={{
        margin: `0 ${16 * scale}px ${12 * scale}px`,
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 * scale,
      }}>
        <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14 * scale, padding: `${12 * scale}px ${14 * scale}px` }}>
          <div style={{ fontSize: 10 * scale, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--f-mono)" }}>Общая зарплата</div>
          <div style={{ marginTop: 4 * scale, fontSize: 15 * scale, fontWeight: 700, letterSpacing: "-0.02em" }}>3 200 000</div>
          <div style={{ fontSize: 10 * scale, color: "var(--ink-3)" }}>сум · март</div>
        </div>
        <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 14 * scale, padding: `${12 * scale}px ${14 * scale}px` }}>
          <div style={{ fontSize: 10 * scale, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--f-mono)" }}>Уже выведено</div>
          <div style={{ marginTop: 4 * scale, fontSize: 15 * scale, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--brand-2)" }}>540 000</div>
          <div style={{ fontSize: 10 * scale, color: "var(--ink-3)" }}>2 операции</div>
        </div>
      </div>

      <div style={{ margin: `0 ${16 * scale}px ${14 * scale}px`, position: "relative" }}>
        <button
          onClick={onTapWithdraw}
          className="rizq-cta-button"
          style={{
            width: "100%",
            padding: `${13 * scale}px`,
            borderRadius: 999,
            background: "var(--brand)",
            color: "oklch(0.20 0.04 158)",
            fontWeight: 700,
            fontSize: 14 * scale,
            boxShadow: `0 ${10 * scale}px ${24 * scale}px -${8 * scale}px oklch(0.78 0.24 142 / 0.7)`,
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 * scale,
            position: "relative",
            cursor: "pointer",
            border: "none",
          }}>
          <span>Вывести деньги</span>
          <span style={{ display: "inline-flex" }}><Icon.arrow size={14 * scale}/></span>
        </button>
      </div>
    </PhoneSlot>
  );
}

function PhoneScreenWithdraw({ scale, visible, amount, setAmount, balance, onNext, onBack }) {
  const fmt = (n) => n.toLocaleString("ru-RU");
  const pct = Math.min(100, (amount / balance) * 100);
  const presets = [100000, 300000, 500000, 800000];
  return (
    <PhoneSlot scale={scale} visible={visible}>
      <div style={{ padding: `${12 * scale}px ${16 * scale}px 0`, display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 10 * scale }}>
        <button onClick={onBack} style={{
          all: "unset", cursor: "pointer",
          width: 28 * scale, height: 28 * scale,
          borderRadius: "50%",
          background: "var(--bg-sand)",
          display: "grid", placeItems: "center",
          color: "var(--ink-2)",
        }} aria-label="назад">
          <svg width={14 * scale} height={14 * scale} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div style={{ fontSize: 15 * scale, fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center" }}>Сколько вывести?</div>
        <div style={{ fontSize: 11 * scale, color: "var(--ink-3)", fontFamily: "var(--f-mono)" }}>1/3</div>
      </div>

      <div style={{
        margin: `${14 * scale}px ${16 * scale}px ${10 * scale}px`,
        background: "var(--card)",
        border: "2px solid var(--brand)",
        borderRadius: 18 * scale,
        padding: `${20 * scale}px ${18 * scale}px`,
      }}>
        <div style={{ fontSize: 10 * scale, color: "var(--ink-3)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Сумма к выводу</div>
        <div key={amount} className="rizq-amount-pop" style={{ marginTop: 4 * scale, display: "flex", alignItems: "baseline", gap: 6 * scale }}>
          <span style={{ fontSize: 30 * scale, fontWeight: 800, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>{fmt(amount)}</span>
          <span style={{ fontSize: 13 * scale, color: "var(--ink-3)" }}>сум</span>
        </div>
        <div style={{ marginTop: 10 * scale, height: 5 * scale, borderRadius: 3, background: "var(--bg-sand)", overflow: "hidden" }}>
          <div style={{
            width: `${pct}%`, height: "100%",
            background: "var(--brand)",
            transition: "width .45s cubic-bezier(.4,.7,.2,1)",
          }}/>
        </div>
        <div style={{ marginTop: 6 * scale, fontSize: 10 * scale, color: "var(--ink-3)", fontFamily: "var(--f-mono)", display: "flex", justifyContent: "space-between" }}>
          <span>0</span><span>из {fmt(balance)}</span>
        </div>
      </div>

      <div style={{ margin: `0 ${16 * scale}px ${10 * scale}px`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 * scale }}>
        {presets.map((p) => (
          <button key={p}
            onClick={() => setAmount(p)}
            style={{
              all: "unset",
              cursor: "pointer",
              padding: `${8 * scale}px 0`,
              background: amount === p ? "var(--bg-deep)" : "var(--bg-sand)",
              color: amount === p ? "var(--brand)" : "var(--ink-2)",
              borderRadius: 10 * scale,
              fontSize: 11 * scale,
              fontWeight: 700,
              textAlign: "center",
              transition: "all .25s",
              transform: amount === p ? "scale(1.06)" : "scale(1)",
              fontFamily: "var(--f-mono)",
            }}>{p / 1000}К</button>
        ))}
      </div>

      <div style={{ margin: `auto ${16 * scale}px ${14 * scale}px` }}>
        <button onClick={onNext} className="rizq-cta-button" style={{
          all: "unset",
          cursor: "pointer",
          width: `calc(100% - ${4 * scale}px)`,
          boxSizing: "border-box",
          padding: `${13 * scale}px`,
          borderRadius: 999,
          background: "var(--brand)", color: "var(--brand-ink)",
          fontWeight: 700, fontSize: 14 * scale,
          boxShadow: `0 ${10 * scale}px ${24 * scale}px -${8 * scale}px oklch(0.78 0.24 142 / 0.7)`,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6 * scale,
        }}>
          Далее <Icon.arrow size={14 * scale}/>
        </button>
      </div>
    </PhoneSlot>
  );
}

function PhoneScreenCard({ scale, visible, amount, onConfirm, onBack }) {
  const fmt = (n) => n.toLocaleString("ru-RU");
  const fee = Math.round(amount * 0.025);
  const net = amount - fee;
  const [card, setCard] = React.useState("humo");
  const cards = [
    { id: "humo", brand: "Humo", num: "**** 4821", bg: "linear-gradient(135deg, oklch(0.55 0.20 28) 0%, oklch(0.35 0.12 28) 100%)" },
    { id: "uzcard", brand: "Uzcard", num: "**** 1908", bg: "linear-gradient(135deg, oklch(0.45 0.16 250) 0%, oklch(0.30 0.10 250) 100%)" },
  ];
  return (
    <PhoneSlot scale={scale} visible={visible}>
      <div style={{ padding: `${12 * scale}px ${16 * scale}px 0`, display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 10 * scale }}>
        <button onClick={onBack} style={{
          all: "unset", cursor: "pointer",
          width: 28 * scale, height: 28 * scale,
          borderRadius: "50%",
          background: "var(--bg-sand)",
          display: "grid", placeItems: "center",
          color: "var(--ink-2)",
        }} aria-label="назад">
          <svg width={14 * scale} height={14 * scale} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div style={{ fontSize: 15 * scale, fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center" }}>Карта и комиссия</div>
        <div style={{ fontSize: 11 * scale, color: "var(--ink-3)", fontFamily: "var(--f-mono)" }}>2/3</div>
      </div>

      {/* card picker */}
      <div style={{
        margin: `${12 * scale}px ${16 * scale}px ${10 * scale}px`,
        display: "flex", flexDirection: "column", gap: 6 * scale,
      }}>
        <div style={{ fontSize: 10 * scale, color: "var(--ink-3)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>На какую карту</div>
        {cards.map((c) => {
          const sel = card === c.id;
          return (
            <button key={c.id} onClick={() => setCard(c.id)} style={{
              all: "unset", cursor: "pointer",
              display: "grid",
              gridTemplateColumns: `${44 * scale}px 1fr auto`,
              gap: 10 * scale, alignItems: "center",
              padding: `${10 * scale}px ${12 * scale}px`,
              background: sel ? "var(--bg-deep)" : "var(--card)",
              border: sel ? "1.5px solid var(--brand)" : "1px solid var(--line)",
              color: sel ? "var(--inverse)" : "var(--ink)",
              borderRadius: 12 * scale,
              transition: "all .25s",
            }}>
              <div style={{
                width: 44 * scale, height: 30 * scale, borderRadius: 6,
                background: c.bg, color: "white",
                display: "grid", placeItems: "center",
                fontSize: 9 * scale, fontWeight: 800, fontFamily: "var(--f-mono)",
                letterSpacing: "0.04em",
              }}>{c.brand.toUpperCase().slice(0,4)}</div>
              <div>
                <div style={{ fontSize: 13 * scale, fontWeight: 700 }}>{c.brand}</div>
                <div style={{ fontSize: 11 * scale, color: sel ? "var(--inverse-2)" : "var(--ink-3)", fontFamily: "var(--f-mono)" }}>{c.num}</div>
              </div>
              <div style={{
                width: 16 * scale, height: 16 * scale, borderRadius: "50%",
                border: sel ? "5px solid var(--brand)" : "2px solid var(--line-2)",
                background: sel ? "var(--brand-ink)" : "transparent",
                transition: "all .25s",
              }}/>
            </button>
          );
        })}
      </div>

      {/* breakdown */}
      <div style={{
        margin: `0 ${16 * scale}px ${10 * scale}px`,
        padding: `${12 * scale}px ${14 * scale}px`,
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 12 * scale,
        display: "flex", flexDirection: "column", gap: 8 * scale,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 * scale, color: "var(--ink-2)" }}>
          <span>Запрошено</span>
          <span style={{ fontWeight: 700, color: "var(--ink)" }}>{fmt(amount)} сум</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 * scale }}>
          <span style={{ color: "var(--ink-2)", display: "inline-flex", alignItems: "center", gap: 4 * scale }}>
            <span style={{ fontFamily: "var(--f-mono)", fontWeight: 700, padding: `${1 * scale}px ${5 * scale}px`, background: "oklch(0.94 0.04 145)", color: "oklch(0.30 0.06 158)", borderRadius: 4, fontSize: 10 * scale }}>2,5%</span>
            ujra
          </span>
          <span style={{ fontWeight: 700, color: "oklch(0.30 0.06 158)" }}>− {fmt(fee)} сум</span>
        </div>
        <div style={{ height: 1, background: "var(--line)" }}/>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: 11 * scale, color: "var(--ink-3)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>К зачислению</span>
          <span style={{ fontSize: 18 * scale, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--bg-deep)", fontVariantNumeric: "tabular-nums" }}>{fmt(net)} сум</span>
        </div>
      </div>

      <div style={{ margin: `auto ${16 * scale}px ${14 * scale}px` }}>
        <button onClick={onConfirm} className="rizq-cta-button" style={{
          all: "unset",
          cursor: "pointer",
          width: `calc(100% - ${4 * scale}px)`,
          boxSizing: "border-box",
          padding: `${13 * scale}px`,
          borderRadius: 999,
          background: "var(--brand)", color: "var(--brand-ink)",
          fontWeight: 700, fontSize: 14 * scale,
          boxShadow: `0 ${10 * scale}px ${24 * scale}px -${8 * scale}px oklch(0.78 0.24 142 / 0.7)`,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6 * scale,
        }}>
          Подтвердить перевод <Icon.arrow size={14 * scale}/>
        </button>
      </div>
    </PhoneSlot>
  );
}

function PhoneScreenTransfer({ scale, visible, amount }) {
  const fmt = (n) => n.toLocaleString("ru-RU");
  const net = amount - Math.round(amount * 0.025);
  return (
    <PhoneSlot scale={scale} visible={visible}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 18 * scale, padding: `0 ${22 * scale}px` }}>
        <div style={{
          width: 92 * scale, height: 92 * scale,
          borderRadius: "50%",
          border: `4px solid oklch(0.85 0.04 90)`,
          borderTopColor: "var(--brand)",
          animation: visible ? "rizq-spin 0.9s linear infinite" : "none",
        }}/>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 16 * scale, fontWeight: 700 }}>Перевод в банк</div>
          <div style={{ marginTop: 6 * scale, fontSize: 12 * scale, color: "var(--ink-3)", fontFamily: "var(--f-mono)" }}>обработка платежа…</div>
        </div>
        <div style={{
          padding: `${10 * scale}px ${14 * scale}px`,
          background: "var(--bg-sand)",
          borderRadius: 12 * scale,
          display: "flex", flexDirection: "column", gap: 4 * scale, alignItems: "center",
          minWidth: 200 * scale,
        }}>
          <div style={{ fontSize: 10 * scale, color: "var(--ink-3)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>К зачислению</div>
          <div style={{ fontSize: 20 * scale, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--bg-deep)" }}>{fmt(net)} сум</div>
        </div>
        <div style={{ display: "flex", gap: 6 * scale, alignItems: "center" }}>
          {["запрос", "ujra", "банк", "карта"].map((s, i) => (
            <React.Fragment key={s}>
              <div style={{
                width: 8 * scale, height: 8 * scale, borderRadius: "50%",
                background: i <= 2 ? "var(--brand)" : "var(--line)",
                boxShadow: i === 2 ? `0 0 0 ${4 * scale}px oklch(0.78 0.24 142 / 0.25)` : "none",
                animation: i === 2 ? "rizq-pulse-dot 1s ease-in-out infinite" : "none",
              }}/>
              {i < 3 && <div style={{ width: 16 * scale, height: 1, background: i < 2 ? "var(--brand-2)" : "var(--line)" }}/>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </PhoneSlot>
  );
}

function PhoneScreenSuccess({ scale, visible, amount, onDone }) {
  const fmt = (n) => n.toLocaleString("ru-RU");
  const net = amount - Math.round(amount * 0.025);
  return (
    <PhoneSlot scale={scale} visible={visible}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 16 * scale, padding: `0 ${22 * scale}px` }}>
        <div style={{
          width: 92 * scale, height: 92 * scale,
          borderRadius: "50%",
          background: "var(--brand)",
          color: "var(--brand-ink)",
          display: "grid", placeItems: "center",
          fontSize: 44 * scale,
          fontWeight: 800,
          boxShadow: `0 ${16 * scale}px ${32 * scale}px -${8 * scale}px oklch(0.55 0.20 142 / 0.55), 0 0 0 ${10 * scale}px oklch(0.78 0.24 142 / 0.15)`,
          animation: visible ? "rizq-pop-in .55s cubic-bezier(.34,1.56,.64,1)" : "none",
        }}>✓</div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 22 * scale, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--bg-deep)" }}>{fmt(net)} сум</div>
          <div style={{ marginTop: 4 * scale, fontSize: 13 * scale, fontWeight: 600, color: "var(--brand-2)" }}>зачислено на карту</div>
          <div style={{ marginTop: 10 * scale, fontSize: 12 * scale, color: "var(--ink-3)", fontFamily: "var(--f-mono)" }}>Humo · **** 4821 · 42 сек</div>
        </div>
        <div style={{
          padding: `${8 * scale}px ${14 * scale}px`,
          background: "var(--bg-sand)",
          borderRadius: 999,
          fontSize: 11 * scale,
          color: "var(--ink-2)",
          fontFamily: "var(--f-mono)",
          textAlign: "center",
        }}>
          Без процентов
        </div>
        <button onClick={onDone} style={{
          all: "unset",
          cursor: "pointer",
          padding: `${11 * scale}px ${20 * scale}px`,
          borderRadius: 999,
          background: "var(--bg-deep)", color: "var(--inverse)",
          fontWeight: 700, fontSize: 13 * scale,
          display: "inline-flex", alignItems: "center", gap: 6 * scale,
        }}>
          Готово
        </button>
      </div>
    </PhoneSlot>
  );
}

/* ============================================================
   Reusable BTN
   ============================================================ */
function Btn({ kind = "primary", href, children, withArrow = false, ...rest }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag className={`btn btn--${kind}`} href={href} {...rest}>
      {children}
      {withArrow && <span className="arrow"><Icon.arrow size={16}/></span>}
    </Tag>
  );
}

/* ============================================================
   Reveal — fade-in on mount (with stagger via delay prop)
   ============================================================ */
function Reveal({ children, delay = 0, style, ...rest }) {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShown(true), 30);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`reveal ${shown ? "in" : ""}`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms", ...(style || {}) }}
      {...rest}
    >{children}</div>
  );
}

/* ============================================================
   AnimatedNumber — counts up when in view
   ============================================================ */
function AnimatedNumber({ value, duration = 1400, format = (n) => n.toLocaleString("ru-RU") }) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const start = () => {
      const t0 = performance.now();
      const target = value;
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - k, 3);
        setN(Math.round(target * eased));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (typeof IntersectionObserver === "undefined") { setN(value); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { start(); io.disconnect(); } });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [value, duration]);
  return <span ref={ref}>{format(n)}</span>;
}

/* ============================================================
   Marquee — infinite logo strip
   ============================================================ */
function Marquee({ children }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {children}
        {children}
      </div>
    </div>
  );
}

/* ============================================================
   EyebrowPill — premium status indicator
   ============================================================ */
function EyebrowPill({ children, dark = false }) {
  return (
    <span className={`eyebrow-pill ${dark ? "eyebrow-pill--dark" : ""}`}>
      <span className="dot"/>
      {children}
    </span>
  );
}

/* Export to window */
Object.assign(window, { RizqMark, RizqLogo, Icon, Placeholder, PhoneMock, Btn, Reveal, AnimatedNumber, Marquee, EyebrowPill });
