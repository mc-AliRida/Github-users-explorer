document.addEventListener('DOMContentLoaded', function (event) {

    const searchForm = document.getElementById('search-form')
    const searchInput = document.getElementById('search-bar')
    const username = document.getElementById('user_name')
    const bio = document.getElementById('user_bio')
    const location = document.getElementById("user_location")
    const followers = document.getElementById("user_followers")
    const following = document.getElementById("user_following")
    const repositories = document.getElementById("user_repositories")
    const avatar = document.getElementById('user_avatar')
    const company = document.getElementById("user_company")
    const profileLink = document.getElementById("user_profile_link")
    const repoContainer = document.getElementById("repos-container")

    function fillUserData(userData) {
        avatar.src = userData.avatar_url
        username.textContent = userData.name || userData.login
        bio.textContent = userData.bio || 'No bio available'
        location.textContent = userData.location || 'Not specified'
        followers.textContent = userData.followers
        following.textContent = userData.following
        repositories.textContent = userData.public_repos
        company.textContent = userData.company || 'Not specified'
        profileLink.innerHTML = `<a href="${userData.html_url}" target="_blank" style="color: #60a5fa;">View Profile</a>`;

    }

    function fillRepoData(repositoriesData) {
        repoContainer.innerHTML = ''
        const reposToDisplay = repositoriesData.slice(0, 6)
        reposToDisplay.forEach(repo => {
            const div = document.createElement("div")
            div.className = 'item_'
            div.innerHTML = `
                <div class="repo_row">
                    <div class="repo_name">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="repo_details_">
                        <div class="info_ star">
                            <i class="fa fa-star-o"></i> ${repo.stargazers_count}
                        </div>
                        <div class="info_ fork">
                            <i class="fa fa-code-fork"></i> ${repo.forks_count}
                        </div>
                        <div class="info_ size">
                            <i class="fa fa-file"></i> ${repo.size} KB
                        </div>
                    </div>
               
                  </div>  `

            repoContainer.appendChild(div)

        });



    }
    async function handleSearch(event) {

        event.preventDefault()
        const query = searchInput.value.trim()
        if (!query)
            return
        try {

            const userData = await fetchUserData(query)
            //  console.log(userData)
            fillUserData(userData)
            const repositoriesData = await fetchRepoData(query)
            fillRepoData(repositoriesData)
        }
        catch (error) {
            console.error(`Error ${error.message}`)
        }
    }


    searchForm.addEventListener('submit', handleSearch)
})