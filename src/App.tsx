import {
    AppRoot,
    Group,
    Header,
    Panel,
    PanelHeader,
    platform,
    SplitCol,
    SplitLayout,
    View
} from "@vkontakte/vkui";
import {GetGroupsResponse} from "./API/GroupService.ts";
import {useEffect, useMemo, useState} from "react";
import {setFilteredGroups, setGroups} from "./store/slices/GroupsReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import MyGroup from "./components/group/MyGroup.tsx";
import Input from "./components/input/Input.tsx";
import PrivacyFilter from "./components/filters/PrivacyFilter.tsx";
import AvatarFilter from "./components/filters/AvatarFilter.tsx";
import FriendsFilter from "./components/filters/FriendsFilter.tsx";


function App() {
    const dispatch  = useDispatch()

    useEffect(() => {
        async function fetchData() {
            const data = await GetGroupsResponse().then(data => data.data);
            dispatch(setGroups(data))
            dispatch(setFilteredGroups(data))
        }
        fetchData();
    }, [])
    const filteredGroups: Group[] = useSelector(state => state.groups.filteredGroups)


    return (
        <AppRoot>
            <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>Профильное задание на стажера ВК</PanelHeader>
                            <PrivacyFilter/>
                            <AvatarFilter/>
                            <FriendsFilter/>
                            <Input/>
                            <Group header={<Header mode="secondary">Список групп</Header>}>
                                {filteredGroups.map(group => <MyGroup key={group.id} {...group}></MyGroup>)}
                            </Group>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    )
}

export default App
