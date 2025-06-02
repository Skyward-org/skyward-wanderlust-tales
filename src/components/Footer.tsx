
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Stratus Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stratus Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Glide Membership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business Elite</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Corporate Travel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partner Airlines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Points & Miles</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Baggage Information</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Check-in Help</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Alerts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 1-800-SKYYYER</p>
              <p>✉️ help@skyyyer.com</p>
              <p>🌐 24/7 Live Chat</p>
              <div className="mt-4">
                <p className="font-semibold text-white">Follow Us</p>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                  <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 Skyyyer Airlines. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
