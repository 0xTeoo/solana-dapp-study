import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/shared/components/ui/card";
import { useCluster } from "../store";
import { ExternalLinkIcon } from "lucide-react";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useConnection } from "@solana/wallet-adapter-react";

interface ClusterStatusProps {
  slot: number;
}

export function ClusterStatus({ slot }: ClusterStatusProps) {
  const { connection } = useConnection();
  const { cluster: currentCluster } = useCluster();
  const [slotLeader, setSlotLeader] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const slotLeader = await connection.getSlotLeader();
      setSlotLeader(slotLeader);
    })();
  }, [connection]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground font-medium">
            Current Cluster
          </CardTitle>
          <CardDescription className="text-2xl font-bold text-foreground">
            {currentCluster.name}
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground font-medium">
            Current Slot
          </CardTitle>
          <CardDescription className="text-2xl font-bold text-foreground">
            {slot.toLocaleString()}
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground font-medium">
            Current Leader
          </CardTitle>
          <CardDescription className="text-2xl font-bold text-foreground">
            <a
              href={`https://solscan.io/address/${slotLeader}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-foreground hover:text-primary hover:underline"
            >
              {slotLeader ? (
                <>
                  {`${slotLeader.slice(0, 4)}...${slotLeader.slice(-4)}`}
                  <ExternalLinkIcon className="w-6 h-6" />
                </>
              ) : (
                <Skeleton className="w-20 h-4" />
              )}
            </a>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
