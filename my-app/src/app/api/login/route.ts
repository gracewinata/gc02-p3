import { userModel } from "@/db/models/userModel";
import { comparePassword } from "@/utils/bcrypt";
import { signToken } from "@/utils/jwt";
import { cookies } from "next/headers";

export const POST = async (request: Request) => {
  const body = await request.json();

  const user = await userModel.getUserByEmail(body.email);

  if (!user) {
    return Response.json(
      {
        message: "Invalid email/password",
        status: 401,
      },
      {
        status: 401,
      }
    );
  }

  const compare = comparePassword(body.password, user.password);

  if (!compare) {
    return Response.json(
      {
        message: "Invalid email/password",
        status: 401,
      },
      {
        status: 401,
      }
    );
  }

  const access_token = signToken({
    _id: user._id.toString(),
    email: user.email,
  });

  cookies().set("authorization", `Bearer ${access_token}`);

  return Response.json(
    {
      message: "success login",
      access_token,
    },
    {
      status: 200,
    }
  );
};
