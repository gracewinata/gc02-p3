import { cookies } from "next/headers";
import { readPayloadJose } from "./utils/jwt";
import { NextResponse } from "next/server";

export const middleware = async (request: Request) => {
  const authorization = cookies().get("authorization")?.value;

  if (!authorization) {
    return Response.json(
      {
        message: "Unauthorized, please log in first",
      },
      {
        status: 401,
      }
    );
  }

  const [type, token] = authorization.split(" ");

  if (type !== `Bearer`) {
    return Response.json(
      {
        message: "Unauthorized, invalid token",
      },
      {
        status: 401,
      }
    );
  }

  const decoded = await readPayloadJose<{ _id: string; email: string }>(token);

  const reqHeaders = new Headers(request.headers);
  reqHeaders.set("userId", decoded._id);

  const response = NextResponse.next({
    request: {
      headers: reqHeaders,
    },
  });

  return response;
};

export const config = {
  matcher: ["/api/wishlist/:path*", "/wishlist/:path*"],
};
