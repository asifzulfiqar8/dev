import { Header } from "./components/header";
import Footer from "./components/footer/Footer";

// This enables Static Site Generation
export const dynamic = "force-static";
export const revalidate = false; // This ensures the page is fully static

// Static metadata for better SEO
export const metadata = {
  title: "Asif Zulfiqar - Software Engineer",
  description:
    "Portfolio website of Asif Zulfiqar, a Software Engineer specializing in modern web development.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-bgColor">
      <Header />
      <Footer />
    </main>
  );
}
