import Image from "next/image";
import heroImage from "../../public/kardi.png";
import { FaGithub, FaLinkedin, FaResearchgate } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-20 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold">Hi, I'm Ibrahim!</h1>
          <p className="mt-4 text-xl font-bold">
            Researcher | Full-Stack Developer | AI Enthusiast | WordPress Expert
            & Core Contributor
          </p>

          <p className="mt-4 text-lg mr-10">
            I have 6 years of experience in the Web development domain.I'm one
            of the Core Contributors of WordPress. I worked in multiple roles
            like backend & frontend both, plugin and theme development. Also, I
            have strong problem-solving abilities and proficiency in programming
            languages such as PHP, MySQL, and JavaScript. I developed many
            WooCommerce add-ons and WooCommerce , shopify websites. Also, I have
            research experience and strong interest in the field of AI and
            Machine Learning.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block bg-white text-purple-500 px-6 py-3 rounded-full"
          >
            Get in Touch
          </a>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/ibrahimkardi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/ibrahim-kardi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.researchgate.net/profile/Mohammad-Ibrahim-17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="ResearchGate"
            >
              <FaResearchgate size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src={heroImage}
            alt="Description of image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
