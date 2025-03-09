"use client";

import { useCluster } from "@/features/cluster/store";
import { useConnection } from "@solana/wallet-adapter-react";
import { ClusterSkeleton } from "@/features/cluster/components/cluster-skeleton";
import { useClusterStatus } from "@/features/cluster/hooks/use-cluster-status";
import { ClusterStatus } from "@/features/cluster/components/cluster-status";
import { ClusterSelector } from "@/features/cluster/components/cluster-selector";
import { ClusterError } from "@/features/cluster/components/cluster-error";
import { Heading } from "@/shared/components/ui/heading";

export default function ClusterPage() {
  const { cluster } = useCluster();
  const { connection } = useConnection();
  const query = useClusterStatus(connection, cluster.name);

  return (
    <section className="max-w-[1200px] space-y-6">
      <Heading
        title="Cluster"
        description="Solana clusters provide isolated blockchain environments for development, testing and production."
      />
      
      {query.isLoading || query.isFetching ? (
        <ClusterSkeleton />
      ) : query.isError ? (
        <ClusterError error={query.error} />
      ) : (
        <>
          <ClusterStatus slot={query.data?.slot ?? 0} />
          <ClusterSelector />
        </>
      )}
    </section>
  )
}
