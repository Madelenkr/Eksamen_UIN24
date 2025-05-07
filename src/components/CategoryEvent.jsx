export default function CategoryEvent({ event }) {
    const eventImage = event.images?.[0]?.url

    return (
        <>
        <article>
            {eventImage && <img src={eventImage} alt={event.name} className="eventImg"/>}
            <h3>{event.name}</h3>
        </article>
        </>
    )
}