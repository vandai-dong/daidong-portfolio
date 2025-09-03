import { CgMailOpen } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2c323f] text-[#f5f5f5] py-8 text-center shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4 gap-10">
          <a
            href="https://github.com/vandai-dong"
            target="_blank"
            rel="noreferrer"
            className="text-4xl"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dai-dong-343954159/"
            target="_blank"
            rel="noreferrer"
            className="text-4xl"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
