import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import I18nProvider from "../components/app/I18nProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jackson's Trading",
  description: "Jackson's Trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
