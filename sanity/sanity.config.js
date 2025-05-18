import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  //Navn på konfigurasjonen
  name: 'default',
  //Tittel som mappen heter i Sanity
  title: 'Eksamen_UIN2025',
  //ID til Sanity
  projectId: 'eqbspp1a',
  //Datasett vi bruker
  dataset: 'production',

  //Ekstra verktøy i mappen
  plugins: [
    //Verktøyet for å tilpasse meny
    structureTool(),
    visionTool()
  ],
  //Setter inn skjemaene for dokumenttypen vår
  schema: {
    //Henter filen fra schematypes
    types: schemaTypes,
  },
})
