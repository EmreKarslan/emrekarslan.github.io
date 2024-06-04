import Image from "next/image";

export const Logo = () => {
  return (
    <div className="md:flex items-center">
      <Image
        src="/logo-dark.svg"
        height="40"
        width="60"
        alt="Logo"
        className="hidden dark:block"
      />
      <Image
        src="/logo.svg"
        height="40"
        width="60"
        alt="Logo"
        className="visible dark:hidden"
      />
    </div>
  );
};
