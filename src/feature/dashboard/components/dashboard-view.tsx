"use client";

import { useMemo } from "react";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useUsers } from "@/feature/auth/hooks/use-users";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/feature/auth/hooks/use-logout";

const chartConfig: ChartConfig = {
  users: {
    label: "Users",
    color: "oklch(0.6175 0.2286 312.2241)",
  },
  companies: {
    label: "Companies",
    color: "oklch(0.5279 0.2008 293.6777)",
  },
};

export const DashboardView = () => {
  const { isPending, logout } = useLogout();
  const { data, isLoading, isError, error } = useUsers();

  const users = data?.data ?? [];
  const totalUsers = users.length;

  // Derived stats
  const companyMap = useMemo(() => {
    const map: Record<string, number> = {};
    users.forEach((user) => {
      const company = user.company?.name || "Unknown";
      map[company] = (map[company] || 0) + 1;
    });
    return map;
  }, [users]);

  const companyChartData = Object.entries(companyMap).map(([name, count]) => ({
    name,
    users: count,
  }));

  const uniqueCompanies = companyChartData.length;

  const pieData = [
    { name: "Users", value: totalUsers },
    { name: "Companies", value: uniqueCompanies },
  ];

  // Inline HEX green colors (no CSS vars)
  const PIE_COLORS = [
    "oklch(0.6175 0.2286 312.2241)",
    "oklch(0.5279 0.2008 293.6777)",
  ];

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="h-4 w-80" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Skeleton className="h-80 w-full rounded-xl" />
          <Skeleton className="h-80 w-full rounded-xl" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6">
        <p className="text-destructive">
          {(error as Error)?.message || "Failed to load dashboard"}
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of users and analytics</p>
        <div className="flex justify-end">
          <Button
            variant={"destructive"}
            onClick={() => logout()}
            disabled={isPending}>
            Logout
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="text-4xl font-bold">{totalUsers}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Companies</CardTitle>
          </CardHeader>
          <CardContent className="text-4xl font-bold">
            {uniqueCompanies}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avg Users / Company</CardTitle>
          </CardHeader>
          <CardContent className="text-4xl font-bold">
            {uniqueCompanies ? (totalUsers / uniqueCompanies).toFixed(1) : 0}
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Users per Company</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart data={companyChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="users"
                  fill="oklch(0.6175 0.2286 312.2241)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Users vs Companies</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}>
                  {pieData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={PIE_COLORS[index % PIE_COLORS.length]} // ✅ Inline hex colors
                    />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
