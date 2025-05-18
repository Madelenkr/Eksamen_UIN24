//Importerer event lokalt som er brukt i schematypes
import { event } from './event'
//Importerer useres lokalt som er brukt i schematypes
import { users } from './users'

//Eksporterer brukt å sette opp struktur og skal bruke i sanity
export const schemaTypes = [event, users]