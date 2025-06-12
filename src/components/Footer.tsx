const Footer = () => {
  return (
    <footer className="bg-bg-darker border-t border-border-gray/20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-accent text-xl font-bold mb-4">The Founder's Audit</h3>
            <p className="text-text-light mb-4 max-w-md">
              Elite peer boards for visionary founders. Join a community of exceptional entrepreneurs committed to growth and excellence.
            </p>
          </div>
          <div>
            <h4 className="text-text-light font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#why-it-works" className="text-text-muted hover:text-accent transition-colors">About</a>
              </li>
              <li>
                <a href="#process" className="text-text-muted hover:text-accent transition-colors">Process</a>
              </li>
              <li>
                <a href="#apply" className="text-text-muted hover:text-accent transition-colors">Apply</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-text-light font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-text-muted">
                <a href="mailto:Wilmer@balthazarproject.com" className="hover:text-accent transition-colors">
                  Wilmer@balthazarproject.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border-gray/20">
          <p className="text-text-muted text-sm text-center">
            © {new Date().getFullYear()} The Founder's Audit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 