import Image from "next/image";
import fs from "fs";
import path from "path";

interface ContributionCardProps {
  title: string;
  project: string;
  role: string;
  date: string;
  description: string;
  pullRequestLink: string;
  imageUrl: string;
}

const doesFileExist = (filePath: string): boolean => {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

const ContributionCard = ({
  title,
  project,
  role,
  date,
  description,
  pullRequestLink: projectLink,
  imageUrl,
}: ContributionCardProps) => {
  const imagePath = path.join(process.cwd(), "public", imageUrl);
  const imageExists = doesFileExist(imagePath);

  return (
    <div className="max-w-md text-center mx-auto h-full border-2 rounded-md border-input bg-card shadow-sm hover:text-accent-foreground overflow-hidden p-4 hover:border-blue-500 transition-colors duration-300 flex flex-col">
      <div className="flex-grow">
        <Image
          src={imageExists ? imageUrl : "/logo.svg"}
          alt={`${title} preview`}
          width={480}
          height={360}
          className="w-full object-cover"
        />
        <h2 className="text-xl font-bold text-card-foreground">{title}</h2>
        <p className="text-sm text-gray-600">Project: {project}</p>
        <p className="text-sm text-gray-600">Role: {role}</p>
        <p className="text-sm text-gray-600">Date: {date}</p>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="mt-auto items-center justify-center">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline block"
        >
          View Pull Request
        </a>
      </div>
    </div>
  );
};

export default ContributionCard;
