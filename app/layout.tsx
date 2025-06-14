
import "./globals.css"; 
// Imports Tailwind styles
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto py-8 px-4 min-h-screen">
          {children} 
{/* Dynamically renders the content of different pages */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
