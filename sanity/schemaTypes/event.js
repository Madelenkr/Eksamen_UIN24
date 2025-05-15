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
      name: 'apiId',
      title: 'Ticketmaster API ID',
      type: 'string',
      description: 'ID til arrangementet hentet fra Ticketmaster sitt API',
    },
  ],
}