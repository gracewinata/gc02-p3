import { userModel } from "@/db/models/userModel";
import { userSchema } from "@/db/schemas/userSchema";
import { z } from "zod";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const parsedData = userSchema.safeParse(body);

    if (!parsedData.success) {
      throw parsedData.error;
    }

    await userModel.addUser(body);

    return Response.json({
      message: "success create an account",
    });
  } catch (error) {
    // console.log(error, "<<< error");
    if (error instanceof z.ZodError) {
      const errorPath = error.issues[0].path[0];
      const errorMessage = error.issues[0].message;

      return Response.json(
        {
          status: 400,
          error: `${errorPath} : ${errorMessage}`,
        },
        { status: 400 }
      );
    }
    return Response.json(
      {
        status: 500,
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
};
