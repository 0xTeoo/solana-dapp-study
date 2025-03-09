"use client";

import { SidebarTrigger } from "@/shared/components/ui/sidebar";
import { Separator } from "@/shared/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Button } from "@/shared/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useCluster } from "@/features/cluster/store/use-cluster";
import { Cluster } from "@/features/cluster/types";

export const AppHeader = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { clusters, setCluster, cluster } = useCluster();

  const handleClusterChange = (cluster: Cluster) => {
    setCluster(cluster);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Basics</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Accounts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              {cluster.name}
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {clusters.map((cluster: Cluster) => (
              <DropdownMenuItem
                key={cluster.name}
                onClick={() => handleClusterChange(cluster)}
                className="cursor-pointer"
              >
                {cluster.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {isMounted && (
          <WalletMultiButton
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "8px",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "bold",
              border: "1px solid #e0e0e0",
            }}
          />
        )}
      </div>
    </header>
  );
};
