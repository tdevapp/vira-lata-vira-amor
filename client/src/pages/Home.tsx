import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Instagram,
  MapPin,
  Menu,
  Music2,
  PawPrint,
  Phone,
  Scissors,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Waves,
  X,
} from "lucide-react";

const PHONE = "5511970920703";
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre os serviços da Vira Lata Vira Amor e gostaria de agendar um atendimento para meu pet.";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const MAPS_URL = "https://maps.app.goo.gl/PJLNk1x21XarbNPb9";
const INSTAGRAM_URL = "https://www.instagram.com/viralataviraamorpetshop/";
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Vira Lata Vira Amor | Clínica Veterinária e Pet Shop",
  telephone: "+55 11 97092-0703",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Itapiru, 719 - Vila da Saúde",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "04143-010",
    addressCountry: "BR",
  },
  sameAs: [INSTAGRAM_URL],
  areaServed: "Vila da Saúde, São Paulo",
  knowsAbout: ["Clínica veterinária", "Cardiologia veterinária", "Cirurgia veterinária", "Dermatologia veterinária", "Endocrinologia veterinária", "Gastroenterologia veterinária", "Nefrologia veterinária", "Nutrição animal", "Odontologia veterinária", "Oftalmologia veterinária", "Oncologia veterinária", "Ortopedia veterinária", "Banho e tosa", "Estética animal", "Pet shop"],
};

const specialties = [
  { name: "Clínica geral", image: "/manus-storage/specialty-clinica-geral_ab906df9.jpg", alt: "Consulta veterinária de rotina para um cão" },
  { name: "Cardiologia", image: "/manus-storage/specialty-cardiologia_d3c6f5d4.jpg", alt: "Veterinária auscultando o coração de um cão" },
  { name: "Cirurgia", image: "/manus-storage/specialty-cirurgia_2b6e3541.jpg", alt: "Equipe veterinária preparando uma sala cirúrgica" },
  { name: "Dermatologia", image: "/manus-storage/specialty-dermatologia_ffab4d3b.jpg", alt: "Avaliação dermatológica do pelo de um cão" },
  { name: "Endocrinologia", image: "/manus-storage/specialty-endocrinologia_d6bd682d.jpg", alt: "Avaliação clínica de um cão" },
  { name: "Gastroenterologia", image: "/manus-storage/specialty-gastroenterologia_77c2138e.jpg", alt: "Veterinária examinando um cão com cuidado" },
  { name: "Nefrologia", image: "/manus-storage/specialty-nefrologia_b294c5c9.jpg", alt: "Veterinária realizando exame de imagem em um gato" },
  { name: "Nutrição", image: "/manus-storage/specialty-nutricao_a1019f99.jpg", alt: "Orientação nutricional veterinária para um cão" },
  { name: "Odontologia", image: "/manus-storage/specialty-odontologia_95da952f.jpg", alt: "Avaliação odontológica de um cão" },
  { name: "Oftalmologia", image: "/manus-storage/specialty-oftalmologia_b02fd8fa.jpg", alt: "Exame oftalmológico veterinário em um gato" },
  { name: "Oncologia", image: "/manus-storage/specialty-oncologia_8a07ccb7.jpg", alt: "Veterinária acolhendo um cão durante uma consulta" },
  { name: "Ortopedia", image: "/manus-storage/specialty-ortopedia_f90cbc52.jpg", alt: "Avaliação ortopédica de um cão" },
];

const navItems = [
  ["A clínica", "#clinica"],
  ["Serviços", "#servicos"],
  ["Especialidades", "#especialidades"],
  ["Onde estamos", "#localizacao"],
];

