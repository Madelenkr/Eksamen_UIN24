//Eksporterer sanity shcema "event" 
export const event = {
  //Navn på feltet
  name: 'event',
  //Navnet som vises i sanity
  title: 'Event',
  //Dette er et dokument
  type: 'document',
  fields: [
    {
      name: 'event',
      title: 'Event title',
      //Data typen tekst
      type: 'string', 
      type: 'string',
    },
    {
      name: 'apiId',
      title: 'Ticketmaster API ID',
      type: 'string',
    },
  ],
  
}