import styles from './styles.module.scss'
import { Radio } from '../radio/component';
import { RestaurantItem } from '../restaurantItem/component';
import { useSelector } from 'react-redux';
import { selectRestaurantById, selectRestaurantIds } from '../../redux/entities/restaurants/selector';

export const Tabs = ({currentTab, onSelect}) =>{
    const restaurantIds = useSelector(selectRestaurantIds);

    return (
        <div>
            <div className={styles.tabs}>
                {restaurantIds && restaurantIds.map((id) => (
                    <Radio 
                        title={useSelector(state => selectRestaurantById(state, id)).name} 
                        name={'restaurants'} 
                        onChange={() => onSelect(id)} 
                        checked={currentTab === id} 
                        className={styles.tabsRadio}
                        key={id}
                    />
                ))}
            </div>
            {currentTab && <RestaurantItem restaurantId={restaurantIds.find(id => id === currentTab)} />}
        </div>
    )
};