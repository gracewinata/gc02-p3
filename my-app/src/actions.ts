"use server";

import { redirect } from "next/navigation";
import { loginInputSchema, userSchema } from "./db/schemas/userSchema";
import { cookies } from "next/headers";

export const handleLogin = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const parsedData = loginInputSchema.safeParse({ email, password });

  if (!parsedData.success) {
    const errorPath = parsedData.error.issues[0].path[0];
    const errorMessage = parsedData.error.issues[0].message;
    const errorQuery = `${errorPath} : ${errorMessage}`;

    return redirect(`http://localhost:3000/login?error=${errorQuery}`);
  }

  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: parsedData.data.email,
      password: parsedData.data.password,
    }),
  });

  const response = await res.json();
  if (!res.ok) {
    const errorMessage = response.message;
    return redirect(`http://localhost:3000/login?error=${errorMessage}`);
  }

  cookies().set("authorization", `Bearer ${response.access_token}`);

  redirect("http://localhost:3000/");
};

export const handleLogout = async () => {
  cookies().get("token") && cookies().delete("token");
  redirect("/login");
};

export const handleRegister = async (formData: FormData) => {
  const name = formData.get("name");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const parsedData = userSchema.safeParse({ name, username, email, password });

  if (!parsedData.success) {
    const errorPath = parsedData.error.issues[0].path[0];
    const errorMessage = parsedData.error.issues[0].message;
    const errorQuery = `${errorPath} : ${errorMessage}`;

    return redirect(`http://localhost:3000/register?error=${errorQuery}`);
  }

  const res = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: parsedData.data.name,
      username: parsedData.data.username,
      email: parsedData.data.email,
      password: parsedData.data.password,
    }),
  });

  const response = await res.json();

  if (!res.ok) {
    const errorMessage = response.message;
    return redirect(`http://localhost:3000/register?error=${errorMessage}`);
  }

  redirect("http://localhost:3000/login");
};
