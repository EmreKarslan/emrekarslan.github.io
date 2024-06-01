import LinkableClipboardButton from "@/components/linkable-clipboard-button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t shadow-sm text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <LinkableClipboardButton
          href="mailto:kucukarslanemre@gmail.com"
          title="Email"
          value="kucukarslanemre@gmail.com"
        />
        <LinkableClipboardButton
          href="tel:+905309518948"
          title="Phone"
          value="+905309518948"
        />
        <div className="mt-2 flex justify-center space-x-4 items-center">
          <a
            href="https://www.linkedin.com/in/EmreKarslan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            <LinkedInLogoIcon className="w-10 h-10" />
          </a>
          <text className="text-5xl font-thin text-gray-200 dark:text-gray-700">
            /
          </text>

          <a
            href="https://github.com/EmreKarslan"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-400 hover:text-blue-500"
          >
            <GitHubLogoIcon className="w-10 h-10" />
          </a>
          <text className="text-5xl font-thin text-gray-200 dark:text-gray-700">
            /
          </text>
          <a
            href="https://twitter.com/cihat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            <TwitterLogoIcon className="w-10 h-10" />
          </a>
        </div>
        <p className="mt-4">
          Copyright &copy;{new Date().getFullYear()} Emre KUCUKARSLAN. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};
