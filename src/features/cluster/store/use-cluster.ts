"use client";

import { clusterApiUrl } from "@solana/web3.js";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  Cluster,
  ClusterNetwork,
  ClusterState,
} from "@/features/cluster/types";

export const defaultClusters: Cluster[] = [
  {
    name: "devnet",
    endpoint: clusterApiUrl("devnet"),
    network: ClusterNetwork.Devnet,
  },
  { name: "local", endpoint: "http://localhost:8899" },
  {
    name: "testnet",
    endpoint: clusterApiUrl("testnet"),
    network: ClusterNetwork.Testnet,
  },
];

export const useClusterStore = create<ClusterState>()(
  persist(
    (set) => ({
      cluster: defaultClusters[0],
      clusters: defaultClusters,
      setCluster: (cluster) => set({ cluster }),
    }),
    {
      name: "solana-cluster-storage",
    }
  )
);

// Hook wrapper for better DX
export function useCluster() {
  const { cluster, clusters, setCluster } = useClusterStore();

  return {
    cluster,
    clusters: clusters.sort((a, b) => (a.name > b.name ? 1 : -1)),
    setCluster,
  };
}
