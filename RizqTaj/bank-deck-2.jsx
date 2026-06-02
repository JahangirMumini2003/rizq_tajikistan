/* bank-deck-2.jsx — sections 05–10 */
/* global React, Icon, Reveal, AnimatedNumber, SecHead, DataTable */

/* ============================================================
   04b — ЧТО RIZQ БЕРЁТ НА СЕБЯ
   ============================================================ */
function S04bRizq() {
  const tasks = [
    { n: "01", icon: <Icon.users/>, t: "Находим компании", b: "B2B-продажи, прямые контракты с работодателями. Ритейл, HoReCa, FMCG, логистика, IT — пайплайн уже выстроен." },
    { n: "02", icon: <Icon.building/>, t: "Onboarding & KYB", b: "KYB-верификация компании, проверка документов, юридическое оформление. Дефолт работодателя страхуется через страхового партнёра." },
    { n: "03", icon: <Icon.link/>, t: "Интеграция с ERP", b: "Готовые коннекторы к 1С, SAP, BAS, Bitrix24. CSV/XLSX для бумажных. Авто-синхронизация табеля ежедневно." },
    { n: "04", icon: <Icon.bolt/>, t: "Технологическая платформа", b: "Мобильное приложение iOS/Android, Telegram Mini App, веб-кабинет работодателя, API для банка. Всё наше." },
    { n: "05", icon: <Icon.chart/>, t: "Расчёт заработанного", b: "Real-time баланс по формуле: оклад × присутственные дни ÷ рабочие дни × лимит 70%. Каждый день обновление." },
    { n: "06", icon: <Icon.bank/>, t: "Приводим клиентов банку", b: "Передаём паспортные данные. Банк открывает счёт и карту. 100K сотрудников = 100K новых клиентов. CAC = $0." },
    { n: "07", icon: <Icon.shield/>, t: "Ограниченный риск · NPL = 0", b: "Payroll-backed модель: удержание из зарплаты в день выплаты + страхование дефолта работодателя через страхового партнёра." },
    { n: "08", icon: <Icon.wallet/>, t: "Реестр и удержания", b: "Автоматическая выгрузка реестра выводов в ERP компании. В день зарплаты — синхронизация и возврат банку." },
    { n: "09", icon: <Icon.check/>, t: "Шариатский комплаенс", b: "Структура Ujra + Vakala + Rahn. Соответствие FAS 9/23/39 AAOIFI. Готовые материалы для ревью шариатским советом банка." },
    { n: "10", icon: <Icon.spark/>, t: "Усиливаем Halal-окно банка", b: "Позиционируем банк как Halal-партнёра. Кейс для ислам­ского комитета. Доступ к рынку 88–96% мусульманского населения." },
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
    { n: "04", icon: <Icon.lock/>, t: "Опциональный FTO от работодателя", b: "Если компания хочет — открывает FTO (целевой остаток на авансы) у банка-партнёра. Дополнительная ликвидность.", stat: "FTO", statLabel: "опционально · по желанию" },
    { n: "05", icon: <Icon.bolt/>, t: "Interchange с карт", b: "Каждый сотрудник уже получил карту банка. Interchange с покупок, обслуживание, лояльность.", stat: "100%", statLabel: "клиентов с картой" },
    { n: "06", icon: <Icon.chart/>, t: "Cross-sell продуктов", b: "Активные клиенты с балансом. Депозиты, ипотека, страхование, переводы — встроенная витрина.", stat: "6+", statLabel: "категорий продуктов" },
  ];

  const strategy = [
    { n: "07", icon: <Icon.spark/>, t: "Усиление исламского окна", b: "Halal-EWA — флагман-продукт для исламского банкинга банка. Готовый кейс для шариатского совета. Доступ к 88–96% мусульманскому населению Узбекистана.", tag: "Halal-флагман" },
    { n: "08", icon: <Icon.heart/>, t: "Бренд и инновации", b: "Банк позиционируется как современный fintech-партнёр. Co-branding в приложении и Telegram Mini App. PR-кампании, медийная активность вокруг социальной миссии.", tag: "Fintech-DNA" },
    { n: "09", icon: <Icon.shield/>, t: "Конкурентное преимущество", b: "Первый и единственный halal EWA-продукт в стране. Узбекистан + Таджикистан + Кыргызстан — окно регионального лидерства в исламском банкинге.", tag: "First-mover moat" },
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
              Без учёта зарплатных проектов, депозитов и cross-sell.
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
              { n: "03", h: "Rahn", sh: "Обеспечение", b: "Payroll-удержание + страховой полис на дефолт работодателя. Допустимый инструмент обеспечения в исламских финансах." },
              { n: "04", h: "AAOIFI", sh: "Стандарты", b: "Соответствие FAS 9 (Ujra), FAS 23 (Vakala), FAS 39 (Rahn). Готовы к ревью независимым шариатским советом." },
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
    ["M1",  "3K",   "1.2K",   3.7,   150],
    ["M2",  "7K",   "2.8K",   8.7,   350],
    ["M3",  "10K",  "4K",     12.4,  500],
    ["M4",  "17K",  "6.8K",   21.1,  850],
    ["M5",  "20K",  "8K",     24.8,  1000],
    ["M6",  "27K",  "10.8K",  33.5,  1350],
    ["M7",  "33K",  "13.2K",  40.9,  1650],
    ["M8",  "40K",  "16K",    49.6,  2000],
    ["M9",  "47K",  "18.8K",  58.3,  2350],
    ["M10", "60K",  "24K",    74.4,  3000],
    ["M11", "67K",  "26.8K",  83.1,  3350],
    ["M12", "80K",  "32K",    100.0, 4000],
  ];
  const maxR = Math.max(...months.map(m => m[3]));
  return (
    <section style={{ background: "var(--bg-deep)", color: "var(--inverse)" }}>
      <div className="container">
        <SecHead dark num="08" kicker="Выручка 12 месяцев" title="Ожидаемая выручка и объём финансирования." lead="Цель на M12 — $100K MRR. Средний чек вывода $125, ujra 2,5% → ~$3.10 с каждого вывода полностью Rizq (МФО-лицензия). 40% зарегистрированных выводят ежемесячно. Рядом — объём выданных зарплатных авансов, которые нужно профинансировать."/>

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
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--inverse-2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Выручка Rizq по месяцам</div>
              <div style={{ marginTop: 6, fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
                <AnimatedNumber value={100000}/> <span style={{ fontSize: 18, color: "var(--inverse-2)", fontWeight: 600 }}>$ на M12</span>
              </div>
            </div>
            <div style={{
              display: "flex", gap: 18,
              fontSize: 12, color: "var(--inverse-2)",
              fontFamily: "var(--f-mono)",
            }}>
              <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{width:10,height:10,borderRadius:3,background:"var(--brand)"}}/>Выручка Rizq (ujra)</span>
            </div>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: `repeat(${months.length}, 1fr)`,
            gap: 10, alignItems: "end", minHeight: 280,
          }}>
            {months.map(([m, , , r], i) => {
              const h = Math.round((r / maxR) * 240);
              return (
                <div key={m} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{
                    fontFamily: "var(--f-mono)", fontSize: 10,
                    color: "var(--brand)", fontWeight: 700,
                    opacity: i === months.length - 1 ? 1 : 0.7,
                  }}>${r}K</div>
                  <div style={{ width: "100%" }}>
                    <div style={{
                      height: h, borderRadius: "8px 8px 2px 2px",
                      background: "var(--brand)",
                      boxShadow: i === months.length - 1 ? "0 0 24px oklch(0.78 0.24 142 / 0.6)" : "none",
                    }}/>
                  </div>
                  <div style={{
                    fontFamily: "var(--f-mono)", fontSize: 10,
                    color: "var(--inverse-2)",
                    fontWeight: i === months.length - 1 ? 800 : 500,
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
                display: "grid", gridTemplateColumns: "60px 1fr 1fr 1.2fr 1fr",
                padding: "12px 18px", background: "oklch(0.20 0.03 158)",
                fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--inverse-2)",
                letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700,
              }}>
                <span>Мес</span><span>Зарег.</span><span>Плат. (40%)</span><span>Финансир.</span><span style={{textAlign:"right", color: "var(--brand)"}}>Выручка Rizq</span>
              </div>
              {months.map(([m, reg, pay, r, disb], i) => (
                <div key={m} style={{
                  display: "grid", gridTemplateColumns: "60px 1fr 1fr 1.2fr 1fr",
                  padding: "10px 18px",
                  borderTop: "1px solid oklch(0.24 0.03 158)",
                  fontFamily: "var(--f-mono)", fontSize: 13,
                  alignItems: "center",
                  background: i === months.length - 1 ? "oklch(0.22 0.05 155)" : "transparent",
                  fontWeight: i === months.length - 1 ? 800 : 500,
                }}>
                  <span style={{ color: i === months.length - 1 ? "var(--brand)" : "var(--inverse-2)" }}>{m}</span>
                  <span style={{ color: "var(--inverse)" }}>{reg}</span>
                  <span style={{ color: "var(--inverse-2)" }}>{pay}</span>
                  <span style={{ color: "var(--inverse-2)" }}>${disb >= 1000 ? (disb/1000).toFixed(2) + "M" : disb + "K"}</span>
                  <span style={{
                    textAlign: "right",
                    color: "var(--brand)",
                    background: i === months.length - 1 ? "oklch(0.30 0.10 145)" : "oklch(0.22 0.05 155 / 0.55)",
                    padding: "3px 10px",
                    borderRadius: 6,
                    fontWeight: 800,
                    justifySelf: "end",
                  }}>${r}K</span>
                </div>
              ))}
            </div>
            </div>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--inverse-2)" }}>
              <b style={{ color: "var(--brand)" }}>Суммарно за 12 мес: выручка Rizq ~$510K · объём финансирования ~$20.6M</b>
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
                ["Средний чек", "$125"],
                ["Комиссия 2.5%", "$3.10"],
                ["Доля Rizq (МФО · 100%)", "$3.10"],
                ["Платящих от зарег.", "~40% / мес"],
                ["Эфф. доход / зарег. / мес", "$1.24"],
                ["Финансирование / платящего / мес", "$125"],
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
                Для 120K сотрудников при среднем штате 100 → ~1 200 компаний за год.
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
    { k: "TAM", v: "$5–8B", b: "14M+ рабочая сила", sub: "~$125 ср. чек", size: 1.0, color: "var(--brand)" },
    { k: "SAM", v: "$4.6B", b: "3.1M наёмных", sub: "$125 × 12 мес", size: 0.75, color: "oklch(0.65 0.20 145)" },
    { k: "SOM", v: "$600M", b: "400K пользователей", sub: "$125 × 12 мес", size: 0.45, color: "oklch(0.50 0.15 145)" },
  ];
  return (
    <section>
      <div className="container">
        <SecHead num="09" kicker="Рынок" title="Узбекистан. 14M+ рабочая сила." lead="Большой рынок, ноль конкурентов, нулевое проникновение EWA. Окно для первого игрока с готовой инфраструктурой."/>

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
