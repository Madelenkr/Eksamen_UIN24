export const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'event',
      title: 'Event title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text'
    },
    {
      name: 'apiId',
      title: 'Ticketmaster API ID',
      type: 'string',
      description: 'ID til arrangementet hentet fra Ticketmaster sitt API',
    },
  ],
  
}