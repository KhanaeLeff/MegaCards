const targetElement = document.getElementById('main')
let heroId = 643

// Requête une URL pour récupérer UN héros
fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${heroId}.json`)
.then(response => response.json())
.then(hero => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
	console.log(hero)

  // On va construire du HTML à partir de ces données
  // Par exemple, hero a des propriétés :
  //   - name qui contient le nom du super héros
  //   - work qui contient à son tour deux propriétés base et occupation
  //   - images qui contient à son tour quatre propriétés lg, md, sm, xs
  //     (des URLs vers des images)

    let a = Math.ceil(((hero.powerstats.strength + hero.powerstats.durability) / 2) / 10)
    let b = Math.ceil(((hero.powerstats.intelligence + hero.powerstats.power) / 2) / 10)
    let c = Math.ceil(hero.powerstats.speed / 10)
    let d = Math.ceil(hero.powerstats.combat / 10)
    let caracteristiques = [a, b, c, d]
    let association = []
    const output = []

    function getRandomIndices(nb, maxIndex) {
    const getIndex = maxIndex => Math.floor(Math.random() * (maxIndex + 1))
    while(output.length < nb) {
        const index = getIndex(maxIndex)
        if(!output.includes(index)) {
            output.push(index)
        }
    }
    return output
}

getRandomIndices(4, 3)
for(numberIndex of output) {
    association.push(caracteristiques[numberIndex])
}
    
    let force = association[0]
    let pouvoir = association[1]
    let vitesse = association[2]
    let combat = association[3]


    const html = `
    <div class="carte">
        <h1 class="nom caracteristique">${hero.name}</h1>
        <img class="portrait" alt="${hero.name}'s photo" src="${hero.images.sm}" />
        <p class="pouvoir caracteristique">${pouvoir}</p>
        <p class="force caracteristique">${force}</p>
        <p class="vitesse caracteristique">${vitesse}</p>
        <p class="combat caracteristique">${combat}</p>
    </div>
    `
  targetElement.innerHTML = html
})