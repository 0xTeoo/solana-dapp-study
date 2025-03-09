import { Button } from "@/shared/components/ui/button";
import { useCluster } from "@/features/cluster/store";
import { Cluster } from "@/features/cluster/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export const ClusterSelector = () => {
  const { cluster: currentCluster, clusters, setCluster } = useCluster();

  const handleClusterChange = (cluster: Cluster) => {
    setCluster(cluster);
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold">Available Clusters</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2">
          {clusters.map((cluster) => (
            <li key={cluster.name}>
              <Button
                variant={
                  cluster.endpoint === currentCluster.endpoint
                    ? "default"
                    : "outline"
                }
                onClick={() => handleClusterChange(cluster)}
                className="w-full justify-start"
              >
                <div className="flex items-center">{cluster.name}</div>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
