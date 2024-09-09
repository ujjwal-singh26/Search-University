let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("#search-btn");
let inputField = document.querySelector("#country-input");

btn.addEventListener("click", async () => {
    let country = inputField.value.trim();
    if (country === "") {
        alert("Please enter a country name");
        return;
    }
    console.log(country);

    let collArr = await getColleges(country);
    show(collArr);
});

function show(collArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of collArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("ERROR:", e);
        return [];
    }
}