import bcrypt from "bcryptjs";

export const hashPassword = (pass: string) => {
  return bcrypt.hashSync(pass);
};

export const comparePassword = (pass: string, hashedPass: string) => {
  return bcrypt.compareSync(pass, hashedPass);
};
