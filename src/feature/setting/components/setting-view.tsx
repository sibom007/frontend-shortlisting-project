"use client";

import { useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useLogout } from "@/feature/auth/hooks/use-logout";

const STORAGE_KEY = "profile_name";

export function SettingView() {
  const { isPending, logout } = useLogout();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Hydration-safe mount + load saved data
  useEffect(() => {
    setMounted(true);
    const storedName = localStorage.getItem(STORAGE_KEY) || "";
    setName(storedName);
    setSavedName(storedName);
  }, []);

  // Detect if changes exist (better UX)
  const hasChanges = useMemo(() => {
    return name !== savedName;
  }, [name, savedName]);

  const handleSave = async () => {
    try {
      setIsSaving(true);

      // Simulate small delay (production-like UX)
      await new Promise((resolve) => setTimeout(resolve, 500));

      localStorage.setItem(STORAGE_KEY, name.trim());
      setSavedName(name.trim());
    } finally {
      setIsSaving(false);
    }
  };

  const handleThemeToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  // Prevent hydration mismatch (important for next-themes)
  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="w-full max-w-3xl p-6 md:p-8 space-y-8">
        {/* Page Header with Profile Display */}
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your profile and application preferences
          </p>
          <div className="flex justify-end">
            <Button
              variant={"destructive"}
              onClick={() => logout()}
              disabled={isPending}>
              Logout
            </Button>
          </div>

          {/* Profile Preview */}
          <div className="mt-4 rounded-lg border bg-muted/40 p-4 text-left">
            <p className="text-sm text-muted-foreground">Logged in as</p>
            <p className="text-lg font-semibold">{savedName || "Guest User"}</p>
          </div>
        </div>

        {/* Profile Settings Card */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Update your personal display information
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="max-w-md"
              />
              <p className="text-xs text-muted-foreground">
                This name will be shown across your dashboard.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button
                onClick={handleSave}
                disabled={!hasChanges || isSaving || !name.trim()}
                className="min-w-35">
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>

              {hasChanges && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setName(savedName)}>
                  Reset
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Appearance / Theme Card */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize how the interface looks and feels
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-1">
                <Label className="text-base font-medium">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Toggle between light and dark theme
                </p>
              </div>

              <Switch
                checked={theme === "dark"}
                onCheckedChange={handleThemeToggle}
                aria-label="Toggle dark mode"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
