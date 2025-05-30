import type { SVGProps } from "react";
const DocumentSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
    <path d="M7 16.5 8 22l-3-1-3 1 1-5.5"></path>
  </svg>
);
export default DocumentSVG;
