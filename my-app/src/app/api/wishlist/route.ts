import { wishlistModel } from "@/db/models/wishlistModel";

export const POST = async (request: Request) => {
  const { productId } = await request.json();

  const userId = request.headers.get("userId");

  if (!userId) {
    return Response.json({
      message: "userId is required",
    });
  }

  if (!productId) {
    return Response.json({
      message: "productId is required",
    });
  }

  const wishlist = await wishlistModel.addWishlist({ userId, productId });

  return Response.json({
    message: "success add wishlist",
    wishlist,
  });
};

export const GET = async (request: Request) => {
  const userId = request.headers.get("userId");

  if (!userId) {
    return Response.json({
      message: "please log in first",
    });
  }

  const wishlist = await wishlistModel.getWishlist(userId);

  return Response.json({
    message: "success get wishlist",
    wishlist,
  });
};

export const DELETE = async (request: Request) => {
  const userId = request.headers.get("userId");
  const { wishlistId } = await request.json();

  if (!userId) {
    return Response.json({
      message: "please log in first",
    });
  }

  if (!wishlistId) {
    return Response.json({
      message: "wishlistId is required",
    });
  }

  const wishlist = await wishlistModel.removeWishlist({ wishlistId });

  return Response.json({
    message: "success remove wishlist",
    wishlist,
  });
};
