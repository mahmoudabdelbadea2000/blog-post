import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const RootLayout = () => {
  return (
    <main className="font-work">
      <div className="container max-w-[1216px]">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};
