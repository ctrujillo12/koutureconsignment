'use client';

import React, { useState, useEffect } from 'react';
import { Instagram, MapPin, Clock, ArrowRight, Menu, X, Sparkles } from 'lucide-react';


export default function KoutureLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    '/images/store.jpeg',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
    
    '/images/heels.jpg',
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Cormorant:wght@300;400;500;600&family=Inter:wght@200;300;400&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.03em;
        }
        
        .font-italiana {
          font-family: 'Italiana', serif;
          font-weight: 400;
        }
        
        .font-cormorant {
          font-family: 'Cormorant', serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #000000 0%, #434343 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm py-5'
            : 'bg-white/20 backdrop-blur-md py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex justify-between items-center">
          <a href="#" className="transition-opacity duration-500 hover:opacity-80">
            <img 
              src="/images/logo.png" 
              alt="Kouture" 
              className={`h-8 md:h-10 w-auto transition-all duration-500 ${
                scrolled ? '' : 'brightness-0 invert drop-shadow-lg'
              }`}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <a
              href="#about"
              className={`text-xs tracking-[0.25em] font-light hover:opacity-70 transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-white drop-shadow-md'
              }`}
            >
              ABOUT
            </a>
            <a
              href="#collection"
              className={`text-xs tracking-[0.25em] font-light hover:opacity-70 transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-white drop-shadow-md'
              }`}
            >
              COLLECTION
            </a>
            <a
              href="#visit"
              className={`text-xs tracking-[0.25em] font-light hover:opacity-70 transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-white drop-shadow-md'
              }`}
            >
              VISIT
            </a>
            <a
              href="https://instagram.com/koutureconsignment"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-70 transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-white drop-shadow-md'
              }`}
            >
              <Instagram size={19} strokeWidth={1.5} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors duration-500 ${
              scrolled ? 'text-black' : 'text-white drop-shadow-lg'
            }`}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md mt-5 py-10 px-8 shadow-lg">
            <div className="flex flex-col gap-7">
              <a
                href="#about"
                className="text-xs tracking-[0.25em] text-black font-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="#collection"
                className="text-xs tracking-[0.25em] text-black font-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                COLLECTION
              </a>
              <a
                href="#visit"
                className="text-xs tracking-[0.25em] text-black font-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                VISIT
              </a>
              <a
                href="https://instagram.com/koutureconsignment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black"
              >
                <Instagram size={19} strokeWidth={1.5} />
                <span className="text-xs tracking-[0.25em] font-light">FOLLOW US</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[2500ms] ${
              idx === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={img} alt="Luxury Fashion" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <div className="flex justify-center mb-5">
              <Sparkles size={24} className="text-white/80" strokeWidth={1.5} />
            </div>
            <img 
              src="/images/logo.png" 
              alt="Kouture" 
              className="w-[280px] md:w-[420px] lg:w-[560px] h-auto mx-auto mb-6 brightness-0 invert drop-shadow-2xl"
            />
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-16 bg-white/50"></div>
              <div className="w-1 h-1 rounded-full bg-white/70"></div>
              <div className="h-px w-16 bg-white/50"></div>
            </div>
            <p className="text-sm md:text-base tracking-[0.35em] mb-2 text-white/95 font-light drop-shadow-lg">
              CURATED CONSIGNMENT
            </p>
            <p className="text-xs tracking-[0.3em] text-white/80 mb-14 font-light drop-shadow-md">
              Cherry Creek, Colorado
            </p>
            <a
              href="#collection"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/40 text-white px-12 py-4 text-[11px] tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-700 shadow-lg"
            >
              EXPLORE COLLECTION <ArrowRight size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-10 border border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-px h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-neutral-50 via-white to-neutral-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 sm:mb-10 font-cormorant font-light tracking-wide">
            Timeless Elegance
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
            <div className="h-px w-12 sm:w-16 bg-black/15"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-black/30"></div>
            <div className="h-px w-12 sm:w-16 bg-black/15"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 font-light text-gray-800 font-cormorant max-w-3xl mx-auto px-2">
            A sanctuary for those who appreciate the artistry of luxury fashion. Each piece in our collection tells a story of craftsmanship, heritage, and enduring style.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 font-light max-w-2xl mx-auto px-2">
            Nestled in Cherry Creek, we curate an exquisite selection of authenticated designer pieces and rare vintage treasures. Our commitment to sustainability meets an unwavering dedication to beauty and quality.
          </p>
        </div>
      </section>

      {/* Collection Preview */}
      <section id="collection" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-gray-400 mb-4 sm:mb-5 font-light">
              HANDPICKED SELECTION
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5 sm:mb-6 font-cormorant font-light tracking-wide px-2">
              Featured Pieces
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 sm:w-20 bg-black/10"></div>
              <Sparkles size={12} className="text-black/20 sm:hidden" strokeWidth={1.5} />
              <Sparkles size={14} className="text-black/20 hidden sm:block" strokeWidth={1.5} />
              <div className="h-px w-16 sm:w-20 bg-black/10"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
            {[
              '/images/dries_bottega.png',
              '/images/idk.png',
              '/images/chanel_bag.png',
              '/images/western.png',
              '/images/business.png',
              '/images/chanelly.png',
            ].map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden aspect-[3/4] cursor-pointer bg-neutral-50"
              >
                <img
                  src={img}
                  alt="Designer piece"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end justify-center pb-8 sm:pb-12">
                  <span className="text-white text-[8px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] border border-white/60 px-6 sm:px-10 py-2 sm:py-3 font-light backdrop-blur-sm">
                    VIEW DETAILS
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <a
              href="https://instagram.com/koutureconsignment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] border border-black/20 px-8 sm:px-10 py-3 sm:py-4 hover:bg-black hover:text-white hover:border-black transition-all duration-700 font-light"
            >
              <Instagram size={16} className="sm:hidden" strokeWidth={1.5} />
              <Instagram size={18} className="hidden sm:block" strokeWidth={1.5} />
              <span className="hidden sm:inline">EXPLORE MORE ON INSTAGRAM</span>
              <span className="sm:hidden">INSTAGRAM</span>
            </a>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-24 lg:py-32 px-6 lg:px-10 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl mb-14 font-cormorant font-light tracking-wide">
                Visit Us
              </h2>
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <MapPin size={22} className="mt-1.5 flex-shrink-0 text-black/60" strokeWidth={1.5} />
                  <div>
                    <p className="text-xl md:text-2xl font-cormorant mb-2 tracking-wide">
                      Cherry Creek
                    </p>
                    <p className="text-gray-500 text-sm font-light">Denver, Colorado</p>
                    <p className="text-gray-400 text-xs mt-1 font-light tracking-wide">
                      Denver's Premier Fashion District
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <Clock size={22} className="mt-1.5 flex-shrink-0 text-black/60" strokeWidth={1.5} />
                  <div>
                    <p className="text-xl md:text-2xl font-cormorant mb-4 tracking-wide">Hours</p>
                    <p className="text-gray-600 text-sm mb-2 font-light">Monday - Saturday: 10AM - 6PM</p>
                    <p className="text-gray-600 text-sm font-light">Sunday: 12PM - 5PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <Instagram size={22} className="mt-1.5 flex-shrink-0 text-black/60" strokeWidth={1.5} />
                  <div>
                    <p className="text-xl md:text-2xl font-cormorant mb-2 tracking-wide">
                      @koutureconsignment
                    </p>
                    <a
                      href="https://instagram.com/koutureconsignment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 text-sm hover:text-black transition-colors duration-500 font-light"
                    >
                      Follow for new arrivals & styling inspiration
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 p-10 lg:p-12 shadow-sm">
              <Sparkles size={22} className="text-black/40 mb-6" strokeWidth={1.5} />
              <h3 className="text-4xl md:text-5xl mb-8 font-cormorant font-light tracking-wide">
                Consign With Us
              </h3>
              <p className="text-gray-700 text-base md:text-lg mb-10 leading-relaxed font-light">
                Transform your cherished designer pieces into new opportunities. We welcome exceptional luxury items that embody quality, authenticity, and timeless appeal.
              </p>
              <a
                href="https://instagram.com/koutureconsignment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-black/30 px-10 py-3.5 text-[11px] tracking-[0.25em] hover:bg-black hover:text-white hover:border-black transition-all duration-700 font-light"
              >
                LEARN MORE <ArrowRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-20 px-4 sm:px-6 lg:px-10 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="/images/logo.png" 
            alt="Kouture" 
            className="h-10 sm:h-12 w-auto mx-auto mb-5 sm:mb-6"
          />
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="h-px w-10 sm:w-12 bg-black/10"></div>
            <div className="w-1 h-1 rounded-full bg-black/20"></div>
            <div className="h-px w-10 sm:w-12 bg-black/10"></div>
          </div>
          <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-gray-400 mb-6 sm:mb-8 font-light">
            CHERRY CREEK, COLORADO
          </p>
          <div className="flex justify-center gap-6 mb-6 sm:mb-8">
            <a
              href="https://instagram.com/koutureconsignment"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity duration-500"
            >
              <Instagram size={18} className="sm:hidden" strokeWidth={1.5} />
              <Instagram size={20} className="hidden sm:block" strokeWidth={1.5} />
            </a>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-400 tracking-wider font-light">
            © 2024 KOUTURE CONSIGNMENT
          </p>
        </div>
      </footer>
    </div>
  );
}