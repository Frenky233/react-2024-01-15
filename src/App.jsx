import { Layout } from "./components/layout/component";
import { Tabs } from "./components/tabs/component";
import { restaurants } from "./constants/mock";

import './styles/index.scss';

export const App = () =>{
    return <Layout>
        <Tabs restaurants={restaurants} />
    </Layout>;
};