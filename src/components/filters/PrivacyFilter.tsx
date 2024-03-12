import React, {useEffect, useState} from 'react';
import {Group} from "@vkontakte/vkui";
import {useDispatch, useSelector} from "react-redux";
import classes from "./Filter.module.css";
import {setFilteredGroups} from "../../store/slices/GroupsReducer.ts";

const PrivacyFilter = () => {

    const [value, setValue] = useState("")
    const options = ["все", "открытая", "закрытая"]

    const groups: Group[] = useSelector(state => state.groups.groups)
    const dispatch = useDispatch();

    const changeGroups = () => {
        switch (value) {
            case "закрытая": {
                dispatch(setFilteredGroups([...groups].filter(group => group.closed)))
                break;
            }
            case "открытая" : {
                dispatch(setFilteredGroups([...groups].filter(group => !group.closed)))
                break;
            }
            case "все" : {
                dispatch(setFilteredGroups([...groups]))
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

export default PrivacyFilter;