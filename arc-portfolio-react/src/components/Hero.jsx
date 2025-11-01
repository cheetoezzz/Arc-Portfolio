export default function Hero() {
  return (
    <section id="hero" className="mt-5">
      <div className="container px-3">
        <div className="d-flex">
          <div className="small" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
            <p className="mb-0">
              &lt;!DOCTYPE html&gt;<br />
              &lt;html lang=\"en\"&gt;<br />
              &lt;head&gt;<br />
              &lt;/head&gt;<br />
              &lt;body&gt;
            </p>
          </div>
        </div>
      </div>

      <div className="container px-3 mt-2">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column align-items-start gap-3 flex-md-row align-items-md-center">
            <img
              src="/assets/images/profile.jpg"
              alt="profile picture"
              className="shadow"
              style={{
                height: '350px',
                border: '5px solid transparent',
                borderRadius: '50px',
                boxShadow: '0px 10px 30px rgba(102, 126, 234, 0.4)',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box'
              }}
            />
            <div className="d-flex flex-column">
              <h1 className="fw-bold ms-0 ms-md-4" style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '4rem', color: '#000' }}>Hello_</h1>
              <p className="ms-0 ms-md-4 pt-3 fs-5 fw-light mb-2">
                I'm <span className="text-dark" style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '2.5rem', fontWeight: '600' }}>Arc John Torralba</span>, <br />
                and I'm a <span className="text-dark" style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '2.5rem', fontWeight: '600' }}> Web Developer</span>

              </p>
              <ul className="d-flex list-unstyled gap-3 ms-0 ms-md-4 mt-2">
                <li>
                  <a href="https://www.linkedin.com/in/arcjohntorralba/" target="_blank"><img src="/assets/images/linkedin.svg" alt="linkedin" width="40" height="40" /></a>
                </li>
                <li>
                  <a href="https://github.com/cheetoezzz" target="_blank"><img src="/assets/images/github.svg" alt="github" width="40" height="40" /></a>
                </li>
                <li>
                  <a href="https://www.facebook.com/arcjohn.torralba" target="_blank"><img src="/assets/images/facebook.svg" alt="facebook" width="40" height="40" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-3 mt-4">
        <div className="d-flex">
          <div className="small" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
            <p className="mb-0">&lt;/body&gt;<br />&lt;/html&gt;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
