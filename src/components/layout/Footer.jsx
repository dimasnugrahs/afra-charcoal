import { Link } from "react-router-dom";
import Logo from "./Logo";

// eslint-disable-next-line
import { motion } from "framer-motion";

export default function Footer() {
  const instagramUrl = "https://www.instagram.com/";
  const facebookUrl = "https://www.facebook.com/";
  const twitterUrl = "https://www.twitter.com/";

  return (
    <section className="grid grid-cols-1 pt-20 bg-company-400/20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex justify-center items-center">
          <Logo size="lg:w-15 w-10" />
          <h1 className="text-4xl font-bold ml-2">Afra Charcoal</h1>
        </div>
        <ul className="flex justify-center mt-10">
          <Link to="/" className="mx-4">
            Home
          </Link>
          <Link to="/about" className="mx-4">
            About
          </Link>
          <Link to="/product/charcoal" className="mx-4">
            Products
          </Link>
          <Link to="/contact" className="mx-4">
            Contact
          </Link>
        </ul>
        <div className="flex justify-center mt-4">
          <a href={instagramUrl} target="_blank" className="mx-4">
            <svg
              className="w-8 h-8 lg:w-12 lg:h-12 text-company-600 hover:text-company-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href={facebookUrl} target="_blank" className="mx-4">
            <svg
              className="w-8 h-8 lg:w-12 lg:h-12 text-company-600 hover:text-company-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href={twitterUrl} target="_blank" className="mx-4">
            <svg
              className="w-8 h-8 lg:w-12 lg:h-12 text-company-600 hover:text-company-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="mt-10 mb-2 border-t py-5">
          &copy; 2025 Afra. All rights reserved.
        </div>
      </motion.div>
    </section>
  );
}
