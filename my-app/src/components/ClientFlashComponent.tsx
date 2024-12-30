"use client";

import { useSearchParams } from "next/navigation";

export const ClientFlashComponent = () => {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  if (!errorMessage) return <></>;

  return (
    <div className="bg-red-500 p-2 rounded-md font-bold ">
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
