"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeadingProps {
  title: string;
  description: string;
  canGoBack?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  canGoBack,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {canGoBack && (
          <button onClick={() => router.back()}>
            <ArrowLeft className="h-6 w-6" />
          </button>
        )}
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground pl-1">{description}</p>
    </div>
  );
};
