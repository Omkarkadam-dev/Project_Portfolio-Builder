document.getElementById("portfolioForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let bio = document.getElementById("bio").value;
    let skills = document.getElementById("skills").value.split(",");
    let projects = document.getElementById("projects").value.split(",");

    document.getElementById("portfolioName").innerText = name;
    document.getElementById("portfolioBio").innerText = bio;

    let skillsList = document.getElementById("portfolioSkills");
    skillsList.innerHTML = "";
    skills.forEach(skill => {
        let li = document.createElement("li");
        li.innerText = skill.trim();
        skillsList.appendChild(li);
    });

    let projectsList = document.getElementById("portfolioProjects");
    projectsList.innerHTML = "";
    projects.forEach(project => {
        let li = document.createElement("li");
        li.innerText = project.trim();
        projectsList.appendChild(li);
    });

    document.getElementById("portfolioOutput").classList.remove("hidden");
});
