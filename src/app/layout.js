import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata = {
  title: "HPB",
  description: "High Performance Board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
