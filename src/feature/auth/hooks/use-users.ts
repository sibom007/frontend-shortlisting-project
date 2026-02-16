"use client";

import { UsersResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

type UseUsersQueryProps = {
  search?: string;
};

const fetchUsers = async (search?: string): Promise<UsersResponse> => {
  const params = new URLSearchParams();

  if (search) {
    params.append("search", search);
  }

  const res = await fetch(
    `https://frontend-shortlisting-project.vercel.app/api/login?${params.toString()}`,
    {
      method: "GET",
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch users");
  }

  return data;
};

export const useUsers = ({ search }: UseUsersQueryProps = {}) => {
  return useQuery({
    queryKey: ["users", search],
    queryFn: () => fetchUsers(search),
    retry: 0,
  });
};
