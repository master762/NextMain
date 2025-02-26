import "./globals.css";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <title>StreamVibe</title>
      <link rel="icon" href="/logo.svg" />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
