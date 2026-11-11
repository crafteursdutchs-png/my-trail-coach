
import { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState("Trail 50 km");
  const [level, setLevel] = useState("Intermédiaire");
  const [days, setDays] = useState("4");
  const [plan, setPlan] = useState(false);

  const stats = [
    { label: "Distance cette semaine", value: "42.8", unit: "km", icon: "🏃" },
    { label: "Dénivelé positif", value: "1 240", unit: "m", icon: "⛰️" },
    { label: "Temps de course", value: "5h 42", unit: "", icon: "⏱️" },
    { label: "Sorties réalisées", value: "4", unit: "séances", icon: "📅" },
  ];

  const sessions = [
    ["LUNDI", "Repos", "Récupération"],
    ["MARDI", "Fractionné", "8 × 400 m à allure soutenue"],
    ["MERCREDI", "Endurance fondamentale", "45 min en aisance respiratoire"],
    ["JEUDI", "Repos", "Récupération"],
    ["VENDREDI", "Côtes", "10 × 1 min en montée"],
    ["SAMEDI", "Sortie longue", "1h45 sur terrain vallonné"],
    ["DIMANCHE", "Footing léger", "40 min en endurance"],
  ];

  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #0b0f0e; color: #f5f5f0;
          font-family: Inter, system-ui, sans-serif; }
        .app { min-height: 100vh; }
        .layout { display: flex; min-height: 100vh; }
        .sidebar { width: 245px; padding: 30px 20px;
          background: #111715; border-right: 1px solid #26302b; }
        .logo { font-size: 21px; font-weight: 850; letter-spacing: -1px; }
        .logo span { color: #a3e635; }
        .subtitle { color: #89948c; font-size: 12px; margin-top: 5px; }
        .nav { margin-top: 55px; }
        .nav div { padding: 14px; margin: 7px 0; border-radius: 10px;
          color: #aab4ac; font-size: 14px; }
        .nav .active { background: #263326; color: #c2f276; }
        .main { flex: 1; padding: 36px; max-width: 1500px; margin: 0 auto; width: 100%; }
        .top { display: flex; justify-content: space-between; align-items: center;
          gap: 15px; flex-wrap: wrap; }
        .eyebrow { color: #a3e635; text-transform: uppercase; letter-spacing: 2px;
          font-size: 11px; font-weight: bold; }
        h1 { font-size: clamp(27px, 4vw, 38px); margin: 8px 0; letter-spacing: -1.5px; }
        .muted { color: #8d9991; font-size: 14px; }
        .garmin { border: 1px solid #38463b; padding: 12px 17px;
          border-radius: 10px; font-size: 12px; color: #c2f276; }
        .stats { display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 15px; margin-top: 35px; }
        .panel { background: #151c18; border: 1px solid #29352d;
          border-radius: 15px; padding: 22px; }
        .stat-icon { font-size: 23px; }
        .stat-value { font-size: 29px; font-weight: 800; margin-top: 17px; }
        .stat-label { color: #9ca69f; font-size: 12px; margin-top: 6px; }
        .unit { font-size: 13px; color: #9ca69f; font-weight: 400; }
        .section-title { font-size: 19px; font-weight: 750; margin: 35px 0 16px; }
        .columns { display: grid; grid-template-columns: 1.4fr 1fr; gap: 17px; }
        .bars { display: flex; align-items: end; gap: 12px; height: 160px;
          margin-top: 25px; }
        .bar-wrap { flex: 1; text-align: center; height: 100%;
          display: flex; flex-direction: column; justify-content: end; }
        .bar { background: #a3e635; border-radius: 5px 5px 0 0; min-height: 5px; }
        .bar-label { color: #929c94; font-size: 11px; margin-top: 9px; }
        .goal-form { display: grid; gap: 15px; }
        label { color: #aab4ac; font-size: 12px; display: block; margin-bottom: 8px; }
        select { width: 100%; padding: 12px; border-radius: 8px;
          background: #0e1511; color: white; border: 1px solid #39463c; }
        button { background: #a3e635; color: #10150d; border: 0;
          padding: 14px 18px; border-radius: 9px; font-weight: 800;
          cursor: pointer; width: 100%; }
        button:hover { background: #baf56a; }
        .session { display: grid; grid-template-columns: 75px 1fr;
          gap: 12px; padding: 15px 0; border-bottom: 1px solid #29352d; }
        .day { color: #a3e635; font-size: 10px; font-weight: bold; }
        .session strong { font-size: 13px; }
        .session p { margin: 5px 0 0; color: #929c94; font-size: 12px; }
        .tag { display: inline-block; padding: 7px 10px; border-radius: 20px;
          color: #bdf279; background: #293824; font-size: 11px; margin-top: 10px; }
        .footer { color: #69756d; font-size: 11px; margin-top: 35px; }
        @media(max-width: 900px) {
          .sidebar { display: none; }
          .main { padding: 22px 16px; }
          .stats { grid-template-columns: repeat(2, 1fr); }
          .columns { grid-template-columns: 1fr; }
        }
        @media(max-width: 420px) {
          .stats { gap: 8px; }
          .panel { padding: 15px; }
          .stat-value { font-size: 23px; }
        }
      `}</style>

      <div className="layout">
        <aside className="sidebar">
          <div className="logo">MY TRAIL<span>.</span>COACH</div>
          <div className="subtitle">YOUR PERSONAL RUNNING COACH</div>
          <div className="nav">
            <div className="active">◈ &nbsp; Dashboard</div>
            <div>↗ &nbsp; Mes statistiques</div>
            <div>▦ &nbsp; Mon entraînement</div>
            <div>◎ &nbsp; Mes objectifs</div>
            <div>⌁ &nbsp; Mes activités</div>
            <div>⚙ &nbsp; Paramètres</div>
          </div>
          <div className="footer">MY TRAIL COACH · VERSION 0.1</div>
        </aside>

        <main className="main">
          <div className="top">
            <div>
              <div className="eyebrow">TON ESPACE PERSONNEL</div>
              <h1>Bonjour, Runner. 👋</h1>
              <div className="muted">Prêt à repousser tes limites ?</div>
            </div>
            <div className="garmin">◉ GARMIN · À CONNECTER</div>
          </div>

          <div className="section-title">Vue d'ensemble</div>
          <div className="stats">
            {stats.map((s) => (
              <div className="panel" key={s.label}>
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-value">
                  {s.value} <span className="unit">{s.unit}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="columns">
            <section>
              <div className="section-title">Volume d'entraînement</div>
              <div className="panel">
                <div className="muted">Kilomètres par jour · Exemple</div>
                <div className="bars">
                  {[35, 65, 45, 85, 20, 100, 55].map((v, i) => (
                    <div className="bar-wrap" key={i}>
                      <div className="bar" style={{ height: v + "%" }} />
                      <div className="bar-label">
                        {["L", "M", "M", "J", "V", "S", "D"][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-title">Génère ton plan d'entraînement</div>
              <div className="panel goal-form">
                <div>
                  <label>TON OBJECTIF</label>
                  <select value={goal} onChange={e => {
                    setGoal(e.target.value); setPlan(false);
                  }}>
                    <option>5 km route</option>
                    <option>10 km route</option>
                    <option>Semi-marathon</option>
                    <option>Marathon</option>
                    <option>Trail 20 km</option>
                    <option>Trail 50 km</option>
                    <option>Trail 80 km</option>
                    <option>Ultra-trail 100 km</option>
                    <option>Ultra-trail 160 km</option>
                  </select>
                </div>
                <div>
                  <label>TON NIVEAU</label>
                  <select value={level} onChange={e => {
                    setLevel(e.target.value); setPlan(false);
                  }}>
                    <option>Débutant</option>
                    <option>Intermédiaire</option>
                    <option>Confirmé</option>
                    <option>Expert</option>
                  </select>
                </div>
                <div>
                  <label>JOURS DISPONIBLES PAR SEMAINE</label>
                  <select value={days} onChange={e => {
                    setDays(e.target.value); setPlan(false);
                  }}>
                    <option value="2">2 jours</option>
                    <option value="3">3 jours</option>
                    <option value="4">4 jours</option>
                    <option value="5">5 jours</option>
                    <option value="6">6 jours</option>
                  </select>
                </div>
                <button onClick={() => setPlan(true)}>
                  ✦ CRÉER MON PLAN
                </button>
                {plan && (
                  <div className="tag">
                    Objectif : {goal} · Niveau : {level} · {days} jours/semaine
                  </div>
                )}
                {plan && (
                  <p className="muted">
                    Ton profil est enregistré dans cette première maquette.
                    La prochaine étape sera de créer un véritable programme
                    personnalisé à partir de tes performances Garmin.
                  </p>
                )}
              </div>
            </section>

            <section>
              <div className="section-title">Ma semaine d'entraînement</div>
              <div className="panel">
                <div className="muted">Exemple de programme hebdomadaire</div>
                {sessions.map(([day, title, description]) => (
                  <div className="session" key={day}>
                    <div className="day">{day}</div>
                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="footer">
            MY TRAIL COACH · Tes données sportives, ton entraînement, ta progression.
          </div>
        </main>
      </div>
    </div>
  );
}