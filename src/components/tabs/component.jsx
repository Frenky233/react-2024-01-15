import { useState } from 'react';
import styles from './styles.module.scss'
import { Radio } from '../radio/component';
import { RestaurantItem } from '../restaurantItem/component';
import { useSelector } from 'react-redux';
import { selectRestaurantById, selectRestaurantIds } from '../../redux/entities/restaurants/selector';

export const Tabs = ({}) =>{
    const restaurantIds = useSelector(selectRestaurantIds);
    const [currentTab, setCurrentTab] = useState(restaurantIds[0]);
    
    return (
        <div>
            <div className={styles.tabs}>
                {restaurantIds.map((id) => (
                    <Radio 
                        title={useSelector(state => selectRestaurantById(state, id)).name} 
                        name={'restaurants'} 
                        onChange={() => setCurrentTab(id)} 
                        checked={currentTab === id} 
                        className={styles.tabsRadio}
                    />
                ))}
            </div>
            <RestaurantItem restaurantId={restaurantIds.find(id => id === currentTab)} /> 
        </div>
    )
};