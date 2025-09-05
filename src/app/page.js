"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion import

// Data for services
const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom-built websites and web applications using React, Next.js, Node.js, and PHP for responsive and dynamic solutions.',
    price: 'Starting at ₹15,000',
    imageurl: 'web.jpg',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'User-focused designs crafted with Canva and Figma to create visually appealing and intuitive digital experiences.',
    price: 'Starting at ₹10,000',
    imageurl: 'uiux.jpg',
    color: 'from-purple-600 to-purple-800',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for iOS and Android, built with React Native for seamless performance.',
    price: 'Starting at ₹25,000',
    imageurl: 'app.jpg',
    color: 'from-green-600 to-green-800',
  },
  {
    id: 4,
    title: 'Video Editing',
    description: 'Professional video editing for social media, personal projects, or promotional content to engage your audience.',
    price: 'Starting at ₹5,000',
    imageurl: 'video.jpg',
    color: 'from-red-600 to-red-800',
  },
  {
    id: 5,
    title: 'Customized Dashboard',
    description: 'Tailored dashboard solutions using React, Node.js, and MongoDB/MySQL to visualize and manage your data effectively.',
    price: 'Starting at ₹12,000',
    imageurl: 'dashboard.jpg',
    color: 'from-indigo-600 to-indigo-800',
  },
  {
    id: 6,
    title: 'Cloud Solutions',
    description: 'Scalable cloud setups and migrations to ensure secure and efficient data management for your projects.',
    price: 'Starting at ₹20,000',
    imageurl: 'cloud.jpg',
    color: 'from-teal-600 to-teal-800',
  },
];

// Data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Jay Dodiya',
    role: 'Small Business Owner',
    content: 'As a startup, I needed a professional website on a budget. The freelancer delivered a stunning site that perfectly matched my vision!',
    rating: 5,
    image: 'male',
  },
  {
    id: 2,
    name: 'Geeta Rajput',
    role: 'Blogger',
    content: 'The UI/UX design for my blog was amazing. The clean and modern design doubled my site’s engagement within weeks.',
    rating: 5,
    image: 'female',
  },
  {
    id: 3,
    name: 'Anis Khokhar',
    role: 'Entrepreneur',
    content: 'The custom dashboard helped me track my business metrics effortlessly. Great work and super responsive communication!',
    rating: 4,
    image: 'male',
  },
];

