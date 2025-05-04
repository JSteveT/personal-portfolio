"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-4">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm text-gray-500">
          © {year} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
