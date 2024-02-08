import { useState } from "react";
import { Layout } from "./components/layout/component";
import { Tabs } from "./components/tabs/component";
import { restaurants } from "./constants/mock";
import { UserContext } from './contexts/user';
import { Provider } from "react-redux";
import { store } from "./redux";

import './styles/index.scss';


export const App = () =>{
    const [user, setUser] = useState({name: '', eMail: '', isAuthenticated: false})
    
    return (
        <Provider store={store}>
            <UserContext.Provider value={{ ...user, setUser }}>
                <Layout>
                    <Tabs restaurants={restaurants} />
                </Layout>
            </UserContext.Provider>
        </Provider>
    )
};