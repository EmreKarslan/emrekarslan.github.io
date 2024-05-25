import { Header } from "./_components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex justify-center">
      <Header />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MainLayout;
