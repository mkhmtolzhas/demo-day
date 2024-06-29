import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HomePage from "@/components/component/Home";

import { Landing } from "@/components/component/landing";

export default function Home() {
  return (
    <main className="font-poppins">
      <Header />
      <HomePage />
      <Landing />
      <Footer />
    </main>
  );
}
