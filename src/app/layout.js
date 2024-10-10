import localFont from "next/font/local";
import "./globals.css";

const lexendBold = localFont({
  src: "./fonts/Lexend-Bold.ttf",
  variable: "--font-lexend-bold",
  weight: "700",
});

const lexendSemiBold = localFont({
  src: "./fonts/Lexend-SemiBold.ttf",
  variable: "--font-lexend-semiBold",
  weight: "600",
});

const lexendMedium = localFont({
  src: "./fonts/Lexend-Medium.ttf",
  variable: "--font-lexend-medium",
  weight: "500",
});

const lexendRegular = localFont({
  src: "./fonts/Lexend-Regular.ttf",
  variable: "--font-lexend-regular",
  weight: "400",
});

export const metadata = {
  title: "Hounter",
  description: "for find of houses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexendBold.variable} ${lexendSemiBold.variable} ${lexendMedium.variable} ${lexendRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
