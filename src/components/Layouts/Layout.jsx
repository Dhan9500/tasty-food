import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <h1>{children}</h1>
      <Footer />
    </>
  );
};

export default Layout;
