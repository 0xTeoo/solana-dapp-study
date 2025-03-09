export interface Cluster {
  name: string;
  endpoint: string;
  network?: ClusterNetwork;
  active?: boolean;
}

export enum ClusterNetwork {
  Mainnet = "mainnet-beta",
  Testnet = "testnet",
  Devnet = "devnet",
  Custom = "custom",
}

export interface ClusterState {
  cluster: Cluster;
  clusters: Cluster[];
  setCluster: (cluster: Cluster) => void;
}
