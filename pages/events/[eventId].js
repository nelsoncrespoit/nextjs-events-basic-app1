//import { useRouter } from 'next/router';
//import { getEventById } from '../../dummy-data';
//import EventItem from '../../components/events/event-item';
//import ErrorAlert from '../../components/ui/error-alert';
//import { getFeaturedEvents } from '../../helpers/api-util';

import { getAllEvents } from '../../helpers/api-util';
import { getEventById } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { Fragment } from 'react';
import Head from 'next/head';



function EventDetailPage(props){
    //const router = useRouter();
    // const eventId = router.query.eventId;
    //const event = getEventById(eventId);
    const event = props.selectedEvent;

    if(!event){
        return(
            // <ErrorAlert>
            //     <p>No event found so far !</p>
            // </ErrorAlert>
            <div className='center'>
                <p>Loading ... !!!</p>
            </div>
        );
    }

    return(
        <Fragment>
            <Head>
                <title>{event.title}</title>
                <meta
                    name='description'
                    content={event.description} 
                />
            </Head>
            <EventSummary title={event.title}/>
            <EventLogistics 
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
};

export async function getStaticProps(context){
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);

    return{
        props: {
            selectedEvent: event
        },
        revalidate: 30,
    }
};

export async function getStaticPaths(){
    const events = await getAllEvents();
    const paths = events.map(event => ({ params: { eventId : event.id }}));

    return {
        paths: paths,
        fallback: false
    }
};

export default EventDetailPage;