import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MiniMax TicTacToe",
  description:
    "An implementation of the minimax algorithm in the tic tac toe game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} flex flex-col min-h-screen justify-center items-center bg-cyan-950 antialiased`}
      >
        <div className="flex gap-2 text-7xl font-black ">
          <h1 className="text-sky-400">X</h1>
          <h1 className="text-amber-500">O</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
