import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Star, Clock, ChevronDown, ChevronUp, Users } from 'lucide-react';

export default function ModernWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('services');
  const [visibleSection, setVisibleSection] = useState('hero');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'testimonials', 'contact'];
      const position = window.scrollY + 300;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && 
            position >= element.offsetTop && 
            position <= element.offsetTop + element.offsetHeight) {
          setVisibleSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "Working with this team has transformed our digital presence completely. Their strategic approach and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content: "The creativity and technical expertise brought to our project helped us launch with confidence. Our user engagement metrics have increased by 200%.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Product Manager",
      content: "I've worked with many agencies, but none have delivered results like this team. They truly understand how to create memorable digital experiences.",
      rating: 5
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive digital solutions including web design, app development, branding, UI/UX design, digital marketing, and ongoing support and maintenance."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A basic website might take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our consultation."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We love working with businesses of all sizes. We have tailored packages specifically designed for startups and small businesses to help them establish a strong digital presence."
    },
    {
      question: "What makes your approach different?",
      answer: "We combine data-driven insights with creative design thinking. Our process emphasizes user research, iterative design, and continuous performance optimization to deliver exceptional results."
    }
  ];

  // Services data
  const services = [
    {
      title: "Web Development",
      icon: <div className="bg-indigo-100 p-3 rounded-full"><MessageCircle className="w-6 h-6 text-indigo-600" /></div>,
      description: "Custom websites that engage visitors and drive conversions with modern technology stacks."
    },
    {
      title: "UI/UX Design",
      icon: <div className="bg-emerald-100 p-3 rounded-full"><Star className="w-6 h-6 text-emerald-600" /></div>,
      description: "User-centered design that creates intuitive, enjoyable experiences for your customers."
    },
    {
      title: "Brand Strategy",
      icon: <div className="bg-amber-100 p-3 rounded-full"><Users className="w-6 h-6 text-amber-600" /></div>,
      description: "Comprehensive brand development that establishes your unique market position."
    },
    {
      title: "Ongoing Support",
      icon: <div className="bg-rose-100 p-3 rounded-full"><Clock className="w-6 h-6 text-rose-600" /></div>,
      description: "Continuous maintenance and optimization to keep your digital presence performing."
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              INNOVATE
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-indigo-600 transition duration-300 ${
                  visibleSection === item.toLowerCase() ? 'text-indigo-600' : 'text-gray-600'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition duration-300 flex items-center">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow-lg">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300 mt-4 w-full flex justify-center items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        className={`pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 transition-opacity duration-700 ${
          visibleSection === 'hero' ? 'opacity-100' : 'opacity-80'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your <span className="text-indigo-600">Digital Presence</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We create stunning, interactive experiences that engage your audience and drive results. Our expert team combines creativity with technical excellence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition duration-300">
                  Our Portfolio
                </button>
              </div>
              <div className="mt-10 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                      <img src={`/api/placeholder/100/100`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold text-indigo-600">500+</span> satisfied clients
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-200 rounded-full filter blur-xl opacity-70"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-200 rounded-full filter blur-xl opacity-70"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Digital Experience" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className={`py-16 md:py-24 transition-opacity duration-700 ${
          visibleSection === 'services' ? 'opacity-100' : 'opacity-80'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className={`py-16 md:py-24 bg-gray-50 transition-opacity duration-700 ${
          visibleSection === 'about' ? 'opacity-100' : 'opacity-80'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-200 rounded-full filter blur-xl opacity-70"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Our Team" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Agency</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, we've grown from a small design studio to a full-service digital agency with a passion for creating exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our diverse team of designers, developers, and strategists work collaboratively to bring innovative solutions to complex problems.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-indigo-600">250+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">15+</div>
                  <div className="text-gray-600">Expert Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">8+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">20+</div>
                  <div className="text-gray-600">Industry Awards</div>
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Visual Grid */}
      <section 
        id="portfolio" 
        className={`py-16 md:py-24 transition-opacity duration-700 ${
          visibleSection === 'portfolio' ? 'opacity-100' : 'opacity-80'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Latest Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our portfolio of successful projects that have driven results for our clients.
            </p>
          </div>

          <div className="flex mb-8">
            <div className="mx-auto flex space-x-2">
              {['All', 'Web Design', 'Mobile Apps', 'Branding', 'UI/UX'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                    activeTab === tab.toLowerCase().replace(' ', '-')
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={`/api/placeholder/600/${400 + index * 50}`} 
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Project Title {index + 1}</h3>
                  <p className="text-gray-200 mb-4">Web Design & Development</p>
                  <button className="bg-white text-indigo-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition duration-300 w-max">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        className={`py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 transition-opacity duration-700 ${
          visibleSection === 'testimonials' ? 'opacity-100' : 'opacity-80'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                "{testimonials[testimonialIndex].content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                  <img src={`/api/placeholder/100/100`} alt={testimonials[testimonialIndex].name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[testimonialIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[testimonialIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    testimonialIndex === index ? 'bg-indigo-600 w-8' : 'bg-gray-300'
                  }`}
                  onClick={() => setTestimonialIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="mb-4 border-b border-gray-200 pb-4"
              >
                <button
                  className="flex justify-between items-center w-full text-left font-medium text-lg py-2"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  {faq.question}
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-indigo-600" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="mt-2 text-gray-600 pl-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Let's create something amazing together. Reach out to discuss your project.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition duration-300">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className={`py-16 md:py-24 transition-opacity duration-700 ${
          visibleSection === 'contact' ? 'opacity-100' : 'opacity-80'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a project in mind? Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <MessageCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-600">hello@innovate.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Working Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="text-2xl font-bold mb-6">INNOVATE</div>
              <p className="text-gray-400 mb-6">
                Creating exceptional digital experiences that drive results for forward-thinking businesses.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {['Web Development', 'UI/UX Design', 'Brand Strategy', 'Digital Marketing', 'Mobile Development'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Our Work', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Get the latest insights and trends delivered to your inbox.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  className="px-4 py-2 rounded-l-lg w-full bg-gray-800 border border-gray-700 text-white focus:outline-none"
                  placeholder="Your email"
                />
                <button className="bg-indigo-600 px-4 rounded-r-lg hover:bg-indigo-700 transition duration-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 INNOVATE. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}