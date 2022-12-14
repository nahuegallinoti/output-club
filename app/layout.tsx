import "./globals.css";
import MainNavigation from "../components/ui/MainNavigation";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <MainNavigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
