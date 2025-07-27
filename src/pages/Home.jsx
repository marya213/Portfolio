import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaComments,
  FaPeopleArrows,
  FaRocket,
  FaCode,
  FaDatabase,
  FaSwimmer,
  FaMusic,
  FaCar,
  FaTshirt,
  FaPaintBrush,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { SiGoland } from 'react-icons/si'; 

import '../styles/tailwind.css';


function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const cvRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };
  const [form, setForm] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState('');

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
};

const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs
        .send(serviceID, templateID, { name: form.name, email: form.email, message: form.message }, userID)
        .then(() => {
            setStatus('Votre message a été envoyé avec succès !');
            setForm({ name: '', email: '', message: '' });
        })
        .catch(() => {
            setStatus('Une erreur s\'est produite lors de l\'envoi du message.');
        });
};


  return (
    <div className="bg-gray-900 text-white">
      {/* Modal for Zoomed Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Navigation Bar */}
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
  <h1 className="text-white text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
    Welcome to My Portfolio
  </h1>


    {/* Barre de navigation alignée à droite */}
    <nav className="flex space-x-8 items-center">
          <button
            className="text-white text-lg hover:text-teal-300 transition duration-300"
            onClick={() => scrollToSection(aboutRef)}
          >
            Mes compétences
          </button>
          <button
            className="text-white text-lg hover:text-teal-300 transition duration-300"
            onClick={() => scrollToSection(projectsRef)}
          >
            Mes Projets
          </button>
          <button
  className="text-white text-lg hover:text-teal-300 transition duration-300"
  onClick={() => scrollToSection(cvRef)}
>
</button>

          <button
            className="text-white text-lg hover:text-teal-300 transition duration-300"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </button>
        </nav>
      </header>

{/* Hero Section */}
<section
  className="relative w-full h-screen bg-cover bg-center flex justify-center items-center"
  style={{ backgroundImage: "url('/img.jpg')" }}
>
  <div className="flex items-center space-x-6">
    {/* Image de profil */}
    <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-blue-300 rounded-full overflow-hidden shadow-lg">
      <img src="/img.png" alt="Profile" className="w-full h-full object-cover" />
    </div>

    {/* Nom et description */}
    <div className="text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg animate-bounce">
        Maria<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"></span>
      </h1>
      <p className="text-lg md:text-2xl mt-4 font-bold">
        Développeuse Web Front end 
        <br /> Recherche d'alternance
      </p>
    </div>
  </div>
</section>


{/* Bouton pour descendre */}
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
  <button
    className="text-white bg-transparent hover:bg-purple-300 rounded-full p-2 shadow-md focus:outline-none transition duration-300"
    onClick={() => scrollToSection(aboutRef)}
    aria-label="Scroll down"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
</div>


      {/* About Section */}
      <section ref={aboutRef} className="py-16 px-6 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 blur-xl opacity-30 rounded-full animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-30 rounded-full animate-pulse"></div>
  
  <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6 drop-shadow-md">
    À propos de moi
  </h2>

  <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300">
    Étudiante en bachelor 2 informatique à <span className="text-blue-400 font-bold">Ynov Campus</span>, 
    je suis une développeuse qui valorise la bonne humeur et la persévérance. 
    Mon esprit d’équipe et mon enthousiasme me poussent à collaborer et à créer des solutions 
     innovantes. Avec une forte capacité d’adaptation, 
    j’aborde chaque projet avec énergie et détermination.
  </p>

  {/* Decorative Line */}
  <div className="mt-8 mx-auto w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
</section>


      <section className="py-16 px-6 bg-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-12">
      Mes compétences
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">

  {/* Soft Skills */}
  <div className="p-8 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transform transition-transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600">
    <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center justify-center">
      <FaComments className="mr-2 text-3xl text-purple-400" />
      Soft Skills
    </h3>
    <ul className="space-y-6">
      {[
        { icon: FaPeopleArrows, label: "Collaboration" },
        { icon: FaRocket, label: "Autonomie" },
      ].map((item, i) => (
        <li
          key={i}
          className="flex items-center p-2 rounded-lg hover:bg-gray-800 transition"
        >
          <item.icon className="text-purple-400 text-2xl mr-4" />
          <span className="text-lg font-medium">{item.label}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Hard Skills */}
  <div className="p-8 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transform transition-transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600">
    <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center justify-center">
      <FaCode className="mr-2 text-3xl text-purple-400" />
      Hard Skills
    </h3>
    <ul className="space-y-6">
      {[
        { icon: FaCode, label: "Développemen front-end (React ,Html, css)" },
        { icon: FaCode, label: "Développement backend (PHP, Go, Python)" },
      ].map((item, i) => (
        <li
          key={i}
          className="flex items-center p-2 rounded-lg hover:bg-gray-800 transition"
        >
          <item.icon className="text-purple-400 text-2xl mr-4" />
          <span className="text-lg font-medium">{item.label}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Hobbies */}
  <div className="p-8 bg-gray-700 rounded-lg shadow-lg hover:scale-105 transform transition-transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600">
    <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center justify-center">
      <FaSwimmer className="mr-2 text-3xl text-purple-400" />
      Hobbies
    </h3>
    <ul className="space-y-6">
      {[
        { icon: FaSwimmer, label: "Natation" },
        { icon: FaTshirt, label: "Mode" },
      ].map((item, i) => (
        <li
          key={i}
          className="flex items-center p-2 rounded-lg hover:bg-gray-800 transition"
        >
          <item.icon className="text-purple-400 text-2xl mr-4" />
          <span className="text-lg font-medium">{item.label}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

</section>
{/* Projects Section */}
<section ref={projectsRef} className="py-16 px-6 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 blur-xl opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-30 rounded-full animate-pulse"></div>

        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-12">
          Mes projets
        </h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
  >
    {[
      {
        title: 'FORUM',
        img: '/forum.png',
        desc: 'Une application web interactive permettant aux utilisateurs de discuter.',
        githubLink: 'https://github.com/marya213/',
        languages: [FaHtml5, FaCss3Alt, FaJs, SiGoland],
      },
      {
        title: 'Quiz',
        img: '/Quiz.png',
        desc: 'Une application interactive conçue pour tester les connaissances des utilisateurs.',
        githubLink: 'https://github.com/marya213/',
        languages: [FaHtml5, FaCss3Alt, FaJs, SiGoland],
      },
      {
        title: 'Groupie Tracker',
        img: '/groupie.png',
        desc: 'Une application web permettant de suivre les concerts de vos artistes favoris.',
        githubLink: 'https://github.com/marya213/',
        languages: [FaHtml5, FaCss3Alt, FaJs, SiGoland],
      },
    ].map((project, index) => (
      <div
        key={index}
        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform hover:rotate-1 hover:shadow-2xl group"
      >
        <div className="flex items-center space-x-4 mb-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
            aria-label={`Voir le projet ${project.title} sur GitHub`}
          >
            <FaGithub className="text-2xl" />
          </a>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
            {project.title}
          </h3>
        </div>
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-56 object-cover rounded-lg group-hover:scale-110 transition-transform"
          />
        </div>
        <div className="text-center mb-4">
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition"
            onClick={() => handleImageClick(project.img)}
          >
            Voir le projet
          </button>
        </div>
        <p className="text-gray-300 mb-4">{project.desc}</p>
        <div className="mt-4">
          <p className="text-lg font-bold text-white-400 border-b-2 border-white-400 inline-block mb-4">
            Langages utilisés :
          </p>
          <div className="flex space-x-4 text-2xl">
            {project.languages.map((LanguageIcon, idx) => (
              <LanguageIcon
                key={idx}
                className="text-white-300 hover:text-blue-500 transition"
              />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="mt-16 mx-auto w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
</section>


{/* Contact Section */}
<section ref={contactRef} className="py-16 px-6">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6 text-center">
        Contactez-moi
      </h2>
      
      <form
        className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            placeholder="Votre nom"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            placeholder="Votre email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            rows="5"
            placeholder="Votre message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Envoyer
          </button>
        </div>
        {status && (
          <p className="text-center mt-4 text-lg font-medium text-teal-400">
            {status}
          </p>
        )}
      </form>
    </section>

{/* Liens GitHub, LinkedIn et Outlook */}
<footer className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 py-6">
  <div className="flex justify-center space-x-8 mt-8">
    {/* LinkedIn */}
    <a
  href="https://www.linkedin.com/in/marya-b-7801382a7"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedin className="text-2xl hover:text-pink-200 transition" />
</a>

    {/* GitHub */}
    <a
      href="https://github.com/marya213"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub className="text-2xl hover:text-pink-200 transition" />
    </a>
    
  </div>

  {/* Textes des droits réservés */}
  <div className="text-center mt-4 text-gray-200 text-sm">
    <p>© 2024 Tous droits réservés</p>
  </div>
</footer>

    </div>
  );
}
 export default Home;
