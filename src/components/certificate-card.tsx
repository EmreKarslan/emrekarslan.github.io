import Image from "next/image";
import React from "react";

interface CertificateCardProps {
  title: string;
  issuedBy: string;
  issueDate: string;
  description: string;
  pdfLink: string;
  imageUrl: string;
}

const CertificateCard = ({
  title,
  issuedBy,
  issueDate,
  description,
  pdfLink,
  imageUrl,
}: CertificateCardProps) => {
  return (
    <div className="max-w-md mx-auto h-full border-2 rounded-md border-input bg-card shadow-sm hover:text-accent-foreground overflow-hidden p-4 hover:border-blue-500 transition-colors duration-300 flex flex-col">
      <div className="flex-grow">
        <Image
          src={imageUrl}
          alt={`${title} preview`}
          width={480}
          height={360}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-card-foreground">{title}</h2>
          <p className="text-sm text-gray-600">Issued by: {issuedBy}</p>
          <p className="text-sm text-gray-600">Issue Date: {issueDate}</p>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mt-auto">
        <a
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline block"
        >
          View Full Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
