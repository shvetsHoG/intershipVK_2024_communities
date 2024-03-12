import React, {useEffect, useState} from 'react';
import {Group} from "@vkontakte/vkui";
import {useDispatch, useSelector} from "react-redux";
import classes from "./Filter.module.css";
import {setFilteredGroups} from "../../store/slices/GroupsReducer.ts";

const FriendsFilter = () => {

    const [value, setValue] = useState("")
    const options = ["есть друзья", "нет друзей"]

    const groups: Group[] = useSelector(state => state.groups.groups)
    const dispatch = useDispatch();

    const changeGroups = () => {
        switch (value) {
            case "есть друзья": {
                dispatch(setFilteredGroups([...groups].filter(group => group.friends?.length)))
                break;
            }
            case "нет друзей" : {
                dispatch(setFilteredGroups([...groups].filter(group => !group.friends?.length)))
                break;
            }
        }
    }

    useEffect(() => {
        changeGroups()
    }, [value]);

    return (
        <select className={classes.wrapper} name="" id="" onChange={(event) => setValue(event.target.value)}>
            {options.map(option => <option value={option}>{option}</option>)}
        </select>
    );
};

export default FriendsFilter;