"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { useBasicProgram } from "../hooks/use-basic-program";

export const ProgramInfo = () => {
  const { greet, programId } = useBasicProgram();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Basic Program</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <p className="text-muted-foreground mb-2">Program ID:</p>
          <a
            href={`https://explorer.solana.com/address/${programId.toString()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {programId.toString()}
          </a>
        </div>
        <Button
          onClick={() => greet.mutateAsync()}
          disabled={greet.isPending}
          className="w-full md:w-auto"
        >
          {greet.isPending ? "Running..." : "Run Program"}
        </Button>
      </CardContent>
    </Card>
  );
};
