import { productModel } from "@/db/models/productModel";

export const GET = async (
  request: Request,
  { params }: { params: { slug: string } }
) => {
  const slug = params.slug;
  const product = await productModel.getProductBySlug(slug);

  if (!product) {
    return Response.json(
      {
        message: "Product not found",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json(product);
};
