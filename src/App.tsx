import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Facebook, MessageCircle, MapPin, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Entrance
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Scroll Reveal Sections
      const reveals = document.querySelectorAll(".section-reveal");
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

      // Marquee Animation
      gsap.to(".animate-marquee", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="custom-scrollbar font-sans antialiased bg-dark text-white selection:bg-accent selection:text-dark" ref={heroRef}>
      {/* HEADER */}
      <header className="fixed w-full z-50 glass-effect py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-display font-bold tracking-tighter">
          TIBÚRCIO<span className="text-accent">.</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase opacity-80">
          <a href="#inicio" className="hover:text-accent transition-colors">Início</a>
          <a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais</a>
          <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
          <a href="#depoimentos" className="hover:text-accent transition-colors">Avaliações</a>
        </nav>
        <a 
          href="https://wa.me/seunumeroaqui" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-accent text-dark px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300"
        >
          Agendar Agora
        </a>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="Barbearia Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <h4 className="hero-reveal text-accent uppercase tracking-[0.3em] text-xs mb-6 font-bold">O Melhor do Vale do Aço</h4>
          <h1 className="hero-reveal text-5xl md:text-8xl font-display font-bold leading-tight mb-8 tracking-tighter">
            A Arte da Barbearia em sua <span className="italic text-gradient">Essência.</span>
          </h1>
          <p className="hero-reveal text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Ambiente moderno, climatizado e focado na excelência. Redefina seu estilo na Barbearia Tibúrcio.
          </p>
          <div className="hero-reveal flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/seunumeroaqui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-pulse bg-accent text-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
            >
              Reserve seu Horário
            </a>
            <span className="text-sm text-gray-500 font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" /> R. Acre, 78 - Cel. Fabriciano
            </span>
          </div>
        </div>
      </section>

      {/* AUTHORITY MARQUEE */}
      <div className="py-10 border-y border-white/5 bg-darker overflow-hidden" ref={marqueeRef}>
        <div className="flex whitespace-nowrap gap-20 animate-marquee">
          <div className="flex items-center gap-4 text-2xl font-display italic opacity-50">
            <span>16+ AVALIAÇÕES 5 ESTRELAS</span>
            <span className="text-accent">•</span>
            <span>AMBIENTE CLIMATIZADO</span>
            <span className="text-accent">•</span>
            <span>PRODUTOS PREMIUM</span>
            <span className="text-accent">•</span>
            <span>MESTRES BARBEIROS</span>
            <span className="text-accent">•</span>
            <span>ESTILO E CONFORTO</span>
          </div>
          <div className="flex items-center gap-4 text-2xl font-display italic opacity-50">
            <span>16+ AVALIAÇÕES 5 ESTRELAS</span>
            <span className="text-accent">•</span>
            <span>AMBIENTE CLIMATIZADO</span>
            <span className="text-accent">•</span>
            <span>PRODUTOS PREMIUM</span>
            <span className="text-accent">•</span>
            <span>MESTRES BARBEIROS</span>
            <span className="text-accent">•</span>
            <span>ESTILO E CONFORTO</span>
          </div>
        </div>
      </div>

      {/* BENTO GRID DIFFERENTIATORS */}
      <section id="diferenciais" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="section-reveal text-4xl md:text-6xl font-display font-bold mb-4">Padrão Tibúrcio</h2>
          <p className="section-reveal text-gray-500 max-w-md">Por que somos a escolha número um dos homens que buscam o extraordinário.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
          <div className="section-reveal bento-card md:col-span-2 md:row-span-2 p-8 flex flex-col justify-end rounded-3xl relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" 
              alt="Ambiente"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-display mb-2">Ambiente Moderno</h3>
              <p className="text-gray-400 text-sm">Espaço planejado detalhe por detalhe, 100% climatizado e organizado para o seu máximo conforto.</p>
            </div>
          </div>
          
          <div className="section-reveal bento-card md:col-span-2 p-8 flex flex-col justify-center rounded-3xl bg-accent/10 border-accent/20">
            <div className="text-accent text-4xl mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-accent" />)}
            </div>
            <h3 className="text-xl font-bold mb-1">Qualidade Máxima</h3>
            <p className="text-gray-400 text-sm">Avaliação 5.0 no Google. Compromisso real com a satisfação de cada cliente.</p>
          </div>

          <div className="section-reveal bento-card md:col-span-1 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
            <h3 className="text-accent text-3xl font-display mb-2">Premium</h3>
            <p className="text-gray-400 text-xs uppercase tracking-widest">Produtos de Higiene</p>
          </div>

          <div className="section-reveal bento-card md:col-span-1 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
            <h3 className="text-accent text-3xl font-display mb-2">Expert</h3>
            <p className="text-gray-400 text-xs uppercase tracking-widest">Técnicas Modernas</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-24 bg-darker">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="section-reveal text-4xl md:text-6xl font-display font-bold mb-4">Nossos Serviços</h2>
              <p className="section-reveal text-gray-500">Do clássico ao moderno, cuidamos da sua imagem.</p>
            </div>
            <div className="section-reveal h-px flex-1 bg-white/10 mx-10 hidden md:block mb-6"></div>
            <p className="section-reveal text-accent font-medium uppercase tracking-widest text-sm mb-6">Menu Selecto</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="section-reveal group cursor-pointer">
              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Corte"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark to-transparent opacity-60"></div>
              </div>
              <h3 className="text-2xl font-display mb-2 group-hover:text-accent transition-colors">Corte Customizado</h3>
              <p className="text-gray-400 font-light mb-4 text-sm">Análise visagista para encontrar o corte que melhor se adapta ao seu rosto e estilo de vida.</p>
              <div className="h-px w-full bg-white/10 group-hover:bg-accent transition-colors"></div>
            </div>

            {/* Card 2 */}
            <div className="section-reveal group cursor-pointer">
              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Barba"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark to-transparent opacity-60"></div>
              </div>
              <h3 className="text-2xl font-display mb-2 group-hover:text-accent transition-colors">Barba Terapia</h3>
              <p className="text-gray-400 font-light mb-4 text-sm">Toalha quente, óleos essenciais e o relaxamento que todo homem moderno merece.</p>
              <div className="h-px w-full bg-white/10 group-hover:bg-accent transition-colors"></div>
            </div>

            {/* Card 3 */}
            <div className="section-reveal group cursor-pointer">
              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1512690196248-7374ebd6768a?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Combo"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark to-transparent opacity-60"></div>
              </div>
              <h3 className="text-2xl font-display mb-2 group-hover:text-accent transition-colors">Combo Tibúrcio</h3>
              <p className="text-gray-400 font-light mb-4 text-sm">A experiência completa: Cabelo, Barba e Sobrancelha com finalização premium.</p>
              <div className="h-px w-full bg-white/10 group-hover:bg-accent transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="py-24 px-6 overflow-hidden relative">
        {/* Background Glow for Section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="section-reveal text-center text-4xl md:text-5xl font-display font-bold mb-16">O Que Dizem Nossos Clientes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="section-reveal bento-card p-8 rounded-2xl">
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent" />)}
              </div>
              <p className="text-gray-300 italic mb-8">"A Barbearia Tiburcio é, sem dúvida, uma das melhores da região. O ambiente é moderno, limpo e muito bem organizado — dá pra ver que cada detalhe foi pensado com cuidado."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">RE</div>
                <div>
                  <p className="font-bold text-sm">Rubens Emanuel</p>
                  <p className="text-xs text-gray-500">Local Guide</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="section-reveal bento-card p-8 rounded-2xl">
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent" />)}
              </div>
              <p className="text-gray-300 italic mb-8">"Uma experiência sensacional. Excelente atendimento, profissional top, espaço muito bem estruturado, ambiente climatizado, produtos de qualidade."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">LM</div>
                <div>
                  <p className="font-bold text-sm">Laeviton Marques</p>
                  <p className="text-xs text-gray-500">Cliente Fiel</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="section-reveal bento-card p-8 rounded-2xl">
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent" />)}
              </div>
              <p className="text-gray-300 italic mb-8">"O melhor do Vale do aço, atendimento diferenciado!!!! Profissionalismo e técnica impecáveis. Super recomendo a todos."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">LC</div>
                <div>
                  <p className="font-bold text-sm">Lucas Cambraia</p>
                  <p className="text-xs text-gray-500">Cliente</p>
                </div>
              </div>
            </div>
          </div>

          {/* View All Reviews Button */}
          <div className="section-reveal flex justify-center">
            <a 
              href="https://www.google.com/maps/place/Barbearia+Tib%C3%BArcio/@-19.5244167,-42.6322222,17z/data=!4m8!3m7!1s0xab00977888888887:0x8888888888888888!8m2!3d-19.5244167!4d-42.6322222!9m1!1b1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-white/10 px-8 py-4 rounded-full hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-accent">Ver todas as avaliações no Google</span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-colors">
                <Star className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 bg-darker">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-display font-bold">
            TIBÚRCIO<span className="text-accent">.</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">R. Acre, 78 - Caladinho</p>
            <p className="text-gray-500 text-sm">Cel. Fabriciano - MG, 35171-171</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-accent transition-colors flex items-center gap-2">
              <Instagram className="w-5 h-5" /> <span className="hidden md:inline">Instagram</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-accent transition-colors flex items-center gap-2">
              <Facebook className="w-5 h-5" /> <span className="hidden md:inline">Facebook</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-accent transition-colors flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-700 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} BARBEARIA TIBÚRCIO - TODOS OS DIREITOS RESERVADOS
        </div>
      </footer>
    </div>
  );
}
