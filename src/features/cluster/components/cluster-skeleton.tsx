import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";

export function ClusterSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="h-7 w-1/4 animate-pulse rounded-md bg-muted" />
        <div className="mt-2 h-5 w-2/3 animate-pulse rounded-md bg-muted" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-9 w-full animate-pulse rounded-md bg-muted"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
