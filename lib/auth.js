import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
const secret = new TextEncoder().encode(process.env.SESSION_SECRET || "CHANGE_THIS_IN_PRODUCTION");

export async function createAdminSession(email) {
  return new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("8h").sign(secret);
}
export async function requireAdmin() {
  const token = (await cookies()).get("admin_session")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload.role === "admin" ? payload : null;
  } catch { return null; }
}
