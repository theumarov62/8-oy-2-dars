"use client";
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";
function Layout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="uz">
      <body>
        {pathname === "/" && (
          <h1 className="text-[30px] text-center pt-4 pb-4 bg-amber-600 text-gray-700">
            Siz hozir asosiy sahifadasiz o'zingizga qulay bo'lgan render turini
            tanlang
          </h1>
        )}
        <div className="flex items-center justify-between mt-8 ml-30 mr-30">
          {pathname !== "/Csr" && (
            <Link
              href="/Csr"
              className="border-2 text-[18px] active:opacity-[40%] p-2 flex items-center w-[200px] rounded hover:bg-white transition duration-200 hover:text-black justify-center border-black bg-black text-white"
            >
              CSR
            </Link>
          )}

          {pathname !== "/Ssr" && (
            <Link
              href="/Ssr"
              className="border-2 text-[18px] active:opacity-[40%] p-2 flex items-center w-[200px] rounded hover:bg-white transition duration-200 hover:text-black justify-center border-black bg-black text-white"
            >
              SSR
            </Link>
          )}
          {pathname !== "/" && (
            <Link
              href="/"
              className="border-2 text-[18px] active:opacity-[40%] p-2 flex items-center w-[200px] rounded hover:bg-white transition duration-200 hover:text-black justify-center border-black bg-black text-white ml-4 mt-4"
            >
              Asosiy sahifa
            </Link>
          )}
        </div>

        {pathname === "/Csr" && (
          // Toast
          <div className="text-white text-center bg-blue-600 w-[100px] fixed top-4 right-4 rounded pl-1 pr-1">
            CSR render
          </div>
        )}

        {pathname === "/Ssr" && (
          // Toast
          <div className="text-white text-center bg-blue-600 w-[100px] fixed top-4 right-4 rounded pl-1 pr-1">
            SSR render
          </div>
        )}
        {children}
      </body>
    </html>
  );
}

export default Layout;
