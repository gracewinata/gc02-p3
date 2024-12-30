import { productModel } from "@/db/models/productModel";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page") || "1";

  const products = await productModel.getProducts(page);

  return Response.json(
    {
      status: 200,
      data: products,
    },
    {
      status: 200,
    }
  );
};
