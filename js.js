console.log("js.js is working!")
const CheckPasskey = (Passkey) =>{
    const answer = prompt('Passkey?');
if (answer === Passkey){
    alert("You may enter!");}
else {
    alert('O wrong nah!')
    }
};
const play =()=> {
    return 5;
}
const ActivateCheck = (PK_proxy) =>{
    var PK_resolve = String(PK_proxy);
    CheckPasskey(PK_resolve);
}
ActivateCheck("Car");
document.write("Hello...")