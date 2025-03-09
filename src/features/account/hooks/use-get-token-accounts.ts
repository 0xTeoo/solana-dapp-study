
import { PublicKey } from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { TOKEN_2022_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";

export const useGetTokenAccounts = (publicKey: PublicKey) => {
  const { connection } = useConnection();

  return useQuery({
    queryKey: [
      "get-token-accounts",
      { endpoint: connection.rpcEndpoint, publicKey },
    ],
    queryFn: async () => {
      const [tokenAccounts, token2022Accounts] = await Promise.all([
        connection.getParsedTokenAccountsByOwner(publicKey, {
          programId: TOKEN_PROGRAM_ID,
        }),
        connection.getParsedTokenAccountsByOwner(publicKey, {
          programId: TOKEN_2022_PROGRAM_ID,
        }),
      ]);

      return [...tokenAccounts.value, ...token2022Accounts.value];
    },
  });
}