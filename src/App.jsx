import { useState } from "react";
import { Layout } from "./components/layout/component";
import { UserContext } from './contexts/user';
import { Provider } from "react-redux";
import { store } from "./redux";

import './styles/index.scss';
import { TabsContainer } from "./components/tabs/container";


export const App = () =>{
    const [user, setUser] = useState({name: '', eMail: '', isAuthenticated: false})
    
    return (
        <Provider store={store}>
            <UserContext.Provider value={{ ...user, setUser }}>
                <Layout>
                    <TabsContainer/>
                </Layout>
            </UserContext.Provider>
        </Provider>
    )
};