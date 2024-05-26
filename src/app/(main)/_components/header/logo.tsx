import Image from "next/image";

export const Logo = () => {
  return (
    <div className="md:flex items-center gap-x-2">
      <Image
        src="/logo-dark.svg"
        height="40"
        width="40"
        alt="Logo"
        className="hidden dark:block"
      />
      <Image
        src="/logo.svg"
        height="40"
        width="40"
        alt="Logo"
        className="visible dark:hidden"
      />
    </div>
  );
};
