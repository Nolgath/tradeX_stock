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
//displayCarsTable(the_cars)

function displayCarsTable(array){
    let tbody = document.querySelector('tbody')
    array.forEach(({FIN, Hersteller, Modell, Ausstattungslinie, ['EK Netto'] : ek_netto}) => {
        tbody.innerHTML += `
            <tr>
                <td>${FIN}</td>
                <td>${Hersteller}</td>
                <td>${Modell}</td>
                <td>${Ausstattungslinie}</td>
                <td>${ek_netto}</td>
            </tr>
        `
    });
}

/*
// ---------- FILTER BY VIN  ----------
let input_vin = document.querySelector('#vin_search_bar')

input_vin.addEventListener('change', () => {
    let vin = input_vin.value
    let tbody = document.querySelector('tbody')

    if(vin.length  == 0){
        displayCarsTable(the_cars)
        return
    }

    if(vin.length !== 17){
        alert('Please input 17 characters')
        return
    }

    tbody.innerHTML = ''
    let filtered_cars = the_cars.filter(c => c.FIN == vin)
    displayCarsTable(filtered_cars)
})
*/


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
        brands_available_li.innerHTML += `<p class='selection'><input type="checkbox" class='checkbox'> ${key} (${value})</p>`
    }
}
// ---------- ADD MODELS TO MODELS MENU ----------
modelsAvailable()
function modelsAvailable() {
    let models_available_li = document.querySelector('#models_available')

    for (const [key,value] of Object.entries(count_models)) {
        models_available_li.innerHTML += `<p class='selection'><input type="checkbox" class='checkbox'> ${key} (${value})</p>`
    }
}


/*
// The three dots "..." are used to merge/join
const distinct_brands = [ ...new Set([...all_brands]) ]

*/