import { NextResponse } from "next/server";

type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  try {
    // 1. Parse body safely
    let body: LoginBody;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body" },
        { status: 400 },
      );
    }

    const { email, password } = body;

    // 2. Validate inputs
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required",
        },
        { status: 400 },
      );
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid input types",
        },
        { status: 400 },
      );
    }

    // 3. Fetch users from external API
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      cache: "no-store",
    });

    // 4. Handle external API failure
    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to fetch users from external API",
        },
        { status: 502 },
      );
    }

    const users = await res.json();

    if (!Array.isArray(users)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid users data format",
        },
        { status: 500 },
      );
    }

    // 5. Match user by email (fake password logic for assignment)
    const user = users.find(
      (u) => u.email?.toLowerCase() === email.toLowerCase(),
    );

    // 6. If user not found
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 },
      );
    }

    /**
     * IMPORTANT:
     * JSONPlaceholder has NO password field
     * So we simulate password = "123456" for demo auth
     */
    const DEMO_PASSWORD = "123456";

    if (password !== DEMO_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 },
      );
    }

    // 7. Success response (production style)
    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token: `fake-jwt-token-${user.id}`, // for your Part B auth
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("LOGIN_API_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  try {
    // 1. Read query params (optional filtering)
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search"); // ?search=Leanne
    const id = searchParams.get("id"); // ?id=1

    // 2. Fetch users from external API
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      cache: "no-store", // always fresh data
    });

    // 3. Handle external API failure
    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to fetch users from external API",
        },
        { status: 502 },
      );
    }

    const users = await res.json();

    // 4. Validate response format
    if (!Array.isArray(users)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid users data format",
        },
        { status: 500 },
      );
    }

    let filteredUsers = users;

    // 5. Handle query: filter by ID
    if (id) {
      const userId = Number(id);
      if (!isNaN(userId)) {
        filteredUsers = users.filter((user) => user.id === userId);
      }
    }

    // 6. Handle query: search by name or email
    if (search) {
      const searchLower = search.toLowerCase();
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.name?.toLowerCase().includes(searchLower) ||
          user.email?.toLowerCase().includes(searchLower),
      );
    }

    // 7. Empty state handling
    if (filteredUsers.length === 0) {
      return NextResponse.json(
        {
          success: true,
          message: "No users found",
          data: [],
          total: 0,
        },
        { status: 200 },
      );
    }

    // 8. Success response (clean for dashboard)
    return NextResponse.json(
      {
        success: true,
        message: "Users fetched successfully",
        data: filteredUsers,
        total: filteredUsers.length,
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("GET_USERS_API_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}
