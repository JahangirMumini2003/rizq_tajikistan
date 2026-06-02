/* === Rizq bundled app — single Babel pass === */

/* ====== ui.jsx ====== */
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


/* ====== mockups.jsx ====== */
/* mockups.jsx — animated interface mockups for 8 steps */
/* global React, RizqMark, Icon */

const { useState: useMState, useEffect: useMEffect, useRef: useMRef } = React;

const screenBase = {
  background: "var(--card)",
  border: "1px solid var(--line)",
  borderRadius: 14,
  overflow: "hidden",
  fontFamily: "var(--f-sans)",
};

function ScreenChrome({ title, right, dark = false, children, height = 300 }) {
  return (
    <div style={{
      ...screenBase,
      background: dark ? "oklch(0.15 0.025 158)" : "var(--card)",
      border: dark ? "1px solid oklch(0.28 0.04 158)" : "1px solid var(--line)",
      color: dark ? "var(--inverse)" : "var(--ink)",
      height,
      display: "flex",
      flexDirection: "column",
      boxShadow: "var(--sh-soft)",
    }}>
      <div style={{
        padding: "10px 14px",
        borderBottom: dark ? "1px solid oklch(0.28 0.04 158)" : "1px solid var(--line)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 11,
        fontFamily: "var(--f-mono)",
        color: dark ? "var(--inverse-2)" : "var(--ink-3)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        background: dark ? "oklch(0.13 0.025 158)" : "var(--bg-sand)",
      }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: dark ? "var(--brand)" : "var(--brand-2)",
            boxShadow: dark ? "0 0 0 3px oklch(0.78 0.24 142 / 0.20)" : "none",
            animation: "tickerDot 1.6s ease-in-out infinite",
          }}/>
          {title}
        </div>
        <div>{right}</div>
      </div>
      <div style={{ padding: 14, flex: 1, overflow: "hidden", position: "relative" }}>{children}</div>
      <style>{`
        @keyframes tickerDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}

/* Tiny hook to loop a sequence */
function useLoop(steps, interval = 1400) {
  const [i, setI] = useMState(0);
  useMEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % steps), interval);
    return () => clearInterval(id);
  }, [steps, interval]);
  return i;
}

/* Animated counter */
function useCounter(from, to, durMs = 1200, trigger = 0) {
  const [v, setV] = useMState(from);
  useMEffect(() => {
    let raf;
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / durMs);
      const e = 1 - Math.pow(1 - k, 3);
      setV(Math.round(from + (to - from) * e));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [from, to, durMs, trigger]);
  return v;
}

const fmt = (n) => n.toLocaleString("ru-RU");

/* ============================================================
   Step 1 — Company onboarding with typing animation
   ============================================================ */
function Screen1() {
  const fields = [
    ["Название", "ООО «Машина»"],
    ["ИНН", "300 123 456"],
    ["Сотрудников", "1 200"],
  ];
  const phase = useLoop(5, 900); // 0..2 type each line, 3 sign, 4 done

  return (
    <ScreenChrome title="Подключение" right="rizq.uz/onboarding">
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>Регистрация компании</div>
        {fields.map(([l, v], i) => {
          const active = phase === i;
          const filled = phase > i;
          const txt = filled ? v : active ? v.slice(0, Math.min(v.length, Math.floor(((Date.now() % 900) / 900) * v.length) + 1)) : "";
          return (
            <div key={l} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "8px 10px",
              background: active ? "oklch(0.94 0.04 145)" : "var(--bg-sand)",
              border: active ? "1px solid var(--brand)" : "1px solid transparent",
              borderRadius: 8,
              fontSize: 12,
              transition: "all .3s",
            }}>
              <span style={{ color: "var(--ink-3)" }}>{l}</span>
              <span style={{ fontWeight: 600, fontFamily: filled || active ? "var(--f-sans)" : "var(--f-mono)" }}>
                {filled ? v : active ? <TypeIt text={v}/> : "—"}
              </span>
            </div>
          );
        })}
        <button style={{
          marginTop: 4,
          padding: "11px 12px",
          borderRadius: 999,
          background: phase >= 3 ? "var(--brand)" : "var(--bg-sand)",
          color: phase >= 3 ? "var(--brand-ink)" : "var(--ink-3)",
          fontSize: 12,
          fontWeight: 700,
          textAlign: "center",
          transition: "all .35s",
          transform: phase === 3 ? "scale(1.02)" : "scale(1)",
          boxShadow: phase >= 3 ? "var(--sh-glow)" : "none",
          border: "none",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}>
          {phase >= 4 ? <>✓ Соглашение подписано</> : <>Подписать соглашение →</>}
        </button>
      </div>
    </ScreenChrome>
  );
}

function TypeIt({ text }) {
  const [n, setN] = useMState(0);
  useMEffect(() => {
    setN(0);
    const id = setInterval(() => setN((x) => x + 1), 40);
    return () => clearInterval(id);
  }, [text]);
  return (
    <span>
      {text.slice(0, Math.min(text.length, n))}
      <span style={{
        display: "inline-block",
        width: 1.5,
        height: "1em",
        background: "var(--brand-2)",
        marginLeft: 1,
        verticalAlign: "middle",
        animation: "blink 1s steps(2) infinite",
      }}/>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}

/* ============================================================
   Step 2 — Integrations connecting one by one
   ============================================================ */
function Screen2() {
  const integ = [
    { n: "1С: ЗУП", glyph: "1С" },
    { n: "Bitrix24", glyph: "B24" },
    { n: "Tabel.uz", glyph: "T" },
    { n: "CSV", glyph: "C" },
  ];
  const phase = useLoop(integ.length + 1, 1100); // 0..3 connecting, 4 done

  const statusFor = (i) => {
    if (phase > i) return "ok";
    if (phase === i) return "linking";
    return "idle";
  };

  return (
    <ScreenChrome title="Интеграции" right={`${Math.min(phase, integ.length)}/${integ.length}`}>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {integ.map((it, i) => {
          const s = statusFor(i);
          return (
            <div key={it.n} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "9px 11px",
              background: s === "linking" ? "oklch(0.94 0.04 145)" : "var(--bg-sand)",
              border: s === "linking" ? "1px solid var(--brand)" : "1px solid transparent",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              transition: "all .35s",
              position: "relative",
              overflow: "hidden",
            }}>
              {s === "linking" && (
                <div aria-hidden style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(90deg, transparent 0%, oklch(0.78 0.24 142 / 0.25) 50%, transparent 100%)",
                  animation: "shimmer 1.1s linear",
                }}/>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 8, position: "relative" }}>
                <span style={{
                  width: 22, height: 22, borderRadius: 6,
                  background: s === "ok" ? "var(--brand)" : "var(--card)",
                  color: s === "ok" ? "var(--brand-ink)" : "var(--ink)",
                  border: s === "ok" ? "none" : "1px solid var(--line)",
                  display: "grid", placeItems: "center",
                  fontSize: 9, fontFamily: "var(--f-mono)", fontWeight: 700,
                  transition: "all .3s",
                }}>{s === "ok" ? "✓" : it.glyph}</span>
                {it.n}
              </div>
              <span style={{
                fontFamily: "var(--f-mono)", fontSize: 10,
                color: s === "ok" ? "var(--brand-2)" : s === "linking" ? "var(--ink-2)" : "var(--ink-3)",
                padding: "3px 8px",
                borderRadius: 4,
                background: s === "ok" ? "oklch(0.94 0.04 145)" : "var(--card)",
                border: s === "ok" ? "none" : "1px solid var(--line)",
                position: "relative",
              }}>
                {s === "ok" ? "● ВКЛ" : s === "linking" ? "Подключаем…" : "○ Ожидание"}
              </span>
            </div>
          );
        })}
      </div>
      <style>{`@keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }`}</style>
    </ScreenChrome>
  );
}

/* ============================================================
   Step 3 — Attendance: clock in/out, leave, sick
   ============================================================ */
function Screen3() {
  const tick = useLoop(60, 1100);
  const [pinned, setPinned] = useMState(null);
  const rows = [
    { n: "Алиев А.", s: "in",     t: "08:02", note: "в смене" },
    { n: "Каримова Г.", s: "in",  t: "08:14", note: "в смене" },
    { n: "Юсупов Р.",  s: "vac",   t: "—",     note: "отпуск" },
    { n: "Хасанов Б.", s: "sick",  t: "—",     note: "больничный" },
    { n: "Набиев С.",  s: "out",   t: "17:48", note: "уход" },
  ];
  const palette = {
    in:   { c: "var(--brand)",          bg: "oklch(0.32 0.08 152)",  label: "●" },
    out:  { c: "oklch(0.78 0.10 80)",   bg: "oklch(0.32 0.06 80)",   label: "→" },
    vac:  { c: "oklch(0.78 0.10 220)",  bg: "oklch(0.32 0.06 220)",  label: "☀" },
    sick: { c: "oklch(0.78 0.12 30)",   bg: "oklch(0.30 0.06 30)",   label: "+" },
  };
  const live = pinned == null ? (tick % rows.length) : pinned;

  return (
    <ScreenChrome title="Табель · живая сводка" dark right={pinned != null ? "○ PINNED" : "● LIVE"}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
          {[
            { l: "Приходы", v: 184 + (tick % 8), c: "var(--brand)" },
            { l: "Уходы", v: 142 + (tick % 6), c: "oklch(0.78 0.10 80)" },
            { l: "Отпуска", v: 23, c: "oklch(0.78 0.10 220)" },
            { l: "Больничные", v: 9, c: "oklch(0.78 0.12 30)" },
          ].map((m) => (
            <div key={m.l} style={{
              padding: "6px 8px",
              background: "oklch(0.22 0.04 158)",
              borderRadius: 6,
              transition: "background .25s",
            }}>
              <div style={{ fontSize: 9, color: "var(--inverse-2)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{m.l}</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: m.c, fontVariantNumeric: "tabular-nums" }}>{m.v}</div>
            </div>
          ))}
        </div>
        <div style={{
          fontSize: 9, color: "var(--inverse-2)", fontFamily: "var(--f-mono)",
          textTransform: "uppercase", letterSpacing: "0.06em",
          paddingTop: 4, borderBottom: "1px solid oklch(0.28 0.04 158)", paddingBottom: 4,
          display: "grid", gridTemplateColumns: "1fr 50px 90px",
        }}>
          <span>Сотрудник</span><span>время</span><span>статус</span>
        </div>
        {rows.map((r, i) => {
          const p = palette[r.s];
          const recent = live === i;
          return (
            <button key={i}
              onClick={() => setPinned(pinned === i ? null : i)}
              style={{
                all: "unset",
                cursor: "pointer",
                display: "grid", gridTemplateColumns: "1fr 50px 90px",
                alignItems: "center",
                padding: "5px 6px",
                margin: "0 -6px",
                fontSize: 11,
                borderBottom: i < rows.length - 1 ? "1px solid oklch(0.22 0.04 158)" : "none",
                background: recent ? "oklch(0.22 0.05 158)" : "transparent",
                border: pinned === i ? "1px solid var(--brand)" : "1px solid transparent",
                borderRadius: pinned === i ? 6 : 0,
                boxShadow: recent ? "inset 2px 0 0 var(--brand)" : "none",
                transition: "background .3s, border-color .3s, box-shadow .3s",
              }}>
              <span style={{ fontWeight: 600, color: "var(--inverse)" }}>{r.n}</span>
              <span style={{ fontFamily: "var(--f-mono)", color: "var(--inverse-2)", fontSize: 10 }}>{r.t}</span>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 4,
                padding: "2px 7px", borderRadius: 4,
                background: p.bg, color: p.c,
                fontSize: 9, fontFamily: "var(--f-mono)", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.04em",
                width: "fit-content",
              }}>
                <span>{p.label}</span>{r.note}
              </span>
            </button>
          );
        })}
      </div>
    </ScreenChrome>
  );
}

/* ============================================================
   Step 4 — Timesheet → earned calculation (interactive)
   ============================================================ */
function Screen3b() {
  const tick = useLoop(60, 1100);
  const days = 17 + ((tick % 30) > 24 ? 1 : 0);
  const earned = useCounter(0, days * 106667, 1000, days);
  const [hoverDay, setHoverDay] = useMState(null);

  // Determine cell types up-front so hover label is correct
  const cellInfo = (i) => {
    const isWeekend = i % 7 === 6;
    const isSick = i === 11;
    const isVac = i === 22 || i === 23;
    const isMiss = i === 4;   // пропуск
    const isLeave = i === 14; // отгул
    let label = "рабочий";
    let color = "var(--bg-sand)";
    let worked = i < days;
    if (worked) { color = "var(--brand)"; label = "рабочий"; }
    if (isLeave) { color = "oklch(0.85 0.14 90)"; label = "отгул"; }
    if (isSick) { color = "oklch(0.78 0.12 30)"; label = "больничный"; }
    if (isVac)  { color = "oklch(0.78 0.10 220)"; label = "отпуск"; }
    if (isMiss) { color = "oklch(0.55 0.20 25)"; label = "пропуск"; }
    if (isWeekend && !worked) { color = "oklch(0.88 0.02 80)"; label = "выходной"; }
    if (!worked && !isSick && !isVac && !isWeekend && !isMiss && !isLeave) { color = "var(--bg-sand)"; label = "впереди"; }
    return { color, label };
  };

  return (
    <ScreenChrome title="Расчёт заработанного" right="Hikvision · Tabel">
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {/* timesheet grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontSize: 10, color: "var(--ink-3)", fontFamily: "var(--f-mono)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Март · табель</div>
            <div style={{
              fontSize: 10, color: hoverDay !== null ? "var(--brand-2)" : "var(--ink-3)",
              fontFamily: "var(--f-mono)", fontWeight: 600,
              transition: "color .2s",
            }}>
              {hoverDay !== null ? `день ${hoverDay + 1} · ${cellInfo(hoverDay).label}` : "наведи на день"}
            </div>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(15, 1fr)",
            gap: 2,
          }}>
            {Array.from({ length: 30 }).map((_, i) => {
              const { color } = cellInfo(i);
              const isToday = i === days - 1;
              const isHover = hoverDay === i;
              return (
                <div key={i}
                  onMouseEnter={() => setHoverDay(i)}
                  onMouseLeave={() => setHoverDay(null)}
                  style={{
                    aspectRatio: "1",
                    borderRadius: 3,
                    background: color,
                    transition: "transform .2s, box-shadow .2s, background .3s",
                    border: isToday ? "1.5px solid var(--bg-deep)" : "none",
                    transform: isHover ? "scale(1.35)" : "scale(1)",
                    boxShadow: isHover ? "0 4px 12px oklch(0.20 0.04 158 / 0.25)" : "none",
                    cursor: "pointer",
                    zIndex: isHover ? 2 : 1,
                    position: "relative",
                  }}/>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", fontSize: 9, color: "var(--ink-3)", fontFamily: "var(--f-mono)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}><span style={{ width: 8, height: 8, background: "var(--brand)", borderRadius: 2 }}/>рабочий</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}><span style={{ width: 8, height: 8, background: "oklch(0.78 0.10 220)", borderRadius: 2 }}/>отпуск</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}><span style={{ width: 8, height: 8, background: "oklch(0.78 0.12 30)", borderRadius: 2 }}/>больничный</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}><span style={{ width: 8, height: 8, background: "oklch(0.85 0.14 90)", borderRadius: 2 }}/>отгул</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}><span style={{ width: 8, height: 8, background: "oklch(0.55 0.20 25)", borderRadius: 2 }}/>пропуск</span>
          </div>
        </div>

        {/* formula */}
        <div style={{
          padding: 10,
          background: "var(--bg-deep)",
          color: "var(--inverse)",
          borderRadius: 8,
          fontFamily: "var(--f-mono)",
          fontSize: 10,
          lineHeight: 1.45,
        }}>
          <span style={{ color: "var(--brand)" }}>{days}</span> дн. × 8 ч. × ставка
          <div style={{
            marginTop: 5,
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
          }}>
            <span style={{ color: "var(--inverse-2)" }}>= заработано</span>
            <span style={{ fontFamily: "var(--f-sans)", fontSize: 14, fontWeight: 800, color: "var(--brand)", fontVariantNumeric: "tabular-nums" }}>
              {fmt(earned)} сум
            </span>
          </div>
        </div>
      </div>
    </ScreenChrome>
  );
}

/* ============================================================
   Step 5 — Employee balance with days worked X/Y
   ============================================================ */
function Screen4() {
  const tick = useLoop(2, 2200);
  const days = tick === 0 ? 17 : 18;
  const total = 30;
  const target = days * 106667;
  const val = useCounter(0, target, 1400, tick);
  const totalSalary = 3200000;

  return (
    <ScreenChrome title="Приложение сотрудника" right="iOS / Android" height={320}>
      <div style={{
        background: "var(--bg-deep)",
        borderRadius: 12,
        padding: 12,
        color: "var(--inverse)",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>
        <div aria-hidden style={{
          position: "absolute", top: -30, right: -30,
          width: 130, height: 130,
          color: "oklch(0.25 0.05 158)",
        }}>
          <RizqMark size={130} color="currentColor"/>
        </div>
        <div style={{ fontSize: 10, color: "var(--inverse-2)", fontFamily: "var(--f-mono)", letterSpacing: "0.08em", textTransform: "uppercase", position: "relative" }}>Доступно к выводу</div>
        <div style={{ marginTop: 6, fontSize: 24, fontWeight: 800, letterSpacing: "-0.025em", position: "relative", fontVariantNumeric: "tabular-nums" }}>
          {fmt(val)} <span style={{ fontSize: 12, color: "var(--inverse-2)", fontWeight: 600 }}>сум</span>
        </div>

        {/* days worked */}
        <div style={{ marginTop: 10, position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontSize: 11, color: "var(--inverse-2)" }}>Отработано дней</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--inverse)", fontFamily: "var(--f-mono)" }}>
              <span style={{ color: "var(--brand)" }}>{days}</span> / {total}
            </div>
          </div>
          <div style={{ marginTop: 6, height: 5, borderRadius: 3, background: "oklch(0.30 0.04 158)", overflow: "hidden", position: "relative" }}>
            <div style={{
              width: `${(days / total) * 100}%`,
              height: "100%",
              background: "linear-gradient(90deg, oklch(0.66 0.22 145), var(--brand))",
              transition: "width .55s",
              boxShadow: "0 0 12px oklch(0.78 0.24 142 / 0.6)",
            }}/>
          </div>
        </div>

        {/* 2 metric rows */}
        <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, position: "relative" }}>
          <div style={{ padding: "7px 9px", background: "oklch(0.22 0.04 158)", borderRadius: 8 }}>
            <div style={{ fontSize: 9, color: "var(--inverse-2)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Общая зарплата</div>
            <div style={{ fontSize: 12, fontWeight: 700, marginTop: 2 }}>{fmt(totalSalary)}</div>
          </div>
          <div style={{ padding: "7px 9px", background: "oklch(0.22 0.04 158)", borderRadius: 8 }}>
            <div style={{ fontSize: 9, color: "var(--inverse-2)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Уже выведено</div>
            <div style={{ fontSize: 12, fontWeight: 700, marginTop: 2, color: "var(--brand)" }}>540 000</div>
          </div>
        </div>

        <button style={{
          marginTop: "auto",
          width: "100%",
          padding: "10px 12px",
          background: "var(--brand)",
          color: "var(--brand-ink)",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 700,
          border: "none",
          position: "relative",
          boxShadow: "var(--sh-glow)",
          flex: "none",
        }}>Вывести деньги</button>
      </div>
    </ScreenChrome>
  );
}

/* ============================================================
   Step 5 — Request flow with auto-moving slider
   ============================================================ */
function Screen5() {
  const presets = [100, 300, 500, 1000];
  const phase = useLoop(presets.length, 1300);
  const v = presets[phase] * 1000;
  const displayed = useCounter(0, v, 600, phase);
  const max = 2480000;
  const pct = (v / max) * 100;

  return (
    <ScreenChrome title="Запрос выплаты" right="шаг 2 из 3">
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        <div style={{ fontSize: 11, color: "var(--ink-3)" }}>Сколько хотите получить?</div>
        <div style={{
          padding: "12px 14px",
          border: "2px solid var(--brand)",
          borderRadius: 12,
          display: "flex",
          alignItems: "baseline",
          gap: 6,
          background: "oklch(0.97 0.02 90)",
        }}>
          <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>{fmt(displayed)}</span>
          <span style={{ fontSize: 11, color: "var(--ink-3)" }}>сум</span>
        </div>
        {/* slider track */}
        <div style={{ position: "relative", height: 28, display: "flex", alignItems: "center" }}>
          <div style={{ width: "100%", height: 6, borderRadius: 3, background: "var(--bg-sand)" }}/>
          <div style={{
            position: "absolute", left: 0, top: "50%",
            transform: "translateY(-50%)",
            width: `${pct}%`,
            height: 6,
            borderRadius: 3,
            background: "var(--brand)",
            transition: "width .5s cubic-bezier(.2,.7,.2,1)",
          }}/>
          <div style={{
            position: "absolute",
            left: `calc(${pct}% - 11px)`,
            top: "50%",
            transform: "translateY(-50%)",
            width: 22, height: 22,
            borderRadius: "50%",
            background: "var(--ink)",
            border: "3px solid var(--brand)",
            transition: "left .5s cubic-bezier(.2,.7,.2,1)",
            boxShadow: "0 4px 10px oklch(0.20 0.04 158 / 0.25)",
          }}/>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {presets.map((p, i) => (
            <div key={p} style={{
              flex: 1,
              padding: "7px",
              borderRadius: 8,
              fontSize: 11,
              fontWeight: 700,
              textAlign: "center",
              background: phase === i ? "var(--bg-deep)" : "var(--bg-sand)",
              color: phase === i ? "var(--inverse)" : "var(--ink-2)",
              transition: "all .3s",
              transform: phase === i ? "scale(1.05)" : "scale(1)",
            }}>{p < 1000 ? `${p}К` : "1М"}</div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "var(--ink-3)", display: "flex", justifyContent: "space-between" }}>
          <span>На карту Humo · ****&nbsp;4821</span>
          <span style={{ color: "var(--ink-2)" }}>из {fmt(max)} сум</span>
        </div>
      </div>
    </ScreenChrome>
  );
}

/* ============================================================
   Step 6 — ujra calc — sequenced reveal
   ============================================================ */
function Screen5b() {
  const phase = useLoop(4, 950); // 0 req, 1 fee, 2 net, 3 done
  const req = 500000;
  const fee = Math.round(req * 0.025);
  const net = req - fee;

  return (
    <ScreenChrome title="Расчёт ujra · комиссия за услугу" right="прозрачно">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <FlowRow show={phase >= 0} label="Запрошено" value={`${fmt(req)} сум`} bg="var(--bg-sand)" />
        <div style={{
          padding: 10,
          background: phase >= 1 ? "oklch(0.94 0.04 145)" : "var(--bg-sand)",
          borderRadius: 10,
          border: phase >= 1 ? "1px dashed var(--brand)" : "1px dashed var(--line-2)",
          opacity: phase >= 1 ? 1 : 0.5,
          transform: phase >= 1 ? "translateY(0)" : "translateY(4px)",
          transition: "all .4s",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <div style={{ fontSize: 10, color: "oklch(0.30 0.06 158)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
              <span>ujra · </span>
              <span style={{ display: "inline-block", padding: "1px 5px", background: "var(--brand)", color: "var(--brand-ink)", borderRadius: 4, marginLeft: 2 }}>2,5%</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "oklch(0.30 0.06 158)" }}>− {fmt(fee)} сум</div>
          </div>
          <div style={{ fontSize: 10, color: "var(--ink-3)", lineHeight: 1.4 }}>Фиксированная плата за услугу платформы. Не процент, не зависит от срока.</div>
        </div>
        <div style={{
          padding: 11,
          background: phase >= 2 ? "var(--bg-deep)" : "var(--bg-sand)",
          color: phase >= 2 ? "var(--inverse)" : "var(--ink-3)",
          borderRadius: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: phase >= 2 ? 1 : 0.5,
          transform: phase >= 2 ? "translateY(0)" : "translateY(4px)",
          transition: "all .4s",
          boxShadow: phase >= 2 ? "var(--sh-card)" : "none",
        }}>
          <div style={{ fontSize: 11, fontWeight: 600 }}>К зачислению</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: phase >= 2 ? "var(--brand)" : "var(--ink-3)", fontVariantNumeric: "tabular-nums" }}>{fmt(net)} сум</div>
        </div>
        <div style={{
          padding: "6px 10px",
          fontSize: 10,
          color: phase >= 3 ? "var(--brand-2)" : "var(--ink-3)",
          textAlign: "center",
          fontFamily: "var(--f-mono)",
          transition: "color .3s",
          fontWeight: 600,
        }}>
          {phase >= 3 ? "✓ одобрено шариатским советом" : "проверка …"}
        </div>
      </div>
    </ScreenChrome>
  );
}

function FlowRow({ show, label, value, bg }) {
  return (
    <div style={{
      padding: 10,
      background: bg,
      borderRadius: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      opacity: show ? 1 : 0.5,
      transform: show ? "translateY(0)" : "translateY(4px)",
      transition: "all .4s",
    }}>
      <div style={{ fontSize: 11, color: "var(--ink-3)" }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" }}>{value}</div>
    </div>
  );
}

/* ============================================================
   Step 7 — Bank confirmation with loading → success
   ============================================================ */
function Screen6() {
  const phase = useLoop(3, 1500); // 0 sending, 1 received, 2 hold
  const seconds = useCounter(0, 42, 1200, phase);

  return (
    <ScreenChrome title="Выплата · Банк-партнёр" right={phase === 0 ? "обработка…" : "✓ успешно"}>
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        <div style={{
          padding: "12px 14px",
          background: phase === 0 ? "var(--bg-sand)" : "oklch(0.94 0.04 145)",
          borderRadius: 10,
          display: "flex",
          gap: 11,
          alignItems: "center",
          transition: "background .35s",
          position: "relative",
          overflow: "hidden",
        }}>
          {phase === 0 && (
            <div aria-hidden style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, transparent 0%, oklch(0.78 0.24 142 / 0.18) 50%, transparent 100%)",
              animation: "shimmer2 1.4s linear infinite",
            }}/>
          )}
          <div style={{
            width: 34, height: 34, borderRadius: "50%",
            background: phase === 0 ? "var(--card)" : "var(--brand)",
            border: phase === 0 ? "3px solid var(--brand)" : "none",
            borderTopColor: phase === 0 ? "transparent" : "var(--brand)",
            animation: phase === 0 ? "spin 0.9s linear infinite" : "none",
            color: "var(--brand-ink)",
            display: "grid", placeItems: "center",
            fontSize: 18, fontWeight: 800,
            transition: "all .35s",
            position: "relative",
            zIndex: 1,
          }}>{phase === 0 ? "" : "✓"}</div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>
              {phase === 0 ? "Перевод в банк…" : "500 000 сум зачислено"}
            </div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--f-mono)" }}>
              {phase === 0 ? "Humo · обработка" : `14 марта, 14:32 · ${seconds} сек`}
            </div>
          </div>
        </div>

        {/* mini step indicator */}
        <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "2px 0" }}>
          {["запрос", "ujra", "банк", "карта"].map((label, i) => {
            const done = phase >= 1 || i < 2;
            const active = phase === 0 && i === 2;
            return (
              <React.Fragment key={label}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: done ? "var(--brand)" : active ? "var(--brand-ink)" : "var(--line)",
                    transition: "all .3s",
                    boxShadow: active ? "0 0 0 4px oklch(0.78 0.24 142 / 0.25)" : "none",
                  }}/>
                  <span style={{ fontSize: 9, fontFamily: "var(--f-mono)", color: done || active ? "var(--ink-2)" : "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
                </div>
                {i < 3 && <div style={{ flex: 1, height: 1, background: done ? "var(--brand-2)" : "var(--line)" }}/>}
              </React.Fragment>
            );
          })}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[["Карта", "Humo ****4821"], ["Комиссия 2,5%", "12 500 сум"]].map(([l, v]) => (
            <div key={l} style={{ padding: 8, background: "var(--bg-sand)", borderRadius: 8 }}>
              <div style={{ fontSize: 9, color: "var(--ink-3)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{l}</div>
              <div style={{ fontSize: 12, fontWeight: 700, marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes shimmer2 { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </ScreenChrome>
  );
}

/* ============================================================
   Step 8 — Payroll reconciliation rows populating
   ============================================================ */
function Screen7() {
  const rows = [
    { n: "Алиев А.", e: 3200000, w: 500000 },
    { n: "Каримова Г.", e: 2800000, w: 800000 },
    { n: "Юсупов Р.", e: 3600000, w: 0 },
    { n: "Хасанов Б.", e: 2400000, w: 350000 },
  ];
  const phase = useLoop(rows.length + 2, 800);

  return (
    <ScreenChrome title="ERP · Реестр зарплат · авто" dark right="✓ 1С / SAP">
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 10, color: "var(--inverse-2)", fontFamily: "var(--f-mono)", display: "flex", justifyContent: "space-between" }}>
          <span>Реестр · 31 марта</span>
          <span style={{ color: "var(--brand)" }}>● синхронизация</span>
        </div>
        {/* header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto auto",
          gap: 10,
          padding: "4px 0",
          fontSize: 9,
          fontFamily: "var(--f-mono)",
          color: "var(--inverse-2)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          borderBottom: "1px solid oklch(0.28 0.04 158)",
        }}>
          <span>Сотрудник</span>
          <span>К выплате</span>
          <span>К возмещению</span>
        </div>
        {rows.map((r, i) => {
          const visible = phase > i;
          return (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr auto auto",
              gap: 10,
              padding: "5px 0",
              fontSize: 11,
              borderBottom: i < rows.length - 1 ? "1px solid oklch(0.22 0.04 158)" : "none",
              alignItems: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-4px)",
              transition: `opacity .35s, transform .35s`,
            }}>
              <span style={{ fontWeight: 600 }}>{r.n}</span>
              <span style={{ fontFamily: "var(--f-mono)", fontWeight: 700, letterSpacing: "-0.01em" }}>{fmt(r.e - r.w)}</span>
              <span style={{ fontFamily: "var(--f-mono)", color: r.w === 0 ? "var(--inverse-2)" : "var(--brand)", fontWeight: 700 }}>
                {r.w === 0 ? "—" : fmt(r.w)}
              </span>
            </div>
          );
        })}
        {/* total */}
        <div style={{
          marginTop: 4,
          padding: "8px 10px",
          background: "oklch(0.22 0.05 158)",
          borderRadius: 6,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: phase > rows.length ? 1 : 0,
          transform: phase > rows.length ? "translateY(0)" : "translateY(-4px)",
          transition: "all .4s",
        }}>
          <span style={{ fontSize: 10, color: "var(--inverse-2)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Итог · к возмещению банку</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: "var(--brand)" }}>1 650 000 сум</span>
        </div>
      </div>
    </ScreenChrome>
  );
}

const StepScreens = [Screen1, Screen2, Screen3, Screen3b, Screen4, Screen5, Screen5b, Screen6, Screen7];

Object.assign(window, { StepScreens, ScreenChrome });


/* ====== bank-deck.jsx ====== */
/* bank-deck.jsx — Rizq Bank Proposal · 15 sections */
/* global React, ReactDOM, RizqLogo, Icon, Btn, Reveal, AnimatedNumber, EyebrowPill, StepScreens */

/* const { useState, useEffect, useRef } = React; — deduped */
/* ============================================================
   SHARED BITS
   ============================================================ */

function BankHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "oklch(0.965 0.014 85 / 0.85)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "background .2s, border-color .2s",
    }}>
      <div className="container bank-header-row" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72, gap: 16,
      }}>
        <a href="index.html" className="bank-back" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ink-3)", fontSize: 13, fontWeight: 600 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
          <span className="bank-back-label">На главную</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <RizqLogo />
          <span className="bank-deck-badge" style={{
            fontFamily: "var(--f-mono)", fontSize: 10,
            padding: "5px 9px", borderRadius: 6,
            background: "oklch(0.96 0.02 80)", color: "var(--ink-3)",
            border: "1px solid var(--line)",
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>Bank Deck</span>
        </div>
        <span className="bank-confidential" style={{
          fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 600,
          padding: "6px 10px", borderRadius: 999,
          background: "var(--bg-deep)", color: "var(--brand)",
          letterSpacing: "0.12em", textTransform: "uppercase",
        }}>● Confidential</span>
        <BankLocaleSwitch/>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .bank-back-label { display: none; }
          .bank-deck-badge { display: none; }
          .bank-confidential { font-size: 9px !important; padding: 5px 8px !important; }
        }
      `}</style>
    </header>
  );
}

