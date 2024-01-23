let searchBox=document.querySelector('.search-box');
let seatchBtn=document.querySelector('.seatchBtn');
let country=document.querySelector('.country');
let degree=document.querySelector('.degree');
let sign=document.querySelector('.sign');
let condition=document.querySelector('.condition');
let max=document.querySelector('.max');
let min=document.querySelector('.min');
let forecastDiv=document.querySelector('.forecast-div');

let forecastTitle=document.querySelector('.forecast-title');
async function weatherCall()
{
   
    const response1=await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${searchBox.value}&key=9978bd076fe54f57b83b9f9a308d3ec3&days=10`);
    const data1=await response1.json();
    console.log(data1);
    let results=data1.data;
    console.log(results);

    country.innerHTML=data1.city_name;
    degree.innerHTML=Math.round(results[0].temp)+'°C';
    sign.innerHTML=results[0].weather.description;
    condition.src=`icons/${results[0].weather.icon}.png`;
    max.innerHTML='H:'+Math.round(results[0].max_temp)+'°C';
    min.innerHTML='L:'+Math.round(results[0].min_temp)+'°C';

    resetState();
    const p1=document.createElement('p');
    p1.innerHTML='7 days Forecast';
    forecastTitle.appendChild(p1);
    
    results.map((result)=>
    {
        
        const date=document.createElement('p');
        date.classList.add('forecast-date');
        date.innerHTML=result.datetime;

        const img1=document.createElement('img');
        img1.classList.add('forecast-img');
        img1.src=`icons/${result.weather.icon}.png`;
        
        const forecastmax=document.createElement('p');
        forecastmax.classList.add('forecast-max');
        forecastmax.innerHTML='H: '+Math.round(result.max_temp)+'°C';

        const forecastmin=document.createElement('p');
        forecastmin.classList.add('forecast-min');
        forecastmin.innerHTML='L: '+Math.round(result.min_temp)+'°C';
    
        const newDiv1=document.createElement('div');
        newDiv1.classList.add('newDiv');

        
        newDiv1.appendChild(date);
        newDiv1.appendChild(img1);
        newDiv1.appendChild(forecastmax);
        newDiv1.appendChild(forecastmin);

        forecastDiv.appendChild(newDiv1);

        
    })


}

function resetState()
{
	while(forecastDiv.firstChild)
	{
		forecastDiv.removeChild(forecastDiv.firstChild);
	}
    while(forecastTitle.firstChild)
    {
        forecastTitle.removeChild(forecastTitle.firstChild);
    }
}
