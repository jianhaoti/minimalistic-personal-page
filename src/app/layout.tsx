import "./globals.css";

export const metadata = {
  title: "Paul Tee's Site",
  description: "Welcome to my personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <div className="max-w-2xl mx-auto p-8">{children}</div>
      </body>
    </html>
  );
}
