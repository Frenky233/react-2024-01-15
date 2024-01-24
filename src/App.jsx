import { Layout } from "./components/layout/component";
import { RestaurantList } from "./components/restaurantList/component";
import { restaurants } from "./constants/mock";

import './styles/index.scss';

export const App = () =>{
    return <Layout>
        <RestaurantList restaurants = {restaurants}/>
    </Layout>;
};