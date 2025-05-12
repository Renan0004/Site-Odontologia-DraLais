"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Maria Silva',
    time: 'Paciente há 2 anos',
    image: '/imagem/maria-silva.jpg',
    text: 'Profissional excepcional! A Dra. Laís transformou completamente meu sorriso. O atendimento é humanizado e o resultado superou todas as minhas expectativas.'
  },
  {
    name: 'João Santos',
    time: 'Paciente há 1 ano',
    image: '/imagem/joao-santos.jpg',
    text: 'Excelente experiência! Ambiente acolhedor, equipe atenciosa e tratamento de alta qualidade. Recomendo a todos que buscam um atendimento diferenciado.'
  },
  {
    name: 'Ana Oliveira',
    time: 'Paciente há 6 meses',
    image: '/imagem/ana-oliveira.jpg',
    text: 'Muito satisfeita com o tratamento! A Dra. Laís é muito atenciosa e dedicada. O consultório é moderno e todo o processo foi muito tranquilo.'
  }
]

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-16 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#0088cc] font-outfit font-medium text-sm uppercase tracking-wider mb-3 block">
            Experiências dos Pacientes
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-[#2C3E50] uppercase tracking-wide mb-4">
            DEPOIMENTOS
          </h2>
          <p className="text-lg font-outfit font-light text-[#5D6D7E]">
            A satisfação dos nossos pacientes é o nosso maior reconhecimento. 
            Confira alguns depoimentos de quem já transformou seu sorriso conosco.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 relative"
            >
              {/* Aspas decorativas */}
              <div className="absolute top-4 right-4 text-6xl text-[#0088cc]/10 font-serif">"</div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-[#0088cc]/10 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-outfit font-semibold text-[#2C3E50]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm font-outfit text-[#5D6D7E]">
                    {testimonial.time}
                  </p>
                </div>
              </div>

              <div className="relative">
                <p className="text-[#5D6D7E] font-outfit font-light leading-relaxed">
                  {testimonial.text}
                </p>
                
                {/* Estrelas */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 