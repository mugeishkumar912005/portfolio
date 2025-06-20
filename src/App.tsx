import React, { useState, useEffect } from 'react';
import profile from './assets/profile.jpg';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Trophy, 
  GraduationCap, 
  Award,
  User,
  Briefcase,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'internships', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigation = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = {
    languages: ['Java', 'Python', 'C', 'JavaScript', 'HTML', 'CSS'],
    frameworks: ['ReactJS', 'NodeJS', 'ExpressJS', 'Spring Boot','React Native'],
    databases: ['MySQL', 'MongoDB','Firebase'],
    tools: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Docker', 'Power BI', 'Canva'],
    core: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'REST APIs', 'JWT Authentication']
  };

  const projects = [
    {
      title: 'MedX - Healthcare Platform',
      description: 'A comprehensive healthcare platform featuring digital prescription management, appointment scheduling, secure patient data management, and a specialized dashboard for doctors.',
      tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'JWT', 'Bcrypt'],
      highlights: ['Digital Prescription Management', 'Appointment Scheduling', 'Secure Data Management', 'Doctor Dashboard'],
      award: 'First Prize at Project Expo'
    },
    {
      title: 'Book Your Stay - Hotel Reservation',
      description: 'A full-stack hotel reservation system with secure JWT authentication, responsive React frontend, and robust Spring Boot backend with SQL integration.',
      tech: ['ReactJS', 'Spring Boot', 'SQL', 'JWT', 'REST APIs'],
      highlights: ['Secure Authentication', 'Responsive Design', 'Real-time Availability', 'Booking Management']
    },
    {
      title: 'ResX - College Resource Management',
      description: 'A sophisticated college resource booking system featuring conflict management, Power BI analytics, dynamic scheduling, and role-based access control.',
      tech: ['ReactJS', 'NodeJS', 'Power BI', 'MongoDB', 'Express'],
      highlights: ['Conflict Management', 'Power BI Analytics', 'Dynamic Scheduling', 'Role-based Access']
    },
    {
      title: 'Connect - Real-Time Chat App',
      description: 'A feature-rich chat application with private messaging, JWT authentication, read status tracking, and responsive UI using Socket.IO for real-time communication.',
      tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Socket.IO'],
      highlights: ['Real-time Messaging', 'Private Chat', 'Read Status', 'JWT Security']
    },
    {
      title: 'E-Book E-commerce Platform',
      description: 'A complete MERN stack e-commerce platform developed during internship, featuring user authentication, payment integration, book search, and responsive design.',
      tech: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'Payment Gateway'],
      highlights: ['Payment Integration', 'Search Functionality', 'User Authentication', 'Responsive UI']
    }
  ];

  const achievements = [
    {
      title: 'Project Expo First Prize',
      description: 'Won first prize for MedX healthcare platform at Sathyabama University Project Expo',
      icon: Trophy
    },
    {
      title: 'National Hackathon Round 3',
      description: 'Advanced to round 3 in Bits and Bound National Hackathon among 300+ participants',
      icon: Award
    },
    {
      title: 'Smart India Hackathon',
      description: 'Selected for Smart India Hackathon internal round',
      icon: Code
    },
    {
      title: 'State-Level Hackathon',
      description: 'Ranked 6th among 20 finalists in state-level hackathon',
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Mugeish Kumar
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Mugeish Kumar
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate full-stack developer skilled in building impactful digital solutions. 
                I love solving complex problems and creating seamless user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
<div className="w-190 h-90 bg-gradient-to-br  from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
  <img src={profile} alt="Profile" className="w-190 h-82 object-cover rounded-full" />
</div>

            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
              I am a dedicated full-stack developer currently pursuing B.Tech in Information Technology at 
              Sri Eshwar College of Engineering. With expertise in Java, Python, C, and modern web technologies 
              like React and Node.js, I bring a problem-solving mindset to every project.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              My passion lies in creating innovative digital solutions that make a real impact. Through hands-on 
              projects and continuous learning, I strive to stay at the forefront of technology and build 
              applications that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
              </div>
              <div className="space-y-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Server className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Frameworks</h3>
              </div>
              <div className="space-y-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Database className="text-orange-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Databases</h3>
              </div>
              <div className="space-y-2">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Briefcase className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Tools</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.core.map((skill, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
                  <span className="font-medium text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  {project.award && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      🏆 {project.award}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <achievement.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Briefcase className="text-blue-600 mr-4" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Full-Stack Development Intern</h3>
                  <p className="text-lg text-gray-600">Critter Graphix & Better Tomorrow</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Built responsive web applications
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Developed REST APIs
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Database integration and optimization
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      UI/UX improvements
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 'ExpressJS'].map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg">
                    <strong>Impact:</strong> Achieved 30% faster load times and improved overall user experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-4" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Bachelor of Technology - Information Technology</h3>
                  <p className="text-lg text-gray-600">Sri Eshwar College of Engineering</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-gray-900">2022 - 2026</p>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <p className="text-sm text-gray-600">CGPA</p>
                  <p className="font-semibold text-gray-900">8.2 / 10</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="font-semibold text-gray-900">Pursuing</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Higher Secondary Certificate (HSC)</h4>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">93.17%</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Secondary School Leaving Certificate (SSLC)</h4>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">75.17%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 mr-4" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Data Structures using C/C++</h3>
                  <p className="text-gray-600">Udemy • 2024</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="text-teal-600 mr-4" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">MERN Stack Development</h3>
                  <p className="text-gray-600">Better Tomorrow • 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a href="mailto:mugeishkumar.s2022it@sece.ac.in" className="flex items-center hover:text-blue-400 transition-colors">
                  <Mail className="mr-3" size={20} />
                  mugeishkumar.s2022it@sece.ac.in
                </a>
                <a href="tel:+917845473548" className="flex items-center hover:text-blue-400 transition-colors">
                  <Phone className="mr-3" size={20} />
                  +91 7845473548
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://github.com/mugeishkumar912005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github className="mr-3" size={24} />
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-gray-400">View my repositories</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/mugeish-kumar-3a9258251" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="mr-3" size={24} />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-gray-400">Professional network</p>
                  </div>
                </a>
                
                <a 
                  href="https://leetcode.com/u/Mugeish_kumars/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Code className="mr-3" size={24} />
                  <div>
                    <p className="font-semibold">LeetCode</p>
                    <p className="text-sm text-gray-400">Coding challenges</p>
                  </div>
                </a>
                
                <a 
                  href="https://codechef.com/users/mugeish_kumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Trophy className="mr-3" size={24} />
                  <div>
                    <p className="font-semibold">CodeChef</p>
                    <p className="text-sm text-gray-400">Competitive programming</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://hackerrank.com/profile/kmugeis2005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors"
                >
                  <ExternalLink className="mr-2" size={20} />
                  View HackerRank Profile
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2024 Mugeish Kumar. Designed and developed with passion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;