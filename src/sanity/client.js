import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "eqbspp1a",
  dataset: "production",
  apiVersion: "v2025-03-24",
  useCdn: false,
});