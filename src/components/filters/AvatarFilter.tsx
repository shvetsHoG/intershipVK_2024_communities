import {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from "./Filter.module.css";
import {setFilteredGroups} from "../../store/slices/GroupsReducer.ts";

const AvatarFilter: FC = () => {

    const [value, setValue] = useState("")
    const groups: Group[] = useSelector(state => state.groups.groups)
    const dispatch = useDispatch();

    const options: string[] = ["любой"]

    groups.forEach(group => {
        if (group.avatar_color && !options.includes(group.avatar_color)) {
            options.push(group.avatar_color)
        }
    })

    const changeGroups = () => {
        if (value === "любой") {
            dispatch(setFilteredGroups([...groups]))
        } else {
            dispatch(setFilteredGroups([...groups].filter(group => group.avatar_color === value)))
        }
    }

    useEffect(() => {
        changeGroups()
    }, [value]);

    return (
        <select className={classes.wrapper} name="" id="" onChange={(event) => setValue(event.target.value)}>
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    );
};

export default AvatarFilter;