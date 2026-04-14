function getRecommendation(flowerType) {
  const type = flowerType.toLowerCase();

  if (type.includes("rose")) return "Perfume / Soap";
  if (type.includes("marigold")) return "Incense Sticks";
  if (type.includes("jasmine")) return "Essential Oil";

  return "Compost / Natural Dye";
}

function Dashboard({ entries, onDelete }) {
  return (
    <div className="dashboard-wrapper">
      <h2>📊 Dashboard</h2>

      {entries.length === 0 ? (
        <p>No waste entries yet</p>
      ) : (
        entries.map((item, index) => (
          <div key={index} className="dashboard-entry">
            <p>
              <strong>📍 Location:</strong>{" "}
              {item.location}
            </p>

            <p>
              <strong>🌼 Flower:</strong>{" "}
              {item.flowerType}
            </p>

            <p>
              <strong>⚖️ Quantity:</strong>{" "}
              {item.quantity} kg
            </p>

            <p>
              <strong>♻️ Recommended Output:</strong>{" "}
              {getRecommendation(item.flowerType)}
            </p>

            <button
              className="glass-btn"
              onClick={() => onDelete(index)}
            >
              🗑 Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;