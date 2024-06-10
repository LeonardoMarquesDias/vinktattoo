import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] }); 

import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-950 scroll-smooth antialiased">
      <body className={jakartaSans.className}>{children}</body>
    </html>
  );
}