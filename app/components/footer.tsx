import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              Welcome to Blog Website, your go-to source for insightful articles, updates, and inspiration. We aim to create a community that values knowledge and creativity.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm block mb-2">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm block mb-2">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm block mb-2">Contact</Link>
              </li>
              <li>
                <Link href="/explore" className="text-gray-400 hover:text-white text-sm block mb-2">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/muskan-siraj-ba72632ba"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.3 0H2.7C1.2 0 0 1.2 0 2.7v18.6C0 22.8 1.2 24 2.7 24h18.6c1.5 0 2.7-1.2 2.7-2.7V2.7C24 1.2 22.8 0 21.3 0zM7.6 20H4.6V9h3v11h0zm-1.5-13h-1.8c-.7 0-1.2-.6-1.2-1.3s.6-1.3 1.3-1.3 1.2.6 1.2 1.3c0 .7-.6 1.3-1.3 1.3zm15.5 13h-3v-5.4c0-1.3-.5-2.2-1.6-2.2-.9 0-1.5.6-1.7 1.3-.1.2-.1.5-.1.7v5.6h-3v-11h3v1.5h.1c.4-.7 1.3-1.2 2.4-1.2 1.7 0 3 1.1 3 3.6v7.1z" />
                </svg>
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/muskansirajkhan"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.9 8.1 11.5.6.1.8-.3.8-.6v-2c-3.3.7-4.1-1.6-4.1-1.6-.6-1.6-1.4-2-1.4-2-1.1-.8.1-.8.1-.8 1.3 0 2 1.3 2 1.3 1.4 2.4 3.8 1.7 4.7 1.3.1-.9.5-1.7.9-2.1-3-.3-6.1-1.5-6.1-6.3 0-1.4.5-2.5 1.3-3.3-.1-.3-.6-1.7.1-3.5 0 0 1-.3 3.2 1.3 1-.3 2.1-.5 3.2-.5s2.2.2 3.2.5c2.2-1.6 3.2-1.3 3.2-1.3.7 1.8.2 3.2.1 3.5.8.8 1.3 1.9 1.3 3.3 0 4.8-3.1 5.9-6.1 6.3.4.4.8 1.1.8 2.1v2.6c0 .4.2.8.8.6 4.7-1.6 8.1-6.2 8.1-11.5 0-6.6-5.4-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Blog Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

  