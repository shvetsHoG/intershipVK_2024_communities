import {FC, useEffect, useState} from 'react';
import {Avatar, IconButton, SimpleCell, Tappable} from "@vkontakte/vkui";
import {Icon48ChevronDownOutline} from "@vkontakte/icons";
import classes from "./MyGroup.module.css"

const MyGroup: FC<Group> = ({id, closed, name, friends, members_count, avatar_color}) => {

    let classList = [classes.friendList]
    const [visible, setVisible] = useState(false)
    const groupClosedHandler = (closed: boolean) => {
        if (closed) {
            return "Закрытая группа"
        }
        return "Открытая группа"
    }

    const groupMembersHandler = () => {
        return <div className={classes.friendsWrapper}>
            <div className={classes.friends}>{members_count} участников</div>
            {friends?.length
                && <div className={classes.friends} onClick={() => toggleFriendsVisible()}>
                    {friends.length} друзей
            </div>
            }
        </div>
    }

    const toggleFriendsVisible = () => {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    if (visible) {
        classList.push(classes.active)
    }

    return (
        <Tappable>
            <SimpleCell
                style={{marginBottom:"10px"}}
                before={<Avatar size={88} style={{backgroundColor: avatar_color}}></Avatar>}
                after={
                    <IconButton label="Развернуть список">
                        <Icon48ChevronDownOutline/>
                    </IconButton>}
                subhead={groupClosedHandler(closed)}
                subtitle={groupMembersHandler()}
            >
                {name}
            </SimpleCell>
            {friends?.length &&
                <div className={classList.join(" ")}>
                    {friends.map(friend => <div>{friend.first_name} {friend.last_name}</div>)}
                </div>
            }
        </Tappable>
    )
}

export default MyGroup;