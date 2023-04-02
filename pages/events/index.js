import { Fragment } from "react";
import { useRouter } from "next/router";

//import { getAllEvents } from "../../dummy-data";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";

function AllEventsPage(props){
    //const events = getAllEvents();
    const { events } = props;
    const router = useRouter();

    function findsEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`;        
        router.push(fullPath);
    };
    
    return(
        <Fragment>
            <EventsSearch onSearch={findsEventsHandler}/>
            <EventList items={events}/>
        </Fragment>
    );
};

export async function getStaticProps(){
    const events = await getAllEvents();
    
    return {
        props: {
            events: events
        },
        revalidate: 60
    }
};

export default AllEventsPage;