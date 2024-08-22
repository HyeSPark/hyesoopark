import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import Header from "@/components/header";
import Footer from "@/components/footer";

import localFont from "next/font/local";

const wanted = localFont({
  src: "../public/assets/WantedSansVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-wanted",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Hye Soo Park | INFO",
    description: "Hi there! I'm Hye Soo, a HCI researcher.",
    url: "https://hyesoopark.com",
    ogImage: "/main_img.png"
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={`${wanted.variable}`}>
            <body
                className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${wanted.className}`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <div className="flex flex-col min-h-screen">
                        <Header />  
                        <main className="md:max-w-4xl px-6 mx-auto flex-grow mt-24 md:mt-0">{children}</main>
                        <Footer />
                    </div>
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
