import EventItem from "./event-item";
import styles from './event-list.module.css';

function EventList(props){
    const {items} = props;

    return(
        <ul className={styles.list}>
            {items.map(event => ( 
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    image={event.image}
                    location={event.location}
                    date={event.data}                    
                />
            ))}
        </ul>
    );
};

export default EventList;