const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possuí nome cadastrado 😭'}</h1>
                                            <p class="bio">${user.bio ?? 'Não possuí bio cadastrada 😭'}</p>
                                            <div class="followers">
                                                <p>👥 Seguidores: ${user.followers}</p>·<p>Seguindo: ${user.following}</p>
                                            </div>
                                        </div>
                                      </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">
                                                                    ${repo.name} 
                                                                    <div class="stats-container">
                                                                        <p class="repo-stats">🍴 ${repo.forks}</p> 
                                                                        <p class="repo-stats">⭐ ${repo.stargazers_count}</p> 
                                                                        <p class="repo-stats">👀 ${repo.watchers}</p> 
                                                                        <p class="repo-stats">📕 ${repo.language ?? 'N/A'}</p>
                                                                    </div>
                                                                    </a>
                                                                </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = ''
        user.events.forEach(event => eventsItens += `<li>
                                                        <span class="date">${event.created_at}</span>
                                                        <p><strong>${event.repo.name}</strong></p> 
                                                        <span class="desc">${event.payload.description ?? event.payload.commits[0].message}</span> 
                                                    </li>`)

        this.userProfile.innerHTML += `<div class="events">
                                        <h2>Eventos</h2>
                                        <ul>${eventsItens}</ul>
                                       </div>`
        
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }