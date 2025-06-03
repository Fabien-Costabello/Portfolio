import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed top-1/3 left-0 flex flex-col gap-4 p-2 z-50">
      <a
        href="https://github.com/Fabien-Costabello"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 text-white p-2 rounded-r hover:bg-gray-700 transition"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/fabien-costabello"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-500 transition"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}
