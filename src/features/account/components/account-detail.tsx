"use client";

import { useGetBalance } from "@/features/account/hooks";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

interface AccountDetailProps {
  publicKey: PublicKey;
}

// @TODO: Add Skeleton for loading state
export const AccountDetail = ({ publicKey }: AccountDetailProps) => {
  const { data: balance } = useGetBalance(publicKey);

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Account Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid gap-4">
          <div className="flex justify-between items-center">
            <dt className="text-muted-foreground">Address</dt>
            <dd className="font-mono text-sm">{publicKey.toBase58()}</dd>
          </div>
          <div className="flex justify-between items-center">
            <dt className="text-muted-foreground">SOL Balance</dt>
            {balance && (
              <dd>
                {Math.round((balance! / LAMPORTS_PER_SOL) * 100000) / 100000}
                SOL
              </dd>
            )}
          </div>
        </dl>
      </CardContent>
    </Card>
  );
};
