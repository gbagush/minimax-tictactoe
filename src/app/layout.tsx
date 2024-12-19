import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const APP_NAME = "MiniMax TicTacToe";
const APP_DEFAULT_TITLE = "MiniMax TicTacToe";
const APP_TITLE_TEMPLATE = "%s - MiniMax TicTacToe";
const APP_DESCRIPTION =
  "An implementation of the minimax algorithm in the tic tac toe game";

const raleway = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#083344",
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
