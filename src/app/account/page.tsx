"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { TokenAccountList } from "@/features/account/components/token-account-list";
import { AccountDetail } from "@/features/account/components/account-detail";

export default function Page() {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return (
      <div className="container mx-auto p-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center text-muted-foreground">
              Please connect your wallet to view account details.
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-4">
      <AccountDetail publicKey={publicKey} />

      <Tabs defaultValue="tokens">
        <TabsList>
          <TabsTrigger value="tokens">Token Accounts</TabsTrigger>
          <TabsTrigger value="history">Transaction History</TabsTrigger>
        </TabsList>
        <TabsContent value="tokens">
          <Card>
            <CardContent className="pt-6">
              <TokenAccountList publicKey={publicKey} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
