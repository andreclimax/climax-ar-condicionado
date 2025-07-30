'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

const portfolioItems = [
  {
    id: 1,
    title: 'Instalação de Sistema HVAC',
    description: 'Instalação profissional de sistema de climatização comercial em telhado',
    image: '/images/trabalhos/trabalho-1-instalacao-hvac.jpg',
    category: 'Instalação'
  },
  {
    id: 2,
    title: 'Manutenção em equipamento VRF',
    description: 'Manutenção preventiva e higienização de condensadora em equipamento VRF',
    image: '/images/trabalhos/trabalho-2-manutencao-evaporador.jpg',
    category: 'Manutenção'
  },
  {
    id: 3,
    title: 'Dimensionamento de biotin em ambientes residenciais',
    description: 'Ampla variedade de equipamentos em estoque',
    image: '/images/trabalhos/trabalho-3-estoque-ar-condicionado.jpg',
    category: 'Venda'
  },
  {
    id: 4,
    title: 'Venda de Splits',
    description: 'Vendas das melhores marcas de equipamentos de refrigeração.',
    image: '/images/trabalhos/trabalho-4-sistema-teto.jpg',
    category: 'Venda'
  },
  {
    id: 5,
    title: 'Instalação Comercial',
    description: 'Projeto completo de climatização para ambiente comercial',
    image: '/images/trabalhos/trabalho-5-instalacao-comercial.jpg',
    category: 'Instalação'
  },
  {
    id: 6,
    title: 'Trabalho em obras, dimensionamento de infraestrutura de climatização',
    description: 'Trabalho em canteiro de obra com capacete da Climax - Profissionalismo e segurança',
    image: '/images/trabalhos/trabalho-6-construcao-capacete.jpg',
    category: 'Instalação'
  },
  {
    id: 7,
    title: 'Profissionais capacitados',
    description: 'Veículo equipado com ferramentas e materiais para atendimento completo',
    image: '/images/trabalhos/trabalho-7-pickup-ferramentas.jpg',
    category: 'Serviços'
  }
]

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);

  const handleImageClick = (item: typeof portfolioItems[0]) => {
    setSelectedImage({
      src: item.image,
      alt: item.title,
      title: item.title,
      description: item.description
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="trabalhos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos realizados com excelência e qualidade profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="relative h-80 cursor-pointer group bg-gray-100"
                onClick={() => handleImageClick(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center pb-2">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded">
                    Clique para ampliar
                  </div>
                </div>
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
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

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/trabalhos/logo-climax-portfolio.png"
                alt="Climax Ar Condicionado"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mais de 22 anos de experiência
            </h3>
            <p className="text-gray-600 mb-6">
              A Climax Ar Condicionado é referência em Londrina e região, 
              oferecendo soluções completas em climatização com qualidade e confiança.
            </p>
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        title={selectedImage?.title || ''}
        description={selectedImage?.description || ''}
      />
    </section>
  )
} 