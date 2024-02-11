import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurants/thunks/getRestaurants";
import { Tabs } from "./component";
import { selectIsLoading } from "../../redux/ui/request";

export const TabsContainer = ({}) =>{
    const [requestId, setRequstId] = useState();
    const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));
    const [currentTab, setCurrentTab] = useState();
    const dispatch = useDispatch();

    useEffect(() =>{
        setRequstId(dispatch(getRestaurants()).requestId);
    }, [dispatch]);

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
                ) : (
                    <Tabs currentTab={currentTab} onSelect={setCurrentTab} />
                )
            }
        </>
    )
}