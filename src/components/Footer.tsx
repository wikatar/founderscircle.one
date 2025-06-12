const Footer = () => {
  return (
    <footer className="bg-bg-darker border-t border-border-gray/20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-accent text-xl font-bold mb-4">The Founder's Audit</h3>
            <p className="text-text-light mb-4 max-w-md">
              Elite peer boards for visionary founders. Join a community of exceptional entrepreneurs committed to growth and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/founderscircle" className="text-text-muted hover:text-accent transition-colors" aria-label="Follow us on Twitter">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/founderscircle" className="text-text-muted hover:text-accent transition-colors" aria-label="Follow us on LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
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
              <li>
                <a href="mailto:hello@foundersaudit.com" className="text-text-muted hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-text-light font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-text-muted">
                <a href="mailto:hello@foundersaudit.com" className="hover:text-accent transition-colors">
                  hello@foundersaudit.com
                </a>
              </li>
              <li className="text-text-muted">
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
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