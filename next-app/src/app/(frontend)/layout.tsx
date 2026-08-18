import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import StickySocials from "@/components/layouts/StickySocials";
import Lightbox from "@/components/ui/Lightbox";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-vermillion focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      
      <Header />

      <main id="main-content">
        {children}
      </main>

      <Footer />
      <StickySocials />
      <Lightbox />
    </>
  );
}
