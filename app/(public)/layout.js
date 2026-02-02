import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import './PublicLayout.css'; 

export default function PublicLayout({ children }) {
  return (
    <div className="public-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
