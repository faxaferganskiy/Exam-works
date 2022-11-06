const elDiv = document.querySelector(".row")

for (let cards of pokemons) {
    const newDiv = document.createElement("div")
    const newImg = document.createElement("img")
    const oldImg = document.createElement("img")
    const newHr = document.createElement("hr")
    const newH3 = document.createElement("h3")
    const oldH3 = document.createElement("h6")
    const newP = document.createElement("p")
    const oldDiv = document.createElement("div")
   
    const basicP = document.createElement("p")
    

    newHr.setAttribute("class", "hr")
    newDiv.setAttribute("class", "card col-3")
    newImg.setAttribute("src", cards.img)
    oldImg.setAttribute("class", "heart")
    oldImg.setAttribute("src", "heart.png")
    newImg.setAttribute("class", "img")
    basicP.setAttribute("class", "basic")
    oldDiv.setAttribute("class", "oldiv")
    newH3.textContent = cards.name
    oldH3.textContent = cards.type 
    newP.textContent = cards.height
    basicP.textContent = cards.weight
    
    elDiv.appendChild(newDiv)
    newDiv.appendChild(newImg)
    newDiv.appendChild(oldImg)
    newDiv.appendChild(newHr)
    newDiv.appendChild(newH3)
    newDiv.appendChild(oldH3)
    newDiv.appendChild(oldDiv)
    oldDiv.appendChild(newP)
    oldDiv.appendChild(basicP)















}