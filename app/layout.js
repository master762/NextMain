import TheFooter from "@/components/TheFooter";
import TheHeader from "../components/TheHeader";
import "./globals.css";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header>
          <TheHeader />
        </header>
        <main>{children}</main>
        <footer>
          <TheFooter />
        </footer>
      </body>
    </html>
  );
}
