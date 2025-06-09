const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Skyward</h3>
            <p className="text-slate-300">Elevating your journey to new heights.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
              <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">Stratus Program</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Lift Tier</a></li>
              <li><a href="#" className="hover:text-white transition">Glide Tier</a></li>
              <li><a href="#" className="hover:text-white transition">Soar Tier</a></li>
              <li><a href="#" className="hover:text-white transition">Program Rules</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">Support</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          © 2025 Skyward Airlines. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
