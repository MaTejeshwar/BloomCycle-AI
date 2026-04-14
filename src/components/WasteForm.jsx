import { useState } from "react";

function WasteForm({ onAdd }) {
  const [form, setForm] = useState({
    location: "",
    flowerType: "",
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);

    setForm({
      location: "",
      flowerType: "",
      quantity: "",
    });
  };

  return (
    <form className="waste-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="📍 Location"
        value={form.location}
        onChange={(e) =>
          setForm({
            ...form,
            location: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="🌼 Flower Type"
        value={form.flowerType}
        onChange={(e) =>
          setForm({
            ...form,
            flowerType: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="⚖️ Quantity (kg)"
        value={form.quantity}
        onChange={(e) =>
          setForm({
            ...form,
            quantity: e.target.value,
          })
        }
      />

      <button type="submit" className="glass-btn">
        ✨ Add Waste
      </button>
    </form>
  );
}

export default WasteForm;