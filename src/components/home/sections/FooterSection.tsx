"use client";

export default function FooterSection() {
  return (
    <footer className="bg-black text-white py-16 lg:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="text-4xl lg:text-5xl font-bold text-lime-400 mb-8 lg:mb-0">DEVLOP.ME</div>
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-2xl lg:text-3xl font-bold">As you can</div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Say Hello */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">Say hello</h3>
            <div className="space-y-3">
              <a
                href="mailto:HELLO@DEVLOP-ME.COM"
                className="block text-white hover:text-lime-400 transition-colors text-sm"
              >
                HELLO@DEVLOP-ME.COM
              </a>
              <a
                href="mailto:MAHBUBUL@DEVLOP-ME.COM"
                className="block text-white hover:text-lime-400 transition-colors text-sm"
              >
                MAHBUBUL@DEVLOP-ME.COM
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Call</h4>
              <div className="space-y-2">
                <a href="tel:+794549498100" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  +794549 4981 00
                </a>
                <a href="tel:+88451400911" className="block text-white hover:text-lime-400 transition-colors text-sm">
                  +8845 1400 911
                </a>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">Menu</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                HOME
              </a>
              <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                ABOUT
              </a>
              <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                PORTFOLIO
              </a>
              <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                BLOG
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">Social</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                TWITTER
              </a>
              <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                INSTAGRAM
              </a>
              <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                FACEBOOK
              </a>
              <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                BEHANCE
              </a>
              <a href="#" className="block text-white hover:text-lime-400 transition-colors text-sm">
                DRIBBBLE
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-16 pt-8 border-t border-gray-800">
          <div className="text-white font-bold text-lg mb-4 lg:mb-0">BESNIK</div>
          <div className="flex items-center space-x-6 text-gray-400 text-sm">
            <span>© devlop.me {new Date().getFullYear()}</span>
            <a href="#" className="hover:text-white transition-colors">
              PRIVACY
            </a>
            <span>-</span>
            <a href="#" className="hover:text-white transition-colors">
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
