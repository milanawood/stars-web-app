import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed inset-0 bg-eggshell bg-cover bg-center z-30 transition-transform transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ backgroundImage: 'url(/path/to/background-texture.png)' }}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggle} className="text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-6 mt-10">
        <Link href="/about" className="text-xl text-gray-700 hover:text-gray-900" onClick={toggle}>
          About Us
        </Link>
        <Link href="/careers" className="text-xl text-gray-700 hover:text-gray-900" onClick={toggle}>
          Careers
        </Link>
        <Link href="/news" className="text-xl text-gray-700 hover:text-gray-900" onClick={toggle}>
          News
        </Link>
        <Link href="/faq" className="text-xl text-gray-700 hover:text-gray-900" onClick={toggle}>
          FAQ
        </Link>
        <Link href="/freepizza" className="text-xl text-gray-700 hover:text-gray-900" onClick={toggle}>
          Free Pizza
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;