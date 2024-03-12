import {createSlice} from "@reduxjs/toolkit";

interface GroupState {
    groups?: Group[]
}

const initialState: GroupState = {
    groups: []
}

const GroupsReducer = createSlice({
    name: "groups",
    initialState,
    reducers: {
        setGroups: (state, {payload}) => {
            state.groups = payload
        }
    }
})

export default GroupsReducer.reducer
export const {setGroups} = GroupsReducer.actions