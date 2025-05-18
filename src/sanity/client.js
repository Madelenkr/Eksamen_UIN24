//Importerer createClient fra Sanity
import { createClient } from "@sanity/client";
//Koden lager en forbindelse til Sanity

export const client = createClient({
  //ID til prosjektet vårt.
  projectId: "eqbspp1a",
  //Datasett production
  dataset: "production",
  //Api versjonen som benyttes
  apiVersion: "v2025-03-24",
  //Direkte tilgang til Sanity
  useCdn: false,
});