import jwt, { JwtPayload } from "jsonwebtoken";
const secretKey = "inirahasia";
import * as jose from "jose";

export const signToken = (payload: JwtPayload) => {
  return jwt.sign(payload, secretKey);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secretKey);
};

export const readPayloadJose = async <T>(token: string) => {
  const secret = new TextEncoder().encode(secretKey);

  const { payload } = await jose.jwtVerify<T>(token, secret);
  return payload;
};
