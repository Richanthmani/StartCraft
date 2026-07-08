export const config = { runtime: "nodejs" };

export default function handler() {
  return Response.json({ status: "ok" });
}
