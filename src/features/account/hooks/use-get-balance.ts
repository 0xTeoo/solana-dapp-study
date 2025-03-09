import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";

export function useGetBalance(publicKey: PublicKey) {
  const { connection } = useConnection();

  return useQuery({
    queryKey: ["get-balance", { endpoint: connection.rpcEndpoint, publicKey }],
    queryFn: () => connection.getBalance(publicKey),
  });
}
