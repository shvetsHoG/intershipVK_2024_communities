import {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from "./Filter.module.css";
import {setFilteredGroups} from "../../store/slices/GroupsReducer.ts";
import {Consts} from "../../consts/Consts.ts";

const FriendsFilter: FC = () => {

    const [value, setValue] = useState("")
    const options: Consts[] = [Consts.ALL,Consts.HAVE_FRIENDS, Consts.NO_FRIENDS]

    const groups: Group[] = useSelector(state => state.groups.groups)
    const dispatch = useDispatch();

    const changeGroups = () => {
        switch (value) {
            case Consts.ALL: {
                dispatch(setFilteredGroups([...groups]))
                break;
            }
            case Consts.HAVE_FRIENDS: {
                dispatch(setFilteredGroups([...groups].filter(group => group.friends?.length)))
                break;
            }
            case Consts.NO_FRIENDS: {
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
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    );
};

export default FriendsFilter;