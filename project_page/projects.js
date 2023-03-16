const SERVER_URL = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects'

window.onload = () => {

    function getTitleURL() {
        const params = new Proxy (new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop), 
        })
        return params.title.toLowerCase()
    }

    async function getProjectData(contact) {
        const response = await fetch(SERVER_URL)
        const projects = await response.json()
        const [projectToDisplay] = projects.filter(project => project.name.toLowerCase() === getTitleURL())
        
        console.log(projectToDisplay)
        updateProjectData(projectToDisplay)

    }

    function updateProjectData(projectToDisplay) {
        const projectTitleHeader = document.querySelector('.project-title')
        projectTitleHeader.textContent = projectToDisplay.name
        const projectSubtitle = document.querySelector('.project-subtitle')
        projectSubtitle.textContent = projectToDisplay.description
        const projectCompletedOn = document.querySelector('.project-subtitle-completed span')
        projectCompletedOn.textContent = projectToDisplay.completed_on
        const projectImg = document.querySelector('.project-img-big')
        projectImg.src = projectToDisplay.image
        const projectExplanation = document.querySelector('.project-explanation-first-p')
        projectExplanation.innerHTML = projectToDisplay.content
    }
    
    getProjectData()

}