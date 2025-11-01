export default function Navbar() {
  return (
    <div className="container mt-2 px-3">
      <nav className="d-flex align-items-center justify-content-between">
        <img src="/assets/images/AJ.svg" alt="aj logo" style={{ height: '40px' }} />
        <ul className="d-flex gap-4 list-unstyled m-0 p-0">
          <li>
            <a href="#hero" className="text-decoration-none" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#1a202c', fontWeight: '500', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; e.currentTarget.style.WebkitBackgroundClip = 'text'; e.currentTarget.style.WebkitTextFillColor = 'transparent'; e.currentTarget.style.backgroundClip = 'text'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.WebkitTextFillColor = 'initial'; e.currentTarget.style.color = '#1a202c'; }}>Home</a>
          </li>
          <li>
            <a href="#about-me" className="text-decoration-none" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#1a202c', fontWeight: '500', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; e.currentTarget.style.WebkitBackgroundClip = 'text'; e.currentTarget.style.WebkitTextFillColor = 'transparent'; e.currentTarget.style.backgroundClip = 'text'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.WebkitTextFillColor = 'initial'; e.currentTarget.style.color = '#1a202c'; }}>About</a>
          </li>
          <li>
            <a href="#project" className="text-decoration-none" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#1a202c', fontWeight: '500', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; e.currentTarget.style.WebkitBackgroundClip = 'text'; e.currentTarget.style.WebkitTextFillColor = 'transparent'; e.currentTarget.style.backgroundClip = 'text'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.WebkitTextFillColor = 'initial'; e.currentTarget.style.color = '#1a202c'; }}>Projects</a>
          </li>
        </ul>
      </nav>
      <hr className="mt-3" />
    </div>
  );
}
