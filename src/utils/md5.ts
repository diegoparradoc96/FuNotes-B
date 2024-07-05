import crypto from "crypto";

// Función para hashear una contraseña utilizando MD5
const hashPassword = (password: string) => {
  return crypto.createHash("md5").update(password).digest("hex");
};

export {hashPassword};