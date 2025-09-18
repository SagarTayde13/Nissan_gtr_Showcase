function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Logo / Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-widest">NISSAN GTR</h2>
          <p className="text-sm mt-2 text-gray-500">The Legend Reimagined</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-5">
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center mt-8 text-sm text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Nissan GTR. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
