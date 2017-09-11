var name = localStorage.username;
name = localStorage["username"];
if (!name) {
    name = prompt("What is your name?");
    localStorage.username = name;
}
for(var name in localStorage){
    console.log(name +"---"+localStorage[name])
}
