
let user = "";
let pc = "";
let userNum = Math.floor(Math.random() * 7);
console.log(userNum);
let pcNum = Math.floor(Math.random() * 7);
console.log(pcNum);

if (userNum > pcNum) {
    user = `Hai vinto ti è uscito ${userNum} che è più alto di ${pcNum}`;
}else {
    user = `Hai perso al pc è uscito ${pcNum} che è più alto di ${userNum}`;
}
console.log(user);