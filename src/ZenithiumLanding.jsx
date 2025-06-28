import { useState, useEffect } from "react"
import { Code, Database, Globe, Shield, Users, Zap, Menu, X, ArrowRight, CheckCircle, Star } from "lucide-react"
import Logo from './assets/images/Logo.png';
import appEIS from './assets/images/appEIS.jpg';
import ContactForm from '/src/ContactForm.jsx'

export default function ZenithiumLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y responsivas con las últimas tecnologías",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de Datos",
      description: "Diseño e implementación de sistemas de bases de datos eficientes",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Soluciones Cloud",
      description: "Migración y optimización de infraestructura en la nube",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ciberseguridad",
      description: "Protección integral de sistemas y datos empresariales",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultoría IT",
      description: "Asesoramiento estratégico para la transformación digital",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización",
      description: "Optimización de procesos mediante automatización inteligente",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      text: "Zenithium transformó completamente nuestra infraestructura digital. Excelente trabajo.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      text: "Profesionales excepcionales. Entregaron el proyecto antes del plazo establecido.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      text: "Su expertise en bases de datos nos ayudó a optimizar nuestros procesos significativamente.",
      rating: 5,
    },
  ]

  const projects = [
    {
      title: "Gestor de Clientes y Fidelización",
      description: "Sistema web personalizado para administrar clientes, beneficios y puntos acumulados.",
      image: "/Fidelizacion.png",
      tech: ["React", ".NET", "SQL Server"],
    },
    {
      title: "Plataforma de Reservas y Turnos",
      description: "Aplicación para reservas online con validación por email, gestión de disponibilidad y recordatorios automáticos.",
      image: "/BookingApp.png",
      tech: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Sistema de Encuestas y Diagnósticos",
      description: "Herramienta para crear, distribuir y analizar encuestas clínicas o de satisfacción en tiempo real.",
      image: "/Statistics.png",
      tech: ["PHP", "PostgreSQL", "jQuery"],
    },
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <img src={Logo} alt="Logo Zenithium" className="h-10 w-10 object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zenithium
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">
                Servicios
              </a>
              <a href="#proyectos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Proyectos
              </a>
              <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonios
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contacto
              </a>
            </nav>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Inicio
                </a>
                <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Servicios
                </a>
                <a href="#proyectos" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Proyectos
                </a>
                <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Testimonios
                </a>
                <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contacto
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Soluciones
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Informáticas{" "}
                  </span>
                  de Vanguardia
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transformamos ideas en realidades digitales. Desarrollamos software personalizado, optimizamos
                  procesos y potenciamos tu negocio con tecnología de última generación.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  Comenzar Proyecto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#proyectos" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Ver Proyectos
                </a>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3+</div>
                  <div className="text-gray-600">Años</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={appEIS}
                  alt="Desarrollo de Software"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos un amplio rango de servicios tecnológicos para impulsar tu negocio hacia el futuro digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos Frecuentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Algunos de los trabajos más solicitados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    style={{ objectFit: "contain" }}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">¿Listo para Transformar tu Negocio?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contáctanos hoy y descubre cómo podemos llevar tu empresa al siguiente nivel con nuestras soluciones
              tecnológicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Solicitar Cotización
              </a>
              <a href="https://www.linkedin.com/company/zenithium" target="_blank" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
              <p className="text-xl text-gray-600">Estamos aquí para ayudarte a hacer realidad tus proyectos</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">📧</span>
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-gray-600">zenithiumsolutions@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">📱</span>
                      </div>
                      <div>
                        <div className="font-medium">Teléfono</div>
                        <div className="text-gray-600">+54 9 223-5458913</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">📍</span>
                      </div>
                      <div>
                        <div className="font-medium">Ubicación</div>
                        <div className="text-gray-600">Mar del Plata, Argentina</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">🔗</span>
                      </div>
                      <div>
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-gray-600">
                          <a
                            href="https://www.linkedin.com/company/zenithium"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-blue-600"
                          >
                            linkedin.com/company/zenithium
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Por qué elegir Zenithium?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Experiencia comprobada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Tecnologías de vanguardia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Soporte 24/7</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Precios competitivos</span>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm/>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <img src={Logo} alt="Logo Zenithium" className="h-10 w-10 object-contain" />
                </div>
                <span className="text-2xl font-bold">Zenithium</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transformamos ideas en soluciones digitales innovadoras. Tu socio tecnológico de confianza para el
                crecimiento empresarial.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/zenithium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </div>
                </a>

              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <p className="hover:text-white transition-colors">
                    Desarrollo Web
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Apps Móviles
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Consultoría IT
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">
                    Cloud Computing
                  </p>
                </li>
              </ul>
            </div>

            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Equipo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/zenithium" className="hover:text-white transition-colors">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Zenithium. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
