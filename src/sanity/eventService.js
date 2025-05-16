import { client } from "./client";

// Eksporterer en asynkron funksjon slik at den kan brukes andre steder
export async function fetchAllEvent() {
  const data = await client.fetch(
    `*[_type == 'event']{_id, eventname, eventslug}`
  );
  return data;
}