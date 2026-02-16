"use server";

import { LoginPayload, LoginResponse } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(payload: LoginPayload) {
  const res = await fetch(`http://localhost:3000/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const data: LoginResponse = await res.json();

  if (!res.ok || !data.success || !data.token) {
    return {
      success: false,
      message: data?.message || "Invalid email or password",
    };
  }

  (await cookies()).set({
    name: "auth_token",
    value: data.token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/dashboard");
}
