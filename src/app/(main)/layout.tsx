import { Footer } from "./_components/footer/footer";
import { Header } from "./_components/header/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex justify-center">
      <div className="flex h-full w-[100vw] 2xl:w-[60vw] flex-col">
        <Header />
        <main className="h-full py-20 w-full px-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
