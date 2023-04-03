import Head from 'next/head';

//import { getFeaturedEvents } from '../dummy-data';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props){
    //const featuredEvents = getFeaturedEvents();
    return(
        <div>
            <Head>
                <title>NextJS events</title>
                <meta 
                    name='description'
                    content='Find a lot of great events that allow you to evolve ...'
                />
            </Head>
            <EventList items={props.events}/>
        </div>
    );
};

export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents();
    
    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800
    }
};

export default HomePage;