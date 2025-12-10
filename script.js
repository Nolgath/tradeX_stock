document.addEventListener("DOMContentLoaded", () => {
    let checkboxes = document.querySelectorAll("#brands_available input[type='checkbox']");

    for(let checkbox of checkboxes){
        checkbox.addEventListener('click', function () {
            let selected_brands_arr = [...checkboxes].filter(checkbox => checkbox.checked == true).map(checkbox => checkbox.value.toLowerCase())
            document.querySelector('#models_available').innerHTML = ""
            displayModelsByBrand(selected_brands_arr)
        })  
    }
});

let btns = document.querySelectorAll("button")

// ---------- RUN WHEN WEBSITE IS FULLY LOADED ----------
let {the_cars} = JSON.parse(localStorage.getItem('car'))


// ---------- GET UNIQUE BRANDS LOWERCASED FROM Hersteller.  ----------
// --------BRANDS
const all_brands = the_cars.map(car => car.Hersteller.toLowerCase())

// ---------- MODELS SECTION  ----------
const all_models = the_cars.map(car => String(car.Modell).toLowerCase())


// ---------- TOGGLE SUB MENU LISTS ----------

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

// ---------- RETRIEVE LOCAL STORAGE DATA ----------
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

// ---------- FILTERS BY VIN  ----------
function filter_by_vin(vin){
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
}

// ---------- COUNT PER BRAND ----------

const count_brands = {}
the_cars.forEach(car => {
    if(!Object.keys(count_brands).includes(car.Hersteller)){
        count_brands[car.Hersteller]  = []
    }
    count_brands[car.Hersteller].push(car.Modell)
})

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
// displayModels()
function displayModelsByBrand(brands) {
    let models_available_li = document.querySelector('#models_available')

    for(let [k, v] of Object.entries(count_brands)){
        if(brands.includes(k.toLowerCase())){
            let models = [...new Set([...v])]
            models.forEach(model => {
                models_available_li.innerHTML += `<p class='selection'><input type="checkbox" class='checkbox'> ${model} (${v.filter(m => m == model).length})</p>`

            })
        }
    }
    
    
    
}











//brands -> Array of brands we selected
//console.log(count_models);
//REVIEW Set()


/*
// The three dots "..." are used to merge/join
const distinct_brands = [ ...new Set([...all_brands]) ]

*/