function BrandMark() {
  return (
    <a className="brand" href="#inicio" aria-label="Vira Lata Vira Amor — início">
      <span className="brand-symbol" aria-hidden="true">
        <PawPrint size={24} strokeWidth={2.3} />
        <span className="brand-heart"><Heart size={10} fill="currentColor" /></span>
      </span>
      <span className="brand-wordmark"><strong>vira lata</strong><strong>vira amor<span>.</span></strong><small>CLÍNICA VETERINÁRIA & PET SHOP</small></span>
    </a>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="inicio">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <div className="topline">
        <div className="topline-inner">
          <span><MapPin size={13} /> Vila da Saúde · São Paulo</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Cuidado completo para o seu pet <ArrowUpRight size={13} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Navegação principal">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Agendar consulta <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-inner content-width">
            <div className="hero-copy reveal">
              <SectionEyebrow>SAÚDE, BEM-ESTAR E CARINHO</SectionEyebrow>
              <h1>Todo cuidado que seu pet merece.<br /><em>No mesmo lugar.</em></h1>
              <p className="hero-lede">Da consulta ao banho e tosa, um espaço para cuidar do seu melhor amigo com atenção em cada detalhe.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowUpRight size={17} /></a>
                <a className="text-link" href="#servicos">Conheça nossos serviços <ArrowRight size={16} /></a>
              </div>
              <div className="hero-note"><span className="note-paw"><PawPrint size={15} /></span><span><strong>Para cães e gatos</strong><small>Clínica veterinária · Estética · Pet shop</small></span></div>
            </div>
            <div className="hero-visual reveal">
              <div className="hero-photo-frame"><img src="/manus-storage/hero-pet-care_34022e40.jpg" alt="Cão e gato recebidos com carinho em uma consulta veterinária" fetchPriority="high" /></div>
              <div className="hero-photo-cutout" aria-hidden="true" />
              <div className="hero-stamp"><span className="stamp-icon"><Heart size={19} fill="currentColor" /></span><span>Amor em cada<br />cuidado.</span></div>
              <span className="hero-photo-caption">Um cuidado que faz bem — pra eles e pra você.</span>
            </div>
          </div>
          <div className="hero-bottom-rule" />
        </section>

        <section className="service-marquee" aria-label="Áreas de cuidado">
          <div className="marquee-inner content-width">
            <span><Stethoscope size={18} /> Clínica veterinária</span><i />
            <span><Scissors size={18} /> Estética animal</span><i />
            <span><ShoppingBag size={18} /> Pet shop</span><i />
            <span><Heart size={17} /> Carinho em cada visita</span>
          </div>
        </section>

        <section className="intro-section section-pad" id="clinica">
          <div className="content-width intro-grid">
            <div className="intro-art reveal">
              <div className="intro-image-main"><img src="/manus-storage/specialty-clinica-geral_ab906df9.jpg" alt="Veterinária em consulta com um cão" loading="lazy" /></div>
              <div className="intro-image-note"><PawPrint size={19} /><span>Bem-estar em todas<br />as fases da vida.</span></div>
              <div className="intro-orbit orbit-one" /><div className="intro-orbit orbit-two" />
            </div>
            <div className="intro-copy reveal">
              <SectionEyebrow>UM JEITO MAIS COMPLETO DE CUIDAR</SectionEyebrow>
              <h2>Pra quem é da família,<br />a gente cuida <em>como família.</em></h2>
              <p>A Vira Lata Vira Amor reúne atendimento veterinário, especialidades, estética animal e pet shop em um só lugar, na Vila da Saúde.</p>
              <p>Um espaço para cuidar da saúde e do bem-estar do seu pet com atenção, respeito e muito carinho — do jeitinho que ele merece.</p>
              <a className="underlined-link" href="#especialidades">Conheça a clínica <ArrowDownRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="team-section section-pad" id="equipe">
          <div className="content-width team-grid">
            <div className="team-copy reveal">
              <SectionEyebrow>QUEM CUIDA TAMBÉM FAZ PARTE DA FAMÍLIA</SectionEyebrow>
              <h2>Gente que cuida,<br /><em>junto, com carinho.</em></h2>
              <p>Por trás de cada atendimento, tem uma equipe que acredita que os pets fazem parte da família.</p>
              <p>Um time que trabalha lado a lado para receber cada pet com atenção e carinho.</p>
              <a className="underlined-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Acompanhe nosso dia a dia <Instagram size={16} /></a>
            </div>
            <a className="team-image-card reveal" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Ver a equipe da Vira Lata Vira Amor no Instagram">
              <img src="/manus-storage/team-message_d465614a.webp" alt="Equipe da Vira Lata Vira Amor reunida em frente à clínica, na arte ‘Juntas, somos mais fortes!’" loading="lazy" />
              <span className="team-image-caption"><Heart size={14} fill="currentColor" /> A equipe Vira Lata Vira Amor</span>
            </a>
          </div>
        </section>

        <section className="services-section section-pad" id="servicos">
          <div className="content-width">
            <div className="section-heading services-heading reveal">
              <div><SectionEyebrow>MAIS QUE UM BANHO</SectionEyebrow><h2>Um momento de cuidado.<br /><em>Do focinho ao rabinho.</em></h2></div>
              <p>Bem-estar também mora nos pequenos rituais. Conheça os cuidados de estética e as opções da nossa loja.</p>
            </div>
            <div className="services-feature reveal">
              <div className="services-photo"><img src="/manus-storage/service-banho-tosa_e1fc6740.jpg" alt="Cão cuidado com carinho depois do banho e tosa" loading="lazy" /><span className="photo-label">ESTÉTICA ANIMAL</span></div>
              <div className="services-detail">
                <span className="services-number">01 — 05</span>
                <h3>Bonito, confortável<br />e bem cuidado.</h3>
                <p>Banho, tosa e cuidados especiais para que cada visita seja tranquila e gostosa para o seu pet.</p>
                <div className="service-tags"><span>Banho e tosa</span><span>Estética animal</span><span>Cromoterapia</span><span>Musicoterapia</span><span>Pet shop</span></div>
                <a className="button button-light" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Pergunte à nossa equipe <ArrowUpRight size={16} /></a>
              </div>
              <div className="services-side-mark" aria-hidden="true"><Sparkles size={23} /></div>
            </div>
          </div>
        </section>

        <section className="specialties-section section-pad" id="especialidades">
          <div className="content-width">
            <div className="specialties-heading reveal">
              <div><SectionEyebrow>ATENÇÃO À SAÚDE, EM CADA ESPECIALIDADE</SectionEyebrow><h2>Um olhar atento<br />para cada <em>necessidade.</em></h2></div>
              <div className="specialties-aside"><p>Atendimento veterinário e especialidades para acompanhar a saúde do seu pet com o cuidado que cada caso pede.</p><a className="underlined-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Fale com a equipe <ArrowUpRight size={16} /></a></div>
            </div>
            <div className="specialty-grid">
              {specialties.map((item, index) => (
                <a className="specialty-tile reveal" key={item.name} href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label={`Consulte pelo WhatsApp sobre ${item.name}`} style={{ "--tile-delay": `${(index % 4) * 45}ms` } as CSSProperties}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="tile-shade" />
                  <span className="specialty-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="specialty-label">{item.name}<ArrowUpRight size={15} /></span>
                </a>
              ))}
            </div>
            <p className="specialties-footnote">Para informações sobre disponibilidade e agendamento de cada especialidade, fale com a nossa equipe.</p>
          </div>
        </section>

        <section className="care-band">
          <div className="content-width care-band-inner reveal">
            <div className="care-band-icon"><Heart size={24} fill="currentColor" /></div>
            <div className="care-band-copy"><span>UM SÓ LUGAR, MUITOS JEITOS DE CUIDAR</span><h2>Da consulta ao carinho.<br /><em>Estamos por perto.</em></h2></div>
            <a className="button button-dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Fale com a nossa equipe <ArrowUpRight size={17} /></a>
            <span className="care-band-squiggle" aria-hidden="true">♡</span>
          </div>
        </section>

        <section className="instagram-section section-pad">
          <div className="content-width instagram-inner reveal">
            <div className="instagram-mark"><Instagram size={25} /></div>
            <div><SectionEyebrow>UM POUQUINHO DO NOSSO DIA A DIA</SectionEyebrow><h2>O cuidado também aparece <em>por lá.</em></h2><p>Acompanhe a Vira Lata Vira Amor no Instagram.</p></div>
            <a className="button button-outline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@viralataviraamorpetshop <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="location-section section-pad" id="localizacao">
          <div className="content-width location-grid">
            <div className="location-copy reveal">
              <SectionEyebrow>NO BAIRRO, PERTINHO DE VOCÊ</SectionEyebrow>
              <h2>Um endereço de<br /><em>cuidado e confiança.</em></h2>
              <div className="location-address"><span className="location-icon"><MapPin size={20} /></span><div><strong>Vira Lata Vira Amor</strong><span>R. Itapiru, 719 — Vila da Saúde<br />São Paulo — SP · 04143-010</span></div></div>
              <a className="button button-primary" href={MAPS_URL} target="_blank" rel="noreferrer">Como chegar <ArrowUpRight size={16} /></a>
              <a className="location-phone" href="tel:+5511970920703"><Phone size={15} /> (11) 97092-0703</a>
            </div>
            <div className="location-visuals reveal">
              <div className="map-frame"><iframe title="Mapa da Vira Lata Vira Amor na Vila da Saúde" src="https://www.google.com/maps?q=Vira%20Lata%20Vira%20Amor%20Pet%20Shop%20e%20Cl%C3%ADnica%20Veterin%C3%A1ria%2C%20R.%20Itapiru%2C%20719%2C%20S%C3%A3o%20Paulo&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="map-open" href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Abrir localização no Google Maps"><ArrowUpRight size={18} /></a><span className="map-caption"><MapPin size={14} /> Vila da Saúde, São Paulo</span></div>
              <a className="storefront-card" href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Ver a fachada e abrir a localização no Google Maps">
                <img src="/manus-storage/storefront-location_7c2de670.webp" alt="Arte original da Vira Lata Vira Amor com a fachada da clínica e o endereço R. Itapiru, 719" loading="lazy" />
              </a>
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="content-width final-cta-inner reveal">
            <div className="final-cta-paw"><PawPrint size={26} /></div>
            <SectionEyebrow>VAMOS CUIDAR DE QUEM VOCÊ AMA?</SectionEyebrow>
            <h2>Seu pet merece<br /><em>esse cuidado.</em></h2>
            <p>Agende uma consulta ou fale com a nossa equipe para saber mais sobre os serviços.</p>
            <div className="final-cta-actions">
              <a className="button button-yellow" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowUpRight size={17} /></a>
              <a className="final-secondary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a>
              <a className="final-secondary" href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={17} /> Como chegar</a>
            </div>
            <span className="final-cta-sparkle sparkle-left" aria-hidden="true">✳</span><span className="final-cta-sparkle sparkle-right" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-top"><BrandMark /><p>Um cuidado de cada vez.<br /><span>Com carinho, em todas as fases da vida.</span></p><div className="footer-links"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} /></a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a><a href={MAPS_URL} target="_blank" rel="noreferrer">Como chegar <ArrowUpRight size={13} /></a></div></div>
        <div className="content-width footer-bottom"><span>© {new Date().getFullYear()} Vira Lata Vira Amor</span><span>Clínica Veterinária & Pet Shop · Vila da Saúde, São Paulo</span><a href="#inicio">Voltar ao início ↑</a></div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Fale com a Vira Lata Vira Amor pelo WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.01 3.2c-7.05 0-12.78 5.7-12.78 12.72 0 2.25.6 4.44 1.73 6.38L3.12 28.8l6.69-1.75a12.85 12.85 0 0 0 6.2 1.58h.01c7.04 0 12.77-5.7 12.78-12.72a12.6 12.6 0 0 0-3.75-9A12.73 12.73 0 0 0 16.01 3.2Zm0 23.27h-.01c-1.94 0-3.84-.52-5.5-1.5l-.4-.24-3.97 1.04 1.06-3.85-.26-.41a10.58 10.58 0 0 1-1.63-5.6c0-5.88 4.81-10.67 10.72-10.67 2.86 0 5.55 1.11 7.57 3.12a10.54 10.54 0 0 1 3.14 7.55c0 5.88-4.81 10.66-10.72 10.66Zm5.88-7.98c-.32-.16-1.91-.94-2.21-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.33-.16-1.38-.51-2.63-1.62-.97-.86-1.62-1.92-1.81-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.62-.53-.54-.72-.55l-.62-.01c-.21 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.67s1.16 3.1 1.32 3.31c.16.21 2.28 3.46 5.51 4.85.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.54.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z" /></svg>
      </a>
    </div>
  );
}
