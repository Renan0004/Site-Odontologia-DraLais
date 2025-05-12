"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: '/imagem/consultorio.jpg',
      alt: 'Consultório',
      title: 'Consultório Moderno'
    },
    // Adicione mais imagens aqui conforme necessário
  ]

  return (
    <section id="galeria" className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#0088cc] font-outfit font-medium text-sm uppercase tracking-wider mb-3 block">
            Nossa Clínica
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-[#2C3E50] uppercase tracking-wide mb-4">
            GALERIA
          </h2>
          <p className="text-lg font-outfit font-light text-[#5D6D7E] max-w-2xl mx-auto">
            Conheça nosso espaço moderno e acolhedor, projetado para proporcionar o máximo de conforto durante seu atendimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onClick={() => setSelectedImage(image.src)}
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <p className="text-white font-outfit font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal para visualização em tela cheia */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl w-full aspect-[4/3]">
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery 