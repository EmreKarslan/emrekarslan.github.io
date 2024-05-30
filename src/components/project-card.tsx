import Image from "next/image";
import fs from "fs";
import path from "path";
import { Project } from "@/constants/projects";
import { TechStackIcons } from "./tech-stack-icons";
import Link from "next/link";

const doesFileExist = (filePath: string): boolean => {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

const ProjectCard = ({
  jobTitle,
  projectName,
  roleDescription,
  contributionDate,
  responsibilities,
  techStack,
  sourceCodeLink,
  previewImageUrl,
}: Project) => {
  const imagePath = path.join(process.cwd(), "public", previewImageUrl || "");
  const imageExists = doesFileExist(imagePath);

  return (
    <div className="max-w-md text-center mx-auto h-full border-2 rounded-md border-input bg-card shadow-sm hover:text-accent-foreground overflow-hidden p-4 hover:border-blue-500 transition-colors duration-300 flex flex-col">
      <div className="flex-grow">
        <Image
          src={imageExists ? previewImageUrl! : "/logo.svg"}
          alt={`${jobTitle} preview`}
          width={480}
          height={360}
          className="w-full object-cover"
        />
        <h2 className="text-xl font-bold text-card-foreground">{jobTitle}</h2>
        <p className="text-sm text-gray-600">Project: {projectName}</p>
        <p className="text-sm text-gray-600">Role: {roleDescription}</p>
        <p className="text-sm text-gray-600">Date: {contributionDate}</p>
        <p className="mt-2 text-gray-600">{responsibilities}</p>
        <TechStackIcons techStacks={techStack} />
      </div>
      <div className="mt-auto items-center justify-center">
        <Link
          href={sourceCodeLink || "/"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline block cursor-pointer"
        >
          View Source Code
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
