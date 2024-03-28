const userMail = prompt ("Qual'è la tua mail?");
const acceptedMails = ["pippo@mail.com", "pluto@mail.com", "topolino@mail.com"];


for (i = 0; i < acceptedMails.length; i++){
    let flag = false;

    if (flag = true){
        console.log("Sei autorizzato ad accedere! " + userMail);
    } else {
        console.log("Non sei autorizzato!");
    }

    if (userMail === acceptedMails [i]){
        flag = true;
    }
}