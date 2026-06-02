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
      name: "Shokhrukh Yulchiev", role: "CCO · Co-founder",
      b: "10+ лет в коммерции и B2B-продажах. CCO в Jalebi, Bitspot и Mimojo — выстраивал отделы продаж, партнёрские каналы и стратегические сделки. Managing Partner в Silkbridge Ventures. Отвечает за B2B-канал и партнёрства с банками и работодателями.",
      logos: ["Jalebi", "Bitspot", "Mimojo"], initials: "SY",
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
        <SecHead num="11" kicker="Команда" title={<>2 ко-фаундера. <span className="display-serif" style={{color:"var(--ink-2)"}}>3 founding members.</span></>} lead="Двое отвечают за компанию: продукт и коммерцию. Трое — за технологию, инфраструктуру и продуктовую работу с банками. Все — из Yandex, Tinkoff, Sber, OTP."/>

        {/* Co-founders */}
        <div style={{ marginTop: 40 }}>
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--brand-2)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Co-founders</div>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
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
      b: "Учёт рабочего времени и зарплат для среднего бизнеса в УЗ. Подключаем Rizq как нативный модуль выплат. Сотрудники видят кнопку «Получить заработанное» прямо в Workly.",
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
      mrr: "$100K", arr: "$1.2M",
      color: "card",
      note: "Помесячная разбивка выше. Выручка Rizq растёт от $3.7K на M1 до $100K на M12. Объём финансирования — около $4M на M12.",
    },
    {
      tag: "Год 2", sub: "После Seed · Series A горизонт",
      reg: "450K", pay: "180K",
      mrr: "$558K", arr: "$6.7M",
      color: "dark",
      note: "Расширение на 4–5 регионов УЗ. Подключение крупных розничных сетей через Clockster, Workly и прямые B2B-продажи.",
    },
    {
      tag: "Год 3", sub: "Зрелость · Exit / Series B горизонт",
      reg: "1M", pay: "400K",
      mrr: "$1.24M", arr: "$14.9M",
      color: "brand",
      note: "1M зарегистрированных, 400K активно выводят ежемесячно. ARR $14.9M — целевой горизонт для exit при оценке 8× ARR → ~$120M.",
    },
  ];

  return (
    <section style={{ background: "var(--bg-sand)" }}>
      <div className="container">
        <SecHead num="08·b" kicker="Прогноз · 3 года" title={<>Выручка на горизонте <span className="display-serif" style={{color:"var(--ink-2)"}}>3 лет</span>.</>} lead="Год 1 — операционный пилот по помесячной разбивке выше. Год 2 и Год 3 — траектория из Exit-сценария. Вся комиссия $3.10 — Rizq, без split (МФО-лицензия ЦБ УЗ)."/>

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
            <div style={{ marginTop: 6, fontSize: 15, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.01em" }}>Exit-сценарий · 8× ARR</div>
          </div>
          {[
            { k: "Год 1 → Год 2", v: "×3.7", b: "по ARR" },
            { k: "Год 2 → Год 3", v: "×2.2", b: "по ARR" },
            { k: "Год 1 → Год 3", v: "×8.3", b: "по ARR" },
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
    ["Трудовой кодекс РУз",   "Конфликт · ст. 268 — нецелевой получатель",  "Чисто · ст. 269/271 — удержание по заявлению"],
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
    { icon: <Icon.ban/>, tag: "Трудовой и налоговый тупик", b: "Ст. 268 ТК РУз и ГНК жёстко регулируют, куда работодатель отправляет ФОТ. Прямой перевод зарплаты на счёт коммерческого ООО по уступке прав — красная тряпка для налоговой: первое обвинение — скрытое обналичивание и нелегальная оптимизация НДФЛ." },
    { icon: <Icon.ban/>, tag: "Шариатский тупик · Bay al-Dayn", b: "Продажа денежного требования физлица с дисконтом в исламском праве — Bay al-Dayn. Стандарты AAOIFI квалифицируют это как чистую Riba: деньги меняются на деньги с разницей в номинале. Банки-партнёры с исламскими окнами работать с такой моделью не смогут." },
  ];

  const barriers = [
    { n: "01", icon: <Icon.alert/>, t: "Искажение природы факторинга", b: "УП-109: факторинг — финансирование под уступку требования из договоров купли-продажи и услуг. Зарплата вытекает из трудовых, а не торговых отношений. Юристы Akfa или Korzinka заблокируют такой договор на первом этапе." },
    { n: "02", icon: <Icon.chart/>, t: "Испорченный баланс и ликвидность", b: "Долг перед платформой попадёт в «краткосрочные обязательства перед финагентом» — прямой рост долговой нагрузки и ухудшение коэффициентов ликвидности перед банками. Модель МФО — целевое авансирование ФОТ, баланс не ухудшается." },
    { n: "03", icon: <Icon.ban/>, t: "AML-блокировки банков", b: "Крупные компании платят зарплату реестрами на карты сотрудников. Перенаправление потоков в стороннее факторинговое ООО вызывает авто-блок комплаенса по Правилам внутреннего контроля ЦБ РУз — высокий риск транзитных схем." },
  ];

  const investorPoints = [
    {
      n: "01",
      icon: <Icon.lock/>,
      t: "Институциональный статус",
      b: "Капитал 2 млрд сум формирует уставный фонд лицензированного финансового института, подконтрольного ЦБ. Не маркетинговый расход — а актив, повышающий капитализацию бренда Rizq.",
    },
    {
      n: "02",
      icon: <Icon.users/>,
      t: "Доверие B2B-партнёров",
      b: "Korzinka, Texnomart, Evos и крупные холдинги не подписывают трёхсторонние договоры с «непонятным финтех-стартапом». Лицензированное МФО по ЗРУ-765 снимает юридический барьер — мы надёжный финансовый партнёр.",
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
              Лицензия МФО (уставный капитал 2 млрд сум, ЗРУ-765). Rizq открывает работодателю <b style={{ color: "var(--ink)" }}>лимит целевого финансирования ФОТ</b>. Сотрудник получает свои деньги через платёжного агента — а краткосрочный долг возникает у работодателя, не у работника.
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
            <h3 style={{ marginTop: 12, fontSize: 22, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.25 }}>Модель факторинга.<br/>Уступка требования (УП-109).</h3>
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
          <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 800, color: "var(--brand-2)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Korzinka · Akfa · Makro</div>
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
        {/* 11. Team (2 co-founders + 3 founding partners) */}
        <S_PartnerTeam/>
        {/* 12. GTM (Clockster, Workly + own sales) */}
        <S_PartnerGTM/>
        {/* 13. Investor ask */}
        <S_Ask/>
        {/* 13a. Why MFO, not factoring — regulatory rationale */}
        <S_WhyMFO/>
        {/* 13a2. Risk management & audience segmentation */}
        <S_RiskMgmt/>
        {/* 13b. Two-path roadmap after investment */}
        <S_TwoPathRoadmap/>
        {/* 15. Org structure — tech holding + MFO subsidiary */}
        <S_OrgStructure/>
        {/* 16. Exit */}
        <S_Exit/>
      </main>
      <PartnerFooter/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PartnerApp/>);
