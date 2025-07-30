'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  { src: '/logo-aerosul.png', alt: 'Aerosul', name: 'Aerosul' },
  { src: '/logo-eurofral.png', alt: 'Eurofral', name: 'Eurofral' },
  { src: '/logo-marista.png', alt: 'Marista', name: 'Marista' },
  { src: '/logo-otocentro.png', alt: 'Otocentro', name: 'Otocentro' },
  { src: '/logo-saintjames.png', alt: 'Saint James', name: 'Saint James' },
  { src: '/logo-totti.png', alt: 'Totti Sorvetes', name: 'Totti Sorvetes' },
  { src: '/logo-up.png', alt: 'Universidade Positivo', name: 'Universidade Positivo' },
];

export default function LogoSlider() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-climax-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-climax-gray-900 mb-4">
            Empresas que Confiam na Climax
          </h2>
          <p className="text-xl text-climax-gray-600 max-w-3xl mx-auto">
            Mais de 1500 clientes satisfeitos, incluindo grandes empresas e instituições de renome
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Logo container */}
          <div className="flex space-x-16 animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="relative w-32 h-20 lg:w-40 lg:h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 hover:scale-105">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <motion.div
                key={`second-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: (index + logos.length) * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="relative w-32 h-20 lg:w-40 lg:h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 hover:scale-105">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
} 