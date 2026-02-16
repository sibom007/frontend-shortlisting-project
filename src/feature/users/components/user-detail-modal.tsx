"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { User } from "@/types";

type Props = {
  user: User | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function UserDetailModal({ user, open, onOpenChange }: Props) {
  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
          <DialogDescription>
            Detailed information about the selected user
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Name</span>
            <span className="font-medium">{user.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Email</span>
            <span className="font-medium">{user.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Username</span>
            <Badge variant="secondary">{user.username}</Badge>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Phone</span>
            <span className="font-medium">{user.phone}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Website</span>
            <span className="font-medium">{user.website}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Company</span>
            <span className="font-medium">{user.company?.name || "N/A"}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
