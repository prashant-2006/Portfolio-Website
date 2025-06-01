import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/prashant-2006",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/prashant-sharma-61b0b8338",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/prashant2938sharma",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    href: "mailto:prashantsharma220806@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 px-6 transition-colors duration-300 scroll-mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent font-bold">
            Contact Me
          </span>
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Whether you&apos;re looking to collaborate on a project, need a frontend developer, or just want to network — feel free to reach out. I&apos;m always open to exciting opportunities and meaningful connections.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm bg-white dark:bg-gray-800 hover:bg-rose-600 dark:hover:bg-rose-600 text-black dark:text-white hover:text-white transition px-4 py-2 rounded-full shadow-md"
            >
              <span className="text-lg">{social.icon}</span>
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        <a
          href="mailto:prashantsharma220806@gmail.com"
          className="inline-block bg-rose-600 hover:bg-rose-500 text-white font-semibold py-3 px-8 rounded-full transition shadow-lg hover:shadow-rose-600/40"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
