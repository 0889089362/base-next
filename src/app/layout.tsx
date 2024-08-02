import "./globals.css";
import type { Metadata } from "next";
import { ReduxProvider } from "@/redux/provider";
import { AuthLayout } from "@/components/Layout/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Mateos POC",
  description: "Application MateosPOC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" />
      </head>
      <body>
        <ReduxProvider>
          <AuthLayout>
            {children}
            <ToastContainer />
          </AuthLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
