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
import {useEffect} from "react";
import {setFilteredGroups, setGroups, setLoading} from "./store/slices/GroupsReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import MyGroup from "./components/group/MyGroup.tsx";
import Input from "./components/input/Input.tsx";
import PrivacyFilter from "./components/filters/PrivacyFilter.tsx";
import AvatarFilter from "./components/filters/AvatarFilter.tsx";
import FriendsFilter from "./components/filters/FriendsFilter.tsx";
import {Icon28Spinner} from "@vkontakte/icons";
import "./App.css"


function App() {
    const dispatch  = useDispatch()
    let result = 0;

    useEffect(() => {
        async function fetchData() {
            const responce = await GetGroupsResponse();
            const data = responce.data;
            result = responce.result;
            dispatch(setGroups(data));
            dispatch(setFilteredGroups(data));
            dispatch(setLoading());
        }
        fetchData();
    }, [])

    const groups: Group[] = useSelector(state => state.groups.groups)
    const filteredGroups: Group[] = useSelector(state => state.groups.filteredGroups)
    const loading: boolean =  useSelector(state => state.groups.loading)

    return (
        <AppRoot>
            <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>Профильное задание на стажера ВК</PanelHeader>
                            <Group style={{display:"flex", gap:"2px", flexDirection:"column"}} header={<Header mode="secondary">Фильтр поиска</Header>}>
                                <PrivacyFilter/>
                                <AvatarFilter/>
                                <FriendsFilter/>
                            </Group>
                            <Group header={<Header mode="secondary">Список групп</Header>}>
                                <Input/>
                            </Group>
                            <Group header={<Header mode="secondary">Список групп</Header>}>
                                {loading &&
                                    <div style={{display:"flex", justifyContent: "center"}}>
                                        <Icon28Spinner className="spinner"></Icon28Spinner>
                                    </div>
                                }
                                {!result || groups.length !== 0
                                    ? filteredGroups.map(group => <MyGroup key={group.id} {...group}></MyGroup>)
                                    :<div style={{textAlign: "center"}}>Ошибка сервера, пожалуйста, попробуйте позже :(</div>}
                            </Group>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    )
}

export default App
