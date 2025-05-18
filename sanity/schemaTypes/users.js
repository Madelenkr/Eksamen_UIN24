export const users = {
    name: 'user',
    title: 'Bruker',
    type: 'document',
    fields:[
        {
            name: 'profileImage',
            title: 'Profilbilde',
            type: 'image',
        },
        {
            name: 'name',
            title: 'Navn',
            type: 'string',
        },
        {
            name: 'username',
            title: 'Brukernavn',
            type: 'string',
        },
        {
            name:'gender',
            title: 'Kjønn',
            type: 'string',
            options: ['Mann', 'Kvinne', 'Annet'],
        },
        {
            name: 'age',
            title: 'Alder',
            type: 'number',
        },
        {
            name:'previousPurchases',
            title: 'Tidligere kjøp',
            type: 'array',
            of: [{type: 'reference', to: {type: 'event'}}],
        },
        {
            name:'wishlist',
            title: 'Ønskeliste',
            type: 'array',
            of:[{type: 'reference', to: {type: 'event'}}],  
        }
        
    ]
}