import { AnchorWallet } from "@solana/wallet-adapter-react"
import { AnchorProvider } from "@coral-xyz/anchor";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export const useAnchorProvider = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  return new AnchorProvider(connection, wallet as AnchorWallet, { commitment: 'confirmed' })
}
