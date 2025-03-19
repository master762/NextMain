import "./globals.css";
import { Manrope } from "next/font/google";
import AuthProvider from "@/components/SessionProvider";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>StreamVibe</title>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
