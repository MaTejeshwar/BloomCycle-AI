import { useState, useEffect } from "react";
import "./index.css";
import WasteForm from "./components/WasteForm";
import Dashboard from "./pages/Dashboard";
import AIChatBox from "./components/AIChatBox";

export default function App() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("flowerEntries");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("flowerEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (indexToDelete) => {
    setEntries(entries.filter((_, index) => index !== indexToDelete));
  };

  const filteredEntries = entries.filter((item) =>
    item.flowerType.toLowerCase().includes(search.toLowerCase())
  );

  const totalWaste = entries.reduce(
    (sum, item) => sum + Number(item.quantity || 0),
    0
  );

  const revenue = totalWaste * 20;
  const recycleScore = totalWaste > 0 ? 92 : 0;

  return (
    <div className="app-container">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div className="glass-main">
        <header className="header">
          <div>
            <h1>♻️ BloomCycle AI</h1>
            <p>AI Powered Floral Waste Intelligence Platform</p>
          </div>

          <div className="tabs">
            <button
              onClick={() =>
                document
                  .getElementById("dashboard-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Dashboard
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("analytics-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Analytics
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </button>

            {/* NEW SLIDER TOGGLE */}
            <label className="switch">
              <input
                type="checkbox"
                onChange={(e) =>
                  document.body.classList.toggle(
                    "dark-mode",
                    e.target.checked
                  )
                }
              />
              <span className="slider"></span>
            </label>
          </div>
        </header>

        <section className="stats-grid">
          <div className="card">
            <p>Total Entries</p>
            <h2>{entries.length}</h2>
          </div>

          <div className="card">
            <p>Total Waste</p>
            <h2>{totalWaste} kg</h2>
          </div>

          <div className="card">
            <p>Revenue</p>
            <h2>₹{revenue}</h2>
          </div>

          <div className="card">
            <p>Recycle Score</p>
            <h2>{recycleScore}%</h2>
          </div>
        </section>

        <section id="analytics-section" className="card">
          <h3>📈 Analytics</h3>

          <div className="analytics-bars">
            <div className="bar-item">
              <div className="bar-label">
                <span>Total Waste</span>
                <span>{Math.min(totalWaste, 100)}%</span>
              </div>
              <div className="bar-bg">
                <div
                  className="bar-fill waste-fill"
                  style={{ width: `${Math.min(totalWaste, 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="bar-item">
              <div className="bar-label">
                <span>Revenue</span>
                <span>{Math.min(revenue / 20, 100)}%</span>
              </div>
              <div className="bar-bg">
                <div
                  className="bar-fill revenue-fill"
                  style={{
                    width: `${Math.min(revenue / 20, 100)}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="bar-item">
              <div className="bar-label">
                <span>Recycle Score</span>
                <span>{recycleScore}%</span>
              </div>
              <div className="bar-bg">
                <div
                  className="bar-fill recycle-fill"
                  style={{ width: `${recycleScore}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <h3>Add Waste Entry</h3>
          <WasteForm onAdd={addEntry} />
        </section>

        <section className="card">
          <h3>🔍 Search Entries</h3>
          <input
            className="glass-search"
            type="text"
            placeholder="Search by flower type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        <section id="dashboard-section" className="card">
          <Dashboard
            entries={filteredEntries}
            onDelete={deleteEntry}
          />
        </section>

        <section className="card">
          <AIChatBox />
        </section>

        <section id="contact-section" className="card">
          <h3>📩 Contact</h3>
          <p>Email: bloomcycle.ai@gmail.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Team: BloomCycle AI</p>
        </section>

        <footer className="footer">
          © 2026 BloomCycle AI • Sustainable Future
        </footer>
      </div>
    </div>
  );
}