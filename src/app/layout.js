import { geistMono, geistSans } from "@/fonts";
import { Header } from "@/components/common";
import "@/styles/globals.css";



export const metadata = {
  title: "My Blog App",
  description: "A dynamic blog platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:text-white dark:bg-gray-900`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
