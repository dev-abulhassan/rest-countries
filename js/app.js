const loadCountry = () => {
   fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => displayCountry(data))
}

const displayCountry = countries => {
   console.log(countries);
   const countryHtml = countries.map(country => getCountryHtml(country));
   // console.log(countryHtml[0]);
   const container = document.getElementById('countries');
   container.innerHTML = countryHtml.join('');
}

const getCountryHtml = country => {
   return `
   
   <div class="country">
   <h2>Name: ${country.name.common}</h2>
   <h3>Capital: ${country.capital}</h3>
   <img src="${country.flags.png}">
   
   </div>
   `
}






loadCountry();