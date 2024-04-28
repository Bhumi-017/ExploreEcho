// http://localhost:3000/api/blog

import { connect } from "@/lib/db";
import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/jwt";
import Blog from "@/models/Blog";

// Fix 1: Change req to request to follow the standard Node.js request object
export async function POST(request) {
  await connect();

  const accessToken = request.headers.get("authorization");
  const token = accessToken.split(" ")[1];

  // Fix 2: Pass the token to verifyJwtToken instead of accessToken
  const decodedToken = verifyJwtToken(token);

  if (!accessToken || !decodedToken) {
    return new Response(
      JSON.stringify({ error: "unauthorized (wrong or expired token" }),
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const newblog = await Blog.create(body);

    return NextResponse.json(newblog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "POST error (create blog)" });
  }
}

// Fix 3: Change req to request to follow the standard Node.js request object
export async function GET(request) {
  await connect();

  try {
    const blogs = await Blog.find({})
      .populate({
        path: "authorId",
        select: "-password",
      })
      .sort({ createdAt: -1 });

      return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { message: "GET error" },
      {
        status: 500,
      }
    );
  }
}
