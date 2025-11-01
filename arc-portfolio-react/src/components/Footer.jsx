export default function Footer() {
  return (
    <div className="container mt-5 px-3">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="d-flex align-items-center gap-2 text-secondary">
          <img src="/assets/images/AJ.svg" alt="" style={{ height: '24px' }} />
          <span> 2024</span>
        </div>
        <ul className="nav justify-content-end list-unstyled d-flex gap-3 m-0">
          <li><a className="text-secondary" href="https://www.linkedin.com/in/arcjohntorralba/" target="_blank"><img src="/assets/images/linkedin.svg" alt="linkedin" width="24" height="24" /></a></li>
          <li><a className="text-secondary" href="https://github.com/cheetoezzz" target="_blank"><img src="/assets/images/github.svg" alt="github" width="24" height="24" /></a></li>
          <li><a className="text-secondary" href="https://www.facebook.com/arcjohn.torralba" target="_blank"><img src="/assets/images/facebook.svg" alt="facebook" width="24" height="24" /></a></li>
        </ul>
      </footer>
    </div>
  );
}
