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
