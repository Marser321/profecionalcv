import { createClient } from "@insforge/sdk";

const baseUrl = process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!;

if (!baseUrl || !anonKey) {
  console.warn("Insforge environment variables are missing.");
}

export const insforge = createClient({
  baseUrl,
  anonKey,
});
