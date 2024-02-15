const gallery = document.querySelector('.results')

fetch(`scripts/robots.json`)
  .then(response => response.json())
  .then(data => {
    console.log(data.robots);
    
    // Fonction pour afficher tous les utilisateurs
    function displayRobots() {
      data.robots.forEach(function(singleRobot){
        gallery.innerHTML += `<div class="robot"><h4>${singleRobot.first_name} <strong>${singleRobot.last_name}</strong></h4><div class="image ${singleRobot.gender}"><img class="robot-img" src="${singleRobot.portrait}" title="${singleRobot.first_name}_${singleRobot.last_name}"><div class="robot__type"><strong>Type</strong> : ${singleRobot.type}</div><div class="robot__language"><strong>Langue parlée</strong> :<br>${singleRobot.language}</div></div><p>${singleRobot.description}</p></div>
        `
      })
    }
    displayRobots()
    /* Fonction pour afficher un utilisateur seul
    
    */
      // Délégation d'événememnt sur gallery
      gallery.addEventListener('click', function(e){
        if(e.target.classList.contains('user-img')) {
          displaySingleRobot(data.users[e.target.getAttribute('data-userid')-1])
        }
      })

    

  })



 
