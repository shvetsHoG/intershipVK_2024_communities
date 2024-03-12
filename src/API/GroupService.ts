
export const GetGroupsResponse = async ():Promise<GetGroupsResponse> => {
    const data = await fetch("src/resources/groups.json")
        .then(response => response.json()
        )

    return {
        result: 1,
        data
    }
}