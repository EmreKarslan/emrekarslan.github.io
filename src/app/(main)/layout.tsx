import { Header } from "./_components/header/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex justify-center">
      <div className="flex h-full 2xl:max-w-[60vw] overflow-hidden relative">
        <Header />
        <main className="h-full pt-40 w-full">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
