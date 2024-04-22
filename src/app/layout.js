import { Lora } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import BackgroundCircles from "@/components/BackgroundCircles";
import Head from "next/head";
const nutino = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio by Vikram",
  description: "Responsive PortFolio",
  icons:'android-chrome-192x192.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nutino.className} flex flex-col h-screen w-screen text-slate-300 `}>
        <div className="p-2 w-full xl:p-10 h-full">
          <div className="w-full h-full flex flex-row justify-evenly items-center bg-slate-50/5 border border-gray-500 shadow-lg rounded-lg ">
            <div className="h-full w-10 xl:w-20 flex flex-col items-center justify-center">
              <Sidebar/>
            </div>
            <BackgroundCircles/>
            {children}
          </div>
        </div>
        <div>
        <Footer />
        </div>       
      </body>
    </html>
  );
}
