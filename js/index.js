const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("select");

const getData = async function(numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    //console.log(data);
    const userResults = data.results; //gets arrays from object
    //console.log(usersResults);
    displayUsers(userResults);
};

getData(1);

const displayUsers = function(userResults) {
    randomFolks.innerHTML = ""; //emptying the element

    for (const user of userResults) {
        const name = user.name.first;
        const country = user.location.country;
        const img = user.picture.medium;

        const userDiv = document.createElement("div");
        userDiv.innerHTML =
            `<h3>${name}</h3>
            <p>${country}</p>
            <img src=${img} alt="User avatar" />`;
        randomFolks.append(userDiv);
    }
};

selectUserNumber.addEventListener("change", function(e) {
    numUsers = e.target.value;
    getData(numUsers);
});