"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { useBasicProgram } from "../hooks";

export const ProgramAccount = () => {
  const { getProgramAccount } = useBasicProgram();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Program Account</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-scroll">
        {getProgramAccount.isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        ) : !getProgramAccount.data?.value ? (
          <div className="p-4 border rounded-md bg-muted">
            <p className="text-center">
              Program account not found. Make sure you have deployed the program
              and are on the correct cluster.
            </p>
          </div>
        ) : (
          <pre className="p-4 border rounded-md bg-muted">
            {JSON.stringify(getProgramAccount.data.value, null, 2)}
          </pre>
        )}
      </CardContent>
    </Card>
  );
};
