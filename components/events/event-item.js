//import Link from "next/link";
import Button from "../ui/button";
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowIcon from '../icons/arrow-right-icon';
import styles from './event-item.module.css';

function EventItem(props){
    const {title, image, date, location, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year:'numeric'
    });
    
    const formattedAddress = location.replace(', ', '\n');
    const exploredLink = `/events/${id}`;
    
    return(
        <li key={id} className={styles.item}>
            <img src={'/' + image} alt={title}/>
            <div className={styles.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploredLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}><ArrowIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;