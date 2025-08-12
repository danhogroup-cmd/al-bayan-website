'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you for your inquiry! We will contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitMessage('An error occurred. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Al Bayan Electrical Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-gray-800">Al Bayan Electrical</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-300"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-yellow-600 font-semibold transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300"
            >
              Request Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-yellow-600 text-white py-20 lg:py-32 overflow-hidden mt-16">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Electrical Services Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Al Bayan Electrical Fitting Works
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Professional Electrical Contracting Services in Ras Al Khaimah
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-blue-50 leading-relaxed">
              Delivering excellence in electrical solutions for residential, commercial, and industrial projects across the UAE
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Contact Us Today
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                About Al Bayan Electrical Fitting Works
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  Established in Ras Al Khaimah, UAE, Al Bayan Electrical Fitting Works has grown to become a trusted name in electrical contracting services. With annual revenues exceeding 3 million AED, we have built our reputation on reliability, quality workmanship, and exceptional customer service.
                </p>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  Our team of licensed electricians brings years of experience and expertise to every project, ensuring that all work meets the highest industry standards and UAE regulations.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/electrical-work-1.jpg" 
                  alt="Professional Electrical Work" 
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-blue-900 p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">Licensed & Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Our Professional Services
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions tailored to meet your specific needs with guaranteed quality and safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/electrical-work-2.jpg" 
                  alt="Residential Electrical" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Residential Electrical</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete home wiring solutions, lighting installations, electrical repairs, and comprehensive maintenance services for residential properties.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/electrical-work-1.jpg" 
                  alt="Commercial Electrical" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-yellow-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Commercial Electrical</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional office wiring, commercial lighting systems, power distribution, and comprehensive electrical solutions for businesses.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/electrical-work-3.jpg" 
                  alt="Industrial Solutions" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-red-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Industrial Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Heavy-duty industrial electrical installations, machinery wiring, and specialized electrical systems for industrial facilities.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/electrical-work-4.jpg" 
                  alt="Emergency Services" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Emergency Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  24/7 emergency electrical repairs and troubleshooting services with rapid response times for urgent electrical issues.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/electrical-work-5.jpg" 
                  alt="Maintenance" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Maintenance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular electrical maintenance, safety inspections, and preventive care to ensure optimal performance and safety.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/electrical-work-6.jpg" 
                  alt="New Installations" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">New Installations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete electrical installations for new construction projects and comprehensive renovation electrical systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your electrical needs? Contact us today for a consultation and quote
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Electrical</option>
                      <option value="commercial">Commercial Electrical</option>
                      <option value="industrial">Industrial Solutions</option>
                      <option value="emergency">Emergency Services</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="new-installation">New Installations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  {submitMessage && (
                    <div className={`p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Office M3E Al Sheikh Building,<br />
                      Sidroh,<br />
                      Ras Al Khaimah,<br />
                      United Arab Emirates
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Phone Numbers</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Office:</strong><br />
                      +971 7 221 9079
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Email Address</h3>
                    <p className="text-gray-600">
                      <strong>Email:</strong><br />
                      info@albayancont.com<br />
                      Maintenance@albayancont.com
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Business Hours</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Mon - Sat:</strong><br />
                      8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      <strong>Sunday:</strong><br />
                      Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Al Bayan Electrical Fitting Works</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for professional electrical contracting services in Ras Al Khaimah, UAE.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.311-.623-.311-1.543c0-1.446.839-2.526 1.885-2.526.888 0 1.318.666 1.318 1.466 0 .893-.568 2.229-.861 3.467-.245 1.04.52 1.888 1.546 1.888 1.856 0 3.283-1.958 3.283-4.789 0-2.503-1.799-4.253-4.37-4.253-2.977 0-4.727 2.234-4.727 4.546 0 .9.347 1.863.781 2.387.085.104.098.195.072.301-.079.329-.254 1.037-.289 1.183-.047.196-.153.238-.353.144-1.314-.612-2.137-2.536-2.137-4.078 0-3.298 2.394-6.325 6.901-6.325 3.628 0 6.44 2.586 6.44 6.043 0 3.607-2.274 6.505-5.431 6.505-1.06 0-2.057-.552-2.396-1.209 0 0-.523 1.992-.65 2.479-.235.9-.871 2.028-1.297 2.717.976.301 2.018.461 3.096.461 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Get Quote</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Certifications</h4>
              <div className="space-y-3 text-gray-300">
                <p>• Licensed Electrical Contractor</p>
                <p>• UAE Approved Electrical Services</p>
                <p>• Fully Insured & Bonded</p>
                <p>• Safety Certified</p>
                <p>• Quality Assured</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-400">
              <span>© 2024 Al Bayan Electrical Fitting Works. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span>License: Electrical Contractor</span>
              <span className="hidden md:inline">|</span>
              <span>Designed with professionalism</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}