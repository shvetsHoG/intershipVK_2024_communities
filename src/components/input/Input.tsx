import {FormField} from "@vkontakte/vkui";
import classes from "./Input.module.css"
import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFilteredGroups} from "../../store/slices/GroupsReducer.ts";

const Input: FC = () => {

    const [text, setText] = useState('')
    const groups: Group[] = useSelector(state => state.groups.groups)
    const dispatch = useDispatch()

    const changeGroups = () => {
        dispatch(setFilteredGroups([...groups].filter(group => group.name.toLowerCase().includes(text.toLowerCase()))))
    }

    useEffect(() => {
        changeGroups()
    }, [text]);

    return (
        <FormField style={{marginBottom:"25px"}}>
            <input value={text} onChange={(e) => setText(e.target.value)} className={classes.wrapper} type="text" placeholder="Введите название группы" />
        </FormField>
    );
};

export default Input;