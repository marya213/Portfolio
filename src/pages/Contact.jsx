import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Votre message a été envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      className="min-h-screen flex flex-col text-center relative"
      style={{
        backgroundImage: "url('/path/to/your/image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
      }}
    >
      <div className="flex items-center justify-center flex-1 py-10">
        <div className="bg-gray-900 bg-opacity-80 shadow-lg rounded-lg p-8 max-w-md w-full border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Contactez-moi</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300">Nom :</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-600 rounded-md p-2 w-full bg-gray-800 text-gray-200 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email :</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-600 rounded-md p-2 w-full bg-gray-800 text-gray-200 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Message :</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-600 rounded-md p-2 w-full h-32 bg-gray-800 text-gray-200 focus:border-blue-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-gray-800 bg-opacity-90 p-4 flex justify-between items-center">
        <p className="text-gray-400">&copy; 2024 Mon Portfolio</p>
      </footer>
    </div>
  );
}

export default Contact;
