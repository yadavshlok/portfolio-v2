const dropdownMenu = document.querySelector("#dropdownMenu");
const menuIcon = document.querySelector("#menu");
const list = document.querySelector(".toggle-list");

menuIcon.addEventListener("click", () => {
    menuToggle();
    menuIcon.classList.toggle("scale-105");
    list.addEventListener("click", () => {
        dropdownMenu.classList.remove("flex");
        dropdownMenu.classList.add("hidden");
    })
})

function menuToggle(params) {
        dropdownMenu.classList.toggle("hidden");
        dropdownMenu.classList.toggle("flex");
}

const projectList = [

  {
    id: 1,
    title: "Medware - Healthcare Companion",
    img: "build/img/medware.png",
    githubLink: "https://github.com/tanpreetjolly/Medware",
    live: "https://medware.onrender.com",
    desc: "A Healthcare Website consisting of a Disease Predictor made in React, Django, Tailwind and Machine Learning.",
  },
  {
    id: 2,
    title: "Creativerse - Blogs with AI",
    img: "https://i.imgur.com/8dsAJ6e.png",
    githubLink: "https://github.com/tanpreetjolly/Creativerse-Blogs",
    live: "https://blogminds-3hu1.onrender.com/",
    desc: "A full fledged Blogging platform powered with Generative AI",
  },
];

const projectContainer = document.getElementById("project-container");

function displayAllProjects(projectsList){
    let displayProjects = projectsList.map(function(item){
        return `
        <div class="project-card" class="text-gray-300">
            <img src= ${item.img} alt=${item.title}>
            <h2 class="text-xl lg:text-2xl  font-bold mx-3 pt-1 underline underline-offset-8">${item.title}</h2>
            <div class="flex justify-between w-full px-4  projectLinkContainer items-center" >
              <a href=${item.live} target="_blank"><p class="text-sm lg:text-lg">View Project</p></a>
              <a href="${item.githubLink}" target="_blank"><img src="build/img/footer-github.png" alt="github-link""></a>
            </div>
            <p class="m-1 w-4/5 text-xs lg:text-base">${item.desc}</p>
        </div>`

    });
    displayProjects = displayProjects.join("");
    projectContainer.innerHTML = displayProjects;
}

window.addEventListener("DOMContentLoaded", function(){
    displayAllProjects(projectList);
})
