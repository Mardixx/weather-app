let key = VITE_APIKEY;
console.log(key);
let apiInfo = "https://api.openweathermap.org/data/2.5/forecast?&units=metric&q="
let inputField = document.querySelector('.cityInput')
let search = document.querySelector('.spyGlass')
let temperatures = document.querySelector('.temperatures')
let comparisonInput = document.querySelector('.comparisonInput')
let compareImg = document.querySelector('.compareImg')
let tempCompare = document.querySelector('.tempCompare')


async function weather() {
    const data = await fetch(apiInfo + inputField.value + "&appid=" + key)
    const result = await data.json()

    let city = document.querySelector('.city')

    city.style.visibility = 'visible'

    let temperatures = document.querySelector('.temperatures')
    let i = 0

    city.innerHTML = result.city.name + ', ' + result.city.country;

    for (let child of result.list){
            if (i == 0 || i == 8 || i == 16 || i == 24 || i == 32) {
            let div = document.createElement('div')
            let span = document.createElement('span')
            let span5 = document.createElement('span')
            let span2 = document.createElement('span')
            let span3 = document.createElement('span')
            let span4 = document.createElement('span')
            let windImg = document.createElement('img')
            let mistImg = document.createElement('img')
            let img = document.createElement('img')

            let date = new Date(child.dt_txt).toUTCString()

            windImg.src = './img/wind.png'
            mistImg.src = './img/mist.png'
            
            windImg.alt = 'weatherSvg'
            mistImg.alt = 'mistLogo'
            img.alt = 'weatherSvg'
            
            windImg.classList = 'windLogo'
            mistImg.classList = 'mistLogo'
            img.classList = 'weatherLogo'
            div.classList = 'weather'
            
            
            span.innerHTML = child.main.temp + '°C';
            span2.innerHTML = child.main.humidity + '%';
            span3.innerHTML = child.wind.speed + 'KM/H';
            span4.innerHTML = child.weather[0].description;
            span5.innerHTML = date;

            span5.style.letterSpacing = '0.5'
            span5.style.fontSize = '0.5'
            
            div.appendChild(span5)
            div.appendChild(span)
            div.appendChild(span2)
            div.appendChild(span3)
            div.appendChild(span4)
            span2.append(mistImg)
            span3.append(windImg)
            temperatures.appendChild(div)
            div.insertBefore(img, span)

            switch (child.weather[0].main) {
                case "Clouds":
                    img.src = '../img/clouds.png'
                    div.style.backgroundColor = 'gray'
                    div.style.color = 'white'
                    break;
                case "Clear":
                    img.src = '../img/clear.png'
                    div.style.backgroundColor = 'yellow'
                    div.style.color = 'black'
                    break;
                case "Drizzle":
                    img.src = '../img/drizzle.png'
                    div.style.backgroundColor = 'lightgrey'
                    div.style.color = 'white'
                    break;
                case "Mist":
                    img.src = '../img/mist.png'
                    div.style.backgroundColor = 'transparent'
                    div.style.color = 'white'
                    break;
                case "Rain":
                    img.src = '../img/rain.png'
                    div.style.backgroundColor = 'blue'
                    div.style.color = 'white'
                    break;
                case "Snow":
                    img.src = '../img/snow.png'
                    div.style.backgroundColor = 'white'
                    break;
            }
        }
        let divComparison = document.querySelector('.divComparison')
        divComparison.style.visibility = 'visible'
        inputField.value = ''
        i++
    }
}

let compareField = document.querySelector('.comparisonInput')

