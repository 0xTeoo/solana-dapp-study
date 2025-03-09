import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/shared/components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useCluster } from "@/features/cluster/store";
import { ClusterSelector } from "@/features/cluster/components/cluster-selector";

export const ClusterError = ({ error }: { error: Error }) => {
  const { cluster: currentCluster } = useCluster();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connection Error</CardTitle>
        <CardDescription>
          Unable to connect to {currentCluster.name}. Please try another
          cluster.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Connection Failed</AlertTitle>
          <AlertDescription>
            {error.message ? error.message : "Failed to connect to the cluster"}
          </AlertDescription>
        </Alert>
        <ClusterSelector />
      </CardContent>
    </Card>
  );
};
