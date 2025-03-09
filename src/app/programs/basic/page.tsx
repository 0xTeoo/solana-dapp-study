"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { Card, CardContent } from "@/shared/components/ui/card";
import { ProgramInfo } from "@/features/program-basic/components/program-info";
import { ProgramAccount } from "@/features/program-basic/components/program-account";
import { Heading } from "@/shared/components/ui/heading";

export default function BasicProgramPage() {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return (
      <div className="container mx-auto p-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center text-muted-foreground">
              Please connect your wallet to interact with the Basic program.
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <section className=" space-y-6 max-w-[800px]">
      <Heading
        title="Basic Program"
        description="Interact with a simple Solana program deployed on-chain."
      />
      <div className="flex flex-col gap-8">
        <ProgramInfo />
        <ProgramAccount />
      </div>
    </section>
  );
}
