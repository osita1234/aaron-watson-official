import crypto from "crypto";
export function createOrderNumber() {
  return `AW-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
}
export function createVerificationToken() {
  return crypto.randomBytes(24).toString("hex");
}