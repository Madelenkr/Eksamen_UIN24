export const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'event',
      title: 'Event Name',
      type: 'string',
    },
    {
      name: 'eventslug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'eventsname',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}