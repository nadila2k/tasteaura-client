import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";


export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
