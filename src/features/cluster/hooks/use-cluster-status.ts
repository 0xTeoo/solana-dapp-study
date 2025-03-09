import { useQuery } from "@tanstack/react-query";
import { Connection } from "@solana/web3.js";

export function useClusterStatus(connection: Connection, clusterName: string) {
  return useQuery({
    queryKey: ["version", { cluster: clusterName, endpoint: connection.rpcEndpoint }],
    queryFn: async () => {
      const [version, slot] = await Promise.all([
        connection.getVersion(),
        connection.getSlot(),
      ]);
      return { version, slot };
    },
    retry: 1
  });
} 
