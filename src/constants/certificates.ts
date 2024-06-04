export interface Certificate {
  title: string;
  issuedBy: string;
  issueDate: string;
  description: string;
  pdfLink: string;
  imageUrl: string;
}

export const certificates: Certificate[] = [
  {
    title: "Certificate of Completion",
    issuedBy: "XYZ Online Course Platform",
    issueDate: "2023-05-15",
    description: "Completed the Advanced Web Development course.",
    imageUrl: "/certificates/previews/problem-solving-(basic)-preview.jpg",
    pdfLink: "/certificates/pdfs/problem-solving-(basic).pdf",
  },
  {
    title: "Python Programming Certificate",
    issuedBy: "ABC University",
    issueDate: "2022-10-20",
    description: "Successfully completed the Python programming course.",
    imageUrl: "/certificates/previews/problem-solving-(basic)-preview.jpg",
    pdfLink: "/certificates/pdfs/problem-solving-(basic).pdf",
  },
  {
    title: "Python Programming Certificate",
    issuedBy: "ABC University",
    issueDate: "2022-10-20",
    description: "Successfully completed the Python programming course.",
    imageUrl: "/certificates/previews/problem-solving-(basic)-preview.jpg",
    pdfLink: "/certificates/pdfs/problem-solving-(basic).pdf",
  },
  {
    title: "Problem Solving (Basic)",
    issuedBy: "HackerRank",
    issueDate: "06-01-2022",
    description: "has succesfully cleared the assessment for the skill",
    imageUrl: "/certificates/previews/problem-solving-(basic)-preview.jpg",
    pdfLink: "/certificates/pdfs/problem-solving-(basic).pdf",
  },
];
