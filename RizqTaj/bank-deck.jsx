/* bank-deck.jsx — Rizq Bank Proposal · 15 sections */
/* global React, ReactDOM, RizqLogo, Icon, Btn, Reveal, AnimatedNumber, EyebrowPill, StepScreens */

const { useState, useEffect, useRef } = React;

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
            Первый <b style={{ color: "var(--ink)" }}>halal EWA-сервис</b> в Узбекистане.
            Сотрудники получают доступ к уже заработанным деньгам. Без кредита, без процента.
            Работаем по МФО-лицензии — финансируем выводы со своего баланса.
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
              { k: "Halal", v: "ujra · нет риба", accent: false },
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
    { icon: "💸", t: "Кредиты под 20–30% годовых", b: "2.3M человек уже в микрозаймах. На каждого — 1.7 договоров. Рост +37% за год. Долговая спираль." },
    { icon: "⏳", t: "Кредит — это барьеры", b: "Время на рассмотрение, лимиты, условия, документы. И даже после всего — вероятность отказа. С Rizq — гарантия получения." },
    { icon: "📋", t: "Ручные авансы", b: "HR тратит время, бухгалтер злится, контроль над ФОТ теряется. Чаще всего — отказ." },
    { icon: "☪️", t: "Риба запрещена", b: "88–96% мусульмане. Кредит с процентом — грех. Берут вынужденно. Rizq = халяль." },
  ];
  return (
    <section style={{ background: "var(--bg-sand)" }}>
      <div className="container">
        <SecHead num="02" kicker="Проблема" title="Зарплата раз в месяц. Расходы — каждый день." lead="14M+ рабочая сила. 3.1M наёмных с payroll. Кредиты под 20–30% годовых. Неформальные долги. EWA в стране не существует."/>

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
            ["Рабочая сила Узбекистана", "14M+"],
            ["Ставки банков по потреб. кредитам", "20–30%"],
            ["EWA-сервисов в стране", "0"],
            ["Доля мусульманского населения", "88–96%"],
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
    { n: "01", screen: 0, t: "Подключаем компанию", b: "Компания регистрируется в ЛК. KYB-верификация, проверка документов, подключение. Дефолт работодателя застрахован у страхового партнёра.", tags: ["KYB", "Страхование риска", "1–3 дня"] },
    { n: "02", screen: 1, t: "Загружаем сотрудников · Синхронизация 1С", b: "CSV/XLSX, ручной ввод или авто-синхронизация с 1С. Приходы, уходы, отпускные, больничные — всё обновляется ежедневно.", tags: ["1С", "CSV/XLSX", "Авто-синхронизация"] },
    { n: "03", screen: 3, t: "Считаем заработанное · ежедневно", b: "Формула: оклад × присутственные дни ÷ рабочие дни × лимит 70%. Баланс обновляется ежедневно. Точная сумма — без приближений.", tags: ["Лимит 70%", "Real-time"] },
    { n: "04", screen: 4, t: "Сотрудник видит баланс перед выводом", b: "В приложении сотрудник видит: сколько уже заработал, сколько можно вывести (с учётом 70% лимита), сколько остаётся до зарплаты. Полная прозрачность до того, как нажать кнопку.", tags: ["Прозрачность", "Real-time баланс"], accent: true },
    { n: "05", screen: 5, t: "Сотрудник выводит на карту", b: "Telegram Mini App или мобильная веб-версия. Три шага: сумма → подтверждение → деньги на карте за 5 минут. Ujra 2.5% — фиксированная плата за услугу.", tags: ["~5 мин", "ujra 2.5%"] },
    { n: "06", screen: 7, t: "Rizq финансирует перевод", b: "Rizq выдаёт средства на карту сотрудника из собственного баланса по МФО-лицензии ЦБ Узбекистана. Это не кредит сотруднику — операция, обеспеченная депозитом компании и payroll-гарантией.", tags: ["МФО · ЦБ УЗ", "NPL = 0", "Payroll-backed"] },
    { n: "07", screen: 8, t: "Работодатель возвращает", b: "В день зарплаты компания удерживает сумму выводов и возвращает Rizq. Остаток зарплаты — сотруднику. Цикл замкнут.", tags: ["Через ERP", "Авто"] },
    { n: "08", screen: 6, t: "Сотрудник видит итоговый расчёт после зарплаты", b: "После расчёта компании сотрудник видит в приложении: общий заработок за месяц, сумму уже выведенных авансов, ujra-комиссию и остаток, который пришёл на карту. Никаких сюрпризов.", tags: ["Финальный расчёт", "История выводов"] },
  ];

  return (
    <section>
      <div className="container">
        <SecHead num="03" kicker="Решение" title={<>8 этапов. Полный цикл. <span className="display-serif" style={{color:"var(--ink-2)"}}>От подключения до итогового расчёта.</span></>} lead="Каждый этап прозрачен. Rizq финансирует выводы со своего баланса (МФО-лицензия ЦБ Узбекистана). Работодатель возвращает в день зарплаты. Сотрудник платит только фиксированную комиссию (ujra)."/>

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
    { tag: "Финансирует", t: "Банк", b: "Выдаёт средства. Получает комиссию, депозиты, новых клиентов. NPL = 0.", style: "dark" },
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
