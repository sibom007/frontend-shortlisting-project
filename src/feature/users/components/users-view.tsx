"use client";

import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUsers } from "@/feature/auth/hooks/use-users";
import type { User } from "@/types";
import { useLogout } from "@/feature/auth/hooks/use-logout";
import { UserDetailModal } from "@/feature/users/components/user-detail-modal";

const ITEMS_PER_PAGE = 5;

export function UsersView() {
  const { isPending, logout } = useLogout();
  const { data: response, isLoading, isError, error } = useUsers();

  const users: User[] = response?.data ?? [];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  // 🔥 NEW: Modal state (assignment requirement)
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Better UX: reset page when filters change
  // useEffect(() => {
  //   setPage(1);
  // }, [search, sort]);

  const filteredUsers = useMemo(() => {
    if (!users.length) return [];

    let result = users.filter((user) => {
      const nameMatch = user.name.toLowerCase().includes(search.toLowerCase());
      const emailMatch = user.email
        .toLowerCase()
        .includes(search.toLowerCase());

      return nameMatch || emailMatch;
    });

    result = result.sort((a, b) =>
      sort === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );

    return result;
  }, [users, search, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / ITEMS_PER_PAGE),
  );

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  if (isLoading) {
    return (
      <div className="p-6">
        <p className="text-sm text-muted-foreground">Loading users...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6">
        <p className="text-sm text-destructive">
          {(error as Error)?.message || "Failed to load users"}
        </p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <p className="text-muted-foreground">No users found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Users</h1>

        <p className="text-sm text-muted-foreground">
          Total: {filteredUsers.length}
        </p>

        <div className="flex justify-end">
          <Button
            variant="destructive"
            onClick={() => logout()}
            disabled={isPending}>
            Logout
          </Button>
        </div>
      </div>

      {/* Search + Sort */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
          aria-label="Search users by name or email"
        />

        <Button
          variant="outline"
          onClick={() => setSort((prev) => (prev === "asc" ? "desc" : "asc"))}>
          Sort: {sort === "asc" ? "A–Z" : "Z–A"}
        </Button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left font-medium">Name</th>
              <th className="p-3 text-left font-medium">Email</th>
              <th className="p-3 text-left font-medium">Username</th>
              <th className="p-3 text-left font-medium">Company</th>
              <th className="p-3 text-left font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => handleViewUser(user)} // 🔥 Row clickable
              >
                <td className="p-3 font-medium">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.company?.name}</td>
                <td className="p-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent row click double trigger
                      handleViewUser(user);
                    }}>
                    View
                  </Button>
                </td>
              </tr>
            ))}

            {paginatedUsers.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-6 text-center text-muted-foreground">
                  No users match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <Button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          variant="outline">
          Prev
        </Button>

        <span className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </span>

        <Button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          variant="outline">
          Next
        </Button>
      </div>

      {/* 🔥 NEW: User Detail Modal (Requirement) */}
      <UserDetailModal
        user={selectedUser}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}
