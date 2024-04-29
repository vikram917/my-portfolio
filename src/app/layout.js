import { Lora } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Image from "next/image";
import bg from "../../public/bg.png"
const nutino = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio by Vikram",
  description: "Responsive PortFolio",
  icons:'android-chrome-192x192.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nutino.className} flex flex-col h-screen w-screen text-slate-300 relative`}>
    
        <div className="p-2 w-full xl:p-10 h-full">
          <div className="w-full h-full backdrop-blur-sm flex flex-row justify-evenly items-center bg-slate-50/2 border border-slate-600  shadow-lg rounded-lg ">
            <div className="h-full w-10 xl:w-20 flex flex-col items-center justify-center">
              <Sidebar/>
            </div>
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