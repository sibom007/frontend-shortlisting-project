"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
  // Delete auth cookie securely
  (await cookies()).delete("auth_token");

  // Optional: you can also clear other auth-related cookies here
  // cookies().delete("refresh_token");

  // Redirect to login after logout
  redirect("/");
}
