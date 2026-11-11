const projects = [
  { name: "GIBrain", type: "FULL-STACK DEVELOPER & AI INTEGRATION", description: "Platform evaluasi critical thinking berbasis AI untuk siswa, guru, dan administrator sekolah…", tags: ["React 19", "FastAPI", "Supabase", "+3"] },
  { name: "CIRCULAI", type: "FULL-STACK MOBILE DEVELOPER — TEAM PROJECT", description: "Ekosistem circular fashion yang menghubungkan masyarakat, material fashion bernilai guna, dan…", tags: ["React Native", "Expo", "Supabase", "+3"] },
  { name: "SID", type: "FULL-STACK DEVELOPER", description: "Sistem Informasi Desa (SID). Platform untuk mengelola dan menyajikan informasi desa secara", tags: ["React", "Next.js", "Tailwind CSS"] },
];

const certificates = [
  ["Juara III Nasional App Development — IT FEST", "UIN K.H. Abdurrahman Wahid Pekalongan", "2026"],
  ["Juara 3 National Essay Competition", "National Essay Competition", "2025"],
  ["Python Programming", "Dicoding", "2025"],
  ["Machine Learning", "Dicoding", "2025"],
  ["Dasar AI", "Dicoding", "2024"],
  ["Pemrograman Web", "Dicoding", "2025"],
];

