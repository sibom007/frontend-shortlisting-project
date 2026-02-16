import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define route groups (scalable)
const PUBLIC_ROUTES = ["/login", "/signup"];
const PRIVATE_ROUTES = ["/dashboard", "/users", "/settings"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get token from HTTP-only cookie
  const token = request.cookies.get("auth_token")?.value;

  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  const isPrivateRoute = PRIVATE_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  // 1. If NOT authenticated & trying to access private route → redirect to login
  if (!token && isPrivateRoute) {
    const loginUrl = new URL("/login", request.url);

    // Optional: preserve redirect path (professional UX)
    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // 2. If authenticated & trying to access auth pages → redirect to dashboard
  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // 3. Allow request to continue
  return NextResponse.next();
}

// Better matcher (excludes static & API routes for performance)
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
