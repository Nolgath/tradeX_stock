// ---------- TOGGLE SUB MENU LISTS ----------
let btns = document.querySelectorAll("button")
btns.forEach(btn =>{
    btn.addEventListener("click", toggleList)
})

function toggleList(e){
    e.target.parentNode.nextElementSibling.classList.toggle("hidden")
}

// ---------- RETRIEVE LOCAL STORAGE DATA ----------
let {the_cars} = JSON.parse(localStorage.getItem('car'))
displayCarsTable(the_cars)

function displayCarsTable(array){
    let list_container = document.querySelector('.list_container')
    let tbody = document.querySelector('tbody')
    array.forEach(car => {
        tbody.innerHTML += `
            <tr>
            <td>${car.FIN}</td>
            <td>${car.Hersteller}</td>
            <td>${car.Modell}</td>
            <td>${car.Ausstattungslinie}</td>
            <td>${car['EK Netto']}</td>
            </tr>
        `
    });
}

// ---------- GET UNIQUE BRANDS LOWERCASED FROM Hersteller.  ----------
//Select a field from the array's objects. 
// --------BRANDS
const all_brands = the_cars.map(car => car.Hersteller.toLowerCase())
// --------BRANDS
const all_models = the_cars.map(car => String(car.Modell).toLowerCase())



// ---------- COUNT PER BRAND ----------
const count_brands = {}
all_brands.forEach(brand => {
    if(!Object.keys(count_brands).includes(brand)){
        count_brands[brand]  = 1
    }else{
        count_brands[brand] = count_brands[brand] + 1
    }
})

// ---------- COUNT PER MODEL ----------
const count_models = {}
all_models.forEach(model => {
    if(!Object.keys(count_models).includes(model)){
        count_models[model]  = 1
    }else{
        count_models[model] = count_models[model] + 1
    }
})

// ---------- ADD BRANDS TO BRANDS MENU ----------
brandsAvailable()
function brandsAvailable() {
    let brands_available_li = document.querySelector('#brands_available')

    for (const [key,value] of Object.entries(count_brands)) {
        brands_available_li.innerHTML += `<p><input type="checkbox"> ${key} (${value})</p>`
    }
}
// ---------- ADD MODELS TO MODELS MENU ----------
modelsAvailable()
function modelsAvailable() {
    let models_available_li = document.querySelector('#models_available')

    for (const [key,value] of Object.entries(count_models)) {
        models_available_li.innerHTML += `<p><input type="checkbox"> ${key} (${value})</p>`
    }
}


/*
// The three dots "..." are used to merge/join
const distinct_brands = [ ...new Set([...all_brands]) ]

*/