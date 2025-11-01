export default function About() {
  return (
    <section id="about-me" className="mt-4 mb-4" style={{ background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.15) 100%)', backdropFilter: 'blur(10px)' }}>
      <div className="container px-3 py-4">
        <div className="row align-items-start g-4">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3">
              <h2 className="m-0" style={{ fontFamily: 'Share Tech Mono, monospace' }}>Hey there!</h2>
              <div className="d-flex align-items-center gap-2 mt-2 mt-md-0 ms-md-4">
                <h2 className="m-0" style={{ fontFamily: 'Share Tech Mono, monospace' }}>Status:</h2>
                <span className="badge rounded-pill text-bg-secondary">Writing code that may or may not work</span>
              </div>
            </div>
            <p className="mt-3 mb-0 pe-md-5" style={{ maxWidth: '720px' }}>
              I’m a Web developer, continuously diving into new skills through online courses to stay on top of the latest tech. My goal is to bring fresh ideas and technical expertise to every project, creating digital experiences that make a meaningful impact.
            </p>
          </div>

          <div className="col-12">
            <h2 className="mt-3 mb-2" style={{ fontFamily: 'Share Tech Mono, monospace', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Technical Skills</h2>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="d-flex flex-column gap-3">
                  <div className="p-3 bg-white rounded-3 shadow-sm border-start" style={{ borderLeft: '4px solid #667eea' }}>
                    <div className="fw-semibold text-uppercase small text-secondary">Front-End Development</div>
                    <div className="mt-2 d-flex flex-wrap gap-2">
                      <span className="badge text-bg-light border">HTML5</span>
                      <span className="badge text-bg-light border">CSS</span>
                      <span className="badge text-bg-light border">JavaScript</span>
                      <span className="badge text-bg-light border">TypeScript</span>
                      <span className="badge text-bg-light border">ReactJS</span>
                      <span className="badge text-bg-light border">Next.js</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-3 shadow-sm border-start" style={{ borderLeft: '4px solid #667eea' }}>
                    <div className="fw-semibold text-uppercase small text-secondary">Back-End Development</div>
                    <div className="mt-2 d-flex flex-wrap gap-2">
                      <span className="badge text-bg-light border">Node.js</span>
                      <span className="badge text-bg-light border">Express.js</span>
                      <span className="badge text-bg-light border">Laravel (PHP)</span>
                      <span className="badge text-bg-light border">Python</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-3 shadow-sm border-start" style={{ borderLeft: '4px solid #667eea' }}>
                    <div className="fw-semibold text-uppercase small text-secondary">Databases</div>
                    <div className="mt-2 d-flex flex-wrap gap-2">
                      <span className="badge text-bg-light border">MySQL</span>
                      <span className="badge text-bg-light border">PostgreSQL</span>
                      <span className="badge text-bg-light border">SQL Server</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex flex-column gap-3">
                  <div className="p-3 bg-white rounded-3 shadow-sm border-start" style={{ borderLeft: '4px solid #667eea' }}>
                    <div className="fw-semibold text-uppercase small text-secondary">UI Frameworks & Libraries</div>
                    <div className="mt-2 d-flex flex-wrap gap-2">
                      <span className="badge text-bg-light border">Tailwind CSS</span>
                      <span className="badge text-bg-light border">Bootstrap</span>
                      <span className="badge text-bg-light border">Material UI</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-3 shadow-sm border-start" style={{ borderLeft: '4px solid #667eea' }}>
                    <div className="fw-semibold text-uppercase small text-secondary">Version Control & Collaboration</div>
                    <div className="mt-2 d-flex flex-wrap gap-2">
                      <span className="badge text-bg-light border">Git</span>
                      <span className="badge text-bg-light border">GitHub</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-3 shadow-sm border-start" style={{ borderLeft: '4px solid #667eea' }}>
                    <div className="fw-semibold text-uppercase small text-secondary">Web Tools & Workflow</div>
                    <div className="mt-2 d-flex flex-wrap gap-2">
                      <span className="badge text-bg-light border">RESTful APIs</span>
                      <span className="badge text-bg-light border">JSON</span>
                      <span className="badge text-bg-light border">npm</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
