import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                S
              </div>
              <span className="font-bold text-xl text-white">
                Sakura Pipe <span className="text-gray-300 block text-sm">Udhyog Pvt. Ltd.</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-xs text-sm">
              Strong Pipes. Strong Foundations. High-quality industrial manufacturing based in Nepal, trusted by local customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#products" className="text-gray-300 hover:text-accent transition-colors">Products</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Butwal-08, Rupandehi, Nepal</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>071-531659</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@sakurapipe.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sakura Pipe Udhyog Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
