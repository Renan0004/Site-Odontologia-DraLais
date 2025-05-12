"use client"

import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative"
      >
        {/* Logo animado */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-outfit font-semibold text-[#2C3E50]">
            Dra. Laís Carolina
          </h1>
          <p className="text-[#5D6D7E] mt-2 font-outfit">Odontologia Especializada</p>
        </motion.div>

        {/* Círculos animados */}
        <div className="flex items-center justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-4 h-4 bg-[#0088cc] rounded-full"
            />
          ))}
        </div>

        {/* Linha de progresso */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -bottom-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0088cc]/20 via-[#0088cc] to-[#0088cc]/20"
        />
      </motion.div>
    </div>
  )
}

export default Loading 