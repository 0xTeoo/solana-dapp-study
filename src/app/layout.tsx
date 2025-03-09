import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppSidebar } from "@/shared/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";
import { SolanaProvider } from "@/features/solana/providers/solana-provider";
import { AppHeader } from "@/shared/components/app-header";
import { QueryProvider } from "@/shared/providers/query-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solana Dapp Study",
  description: "This is a study project for Solana Dapps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SolanaProvider>
          <QueryProvider>
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <AppHeader />
                <main className="p-8">{children}</main>
              </SidebarInset>
            </SidebarProvider>
          </QueryProvider>
        </SolanaProvider>
      </body>
    </html>
  );
}
