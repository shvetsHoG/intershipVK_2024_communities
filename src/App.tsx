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
import {setGroups} from "./store/slices/GroupsReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import MyGroup from "./components/MyGroup.tsx";


function App() {
    const dispatch  = useDispatch()

    useEffect(() => {
        async function fetchData() {
            const data = await GetGroupsResponse().then(data => data.data);
            dispatch(setGroups(data))
        }
        fetchData();
    }, [])

    const groups: Group[] = useSelector(state => state.groups.groups)

    return (
        <AppRoot>
            <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>Профильное задание на стажера ВК</PanelHeader>
                            <Group header={<Header mode="secondary">Список групп</Header>}>
                                {groups.map(group => <MyGroup key={group.id} {...group}></MyGroup>)}
                            </Group>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    )
}

export default App