async function compare() {
    const data2 = await fetch(apiInfo + compareField.value + "&appid=" + key)
    const result2 = await data2.json()
    
    
    let city = document.querySelector('.city')

    city.style.visibility = 'visible'

    let container = document.querySelector('.container')
    let tempCompare = document.querySelector('.tempCompare')
    let i = 0
    
    city.innerHTML = result2.city.name + ', ' + result2.city.country;
    
    container.appendChild(tempCompare)

    for (let child of result2.list) {
        if (i == 0 || i == 8 || i == 16 || i == 24 || i == 32) {
            let div = document.createElement('div')
            let span = document.createElement('span')
            let span2 = document.createElement('span')
            let span3 = document.createElement('span')
            let span4 = document.createElement('span')
            let windImg = document.createElement('img')
            let mistImg = document.createElement('img')
            let img = document.createElement('img')
            let span5 = document.createElement('span')

            let date = new Date(child.dt_txt).toUTCString()

            windImg.src = './img/wind.png'
            mistImg.src = './img/mist.png'
            
            windImg.alt = 'weatherSvg'
            mistImg.alt = 'mistLogo'
            img.alt = 'weatherSvg'
            
            windImg.classList = 'windLogo'
            mistImg.classList = 'mistLogo'
            img.classList = 'weatherLogo'
            div.classList = 'weather'
            
            
            span.innerHTML = child.main.temp + '°C';
            span2.innerHTML = child.main.humidity + '%';
            span3.innerHTML = child.wind.speed + 'KM/H';
            span4.innerHTML = child.weather[0].main;
            span5.innerHTML = date;
            

            span5.style.letterSpacing = '0.5'
            span5.style.fontSize = '0.5'

            div.appendChild(span5)
            div.appendChild(span)
            div.appendChild(span2)
            div.appendChild(span3)
            div.appendChild(span4)
            span2.append(mistImg)
            span3.append(windImg)
            tempCompare.appendChild(div)
            div.insertBefore(img, span)

            switch (child.weather[0].main) {
                case "Clouds":
                    img.src = '../img/clouds.png'
                    div.style.backgroundColor = 'gray'
                    div.style.color = 'white'
                    break;
                case "Clear":
                    img.src = '../img/clear.png'
                    div.style.backgroundColor = 'yellow'
                    div.style.color = 'black'
                    break;
                case "Drizzle":
                    img.src = '../img/drizzle.png'
                    div.style.backgroundColor = 'lightgrey'
                    div.style.color = 'white'
                    break;
                case "Mist":
                    img.src = '../img/mist.png'
                    div.style.backgroundColor = 'transparent'
                    div.style.color = 'white'
                    break;
                case "Rain":
                    img.src = '../img/rain.png'
                    div.style.backgroundColor = 'blue'
                    div.style.color = 'white'
                    break;
                case "Snow":
                    img.src = '../img/snow.png'
                    div.style.backgroundColor = 'white'
                    break;
            }
        }
        compareField.value = ''
        i++
    }
}




inputField.value = ''

search.addEventListener('click', () => {
    temperatures.innerHTML = ''
    setTimeout(() => {
        weather()
    }, 1);
    search.addEventListener('click', () => {
        temperatures.innerHTML = ''
        comparisonInput.value = ''
    })
    
})

compareImg.addEventListener('click', () => {
    setTimeout(() => {
        tempCompare.innerHTML = ''
        compare()
    }, 1);
    compareImg.addEventListener('click', () => {
        tempCompare.innerHTML = ''
    })
    
})



inputField.addEventListener('keyup', (e) => {
    if (e.code == 'Enter') {
        temperatures.innerHTML = ''
        setTimeout(() => {
            weather()
        }, 1);
    }
    inputField.addEventListener('keup', (e) => {
        if (e.code == 'Enter') {
            temperatures.innerHTML = ''
            comparisonInput.value = ''
        }
    })
})
comparisonInput.addEventListener('keyup', (e) => {
    if (e.code == 'Enter') {
        tempCompare.innerHTML = ''
        setTimeout(() => {
            compare()
        }, 1);
    }
    comparisonInput.addEventListener('keyup', (e) => {
        if (e.code == 'Enter') {
            tempCompare.innerHTML = ''
        }
    })
})