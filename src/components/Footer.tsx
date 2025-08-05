export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 py-12 section-reveal border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 stagger-animation">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-slate-800">Nestloop</span>
            </div>
            <p className="text-slate-600">
              Empowering caregivers with smart, trauma-informed care tools.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-800">Product</h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Pricing
                </a>
              </li>
              
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-800">Support</h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-800">Company</h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  About
                </a>
              </li>
            
            
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">
            © 2024 Nestloop. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
