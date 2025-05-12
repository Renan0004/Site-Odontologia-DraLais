"use client"

import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : ''
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email inválido' : ''
      case 'message':
        return value.length < 10 ? 'Mensagem deve ter pelo menos 10 caracteres' : ''
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some(error => error !== '')) {
      setIsLoading(false)
      return
    }

    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-[#0088cc] font-outfit font-medium text-sm uppercase tracking-wider mb-3 block">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-[#2C3E50] uppercase tracking-wide mb-4">
            CONTATO
          </h2>
          <p className="text-lg font-outfit font-light text-[#5D6D7E]">
            Estamos aqui para tirar suas dúvidas e agendar sua consulta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-outfit font-semibold text-[#2C3E50] mb-2">Mensagem Enviada!</h3>
                <p className="text-[#5D6D7E] font-outfit text-lg">
                  Obrigado pelo seu contato! Retornaremos em até 24 horas úteis.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-outfit font-medium text-[#2C3E50] mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0088cc] focus:border-[#0088cc] transition-all duration-200 ${
                      errors.name ? 'border-red-300 focus:border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 font-outfit">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-outfit font-medium text-[#2C3E50] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0088cc] focus:border-[#0088cc] transition-all duration-200 ${
                      errors.email ? 'border-red-300 focus:border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 font-outfit">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-outfit font-medium text-[#2C3E50] mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0088cc] focus:border-[#0088cc] transition-all duration-200 ${
                      errors.message ? 'border-red-300 focus:border-red-500' : ''
                    }`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 font-outfit">{errors.message}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => window.open('https://wa.me/5511999401584', '_blank')}
                  className="w-full px-6 py-3 bg-[#25D366] text-white rounded-full font-outfit font-medium hover:bg-[#25D366]/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Agendar pelo WhatsApp
                </button>
              </form>
            )}
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 text-[#0088cc]" />
                  </div>
                  <div>
                    <h3 className="text-base font-outfit font-medium text-[#2C3E50]">WhatsApp</h3>
                    <a 
                      href="https://wa.me/5511999401584" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-[#0088cc] hover:text-[#0088cc]/80 font-outfit transition-colors"
                    >
                      +55 11 99940-1584
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-outfit font-medium text-[#2C3E50]">Instagram</h3>
                    <a href="https://www.instagram.com/dra.laiscarolina" target="_blank" rel="noopener noreferrer" className="text-sm text-[#0088cc] hover:text-[#0088cc]/80 font-outfit transition-colors">
                      @dra.laiscarolina
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-5 h-5 text-[#0088cc]" />
                  </div>
                  <div>
                    <h3 className="text-base font-outfit font-medium text-[#2C3E50]">Email</h3>
                    <p className="text-sm text-[#5D6D7E] font-outfit">contato@drlaiscarolina.com.br</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-[#0088cc]" />
                  </div>
                  <div>
                    <h3 className="text-base font-outfit font-medium text-[#2C3E50]">Endereço</h3>
                    <p className="text-sm text-[#5D6D7E] font-outfit">Rua Exemplo, 123 - São Paulo, SP</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-5 h-5 text-[#0088cc]" />
                  </div>
                  <div>
                    <h3 className="text-base font-outfit font-medium text-[#2C3E50]">Horário</h3>
                    <div className="text-sm text-[#5D6D7E] font-outfit">
                      <p>Segunda a Sexta: 08h às 18h</p>
                      <p>Sábado: 08h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white rounded-xl shadow-md p-4 h-[200px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975829726973!2d-46.6528347!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzknMTAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1625161234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 