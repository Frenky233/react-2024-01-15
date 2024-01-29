import { useState } from 'react';
import styles from './styles.module.scss'
import { Radio } from '../radio/component';
import { Tab } from '../tab/component';

export const Tabs = ({restaurants}) =>{
    const [currentTab, setCurrentTab] = useState(restaurants[0].id);
    
    return (
        <div>
            <div className={styles.tabs}>
                {restaurants.map((restaurant) => (
                    <Radio 
                        title={restaurant.name} 
                        name={'restaurants'} 
                        onChange={() => setCurrentTab(restaurant.id)} 
                        checked={currentTab === restaurant.id} 
                        className={styles.tabsRadio}
                    />
                ))}
            </div>
            <Tab restaurant={restaurants.find(restaraunt => restaraunt.id === currentTab)}/>   
        </div>
    )
};