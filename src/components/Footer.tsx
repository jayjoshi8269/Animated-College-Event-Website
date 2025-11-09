import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🚀</span>
              <span className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Roket
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Making College Events Fly Beyond Imagination.
              Professional event management for festivals,
              fests, and technical events.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Services",
                "Events",
                "Team",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-cyan-400" />
                <span>genesis2k25scsit@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-cyan-400" />
                <span>+91 9575609213</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin size={20} className="text-cyan-400" />
                <span>SCSIT DAVV Indore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Roket Event Management. All rights
              reserved.
            </p>

            <motion.a
              href="#admin"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-800 border border-cyan-500/50 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all"
            >
              🔐 Admin Login
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}