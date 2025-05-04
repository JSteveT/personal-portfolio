import "@/styles/global.css";

export const metadata = {
  title: "James Taylor",
  description: "Welcome to my personal website!",
};

const suppress = process.env.NEXT_PUBLIC_SUPPRESS_HYDRATION_WARN === "true";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        {...(suppress ? { suppressHydrationWarning: true } : {})}
        className="flex flex-col"
      >
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
