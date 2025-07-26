import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      alert('✅ Message sent!');
      setFormData({ name: '', email: '', message: '' }); // reset form
    } catch (err) {
      console.error(err);
      alert('❌ Failed to send message.');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-purple-300 via-white to-indigo-300"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-500 to-indigo-600 drop-shadow-lg">
          📬 Get In Touch
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-purple-200"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 bg-white/80 placeholder-gray-500 text-gray-800"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 bg-white/80 placeholder-gray-500 text-gray-800"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 bg-white/80 placeholder-gray-500 text-gray-800"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 font-semibold text-lg"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
