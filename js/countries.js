// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => displayCountries(data))
// }

// const displayCountries = countries => {
//     console.log(countries[0])
//     const countriesHtml = countries.map(country => getCountriesHtml(country))
//     console.log(countriesHtml)
//     const container = document.getElementById('countries')
//     container.innerHTML = countriesHtml.join(' ');
// }


// const getCountriesHtml = country => {

//     return `<div class="country"><img src=${country.flags.png}></img>
//     <h2>${country.name.common}</h2>
//     <h3>${country.capital}</h3></div>`

// }
// loadCountries()


const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries)
    const getCountriesHtml = countries.map(country => getAllCountries(country))
    console.log(getCountriesHtml)
    const container = document.getElementById('countries')
    container.innerHTML = getCountriesHtml.join(' ')
}

const getAllCountries = country => {
    return `
    <div class="country">
        <img src="${country.flags.png}"></img>
        <h2>${country.name.common}</h2>
        <h3>${country.capital}</h3>
    </div>`
}
loadCountries()

// option 3
// const getCountryHTML = ({name, flags, area, region}) =>{
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <p>Area: ${area}</p>
//             <p>Continet: ${region}</p>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// option 2
// const getCountryHTML = country =>{
//     // option 1
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// option 1
// const getCountryHTML = country =>{
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }