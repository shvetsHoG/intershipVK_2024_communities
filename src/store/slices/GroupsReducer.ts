import {createSlice} from "@reduxjs/toolkit";

interface GroupState {
    groups?: Group[]
    filteredGroups?: Group[]
}

const initialState: GroupState = {
    groups: [],
    filteredGroups: [],
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
        }
    }
})

export default GroupsReducer.reducer
export const {setGroups, setFilteredGroups} = GroupsReducer.actions