"use client";

import { Skeleton } from "@/shared/components/ui/skeleton";
import { useGetTokenAccounts } from "@/features/account/hooks";
import { PublicKey } from "@solana/web3.js";

interface TokenAccountListProps {
  publicKey: PublicKey;
}

export const TokenAccountList = ({ publicKey }: TokenAccountListProps) => {
  const { data: tokenAccounts, isLoading } = useGetTokenAccounts(publicKey);

  if (isLoading || !tokenAccounts) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    );
  } else {
    return (
      <ul className="space-y-4">
        {tokenAccounts.map((account, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-3 rounded-lg border"
          >
            <div className="font-mono text-sm">
              {account.pubkey.toBase58().slice(0, 8)}...
            </div>
            <div>
              {account.account.data.parsed.info.tokenAmount.uiAmount}{" "}
              {account.account.data.parsed.info.mint.slice(0, 4)}...
            </div>
          </li>
        ))}
        {(!tokenAccounts || tokenAccounts.length === 0) && (
          <div className="text-center text-muted-foreground">
            No token accounts found
          </div>
        )}
      </ul>
    );
  }
};
