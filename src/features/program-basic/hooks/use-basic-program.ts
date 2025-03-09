import { useConnection } from "@solana/wallet-adapter-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useCluster } from "@/features/cluster/store";
import { useAnchorProvider } from "@/features/solana/hooks";
import {
  BASIC_PROGRAM_ID as programId,
  getBasicProgram,
} from "@project/anchor";
import { toast } from "sonner";

export function useBasicProgram() {
  const { connection } = useConnection();
  const { cluster } = useCluster();
  const provider = useAnchorProvider();
  const program = getBasicProgram(provider);

  const getProgramAccount = useQuery({
    queryKey: ["get-program-account", { cluster: cluster.name }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const greet = useMutation({
    mutationKey: ["basic", "greet", { cluster: cluster.name }],
    mutationFn: () => program.methods.greet().rpc(),
    onSuccess: (signature) => {
      const explorerUrl = `https://explorer.solana.com/tx/${signature}?cluster=${cluster.network}`;

      toast.success("Transaction successful", {
        action: {
          label: "View on Explorer",
          onClick: () => window.open(explorerUrl, "_blank"),
        },
      });
    },
    onError: (error) => {
      toast.error(`Transaction failed: ${error}`);
    },
  });

  return {
    program,
    programId,
    getProgramAccount,
    greet,
  };
}
