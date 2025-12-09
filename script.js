let btns = document.querySelectorAll("button")
btns.forEach(btn =>{
    btn.addEventListener("click", toggleList)
})

function toggleList(e){
    e.target.parentNode.nextElementSibling.classList.toggle("hidden")
}


let {the_cars} = JSON.parse(localStorage.getItem('car'))

// console.log(the_cars)


function displayCars(array){
    let list_container = document.querySelector('.list_container')
    array.forEach(car => {
        list_container.innerHTML += `
            <div class="car">
                <input type="checkbox" class="checkbox">
                <p>${car.Hersteller}</p>
                <p>${car.Modell}</p>
                <p>${car.Ausstattungslinie}</p>
                <p>${car['EK Netto']}</p>
            </div>
        `
    });
}

displayCars(the_cars)


//Select a field from the array's objects.
const all_brands = the_cars.map(car => car.Hersteller.toLowerCase())

const count_brands = {}
all_brands.forEach(brand => {
    if(!Object.keys(count_brands).includes(brand)){
        count_brands[brand]  = 0
    }else{
        count_brands[brand] = count_brands[brand] + 1
    }
})
console.log(count_brands);


// The three dots "..." are used to merge/join
const distinct_brands = [ ...new Set([...all_brands]) ]


// console.log(distinct_brands);


const person = {
    name : "salah",
    age : 30,
    languages : ["ar","fr","en"]
}

console.log(Object.keys(person));
