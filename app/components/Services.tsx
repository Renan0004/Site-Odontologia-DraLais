"use client"

import { motion } from 'framer-motion'
import { 
  SparklesIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  BeakerIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: SparklesIcon,
    title: "Clareamento Dental",
    description: "Sorria com confiança! Técnicas avançadas para um sorriso mais branco e natural.",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: HeartIcon,
    title: "Tratamento Periodontal",
    description: "Cuidado completo com a saúde das suas gengivas e tecidos de suporte.",
    color: "from-red-500/20 to-pink-500/20"
  },
  {
    icon: ShieldCheckIcon,
    title: "Restaurações Estéticas",
    description: "Restaurações imperceptíveis que devolvem a beleza natural dos seus dentes.",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    icon: UserGroupIcon,
    title: "Ortodontia",
    description: "Alinhamento perfeito com técnicas modernas e tratamentos personalizados.",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: BeakerIcon,
    title: "Implantes Dentários",
    description: "Recupere seu sorriso com implantes de alta qualidade e tecnologia de ponta.",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    icon: ClockIcon,
    title: "Urgências",
    description: "Atendimento rápido e eficiente para suas emergências odontológicas.",
    color: "from-purple-500/20 to-pink-500/20"
  }
]

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#0088cc] font-outfit font-medium text-sm uppercase tracking-wider mb-3 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-[#2C3E50] uppercase tracking-wide mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-lg font-outfit font-light text-[#5D6D7E] max-w-2xl mx-auto">
            Oferecemos uma ampla gama de tratamentos odontológicos com foco em qualidade e conforto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ backgroundImage: `linear-gradient(to bottom right, ${service.color})` }}
              ></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group-hover:border-transparent">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-outfit font-regular text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="font-outfit font-light text-gray-600 group-hover:text-gray-700">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center">
                  <a 
                    href="#contato" 
                    className="text-primary font-outfit font-regular flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Saiba mais
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg font-outfit font-regular hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Agende sua Avaliação
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 