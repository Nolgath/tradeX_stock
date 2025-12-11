// ---------- RUN WHEN WEBSITE IS FULLY LOADED ----------
let {the_cars} = JSON.parse(localStorage.getItem('car'))

// ---------------- SORTING FILTER
let price_asc = document.querySelector('#price_asc')
let price_dsc = document.querySelector('#price_dsc')

price_asc.addEventListener('click', function() {
    let sorted_asc_cars = the_cars.sort((a,b) => a['EK Netto'] - b['EK Netto']);
    displayCarsTable(sorted_asc_cars)
})

price_dsc.addEventListener('click', function() {
    let sorted_dsc_cars = the_cars.sort((a,b) => b['EK Netto'] - a['EK Netto']);
    displayCarsTable(sorted_dsc_cars)
})

document.addEventListener("DOMContentLoaded", () => {
    let tbody = document.querySelector('tbody')
    let checkboxes_brand = document.querySelectorAll("#brands_available input[type='checkbox']");
    let checkboxes_model = document.querySelectorAll("#models_available input[type='checkbox']");
    
    for(let checkbox of checkboxes_brand){
        checkbox.addEventListener('click', function () {
            let selected_brands_arr = [...checkboxes_brand].filter(checkbox => checkbox.checked == true).map(checkbox => checkbox.value.toLowerCase())
            document.querySelector('#models_available').innerHTML = ""
            displayModelsByBrand(selected_brands_arr)
            
            //Create the array of objects (all fields), only brands we selected
            let selected_cars = the_cars.filter(car => selected_brands_arr.includes(car.Hersteller.toLowerCase())) 
            if(selected_cars.length == 0){
                selected_cars = the_cars
            }
            displayCarsTable(selected_cars)
        })
    }

});

// ---------- RETRIEVE LOCAL STORAGE DATA ----------
//displayCarsTable(the_cars)

function displayCarsTable(array){
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ""
    
    array.forEach(({FIN, Hersteller, Modell, Ausstattungslinie, ['EK Netto'] : ek_netto,km}) => {
        tbody.innerHTML += `
            <tr>
                <td>${FIN}</td>
                <td>${Hersteller}</td>
                <td>${Modell}</td>
                <td>${Ausstattungslinie}</td>
                <td>${km}</td>
                <td>${ek_netto}</td>
            </tr>
        `
    });
}

// ---------- GET UNIQUE BRANDS LOWERCASED FROM Hersteller.  ----------
// --------BRANDS
const all_brands = the_cars.map(car => car.Hersteller.toLowerCase())

// ---------- MODELS SECTION  ----------
const all_models = the_cars.map(car => String(car.Modell).toLowerCase())

// ---------- TOGGLE SUB MENU LISTS ----------
let btns = document.querySelectorAll("button")

function toggleBtns(){
    btns.forEach(btn =>{
        btn.addEventListener("click", function toggleList(e){
            e.target.parentNode.nextElementSibling.classList.toggle("hidden")
        })
    })
}

function init(){
    toggleBtns()
}

init()

// ---------- FILTERS BY VIN  ----------

let input_vin = document.querySelector('#vin_search_bar')
input_vin.addEventListener('change', filter_by_vin)

function filter_by_vin (){
    let vin = input_vin.value
    let tbody = document.querySelector('tbody')

    if(vin.length  == 0){
        displayCarsTable(the_cars)
        return
    }

    if(vin.length !== 17){
        displayCarsTable(the_cars)
        alert('Please input 17 characters')
        return
    }

    tbody.innerHTML = ''
    let filtered_cars = the_cars.filter(c => c.FIN == vin)
    displayCarsTable(filtered_cars)
}

// ---------- COUNT PER BRAND ----------
function countBrands(){
    const count_brands = {}
    the_cars.forEach(car => {
        if(!Object.keys(count_brands).includes(car.Hersteller)){
            count_brands[car.Hersteller]  = []
        }
        count_brands[car.Hersteller].push(car.Modell)
    })
    return count_brands

}

let count_brands = countBrands()

// ---------- ADD BRANDS TO BRANDS MENU ----------
brandsAvailable()
function brandsAvailable() {
    let brands_available_li = document.querySelector('#brands_available')

    for (const [key,value] of Object.entries(count_brands)) {
        brands_available_li.innerHTML += 
                                        `<p class='selection'>
                                            <input type="checkbox" class='checkbox' value='${key}'> ${key} (${value.length})
                                        </p>`
    }
}
// ---------- ADD MODELS TO MODELS MENU ----------
function displayModelsByBrand(brands) {
    let models_available_li = document.querySelector('#models_available')

    for(let [k, v] of Object.entries(count_brands)){
        if(brands.includes(k.toLowerCase())){
            let models = [...new Set([...v])]
            models.forEach(model => {
                models_available_li.innerHTML += `<p class='selection'><input onclick='check_model()' type="checkbox" value='${model}' class='checkbox'> ${model} (${v.filter(m => m == model).length})</p>`

            })
        }
    }
}

function check_model(){
    let checkboxes_model = document.querySelectorAll("#models_available input[type='checkbox']");
    let selected_brands_arr = [...checkboxes_model].filter(checkbox => checkbox.checked == true).map(checkbox => checkbox.value.toLowerCase())
    console.log(selected_brands_arr);
}

//Listening to inputs km and price
document.querySelector('.mileage input:nth-child(1)').addEventListener('change', applyFilters);
document.querySelector('.mileage input:nth-child(2)').addEventListener('change', applyFilters);
document.querySelector('.price input:nth-child(1)').addEventListener('change', applyFilters);
document.querySelector('.price input:nth-child(2)').addEventListener('change', applyFilters);


function getFilters(){
    let min_km =    parseInt(document.querySelector('.mileage input:nth-child(1)').value)   ||  0
    let max_km =    parseInt(document.querySelector('.mileage input:nth-child(2)').value)   ||  9999999
    let min_price =    parseInt(document.querySelector('.price input:nth-child(1)').value)  ||  0
    let max_price =    parseInt(document.querySelector('.price input:nth-child(2)').value)  ||  9999999

    return {min_km, max_km, min_price, max_price}
}

function applyFilters(){

    let {min_km, max_km, min_price, max_price} = getFilters()

    let filtered_km = the_cars.filter(car => car.km >= min_km && car.km <= max_km)
    let filtered_km_and_price = filtered_km.filter(car => car['EK Netto'] >= min_price && car['EK Netto'] <= max_price)

    let prices_and_km = filtered_km_and_price.map(car => {
        
        const obj = {}
        obj['km'] = car.km
        obj['price'] = car['EK Netto']
        return obj
    })

    console.log(prices_and_km)

}

