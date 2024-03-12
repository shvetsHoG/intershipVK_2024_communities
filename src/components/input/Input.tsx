import {FormField} from "@vkontakte/vkui";
import classes from "./Input.module.css"
import {FC} from "react";

const Input: FC = () => {
    return (
        <FormField style={{marginBottom:"25px"}}>
            <input className={classes.wrapper} type="text" placeholder="Введите название группы" />
        </FormField>
    );
};

export default Input;