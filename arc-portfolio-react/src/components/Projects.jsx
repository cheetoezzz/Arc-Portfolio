export default function Projects() {
  return (
    <section id="project" className="mt-4">
      <div className="container px-3">
        <div className="pt-5">
          <h2 style={{ fontFamily: 'Share Tech Mono, monospace', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Projects:</h2>
          <p>Here are some projects I worked on.</p>
        </div>

        <div className="row justify-content-center g-4 py-4">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card shadow-sm" style={{ border: 'none', borderTop: '4px solid transparent', background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'; }}>
              <img className="card-img-top" src="/assets/images/lap.PNG" alt="LAP IT" />
              <div className="card-body">
                <h5 className="card-title">LAP I.T Landing Page</h5>
                <p className="card-text">Landing page for LAP I.T. Solutions, built with Next.js, TypeScript, and Tailwind CSS.</p>
                <a href="https://lap-it-landingpage-58eh.vercel.app/" target="_blank" className="btn" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', color: 'white', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Visit</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="card shadow-sm" style={{ border: 'none', borderTop: '4px solid transparent', background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'; }}>
              <img className="card-img-top" src="/assets/images/btrees.PNG" alt="Blossom Trees" />
              <div className="card-body">
                <h5 className="card-title">Blossom Trees Test Site</h5>
                <p className="card-text">Test site for a company that provides services for cannabis brands. <span className="fw-bold">HTML/CSS</span></p>
                <a href="#" className="btn" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', color: 'white', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Visit</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="card shadow-sm" style={{ border: 'none', borderTop: '4px solid transparent', background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'; }}>
              <img className="card-img-top" src="/assets/images/moveit.PNG" alt="MoveIt" />
              <div className="card-body">
                <h5 className="card-title">Moving Company Website</h5>
                <p className="card-text">Used Bootstrap to create a responsive website for a moving company.</p>
                <a href="#" className="btn" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', color: 'white', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Visit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
