document.getElementById("start").addEventListener("click", function() {
    let user = "";
    let userNum = Math.floor(Math.random() * 7);
    console.log(userNum);
    let pcNum = Math.floor(Math.random() * 7);
    console.log(pcNum);
    
    if (userNum > pcNum) {
        user = `Hai vinto ti è uscito ${userNum} che è più alto di ${pcNum}!`;
    }else if (userNum === pcNum) {
        user = `Hai pareggiato al pc è uscito ${userNum} e a te ${pcNum}!`
    }else {
        user = `Hai perso al pc è uscito ${pcNum} che è più alto di ${userNum}!`;
    }
    console.log(user);

    const divElem = document.getElementById("page"); 
    console.log(divElem);
    divElem.classList.add("hide")

    const bodyElem = document.getElementById("resultPage")
    console.log(bodyElem);
    bodyElem.append(`${user}`)
})

