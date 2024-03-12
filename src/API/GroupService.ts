
export const GetGroupsResponse = async ():Promise<GetGroupsResponse> => {
    return new Promise((resolve, reject) => {
        setTimeout(async() => {
            const data = await fetch("src/resources/groups.json")
                .then(response => response.json())
                .catch(console.error)
            resolve({result:1, data})
        }, 1000)
    })
}