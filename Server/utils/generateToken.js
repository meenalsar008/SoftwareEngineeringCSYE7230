import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "Secret123", {
    expiresIn: "30d",
  });
};

export default generateToken;
