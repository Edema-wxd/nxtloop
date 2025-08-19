import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 py-12 section-reveal border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 stagger-animation">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Nestloop"
                width={120}
                height={120}
              />
            </div>
            <p className="text-slate-600 mb-4">
              Empowering caregivers with smart, trauma-informed care tools for
              children&apos;s homes and foster carers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-600 hover:text-slate-800 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="text-slate-600 hover:text-slate-800 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="hidden">
            <h3 className="font-semibold mb-4 text-slate-800">Services</h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Residential Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Foster Care Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Hourly Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Overnight Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Respite Care
                </a>
              </li>
            </ul>
          </div>

          {/* For Carers */}
          <div className="hidden">
            <h3 className="font-semibold mb-4 text-slate-800">For Carers</h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Find Care Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Why Work with Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Training & Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-800 transition-colors">
                  Upload CV
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-800">Resources</h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a
                  href="/founders"
                  className="hover:text-slate-800 transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact-us"
                  className="hover:text-slate-800 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-slate-600 text-sm">
              © 2025 Nestloop. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="/privacy-policy"
                className="text-slate-600 hover:text-slate-800 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-slate-600 hover:text-slate-800 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="hidden items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#f4b75a]/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-[#f4b75a]">CQC</span>
              </div>
              <span className="text-xs text-slate-600">CQC Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#f8845b]/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-[#f8845b]">GDPR</span>
              </div>
              <span className="text-xs text-slate-600">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
