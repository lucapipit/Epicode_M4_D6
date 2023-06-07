
const apiUrl = "https://jsonplaceholder.typicode.com/users";
const myTbody = document.getElementById("myTbody");
const searchInput = document.getElementById("searchInput");
const filterName = document.getElementById("filterName");
const filterUsername = document.getElementById("filterUsername");
const filterEmail = document.getElementById("filterEmail");
let dropdownMenuLink = document.getElementById("dropdownMenuLink");

let myFilterValue;

filterName.addEventListener("click", () => {
    myFilterValue = filterName.innerText;
    dropdownMenuLink.innerText = myFilterValue;
    dropdownMenuLink.classList.add("btnAnim");
    searchInput.classList.add("animation");
})
filterUsername.addEventListener("click", () => {
    myFilterValue = filterUsername.innerText;
    dropdownMenuLink.innerText = myFilterValue;
    dropdownMenuLink.classList.add("btnAnim");
    searchInput.classList.add("animation");
})
filterEmail.addEventListener("click", () => {
    myFilterValue = filterEmail.innerText;
    dropdownMenuLink.innerText = myFilterValue;
    dropdownMenuLink.classList.add("btnAnim");
    searchInput.classList.add("animation");
})

getApi();
async function getApi(){
    try {
        let promise = await fetch(apiUrl);
        let jsonData = await promise.json();
        let stringyData = JSON.stringify(jsonData);
        window.localStorage.setItem("datas", stringyData);
        let inStorageData = localStorage.getItem("datas");

        console.log(JSON.parse(inStorageData));

        searchInput.addEventListener("keydown", () => {
            if(myFilterValue){
                switch(myFilterValue){
                    case "name":
                        let searchName = jsonData.filter((el) => el.name.toLowerCase().includes(searchInput.value.toLowerCase()));
                        domVisual(searchName);
                    break;
                    case "username":
                        let searchUsername = jsonData.filter((el) => el.username.toLowerCase().includes(searchInput.value.toLowerCase()));
                        domVisual(searchUsername);
                    break;
                    case "email":
                        let searchEmail = jsonData.filter((el) => el.email.toLowerCase().includes(searchInput.value.toLowerCase()));
                        domVisual(searchEmail);
                    break;
                }
            }else{
                console.log("inserire categoria");
            }
            
        })
        domVisual(jsonData);
        
    } catch (error) {
        console.log("errore, sei nella catch");
    }
}


function createTable(input){
    let myTr = document.createElement("tr");
    let myNameTd = document.createElement("td");
    myNameTd.innerText = input.name;
    let myUsernameTd = document.createElement("td");
    myUsernameTd.innerText = input.username;
    let myEmailTd = document.createElement("td");
    myEmailTd.innerText = input.email;
    myTr.append(myNameTd, myUsernameTd, myEmailTd);
    myTbody.appendChild(myTr);
}

function domVisual(input){
    myTbody.innerHTML = "";
    input.forEach(element => {
        createTable(element);
    });
}









/* async function getApi() {
    try {

        let datas = window.localStorage.getItem("data");
        
        if (datas == null) {

            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
            // Transformazione di data in JSON
            const students = JSON.stringify(data);
            // Stockage delle informazioni dentro lo localStorage
            window.localStorage.setItem("data", students);
        } else {
            return JSON.parse(datas);
        }

    } catch (error) {
        console.log(error);
    }
}
getApi();
console.log("ciao"); */