import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/providers/AppProvider";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar";
import NavbarContainer from "@/components/navbar/NavbarContainer";
import Footer from "@/components/footer/Footer";




export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Production Ready Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <AppProvider>
           <QueryProvider>
           <NavbarContainer />
          <main className="w-full ">
            {children}
          
          </main>
          <Footer />
          </QueryProvider>
        </AppProvider>
         <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}