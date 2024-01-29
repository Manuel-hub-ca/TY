import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Yaguasa from "./components/ContactMe";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// const interFontLink = (
//   <link
//     rel="stylesheet"
//     href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
//   />
// );

export default function RootLayout({ children }) {
  // const InterFont = Inter({ subsets: ['latin'] });
  return (
    <html lang="en">
      {/* <Head>
        {interFontLink}
        <style>{InterFont.style}</style>
      </Head> */}
      <body className={inter.className}>
        {children}
        {/* <Yaguasa/> */}
      </body>
    </html>
  );
}
