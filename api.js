

async function fetchUserData(username) {


    const response = await fetch(`https://api.github.com/users/${username}`)
    if (!response.ok) {
        throw new Error(`User not found`)
    }
    return await response.json()


}

async function fetchRepoData(username) {

    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    if (!response.ok) {
        throw new Error(`Failed to load repositories`)
    }
    return await response.json()




}
