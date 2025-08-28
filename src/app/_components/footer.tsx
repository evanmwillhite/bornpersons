import Link from "next/link";
import { getAllTags } from "@/lib/api";

export function Footer() {
  const allTags = getAllTags();

  return (
    <footer className="bg-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Born Persons</h3>
            <p className="text-stone-200 mb-6 max-w-md">
              Where Charlotte Mason and Catholicism meet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-stone-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/blog" className="text-stone-200 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-stone-200 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-stone-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {allTags.map((tag) => (
                <li key={tag}>
                  <Link 
                    href={`/blog?tag=${encodeURIComponent(tag)}`} 
                    className="text-stone-200 hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 mt-12 pt-8 text-center">
          <p className="text-stone-300">
            © 2025 Born Persons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
