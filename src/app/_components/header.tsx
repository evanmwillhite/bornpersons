import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-stone-800 hover:text-stone-600 transition-colors font-playfair">
              Born Persons
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Subscribe Button */}
          <div className="hidden md:flex">
            <button className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-stone-700 hover:text-stone-900 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
