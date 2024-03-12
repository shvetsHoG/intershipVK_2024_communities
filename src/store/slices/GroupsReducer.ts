import {createSlice} from "@reduxjs/toolkit";

interface GroupState {
    loading?: boolean
    groups?: Group[]
    filteredGroups?: Group[]
    groupsForFiltering?: Group[]
}

const initialState: GroupState = {
    loading: true,
    groups: [],
    filteredGroups: [],
    groupsForFiltering: [],
}

const GroupsReducer = createSlice({
    name: "groups",
    initialState,
    reducers: {
        setGroups: (state, {payload}) => {
            state.groups = payload
        },
        setFilteredGroups: (state, {payload}) => {
            state.filteredGroups = payload
        },
        setGroupsForFiltering: (state, {payload}) => {
            state.groupsForFiltering = payload
        },
        setLoading: (state) => {
            state.loading = false
        },
    }
})

export default GroupsReducer.reducer
export const {setGroups, setFilteredGroups, setLoading, setGroupsForFiltering} = GroupsReducer.actions