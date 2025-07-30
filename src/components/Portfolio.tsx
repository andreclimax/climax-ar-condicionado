'use client'

import Image from 'next/image'
import { useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'Instalação Hitachi',
    description: 'Instalação e manutenção de sistema Hitachi RAS24FSNSB',
    image: '/images/portfolio/instalacao-hitachi.jpg',
    category: 'Instalação'
  },
  {
    id: 2,
    title: 'Manutenção em Telhado',
    description: 'Serviços de manutenção em unidades de ar condicionado',
    image: '/images/portfolio/manutencao-telhado.jpg',
    category: 'Manutenção'
  },
  {
    id: 3,
    title: 'Construção Marista',
    description: 'Trabalho realizado no Colégio Marista de Londrina',
    image: '/images/portfolio/construcao-marista.jpg',
    category: 'Construção'
  },
  {
    id: 4,
    title: 'Estoque Midea',
    description: 'Unidades Midea para instalação em projetos comerciais',
    image: '/images/portfolio/estoque-midea.jpg',
    category: 'Venda'
  },
  {
    id: 5,
    title: 'Sistema Solar',
    description: 'Instalação de sistema solar com ar condicionado',
    image: '/images/portfolio/sistema-solar.jpg',
    category: 'Sustentabilidade'
  }
]

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos realizados em Londrina e região. 
            Especialistas em instalação, manutenção e venda de ar condicionado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para visualização das imagens */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
              >
                ×
              </button>
              <Image
                src={portfolioItems.find(item => item.id === selectedImage)?.image || ''}
                alt={portfolioItems.find(item => item.id === selectedImage)?.title || ''}
                width={800}
                height={600}
                className="object-contain max-h-[80vh]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 