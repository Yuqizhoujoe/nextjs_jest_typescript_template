import { LayoutInterface } from "../../shared/modal/Common/interface";
import Header from "../Common/Header/Header";
import Footer from "@/components/Common/Footer/Footer";

const Layout = ({ children }: LayoutInterface) => {
  return (
    <div className="h-screen">
      <Header />
      <main className="my-3">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
