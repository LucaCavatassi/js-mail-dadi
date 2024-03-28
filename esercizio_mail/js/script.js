const userMail = prompt ("Qual'è la tua mail?");
const acceptedMails = ["pippo@mail.com", "pluto@mail.com", "topolino@mail.com"];

// pippo@mail.com
let flag = false;

for (i = 0; i < acceptedMails.length && flag == true; i++){
    if (userMail === acceptedMails [i]){
        flag = true;
        // i = acceptedMails.length
    }
}

if (flag == true) {
    console.log("Sei autorizzato ad accedere! " + userMail);
} else {       
    console.log("Non sei autorizzato!");
}

// Inizio a leggere la lista nome per nome 
//     Se il nome è nella lista 
//         segno che è nella lista

// Se non l'ho segnato 
//     lo caccio 
// Altrimenti
//     lo faccio entrare 