// Data for technologies
const technologies = [
  { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
  { name: 'Next.js', icon: 'fas fa-code', color: 'text-gray-300' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-400' },
  { name: 'PHP', icon: 'fab fa-php', color: 'text-purple-400' },
  { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-300' },
  { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-300' },
  { name: 'Canva', icon: 'fas fa-image', color: 'text-pink-400' },
  { name: 'R-Native', icon: 'fab fa-react', color: 'text-blue-400' },
  { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-400' },
];

// Navigation component
const Nav = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['home', 'services', 'about', 'portfolio', 'testimonials', 'contact'];

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  // Animation variants for nav items
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      className="fixed w-full bg-gray-900 shadow-lg z-20 backdrop-blur-lg bg-opacity-95"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-32 sm:h-14 sm:w-36 mr-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex space-x-6 lg:space-x-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {navItems.map((item) => (
            <motion.button
              key={item}
              variants={navItemVariants}
              onClick={() => handleNavClick(item)}
              className={`text-gray-200 hover:text-blue-400 capitalize transition-colors duration-300 font-medium text-sm lg:text-base ${activeSection === item ? 'text-blue-400 border-b-2 border-blue-400' : ''}`}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl sm:text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900 py-4 px-6 shadow-lg max-w-full overflow-x-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex flex-col space-y-3"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  variants={navItemVariants}
                  onClick={() => handleNavClick(item)}
                  className={`text-gray-200 hover:text-blue-400 capitalize py-2 text-left transition-colors duration-300 font-medium text-sm ${activeSection === item ? 'text-blue-400 font-bold' : ''}`}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  // Animation variants for hero content
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="home"
      className="hero-bg text-white section-padding pt-20 sm:pt-24 pb-12"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '100vh',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 pt-16 sm:px-2 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
            variants={heroVariants}
          >
            Kickstart Your Digital Journey with Kyarise Solutions
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-8 text-gray-200"
            variants={heroVariants}
          >
            I’m a passionate freelancer offering affordable web development, UI/UX design, mobile apps, and custom dashboards to bring your ideas to life.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              variants={heroVariants}
              onClick={scrollToServices}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg text-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.button>
            <motion.button
              variants={heroVariants}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth',
                  });
                }
              }}
              className="bg-transparent hover:bg-gray-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-full border border-gray-200 hover:border-blue-500 transition duration-300 shadow-lg text-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden">
            <div className="absolute -top-8 -left-8 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute top-16 -right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
            <motion.div
              className="relative bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-700 transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-white">
                  <div className="text-lg sm:text-xl font-bold">Kyarise Solutions</div>
                  <div className="text-xs sm:text-sm text-gray-300">Turning Your Vision into Reality</div>
                </div>
                <div className="text-blue-400 font-bold text-md">
                  <i className="fas fa-rocket mr-1"></i> Start Now
                </div>
              </div>
              <motion.div
                className="bg-gray-900 p-4 sm:p-6 rounded-2xl mb-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <motion.div
                    variants={heroVariants}
                    className="bg-blue-700 p-3 sm:p-4 rounded-lg flex items-center justify-center"
                  >
                    <i className="fas fa-code text-blue-300 text-lg sm:text-2xl"></i>
                  </motion.div>
                  <motion.div
                    variants={heroVariants}
                    className="bg-purple-700 p-3 sm:p-4 rounded-lg flex items-center justify-center"
                  >
                    <i className="fas fa-palette text-purple-300 text-lg sm:text-2xl"></i>
                  </motion.div>
                  <motion.div
                    variants={heroVariants}
                    className="bg-green-700 p-3 sm:p-4 rounded-lg flex items-center justify-center"
                  >
                    <i className="fas fa-mobile-alt text-green-300 text-lg sm:text-2xl"></i>
                  </motion.div>
                  <motion.div
                    variants={heroVariants}
                    className="bg-red-700 p-3 sm:p-4 rounded-lg flex items-center justify-center"
                  >
                    <i className="fas fa-film text-red-300 text-lg sm:text-2xl"></i>
                  </motion.div>
                  <motion.div
                    variants={heroVariants}
                    className="bg-indigo-700 p-3 sm:p-4 rounded-lg flex items-center justify-center"
                  >
                    <i className="fas fa-tachometer-alt text-indigo-300 text-lg sm:text-2xl"></i>
                  </motion.div>
                  <motion.div
                    variants={heroVariants}
                    className="bg-teal-700 p-3 sm:p-4 rounded-lg flex items-center justify-center"
                  >
                    <i className="fas fa-cloud text-teal-300 text-lg sm:text-2xl"></i>
                  </motion.div>
                </div>
              </motion.div>
              <div className="flex justify-between items-center">
                <div className="text-white text-xs sm:text-sm">
                  <div>Ready to launch your project?</div>
                  <div className="text-blue-400 font-medium">Get a free quote today</div>
                </div>
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full cursor-pointer transition duration-300 text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-arrow-right"></i>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Services Section
const Services = () => {
  const handleInquiry = (service) => {
  };

  // Animation variants for service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="services"
      className="bg-gray-900 section-padding pt-12 pb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-blue-400">My Services</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
            As a freelancer, I provide tailored IT solutions to help you establish a strong online presence with affordable and high-quality services.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-gray-800 rounded-3xl overflow-hidden shadow-xl card-hover border border-gray-600 transform hover:scale-105 transition duration-300"
            >
              <div className={`h-40 sm:h-48 bg-gradient-to-r ${service.color} flex items-center justify-center overflow-hidden`}>
                <img src={service.imageurl} alt={service.title} className="z-10 object-cover w-full h-full max-w-full" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-100">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-md">{service.description}</p>
                <div className="flex justify-between items-center mt-4 sm:mt-6">
                  <motion.button
                    onClick={() => handleInquiry(service)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 text-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Inquire Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// About Section
const About = () => {
  // Animation variants for about content
  const aboutVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      className="bg-gray-950 section-padding pt-12 pb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            variants={aboutVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden">
              <div className="absolute -top-8 -left-8 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
              <motion.div
                className="bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl max-w-md mx-auto relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-400">Why Work With Me?</h3>
                <motion.div
                  className="space-y-6"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={aboutVariants} className="flex items-start">
                    <div className="bg-blue-700 rounded-full mr-4">
                      <i className="fas fa-certificate text-blue-400 py-3 px-3"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-100 text-base sm:text-lg">Personalized Service</h4>
                      <p className="text-gray-300 text-md">I work closely with you to understand your needs and deliver customized solutions.</p>
                    </div>
                  </motion.div>
                  <motion.div variants={aboutVariants} className="flex items-start">
                    <div className="bg-green-700 rounded-full mr-4">
                      <i className="fas fa-lightbulb text-green-400 py-3 px-3"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-100 text-base sm:text-lg">Modern Tools</h4>
                      <p className="text-gray-300 text-md">I use the latest technologies like React, Next.js, and Figma to create cutting-edge solutions.</p>
                    </div>
                  </motion.div>
                  <motion.div variants={aboutVariants} className="flex items-start">
                    <div className="bg-purple-700 rounded-full mr-4">
                      <i className="fas fa-headset text-purple-400 py-3 px-3"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-100 text-base sm:text-lg">Dedicated Support</h4>
                      <p className="text-gray-300 text-md">I’m here to support you throughout the project with prompt communication.</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8 lg:pl-12"
            variants={aboutVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-blue-400">About Me</h2>
            <p className="text-gray-200 mb-6 text-base sm:text-lg md:text-xl">
              I’m a passionate freelancer starting my journey in the IT world, dedicated to delivering high-quality web development, UI/UX design, mobile apps, and custom dashboards. My goal is to help small businesses and individuals bring their ideas to life with affordable, modern solutions.
            </p>
            <p className="text-gray-200 mb-8 text-base sm:text-lg md:text-xl">
              With a focus on client satisfaction, I strive to create tailored solutions that meet your unique needs, ensuring a seamless and collaborative experience.
            </p>
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 mb-8"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={aboutVariants} className="bg-gray-800 p-4 rounded-xl border border-gray-600">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-300 text-md">Projects Completed</div>
              </motion.div>
              <motion.div variants={aboutVariants} className="bg-gray-800 p-4 rounded-xl border border-gray-600">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300 text-md">Client Satisfaction</div>
              </motion.div>
            </motion.div>
            <h4 className="font-bold text-gray-100 mb-4 text-base sm:text-lg">Technologies I Use</h4>
            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              animate="visible"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={aboutVariants}
                  className="bg-gray-800 py-2 px-4 rounded-lg flex items-center"
                >
                  <i className={`${tech.icon} ${tech.color} mr-2 text-md`}></i>
                  <span className="text-gray-200 text-md">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Portfolio Section
const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Codeswear - Shopping Website',
      category: 'Web Development',
      imageurl: 'codeswear.png',
    },
    {
      id: 2,
      title: 'Brightvision - Eye Clinic',
      category: 'Web Development',
      imageurl: 'eyeclinic.png',
    },
    {
      id: 3,
      title: 'MangoG - Mango Website',
      category: 'Web Development',
      imageurl: 'mangog.png',
    },
    {
      id: 4,
      title: 'Urben Builders',
      category: 'Web Development',
      imageurl: 'urbenbuilder.png',
    },
    {
      id: 5,
      title: 'Sugar Factory Dashboard',
      category: 'Customized Dashboard',
      imageurl: 'dashboard.png',
    },
    {
      id: 6,
      title: 'BiteHeaven - Restaurant Website',
      category: 'Web Development',
      imageurl: 'biteheaven.png',
    },
  ];

  // Animation variants for portfolio items
  const portfolioVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="portfolio"
      className="bg-gray-900 section-padding pt-12 pb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-blue-400">My Portfolio</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
            Check out some of my recent projects that showcase my skills in web development, UI/UX design, and more.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={portfolioVariants}
              className="bg-gray-800 rounded-3xl overflow-hidden shadow-xl card-hover border border-gray-600 transform hover:scale-105 transition duration-300"
            >
              <div className="h-40 sm:h-48 bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
                <img src={item.imageurl} alt={item.title} className="z-10 object-cover w-full h-full max-w-full" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-100">{item.title}</h3>
                <p className="text-gray-300 mb-4 text-md">{item.category}</p>
                <motion.button
                  className="bg-transparent hover:bg-blue-600 text-blue-400 hover:text-white font-semibold py-2 px-4 rounded-full border border-blue-400 hover:border-transparent transition duration-300 text-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg text-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const getStarRating = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ${i <= rating ? 'text-yellow-400' : 'text-gray-600'} mr-1 text-md`}
        ></i>
      );
    }
    return stars;
  };

  // Animation variants for testimonials
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="testimonials"
      className="bg-gray-950 section-padding pt-12 pb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Clients Say
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Hear from my clients about their experience working with me on their projects.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={testimonialVariants}
              className="bg-gray-800 p-4 sm:p-6 rounded-3xl shadow-xl card-hover border border-gray-600 transform hover:scale-105 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full ${testimonial.image === 'male' ? 'bg-blue-700' : 'bg-pink-700'} flex items-center justify-center mr-4`}
                >
                  <i
                    className={`fas ${testimonial.image === 'male' ? 'fa-user' : 'fa-user-alt'} ${testimonial.image === 'male' ? 'text-blue-400' : 'text-pink-400'} text-md`}
                  ></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-100 text-base sm:text-lg">{testimonial.name}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-200 mb-4 italic text-md">{testimonial.content}</p>
              <div className="flex">{getStarRating(testimonial.rating)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I’ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Animation variants for contact content
  const contactVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="contact"
      className="bg-gray-900 section-padding pt-12 pb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-col md:flex-row">
          {/* Left side - Form */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl max-w-md mx-auto border border-gray-600"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-100">
                Send Me a Message
              </h3>
              <motion.div
                className="mb-4"
                variants={contactVariants}
                initial="hidden"
                animate="visible"
              >
                <label className="block text-gray-200 mb-2 text-md" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200 text-md"
                  required
                />
              </motion.div>
              <motion.div
                className="mb-4"
                variants={contactVariants}
                initial="hidden"
                animate="visible"
              >
                <label className="block text-gray-200 mb-2 text-md" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200 text-md"
                  required
                />
              </motion.div>
              <motion.div
                className="mb-6"
                variants={contactVariants}
                initial="hidden"
                animate="visible"
              >
                <label className="block text-gray-200 mb-2 text-md" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200 text-md"
                  required
                ></textarea>
              </motion.div>
              <motion.button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full w-full transition duration-300 shadow-lg text-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Info */}
          <motion.div
            className="md:w-1/2 md:pl-8 lg:pl-12"
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-md mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-100">
                Contact Information
              </h3>
              <motion.div
                className="space-y-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={contactVariants} className="flex items-start">
                  <div className="bg-blue-700 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-blue-400 px-3 py-3"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100 text-base sm:text-lg">Location</h4>
                    <p className="text-gray-200 text-md">Ahmedabad, Gujarat, India</p>
                  </div>
                </motion.div>
                <motion.div variants={contactVariants} className="flex items-start">
                  <div className="bg-green-700 rounded-full mr-4">
                    <i className="fas fa-phone text-green-400 px-3 py-3"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100 text-base sm:text-lg">Phone Number</h4>
                    <a
                      href="tel:+919664757686"
                      className="text-gray-200 text-md hover:underline"
                    >
                      +91 96647 57686
                    </a>
                  </div>
                </motion.div>
                <motion.div variants={contactVariants} className="flex items-start">
                  <div className="bg-purple-700 rounded-full mr-4">
                    <i className="fas fa-envelope text-purple-400 px-3 py-3"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100 text-base sm:text-lg">Email Address</h4>
                    <a
                      href="mailto:kyarisesolutions@gmail.com"
                      className="text-gray-200 text-md hover:underline"
                    >
                      kyarisesolutions@gmail.com
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="mt-8"
                variants={contactVariants}
                initial="hidden"
                animate="visible"
              >
                <h4 className="font-bold text-gray-100 mb-4 text-base sm:text-lg">
                  Follow Me
                </h4>
                <motion.div
                  className="flex space-x-4"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.a
                    href="https://github.com/kyarisesolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition duration-300"
                    variants={contactVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-github text-md"></i>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919664757686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-400 text-white rounded-full hover:bg-green-500 transition duration-300"
                    variants={contactVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-whatsapp text-md"></i>
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/kyarisesolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300"
                    variants={contactVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-instagram text-md"></i>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/vishaljadav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-300"
                    variants={contactVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-linkedin-in text-md"></i>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Footer Section
const Footer = ({ setActiveSection }) => {
  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  // Animation variants for footer content
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="bg-gray-950 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <motion.div
            className="mb-8 md:mb-0"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <motion.img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-32 sm:h-14 sm:w-36 mr-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-gray-200 max-w-xs mb-4 text-md">
              A passionate freelancer delivering affordable IT solutions to help you succeed online.
            </p>
            <motion.div
              className="flex space-x-4"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="https://github.com/kyarisesolutions"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300 text-md"
                variants={footerVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a
                href="https://wa.me/919664757686"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300 text-md"
                variants={footerVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-whatsapp"></i>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/kyarisesolutions/"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300 text-md"
                variants={footerVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a
                href="https://linkedin.com/vishaljadav"
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300 text-md"
                variants={footerVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="mb-8 md:mb-0"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-gray-100">Quick Links</h4>
            <motion.ul
              className="space-y-2"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              animate="visible"
            >
              {['home', 'services', 'about', 'portfolio', 'testimonials', 'contact'].map((item) => (
                <motion.li key={item} variants={footerVariants}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-gray-200 hover:text-blue-400 capitalize transition-colors duration-300 text-md"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            className="mb-8 md:mb-0"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-gray-100">Services</h4>
            <motion.ul
              className="space-y-2"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              animate="visible"
            >
              {services.slice(0, 4).map((service) => (
                <motion.li key={service.id} variants={footerVariants}>
                  <button className="text-gray-200 hover:text-blue-400 transition-colors duration-300 text-md">
                    {service.title}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-gray-100">Contact Info</h4>
            <p className="text-gray-200 mb-2 text-md">
              <i className="fas fa-map-marker-alt mr-2"></i> Ahmedabad, Gujarat
            </p>
            <p className="text-gray-200 mb-2 text-md">
              <i className="fas fa-phone mr-2"></i> <a href='tel:+919664757686'>+91 96647 57686</a>
            </p>
            <p className="text-gray-200 text-md">
              <i className="fas fa-envelope mr-2"></i> <a href='mailto:kyarisesolutions@gmail.com'>kyarisesolutions@gmail.com</a>
            </p>
          </motion.div>
        </div>
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-200 text-md">
            &copy; 2025 kyarisesolutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

// Main Page Component
export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="font-sans bg-gray-950">
        <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer setActiveSection={setActiveSection} />
      </div>
      <style jsx global>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        body {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: #0f172a;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .container {
          max-width: 100%;
          box-sizing: border-box;
        }

        .section-padding {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        .hero-bg {
          min-height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.5);
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1f2a44;
        }

        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }

        @media (max-width: 640px) {
          .section-padding {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }

          .hero-bg {
            min-height: 70vh;
          }

          .text-4xl {
            font-size: 2rem;
          }

          .text-5xl {
            font-size: 2.5rem;
          }

          .text-6xl {
            font-size: 3rem;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .section-padding {
            padding-top: 4.5rem;
            padding-bottom: 4.5rem;
          }

          .hero-bg {
            min-height: 75vh;
          }
        }

        @media (min-width: 769px) {
          .section-padding {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }
      `}</style>
    </>
  );
}
