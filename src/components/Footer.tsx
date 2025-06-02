
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Press</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Investor Relations</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Sustainability</a></li>
            </ul>
          </div>

          {/* Stratus Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Stratus Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Glide Membership</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Business Elite</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Corporate Travel</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Partner Airlines</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Points & Miles</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Customer Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Baggage Information</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Check-in Help</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Travel Alerts</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">Accessibility</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-3 text-slate-400">
              <p className="text-lg">📞 1-800-SKYWARD</p>
              <p className="text-lg">✉️ help@skyward.com</p>
              <p className="text-lg">🌐 24/7 Live Chat</p>
              <div className="mt-6">
                <p className="font-semibold text-white text-lg">Follow Us</p>
                <div className="flex space-x-6 mt-3">
                  <a href="#" className="text-slate-400 hover:text-white text-lg">Facebook</a>
                  <a href="#" className="text-slate-400 hover:text-white text-lg">Twitter</a>
                  <a href="#" className="text-slate-400 hover:text-white text-lg">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-lg">&copy; 2024 Skyward Airlines. All rights reserved.</p>
            <div className="flex space-x-8 mt-3 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-lg">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-lg">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-lg">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