const principles = [
  ["01", "Learn with purpose", "Mempelajari fondasi engineering, memahami masalah, lalu mengubahnya menjadi solusi yang jelas."],
  ["02", "Build useful things", "Membangun produk digital yang fungsional, responsif, dan mudah digunakan."],
  ["03", "Grow every day", "Menjadi 1% lebih baik dari kemarin lewat konsistensi, feedback, dan proses yang terus diperbaiki."],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home"><span className="monogram">AAS</span><span>Adi Arwan Syah</span></a>
        <nav aria-label="Navigasi utama"><a className="active" href="#home">Home</a><a href="#projects">Projects</a><a href="#certificates">Certificates</a><a href="#contact">Contact</a></nav>
        <a className="resume" href="https://adiarwnsyh.my.id/Adi-Arwan-Syah-Resume.html"><img className="ui-icon" src="/icons/figma-164-175.svg" alt="" />Resume</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="intro">
            <span className="availability"><i />Open to collaboration</span>
            <h1>Hi, I&apos;m<br /><strong>Adi Arwan<br />Syah</strong></h1>
            <p className="intro-copy">Mahasiswa Sistem Informasi dengan minat pada software engineering.</p>
            <div className="mantra"><p>Be 1% better than yesterday,<br />and trust the process.</p><div className="chips"><a href="#projects">Learn</a><a href="#certificates">Tech</a><a href="#contact">Grow</a></div></div>
          </div>
          <div className="portrait" aria-hidden="true"><div className="social"><a href="https://github.com/wannnn27" aria-label="GitHub"><img src="/icons/figma-164-150.svg" alt="" /></a><a href="https://www.linkedin.com/in/adi-arwan-syah/" aria-label="LinkedIn"><img src="/icons/figma-164-156.svg" alt="" /></a><a href="https://www.instagram.com/adi.arwnsyhhh/" aria-label="Instagram"><img src="/icons/figma-164-162.svg" alt="" /></a></div></div>
          <div className="hero-aside"><h2>Information Systems Student focused on Software Engineering</h2><p>Berorientasi pada pengembangan solusi digital yang clean, scalable, dan user-friendly melalui pendekatan software engineering yang terstruktur.</p><a className="primary-button" href="#projects">↗ &nbsp;View Projects</a><a className="secondary-button" href="#contact">Get In Touch</a><div className="stats"><span><b>9</b> Projects</span><span><b>11</b> Certificates</span><span><b>2×</b> Competition Winner</span></div></div>
        </div>
      </section>

      <section className="growth">
        <div className="section-container growth-layout"><div><h2>Learn. Build.<br />Grow.</h2><p>Prinsip sederhana yang menjaga setiap proses tetap terarah, berguna, dan terus berkembang.</p></div><div className="principles">{principles.map(([n,title,copy]) => <article className="principle" key={n}><div className="principle-top"><span>{n}</span><i /></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>

      <section className="projects section" id="projects"><div className="section-container">
        <div className="section-heading"><Eyebrow>What I&apos;ve Built</Eyebrow><h2>Portfolio Showcase</h2><p>Projects, certifications, and technical skills, each one a step forward in my engineering journey.</p></div>
        <div className="tabs" aria-label="Portfolio categories"><a className="selected" href="#project-list"><img className="ui-icon" src="/icons/figma-164-92.svg" alt="" />Projects</a><a href="#certificates"><img className="ui-icon" src="/icons/figma-164-105.svg" alt="" />Certificates</a><a href="#tech-stack"><img className="ui-icon" src="/icons/figma-164-115.svg" alt="" />Tech Stack</a></div>
        <div className="toolbar"><label className="search"><img className="ui-icon" src="/icons/figma-164-119.svg" alt="" /><input aria-label="Search projects" placeholder="Search projects or technology..." /></label><div className="filters"><button type="button">All <small>9</small></button><button type="button">Web <small>4</small></button><button type="button">ML <small>3</small></button><button type="button">Mobile <small>2</small></button></div></div>
        <div className="result-count">9 projects</div>
        <div className="project-gallery" id="project-list">{projects.map((project) => <article className="project-card" key={project.name}><div className="project-art" aria-hidden="true" /><div className="project-info"><span className="badge">{project.name === "CIRCULAI" ? "MOBILE APP" : "WEB APP"}</span><h3>{project.name}</h3><p className="project-kind">{project.type}</p><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-bottom">{project.name === "GIBrain" ? <><a href="https://gibrain.vercel.app/">Live Demo ↗</a><span>Case Study ↗</span></> : project.name === "CIRCULAI" ? <><a href="https://github.com/wannnn27/circulai">Source Code ↗</a><span>Case Study ↗</span></> : <><a href="https://sid-neon-sigma.vercel.app/">Live Demo ↗</a><span>Case Study ↗</span></>}</div></div></article>)}</div>
      </div></section>

      <section className="certificates section" id="certificates"><div className="section-container"><div className="section-heading"><Eyebrow>Achievements</Eyebrow><h2>Certificates &amp; Credentials</h2><p>A curated record of competitions, technical learning, and milestones that shaped my work.</p></div><div className="certificate-grid">{certificates.map(([title,issuer,year]) => <article className="certificate" key={title}><div className="certificate-art" aria-hidden="true" /><div className="certificate-caption"><h3>{title}</h3><p>{issuer} <span>•</span> {year}</p></div></article>)}</div><div className="certificate-footer"><span>Showing 6 of 11 credentials</span><a href="#certificates">View all certificates</a></div></div></section>

      <section className="contact section" id="contact"><div className="section-container"><div className="section-heading"><Eyebrow>Get In Touch</Eyebrow><h2>Let&apos;s work together.</h2></div><div className="contact-grid"><div className="contact-copy"><h3>Open to internships, collaborations &amp; projects.</h3><p>Whether you have an idea to explore, a project to collaborate on, or just want to connect — I&apos;m always happy to hear from you.</p><a className="contact-card" href="mailto:adiarwansyahh@gmail.com"><span className="contact-icon"><img src="/icons/email.png" alt="" /></span><span><small>EMAIL</small><b>adiarwansyahh@gmail.com</b></span></a><a className="contact-card" href="https://wa.me/6281515765980"><span className="contact-icon"><img src="/icons/whatsapp.png" alt="" /></span><span><small>WHATSAPP</small><b>+62 815-1576-5980</b></span></a><a className="contact-card" href="https://www.linkedin.com/in/adi-arwan-syah/"><span className="contact-icon"><img src="/icons/linkedin.png" alt="" /></span><span><small>LINKEDIN</small><b>Adi Arwan Syah</b></span></a></div><form className="contact-form" action="mailto:adiarwansyahh@gmail.com" method="post" encType="text/plain"><label>Your Name<input name="name" placeholder="Adi Arwan Syah" /></label><label>Email Address<input name="email" type="email" placeholder="recruiter@example.com" /></label><label>Message<textarea name="message" maxLength={1000} placeholder="Tell me about your project or idea..." /></label><button type="submit">➤ &nbsp;Send Message</button></form></div></div></section>

      <footer className="footer"><div className="section-container"><div className="footer-top"><div className="footer-brand"><a className="brand" href="#home"><span className="monogram">AAS</span><span>Adi Arwan Syah</span></a><p>Mahasiswa Sistem Informasi &amp; pengembang perangkat lunak. Mengembangkan inovasi melalui kode, data, dan rasa ingin tahu.</p></div><div><h2>Navigation</h2><a href="#home">Home</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div><div><h2>Connect</h2><div className="social footer-social"><a href="https://github.com/wannnn27" aria-label="GitHub"><img src="/icons/figma-164-150.svg" alt="" /></a><a href="https://www.linkedin.com/in/adi-arwan-syah/" aria-label="LinkedIn"><img src="/icons/figma-164-156.svg" alt="" /></a><a href="https://www.instagram.com/adi.arwnsyhhh/" aria-label="Instagram"><img src="/icons/figma-164-162.svg" alt="" /></a></div></div></div><p className="copyright">© 2026 Adi Arwan Syah</p></div></footer>
    </main>
  );
}