/* Compact language switcher for the bank header */
function BankLocaleSwitch() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(() => {
    const cur = (window.__currentLocale || "ru").toUpperCase();
    return cur === "EN" || cur === "UZ" ? cur : "RU";
  });
  const langs = [["RU","Русский"],["UZ","Oʻzbekcha"],["EN","English"]];
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    setTimeout(() => window.addEventListener("click", close, { once: true }), 0);
    return () => window.removeEventListener("click", close);
  }, [open]);
  const pick = (k) => {
    setLang(k); setOpen(false);
    if (typeof window.applyLocale === "function") window.applyLocale(k.toLowerCase());
  };
  return (
    <div className="bank-locale" style={{ position: "relative" }} onClick={(e) => e.stopPropagation()}>
      <button onClick={() => setOpen(!open)} style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "6px 10px", borderRadius: 999,
        fontSize: 12, fontWeight: 600, color: "var(--ink-2)",
        background: "var(--card)", border: "1px solid var(--line)",
        fontFamily: "var(--f-mono)", letterSpacing: "0.04em", cursor: "pointer",
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>
        {lang}
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", right: 0,
          background: "var(--bg)", border: "1px solid var(--line)",
          borderRadius: 10, padding: 4, minWidth: 140,
          boxShadow: "0 12px 32px oklch(0.20 0.04 90 / 0.12)", zIndex: 60,
        }}>
          {langs.map(([k, name]) => (
            <button key={k} onClick={() => pick(k)} style={{
              display: "flex", alignItems: "center", gap: 8, width: "100%",
              padding: "8px 10px", fontSize: 13,
              fontWeight: lang === k ? 600 : 500,
              color: lang === k ? "var(--ink)" : "var(--ink-2)",
              background: lang === k ? "oklch(0.92 0.02 80)" : "transparent",
              borderRadius: 8, border: "none", cursor: "pointer", textAlign: "left",
              fontFamily: "var(--f-sans)",
            }}>
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, minWidth: 22, color: "var(--ink-3)" }}>{k}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* SectionHead — number + title + lead */
function SecHead({ num, kicker, title, lead, dark = false, max = 880 }) {
  return (
    <div className="sec-head" style={{ maxWidth: max }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{
          fontFamily: "var(--f-mono)", fontSize: 12, fontWeight: 700,
          color: dark ? "var(--brand)" : "var(--brand-2)",
          background: dark ? "oklch(0.25 0.04 158)" : "oklch(0.94 0.04 145)",
          padding: "5px 10px", borderRadius: 6, letterSpacing: "0.06em",
        }}>{num}</span>
        <span style={{
          fontFamily: "var(--f-mono)", fontSize: 11,
          color: dark ? "var(--inverse-2)" : "var(--ink-3)",
          textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600,
        }}>{kicker}</span>
      </div>
      <h2 style={{ marginTop: 16, color: dark ? "var(--inverse)" : "var(--ink)" }}>{title}</h2>
      {lead && <p className="lead" style={{ marginTop: 16, color: dark ? "var(--inverse-2)" : "var(--ink-2)" }}>{lead}</p>}
    </div>
  );
}

/* DataRow — table-style row used by stat blocks */
function DataTable({ rows, highlight, dark = false }) {
  return (
    <div style={{
      borderRadius: 16,
      border: `1px solid ${dark ? "oklch(0.32 0.04 155)" : "var(--line)"}`,
      background: dark ? "oklch(0.16 0.03 158)" : "var(--card)",
      overflow: "hidden",
    }}>
      {rows.map(([k, v], i) => {
        const hl = highlight === i;
        return (
          <div key={k} style={{
            display: "grid", gridTemplateColumns: "1fr auto",
            padding: "16px 22px",
            borderTop: i ? `1px solid ${dark ? "oklch(0.24 0.03 158)" : "var(--line)"}` : "none",
            background: hl ? (dark ? "oklch(0.22 0.05 155)" : "oklch(0.95 0.05 140)") : "transparent",
            alignItems: "center",
          }}>
            <span style={{ fontSize: 14, color: dark ? "var(--inverse-2)" : "var(--ink-2)", fontWeight: 500 }}>{k}</span>
            <span style={{
              fontSize: hl ? 20 : 16, fontWeight: hl ? 800 : 700,
              color: hl ? (dark ? "var(--brand)" : "var(--brand-2)") : (dark ? "var(--inverse)" : "var(--ink)"),
              fontFamily: typeof v === "string" && /^[\d\s$\.,kKMM%~+×—-]+$/.test(v) ? "var(--f-mono)" : "inherit",
              letterSpacing: "-0.01em",
            }}>{v}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ============================================================
   01 — HERO
   ============================================================ */
function S01Hero() {
  return (
    <section style={{
      paddingTop: 56, paddingBottom: 96,
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(180deg, oklch(0.97 0.025 85) 0%, oklch(0.95 0.025 85) 100%)",
      }}/>
      <div aria-hidden style={{
        position: "absolute", top: -120, right: -120, width: 540, height: 540,
        borderRadius: "50%", zIndex: 0,
        background: "radial-gradient(circle at 35% 35%, oklch(0.85 0.18 145 / 0.45), transparent 70%)",
        filter: "blur(20px)",
      }}/>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal delay={120}>
          <h1 style={{
            marginTop: 8,
            fontSize: "clamp(48px, 6.5vw, 104px)",
            lineHeight: 0.94, letterSpacing: "-0.045em",
            fontWeight: 800, maxWidth: "16ch", textWrap: "balance",
          }}>
            <span style={{ display: "block" }}>Rizq — сервис</span>
            <span style={{ display: "block" }}>
              <span className="display-serif" style={{ color: "var(--ink-2)", fontWeight: 400 }}>мгновенных </span>
              <span className="hl-underline">выплат зарплат</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p style={{
            marginTop: 28, maxWidth: "56ch",
            fontSize: "clamp(18px, 1.4vw, 22px)",
            color: "var(--ink-2)", lineHeight: 1.5,
          }}>
            Первый <b style={{ color: "var(--ink)" }}>halal EWA-сервис</b> в Таджикистане.
            Сотрудники получают доступ к уже заработанным деньгам. Без кредита, без процента.
            Банк-партнёр финансирует выводы из собственных средств — возврат гарантирует работодатель.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div style={{
            marginTop: 56,
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }} className="s01-grid">
            {[
              { k: "MVP", v: "приложение + ЛК готовы", accent: false },
              { k: "200+", v: "пилот · NDA компания", accent: true },
              { k: "0%", v: "без процентов · ujra", accent: false },
            ].map((f, i) => (
              <div key={i} className="card" style={{
                padding: "24px 22px",
                borderRadius: 20,
                background: f.accent ? "var(--brand)" : "var(--card)",
                color: f.accent ? "var(--brand-ink)" : "var(--ink)",
                border: f.accent ? "none" : "1px solid var(--line)",
              }}>
                <div style={{
                  fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em",
                  lineHeight: 1, fontFamily: "var(--f-sans)",
                }}>{f.k}</div>
                <div style={{
                  marginTop: 10, fontSize: 13,
                  color: f.accent ? "oklch(0.15 0.05 155 / 0.7)" : "var(--ink-3)",
                  lineHeight: 1.45,
                }}>{f.v}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <style>{`
          .s01-grid { grid-template-columns: repeat(3, 1fr) !important; }
          @media (max-width: 900px) { .s01-grid { grid-template-columns: 1fr 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   02 — ПРОБЛЕМА
   ============================================================ */
function S02Problem() {
  const items = [
    { icon: "💸", t: "Кредиты под 20–30% годовых", b: "Сотни тысяч человек уже в микрозаймах. Долговая нагрузка растёт каждый год. Долговая спираль." },
    { icon: "⏳", t: "Кредит — это барьеры", b: "Время на рассмотрение, лимиты, условия, документы. И даже после всего — вероятность отказа. С Rizq — гарантия получения." },
    { icon: "📋", t: "Ручные авансы", b: "HR тратит время, бухгалтер злится, контроль над ФОТ теряется. Чаще всего — отказ." },
    { icon: "☪️", t: "Риба запрещена", b: "96–98% мусульмане. Кредит с процентом — грех. Берут вынужденно. Rizq = халяль." },
  ];
  return (
    <section style={{ background: "var(--bg-sand)" }}>
      <div className="container">
        <SecHead num="02" kicker="Проблема" title="Зарплата раз в месяц. Расходы — каждый день." lead="3M+ рабочая сила. 1.5M наёмных с payroll. Кредиты под 20–30% годовых. Неформальные долги. EWA в стране не существует."/>

        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16,
        }} className="s02-grid">
          {items.map((it, i) => (
            <div key={i} className="card" style={{
              padding: 28, borderRadius: 24,
              display: "grid", gridTemplateColumns: "auto 1fr", gap: 20,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                display: "grid", placeItems: "center",
                background: "var(--bg-sand)", border: "1px solid var(--line)",
                fontSize: 24,
              }}>{it.icon}</div>
              <div>
                <h3 style={{ fontSize: 20 }}>{it.t}</h3>
                <p style={{ marginTop: 8, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>{it.b}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <DataTable rows={[
            ["Рабочая сила Таджикистана", "3M+"],
            ["Ставки банков по потреб. кредитам", "20–30%"],
            ["EWA-сервисов в стране", "0"],
            ["Доля мусульманского населения", "96–98%"],
          ]} highlight={2}/>
        </div>

        <style>{`
          @media (max-width: 760px) { .s02-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   03 — РЕШЕНИЕ (7 шагов с интерфейсами)
   ============================================================ */
function S03Solution() {
  // screen index → mockups.jsx StepScreens
  // 0=Screen1, 1=Screen2, 2=Screen3, 3=Screen3b, 4=Screen4, 5=Screen5, 6=Screen5b, 7=Screen6, 8=Screen7
  const steps = [
    { n: "01", screen: 0, t: "Подключаем компанию", b: "Компания регистрируется в ЛК. KYB-верификация, документы, электронный договор. Никакого депозита — обязательства несёт юрлицо, риск закрыт страховкой.", tags: ["KYB", "Без депозита", "1–3 дня"] },
    { n: "02", screen: 1, t: "Загружаем сотрудников · Синхронизация 1С", b: "CSV/XLSX, ручной ввод или авто-синхронизация с 1С. Приходы, уходы, отпускные, больничные — всё обновляется ежедневно.", tags: ["1С", "CSV/XLSX", "Авто-синхронизация"] },
    { n: "03", screen: 3, t: "Считаем заработанное · ежедневно", b: "Формула: оклад × присутственные дни ÷ рабочие дни × лимит 70%. Баланс обновляется ежедневно. Точная сумма — без приближений.", tags: ["Лимит 70%", "Real-time"] },
    { n: "04", screen: 4, t: "Сотрудник видит баланс перед выводом", b: "В приложении сотрудник видит: сколько уже заработал, сколько можно вывести (с учётом 70% лимита), сколько остаётся до зарплаты. Полная прозрачность до того, как нажать кнопку.", tags: ["Прозрачность", "Real-time баланс"], accent: true },
    { n: "05", screen: 5, t: "Сотрудник выводит на карту", b: "Telegram Mini App или мобильная веб-версия. Три шага: сумма → подтверждение → деньги на карте за 5 минут. Ujra 2.5% — фиксированная плата за услугу.", tags: ["~5 мин", "ujra 2.5%"] },
    { n: "06", screen: 7, t: "Банк финансирует перевод", b: "Банк-партнёр выдаёт средства на карту сотрудника из собственных средств. Это не кредит сотруднику — операция, обеспеченная payroll-гарантией работодателя и страховым покрытием.", tags: ["Банк-партнёр", "NPL = 0", "Payroll-backed"] },
    { n: "07", screen: 8, t: "Работодатель возвращает банку", b: "В день зарплаты компания удерживает сумму выводов и возвращает банку — тело плюс комиссия. Остаток зарплаты — сотруднику. Цикл замкнут.", tags: ["Через ERP", "Возврат банку"] },
    { n: "08", screen: 6, t: "Сотрудник видит итоговый расчёт после зарплаты", b: "После расчёта компании сотрудник видит в приложении: общий заработок за месяц, сумму уже выведенных авансов, ujra-комиссию и остаток, который пришёл на карту. Никаких сюрпризов.", tags: ["Финальный расчёт", "История выводов"] },
  ];

  return (
    <section>
      <div className="container">
        <SecHead num="03" kicker="Решение" title={<>8 этапов. Полный цикл. <span className="display-serif" style={{color:"var(--ink-2)"}}>От подключения до итогового расчёта.</span></>} lead="Каждый этап прозрачен. Банк-партнёр финансирует выводы из собственных средств. Работодатель возвращает банку в день зарплаты. Сотрудник платит только фиксированную комиссию (ujra)."/>

        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 22 }}>
          {steps.map((s, i) => {
            const Screen = typeof s.screen === "number" ? window.StepScreens[s.screen] : null;
            return (
              <div key={s.n} className="card s03-row" style={{
                padding: 28,
                borderRadius: 22,
                border: s.accent ? "2px solid var(--brand)" : "1px solid var(--line)",
                background: s.accent ? "oklch(0.96 0.04 145)" : "var(--card)",
                display: "grid",
                gridTemplateColumns: "minmax(260px, 380px) 1fr",
                gap: 32,
                alignItems: "center",
              }}>
                {/* LEFT — interface mockup */}
                <div>
                  {Screen ? <Screen/> : <BankClientsMockup/>}
                </div>

                {/* RIGHT — description */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: s.accent ? "var(--brand)" : "var(--bg-deep)",
                      color: s.accent ? "var(--brand-ink)" : "var(--brand)",
                      display: "grid", placeItems: "center",
                      fontFamily: "var(--f-mono)", fontWeight: 800, fontSize: 15,
                      flex: "none",
                    }}>{s.n}</span>
                    <h3 style={{ fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.25 }}>{s.t}</h3>
                  </div>
                  <p style={{ marginTop: 14, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6 }}>{s.b}</p>
                  {s.tags && s.tags.length > 0 && (
                    <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {s.tags.map((t, j) => (
                        <span key={j} style={{
                          fontSize: 12, fontFamily: "var(--f-mono)",
                          padding: "5px 10px", borderRadius: 999,
                          background: s.accent ? "var(--brand)" : "var(--bg-sand)",
                          color: s.accent ? "var(--brand-ink)" : "var(--ink)",
                          border: s.accent ? "none" : "1px solid var(--line)",
                          fontWeight: 600,
                        }}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 860px) {
            .s03-row { grid-template-columns: 1fr !important; gap: 20px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* Mini mockup — bank opening client account when employee onboarded */
function BankClientsMockup() {
  const rows = [
    { n: "Алиев А.", id: "AA-1481", status: "✓" },
    { n: "Каримова Г.", id: "KG-2237", status: "✓" },
    { n: "Юсупов Р.", id: "YR-3014", status: "•" },
  ];
  return (
    <div style={{
      borderRadius: 14,
      background: "oklch(0.15 0.025 158)",
      border: "1px solid oklch(0.28 0.04 158)",
      color: "var(--inverse)",
      fontFamily: "var(--f-sans)",
      overflow: "hidden",
      height: 300,
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        padding: "10px 14px",
        borderBottom: "1px solid oklch(0.28 0.04 158)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 11, fontFamily: "var(--f-mono)", color: "var(--inverse-2)",
        textTransform: "uppercase", letterSpacing: "0.06em",
        background: "oklch(0.13 0.025 158)",
      }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand)" }}/>
          Банк · открытие счетов
        </div>
        <span>API</span>
      </div>
      <div style={{ padding: 14, flex: 1 }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          fontSize: 10, fontFamily: "var(--f-mono)", color: "var(--inverse-2)",
          textTransform: "uppercase", letterSpacing: "0.05em",
          marginBottom: 8,
        }}>
          <span>Новые клиенты</span>
          <span style={{ color: "var(--brand)" }}>+3 сегодня</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr auto auto",
              alignItems: "center", gap: 10,
              padding: "9px 12px", borderRadius: 10,
              background: "oklch(0.20 0.04 158)",
              border: "1px solid oklch(0.28 0.04 158)",
            }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{r.n}</span>
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--inverse-2)" }}>{r.id}</span>
              <span style={{
                width: 22, height: 22, borderRadius: "50%",
                background: "var(--brand)", color: "var(--brand-ink)",
                display: "grid", placeItems: "center",
                fontSize: 11, fontWeight: 800,
              }}>{r.status}</span>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 12, padding: "10px 12px", borderRadius: 10,
          background: "oklch(0.22 0.05 158)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ fontSize: 10, color: "var(--inverse-2)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Всего за 30 дней</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: "var(--brand)", fontFamily: "var(--f-mono)" }}>+ 248</div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   04 — УЧАСТНИКИ
   ============================================================ */
function S04Players() {
  const players = [
    { tag: "Платформа", t: "Rizq", b: "Управляет процессом, подключает компании, считает балансы, зарабатывает на комиссии.", style: "brand" },
    { tag: "Финансирует", t: "Банк", b: "Выдаёт средства. Получает комиссию и новых клиентов. NPL = 0.", style: "dark" },
    { tag: "Подтверждает", t: "Работодатель", b: "Подтверждает доход, возвращает выданное, подключает сотрудников. Платит $0.", style: "card" },
    { tag: "Получает", t: "Сотрудник", b: "Получает деньги когда нужно. Думает о работе, а не о долгах. Платит комиссию.", style: "card" },
  ];
  const wins = [
    "Rizq зарабатывает на комиссии",
    "Банк зарабатывает + получает 100K клиентов",
    "Работодатель снижает текучку бесплатно",
    "Сотрудник получает свои деньги без кредита",
  ];
  return (
    <section style={{ background: "var(--bg-sand)" }}>
      <div className="container">
        <SecHead num="04" kicker="Участники" title="Четыре роли. Все в выигрыше." lead="В классической схеме EWA кто-то проигрывает. У нас — никто. Все четыре стороны получают конкретную выгоду."/>

        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14,
        }} className="s04-grid">
          {players.map((p, i) => {
            const isBrand = p.style === "brand";
            const isDark = p.style === "dark";
            return (
              <div key={i} className="tile" style={{
                padding: 26, borderRadius: 22,
                background: isBrand ? "var(--brand)" : isDark ? "var(--bg-deep)" : "var(--card)",
                color: isBrand ? "var(--brand-ink)" : isDark ? "var(--inverse)" : "var(--ink)",
                border: !isBrand && !isDark ? "1px solid var(--line)" : "none",
                boxShadow: isBrand ? "var(--sh-glow)" : "var(--sh-card)",
                display: "flex", flexDirection: "column", gap: 10,
                minHeight: 220,
              }}>
                <span style={{
                  fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: isBrand ? "oklch(0.18 0.05 155 / 0.6)" : isDark ? "var(--brand)" : "var(--ink-3)",
                }}>{p.tag}</span>
                <h3 style={{ fontSize: 32, letterSpacing: "-0.03em", color: "inherit" }}>{p.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: isBrand ? "oklch(0.18 0.05 155 / 0.75)" : isDark ? "var(--inverse-2)" : "var(--ink-2)", marginTop: "auto" }}>{p.b}</p>
              </div>
            );
          })}
        </div>

        {/* Win-Win banner */}
        <div className="grain" style={{
          marginTop: 32,
          borderRadius: 28,
          padding: "44px 40px",
          background: "var(--bg-deep)",
          color: "var(--inverse)",
          position: "relative", overflow: "hidden",
        }}>
          <div aria-hidden style={{
            position: "absolute", right: -120, top: -80, width: 360, height: 360, borderRadius: "50%",
            background: "radial-gradient(circle at 30% 30%, oklch(0.78 0.24 142 / 0.4), transparent 70%)",
            filter: "blur(10px)", zIndex: 0,
          }}/>
          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "auto 1fr", gap: 56, alignItems: "center" }} className="s04-win">
            <div style={{
              fontSize: "clamp(56px, 8vw, 120px)",
              fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.9,
              color: "var(--brand)",
            }}>Win<span style={{color:"var(--inverse)"}}>×</span>4</div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3 }}>Каждый из четырёх участников получает прямую выгоду.</div>
              <ul style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0 }}>
                {wins.map((w, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "var(--inverse-2)" }}>
                    <span style={{ color: "var(--brand)", marginTop: 4 }}><Icon.check size={16}/></span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1000px) { .s04-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 760px) {
            .s04-grid { grid-template-columns: 1fr !important; }
            .s04-win { grid-template-columns: 1fr !important; gap: 20px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

window.S01Hero = S01Hero;
window.S02Problem = S02Problem;
window.S03Solution = S03Solution;
window.S04Players = S04Players;
window.BankHeader = BankHeader;
window.SecHead = SecHead;
window.DataTable = DataTable;


/* ====== bank-deck-2.jsx ====== */
/* bank-deck-2.jsx — sections 05–10 */
/* global React, Icon, Reveal, AnimatedNumber, SecHead, DataTable */

/* ============================================================
   04b — ЧТО RIZQ БЕРЁТ НА СЕБЯ
   ============================================================ */
function S04bRizq() {
  const tasks = [
    { n: "01", icon: <Icon.users/>, t: "Находим компании", b: "B2B-продажи, прямые контракты с работодателями. Ритейл, HoReCa, FMCG, логистика, IT — пайплайн уже выстроен." },
    { n: "02", icon: <Icon.building/>, t: "Onboarding & KYB", b: "Верификация компании, документы, юридическое оформление, электронные договоры. Без депозита — риск на юрлице, закрыт страховкой." },
    { n: "03", icon: <Icon.link/>, t: "Интеграция с ERP", b: "Готовые коннекторы к 1С, SAP, BAS, Bitrix24. CSV/XLSX для бумажных. Авто-синхронизация табеля ежедневно." },
    { n: "04", icon: <Icon.bolt/>, t: "Технологическая платформа", b: "Мобильное приложение iOS/Android, Telegram Mini App, веб-кабинет работодателя, API для банка. Всё наше." },
    { n: "05", icon: <Icon.chart/>, t: "Расчёт заработанного", b: "Real-time баланс по формуле: оклад × присутственные дни ÷ рабочие дни × лимит 70%. Каждый день обновление." },
    { n: "06", icon: <Icon.bank/>, t: "Приводим клиентов банку", b: "Передаём паспортные данные. Банк открывает счёт и карту. 100K сотрудников = 100K новых клиентов. CAC = $0." },
    { n: "07", icon: <Icon.shield/>, t: "Гарантия возврата · NPL = 0", b: "Payroll-backed модель: удержание из зарплаты в день выплаты + страхование корпоративного дефолта. Невозвратов нет." },
    { n: "08", icon: <Icon.wallet/>, t: "Реестр и удержания", b: "Автоматическая выгрузка реестра выводов в ERP компании. В день зарплаты — синхронизация и возврат банку." },
    { n: "09", icon: <Icon.check/>, t: "Шариатский комплаенс", b: "Структура Ujra + Vakala + Takaful. Соответствие FAS 9/23 AAOIFI. Готовые материалы для ревью шариатским советом банка." },
    { n: "10", icon: <Icon.spark/>, t: "Усиливаем Halal-окно банка", b: "Позиционируем банк как Halal-партнёра. Кейс для ислам­ского комитета. Доступ к рынку 96–98% мусульманского населения." },
    { n: "11", icon: <Icon.heart/>, t: "Бренд и маркетинг", b: "Co-branding в приложении, PR-кампании, контент, лояльность сотрудников. Витрина продуктов банка встроена в Rizq." },
    { n: "12", icon: <Icon.smile/>, t: "Поддержка и операции", b: "Сопровождение сотрудников 24/7, бухгалтерская и юридическая поддержка компаний, риск-мониторинг, безопасность." },
  ];

  return (
    <section style={{ background: "var(--bg-deep)", color: "var(--inverse)" }}>
      <div className="container">
        <SecHead dark num="04+" kicker="Что Rizq берёт на себя" title={<>Банк просто получает клиентов и доход. <span style={{color:"var(--brand)"}}>Всю работу делаем мы.</span></>} lead="От поиска компаний до шариатского ревью — операционный цикл, продукт, риск, комплаенс и маркетинг на стороне Rizq. Банк финансирует выплаты и получает 7 источников дохода."/>

        {/* Comparison strip */}
        <div style={{
          marginTop: 36,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
        }} className="s04b-strip">
          <div style={{
            padding: "20px 24px", borderRadius: 16,
            background: "oklch(0.20 0.04 158)",
            border: "1px solid oklch(0.30 0.04 158)",
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <div style={{
              fontFamily: "var(--f-mono)", fontSize: 36, fontWeight: 800,
              color: "var(--brand)", letterSpacing: "-0.04em", lineHeight: 1,
              minWidth: 56,
            }}>1</div>
            <div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--inverse-2)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Банк делает</div>
              <div style={{ marginTop: 4, fontSize: 16, fontWeight: 700, color: "var(--inverse)" }}>Финансирует выплаты сотрудникам</div>
            </div>
          </div>
          <div style={{
            padding: "20px 24px", borderRadius: 16,
            background: "var(--brand)", color: "var(--brand-ink)",
            display: "flex", alignItems: "center", gap: 16,
            boxShadow: "var(--sh-glow)",
          }}>
            <div style={{
              fontFamily: "var(--f-mono)", fontSize: 36, fontWeight: 800,
              letterSpacing: "-0.04em", lineHeight: 1, minWidth: 56,
            }}>12</div>
            <div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "oklch(0.20 0.06 155 / 0.7)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Rizq делает</div>
              <div style={{ marginTop: 4, fontSize: 16, fontWeight: 700 }}>Всё остальное — продукт, ops, риск, комплаенс</div>
            </div>
          </div>
        </div>

        {/* 12 capability cards */}
        <div style={{
          marginTop: 18,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14,
        }} className="s04b-grid">
          {tasks.map((t, i) => (
            <div key={i} style={{
              padding: 22, borderRadius: 18,
              background: "oklch(0.16 0.03 158)",
              border: "1px solid oklch(0.28 0.04 158)",
              display: "flex", flexDirection: "column", gap: 10,
              minHeight: 220,
              transition: "transform .25s, border-color .25s, background .25s",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "var(--brand)";
                e.currentTarget.style.background = "oklch(0.19 0.04 158)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "oklch(0.28 0.04 158)";
                e.currentTarget.style.background = "oklch(0.16 0.03 158)";
              }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: "oklch(0.22 0.05 158)",
                  color: "var(--brand)",
                  display: "grid", placeItems: "center",
                  border: "1px solid oklch(0.32 0.05 158)",
                }}>{t.icon}</div>
                <span style={{
                  fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700,
                  color: "var(--brand)", letterSpacing: "0.08em",
                }}>{t.n}</span>
              </div>
              <h3 style={{ fontSize: 16, marginTop: 4, letterSpacing: "-0.015em", lineHeight: 1.3, color: "var(--inverse)" }}>{t.t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--inverse-2)" }}>{t.b}</p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 1100px) { .s04b-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          @media (max-width: 820px) {
            .s04b-grid { grid-template-columns: 1fr 1fr !important; }
            .s04b-strip { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 500px) { .s04b-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   05 — ЧТО ПОЛУЧАЕТ БАНК (7 income sources)
   ============================================================ */
function S05Bank() {
  const income = [
    { n: "01", icon: <Icon.users/>, t: "Новые клиенты — бесплатно", b: "Каждый сотрудник в Rizq → новый клиент банка. Передаём данные, банк открывает счёт и карту.", stat: "100K", statLabel: "клиентов / год" },
    { n: "02", icon: <Icon.bank/>, t: "Зарплатные проекты", b: "Компания видит ценность → переводит зарплатный проект в банк-партнёр. Дополнительный ФОТ на счетах.", stat: "+ФОТ", statLabel: "на счетах банка" },
    { n: "03", icon: <Icon.wallet/>, t: "Прямая комиссия", b: "50% от 2.5% ujra с каждого вывода → банку. Средний чек $125 → $1.55 на транзакцию.", stat: "$1.55", statLabel: "с транзакции" },
    { n: "04", icon: <Icon.lock/>, t: "Расчётные остатки", b: "Все выплаты и возвраты проходят через счета банка. Постоянный операционный float и транзакционные потоки на балансе.", stat: "Float", statLabel: "операционный" },
    { n: "05", icon: <Icon.bolt/>, t: "Interchange с карт", b: "Каждый сотрудник уже получил карту банка. Interchange с покупок, обслуживание, лояльность.", stat: "100%", statLabel: "клиентов с картой" },
    { n: "06", icon: <Icon.chart/>, t: "Cross-sell продуктов", b: "Активные клиенты с балансом. Депозиты, ипотека, страхование, переводы — встроенная витрина.", stat: "6+", statLabel: "категорий продуктов" },
  ];

  const strategy = [
    { n: "07", icon: <Icon.spark/>, t: "Усиление исламского окна", b: "Halal-EWA — флагман-продукт для исламского банкинга банка. Готовый кейс для шариатского совета. Доступ к 96–98% мусульманскому населению Таджикистана.", tag: "Halal-флагман" },
    { n: "08", icon: <Icon.heart/>, t: "Бренд и инновации", b: "Банк позиционируется как современный fintech-партнёр. Co-branding в приложении и Telegram Mini App. PR-кампании, медийная активность вокруг социальной миссии.", tag: "Fintech-DNA" },
    { n: "09", icon: <Icon.shield/>, t: "Конкурентное преимущество", b: "Первый и единственный halal EWA-продукт в стране. Таджикистан + Кыргызстан + Узбекистан — окно регионального лидерства в исламском банкинге.", tag: "First-mover moat" },
  ];

  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", top: -160, right: -120, width: 520, height: 520, borderRadius: "50%",
        background: "radial-gradient(circle at 35% 35%, oklch(0.85 0.18 145 / 0.30), transparent 70%)",
        filter: "blur(20px)", zIndex: 0,
      }}/>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SecHead num="05" kicker="Что получает банк" title={<>Все выгоды банка. <span style={{color:"var(--brand-2)"}}>0 риска.</span></>} lead="Шесть прямых источников дохода + три стратегических преимущества. Все вместе — без CAC, без NPL, без операционной нагрузки."/>

        {/* Group A — Income */}
        <div style={{ marginTop: 48 }}>
          <div className="s05-group-head">
            <span className="s05-group-num">A</span>
            <div>
              <div className="s05-group-kicker">Доходы</div>
              <div className="s05-group-title">Шесть источников. Все независимые.</div>
            </div>
          </div>

          <div style={{
            marginTop: 22,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
          }} className="s05-income-grid">
            {income.map((s, i) => (
              <div key={i} className="s05-card" style={{
                padding: 24, borderRadius: 20,
                background: "var(--card)", border: "1px solid var(--line)",
                display: "flex", flexDirection: "column", gap: 12,
                minHeight: 240, position: "relative", overflow: "hidden",
              }}>
                {/* corner accent */}
                <div aria-hidden style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg, var(--brand), transparent)",
                  opacity: 0.6,
                }}/>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: "var(--bg-sand)", color: "var(--bg-deep)",
                    display: "grid", placeItems: "center",
                    border: "1px solid var(--line)",
                  }}>{s.icon}</div>
                  <span style={{
                    fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700,
                    color: "var(--ink-3)", letterSpacing: "0.08em",
                  }}>{s.n}</span>
                </div>
                <h3 style={{ fontSize: 17, marginTop: 4, letterSpacing: "-0.015em", lineHeight: 1.3 }}>{s.t}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{s.b}</p>
                <div style={{
                  marginTop: "auto", paddingTop: 14, borderTop: "1px dashed var(--line-2)",
                  display: "flex", alignItems: "baseline", gap: 8,
                }}>
                  <span style={{
                    fontSize: 20, fontWeight: 800, color: "var(--brand-2)",
                    letterSpacing: "-0.02em", fontFamily: "var(--f-sans)", lineHeight: 1,
                  }}>{s.stat}</span>
                  <span style={{
                    fontSize: 10, color: "var(--ink-3)", textTransform: "uppercase",
                    letterSpacing: "0.05em", fontFamily: "var(--f-mono)", fontWeight: 600,
                  }}>{s.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group B — Strategy / Brand */}
        <div style={{ marginTop: 48 }}>
          <div className="s05-group-head">
            <span className="s05-group-num">B</span>
            <div>
              <div className="s05-group-kicker">Стратегия · бренд · позиционирование</div>
              <div className="s05-group-title">Три преимущества за пределами выручки.</div>
            </div>
          </div>

          <div style={{
            marginTop: 22,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
          }} className="s05-strategy-grid">
            {strategy.map((s, i) => (
              <div key={i} className="s05-card" style={{
                padding: 28, borderRadius: 22,
                background: "linear-gradient(160deg, oklch(0.96 0.04 145), var(--card) 70%)",
                border: "1.5px solid var(--brand)",
                display: "flex", flexDirection: "column", gap: 14,
                minHeight: 280, position: "relative", overflow: "hidden",
              }}>
                <div aria-hidden style={{
                  position: "absolute", right: -40, top: -40, width: 140, height: 140,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, oklch(0.78 0.24 142 / 0.18), transparent 70%)",
                }}/>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: "var(--brand)", color: "var(--brand-ink)",
                    display: "grid", placeItems: "center",
                    boxShadow: "var(--sh-glow)",
                  }}>{s.icon}</div>
                  <span style={{
                    fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700,
                    color: "var(--brand-2)", letterSpacing: "0.08em",
                  }}>{s.n}</span>
                </div>
                <h3 style={{ fontSize: 20, letterSpacing: "-0.02em", lineHeight: 1.25, position: "relative" }}>{s.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)", position: "relative" }}>{s.b}</p>
                <div style={{
                  marginTop: "auto", paddingTop: 8, position: "relative",
                }}>
                  <span style={{
                    display: "inline-block",
                    padding: "5px 12px", borderRadius: 999,
                    background: "var(--brand)", color: "var(--brand-ink)",
                    fontSize: 11, fontFamily: "var(--f-mono)", fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}>{s.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Big NPL/CAC moment */}
        <div className="grain mesh" style={{
          marginTop: 48, borderRadius: 32, padding: "56px 48px",
          position: "relative", overflow: "hidden", color: "var(--inverse)",
        }}>
          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }} className="s05-callout">
            {[
              { k: "NPL", n: "0", suf: "%", t: "Невозвратов нет.", b: "Возврат гарантирован работодателем через удержание из зарплаты. Не кредит населению — payroll-backed операция." },
              { k: "CAC", n: "$0", suf: "", t: "Клиенты бесплатные.", b: "Не реклама, не таргет. Клиенты приходят через работодателя — сразу с активной картой и счётом." },
            ].map((m, i) => (
              <div key={i}>
                <span style={{
                  fontFamily: "var(--f-mono)", fontSize: 12, color: "var(--brand)",
                  letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700,
                }}>{m.k}</span>
                <div className="s05-mega" style={{
                  marginTop: 12,
                  fontSize: "clamp(72px, 10vw, 160px)",
                  fontWeight: 800, color: "var(--brand)",
                  letterSpacing: "-0.06em", lineHeight: 0.9,
                }}>{m.n}<span style={{ fontSize: "0.5em", opacity: 0.75 }}>{m.suf}</span></div>
                <div style={{ marginTop: 8, fontSize: 22, fontWeight: 700 }}>{m.t}</div>
                <p style={{ marginTop: 12, color: "var(--inverse-2)", maxWidth: "36ch", fontSize: 15, lineHeight: 1.55 }}>{m.b}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .s05-group-head {
            display: flex; align-items: center; gap: 16px;
          }
          .s05-group-num {
            width: 44px; height: 44px; border-radius: 12px;
            background: var(--bg-deep); color: var(--brand);
            display: grid; place-items: center;
            font-family: var(--f-mono); font-weight: 800; font-size: 18px;
            flex: none;
          }
          .s05-group-kicker {
            font-family: var(--f-mono); font-size: 11px; font-weight: 700;
            color: var(--ink-3); letter-spacing: 0.14em; text-transform: uppercase;
          }
          .s05-group-title {
            margin-top: 4px; font-size: 22px; font-weight: 700;
            letter-spacing: -0.02em; color: var(--ink);
          }
          .s05-card { transition: transform .25s, box-shadow .25s, border-color .25s; }
          .s05-card:hover { transform: translateY(-3px); box-shadow: var(--sh-card); }
          .s05-income-grid .s05-card:hover { border-color: var(--brand-2); }
          @media (max-width: 1000px) {
            .s05-income-grid { grid-template-columns: 1fr 1fr !important; }
            .s05-strategy-grid { grid-template-columns: 1fr !important; }
            .s05-callout { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
          @media (max-width: 600px) {
            .s05-income-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   06 — ЮНИТ-ЭКОНОМИКА
   ============================================================ */
function S06UnitEcon() {
  return (
    <section style={{ background: "var(--bg-sand)" }}>
      <div className="container">
        <SecHead num="06" kicker="Юнит-экономика" title={<>2.5% комиссия. <span className="display-serif" style={{color:"var(--ink-2)"}}>Делится</span> 50/50.</>} lead="Комиссия делится пополам: банк и Rizq. Ujra — фиксированная плата за сервис, не процент."/>

        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }} className="s06-grid">
          {/* Left — per-tx breakdown */}
          <div>
            <div style={{
              fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)",
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12,
            }}>На одну транзакцию</div>
            <DataTable rows={[
              ["Средний чек", "~$125"],
              ["Комиссия 2.5%", "~$3.10"],
              ["Доля банка (50%)", "~$1.55"],
              ["Доля Rizq (50%)", "~$1.55"],
              ["Затраты на транзакцию", "~$0.50"],
              ["Чистая маржа банка", "~$1.05"],
            ]} highlight={5}/>
          </div>

          {/* Right — scale */}
          <div>
            <div style={{
              fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)",
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12,
            }}>Доход банка по масштабу (только прямая комиссия)</div>
            <div style={{
              borderRadius: 16, overflow: "hidden", border: "1px solid var(--line)",
              background: "var(--card)",
            }}>
              {/* header */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                padding: "12px 22px", background: "var(--bg-sand)",
                fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)",
                letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700,
              }}>
                <span>Пользователей</span><span>Выводов/мес</span><span style={{textAlign:"right"}}>Доход банка/мес</span>
              </div>
              {[
                ["5 000", "3 000", "$4.7K", false],
                ["15 000", "9 000", "$14K", false],
                ["50 000", "30 000", "$47K", true],
                ["120 000", "48 000", "$75K", false],
              ].map(([u, w, r, hl], i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                  padding: "14px 22px", borderTop: "1px solid var(--line)",
                  background: hl ? "oklch(0.95 0.05 140)" : "transparent",
                  fontFamily: "var(--f-mono)", fontSize: 15,
                  fontWeight: hl ? 800 : 600,
                  color: hl ? "var(--ink)" : "var(--ink-2)",
                  alignItems: "center",
                }}>
                  <span>{u}</span><span>{w}</span>
                  <span style={{
                    textAlign:"right",
                    fontSize: hl ? 20 : 15,
                    color: hl ? "var(--brand-2)" : "var(--ink)",
                  }}>{r}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--ink-3)", lineHeight: 1.55 }}>
              Без учёта зарплатных проектов и cross-sell.
              На полной экосистеме доходы кратно выше.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .s06-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   07 — ШАРИАТСКИЙ КОМПЛАЕНС
   ============================================================ */
function S07Halal() {
  return (
    <section>
      <div className="container">
        <SecHead num="07" kicker="Шариатский комплаенс" title={<>100% Халяль. <span className="display-serif" style={{color:"var(--ink-2)"}}>Ujra</span> — не риба.</>} lead="Не займ. Не кредит. Услуга раннего доступа к заработанному доходу с фиксированной платой за сервис."/>

        {/* Ujra definition */}
        <div className="card" style={{
          marginTop: 48, padding: 36, borderRadius: 24,
          background: "var(--card)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{
              fontFamily: "var(--f-display)", fontStyle: "italic", fontSize: 32,
              color: "var(--brand-2)",
            }}>Ujra</span>
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 14, color: "var(--ink-3)" }}>أجرة</span>
            <span style={{ flex: 1, height: 1, background: "var(--line)" }}/>
            <span style={{
              fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)",
              textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700,
            }}>Определение</span>
          </div>
          <p style={{ marginTop: 20, fontSize: 17, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: "72ch" }}>
            В исламском праве — плата за оказанную услугу. Фиксированная сумма, определённая заранее.
            Не зависит от суммы, не зависит от срока. Это не процент и не надбавка на тело долга.
            Rizq оказывает услугу раннего доступа к заработанному — за неё взимается фиксированная плата,
            одинаковая вне зависимости от того, выводит сотрудник 50 000 или 1 500 000.
          </p>
        </div>

        {/* Riba vs Ujra split */}
        <div style={{
          marginTop: 24,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
        }} className="s07-split">
          {/* Riba — forbidden */}
          <div style={{
            padding: 32, borderRadius: 24,
            background: "oklch(0.98 0.025 25)",
            border: "1.5px solid oklch(0.85 0.10 30)",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "6px 12px", borderRadius: 999,
              background: "oklch(0.92 0.10 30)", color: "oklch(0.42 0.18 30)",
              fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>✕ Riba · запрещено</div>
            <h3 style={{ marginTop: 16, fontSize: 24, color: "oklch(0.30 0.10 28)" }}>Что такое риба</h3>
            <ul style={{ marginTop: 20, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Процент начисляется на сумму долга",
                "Чем больше сумма — тем больше платишь",
                "Чем дольше срок — тем больше платишь",
                "Тело долга может расти",
                "Штрафы и пени за просрочку",
                "Кредитор зарабатывает на долге заёмщика",
              ].map((s, i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: 14.5, color: "oklch(0.30 0.08 28)", lineHeight: 1.55 }}>
                  <span style={{ color: "oklch(0.55 0.20 30)", fontWeight: 800, fontSize: 16 }}>✕</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ujra — allowed */}
          <div style={{
            padding: 32, borderRadius: 24,
            background: "oklch(0.97 0.04 145)",
            border: "1.5px solid var(--brand)",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "6px 12px", borderRadius: 999,
              background: "var(--brand)", color: "var(--brand-ink)",
              fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>✓ Ujra · разрешено</div>
            <h3 style={{ marginTop: 16, fontSize: 24, color: "oklch(0.30 0.10 155)" }}>Ujra в Rizq</h3>
            <ul style={{ marginTop: 20, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Фиксированная плата", "не зависит от суммы"],
                ["Не зависит от срока", "плата одинаковая"],
                ["Тело не растёт", "выдали X, вернули X"],
                ["Нет штрафов", "возврат через работодателя"],
                ["Это не долг", "деньги уже заработаны"],
                ["Плата за сервис", "как за доставку или перевод"],
              ].map(([t, b], i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: 14.5, color: "oklch(0.22 0.08 155)", lineHeight: 1.55 }}>
                  <span style={{ color: "var(--brand-2)", fontWeight: 800, fontSize: 16 }}>✓</span>
                  <span><b style={{ color: "oklch(0.18 0.06 155)" }}>{t}</b> — {b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal construction */}
        <div style={{ marginTop: 48 }}>
          <h3 style={{ fontSize: 28, letterSpacing: "-0.02em" }}>Юридическая конструкция</h3>
          <p className="lead" style={{ marginTop: 8, fontSize: 16 }}>Четыре договорных элемента — для полного шариатского комплаенса.</p>

          <div style={{
            marginTop: 24,
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14,
          }} className="s07-legal">
            {[
              { n: "01", h: "Ujra", sh: "Договор услуги", b: "Между Rizq и сотрудником — оказание услуги раннего доступа к доходу. Не договор займа. Плата фиксированная." },
              { n: "02", h: "Vakala", sh: "Агентский договор", b: "Между Rizq и работодателем — агентирование на удержание и возврат. Работодатель = агент, не заёмщик." },
              { n: "03", h: "Takaful", sh: "Обеспечение", b: "Возврат обеспечен payroll-гарантией работодателя и такафул-покрытием корпоративного дефолта. Без денежного депозита с компании." },
              { n: "04", h: "AAOIFI", sh: "Стандарты", b: "Соответствие FAS 9 (Ujra) и FAS 23 (Vakala) + такафул-покрытие. Готовы к ревью независимым шариатским советом." },
            ].map((c, i) => (
              <div key={i} className="card" style={{ padding: 24, borderRadius: 20 }}>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.08em" }}>{c.n}</span>
                <div style={{ marginTop: 8, fontFamily: "var(--f-display)", fontStyle: "italic", fontSize: 28, color: "var(--brand-2)" }}>{c.h}</div>
                <div style={{ fontSize: 13, color: "var(--ink-3)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, marginTop: 4 }}>{c.sh}</div>
                <p style={{ marginTop: 12, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{c.b}</p>
              </div>
            ))}
          </div>
        </div>

          <p style={{
          marginTop: 36, padding: "20px 24px",
          borderLeft: "3px solid var(--brand)",
          background: "var(--bg-sand)",
          fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6,
          borderRadius: "0 12px 12px 0",
        }}>
          <b style={{ color: "var(--ink)" }}>Итог:</b> Rizq — структурно другой продукт.
          Деньги уже заработаны. Возврат гарантирован работодателем. Плата фиксированная.
          Ни один элемент конструкции не содержит риба, гарар или майсир.
        </p>

        <style>{`
          @media (max-width: 800px) {
            .s07-split { grid-template-columns: 1fr !important; }
            .s07-legal { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 500px) { .s07-legal { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   08 — ВЫРУЧКА 12 МЕСЯЦЕВ (with chart)
   ============================================================ */
function S08Revenue() {
  // [Мес, Зарег., Плат., выручка Rizq $K, объём финансирования в $K]
  const months = [
    ["M1",  "3K",   "1.2K",   1.2,   96],
    ["M2",  "7K",   "2.8K",   2.8,   224],
    ["M3",  "10K",  "4K",     4.0,   320],
    ["M4",  "17K",  "6.8K",   6.8,   544],
    ["M5",  "20K",  "8K",     8.0,   640],
    ["M6",  "27K",  "10.8K",  10.8,  864],
    ["M7",  "33K",  "13.2K",  13.2,  1056],
    ["M8",  "40K",  "16K",    16.0,  1280],
    ["M9",  "47K",  "18.8K",  18.8,  1504],
    ["M10", "60K",  "24K",    24.0,  1920],
    ["M11", "67K",  "26.8K",  26.8,  2144],
    ["M12", "80K",  "32K",    32.0,  2560],
  ];
  const maxR = Math.max(...months.map(m => m[3]));
  const maxBar = maxR * 2;
  const BANK_C = "oklch(0.82 0.10 165)";
  return (
    <section style={{ background: "var(--bg-deep)", color: "var(--inverse)" }}>
      <div className="container">
        <SecHead dark num="08" kicker="Выручка 12 месяцев" title="Ожидаемая выручка и объём финансирования." lead="Цель на M12 — $32K MRR (доля Rizq). Средний чек вывода $80, ujra 2,5% → $2.00 с каждого вывода, делим с банком 50/50 → $1.00 Rizq. 40% зарегистрированных выводят ежемесячно. Рядом — объём авансов, которые финансирует банк-партнёр."/>

        {/* Chart */}
        <div className="s08-chart-scroll" style={{
          marginTop: 48,
        }}>
          <div style={{
            padding: "36px 32px", borderRadius: 24,
            background: "oklch(0.16 0.03 158)",
            border: "1px solid oklch(0.30 0.04 158)",
          }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--inverse-2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Комиссия по месяцам · ujra</div>
              <div style={{ marginTop: 6, fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
                <AnimatedNumber value={64000}/> <span style={{ fontSize: 18, color: "var(--inverse-2)", fontWeight: 600 }}>$ на M12</span>
              </div>
              <div style={{ marginTop: 4, fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--inverse-2)" }}>Rizq $32K · Банк $32K</div>
            </div>
            <div style={{
              display: "flex", gap: 18,
              fontSize: 12, color: "var(--inverse-2)",
              fontFamily: "var(--f-mono)",
            }}>
              <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{width:10,height:10,borderRadius:3,background:"var(--brand)"}}/>Выручка Rizq</span>
              <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{width:10,height:10,borderRadius:3,background:BANK_C}}/>Выручка банка</span>
            </div>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: `repeat(${months.length}, 1fr)`,
            gap: 10, alignItems: "end", minHeight: 280,
          }}>
            {months.map(([m, , , r], i) => {
              const last = i === months.length - 1;
              const hR = Math.round((r / maxBar) * 240);
              const total = r * 2;
              return (
                <div key={m} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{
                    fontFamily: "var(--f-mono)", fontSize: 10,
                    color: "var(--inverse)", fontWeight: 700,
                    opacity: last ? 1 : 0.7,
                  }}>${total % 1 ? total.toFixed(1) : total}K</div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 2 }}>
                    <div style={{ height: hR, borderRadius: "8px 8px 0 0", background: BANK_C }}/>
                    <div style={{
                      height: hR, borderRadius: "0 0 2px 2px",
                      background: "var(--brand)",
                      boxShadow: last ? "0 0 24px oklch(0.78 0.24 142 / 0.6)" : "none",
                    }}/>
                  </div>
                  <div style={{
                    fontFamily: "var(--f-mono)", fontSize: 10,
                    color: "var(--inverse-2)",
                    fontWeight: last ? 800 : 500,
                  }}>{m}</div>
                </div>
              );
            })}
          </div>
          </div>
        </div>

        {/* Bottom — table + breakdown */}
        <div style={{
          marginTop: 32,
          display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24,
        }} className="s08-bottom">
          <div>
            <div style={{
              fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--inverse-2)",
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12,
            }}>Помесячная разбивка</div>
            <div className="s08-month-wrap">
            <div className="s08-month-table" style={{
              borderRadius: 16, overflow: "hidden",
              border: "1px solid oklch(0.30 0.04 158)",
              background: "oklch(0.16 0.03 158)",
            }}>
              <div style={{
                display: "grid", gridTemplateColumns: "56px 1fr 1.2fr 1fr 1fr",
                padding: "12px 18px", background: "oklch(0.20 0.03 158)",
                fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--inverse-2)",
                letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700,
              }}>
                <span>Мес</span><span>Активных</span><span>Финансир.</span><span style={{textAlign:"right", color: "var(--brand)"}}>Rizq</span><span style={{textAlign:"right", color: BANK_C}}>Банк</span>
              </div>
              {months.map(([m, reg, pay, r, disb], i) => {
                const last = i === months.length - 1;
                return (
                <div key={m} style={{
                  display: "grid", gridTemplateColumns: "56px 1fr 1.2fr 1fr 1fr",
                  padding: "10px 18px",
                  borderTop: "1px solid oklch(0.24 0.03 158)",
                  fontFamily: "var(--f-mono)", fontSize: 13,
                  alignItems: "center",
                  background: last ? "oklch(0.22 0.05 155)" : "transparent",
                  fontWeight: last ? 800 : 500,
                }}>
                  <span style={{ color: last ? "var(--brand)" : "var(--inverse-2)" }}>{m}</span>
                  <span style={{ color: "var(--inverse)" }}>{pay}</span>
                  <span style={{ color: "var(--inverse-2)" }}>${disb >= 1000 ? (disb/1000).toFixed(2) + "M" : disb + "K"}</span>
                  <span style={{ textAlign: "right", color: "var(--brand)", fontWeight: 800 }}>${r}K</span>
                  <span style={{ textAlign: "right", color: BANK_C, fontWeight: 800 }}>${r}K</span>
                </div>
                );
              })}
            </div>
            </div>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--inverse-2)" }}>
              <b style={{ color: "var(--brand)" }}>Суммарно за 12 мес: выручка Rizq ~$164K · доля банка ~$164K · объём финансирования ~$13.2M</b>
            </p>
          </div>

          <div>
            <div style={{
              fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--inverse-2)",
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12,
            }}>Как считается</div>
            <div style={{
              borderRadius: 16, overflow: "hidden",
              border: "1px solid oklch(0.30 0.04 158)",
              background: "oklch(0.16 0.03 158)",
            }}>
              {[
                ["Средний чек", "$80"],
                ["Комиссия 2.5% (ujra)", "$2.00"],
                ["Доля Rizq (50%)", "$1.00"],
                ["Доля банка (50%)", "$1.00"],
                ["Платящих от зарег.", "~40% / мес"],
                ["Эфф. доход Rizq / зарег. / мес", "$0.40"],
                ["Финансирование / платящего / мес", "$80"],
              ].map(([k, v], i) => (
                <div key={k} style={{
                  display: "grid", gridTemplateColumns: "1fr auto",
                  padding: "12px 18px",
                  borderTop: i ? "1px solid oklch(0.24 0.03 158)" : "none",
                }}>
                  <span style={{ fontSize: 13, color: "var(--inverse-2)" }}>{k}</span>
                  <span style={{ fontFamily: "var(--f-mono)", fontSize: 14, fontWeight: 700, color: "var(--inverse)" }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 18, padding: 20, borderRadius: 16,
              background: "oklch(0.22 0.04 158)",
              border: "1px solid oklch(0.32 0.05 158)",
            }}>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--brand)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>Пайплайн компаний</div>
              <p style={{ marginTop: 10, fontSize: 13.5, color: "var(--inverse-2)", lineHeight: 1.55 }}>
                Ритейл · HoReCa · FMCG · Логистика · Строительство · IT.
                Для 80K сотрудников при среднем штате 100 → ~800 компаний за год.
                Канал: прямые B2B-продажи + bottom-up через сотрудников.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .s08-bottom { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   09 — РЫНОК
   ============================================================ */
function S09Market() {
  const tiers = [
    { k: "TAM", v: "$2.9B", b: "3M+ рабочая сила", sub: "~$80 ср. чек", size: 1.0, color: "var(--brand)" },
    { k: "SAM", v: "$1.4B", b: "1.5M наёмных", sub: "$80 × 12 мес", size: 0.5, color: "oklch(0.65 0.20 145)" },
    { k: "SOM", v: "$480M", b: "500K пользователей", sub: "$80 × 12 мес", size: 0.18, color: "oklch(0.50 0.15 145)" },
  ];
  return (
    <section>
      <div className="container">
        <SecHead num="09" kicker="Рынок" title="Таджикистан. 3M+ рабочая сила." lead="Большой рынок, ноль конкурентов, нулевое проникновение EWA. Окно для первого игрока с готовой инфраструктурой."/>

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="s09-grid">
          {tiers.map((t, i) => (
            <div key={t.k} style={{
              padding: 28, borderRadius: 24,
              background: i === 0 ? "var(--brand)" : i === 1 ? "var(--bg-deep)" : "var(--card)",
              color: i === 0 ? "var(--brand-ink)" : i === 1 ? "var(--inverse)" : "var(--ink)",
              border: i === 2 ? "1px solid var(--line)" : "none",
              boxShadow: i === 0 ? "var(--sh-glow)" : "var(--sh-card)",
              position: "relative", overflow: "hidden",
              minHeight: 240,
              display: "flex", flexDirection: "column",
            }}>
              <span style={{
                fontFamily: "var(--f-mono)", fontSize: 12, fontWeight: 800,
                letterSpacing: "0.16em",
                color: i === 0 ? "oklch(0.18 0.05 155)" : i === 1 ? "var(--brand)" : "var(--brand-2)",
              }}>{t.k}</span>
              <div style={{
                marginTop: 14, fontSize: "clamp(48px, 5vw, 80px)",
                fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1,
              }}>{t.v}</div>
              <div style={{ marginTop: 18, fontSize: 18, fontWeight: 700 }}>{t.b}</div>
              <div style={{
                marginTop: 6, fontSize: 13,
                color: i === 0 ? "oklch(0.18 0.05 155 / 0.7)" : i === 1 ? "var(--inverse-2)" : "var(--ink-3)",
                fontFamily: "var(--f-mono)",
              }}>{t.sub}</div>

              {/* size visualization */}
              <div style={{ marginTop: "auto", paddingTop: 24 }}>
                <div style={{
                  height: 6, borderRadius: 999,
                  background: i === 0 ? "oklch(0.18 0.05 155 / 0.2)" : i === 1 ? "oklch(0.30 0.04 158)" : "var(--bg-sand)",
                  overflow: "hidden",
                }}>
                  <div style={{
                    height: "100%", width: `${t.size * 100}%`,
                    background: i === 0 ? "var(--brand-ink)" : "var(--brand)",
                    borderRadius: 999,
                  }}/>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 800px) { .s09-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   10 — КЕЙС NDA компания
   ============================================================ */
function S10Uyda() {
  return (
    <section style={{ background: "var(--bg-sand)" }}>
      <div className="container">
        <SecHead num="10" kicker="Кейс" title="NDA компания — реальный пилот." lead="Сеть товаров для дома. 200+ сотрудников. Пилот 2 месяца. Подтверждённые результаты. Название не раскрывается по условиям NDA."/>

        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24,
        }} className="s10-top">
          {/* Left — story */}
          <div className="card" style={{ padding: 36, borderRadius: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: "var(--bg-deep)", color: "var(--brand)",
                display: "grid", placeItems: "center", fontWeight: 800,
                fontSize: 22, letterSpacing: "-0.02em",
              }}>NDA</div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800 }}>NDA компания</div>
                <div style={{ fontSize: 13, color: "var(--ink-3)" }}>200+ сотрудников · сеть товаров для дома</div>
              </div>
            </div>

            <h3 style={{ marginTop: 24, fontSize: 22 }}>Интеграция</h3>
            <p style={{ marginTop: 8, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6 }}>
              Успешно интегрировались с ERP 1С и бухгалтерией клиента. Синхронизируем данные о зарплате,
              считаем каждый заработанный день. Учитываем приходы, уходы, отпускные, больничные.
              Работаем с полным ФОТ компании.
            </p>

            <h3 style={{ marginTop: 24, fontSize: 22 }}>Что произошло за 2 месяца</h3>
            <ul style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0 }}>
              {[
                "Текучка упала с 65% до 30% среди продавцов, консультантов и работников склада",
                "KPI стали выполняться — качество работы выросло",
                "В 2 раза упали расходы на найм и количество открытых вакансий",
                "Увеличилась выручка точки — на втором месяце и второй точки тоже",
                "Клиент расширяет Rizq на всю сеть",
              ].map((s, i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
                  <span style={{ color: "var(--brand-2)", marginTop: 3 }}><Icon.check size={14}/></span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — metrics */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { k: "75%", t: "Использовали сервис", b: "из 200+ сотрудников", brand: true },
              { k: "65% → 30%", t: "Текучка за 2 мес", b: "падение в 2.2×", brand: false },
              { k: "×2", t: "Снижение расходов на найм", b: "и открытых вакансий", brand: false },
              { k: "$487", t: "Выручка за пилот", b: "$3.10 × ~157 выводов — вся Rizq", brand: false },
            ].map((m, i) => (
              <div key={i} style={{
                padding: 22, borderRadius: 20,
                background: m.brand ? "var(--brand)" : "var(--card)",
                color: m.brand ? "var(--brand-ink)" : "var(--ink)",
                border: m.brand ? "none" : "1px solid var(--line)",
                boxShadow: m.brand ? "var(--sh-glow)" : "var(--sh-soft)",
                display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, alignItems: "center",
              }}>
                <div style={{
                  fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em",
                  lineHeight: 1, fontFamily: "var(--f-sans)",
                  minWidth: 110,
                }}>{m.k}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{m.t}</div>
                  <div style={{ fontSize: 13, color: m.brand ? "oklch(0.15 0.05 155 / 0.7)" : "var(--ink-3)", marginTop: 4 }}>{m.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .s10-top { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

window.S04bRizq = S04bRizq;
window.S05Bank = S05Bank;
window.S06UnitEcon = S06UnitEcon;
window.S07Halal = S07Halal;
window.S08Revenue = S08Revenue;
window.S09Market = S09Market;
window.S10Uyda = S10Uyda;


/* ====== investor-deck.jsx ====== */
/* investor-deck.jsx — Rizq Investor Proposal
   Reuses bank-deck sections + adds: WhyNow, BusinessModelIntro, InvestorAsk, Exit
   Disable bank auto-mount BEFORE loading bank-deck-3.jsx.
*/
/* global React, ReactDOM, RizqLogo, Icon, Btn, Reveal, BankLocaleSwitch,
   SecHead, DataTable, AnimatedNumber,
   S01Hero, S02Problem, S03Solution, S07Halal, S08Revenue, S09Market, S10Uyda,
   S11Team, S12Roadmap, S13GTM, BankFooter */

const { useState: useS, useEffect: useE } = React;

/* ============================================================
   INVESTOR HEADER (parallels BankHeader; different badge)
   ============================================================ */
function InvestorHeader() {
  const [scrolled, setScrolled] = useS(false);
  useE(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "oklch(0.965 0.014 85 / 0.85)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "background .2s, border-color .2s",
    }}>
      <div className="container bank-header-row" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72, gap: 16,
      }}>
        <a href="index.html" className="bank-back" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ink-3)", fontSize: 13, fontWeight: 600 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
          <span className="bank-back-label">На главную</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <RizqLogo/>
          <span className="bank-deck-badge" style={{
            fontFamily: "var(--f-mono)", fontSize: 10,
            padding: "5px 9px", borderRadius: 6,
            background: "oklch(0.96 0.04 90)", color: "oklch(0.45 0.12 70)",
            border: "1px solid oklch(0.85 0.10 75)",
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>Investor Deck</span>
        </div>
        <span className="bank-confidential" style={{
          fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 600,
          padding: "6px 10px", borderRadius: 999,
          background: "var(--bg-deep)", color: "var(--brand)",
          letterSpacing: "0.12em", textTransform: "uppercase",
        }}>● Раунд · 2026</span>
      </div>
    </header>
  );
}

/* ============================================================
   WHY NOW (trends)
   ============================================================ */
function S_WhyNow() {
  return (
    <section style={{ background: "var(--bg-sand)" }}>
      <div className="container">
        <SecHead num="05" kicker="Почему сейчас" title={<>Окно открыто. <span className="display-serif" style={{color:"var(--ink-2)"}}>Только сейчас.</span></>} lead="Три независимых тренда сошлись в одной точке. Каждый из них в отдельности — рыночная возможность. Вместе — отрасль без конкурентов."/>

        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
        }} className="why-grid">

          {/* 01 — Islamic factor */}
          <div className="card" style={{
            padding: 32, borderRadius: 24,
            background: "linear-gradient(160deg, oklch(0.97 0.04 145), var(--card) 70%)",
            border: "1.5px solid var(--brand)",
            display: "flex", flexDirection: "column", gap: 16,
            position: "relative", overflow: "hidden",
          }}>
            <div aria-hidden style={{
              position: "absolute", right: -40, top: -40, width: 180, height: 180,
              borderRadius: "50%",
              background: "radial-gradient(circle, oklch(0.78 0.24 142 / 0.22), transparent 70%)",
            }}/>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "5px 12px", borderRadius: 999,
                background: "var(--brand)", color: "var(--brand-ink)",
                fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
              }}>01 · Исламский фактор</span>
              <span style={{ fontSize: 28 }}>☪️</span>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--brand-2)" }}>96–98%</div>
              <div style={{ marginTop: 6, fontSize: 14, color: "var(--ink-2)", fontWeight: 600 }}>населения РТ — мусульмане</div>
            </div>
            <p style={{ position: "relative", fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.6 }}>
              Кредит с процентом — <b style={{ color: "var(--ink)" }}>риба</b>. Миллионы берут кредиты вынужденно, с чувством вины. Rizq работает по <i style={{ fontFamily: "var(--f-display)", color: "var(--brand-2)" }}>ujra</i> — фиксированная плата, не процент.
            </p>
          </div>

          {/* 03 — Global trend */}
          <div className="card" style={{
            padding: 32, borderRadius: 24,
            background: "var(--bg-deep)", color: "var(--inverse)",
            border: "none",
            display: "flex", flexDirection: "column", gap: 16,
            position: "relative", overflow: "hidden",
          }}>
            <div aria-hidden style={{
              position: "absolute", right: -120, top: -80, width: 360, height: 360, borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, oklch(0.78 0.24 142 / 0.30), transparent 70%)",
              filter: "blur(10px)",
            }}/>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "5px 12px", borderRadius: 999,
                background: "oklch(0.22 0.05 158)", color: "var(--brand)",
                fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                border: "1px solid oklch(0.32 0.05 158)",
              }}>02 · Глобальный тренд</span>
              <span style={{ fontSize: 28 }}>🌍</span>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--inverse)" }}>
                EWA — <span style={{ color: "var(--brand)" }}>+28% CAGR</span> на EM
              </div>
              <p style={{ marginTop: 8, fontSize: 13.5, color: "var(--inverse-2)", lineHeight: 1.55 }}>
                DailyPay, Prosper Pay, Refyne — EWA растёт везде. В Таджикистане ноль игроков. Первый забирает рынок.
              </p>
            </div>

            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { v: "+28%", k: "CAGR" },
                { v: "$1B+", k: "рынок МФО РТ" },
                { v: "×1.8", k: "рост г/г" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "12px 14px", borderRadius: 12,
                  background: "oklch(0.20 0.04 158)",
                  border: "1px solid oklch(0.30 0.04 158)",
                }}>
                  <div style={{ fontFamily: "var(--f-mono)", fontSize: 18, fontWeight: 800, color: "var(--brand)", letterSpacing: "-0.02em" }}>{s.v}</div>
                  <div style={{ marginTop: 4, fontFamily: "var(--f-mono)", fontSize: 9, color: "var(--inverse-2)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{s.k}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 04 — Psychology */}
          <div className="card" style={{
            padding: 32, borderRadius: 24,
            display: "flex", flexDirection: "column", gap: 16,
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "5px 12px", borderRadius: 999,
                background: "var(--bg-sand)", color: "var(--ink-2)",
                fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                border: "1px solid var(--line)",
              }}>03 · Психология</span>
              <span style={{ fontSize: 28 }}>🧠</span>
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                Кредит = долг. <span className="display-serif" style={{ color: "var(--ink-2)" }}>EWA</span> = свои деньги.
              </div>
              <p style={{ marginTop: 8, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
                Кредит — стресс, тревога, стыд. Rizq переворачивает: «Ты не берёшь в долг. Ты получаешь своё.»
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{
                padding: "16px 18px", borderRadius: 14,
                background: "oklch(0.98 0.025 25)",
                border: "1.5px solid oklch(0.85 0.10 30)",
              }}>
                <div style={{ fontSize: 18, color: "oklch(0.50 0.20 30)", fontWeight: 800 }}>❌ Кредит</div>
                <div style={{ marginTop: 6, fontSize: 14, color: "oklch(0.30 0.10 28)", fontWeight: 600, fontStyle: "italic" }}>«Я в долгу»</div>
                <div style={{ marginTop: 2, fontSize: 12, color: "oklch(0.40 0.08 28)" }}>стресс</div>
              </div>
              <div style={{
                padding: "16px 18px", borderRadius: 14,
                background: "oklch(0.97 0.04 145)",
                border: "1.5px solid var(--brand)",
              }}>
                <div style={{ fontSize: 18, color: "var(--brand-2)", fontWeight: 800 }}>✓ Rizq</div>
                <div style={{ marginTop: 6, fontSize: 14, color: "oklch(0.22 0.08 155)", fontWeight: 600, fontStyle: "italic" }}>«Это моё»</div>
                <div style={{ marginTop: 2, fontSize: 12, color: "oklch(0.30 0.08 155)" }}>контроль</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) { .why-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   BUSINESS MODEL INTRO (precedes S08 Revenue)
   ============================================================ */
function S_BizIntro() {
  return (
    <section style={{ background: "var(--bg-deep)", color: "var(--inverse)", paddingBottom: 24 }}>
      <div className="container">
        <SecHead dark num="08" kicker="Бизнес-модель" title={<>Простая модель. <span className="display-serif" style={{color:"var(--inverse-2)"}}>2,5% комиссия</span> с каждого вывода.</>} lead="Rizq берёт 2,5% ujra (фиксированная плата за услугу) с каждого вывода и делит её с банком-партнёром 50/50. Банк финансирует выводы из собственных средств. Никаких подписок, абонентки или скрытых платежей."/>

        <div style={{
          marginTop: 40,
          display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24,
        }} className="biz-intro">
          {/* Diagram — Rizq-focused */}
          <div style={{
            padding: 32, borderRadius: 24,
            background: "oklch(0.16 0.03 158)",
            border: "1px solid oklch(0.30 0.04 158)",
            display: "flex", flexDirection: "column", gap: 20,
          }} className="biz-card-pad">
            <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--inverse-2)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>Выручка Rizq · на один вывод</div>

            {/* Multiplier flow */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 12, alignItems: "stretch" }} className="biz-flow">
              <div style={{
                padding: "18px 20px", borderRadius: 14,
                background: "oklch(0.20 0.04 158)",
                border: "1px solid oklch(0.30 0.04 158)",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--inverse-2)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Средний чек</div>
                <div style={{ marginTop: 8, fontSize: 32, fontWeight: 800, color: "var(--inverse)", letterSpacing: "-0.03em", lineHeight: 1 }}>$80</div>
                <div style={{ marginTop: 6, fontSize: 11, color: "var(--inverse-2)" }}>вывод сотрудника</div>
              </div>
              <div style={{
                display: "grid", placeItems: "center",
                fontFamily: "var(--f-mono)", fontSize: 22, color: "var(--brand)", fontWeight: 800,
              }} className="biz-x">×</div>
              <div style={{
                padding: "18px 20px", borderRadius: 14,
                background: "oklch(0.22 0.05 158)",
                border: "1px solid var(--brand)",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--brand)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Ujra (халяль)</div>
                <div style={{ marginTop: 8, fontSize: 32, fontWeight: 800, color: "var(--inverse)", letterSpacing: "-0.03em", lineHeight: 1 }}>2,5%</div>
                <div style={{ marginTop: 6, fontSize: 11, color: "var(--inverse-2)" }}>фиксированная плата</div>
              </div>
            </div>

            {/* Big Rizq result */}
            <div style={{
              padding: "28px 28px", borderRadius: 18,
              background: "linear-gradient(135deg, var(--brand) 0%, oklch(0.55 0.16 145) 100%)",
              color: "var(--brand-ink)",
              boxShadow: "var(--sh-glow)",
              textAlign: "center",
              position: "relative", overflow: "hidden",
            }}>
              <div aria-hidden style={{
                position: "absolute", right: -40, top: -40, width: 160, height: 160, borderRadius: "50%",
                background: "radial-gradient(circle, oklch(1 0 0 / 0.15), transparent 70%)",
              }}/>
              <div style={{ position: "relative", fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7 }}>Доход Rizq с одной транзакции</div>
              <div style={{ position: "relative", marginTop: 8, fontSize: 64, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }} className="biz-rizq-amt">$1.00</div>
              <div style={{ position: "relative", marginTop: 8, fontSize: 13, opacity: 0.75 }}>50% от ujra ($2.00) · вторые 50% — банку</div>
            </div>

            <div style={{
              fontSize: 12, color: "var(--inverse-2)", lineHeight: 1.55,
              padding: "12px 16px", borderRadius: 10,
              background: "oklch(0.18 0.03 158)",
              border: "1px dashed oklch(0.32 0.05 158)",
            }}>
              <b style={{ color: "var(--brand)" }}>Банк финансирует:</b> банк-партнёр выдаёт выводы из своих средств. Ujra $2.00 делится 50/50: $1.00 — Rizq, $1.00 — банку.
            </div>
          </div>

          {/* Why this works */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { k: "Recurring", t: "Зарплатный цикл", b: "Каждый месяц — новые выводы. Не разовая сделка." },
              { k: "Predictable", t: "40% платящих", b: "Из зарегистрированных стабильно 40% выводят ежемесячно." },
              { k: "Scalable", t: "Маржа растёт", b: "Платформа фиксированная. Каждый новый клиент — почти чистая прибыль." },
              { k: "Halal", t: "Ujra ≠ риба", b: "Фиксированная плата за услугу, не процент на сумму." },
            ].map((p, i) => (
              <div key={i} style={{
                padding: "18px 22px", borderRadius: 16,
                background: "oklch(0.16 0.03 158)",
                border: "1px solid oklch(0.30 0.04 158)",
                display: "flex", alignItems: "center", gap: 16,
              }} className="biz-why-row">
                <div style={{
                  fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "5px 10px", borderRadius: 6,
                  background: "oklch(0.22 0.05 158)", color: "var(--brand)",
                  border: "1px solid oklch(0.32 0.05 158)",
                  flex: "none",
                }}>{p.k}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--inverse)" }}>{p.t}</div>
                  <div style={{ fontSize: 12.5, color: "var(--inverse-2)", marginTop: 2, lineHeight: 1.5 }}>{p.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .biz-intro { grid-template-columns: 1fr !important; } }
          @media (max-width: 520px) {
            .biz-card-pad { padding: 22px !important; }
            .biz-flow { grid-template-columns: 1fr !important; gap: 8px !important; }
            .biz-x { display: none !important; }
            .biz-rizq-amt { font-size: 52px !important; }
            .biz-why-row { padding: 14px 16px !important; gap: 12px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   INVESTOR ASK ($300K)
   ============================================================ */
function S_Ask() {
  return (
    <section style={{ background: "var(--bg-deep)", color: "var(--inverse)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", right: -200, top: -100, width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, oklch(0.78 0.24 142 / 0.20), transparent 70%)",
        filter: "blur(40px)",
      }}/>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SecHead dark num="14" kicker="Запрос от инвестора" title={<>Один путь. <span style={{color:"var(--brand)"}}>Полная независимость.</span></>} lead="Раунд $300K за 25% equity. Открытие МФО Нацбанка Таджикистана с первого дня. Своя выдача, свой баланс, любые банки как канал. Ждём smart money: инвестора, который поможет привлечь финансирование выплат и следующие раунды."/>

        {/* PATH A — full block */}
        <PathBlock
          tag="Раунд · 2026"
          tagSub="Halal EWA · УЗ"
          subtitle="Полная независимость с первого дня"
          amount="$300K"
          equity="25% equity"
          chips={["МФО · Нацбанка Таджикистана", "Свой баланс", "Вся комиссия Rizq"]}
          rationale={<>МФО-лицензия = собственный баланс, своя выдача, любой банк как канал.<br/><br/>Юнит-экономика полностью у Rizq. Вся комиссия $3.10 — наша. Никакого split с банком, никакой зависимости от одного партнёра.<br/><br/>От инвестора ждём не только капитал: помощь в привлечении финансирования объёма выплат и в закрытии следующих раундов.</>}
          useOfFunds={[
            { pct: "53%", amt: "$160K", title: "Уставный капитал МФО", body: "Обязательный минимум для лицензии МФО от Нацбанка Таджикистана. Без этого нельзя выдавать средства от своего имени.", primary: true },
            { pct: "28%", amt: "$84K", title: "Tech · Платформа", body: "Разработка платформы, мобильное приложение, биометрия, интеграции с зарплатными системами и СУРВ работодателей." },
            { pct: "14%", amt: "$42K", title: "Sales · B2B", body: "Команда продаж работодателям. Подключение пилотов, развёртывание, обучение HR-департаментов." },
            { pct: "5%", amt: "$14K", title: "Юр. оформление", body: "Лицензирование, договорная база с работодателями, compliance, шариатский совет, аудит." },
          ]}
          gets={[
            { t: "25% в Rizq", b: "С лицензией МФО Нацбанка Таджикистана — самостоятельный финтех-актив." },
            { t: "Полная независимость", b: "Свой баланс, своя выдача. Банк — канал, а не блокер." },
            { t: "Контроль юнит-экономики", b: "Вся комиссия ($3.10), не половина — с первого дня." },
            { t: "Halal EWA first-mover", b: "Первая лицензированная МФО с halal EWA в регионе." },
            { t: "Путь к $12M+", b: "Траектория к Seed-раунду через 12 месяцев." },
            { t: "Роль smart money", b: "Помощь в привлечении финансирования выплат и в следующих раундах." },
          ]}
          accent="brand"
        />

        {/* BREAK-EVEN ECONOMICS */}
        <BreakevenBlock/>

        <style>{`
          @media (max-width: 1000px) {
            .why2-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* BreakevenBlock — operational break-even + financing volume needs */
function BreakevenBlock() {
  const points = [
    {
      label: "Операционный ноль",
      mrr: "$30K",
      sub: "MRR · break-even",
      volume: "$1.21M / мес",
      volumeLabel: "объём финансирования",
      withdraws: "~9.7K выводов / мес",
      reg: "~24K зарегистрированных",
      paying: "~9.7K платящих",
      accent: true,
    },
    {
      label: "Целевой горизонт",
      mrr: "$100K",
      sub: "MRR · до Seed",
      volume: "$4.03M / мес",
      volumeLabel: "объём финансирования",
      withdraws: "~32K выводов / мес",
      reg: "~80K зарегистрированных",
      paying: "~32K платящих",
      accent: false,
    },
  ];
  return (
    <div style={{
      marginTop: 64, padding: 36, borderRadius: 28,
      background: "linear-gradient(160deg, oklch(0.20 0.05 158), oklch(0.14 0.02 158) 70%)",
      border: "1px solid oklch(0.30 0.04 158)",
      position: "relative", overflow: "hidden",
    }} className="be-block">
      <div aria-hidden style={{
        position: "absolute", left: -100, bottom: -100, width: 420, height: 420, borderRadius: "50%",
        background: "radial-gradient(circle, oklch(0.78 0.24 142 / 0.12), transparent 70%)",
      }}/>

      <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
        <div style={{ maxWidth: "62ch" }}>
          <span style={{
            display: "inline-block",
            fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "5px 12px", borderRadius: 999,
            background: "var(--brand)", color: "var(--brand-ink)",
          }}>Юнит-экономика · burn vs financing</span>
          <h3 style={{ marginTop: 16, fontSize: 30, color: "var(--inverse)", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
            При burn rate $30K/мес выходим в операционный ноль.
          </h3>
          <p style={{ marginTop: 12, fontSize: 15, color: "var(--inverse-2)", lineHeight: 1.6 }}>
            Каждый вывод приносит $3.10 ujra. Чтобы перекрыть burn $30K — нужно ~9.7K выводов в месяц, то есть около <b style={{ color: "var(--brand)" }}>$1.21M объёма финансирования</b> зарплатных авансов ежемесячно. Эти деньги — не наш расход, а оборотный капитал: они возвращаются от работодателя через 2–4 недели вместе с комиссией.
          </p>
          <p style={{ marginTop: 12, fontSize: 15, color: "var(--inverse-2)", lineHeight: 1.6 }}>
            <b style={{ color: "var(--brand)" }}>Помощь инвестора нужна именно в этом</b> — открыть доступ к долговому финансированию (банковские линии, debt-фонды, исламский sukuk-инструмент) под выкупленные нами требования к работодателям. Equity тратим на МФО и команду, debt — на оборот.
          </p>
        </div>
      </div>

      <div style={{
        position: "relative", marginTop: 32,
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
      }} className="be-grid">
        {points.map((p, i) => (
          <div key={i} style={{
            padding: 28, borderRadius: 20,
            background: p.accent ? "var(--brand)" : "oklch(0.18 0.03 158)",
            color: p.accent ? "var(--brand-ink)" : "var(--inverse)",
            border: p.accent ? "none" : "1px solid oklch(0.30 0.04 158)",
            boxShadow: p.accent ? "var(--sh-glow)" : "none",
            display: "flex", flexDirection: "column", gap: 14,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{
                fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: p.accent ? "oklch(0.18 0.05 155 / 0.7)" : "var(--brand)",
              }}>{p.label}</span>
              <span style={{
                fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                color: p.accent ? "oklch(0.18 0.05 155 / 0.6)" : "var(--inverse-2)",
                letterSpacing: "0.08em",
              }}>0{i+1}</span>
            </div>

            <div>
              <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95 }}>{p.mrr}</div>
              <div style={{
                marginTop: 4, fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700,
                color: p.accent ? "oklch(0.18 0.05 155 / 0.65)" : "var(--inverse-2)",
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>{p.sub}</div>
            </div>

            <div style={{
              padding: "16px 18px", borderRadius: 14,
              background: p.accent ? "oklch(0.18 0.05 155 / 0.12)" : "oklch(0.22 0.05 158)",
              border: p.accent ? "1px solid oklch(0.18 0.05 155 / 0.2)" : "1px solid oklch(0.32 0.05 158)",
            }}>
              <div style={{
                fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                color: p.accent ? "oklch(0.18 0.05 155 / 0.7)" : "var(--brand)",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>{p.volumeLabel}</div>
              <div style={{
                marginTop: 6, fontSize: 30, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1,
              }}>{p.volume}</div>
              <div style={{
                marginTop: 6, fontFamily: "var(--f-mono)", fontSize: 11,
                color: p.accent ? "oklch(0.18 0.05 155 / 0.6)" : "var(--inverse-2)",
              }}>{p.withdraws}</div>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
              fontFamily: "var(--f-mono)", fontSize: 12,
            }}>
              <div style={{
                padding: "10px 12px", borderRadius: 10,
                background: p.accent ? "oklch(0.18 0.05 155 / 0.08)" : "oklch(0.20 0.04 158)",
              }}>
                <div style={{ fontSize: 10, opacity: 0.6, letterSpacing: "0.08em", textTransform: "uppercase" }}>Зарег.</div>
                <div style={{ marginTop: 4, fontWeight: 700 }}>{p.reg}</div>
              </div>
              <div style={{
                padding: "10px 12px", borderRadius: 10,
                background: p.accent ? "oklch(0.18 0.05 155 / 0.08)" : "oklch(0.20 0.04 158)",
              }}>
                <div style={{ fontSize: 10, opacity: 0.6, letterSpacing: "0.08em", textTransform: "uppercase" }}>Платящих</div>
                <div style={{ marginTop: 4, fontWeight: 700 }}>{p.paying}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        position: "relative", marginTop: 24,
        padding: "18px 22px", borderRadius: 14,
        background: "oklch(0.18 0.03 158)",
        border: "1px dashed oklch(0.34 0.06 158)",
        fontSize: 13, color: "var(--inverse-2)", lineHeight: 1.55,
      }}>
        <b style={{ color: "var(--brand)" }}>Формула:</b> MRR ÷ $3.10 = выводы/мес × $125 = объём финансирования / мес.
        Все цифры — при базовом среднем чеке $125 и ujra 2,5%. Объём финансирования возвращается циклом 2–4 недели через работодателя.
      </div>

      <style>{`
        @media (max-width: 880px) {
          .be-block { padding: 24px !important; }
          .be-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* PathBlock — full path layout (hero + rationale + use-of-funds + what investor gets) */
function PathBlock({ tag, tagSub, subtitle, amount, equity, chips, rationale, useOfFunds, gets, accent }) {
  const isBrand = accent === "brand";
  return (
    <div style={{
      marginTop: 48, padding: 36, borderRadius: 28,
      position: "relative", overflow: "hidden",
      background: isBrand
        ? "linear-gradient(160deg, oklch(0.22 0.06 155), oklch(0.16 0.03 158) 70%)"
        : "oklch(0.14 0.02 158)",
      border: isBrand ? "2px solid var(--brand)" : "1px solid oklch(0.28 0.04 158)",
      boxShadow: isBrand ? "var(--sh-glow)" : "none",
    }} className="pb-block">
      {isBrand && (
        <div aria-hidden style={{
          position: "absolute", right: -120, top: -80, width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, oklch(0.78 0.24 142 / 0.18), transparent 70%)",
        }}/>
      )}

      {/* HERO ROW */}
      <div style={{
        position: "relative",
        display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 32, alignItems: "center",
      }} className="pb-hero">
        <div>
          <span style={{
            display: "inline-block",
            fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "5px 12px", borderRadius: 999,
            background: isBrand ? "var(--brand)" : "oklch(0.22 0.05 158)",
            color: isBrand ? "var(--brand-ink)" : "var(--brand)",
            border: isBrand ? "none" : "1px solid oklch(0.32 0.05 158)",
          }}>{tag} · {tagSub}</span>
          <div style={{ marginTop: 14, fontFamily: "var(--f-mono)", fontSize: 12, fontWeight: 700, color: isBrand ? "var(--brand)" : "var(--inverse-2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{subtitle}</div>
          <div className="pb-amt" style={{
            marginTop: 14,
            fontSize: "clamp(72px, 9vw, 132px)",
            fontWeight: 800, color: isBrand ? "var(--brand)" : "var(--inverse)",
            letterSpacing: "-0.05em", lineHeight: 0.9,
          }}>{amount}</div>
          <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 800,
              padding: "5px 12px", borderRadius: 999,
              background: isBrand ? "var(--brand-ink)" : "oklch(0.22 0.05 158)",
              color: isBrand ? "var(--brand)" : "var(--inverse)",
              border: isBrand ? "none" : "1px solid oklch(0.32 0.05 158)",
              letterSpacing: "0.06em",
            }}>{equity}</span>
            {chips.map((c, i) => (
              <span key={i} style={{
                fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700,
                padding: "5px 12px", borderRadius: 999,
                background: "oklch(0.20 0.04 158)", color: "var(--inverse)",
                border: "1px solid oklch(0.30 0.04 158)",
                letterSpacing: "0.04em",
              }}>{c}</span>
            ))}
          </div>
        </div>

        <div style={{
          padding: "26px 30px", borderRadius: 20,
          background: "oklch(0.18 0.03 158 / 0.7)",
          border: "1px solid oklch(0.30 0.04 158)",
          borderLeft: isBrand ? "4px solid var(--brand)" : "4px solid oklch(0.50 0.10 158)",
        }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: isBrand ? "var(--brand)" : "var(--inverse-2)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>Логика пути</div>
          <p style={{ marginTop: 12, fontSize: 15, color: "var(--inverse)", lineHeight: 1.6 }}>{rationale}</p>
        </div>
      </div>

      {/* USE OF FUNDS */}
      <div style={{ position: "relative", marginTop: 40 }}>
        <h3 style={{ fontSize: 22, color: "var(--inverse)", letterSpacing: "-0.02em" }}>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: isBrand ? "var(--brand)" : "var(--inverse-2)", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", fontWeight: 700 }}>На что уйдут деньги</span>
          <span style={{ marginTop: 4, display: "block" }}>Структура {amount}</span>
        </h3>
        <div style={{
          marginTop: 18,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12,
        }} className="pb-uof">
          {useOfFunds.map((tr, i) => {
            const primary = !!tr.primary;
            return (
              <div key={i} style={{
                padding: 26, borderRadius: 18,
                background: primary ? "var(--brand)" : "oklch(0.18 0.03 158)",
                color: primary ? "var(--brand-ink)" : "var(--inverse)",
                border: primary ? "none" : "1px solid oklch(0.30 0.04 158)",
                boxShadow: primary ? "var(--sh-glow)" : "none",
                display: "flex", flexDirection: "column", gap: 10,
              }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{
                    fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: primary ? "oklch(0.18 0.05 155 / 0.65)" : "var(--brand)",
                  }}>0{i+1}</span>
                  <span style={{
                    fontFamily: "var(--f-mono)", fontSize: 12, fontWeight: 800,
                    letterSpacing: "0.04em",
                    color: primary ? "oklch(0.18 0.05 155 / 0.7)" : "var(--inverse-2)",
                  }}>{tr.pct}</span>
                </div>
                <div className="pb-uof-amt" style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1, color: primary ? "inherit" : "var(--inverse)" }}>{tr.amt}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: primary ? "inherit" : "var(--inverse)", lineHeight: 1.3 }}>{tr.title}</div>
                <p style={{
                  marginTop: "auto", fontSize: 12.5, lineHeight: 1.55,
                  color: primary ? "oklch(0.18 0.05 155 / 0.78)" : "var(--inverse-2)",
                }}>{tr.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* WHAT INVESTOR GETS */}
      <div style={{ position: "relative", marginTop: 40 }}>
        <h3 style={{ fontSize: 22, color: "var(--inverse)", letterSpacing: "-0.02em" }}>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: isBrand ? "var(--brand)" : "var(--inverse-2)", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", fontWeight: 700 }}>Что получает инвестор</span>
          <span style={{ marginTop: 4, display: "block" }}>В этом сценарии</span>
        </h3>
        <div style={{
          marginTop: 18,
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12,
        }} className="pb-gets">
          {gets.map((g, i) => (
            <div key={i} style={{
              padding: 20, borderRadius: 16,
              background: "oklch(0.18 0.03 158)",
              border: "1px solid oklch(0.30 0.04 158)",
              display: "flex", flexDirection: "column", gap: 8,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: isBrand ? "var(--brand)" : "oklch(0.30 0.06 158)",
                color: isBrand ? "var(--brand-ink)" : "var(--brand)",
                display: "grid", placeItems: "center",
              }}><Icon.check size={14}/></div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "var(--inverse)", letterSpacing: "-0.01em", lineHeight: 1.25 }}>{g.t}</div>
              <div style={{ fontSize: 12, color: "var(--inverse-2)", lineHeight: 1.5 }}>{g.b}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .pb-hero { grid-template-columns: 1fr !important; gap: 24px !important; }
          .pb-uof { grid-template-columns: 1fr 1fr !important; }
          .pb-gets { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .pb-block { padding: 24px !important; }
          .pb-amt { font-size: clamp(56px, 18vw, 88px) !important; }
          .pb-uof { grid-template-columns: 1fr !important; }
          .pb-uof-amt { font-size: 32px !important; }
          .pb-gets { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* ============================================================
   EXIT — valuations at scale + buyers
   ============================================================ */
function S_Exit() {
  const stages = [
    {
      tag: "Seed раунд", val: "$12M", color: "card",
      metrics: [
        ["Зарегистрированных", "~100K"],
        ["Платящих / мес", "~40K"],
        ["MRR", "$124K"],
        ["ARR", "$1.49M"],
        ["Мультипликатор", "8× ARR"],
      ],
    },
    {
      tag: "Series A", val: "$54M", color: "dark",
      metrics: [
        ["Зарегистрированных", "~450K"],
        ["Платящих / мес", "~180K"],
        ["MRR", "$558K"],
        ["ARR", "$6.7M"],
        ["Мультипликатор", "8× ARR"],
      ],
    },
    {
      tag: "Exit / Series B", val: "$120M+", color: "brand",
      metrics: [
        ["Зарегистрированных", "~1M"],
        ["Платящих / мес", "~400K"],
        ["MRR", "$1.24M"],
        ["ARR", "$14.9M"],
        ["Мультипликатор", "8× ARR"],
      ],
    },
  ];

  return (
    <section>
      <div className="container">
        <SecHead num="16" kicker="Exit" title="Оценка при масштабе." lead="Три горизонта. Один и тот же мультипликатор 8× ARR. Вся комиссия — Rizq, без split. Бенчмарк — fintech с recurring revenue и нулевым NPL."/>

        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
        }} className="exit-grid">
          {stages.map((s, i) => {
            const isBrand = s.color === "brand";
            const isDark = s.color === "dark";
            return (
              <div key={s.tag} style={{
                padding: 32, borderRadius: 24,
                background: isBrand ? "var(--brand)" : isDark ? "var(--bg-deep)" : "var(--card)",
                color: isBrand ? "var(--brand-ink)" : isDark ? "var(--inverse)" : "var(--ink)",
                border: !isBrand && !isDark ? "1px solid var(--line)" : "none",
                boxShadow: isBrand ? "var(--sh-glow)" : "var(--sh-card)",
                display: "flex", flexDirection: "column", gap: 16,
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 800,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: isBrand ? "oklch(0.18 0.05 155 / 0.7)" : isDark ? "var(--brand)" : "var(--brand-2)",
                }}>{s.tag}</div>
                <div style={{
                  fontSize: "clamp(48px, 5.5vw, 80px)",
                  fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1,
                }}>{s.val}</div>
                <div style={{
                  marginTop: 8,
                  borderTop: `1px ${isBrand ? "solid oklch(0.18 0.05 155 / 0.2)" : isDark ? "solid oklch(0.30 0.04 158)" : "dashed var(--line-2)"}`,
                  paddingTop: 14,
                  display: "flex", flexDirection: "column", gap: 8,
                }}>
                  {s.metrics.map(([k, v], j) => (
                    <div key={k} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "baseline",
                    }}>
                      <span style={{
                        fontSize: 12.5,
                        color: isBrand ? "oklch(0.18 0.05 155 / 0.7)" : isDark ? "var(--inverse-2)" : "var(--ink-3)",
                      }}>{k}</span>
                      <span style={{
                        fontFamily: "var(--f-mono)", fontSize: 14, fontWeight: 700,
                        color: "inherit",
                      }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why 8× ARR */}
        <div style={{ marginTop: 48 }}>
          <h3 style={{ fontSize: 24, letterSpacing: "-0.02em" }}>Почему 8× ARR</h3>
          <p className="lead" style={{ marginTop: 8, fontSize: 16 }}>
            Стандартный мультипликатор для fintech с recurring revenue и нулевыми кредитными потерями.
          </p>

          <div style={{
            marginTop: 24,
            display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12,
          }} className="why8-grid">
            {[
              { k: "Модель", v: "Recurring revenue", b: "Зарплатный цикл — каждый месяц" },
              { k: "NPL", v: "0%", b: "Payroll-backed, не кредит" },
              { k: "CAC", v: "~$0", b: "Через работодателя" },
              { k: "Retention", v: "Зарплатный цикл", b: "Естественный, не виральный" },
              { k: "Benchmark", v: "8×", b: "Fintech recurring · 0 NPL", hl: true },
            ].map((p, i) => (
              <div key={i} className="card" style={{
                padding: 22, borderRadius: 18,
                background: p.hl ? "linear-gradient(160deg, oklch(0.96 0.04 145), var(--card) 70%)" : "var(--card)",
                border: p.hl ? "1.5px solid var(--brand)" : "1px solid var(--line)",
              }}>
                <div style={{
                  fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: p.hl ? "var(--brand-2)" : "var(--ink-3)",
                }}>{p.k}</div>
                <div style={{
                  marginTop: 10, fontSize: 18, fontWeight: 800,
                  letterSpacing: "-0.02em", color: "var(--ink)", lineHeight: 1.2,
                }}>{p.v}</div>
                <div style={{ marginTop: 6, fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.5 }}>{p.b}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Buyers */}
        <div style={{ marginTop: 48 }}>
          <h3 style={{ fontSize: 24, letterSpacing: "-0.02em" }}>Покупатели</h3>
          <p className="lead" style={{ marginTop: 8, fontSize: 16 }}>
            Три категории стратегов с явной мотивацией — лицензия, дистрибуция, инновации.
          </p>

          <div style={{
            marginTop: 24,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
          }} className="buyers-grid">
            {[
              {
                icon: "🏦", tag: "Банки",
                names: ["Uzum", "TBC", "OTP", "Ipak Yuli", "Hamkor"],
                b: "Halal EWA + готовая база сотрудников = быстрый канал к рознице.",
              },
              {
                icon: "📱", tag: "Финтех-экосистемы",
                names: ["Payme", "Click"],
                b: "Payroll-данные + активные пользователи. Идеальное дополнение к платёжному кошельку.",
              },
              {
                icon: "🌍", tag: "Global стратеги",
                names: ["HH", "SAP"],
                b: "HR-tech и payroll-стек — Rizq встраивается как EWA-модуль в существующие глобальные продукты.",
              },
            ].map((p, i) => (
              <div key={i} className="card" style={{
                padding: 28, borderRadius: 22,
                display: "flex", flexDirection: "column", gap: 14,
                minHeight: 240,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 32 }}>{p.icon}</span>
                  <span style={{
                    fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--ink-3)",
                  }}>0{i+1}</span>
                </div>
                <h4 style={{ fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{p.tag}</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.names.map((n) => (
                    <span key={n} style={{
                      fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 600,
                      padding: "4px 10px", borderRadius: 999,
                      background: "var(--bg-sand)", color: "var(--ink)",
                      border: "1px solid var(--line)",
                    }}>{n}</span>
                  ))}
                </div>
                <p style={{ marginTop: "auto", fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1000px) {
            .exit-grid { grid-template-columns: 1fr !important; }
            .why8-grid { grid-template-columns: 1fr 1fr !important; }
            .buyers-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 560px) {
            .why8-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA (investor)
   ============================================================ */
function S_FinalInvestor() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 120, position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 80% at 50% 0%, oklch(0.92 0.16 145 / 0.18), transparent 60%)",
        zIndex: 0,
      }}/>
      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Reveal>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 999,
            background: "var(--bg-deep)", color: "var(--brand)",
            fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
          }}>16 · Финал</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 style={{
            marginTop: 28,
            fontSize: "clamp(40px, 6.5vw, 96px)",
            lineHeight: 0.96, letterSpacing: "-0.045em",
            fontWeight: 800,
            maxWidth: "18ch", margin: "28px auto 0",
            textWrap: "balance",
          }}>
            Готовы построить <span className="display-serif" style={{color:"var(--ink-2)"}}>первый</span> <span className="hl-underline">Halal EWA</span> в регионе.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p style={{
            marginTop: 32, fontSize: "clamp(16px, 1.6vw, 20px)", color: "var(--ink-2)",
            maxWidth: "60ch", margin: "32px auto 0", lineHeight: 1.5,
          }}>
            Раунд открыт. $300K · 25% equity · МФО-лицензия Нацбанка Таджикистана.
            Продукт, пилот и команда — уже есть.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div style={{ marginTop: 40, display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Btn kind="primary" href="mailto:hello@rizq.uz" withArrow>Обсудить раунд</Btn>
            <Btn kind="ghost" href="index.html">На главную</Btn>
          </div>
        </Reveal>

        <div style={{
          marginTop: 96, paddingTop: 40,
          borderTop: "1px solid var(--line)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 14,
          fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--f-mono)",
        }}>
          <span>Rizq · ООО «Screenix AI» · Душанбе · 2026</span>
          <span>@jahangirmumini</span>
          <span style={{ color: "var(--brand-2)", fontWeight: 700, letterSpacing: "0.1em" }}>● CONFIDENTIAL</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INVESTOR FOOTER (mirrors BankFooter style; investor label)
   ============================================================ */
function InvestorFooter() {
  return (
    <footer style={{ background: "var(--bg-deep)", color: "var(--inverse)", padding: "48px 0 32px" }}>
      <div className="container" style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 24, flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <RizqLogo tone="light"/>
          <span style={{ fontSize: 13, color: "var(--inverse-2)" }}>Investor Proposal · Раунд 2026</span>
        </div>
        <a href="index.html" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "12px 18px", borderRadius: 999,
          background: "transparent", color: "var(--inverse)",
          border: "1px solid oklch(0.32 0.04 155)",
          fontSize: 14, fontWeight: 600,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
          Назад на главную
        </a>
      </div>
    </footer>
  );
}

// Export reusable sections to window for other decks (e.g. partner-deck.jsx)
window.S_WhyNow = S_WhyNow;
window.S_BizIntro = S_BizIntro;
window.S_Ask = S_Ask;
window.S_Exit = S_Exit;
window.S_FinalInvestor = S_FinalInvestor;
window.PathBlock = PathBlock;


/* ====== partner-deck.jsx ====== */
/* partner-deck.jsx — Rizq Partner Proposal (Kapitalbank × Uzum)
   Mirrors investor-deck.jsx but:
   - PartnerHeader badge says "Партнёрское предложение"
   - Team has 2 co-founders (Jahongir CEO, Shokhrukh CCO) + 3 founding partners
   - GTM mentions Clockster, Workly integrations + own sales
   - Adds S05Bank (что получает банк) into the flow
*/
/* global React, ReactDOM, RizqLogo, Icon, Btn, Reveal,
   SecHead, DataTable, AnimatedNumber,
   S01Hero, S02Problem, S03Solution, S05Bank, S07Halal, S08Revenue, S09Market, S10Uyda,
   S_WhyNow, S_BizIntro, S_Ask, S_Exit */

const { useState: useSP, useEffect: useEP } = React;

/* ============================================================
   PARTNER HEADER
   ============================================================ */
function PartnerHeader() {
  const [scrolled, setScrolled] = useSP(false);
  useEP(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "oklch(0.965 0.014 85 / 0.85)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "background .2s, border-color .2s",
    }}>
      <div className="container partner-header-row" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72, gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
          <RizqLogo/>
          <span className="partner-deck-badge" style={{
            fontFamily: "var(--f-mono)", fontSize: 10,
            padding: "5px 9px", borderRadius: 6,
            background: "oklch(0.95 0.05 200)", color: "oklch(0.35 0.13 240)",
            border: "1px solid oklch(0.80 0.10 230)",
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>Partnership Deck</span>
        </div>
        <span className="partner-confidential" style={{
          fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 600,
          padding: "6px 10px", borderRadius: 999,
          background: "var(--bg-deep)", color: "var(--brand)",
          letterSpacing: "0.12em", textTransform: "uppercase",
        }}>● Партнёрское предложение</span>
      </div>
      <style>{`
        @media (max-width: 540px) {
          .partner-header-row { height: 60px !important; }
          .partner-deck-badge { display: none !important; }
          .partner-confidential { font-size: 9px !important; padding: 5px 9px !important; letter-spacing: 0.08em !important; }
        }
        @media (max-width: 380px) {
          .partner-confidential { display: none !important; }
        }
      `}</style>
    </header>
  );
}

/* ============================================================
   PARTNER TEAM — 2 co-founders + 3 founding partners
   ============================================================ */
function S_PartnerTeam() {
  const cofounders = [
    {
      name: "Муминов Джахонгир", role: "CEO · Co-founder",
      b: "Основатель Screenix AI. 4 года продуктового опыта. Руководил поиском в Яндекс Аренде и Яндекс Лавке, пользовательским опытом в Lamoda и VK. Отвечает за продукт, стратегию и запуск.",
      logos: ["Yandex", "Lamoda", "VK"], initials: "ДМ",
    },
    {
      name: "Мухаммадсолех Салихов", role: "CFO · Co-founder",
      b: "Выпускник Финансового университета, опыт в ИТ и финтехе. Отвечает за финансовую модель, юнит-экономику и операционную работу с банком-партнёром.",
      logos: ["Финансовый университет", "IT"], initials: "МС",
    },
    {
      name: "Анушервон Рахмонзода", role: "GR · Co-founder",
      b: "Опыт работы в Министерстве финансов Республики Таджикистан. Отвечает за GR, регуляторику и отношения с НБТ, Минфином и госорганами.",
      logos: ["Минфин РТ"], initials: "АР",
    },
  ];
  const partners = [
    {
      name: "Muhammad Makhmudov", role: "Founding Member · Tech",
      b: "Архитектура, бэкенд, платёжная инфраструктура. Руководил инженерными командами в SberBank и Wildberries. Отвечает за core-banking интеграции, безопасность и highload.",
      logos: ["SberBank", "Wildberries"], initials: "MM",
    },
    {
      name: "Amirjon Qodirov", role: "Founding Member · Infra",
      b: "DevOps и облачная инфраструктура. Строил отказоустойчивые системы в Tinkoff, Ozon и Yandex — сервисы с миллионами запросов в день. Отвечает за uptime, SRE и масштабирование.",
      logos: ["Tinkoff", "Ozon", "Yandex"], initials: "AQ",
    },
    {
      name: "Muhammad Habibulloev", role: "Founding Member · Design",
      b: "Дизайн, продуктовая аналитика, CX/UX/UI. Опыт работы с банками: OTP Bank, Humo Bank. Отвечает за пользовательский опыт, интерфейсы и продуктовые исследования.",
      logos: ["OTP Bank", "Humo Bank"], initials: "MH",
    },
  ];

  const CofounderCard = (p, i) => (
    <div key={i} className="card" style={{
      padding: 32, borderRadius: 22,
      background: "linear-gradient(160deg, oklch(0.97 0.04 145), var(--card) 70%)",
      border: "1.5px solid var(--brand)",
      display: "flex", flexDirection: "column", gap: 16,
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", right: -50, top: -50, width: 200, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle, oklch(0.78 0.24 142 / 0.18), transparent 70%)",
      }}/>
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.015em" }}>{p.name}</div>
        <div style={{
          fontSize: 11, fontFamily: "var(--f-mono)",
          color: "var(--brand-2)", letterSpacing: "0.08em",
          textTransform: "uppercase", fontWeight: 700, marginTop: 6,
        }}>{p.role}</div>
      </div>
      <p style={{ position: "relative", fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6 }}>{p.b}</p>
      <div style={{ position: "relative", marginTop: "auto", paddingTop: 14, borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", gap: 6 }}>
        {p.logos.map((l, j) => (
          <span key={j} style={{
            fontSize: 11, fontFamily: "var(--f-mono)", fontWeight: 600,
            color: "var(--ink-3)",
            padding: "3px 8px", borderRadius: 6,
            background: "var(--bg-sand)", border: "1px solid var(--line)",
          }}>{l}</span>
        ))}
      </div>
    </div>
  );

  const PartnerCard = (p, i) => (
    <div key={i} className="card" style={{
      padding: 26, borderRadius: 22,
      display: "flex", flexDirection: "column", gap: 14,
    }}>
      <div>
        <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.01em" }}>{p.name}</div>
        <div style={{
          fontSize: 10.5, fontFamily: "var(--f-mono)",
          color: "var(--ink-3)", letterSpacing: "0.08em",
          textTransform: "uppercase", fontWeight: 700, marginTop: 4,
        }}>{p.role}</div>
      </div>
      <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{p.b}</p>
      <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", gap: 6 }}>
        {p.logos.map((l, j) => (
          <span key={j} style={{
            fontSize: 11, fontFamily: "var(--f-mono)", fontWeight: 600,
            color: "var(--ink-3)",
            padding: "3px 8px", borderRadius: 6,
            background: "var(--bg-sand)", border: "1px solid var(--line)",
          }}>{l}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section>
      <div className="container">
        <SecHead num="11" kicker="Команда" title={<>3 ко-фаундера. <span className="display-serif" style={{color:"var(--ink-2)"}}>3 founding members.</span></>} lead="Трое отвечают за компанию: продукт, финансы и регуляторику. Трое — за технологию, инфраструктуру и продуктовую работу с банками. Команда — из Yandex, Tinkoff, Sber, Финансового университета и Минфина РТ."/>

        {/* Co-founders */}
        <div style={{ marginTop: 40 }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--brand-2)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Co-founders</div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
          }} className="pt-co-grid">
            {cofounders.map(CofounderCard)}
          </div>
        </div>

        {/* Founding Partners */}
        <div style={{ marginTop: 32 }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Founding Members</div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
          }} className="pt-fp-grid">
            {partners.map(PartnerCard)}
          </div>
        </div>

        {/* Screenix AI block */}
        <div className="card" style={{
          marginTop: 32, padding: 36, borderRadius: 24,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "center",
        }} >
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 12px", borderRadius: 999,
              background: "var(--bg-sand)", color: "var(--ink-2)",
              fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              border: "1px solid var(--line)",
            }}>Одна из наших компаний</div>
            <h3 style={{ marginTop: 16, fontSize: 32, letterSpacing: "-0.03em" }}>Screenix AI</h3>
            <p style={{ marginTop: 12, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6 }}>
              Один из наших успешных продуктов. IT-компания с 70+ B2B-клиентами по СНГ: сервис рекрутинга,
              HR-технологии, автоматизация бизнес-процессов. Rizq — новый продукт от той же команды,
              с опытом и базой клиентов из Screenix.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              ["70+", "B2B-клиентов"],
              ["СНГ", "география"],
              ["1+ год", "на рынке"],
              ["✓", "один из наших"],
            ].map(([k, v], i) => (
              <div key={i} style={{
                padding: "18px 20px", borderRadius: 16,
                background: "var(--bg-sand)", border: "1px solid var(--line)",
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: i === 3 ? "var(--brand-2)" : "var(--ink)" }}>{k}</div>
                <div style={{ marginTop: 8, fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--f-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .pt-co-grid { grid-template-columns: 1fr !important; }
            .pt-fp-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) {
            .pt-fp-grid { grid-template-columns: 1fr !important; }
            .card[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   PARTNER GTM — Clockster + Workly + own sales
   ============================================================ */
function S_PartnerGTM() {
  const channels = [
    {
      icon: <Icon.bolt/>,
      tag: "Интеграция",
      t: "Clockster",
      b: "HR-платформа №1 в Центральной Азии. Прямая интеграция: каждый клиент Clockster получает Rizq «из коробки». Готовая база компаний — без отдельных продаж.",
      stat: "Партнёр",
    },
    {
      icon: <Icon.bolt/>,
      tag: "Интеграция",
      t: "Workly",
      b: "Учёт рабочего времени и зарплат для среднего бизнеса в РТ. Подключаем Rizq как нативный модуль выплат. Сотрудники видят кнопку «Получить заработанное» прямо в Workly.",
      stat: "Партнёр",
    },
    {
      icon: <Icon.users/>,
      tag: "Sales",
      t: "Прямые B2B-продажи",
      b: "Свой sales-отдел. Прямые контракты с HR-директорами и CEO. База Screenix (70+ клиентов) — стартовый трамплин. Outbound, контент, конференции.",
      stat: "Свой отдел",
    },
    {
      icon: <Icon.link/>,
      tag: "Канал",
      t: "HR-tech партнёрства",
      b: "Clockster, Workly и другие HR-платформы встраивают Rizq как EWA-модуль в свои решения. Их клиенты получают EWA «из коробки». CAC = 0.",
      stat: "CAC = 0",
    },
  ];
  return (
    <section>
      <div className="container">
        <SecHead num="13" kicker="Go-to-market" title={<>Три канала.<br/><span className="display-serif" style={{color:"var(--ink-2)"}}>Один продукт.</span></>} lead="Интеграции с Clockster и Workly закрывают рынок HR-платформ. Свой sales-отдел работает с компаниями напрямую. Банк-партнёр приводит зарплатных клиентов. Параллельно, без конкуренции каналов."/>

        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14,
        }} className="pgtm-grid">
          {channels.map((c, i) => (
            <div key={i} className="card" style={{
              padding: 28, borderRadius: 22,
              display: "flex", flexDirection: "column", gap: 16,
              minHeight: 220,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: "var(--brand)", color: "var(--brand-ink)",
                  display: "grid", placeItems: "center",
                }}>{c.icon}</div>
                <span style={{
                  fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                  padding: "5px 10px", borderRadius: 999,
                  background: "var(--bg-sand)", color: "var(--ink-2)",
                  border: "1px solid var(--line)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>{c.tag}</span>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.1em" }}>0{i+1}</span>
                  <h3 style={{ fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{c.t}</h3>
                </div>
                <p style={{ marginTop: 10, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6 }}>{c.b}</p>
              </div>
              <div style={{
                marginTop: "auto",
                padding: "10px 14px", borderRadius: 10,
                background: "var(--bg-sand)", border: "1px dashed var(--line-2)",
                fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700,
                color: "var(--brand-2)", letterSpacing: "0.06em",
                alignSelf: "flex-start",
              }}>{c.stat}</div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 800px) { .pgtm-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   PARTNER YEARLY PROJECTION — Y2 / Y3 based on Exit data
   ============================================================ */
function S_PartnerYearly() {
  const years = [
    {
      tag: "Год 1", sub: "Запуск",
      reg: "80K", pay: "32K",
      mrr: "$32K", arr: "$0.38M",
      color: "card",
      note: "Помесячная разбивка выше. Выручка Rizq растёт от $1.2K на M1 до $32K на M12. Объём финансирования банком — около $2.6M на M12.",
    },
    {
      tag: "Год 2", sub: "Рост · расширение",
      reg: "250K", pay: "100K",
      mrr: "$100K", arr: "$1.2M",
      color: "dark",
      note: "Расширение на города и регионы РТ. Подключение крупных розничных сетей и холдингов через прямые B2B-продажи.",
    },
    {
      tag: "Год 3", sub: "Зрелость рынка",
      reg: "500K", pay: "200K",
      mrr: "$200K", arr: "$2.4M",
      color: "brand",
      note: "500K зарегистрированных (потолок SOM), 200K активно выводят ежемесячно. ARR Rizq $2.4M на зрелом рынке Таджикистана.",
    },
  ];

  return (
    <section style={{ background: "var(--bg-sand)" }}>
      <div className="container">
        <SecHead num="08·b" kicker="Прогноз · 3 года" title={<>Выручка на горизонте <span className="display-serif" style={{color:"var(--ink-2)"}}>3 лет</span>.</>} lead="Год 1 — операционный пилот по помесячной разбивке выше. Год 2 и Год 3 — траектория роста до потолка SOM (500K). Доля Rizq — $1.00 с вывода (50/50 с банком-партнёром)."/>

        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
        }} className="py-grid">
          {years.map((y, i) => {
            const isBrand = y.color === "brand";
            const isDark = y.color === "dark";
            const titleColor = isBrand ? "var(--brand-ink)" : isDark ? "var(--inverse)" : "var(--ink)";
            const subColor = isBrand ? "oklch(0.18 0.05 155 / 0.7)" : isDark ? "var(--brand)" : "var(--brand-2)";
            const dimColor = isBrand ? "oklch(0.18 0.05 155 / 0.7)" : isDark ? "var(--inverse-2)" : "var(--ink-3)";
            const lineColor = isBrand ? "oklch(0.18 0.05 155 / 0.2)" : isDark ? "oklch(0.30 0.04 158)" : "var(--line-2)";
            return (
              <div key={i} style={{
                padding: 32, borderRadius: 24,
                background: isBrand ? "var(--brand)" : isDark ? "var(--bg-deep)" : "var(--card)",
                color: titleColor,
                border: !isBrand && !isDark ? "1px solid var(--line)" : "none",
                boxShadow: isBrand ? "var(--sh-glow)" : "var(--sh-card)",
                display: "flex", flexDirection: "column", gap: 16,
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{
                    fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 800,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: subColor,
                  }}>{y.tag}</span>
                  <span style={{
                    fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: dimColor,
                  }}>0{i+1}</span>
                </div>

                <div style={{ fontSize: 13, fontWeight: 700, color: dimColor }}>{y.sub}</div>

                <div style={{
                  marginTop: 4,
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
                  padding: "16px 0",
                  borderTop: `1px dashed ${lineColor}`,
                  borderBottom: `1px dashed ${lineColor}`,
                }}>
                  <div>
                    <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: dimColor, letterSpacing: "0.08em", textTransform: "uppercase" }}>MRR</div>
                    <div style={{ marginTop: 4, fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: titleColor }}>{y.mrr}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: dimColor, letterSpacing: "0.08em", textTransform: "uppercase" }}>ARR</div>
                    <div style={{ marginTop: 4, fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: titleColor }}>{y.arr}</div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    ["Зарегистрированных", y.reg],
                    ["Платящих / мес", y.pay],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ fontSize: 12.5, color: dimColor }}>{k}</span>
                      <span style={{ fontFamily: "var(--f-mono)", fontSize: 13.5, fontWeight: 700, color: titleColor }}>{v}</span>
                    </div>
                  ))}
                </div>

                <p style={{ marginTop: "auto", fontSize: 12.5, color: dimColor, lineHeight: 1.55 }}>{y.note}</p>
              </div>
            );
          })}
        </div>

        {/* Multiplier strip */}
        <div style={{
          marginTop: 24, padding: "22px 28px", borderRadius: 18,
          background: "var(--card)", border: "1px solid var(--line)",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 18, alignItems: "center",
        }} className="py-mult">
          <div>
            <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>Источник прогноза</div>
            <div style={{ marginTop: 6, fontSize: 15, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.01em" }}>Рост платящих · доля Rizq $1.00</div>
          </div>
          {[
            { k: "Год 1 → Год 2", v: "×3.2", b: "по ARR" },
            { k: "Год 2 → Год 3", v: "×2.0", b: "по ARR" },
            { k: "Год 1 → Год 3", v: "×6.3", b: "по ARR" },
          ].map((m, i) => (
            <div key={i} style={{
              padding: "12px 14px", borderRadius: 12,
              background: "var(--bg-sand)", border: "1px solid var(--line)",
            }}>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>{m.k}</div>
              <div style={{ marginTop: 6, fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--brand-2)", lineHeight: 1 }}>{m.v}</div>
              <div style={{ marginTop: 4, fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)" }}>{m.b}</div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 1000px) {
            .py-grid { grid-template-columns: 1fr !important; }
            .py-mult { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 560px) {
            .py-mult { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   WHY MFO, NOT FACTORING — regulatory rationale
   ============================================================ */
function S_WhyMFO() {
  const rows = [
    ["Кто несёт долг",        "Сам работник — физлицо",                     "Работодатель — B2B-обязательство"],
    ["Природа сделки",        "Покупка дебиторки физлица с дисконтом",      "Целевое финансирование ФОТ"],
    ["Трудовой кодекс РТ",   "Конфликт · ст. 268 — нецелевой получатель",  "Чисто · ст. 269/271 — удержание по заявлению"],
    ["Налог / НДС",           "Полная ставка · льгот нет",                  "Исламская льгота · НДС на маржу снят"],
    ["Баланс работодателя",   "Рост долговой нагрузки перед финагентом",    "Целевое авансирование · ликвидность не падает"],
    ["Шариат (AAOIFI)",       "Bay al-Dayn → Riba · вето совета",           "Qard al-Hasan / Wakala · халяль"],
    ["AML / Финмониторинг",   "Перенаправление ФОТ → авто-блок банка",      "Стандартное удержание · прозрачно ЦБ"],
  ];

  const mechanics = [
    { n: "01", t: "Договор", b: "МФО Rizq заключает B2B-договор с работодателем об открытии лимита целевого финансирования на выплату ФОТ — продукт сглаживания кассовых разрывов по зарплате." },
    { n: "02", t: "Транзакция", b: "Сотрудник нажимает «Получить заработанное». Юридически это требование работника к работодателю, исполнить которое поручено платформе. МФО переводит деньги на карту от имени работодателя." },
    { n: "03", t: "Формирование долга", b: "На балансе работодателя возникает краткосрочная кредиторская задолженность перед МФО Rizq. Работник чист — он получил свои деньги от компании через платёжного агента." },
    { n: "04", t: "Погашение", b: "В день официальной зарплаты работодатель закрывает коммерческий долг перед МФО Rizq одним консолидированным платежом." },
  ];

  const traps = [
    { icon: <Icon.ban/>, tag: "Трудовой и налоговый тупик", b: "Ст. 268 ТК РТ и налоговый орган жёстко регулируют, куда работодатель отправляет ФОТ. Прямой перевод зарплаты на счёт коммерческого ООО по уступке прав — красная тряпка для налоговой: первое обвинение — скрытое обналичивание и нелегальная оптимизация НДФЛ." },
    { icon: <Icon.ban/>, tag: "Шариатский тупик · Bay al-Dayn", b: "Продажа денежного требования физлица с дисконтом в исламском праве — Bay al-Dayn. Стандарты AAOIFI квалифицируют это как чистую Riba: деньги меняются на деньги с разницей в номинале. Банки-партнёры с исламскими окнами работать с такой моделью не смогут." },
  ];

  const barriers = [
    { n: "01", icon: <Icon.alert/>, t: "Искажение природы факторинга", b: "регламент РТ: факторинг — финансирование под уступку требования из договоров купли-продажи и услуг. Зарплата вытекает из трудовых, а не торговых отношений. Юристы Faroz или Orima заблокируют такой договор на первом этапе." },
    { n: "02", icon: <Icon.chart/>, t: "Испорченный баланс и ликвидность", b: "Долг перед платформой попадёт в «краткосрочные обязательства перед финагентом» — прямой рост долговой нагрузки и ухудшение коэффициентов ликвидности перед банками. Модель МФО — целевое авансирование ФОТ, баланс не ухудшается." },
    { n: "03", icon: <Icon.ban/>, t: "AML-блокировки банков", b: "Крупные компании платят зарплату реестрами на карты сотрудников. Перенаправление потоков в стороннее факторинговое ООО вызывает авто-блок комплаенса по Правилам внутреннего контроля НБТ — высокий риск транзитных схем." },
  ];

  const investorPoints = [
    {
      n: "01",
      icon: <Icon.lock/>,
      t: "Институциональный статус",
      b: "Капитал по нормативу НБТ формирует уставный фонд лицензированного финансового института, подконтрольного ЦБ. Не маркетинговый расход — а актив, повышающий капитализацию бренда Rizq.",
    },
    {
      n: "02",
      icon: <Icon.users/>,
      t: "Доверие B2B-партнёров",
      b: "Faroz, Orima, Babilon и крупные холдинги не подписывают трёхсторонние договоры с «непонятным финтех-стартапом». Лицензированное МФО по закону РТ о микрофинансировании снимает юридический барьер — мы надёжный финансовый партнёр.",
    },
    {
      n: "03",
      icon: <Icon.bank/>,
      t: "Готовый продукт для исламских окон банков",
      b: "Банки УЗ массово открывают исламские окна и ищут розничные халяль-продукты. МФО Rizq приходит не как проситель, а как лицензированный партнёр с готовым продуктом «Халяль-овердрафт до зарплаты». NPL = 0%.",
    },
    {
      n: "04",
      icon: <Icon.shield/>,
      t: "Защита инвестиций",
      b: "Сделки факторинга с физлицами могут быть признаны ничтожными, а компания — обвинена в безлицензионной микрофинансовой деятельности. Лицензия МФО защищает капитал инвестора от регуляторного риска.",
    },
  ];

  return (
    <section style={{ background: "var(--bg-sand)", color: "var(--ink)" }}>
      <div className="container">
        <SecHead
          num="14·a"
          kicker="Регуляторный фундамент"
          title={<>Почему <span className="display-serif" style={{color:"var(--ink-2)"}}>МФО</span> (B2B-лимит), а не факторинг.</>}
          lead="Задача Rizq — запустить EWA так, чтобы вся полнота юридической и финансовой ответственности лежала на работодателе (B2B). Сотрудник полностью освобождён от личного долга: нажимает кнопку, забирает заработанное, баланс обнуляется — и лично к нему у Rizq претензий нет. Ниже — почему модель МФО выигрывает у факторинга."
        />

        {/* Worker-freed thesis band */}
        <div className="whymfo-thesis" style={{
          marginTop: 28, padding: "22px 26px", borderRadius: 18,
          background: "linear-gradient(150deg, oklch(0.22 0.06 155), oklch(0.16 0.03 158) 75%)",
          color: "var(--inverse)",
          display: "grid", gridTemplateColumns: "minmax(220px, 0.85fr) 2fr", gap: 24, alignItems: "center",
          border: "1px solid oklch(0.4 0.08 150 / 0.5)",
        }}>
          <div>
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--brand)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Принцип ответственности</span>
            <h3 style={{ marginTop: 10, fontSize: 21, color: "var(--inverse)", letterSpacing: "-0.02em", lineHeight: 1.25 }}>Сотрудник свободен от личного долга перед Rizq.</h3>
          </div>
          <div className="whymfo-thesis-steps" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {[
              ["Нажал кнопку", "в приложении"],
              ["Забрал заработанное", "свои деньги"],
              ["Баланс обнулён", "сделка закрыта"],
              ["0 претензий", "лично к работнику"],
            ].map(([t, s], i) => (
              <div key={i} style={{ padding: "12px 14px", borderRadius: 12, background: "oklch(0.28 0.05 155 / 0.6)", border: "1px solid oklch(0.45 0.08 150 / 0.4)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--inverse)", lineHeight: 1.25 }}>{t}</div>
                <div style={{ marginTop: 4, fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--brand)", letterSpacing: "0.04em" }}>{s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Two paths */}
        <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="whymfo-callouts">
          {/* Path 1 — MFO B2B (recommended) */}
          <div className="card" style={{
            padding: 26, borderRadius: 18,
            background: "linear-gradient(160deg, oklch(0.97 0.04 145), var(--card) 70%)",
            border: "2px solid var(--brand)", position: "relative", overflow: "hidden",
          }}>
            <div aria-hidden style={{ position: "absolute", right: -60, top: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, oklch(0.78 0.24 142 / 0.16), transparent 70%)" }}/>
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--brand-2)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Путь 1 · Рекомендуем</span>
              <span style={{ width: 26, height: 26, borderRadius: 8, background: "var(--brand)", color: "var(--brand-ink)", display: "grid", placeItems: "center" }}><Icon.check size={16}/></span>
            </div>
            <h3 style={{ position: "relative", marginTop: 12, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.25 }}>Модель МФО.<br/>B2B-корпоративный лимит.</h3>
            <p style={{ position: "relative", marginTop: 12, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6 }}>
              Лицензия МФО (уставный капитал по нормативу НБТ). Rizq открывает работодателю <b style={{ color: "var(--ink)" }}>лимит целевого финансирования ФОТ</b>. Сотрудник получает свои деньги через платёжного агента — а краткосрочный долг возникает у работодателя, не у работника.
            </p>
            <p style={{ position: "relative", marginTop: 14, padding: "10px 14px", borderRadius: 10, background: "oklch(0.78 0.24 142 / 0.14)", border: "1px solid var(--brand)", fontSize: 12.5, color: "var(--ink)", lineHeight: 1.55 }}>
              <b style={{ color: "var(--brand-2)" }}>Плюсы:</b> понятный CFO заём на кассовый разрыв ФОТ, налоговый щит по исламским операциям (НДС на маржу снят), полная тишина для ЦБ, 100% соответствие AAOIFI.
            </p>
          </div>

          {/* Path 2 — Factoring (dead end) */}
          <div className="card" style={{
            padding: 26, borderRadius: 18, background: "var(--card)",
            border: "1px solid oklch(0.78 0.10 25 / 0.4)", position: "relative", overflow: "hidden",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "oklch(0.52 0.18 25)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Путь 2 · Тупик</span>
              <span style={{ width: 26, height: 26, borderRadius: 8, background: "oklch(0.95 0.04 25)", color: "oklch(0.52 0.18 25)", display: "grid", placeItems: "center" }}><Icon.ban/></span>
            </div>
            <h3 style={{ marginTop: 12, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.25 }}>Модель факторинга.<br/>Уступка требования (регламент РТ).</h3>
            <p style={{ marginTop: 12, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6 }}>
              Факторинговое ООО-НКО. Работник <b style={{ color: "var(--ink)" }}>продаёт право требования</b> своей зарплаты платформе с дисконтом. Долг переходит на работодателя — но уже перед коммерческим ООО, а не на основе трудовых отношений.
            </p>
            <p style={{ marginTop: 14, padding: "10px 14px", borderRadius: 10, background: "oklch(0.95 0.04 25)", border: "1px dashed oklch(0.68 0.16 25 / 0.55)", fontSize: 12.5, color: "var(--ink)", lineHeight: 1.55 }}>
              <b style={{ color: "oklch(0.52 0.18 25)" }}>Минусы:</b> конфликт с Трудовым кодексом, нет налоговых льгот, Bay al-Dayn = Riba (вето шариатского совета), AML-блок банков. Enterprise-клиенты закрыты.
            </p>
          </div>
        </div>

        {/* Mechanics of Path 1 */}
        <div style={{ marginTop: 32 }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--brand-2)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Как работает модель МФО</div>
          <h3 style={{ marginTop: 8, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Четыре шага. Работник чист, работодатель закрывает долг в день зарплаты.</h3>
        </div>
        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="whymfo-mech">
          {mechanics.map((m) => (
            <div key={m.n} className="card" style={{ padding: 22, borderRadius: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 800, color: "var(--brand-2)", letterSpacing: "0.08em" }}>{m.n}</span>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.015em" }}>{m.t}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{m.b}</div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div style={{ marginTop: 32, borderRadius: 18, overflow: "hidden", border: "1px solid var(--line)", background: "var(--card)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.3fr 1.3fr", padding: "14px 22px", background: "var(--bg-sand)", fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--ink-3)", letterSpacing: "0.12em", textTransform: "uppercase" }} className="whymfo-row">
            <span>Параметр</span>
            <span>Факторинг · ООО</span>
            <span style={{ color: "var(--brand-2)" }}>МФО · B2B-лимит</span>
          </div>
          {rows.map(([param, fac, mfo], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.1fr 1.3fr 1.3fr", padding: "16px 22px", borderTop: "1px solid var(--line)", background: i % 2 === 0 ? "var(--card)" : "oklch(0.97 0.014 86)", fontSize: 13.5, lineHeight: 1.45, alignItems: "center" }} className="whymfo-row">
              <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700, color: "var(--ink-3)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{param}</span>
              <span style={{ color: "var(--ink-2)" }}>{fac}</span>
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>{mfo}</span>
            </div>
          ))}
        </div>

        {/* Why factoring is a dead end — 2 traps */}
        <div style={{ marginTop: 32 }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "oklch(0.52 0.18 25)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Почему факторинг — тупик</div>
          <h3 style={{ marginTop: 8, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Две критические стены: налоговая и шариатская.</h3>
        </div>
        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="whymfo-traps">
          {traps.map((t, i) => (
            <div key={i} className="card" style={{ padding: 24, borderRadius: 16, border: "1px solid oklch(0.78 0.10 25 / 0.4)", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: "oklch(0.95 0.04 25)", color: "oklch(0.52 0.18 25)", display: "grid", placeItems: "center", flex: "none" }}>{t.icon}</span>
                <div style={{ fontSize: 15.5, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{t.tag}</div>
              </div>
              <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.6 }}>{t.b}</div>
            </div>
          ))}
        </div>

        {/* Why enterprise rejects factoring — 3 barriers */}
        <div style={{ marginTop: 32 }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--brand-2)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Faroz · Orima · Babilon</div>
          <h3 style={{ marginTop: 8, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: "40ch" }}>Почему Enterprise-сегмент откажется от факторинга на старте.</h3>
        </div>
        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }} className="whymfo-barriers">
          {barriers.map((b) => (
            <div key={b.n} className="card" style={{ padding: 22, borderRadius: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: "var(--bg-sand)", color: "var(--ink)", display: "grid", placeItems: "center", border: "1px solid var(--line)" }}>{b.icon}</span>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--ink-3)", letterSpacing: "0.1em" }}>{b.n}</span>
              </div>
              <div style={{ fontSize: 15.5, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{b.t}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{b.b}</div>
            </div>
          ))}
        </div>

        {/* What this gives the investor */}
        <div style={{ marginTop: 36 }}>
          <div style={{
            fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800,
            color: "var(--brand-2)", letterSpacing: "0.14em", textTransform: "uppercase",
          }}>Что это даёт инвестору</div>
          <h3 style={{
            marginTop: 8, fontSize: 26, color: "var(--ink)",
            letterSpacing: "-0.025em", lineHeight: 1.2, maxWidth: "32ch",
          }}>Лицензия МФО — не бюрократия, а максимальная защита инвестиций.</h3>
        </div>

        <div style={{
          marginTop: 20,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12,
        }} className="whymfo-investor">
          {investorPoints.map((p) => (
            <div key={p.n} className="card" style={{
              padding: 22, borderRadius: 16,
              display: "flex", flexDirection: "column", gap: 12,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "var(--brand)", color: "var(--brand-ink)",
                  display: "grid", placeItems: "center",
                }}>
                  {p.icon}
                </div>
                <span style={{
                  fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800,
                  color: "var(--ink-3)", letterSpacing: "0.1em",
                }}>{p.n}</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{p.t}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{p.b}</div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 1000px) {
            .whymfo-callouts { grid-template-columns: 1fr !important; }
            .whymfo-investor { grid-template-columns: 1fr 1fr !important; }
            .whymfo-art14 { grid-template-columns: 1fr !important; }
            .whymfo-art14-models { grid-template-columns: 1fr !important; }
            .whymfo-thesis { grid-template-columns: 1fr !important; gap: 16px !important; }
            .whymfo-mech { grid-template-columns: 1fr 1fr !important; }
            .whymfo-traps { grid-template-columns: 1fr !important; }
            .whymfo-barriers { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 600px) {
            .whymfo-investor { grid-template-columns: 1fr !important; }
            .whymfo-row { grid-template-columns: 1fr !important; gap: 6px; }
            .whymfo-row > span { padding: 2px 0; }
            .whymfo-mech { grid-template-columns: 1fr !important; }
            .whymfo-thesis-steps { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   RISK MANAGEMENT & AUDIENCE SEGMENTATION
   ============================================================ */
function S_RiskMgmt() {
  const pillars = [
    {
      n: "01",
      icon: <Icon.building/>,
      tag: "Go-To-Market",
      t: "Фокус на Middle & Large Enterprise",
      b: "На старте целевая аудитория — исключительно средний и крупный системный бизнес. Малый бизнес неинтересен: высокая волатильность ликвидности и повышенный риск дефолта — внезапная блокировка счетов налоговой или закрытие предприятия. Крупные холдинги гарантируют стабильность операционного цикла.",
      accent: false,
    },
    {
      n: "02",
      icon: <Icon.shield/>,
      tag: "Хеджирование",
      t: "Страхование корпоративного дефолта",
      b: "Обязательства по возврату лежат строго на юрлице (B2B), поэтому Rizq несёт кредитный риск компании, а не физлиц. Остаточный риск закрыт партнёрством со страховой: при банкротстве, ликвидации или затяжном дефолте предприятия все профинансированные авансы сотрудников компенсируются страховым покрытием.",
      accent: false,
    },
    {
      n: "03",
      icon: <Icon.lock/>,
      tag: "Фильтр для малого бизнеса",
      t: "Условие FTO · Pre-funding",
      b: "Если малый бизнес всё же настаивает на подключении — взаимодействие только на условиях FTO (Funding To Order). Работодатель заранее размещает на счёте Rizq 100% гарантийный депозит, равный прогнозу выплат сотрудников за месяц. Выплаты идут строго в рамках этого лимита — кредитный риск с платформы снят полностью.",
      accent: true,
    },
  ];

  return (
    <section style={{ background: "var(--bg)", color: "var(--ink)" }}>
      <div className="container">
        <SecHead
          num="14·b"
          kicker="Управление рисками"
          title={<>Риск лежит на <span className="display-serif" style={{color:"var(--ink-2)"}}>компании</span> — и он застрахован.</>}
          lead="Для устойчивости капитала и защиты от операционных потерь Rizq внедряет жёсткую фильтрацию корпоративных клиентов и хеджирование рисков неплатёжеспособности. Риск потери капитала сведён к минимуму."
        />

        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="risk-grid">
          {pillars.map((p) => (
            <div key={p.n} className="card" style={{
              padding: 26, borderRadius: 18,
              display: "flex", flexDirection: "column", gap: 14,
              position: "relative", overflow: "hidden",
              background: p.accent ? "linear-gradient(160deg, oklch(0.97 0.04 145), var(--card) 70%)" : "var(--card)",
              border: p.accent ? "2px solid var(--brand)" : "1px solid var(--line)",
            }}>
              {p.accent && (
                <div aria-hidden style={{ position: "absolute", right: -60, top: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, oklch(0.78 0.24 142 / 0.16), transparent 70%)" }}/>
              )}
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ width: 40, height: 40, borderRadius: 11, background: "var(--brand)", color: "var(--brand-ink)", display: "grid", placeItems: "center" }}>{p.icon}</span>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 800, color: "var(--ink-3)", letterSpacing: "0.1em" }}>{p.n}</span>
              </div>
              <div style={{ position: "relative" }}>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--brand-2)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.tag}</span>
                <h3 style={{ marginTop: 8, fontSize: 19, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.25 }}>{p.t}</h3>
              </div>
              <p style={{ position: "relative", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.6, margin: 0 }}>{p.b}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 16, padding: "16px 24px", borderRadius: 14,
          background: "var(--bg-deep)", color: "var(--inverse)",
          display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
        }} className="risk-band">
          <span style={{ width: 30, height: 30, borderRadius: 8, background: "var(--brand)", color: "var(--brand-ink)", display: "grid", placeItems: "center", flex: "none" }}><Icon.check size={18}/></span>
          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--inverse)", lineHeight: 1.4 }}>
            Кредитный риск — только на крупном юрлице, закрыт страховкой; малый бизнес — лишь под 100% депозит. <b style={{ color: "var(--brand)" }}>Капитал защищён на каждом уровне.</b>
          </span>
        </div>

        <style>{`
          @media (max-width: 1000px) {
            .risk-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   ORG STRUCTURE — Tech holding + MFO subsidiary
   ============================================================ */
function S_OrgStructure() {
  const compare = [
    ["Роль",              "Технология",                 "Финансы"],
    ["Лицензия",          "IT Park",                    "МФО · ЦБ"],
    ["Команда",           "9 чел · $132K/год",          "5 чел · $54K/год"],
    ["Создаёт",           "Приложение, ЛК, 1С, API",    "Финансирование, договоры"],
    ["Выручка",           "SaaS от дочки",              "Ujra с транзакций"],
    ["IP",                "Код, бренд, патенты",        "Лицензия МФО"],
    ["Налог на прибыль",  "0%",                         "20%"],
    ["Соцналог",          "1%",                         "12%"],
    ["НДФЛ команды",      "7.5%",                       "12%"],
  ];

  const reasons = [
    { icon: <Icon.wallet/>,   t: "Налоговая эффективность", b: "Основные расходы — IT-команда. Она в IT Park: 0% налог на прибыль, 1% соцналог, 7.5% НДФЛ. Экономия ~$48K/год при текущем масштабе." },
    { icon: <Icon.shield/>,   t: "Разделение рисков",       b: "Платформа, код, бренд — на холдинге. Ужесточит регулятор условия для МФО — технология в безопасности. Лицензию можно заменить, платформа остаётся." },
    { icon: <Icon.users/>,    t: "Инвесторы — в холдинг",   b: "Одна cap table, одна оценка. Инвестор покупает долю в Rizq Tech — владеет и технологией, и МФО." },
    { icon: <Icon.building/>, t: "Масштабирование",         b: "Новая страна = новая дочка с локальной лицензией. Платформа та же: Rizq Finance UZ, TJ, TR — на одном технологическом ядре." },
  ];

  const pnlTech = [
    ["Выручка (SaaS)", "$350,000", false],
    ["IT-команда (9 чел)", "−$132,000", false],
    ["Соцналог 1%", "−$1,320", false],
    ["Инфраструктура", "−$36,000", false],
    ["Чистая прибыль", "$180,680", true],
    ["Налог", "$0", true],
  ];
  const pnlFin = [
    ["Выручка (ujra)", "$1,200,000", false],
    ["SaaS → холдинг", "−$350,000", false],
    ["Команда + соцналог", "−$60,480", false],
    ["Транзакции ($0.20 × вывод)", "−$83,500", false],
    ["Операционные", "−$54,000", false],
    ["Прибыль до налога", "$652,020", true],
    ["Налог 20%", "−$130,404", false],
    ["Чистая прибыль", "$521,616", true],
  ];

  const verdict = [
    ["Чистая прибыль",       "$654K",                "$702K"],
    ["Экономия на налогах",  "—",                    "+$48K / год"],
    ["IP защищён",           "Нет",                  "Да"],
    ["Масштабирование",      "Сложно",               "Дочка на страну"],
    ["Для инвестора",        "Финансовая компания",  "Tech-холдинг"],
  ];

  const scale = [
    ["$1.2M", "+$48K"],
    ["$2.4M", "+$110K"],
    ["$6M",   "+$300K"],
  ];

  const mono = { fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" };

  return (
    <section style={{ background: "var(--bg-sand)", color: "var(--ink)" }}>
      <div className="container">
        <SecHead
          num="15"
          kicker="Организационная структура"
          title={<>Две компании. <span className="display-serif" style={{color:"var(--ink-2)"}}>Одна</span> экосистема.</>}
          lead="Rizq работает через холдинговую структуру: технологическая компания владеет финансовой дочкой. Платформа отдельно, лицензия отдельно. Каждая делает то, в чём сильна — стандартная финтех-архитектура."
        />

        {/* Holding diagram */}
        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 0, alignItems: "stretch" }} className="org-diagram">
          <div className="card" style={{ padding: 28, borderRadius: 20, background: "var(--bg-deep)", color: "var(--inverse)", border: "none", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: 12 }}>
            <div aria-hidden style={{ position: "absolute", right: -50, top: -50, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, oklch(0.50 0.22 142 / 0.30), transparent 70%)" }}/>
            <span style={{ ...mono, color: "var(--brand)", position: "relative" }}>Холдинг · IT Park</span>
            <h3 style={{ position: "relative", fontSize: 24, color: "var(--inverse)", letterSpacing: "-0.02em", margin: 0 }}>Rizq Tech</h3>
            <ul style={{ position: "relative", margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {["Разрабатывает платформу", "Вся IT-команда — 9 человек", "Владеет кодом, брендом, IP", "Резидент IT Park"].map((x) => (
                <li key={x} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13.5, color: "var(--inverse-2)", lineHeight: 1.45 }}>
                  <span style={{ color: "var(--brand)", flex: "none", marginTop: 2 }}><Icon.check size={15}/></span>{x}
                </li>
              ))}
            </ul>
          </div>

          <div className="org-connector" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 8px", minWidth: 132 }}>
            <span style={{ ...mono, color: "var(--brand-2)", fontSize: 9, textAlign: "center", lineHeight: 1.4 }}>100% владеет</span>
            <div style={{ margin: "8px 0", width: 70, height: 2, background: "var(--brand)", position: "relative" }}>
              <span style={{ position: "absolute", right: -1, top: -4, width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "8px solid var(--brand)" }}/>
            </div>
            <span style={{ ...mono, color: "var(--ink-3)", fontSize: 9, textAlign: "center", lineHeight: 1.4 }}>SaaS-платёж<br/>обратно</span>
          </div>

          <div className="card" style={{ padding: 28, borderRadius: 20, background: "var(--card)", border: "2px solid var(--brand)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ ...mono, color: "var(--brand-2)" }}>Дочка · МФО</span>
            <h3 style={{ fontSize: 24, color: "var(--ink)", letterSpacing: "-0.02em", margin: 0 }}>Rizq Finance</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {["Лицензия МФО от ЦБ", "Финансовые операции", "Комплаенс и продажи — 5 человек", "Покупает платформу у холдинга"].map((x) => (
                <li key={x} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.45 }}>
                  <span style={{ color: "var(--brand-2)", flex: "none", marginTop: 2 }}><Icon.check size={15}/></span>{x}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Money flow band */}
        <div style={{ marginTop: 14, padding: "18px 24px", borderRadius: 16, background: "var(--card)", border: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }} className="org-flow">
          <span style={{ ...mono, color: "var(--ink-3)", flex: "none" }}>Поток денег</span>
          {[
            ["Сотрудник платит ujra", null],
            ["Rizq Finance · $1.2M/год", "выручка"],
            ["29% → Rizq Tech · $350K", "SaaS · налог 0%"],
            ["Прибыль → оборотный капитал", "реинвест"],
          ].map(([t, s], i, arr) => (
            <React.Fragment key={i}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--ink)", lineHeight: 1.3 }}>{t}</span>
                {s && <span style={{ ...mono, fontSize: 9, color: "var(--brand-2)" }}>{s}</span>}
              </div>
              {i < arr.length - 1 && <span style={{ color: "var(--brand)", flex: "none" }}><Icon.arrow size={16}/></span>}
            </React.Fragment>
          ))}
        </div>

        {/* Who does what */}
        <div style={{ marginTop: 32, borderRadius: 18, overflow: "hidden", border: "1px solid var(--line)", background: "var(--card)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1.3fr", padding: "14px 22px", background: "var(--bg-deep)", ...mono, color: "var(--inverse-2)" }} className="org-row">
            <span>Параметр</span>
            <span style={{ color: "var(--brand)" }}>Rizq Tech</span>
            <span>Rizq Finance</span>
          </div>
          {compare.map(([p, tech, fin], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1.3fr", padding: "14px 22px", borderTop: "1px solid var(--line)", background: i % 2 === 0 ? "var(--card)" : "oklch(0.97 0.014 86)", fontSize: 13.5, lineHeight: 1.4, alignItems: "center" }} className="org-row">
              <span style={{ ...mono, fontSize: 11, color: "var(--ink-3)" }}>{p}</span>
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>{tech}</span>
              <span style={{ color: "var(--ink-2)" }}>{fin}</span>
            </div>
          ))}
        </div>

        {/* Why two companies */}
        <div style={{ marginTop: 32 }}>
          <div style={{ ...mono, color: "var(--brand-2)" }}>Почему две компании</div>
          <h3 style={{ marginTop: 8, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Налоги, риски, инвесторы, рост — каждое работает на структуру.</h3>
        </div>
        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }} className="org-reasons">
          {reasons.map((r) => (
            <div key={r.t} className="card" style={{ padding: 22, borderRadius: 16, display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ width: 40, height: 40, borderRadius: 11, background: "var(--brand)", color: "var(--brand-ink)", display: "grid", placeItems: "center", flex: "none" }}>{r.icon}</span>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.015em" }}>{r.t}</div>
                <div style={{ marginTop: 6, fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{r.b}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Financial model */}
        <div style={{ marginTop: 32 }}>
          <div style={{ ...mono, color: "var(--brand-2)" }}>Финансовая модель · ARR $1.2M</div>
          <h3 style={{ marginTop: 8, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Чистая прибыль группы — <span style={{ color: "var(--brand-2)" }}>$702,296 / год</span>.</h3>
        </div>
        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="org-pnl">
          {[
            { title: "Rizq Tech · IT Park", rows: pnlTech, accent: true },
            { title: "Rizq Finance · МФО", rows: pnlFin, accent: false },
          ].map((col) => (
            <div key={col.title} className="card" style={{ padding: 24, borderRadius: 16, border: col.accent ? "2px solid var(--brand)" : "1px solid var(--line)" }}>
              <div style={{ ...mono, color: col.accent ? "var(--brand-2)" : "var(--ink-3)" }}>{col.title}</div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column" }}>
                {col.rows.map(([label, val, strong], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, padding: "9px 0", borderTop: i === 0 ? "none" : "1px solid var(--line)" }}>
                    <span style={{ fontSize: 13, color: strong ? "var(--ink)" : "var(--ink-2)", fontWeight: strong ? 700 : 400 }}>{label}</span>
                    <span style={{ fontFamily: "var(--f-mono)", fontSize: 13.5, fontWeight: strong ? 800 : 600, color: strong ? "var(--brand-2)" : "var(--ink)" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verdict + scale */}
        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 14 }} className="org-verdict">
          <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--line)", background: "var(--card)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", padding: "13px 22px", background: "var(--bg-sand)", ...mono, color: "var(--ink-3)" }} className="org-row">
              <span></span>
              <span>Одна МФО</span>
              <span style={{ color: "var(--brand-2)" }}>Холдинг + МФО</span>
            </div>
            {verdict.map(([p, a, b], i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", padding: "13px 22px", borderTop: "1px solid var(--line)", fontSize: 13, lineHeight: 1.35, alignItems: "center" }} className="org-row">
                <span style={{ ...mono, fontSize: 10.5, color: "var(--ink-3)" }}>{p}</span>
                <span style={{ color: "var(--ink-2)" }}>{a}</span>
                <span style={{ color: "var(--ink)", fontWeight: 700 }}>{b}</span>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 24, borderRadius: 18, background: "var(--bg-deep)", color: "var(--inverse)", border: "none", display: "flex", flexDirection: "column" }}>
            <div style={{ ...mono, color: "var(--brand)" }}>Экономия растёт с ARR</div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
              {scale.map(([arr, save], i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "12px 0", borderTop: i === 0 ? "none" : "1px solid oklch(0.4 0.04 158 / 0.5)" }}>
                  <span style={{ fontFamily: "var(--f-mono)", fontSize: 14, color: "var(--inverse-2)" }}>{arr}</span>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "var(--brand)" }}>{save}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1000px) {
            .org-diagram { grid-template-columns: 1fr !important; }
            .org-connector { flex-direction: row !important; min-width: 0 !important; padding: 10px 0 !important; gap: 12px; }
            .org-connector > div { transform: rotate(90deg); }
            .org-reasons { grid-template-columns: 1fr !important; }
            .org-pnl { grid-template-columns: 1fr !important; }
            .org-verdict { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 600px) {
            .org-row { grid-template-columns: 1fr !important; gap: 4px; }
            .org-row > span { padding: 1px 0; }
            .org-flow { flex-direction: column; align-items: flex-start !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   TWO-PATH ROADMAP — после инвестиций
   ============================================================ */
function S_TwoPathRoadmap() {
  const products = [
    { t: "EWA — наш единственный фокус", b: "Один продукт, доведённый до совершенства. Доступ к заработанным деньгам, ujra 2.5%, payroll-backed. Углубляем продукт: лимиты, ERP-интеграции, мобильное приложение, исламский комплаенс. Цель — 120K сотрудников за 12 месяцев. Никакого распыления на сторонние сервисы.", phase: "Сейчас → M12", tag: "01" },
    { t: "Карты Rizq — канал вывода", b: "Собственные карты с эмитентом-партнёром: рельсы, через которые сотрудник получает вывод. Мгновенное зачисление, удобство для пользователя и interchange-доход с каждой транзакции. Карта — не отдельный продукт, а способ доставки EWA.", phase: "Year 2", tag: "02" },
  ];

  const cis = [
    { c: "Казахстан", pop: "20M", note: "Развитый payroll, ноль halal EWA" },
    { c: "Кыргызстан", pop: "7M", note: "84% мусульмане, ноль EWA" },
    { c: "Таджикистан", pop: "10M", note: "98% мусульмане, рабочая миграция" },
    { c: "Азербайджан", pop: "10M", note: "97% мусульмане, развитый банкинг" },
    { c: "Туркменистан", pop: "7M", note: "93% мусульмане, закрытый рынок" },
  ];

  const global = [
    { c: "Индонезия", pop: "280M", note: "87% мусульмане · #1 по халяль-эконом." },
    { c: "Пакистан", pop: "240M", note: "97% мусульмане · растущий fintech" },
    { c: "Бангладеш", pop: "170M", note: "91% мусульмане · payroll формализуется" },
    { c: "Малайзия", pop: "34M", note: "63% мусульмане · halal banking hub" },
    { c: "Египет", pop: "110M", note: "95% мусульмане · MENA gateway" },
    { c: "Нигерия", pop: "220M", note: "53% мусульмане · самый крупный Африка" },
    { c: "Турция", pop: "85M", note: "99% мусульмане · развитый payroll" },
    { c: "Марокко", pop: "37M", note: "99% мусульмане · MENA · франкоязычный" },
  ];

  return (
    <section style={{ background: "var(--bg-sand)" }}>
      <div className="container">
        <SecHead num="14·c" kicker="После инвестиций · Roadmap" title={<>Один продукт. <span className="display-serif" style={{color:"var(--ink-2)"}}>Доведённый</span> до совершенства.</>} lead="Никакого распыления: фокус на EWA и собственных картах, через которые сотрудники получают выводы. Затем — географическое масштабирование уже отлаженной модели. Всё на МФО-лицензии Rizq, без зависимости от одного банка."/>

        {/* Products timeline */}
        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
        }} className="tpr-products">
          {products.map((p, i) => (
            <div key={i} style={{
              padding: 26, borderRadius: 22,
              background: i === 0 ? "linear-gradient(160deg, oklch(0.22 0.06 155), oklch(0.16 0.03 158) 70%)" : "var(--card)",
              color: i === 0 ? "var(--inverse)" : "var(--ink)",
              border: i === 0 ? "2px solid var(--brand)" : "1px solid var(--line)",
              boxShadow: i === 0 ? "var(--sh-glow)" : "var(--sh-card)",
              display: "flex", flexDirection: "column", gap: 12,
              position: "relative", overflow: "hidden",
            }}>
              {i === 0 && (
                <div aria-hidden style={{
                  position: "absolute", right: -60, top: -60, width: 220, height: 220, borderRadius: "50%",
                  background: "radial-gradient(circle, oklch(0.78 0.24 142 / 0.15), transparent 70%)",
                }}/>
              )}
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{
                  fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 800,
                  color: i === 0 ? "var(--brand)" : "var(--ink-3)",
                  letterSpacing: "0.1em",
                }}>{p.tag}</span>
                <span style={{
                  fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                  padding: "4px 9px", borderRadius: 999,
                  background: i === 0 ? "var(--brand)" : "var(--bg-sand)",
                  color: i === 0 ? "var(--brand-ink)" : "var(--ink-3)",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  border: i === 0 ? "none" : "1px solid var(--line)",
                }}>{p.phase}</span>
              </div>
              <h3 style={{ position: "relative", fontSize: 19, lineHeight: 1.25, color: "inherit", letterSpacing: "-0.02em" }}>{p.t}</h3>
              <p style={{ position: "relative", fontSize: 13.5, lineHeight: 1.55, color: i === 0 ? "var(--inverse-2)" : "var(--ink-2)" }}>{p.b}</p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 1000px) {
            .tpr-products { grid-template-columns: 1fr 1fr !important; }
            .tpr-cis { grid-template-columns: 1fr 1fr 1fr !important; }
            .tpr-global { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) {
            .tpr-products, .tpr-cis, .tpr-global { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   PARTNER FOOTER
   ============================================================ */
function PartnerFooter() {
  return (
    <footer style={{ background: "var(--bg-deep)", color: "var(--inverse)", padding: "56px 0 40px" }}>
      <div className="container partner-footer-row" style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 24, flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <RizqLogo tone="light"/>
          <span style={{ fontSize: 13, color: "var(--inverse-2)" }}>Партнёрское предложение · 2026</span>
        </div>
        <span style={{
          fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 600,
          padding: "8px 14px", borderRadius: 999,
          background: "oklch(0.22 0.05 158)",
          color: "var(--brand)",
          border: "1px solid oklch(0.32 0.04 155)",
          letterSpacing: "0.14em", textTransform: "uppercase",
        }}>● Confidential</span>
      </div>
      <style>{`
        @media (max-width: 540px) {
          .partner-footer-row { gap: 16px !important; }
        }
      `}</style>
    </footer>
  );
}

/* ============================================================
   S_EmployerValue — зачем это работодателю
   3 главные причины + 4 дополнительных
   ============================================================ */
function S_EmployerValue() {
  const primary = [
    {
      icon: <Icon.heart/>,
      n: "01",
      t: "Удержание персонала · меньше текучесть",
      b: "Для кассиров, поваров, курьеров скорость доступа к деньгам — критический фактор. Возможность получить оплату сразу после смены привязывает к рабочему месту. Уход к конкурентам с классической выплатой 2 раза в месяц = временная потеря финансовой гибкости.",
      stat: "−40%",
      statLabel: "Текучесть на пилоте",
    },
    {
      icon: <Icon.chart/>,
      n: "02",
      t: "Сокращение расходов на наем и адаптацию",
      b: "Снижение текучести напрямую уменьшает затраты на рекрутинг, размещение вакансий, собеседования и обучение. На примере Uyda (500 сотрудников, исходная текучесть 50%) — расходы на наем сократились в 2 раза, экономия — десятки тысяч долларов в год.",
      stat: "×2",
      statLabel: "Экономия на найме · Uyda",
    },
    {
      icon: <Icon.clock/>,
      n: "03",
      t: "Бесплатное развёртывание СУРВ",
      b: "Бесплатно интегрируем собственную систему учёта рабочего времени — приход/уход, биометрия. Прямая экономия на ИТ-инфраструктуре контроля. Автоматически исключаются махинации с табелем: баланс в Rizq формируется строго на основе зафиксированных минут и смен.",
      stat: "$0",
      statLabel: "Стоимость СУРВ для компании",
    },
  ];

  const secondary = [
    {
      icon: <Icon.wallet/>,
      n: "04",
      t: "Оптимизация оборотного капитала",
      b: "Сотрудники получают досрочно из капитала МФО Rizq. Работодатель компенсирует всё единым платежом в день зарплаты — без авансов, без нагрузки на ликвидность в середине месяца.",
    },
    {
      icon: <Icon.bolt/>,
      n: "05",
      t: "HR-бренд и приток откликов",
      b: "«Доступ к зарплате каждый день через Rizq» в вакансиях на hh.uz и OLX — ключевой стимул для соискателей. При прочих равных кандидат выберет работодателя с гибкими выплатами.",
    },
    {
      icon: <Icon.smile/>,
      n: "06",
      t: "Меньше стресса — выше продуктивность",
      b: "Дефицит средств в межзарплатный период толкает в МФО под высокие проценты — закредитованность и падение продуктивности. Доступ к собственным деньгам решает экологично, без долговой ямы.",
    },
    {
      icon: <Icon.users/>,
      n: "07",
      t: "Адаптация новичков на испыт. сроке",
      b: "Пик увольнений в ритейле и QSR — первые 3–4 недели работы: новичкам тяжело выдержать кассовый разрыв. Возможность забрать за первую отработанную неделю помогает закрепиться.",
    },
  ];

  return (
    <section>
      <div className="container">
        <SecHead
          num="05·b"
          kicker="Мотивация работодателя"
          title={<>Зачем это <span className="display-serif" style={{color:"var(--ink-2)"}}>работодателю</span>.</>}
          lead="Rizq — не только продукт для сотрудника. Это HR-инструмент с измеримым эффектом на текучесть, стоимость найма и операционную дисциплину. Три главные причины, по которым компании подписывают договор — и четыре дополнительных эффекта."
        />

        {/* Primary — 3 main reasons */}
        <div style={{
          marginTop: 40,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <span style={{
            fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 800,
            color: "var(--brand-2)", letterSpacing: "0.14em", textTransform: "uppercase",
          }}>● 3 главные причины</span>
          <span style={{ flex: 1, height: 1, background: "var(--line)" }}/>
        </div>

        <div style={{
          marginTop: 18,
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
        }} className="emp-primary">
          {primary.map((r) => (
            <div key={r.n} style={{
              padding: 32, borderRadius: 24,
              background: "linear-gradient(160deg, oklch(0.22 0.06 155), oklch(0.16 0.03 158) 70%)",
              color: "var(--inverse)",
              border: "2px solid var(--brand)",
              boxShadow: "var(--sh-glow)",
              display: "flex", flexDirection: "column", gap: 16,
              position: "relative", overflow: "hidden",
            }}>
              <div aria-hidden style={{
                position: "absolute", right: -80, top: -80, width: 240, height: 240, borderRadius: "50%",
                background: "radial-gradient(circle, oklch(0.78 0.24 142 / 0.18), transparent 70%)",
              }}/>
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: 50, height: 50, borderRadius: 14,
                  background: "var(--brand)", color: "var(--brand-ink)",
                  display: "grid", placeItems: "center",
                }}>{r.icon}</div>
                <span style={{
                  fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 800,
                  color: "var(--brand)", letterSpacing: "0.12em",
                }}>{r.n}</span>
              </div>
              <h3 style={{
                position: "relative",
                fontSize: 22, lineHeight: 1.25, letterSpacing: "-0.02em",
                color: "var(--inverse)",
              }}>{r.t}</h3>
              <p style={{
                position: "relative",
                fontSize: 13.5, lineHeight: 1.6, color: "var(--inverse-2)",
              }}>{r.b}</p>
              <div style={{
                position: "relative", marginTop: "auto", paddingTop: 18,
                borderTop: "1px dashed oklch(0.32 0.04 155)",
                display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12,
              }}>
                <div style={{
                  fontSize: 44, fontWeight: 800, letterSpacing: "-0.035em",
                  color: "var(--brand)", lineHeight: 1, fontVariantNumeric: "tabular-nums",
                }}>{r.stat}</div>
                <div style={{
                  fontFamily: "var(--f-mono)", fontSize: 10.5, fontWeight: 600,
                  color: "var(--inverse-2)", textTransform: "uppercase",
                  letterSpacing: "0.08em", textAlign: "right", maxWidth: "16ch",
                }}>{r.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary — 4 additional reasons */}
        <div style={{
          marginTop: 48,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <span style={{
            fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 800,
            color: "var(--ink-3)", letterSpacing: "0.14em", textTransform: "uppercase",
          }}>+ Дополнительные эффекты</span>
          <span style={{ flex: 1, height: 1, background: "var(--line)" }}/>
        </div>

        <div style={{
          marginTop: 18,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12,
        }} className="emp-secondary">
          {secondary.map((r) => (
            <div key={r.n} className="card" style={{
              padding: 22, borderRadius: 18,
              display: "flex", flexDirection: "column", gap: 12,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "var(--bg-sand)", color: "var(--ink-2)",
                  display: "grid", placeItems: "center",
                  border: "1px solid var(--line)",
                }}>{r.icon}</div>
                <span style={{
                  fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                  color: "var(--ink-3)", letterSpacing: "0.1em",
                }}>{r.n}</span>
              </div>
              <h4 style={{ fontSize: 15.5, lineHeight: 1.3, letterSpacing: "-0.01em", fontWeight: 700, color: "var(--ink)" }}>{r.t}</h4>
              <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{r.b}</p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 1000px) {
            .emp-primary { grid-template-columns: 1fr !important; }
            .emp-secondary { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 540px) {
            .emp-secondary { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   BANK BENEFITS — 6 income sources + how it works + tech
   ============================================================ */
function S_BankBenefits() {
  const income = [
    { n: "01", icon: <Icon.users/>, t: "Новые клиенты — бесплатно", b: "Каждый сотрудник в Rizq → новый клиент банка. Передаём данные, банк открывает счёт и карту.", stat: "100K", statLabel: "клиентов / год" },
    { n: "02", icon: <Icon.bank/>, t: "Зарплатные проекты", b: "Компания видит ценность → переводит зарплатный проект в банк-партнёр. Дополнительный ФОТ на счетах.", stat: "+ФОТ", statLabel: "на счетах банка" },
    { n: "03", icon: <Icon.wallet/>, t: "Прямая комиссия", b: "50% от 2.5% ujra с каждого вывода → банку. Средний чек $80 → $1.00 на транзакцию.", stat: "$1.00", statLabel: "с транзакции" },
    { n: "04", icon: <Icon.lock/>, t: "Страховые депозиты", b: "17.5% ФОТ каждой компании на счёте банка. Ликвидность + обеспечение. Постоянный остаток.", stat: "17.5%", statLabel: "ФОТ на депозите" },
    { n: "05", icon: <Icon.bolt/>, t: "Interchange с карт", b: "Каждый сотрудник уже получил карту банка. Interchange с покупок, обслуживание, лояльность.", stat: "100%", statLabel: "клиентов с картой" },
    { n: "06", icon: <Icon.chart/>, t: "Cross-sell продуктов", b: "Активные клиенты с балансом. Депозиты, ипотека, страхование, переводы — встроенная витрина.", stat: "6+", statLabel: "категорий продуктов" },
  ];

  const steps = [
    { n: "1", t: "Rizq отправляет запрос", b: "Через API: сумма, карта, ID сотрудника, ID компании." },
    { n: "2", t: "Банк переводит из своих средств", b: "Деньги банка → карта сотрудника. Мгновенно." },
    { n: "3", t: "Payday — возврат банку", b: "Работодатель удерживает из зарплаты → переводит банку." },
    { n: "4", t: "Банк в плюсе", b: "Получил назад + комиссию. Цикл: 2–4 недели." },
  ];

  const cycleStats = [
    ["NPL", "0%", "возврат гарантирован работодателем"],
    ["Страховой депозит", "17.5% ФОТ", "на счёте банка"],
    ["Цикл оборота", "2–4 нед", "максимум"],
  ];

  const tech = [
    { icon: <Icon.bolt/>, t: "API интеграция", b: "REST API для автоматических запросов на перевод. Webhook-подтверждение." },
    { icon: <Icon.lock/>, t: "Безопасность", b: "mTLS, подпись каждого запроса, idempotency keys. Полный аудит-лог." },
    { icon: <Icon.shield/>, t: "Токенизация карт", b: "Карты сотрудников токенизируются через банк. PCI DSS на стороне банка." },
    { icon: <Icon.chart/>, t: "Отчётность", b: "Ежедневный реконсайл. Ежемесячный реестр возвратов. Полная прозрачность." },
  ];

  return (
    <section className="bankben" style={{ position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", top: -160, right: -120, width: 520, height: 520, borderRadius: "50%",
        background: "radial-gradient(circle at 35% 35%, oklch(0.85 0.18 145 / 0.28), transparent 70%)",
        filter: "blur(20px)", zIndex: 0,
      }}/>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SecHead num="12" kicker="Выгоды для банка" title={<>Шесть источников. <span style={{ color: "var(--brand-2)" }}>Все независимые.</span></>} lead="Каждый клиент Rizq становится клиентом банка-партнёра. Шесть независимых источников дохода — без CAC, без NPL, без операционной нагрузки."/>

        {/* Income cards */}
        <div className="bankben-income" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {income.map((s) => (
            <div key={s.n} className="bankben-card" style={{
              padding: 24, borderRadius: 20,
              background: "var(--card)", border: "1px solid var(--line)",
              display: "flex", flexDirection: "column", gap: 12,
              minHeight: 230, position: "relative", overflow: "hidden",
            }}>
              <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--brand), transparent)", opacity: 0.6 }}/>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "var(--bg-sand)", color: "var(--bg-deep)", display: "grid", placeItems: "center", border: "1px solid var(--line)" }}>{s.icon}</div>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 700, color: "var(--ink-3)", letterSpacing: "0.08em" }}>{s.n}</span>
              </div>
              <h3 style={{ fontSize: 17, marginTop: 4, letterSpacing: "-0.015em", lineHeight: 1.3 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{s.b}</p>
              <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px dashed var(--line-2)", display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: "var(--brand-2)", letterSpacing: "-0.02em", fontFamily: "var(--f-sans)", lineHeight: 1 }}>{s.stat}</span>
                <span style={{ fontSize: 10, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--f-mono)", fontWeight: 600 }}>{s.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* NPL / CAC big moment */}
        <div className="grain mesh" style={{ marginTop: 44, borderRadius: 32, padding: "56px 48px", position: "relative", overflow: "hidden", color: "var(--inverse)" }}>
          <div className="bankben-callout" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
            {[
              { k: "NPL", n: "0", suf: "%", t: "Невозвратов нет.", b: "Возврат гарантирован работодателем через удержание из зарплаты. Не кредит населению — payroll-backed операция с нулевым дефолтом." },
              { k: "CAC", n: "$0", suf: "", t: "Клиенты бесплатные.", b: "Не реклама, не таргет. Клиенты приходят через работодателя — сразу с активной картой и счётом." },
            ].map((m, i) => (
              <div key={i}>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "var(--brand)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>{m.k}</span>
                <div className="bankben-mega" style={{ marginTop: 12, fontSize: "clamp(72px, 10vw, 160px)", fontWeight: 800, color: "var(--brand)", letterSpacing: "-0.06em", lineHeight: 0.9 }}>{m.n}<span style={{ fontSize: "0.5em", opacity: 0.75 }}>{m.suf}</span></div>
                <div style={{ marginTop: 8, fontSize: 22, fontWeight: 700 }}>{m.t}</div>
                <p style={{ marginTop: 12, color: "var(--inverse-2)", maxWidth: "36ch", fontSize: 15, lineHeight: 1.55 }}>{m.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What we need from the bank */}
        <div className="bankben-need" style={{
          marginTop: 24, padding: "30px 34px", borderRadius: 22,
          background: "linear-gradient(150deg, oklch(0.97 0.04 145), var(--card) 75%)",
          border: "2px solid var(--brand)",
          display: "grid", gridTemplateColumns: "minmax(240px, 0.9fr) 1.6fr", gap: 28, alignItems: "center",
        }}>
          <div>
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--brand-2)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Что нам нужно от вас</span>
            <h3 style={{ marginTop: 10, fontSize: 28, letterSpacing: "-0.025em", lineHeight: 1.15 }}>Всё остальное — мы.</h3>
          </div>
          <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6, margin: 0 }}>
            Мы берём на себя привлечение компаний, подключение сотрудников, продвижение, платформу и поддержку.
            От банка нужно одно — <b style={{ color: "var(--ink)" }}>финансировать выводы из собственных средств</b>. Возврат гарантирован.
          </p>
        </div>

        {/* How it works for the bank */}
        <div style={{ marginTop: 44 }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--brand-2)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Как это работает для банка</div>
          <h3 style={{ marginTop: 8, fontSize: 24, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Четыре шага. Деньги оборачиваются за 2–4 недели.</h3>
        </div>
        <div className="bankben-steps" style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {steps.map((s) => (
            <div key={s.n} className="card" style={{ padding: 22, borderRadius: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ width: 38, height: 38, borderRadius: 11, background: "var(--bg-deep)", color: "var(--brand)", display: "grid", placeItems: "center", fontFamily: "var(--f-mono)", fontWeight: 800, fontSize: 15 }}>{s.n}</span>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{s.t}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{s.b}</div>
            </div>
          ))}
        </div>

        {/* Cycle stats */}
        <div className="bankben-cycle" style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {cycleStats.map(([k, v, s], i) => (
            <div key={i} style={{ padding: "18px 22px", borderRadius: 14, background: "var(--bg-sand)", border: "1px solid var(--line)" }}>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>{k}</div>
              <div style={{ marginTop: 6, fontSize: 26, fontWeight: 800, color: "var(--brand-2)", letterSpacing: "-0.02em", lineHeight: 1 }}>{v}</div>
              <div style={{ marginTop: 4, fontSize: 12, color: "var(--ink-2)" }}>{s}</div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 14, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: "78ch" }}>
          <b style={{ color: "var(--ink)" }}>Почему это выгодно банку:</b> деньги не уходят — они оборачиваются за 2–4 недели с гарантированным возвратом и комиссией сверху. Это не кредит населению с NPL-рисками — это payroll-backed операция с нулевым дефолтом.
        </p>

        {/* Technical integration */}
        <div style={{ marginTop: 44 }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--ink-3)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Техническая интеграция</div>
          <h3 style={{ marginTop: 8, fontSize: 24, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>Подключение через API. Безопасно и прозрачно.</h3>
        </div>
        <div className="bankben-tech" style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {tech.map((c, i) => (
            <div key={i} className="card" style={{ padding: 22, borderRadius: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: "var(--brand)", color: "var(--brand-ink)", display: "grid", placeItems: "center" }}>{c.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{c.t}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{c.b}</div>
            </div>
          ))}
        </div>

        <style>{`
          .bankben-card { transition: transform .25s, box-shadow .25s, border-color .25s; }
          .bankben-card:hover { transform: translateY(-3px); box-shadow: var(--sh-card); border-color: var(--brand-2); }
          @media (max-width: 1000px) {
            .bankben-income { grid-template-columns: 1fr 1fr !important; }
            .bankben-steps, .bankben-tech { grid-template-columns: 1fr 1fr !important; }
            .bankben-callout { grid-template-columns: 1fr !important; gap: 32px !important; }
            .bankben-need { grid-template-columns: 1fr !important; gap: 16px !important; }
          }
          @media (max-width: 600px) {
            .bankben-income, .bankben-steps, .bankben-tech, .bankben-cycle { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   PARTNER APP — order requested by user
   ============================================================ */
function PartnerApp() {
  return (
    <React.Fragment>
      <PartnerHeader/>
      <main>
        {/* 1. Hero (investor) */}
        <S01Hero/>
        {/* 2. Problem */}
        <S02Problem/>
        {/* 3. Solution */}
        <S03Solution/>
        {/* 4. Market */}
        <S09Market/>
        {/* 5. Why now */}
        <S_WhyNow/>
        {/* 5b. Why this matters for the employer */}
        <S_EmployerValue/>
        {/* 6. Shariah compliance */}
        <S07Halal/>
        {/* 7. Business model */}
        <S_BizIntro/>
        {/* 8. Expected revenue */}
        <S08Revenue/>
        {/* 8b. Y2 / Y3 projection from exit data */}
        <S_PartnerYearly/>
        {/* 9. NDA case */}
        <S10Uyda/>
        {/* 11. Team (3 co-founders + 3 founding members) */}
        <S_PartnerTeam/>
        {/* 12. Bank benefits + how it works + tech integration */}
        <S_BankBenefits/>
        {/* 13b. Two-path roadmap */}
        <S_TwoPathRoadmap/>
      </main>
      <PartnerFooter/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PartnerApp/>);


