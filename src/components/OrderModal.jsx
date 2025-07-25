import React, { useState } from "react";

const OrderModal = ({ open, onClose, onSubmit, loading }) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });
  const [error, setError] = useState("");

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      setError("Будь ласка, заповніть всі обов'язкові поля.");
      return;
    }
    setError("");
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-900 text-white rounded-xl shadow-xl p-8 w-full max-w-md relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-2xl hover:bg-red-600 transition"
          title="Закрити"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Оформлення замовлення</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-primary outline-none"
            name="name"
            placeholder="Ваше ім'я*"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-primary outline-none"
            name="phone"
            placeholder="Телефон*"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-primary outline-none"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            type="email"
          />
          <textarea
            className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-primary outline-none"
            name="address"
            placeholder="Адреса доставки*"
            value={form.address}
            onChange={handleChange}
            required
          />
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded font-semibold text-lg hover:bg-primary/80 transition mt-2"
            disabled={loading}
          >
            {loading ? "Відправка..." : "Підтвердити замовлення"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal; 