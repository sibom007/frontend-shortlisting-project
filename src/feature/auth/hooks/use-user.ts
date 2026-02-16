"use client";

import { User, UsersResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

const fetchUser = async (id: number): Promise<User | null> => {
  const res = await fetch(
    `https://frontend-shortlisting-project.vercel.app/api/users?id=${id}`,
    {
      method: "GET",
    },
  );

  const data: UsersResponse = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch user");
  }

  return data.data?.[0] ?? null;
};

export const useUserQuery = (id?: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id as number),
    enabled: !!id, // prevents auto fetch if id is undefined
    staleTime: 1000 * 60 * 5,
  });
};
