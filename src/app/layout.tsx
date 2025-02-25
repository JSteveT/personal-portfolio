import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css"; // Ensure Tailwind/global styles are imported

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

        {/* Page content */}
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
