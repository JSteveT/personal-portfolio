import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export const metadata = {
  title: "jamestaylor.work",
  description: "Welcome to my personal website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
