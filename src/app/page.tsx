'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, CheckCircle, Star, Wrench, Settings, Shield, Clock, MapPin, Mail, MessageCircle, Target } from 'lucide-react';
import Image from 'next/image';
import ClimaxLogo from '@/components/ClimaxLogo';
import LogoSlider from '@/components/LogoSlider';
import Counter from '@/components/Counter';
import PortfolioSection from '@/components/PortfolioSection';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
                      {/* Logo */}
          <ClimaxLogo size="lg" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium">
                Início
              </a>
              <a href="#services" className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium">
                Serviços
              </a>
              <a href="#about" className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium">
                Sobre
              </a>
              <a href="#trabalhos" className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium">
                Trabalhos
              </a>
              <a href="#testimonials" className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium">
                Depoimentos
              </a>
              <a href="#contact" className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium">
                Contato
              </a>
            </nav>

            {/* Contact Button */}
            <div className="hidden lg:flex items-center space-x-4">
                          <a
              href="tel:+5543998312268"
              className="flex items-center space-x-2 bg-climax-primary text-white px-6 py-3 rounded-lg hover:bg-climax-primary-dark transition-colors font-medium"
            >
              <Phone size={18} />
              <span>(43) 99831-2268</span>
            </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-climax-gray-700 hover:text-climax-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </a>
                <a
                  href="#services"
                  className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </a>
                <a
                  href="#about"
                  className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </a>
                <a
                  href="#trabalhos"
                  className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trabalhos
                </a>
                <a
                  href="#testimonials"
                  className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Depoimentos
                </a>
                <a
                  href="#contact"
                  className="text-climax-gray-700 hover:text-climax-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
                              <a
                href="tel:+5543998312268"
                className="flex items-center space-x-2 bg-climax-primary text-white px-4 py-3 rounded-lg hover:bg-climax-primary-dark transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                <span>(43) 99831-2268</span>
              </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-climax-gray-900 mb-6">
                Especialistas em{' '}
                <span className="text-gradient">Ar Condicionado</span>
              </h1>
              
              <p className="text-xl text-climax-gray-600 mb-8 leading-relaxed">
                Instalação, manutenção e reparo de sistemas de ar condicionado com qualidade profissional e garantia de satisfação.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 text-climax-gray-700">
                  <CheckCircle className="text-climax-accent" size={20} />
                  <span>Instalação Profissional</span>
                </div>
                <div className="flex items-center space-x-2 text-climax-gray-700">
                  <CheckCircle className="text-climax-accent" size={20} />
                  <span>Manutenção Preventiva</span>
                </div>
                <div className="flex items-center space-x-2 text-climax-gray-700">
                  <CheckCircle className="text-climax-accent" size={20} />
                  <span>Reparo Rápido</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <span className="text-climax-gray-600 font-medium">4.9 (150+ avaliações)</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+5543998312268"
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  <Phone size={20} className="mr-2" />
                  Solicitar Orçamento
                </a>
                <a
                  href="#services"
                  className="btn btn-outline text-lg px-8 py-4"
                >
                  Nossos Serviços
                </a>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                <div className="aspect-square bg-gradient-to-br from-climax-primary/10 via-climax-secondary/10 to-climax-accent/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src="/climax-logo.png"
                        alt="Climax Ar Condicionado"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-climax-gray-900 mb-2">
                      Ar Condicionado
                    </h3>
                    <p className="text-climax-gray-600">
                      Qualidade e conforto garantidos
                    </p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-climax-accent text-white rounded-full p-3 shadow-lg">
                  <CheckCircle size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-climax-brown text-white rounded-full p-3 shadow-lg">
                  <Star size={24} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-climax-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-climax-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-climax-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-climax-brown/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Logo Slider Section */}
      <LogoSlider />

      {/* Services Section */}
      <section id="services" className="section-padding bg-climax-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-climax-gray-900 mb-6">
              Nossos Serviços Especializados
            </h2>
            <p className="text-xl text-climax-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em ar condicionado com documentação técnica e engenheiro capacitado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card card-hover p-8 text-center"
            >
              <div className="icon-container icon-primary w-16 h-16 mx-auto mb-6">
                <Wrench size={32} />
              </div>
              <h3 className="text-2xl font-bold text-climax-gray-900 mb-4">Instalação Profissional</h3>
              <p className="text-climax-gray-600 mb-6">
                Instalação profissional com projetos de climatização e todos os documentos necessários.
              </p>
              <ul className="text-left space-y-2 text-climax-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-climax-accent" size={16} />
                  <span>Projetos de climatização</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-climax-accent" size={16} />
                  <span>Emissão de ART</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-climax-accent" size={16} />
                  <span>Instalação elétrica</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card card-hover p-8 text-center"
            >
              <div className="icon-container icon-secondary w-16 h-16 mx-auto mb-6">
                <Settings size={32} />
              </div>
              <h3 className="text-2xl font-bold text-climax-gray-900 mb-4">Manutenção Preventiva</h3>
              <p className="text-climax-gray-600 mb-6">
                Manutenção preventiva com emissão de PMOC e todos os documentos necessários.
              </p>
              <ul className="text-left space-y-2 text-climax-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-climax-accent" size={16} />
                  <span>Emissão de PMOC</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-climax-accent" size={16} />
                  <span>Limpeza de filtros</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-climax-accent" size={16} />
                  <span>Verificação de gás</span>
                </li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="card card-hover p-8 text-center"
            >
              <div className="icon-container icon-accent w-16 h-16 mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold text-climax-gray-900 mb-4">Assistência Técnica</h3>
              <p className="text-climax-gray-600 mb-6">
                Assistência técnica com engenheiro capacitado para todas as manutenções necessárias.
              </p>
              <ul className="text-left space-y-2 text-climax-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-climax-accent" size={16} />
                  <span>Engenheiro capacitado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-climax-accent" size={16} />
                  <span>Manutenções necessárias</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-climax-accent" size={16} />
                  <span>Diagnóstico preciso</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-climax-gray-900 mb-6">
                Sobre a Climax
              </h2>
              <p className="text-xl text-climax-gray-600 mb-8 leading-relaxed">
                Somos uma empresa especializada em sistemas de ar condicionado, com mais de 22 anos de experiência no mercado. 
                Nossa missão é proporcionar conforto e qualidade de vida através de soluções eficientes e sustentáveis, 
                com atendimento 24 horas e trabalhos aos fins de semana.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                <div className="flex items-center justify-center mb-6">
                  <ClimaxLogo size="xl" showText={false} className="mr-4" />
                  <h3 className="text-2xl font-bold text-climax-gray-900">Por que escolher a Climax?</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="icon-container icon-primary w-12 h-12 flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-climax-gray-900 mb-2">Atendimento 24h</h4>
                      <p className="text-climax-gray-600">Disponível 24 horas por dia, incluindo fins de semana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="icon-container icon-secondary w-12 h-12 flex-shrink-0">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-climax-gray-900 mb-2">Documentação Completa</h4>
                      <p className="text-climax-gray-600">Emissão de PMOC, ART e todos os documentos necessários</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="icon-container icon-accent w-12 h-12 flex-shrink-0">
                      <Wrench size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-climax-gray-900 mb-2">Engenheiro Capacitado</h4>
                      <p className="text-climax-gray-600">Profissional qualificado para todas as manutenções necessárias</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="icon-container icon-brown w-12 h-12 flex-shrink-0">
                      <Settings size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-climax-gray-900 mb-2">Projetos de Climatização</h4>
                      <p className="text-climax-gray-600">Instalação profissional com projetos técnicos completos</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats & CTA Section */}
      <section className="section-padding bg-climax-gray-900 text-white">
        <div className="container mx-auto px-4">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Nós temos a experiência
            </h2>
            <p className="text-xl text-climax-gray-300 max-w-3xl mx-auto">
              Isso não é sorte. É alcançado com conhecimento e estratégia.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-climax-gray-800 rounded-xl p-6 text-center border border-climax-gray-700 hover:shadow-lg hover:shadow-climax-primary/20 transition-all duration-300 group"
            >
              <Counter 
                end={1500} 
                suffix="+" 
                className="text-4xl font-bold text-climax-primary group-hover:text-white mb-2 transition-colors duration-300"
              />
              <div className="text-white text-sm">Clientes que nos escolheram</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-climax-gray-800 rounded-xl p-6 text-center border border-climax-gray-700 hover:shadow-lg hover:shadow-climax-primary/20 transition-all duration-300 group"
            >
              <Counter 
                end={22} 
                suffix="+" 
                className="text-4xl font-bold text-climax-primary group-hover:text-white mb-2 transition-colors duration-300"
              />
              <div className="text-white text-sm">Anos de Experiência</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-climax-gray-800 rounded-xl p-6 text-center border border-climax-gray-700 hover:shadow-lg hover:shadow-climax-primary/20 transition-all duration-300 group"
            >
              <Counter 
                end={100} 
                suffix="%" 
                className="text-4xl font-bold text-climax-primary group-hover:text-white mb-2 transition-colors duration-300"
              />
              <div className="text-white text-sm">Satisfação</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-climax-gray-800 rounded-xl p-6 text-center border border-climax-gray-700 hover:shadow-lg hover:shadow-climax-primary/20 transition-all duration-300 group"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-climax-primary group-hover:text-white mb-2 transition-colors duration-300"
              >
                24h
              </motion.div>
              <div className="text-white text-sm">Atendimento</div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <div className="relative">
            {/* Icon overlay */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-climax-primary rounded-lg p-3 border-2 border-climax-gray-900 shadow-lg">
                <Target size={24} className="text-white" />
              </div>
            </div>
            
            {/* Main CTA container */}
            <div className="bg-climax-gray-800 rounded-3xl p-8 lg:p-12 text-white border-2 border-climax-primary relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-climax-primary mb-6 flex items-center justify-center">
                  <Target size={32} className="text-climax-primary mr-3" />
                  Junte-se aos 1500+ clientes satisfeitos
                </h2>
                <p className="text-xl text-climax-gray-300 max-w-3xl mx-auto mb-12">
                  Nossa experiência fala por si. Veja por que somos a escolha certa para seu ar condicionado em Londrina.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="btn bg-gradient-to-r from-climax-primary to-climax-secondary hover:from-climax-primary-dark hover:to-climax-secondary-dark text-white text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone size={20} className="mr-2" />
                    Falar com Especialista
                  </motion.a>
                  
                  <motion.a
                    href="#about"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="btn border-2 border-climax-primary text-white hover:bg-climax-primary text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Conheça Nossa História
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-climax-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-climax-gray-900 mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-climax-gray-600 max-w-3xl mx-auto">
              Confira os depoimentos de clientes satisfeitos com nossos serviços
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-climax-gray-600 mb-6 italic">
                &ldquo;Trabalho num escritório na Gleba Palhano em Londrina e estamos acostumados com elevado padrão de prestadores de serviços. É a cartilha da empresa: atender com eficiência, de forma técnica, confiável, segura e discreta, qd a situação exige. Todas essas condições encontramos no André e em sua equipe da Clímax Ar condicionado. Em decorrência do serviço prestado na empresa, acabou também fazendo manutenção nos aparelhos de ar condicionado da minha casa e na casa de amigos. Altamente recomendado.&rdquo;
              </p>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/images/dwl_foods_logo.jpeg"
                    alt="DWLfoods Logo"
                    width={80}
                    height={80}
                    className="rounded-lg object-contain"
                  />
                </div>
                <h4 className="font-semibold text-climax-gray-900">Walter</h4>
                <p className="text-climax-gray-500 text-sm">DWLfoods</p>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-climax-gray-600 mb-6 italic">
                &ldquo;Contratei o André da clímax ar condicionado para cuidar do projeto e da infraestrutura do meu ar condicionado, e só tenho elogios! Ele trabalha super bem, é rápido, muito profissional e realmente entende do que faz. Tudo foi entregue no prazo, com acabamento impecável e com toda a qualidade que eu esperava. Recomendo de olhos fechados para quem quer um serviço de confiança e sem dor de cabeça!&rdquo;
              </p>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/images/logo-robsonandrade.png"
                    alt="Robson Andrade Logo"
                    width={120}
                    height={80}
                    className="rounded-lg object-contain"
                  />
                </div>
                <h4 className="font-semibold text-climax-gray-900">Robson Andrade</h4>
                <p className="text-climax-gray-500 text-sm">Planejamento e Gestão de Obras</p>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-climax-gray-600 mb-6 italic">
                &ldquo;O André é um grande amigo meu, e o pai dele também é uma pessoa excepcional, dois caras incríveis e super profissionais. Sempre que precisei, resolveram tudo com rapidez, atenção e qualidade. É aquele tipo de serviço que você confia de olhos fechados, porque sabe quem tá por trás. Recomendo demais a Clímax!&rdquo;
              </p>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="/images/logo-legacy-barbershop.jpg"
                    alt="Legacy Barbershop Logo"
                    width={120}
                    height={80}
                    className="rounded-lg object-contain"
                  />
                </div>
                <h4 className="font-semibold text-climax-gray-900">Gabriel</h4>
                <p className="text-climax-gray-500 text-sm">Legacy Barbershop</p>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-climax-primary to-climax-primary-dark rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Junte-se aos nossos clientes satisfeitos
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Solicite um orçamento gratuito e descubra por que somos a escolha certa
              </p>
              <a
                href="#contact"
                className="btn bg-white text-climax-primary hover:bg-gray-100 text-lg px-8 py-4 inline-flex items-center"
              >
                <MessageCircle size={20} className="mr-2" />
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-climax-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-climax-gray-300 max-w-3xl mx-auto">
              Solicite um orçamento gratuito ou tire suas dúvidas sobre nossos serviços
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="icon-container icon-primary w-12 h-12">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Telefone</h4>
                    <p className="text-climax-gray-300">(43) 99831-2268</p>
                    <p className="text-climax-gray-300">WhatsApp disponível</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="icon-container icon-secondary w-12 h-12">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">E-mail</h4>
                    <p className="text-climax-gray-300">contato@climax.com.br</p>
                    <p className="text-climax-gray-300">orcamento@climax.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="icon-container icon-accent w-12 h-12">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Atendimento</h4>
                    <p className="text-climax-gray-300">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-climax-gray-300">Sábado e Domingo: 24h</p>
                    <p className="text-climax-gray-300">Emergências: 24h</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="tel:+5543998312268"
                  className="btn btn-primary text-lg px-8 py-4 w-full lg:w-auto"
                >
                  <Phone size={20} className="mr-2" />
                  Ligar Agora
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-climax-gray-900 border border-climax-gray-700 rounded-3xl p-8 lg:p-12 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Solicitar Orçamento</h3>
              
                             <form className="space-y-6" id="contactForm">
                 <div className="grid md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-white font-medium mb-2">Nome</label>
                     <input
                       type="text"
                       id="nome"
                       className="form-input bg-white/90 border-white/20 text-climax-gray-900 placeholder-climax-gray-500"
                       placeholder="Seu nome completo"
                     />
                   </div>
                   <div>
                     <label className="block text-white font-medium mb-2">Telefone</label>
                     <input
                       type="tel"
                       id="telefone"
                       className="form-input bg-white/90 border-white/20 text-climax-gray-900 placeholder-climax-gray-500"
                       placeholder="(11) 99999-9999"
                     />
                   </div>
                 </div>
                 
                 <div>
                   <label className="block text-white font-medium mb-2">E-mail</label>
                   <input
                     type="email"
                     id="email"
                     className="form-input bg-white/90 border-white/20 text-climax-gray-900 placeholder-climax-gray-500"
                     placeholder="seu@email.com"
                   />
                 </div>
                 
                 <div>
                   <label className="block text-white font-medium mb-2">Serviço Desejado</label>
                   <select id="servico" className="form-input bg-white/90 border-white/20 text-climax-gray-900">
                     <option>Selecione um serviço</option>
                     <option>Instalação de Ar Condicionado</option>
                     <option>Manutenção Preventiva</option>
                     <option>Reparo de Ar Condicionado</option>
                     <option>Limpeza de Ar Condicionado</option>
                     <option>Outro</option>
                   </select>
                 </div>
                 
                 <div>
                   <label className="block text-white font-medium mb-2">Mensagem</label>
                   <textarea
                     id="mensagem"
                     className="form-input bg-white/90 border-white/20 text-climax-gray-900 placeholder-climax-gray-500"
                     rows={4}
                     placeholder="Descreva sua necessidade..."
                   ></textarea>
                 </div>
                 
                 <button
                   type="button"
                   onClick={() => {
                     const nome = (document.getElementById('nome') as HTMLInputElement)?.value || '';
                     const telefone = (document.getElementById('telefone') as HTMLInputElement)?.value || '';
                     const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                     const servico = (document.getElementById('servico') as HTMLSelectElement)?.value || '';
                     const mensagem = (document.getElementById('mensagem') as HTMLTextAreaElement)?.value || '';
                     
                     const texto = `Olá Gomes! Gostaria de solicitar um orçamento para ar condicionado.

Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Serviço desejado: ${servico}
Mensagem: ${mensagem}`;

                     const url = `https://wa.me/5543998312268?text=${encodeURIComponent(texto)}`;
                     window.open(url, '_blank');
                   }}
                   className="btn btn-primary text-lg px-8 py-4 w-full inline-flex items-center justify-center"
                 >
                   <MessageCircle size={20} className="mr-2" />
                   Enviar Solicitação
                 </button>
               </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-climax-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <ClimaxLogo size="md" />
              </div>
              <p className="text-climax-gray-400 mb-4">
                Especialistas em ar condicionado com qualidade e garantia de satisfação.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-climax-primary rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div className="w-10 h-10 bg-climax-secondary rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div className="w-10 h-10 bg-climax-accent rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div className="w-10 h-10 bg-climax-brown rounded-full flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-climax-gray-400">
                <li>Instalação de Ar Condicionado</li>
                <li>Manutenção Preventiva</li>
                <li>Reparo de Ar Condicionado</li>
                <li>Limpeza de Ar Condicionado</li>
                <li>Venda de Equipamentos</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-climax-gray-400">
                <p>(43) 99831-2268</p>
                <p>contato@climax.com.br</p>
                <p>Atendimento 24h</p>
                <p>Orçamento gratuito</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-climax-gray-800 mt-8 pt-8 text-center text-climax-gray-400">
            <p>&copy; 2024 Climax Ar Condicionado. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
