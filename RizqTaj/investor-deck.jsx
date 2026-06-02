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
        }}>● Pre-seed · 2026</span>
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
        <SecHead num="05" kicker="Почему сейчас" title={<>Окно открыто. <span className="display-serif" style={{color:"var(--ink-2)"}}>Только сейчас.</span></>} lead="Четыре независимых тренда сошлись в одной точке. Каждый из них в отдельности — рыночная возможность. Вместе — отрасль без конкурентов."/>

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
              <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--brand-2)" }}>88–96%</div>
              <div style={{ marginTop: 6, fontSize: 14, color: "var(--ink-2)", fontWeight: 600 }}>населения УЗ — мусульмане</div>
            </div>
            <p style={{ position: "relative", fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.6 }}>
              Кредит с процентом — <b style={{ color: "var(--ink)" }}>риба</b>. Миллионы берут кредиты вынужденно, с чувством вины. Rizq работает по <i style={{ fontFamily: "var(--f-display)", color: "var(--brand-2)" }}>ujra</i> — фиксированная плата, не процент.
            </p>
          </div>

          {/* 02 — Law 2025 */}
          <div className="card" style={{
            padding: 32, borderRadius: 24,
            display: "flex", flexDirection: "column", gap: 16,
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "5px 12px", borderRadius: 999,
                background: "var(--bg-deep)", color: "var(--brand)",
                fontFamily: "var(--f-mono)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
              }}>02 · Регуляторный сдвиг</span>
              <span style={{ fontSize: 28 }}>📜</span>
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                Закон 2025 · <span style={{ color: "var(--brand-2)" }}>Исламский банкинг легализован</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{
                padding: "14px 16px", borderRadius: 14,
                background: "var(--bg-sand)", border: "1px solid var(--line)",
              }}>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>DSTI</div>
                <div style={{ marginTop: 6, fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--ink)" }}>50%</div>
                <div style={{ marginTop: 4, fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4 }}>ЦБ ограничил долю долга от дохода</div>
              </div>
              <div style={{
                padding: "14px 16px", borderRadius: 14,
                background: "oklch(0.96 0.04 145)", border: "1px solid var(--brand)",
              }}>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--brand-2)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>Rizq</div>
                <div style={{ marginTop: 6, fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--ink)" }}>не подпадает</div>
                <div style={{ marginTop: 4, fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4 }}>не кредит — свои деньги</div>
              </div>
            </div>

            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>
              Чем жёстче регуляция кредитов — тем сильнее спрос на EWA.
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
              }}>03 · Глобальный тренд</span>
              <span style={{ fontSize: 28 }}>🌍</span>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--inverse)" }}>
                EWA — <span style={{ color: "var(--brand)" }}>+28% CAGR</span> на EM
              </div>
              <p style={{ marginTop: 8, fontSize: 13.5, color: "var(--inverse-2)", lineHeight: 1.55 }}>
                DailyPay, Prosper Pay, Refyne — EWA растёт везде. В Узбекистане ноль игроков. Первый забирает рынок.
              </p>
            </div>

            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { v: "+28%", k: "CAGR" },
                { v: "104T", k: "сум МФО" },
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
              }}>04 · Психология</span>
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
        <SecHead dark num="08" kicker="Бизнес-модель" title={<>Простая модель. <span className="display-serif" style={{color:"var(--inverse-2)"}}>2,5% комиссия</span> с каждого вывода.</>} lead="Rizq берёт 2,5% ujra (фиксированная плата за услугу) с каждого вывода. По МФО-лицензии ЦБ Узбекистана вся комиссия остаётся у нас. Никаких подписок, абонентки или скрытых платежей."/>

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
                <div style={{ marginTop: 8, fontSize: 32, fontWeight: 800, color: "var(--inverse)", letterSpacing: "-0.03em", lineHeight: 1 }}>$125</div>
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
              <div style={{ position: "relative", marginTop: 8, fontSize: 64, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }} className="biz-rizq-amt">$3.10</div>
              <div style={{ position: "relative", marginTop: 8, fontSize: 13, opacity: 0.75 }}>100% от ujra · МФО-лицензия</div>
            </div>

            <div style={{
              fontSize: 12, color: "var(--inverse-2)", lineHeight: 1.55,
              padding: "12px 16px", borderRadius: 10,
              background: "oklch(0.18 0.03 158)",
              border: "1px dashed oklch(0.32 0.05 158)",
            }}>
              <b style={{ color: "var(--brand)" }}>МФО ЦБ УЗ:</b> выдаём со своего баланса, вся комиссия полностью у нас. Никакого split с банком.
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
        <SecHead dark num="14" kicker="Запрос от инвестора" title={<>Один путь. <span style={{color:"var(--brand)"}}>Полная независимость.</span></>} lead="Pre-seed раунд $300K за 20% equity. Открытие МФО ЦБ Узбекистана с первого дня. Своя выдача, свой баланс, любые банки как канал — а не как блокер."/>

        {/* PATH A — full block */}
        <PathBlock
          tag="Pre-seed"
          tagSub="Halal EWA · УЗ"
          subtitle="Полная независимость с первого дня"
          amount="$300K"
          equity="20% equity"
          chips={["МФО · ЦБ Узбекистана", "Свой баланс", "Вся комиссия Rizq"]}
          rationale={<>МФО-лицензия = собственный баланс, своя выдача, любой банк как канал.<br/><br/>Юнит-экономика полностью у Rizq. Вся комиссия $3.10 — наша. Никакого split с банком, никакой зависимости от одного партнёра.</>}
          useOfFunds={[
            { pct: "53%", amt: "$160K", title: "Уставный капитал МФО", body: "Обязательный минимум для лицензии МФО от ЦБ Узбекистана. Без этого нельзя выдавать средства от своего имени.", primary: true },
            { pct: "28%", amt: "$84K", title: "Tech · Платформа", body: "Разработка платформы, мобильное приложение, биометрия, интеграции с зарплатными системами и СУРВ работодателей." },
            { pct: "14%", amt: "$42K", title: "Sales · B2B", body: "Команда продаж работодателям. Подключение пилотов, развёртывание, обучение HR-департаментов." },
            { pct: "5%", amt: "$14K", title: "Юр. оформление", body: "Лицензирование, договорная база с работодателями, compliance, шариатский совет, аудит." },
          ]}
          gets={[
            { t: "20% в Rizq", b: "С лицензией МФО ЦБ Узбекистана — самостоятельный финтех-актив." },
            { t: "Полная независимость", b: "Свой баланс, своя выдача. Банк — канал, а не блокер." },
            { t: "Контроль юнит-экономики", b: "Вся комиссия ($3.10), не половина — с первого дня." },
            { t: "Halal EWA first-mover", b: "Первая лицензированная МФО с halal EWA в регионе." },
            { t: "Путь к $12M+", b: "Траектория к Seed-раунду через 12 месяцев." },
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
        <SecHead num="15" kicker="Exit" title="Оценка при масштабе." lead="Три горизонта. Один и тот же мультипликатор 8× ARR. Вся комиссия — Rizq, без split. Бенчмарк — fintech с recurring revenue и нулевым NPL."/>

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
            Pre-seed раунд открыт. $300K · 20% equity · МФО-лицензия ЦБ Узбекистана.
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
          <span>Rizq · ООО «Screenix AI» · Ташкент · 2026</span>
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
          <span style={{ fontSize: 13, color: "var(--inverse-2)" }}>Investor Proposal · Pre-seed 2026</span>
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
