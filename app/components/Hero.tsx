"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] bg-gradient-to-b from-[#f8f9ff] via-white to-[#e8eeff]/20 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#7B96EC]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#64B5F6]/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <span className="px-4 py-2 bg-[#0088cc]/10 text-[#0088cc] rounded-full text-sm font-outfit font-light">
                Atendimento Humanizado
              </span>
              <span className="px-4 py-2 bg-[#0088cc]/10 text-[#0088cc] rounded-full text-sm font-outfit font-light">
                Tecnologia Avançada
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-outfit font-regular text-[#2C3E50] leading-tight"
            >
              Sorria com <br/>
              <span className="text-[#0088cc]">Confiança</span> e<br/>
              Saúde
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg font-outfit font-light text-[#5D6D7E] max-w-lg"
            >
              Transforme seu sorriso com tratamentos personalizados e tecnologia de ponta. Sua saúde bucal é nossa prioridade.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="https://web.whatsapp.com/send/?phone=554199491584" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0088cc] text-white rounded-full text-base font-outfit font-regular hover:bg-[#0088cc]/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Agende sua Consulta
              </a>
              <a 
                href="#servicos" 
                className="px-6 py-3 bg-white text-[#0088cc] border-2 border-[#0088cc]/20 rounded-full text-base font-outfit font-regular hover:bg-[#0088cc]/5 transition-all duration-300 hover:scale-105"
              >
                Conheça Nossos Serviços
              </a>
            </motion.div>

            {/* Destaques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              <div className="text-center">
                <h3 className="text-2xl font-outfit font-regular text-[#0088cc] mb-1">+1000</h3>
                <p className="text-sm font-outfit font-light text-[#5D6D7E]">Pacientes</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-outfit font-regular text-[#0088cc] mb-1">+10</h3>
                <p className="text-sm font-outfit font-light text-[#5D6D7E]">Anos</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-outfit font-regular text-[#0088cc] mb-1">100%</h3>
                <p className="text-sm font-outfit font-light text-[#5D6D7E]">Satisfação</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0088cc]/20 to-[#0088cc]/10 rounded-2xl -z-10 blur-2xl transform scale-95 translate-y-4"></div>
              <Image
                src="/imagem/doutoraLais.jpg"
                alt="Dra. Laís Carolina"
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
              
              {/* Card flutuante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0088cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-outfit font-regular text-[#2C3E50]">Dra. Laís Carolina</h4>
                    <p className="text-xs font-outfit font-light text-[#5D6D7E]">CRO-SP XXXXX</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Botão flutuante do WhatsApp */}
      <a 
        href="https://web.whatsapp.com/send/?phone=554199491584"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 z-50 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-[#0088cc]/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-[#0088cc] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 