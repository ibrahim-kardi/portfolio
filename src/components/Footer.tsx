// components/Footer.js
import { FaGithub, FaLinkedin, FaWordpress } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6">
      <div className="container mx-auto text-center">
        {/* Social Links */}
        <div className="mb-4 flex justify-center space-x-6">
          <a
            href="https://github.com/ibrahim-kardi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ibrahimkardi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://profiles.wordpress.org/kardi420/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition-colors"
            aria-label="Wordpress"
          >
            <FaWordpress size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Ibrahim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
