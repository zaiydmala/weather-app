!function(){const e=document.querySelector("[container-form]"),t=document.querySelector("[new-entry]"),n=document.querySelector("[switch]"),r=document.querySelector("[location-button]");let o,a="Kitchener";async function i(e){!function(e){o=isNaN(e)&&function(e){return/\d/.test(e)}(e)?e:function(e){return!/\D/.test(e)}(e)&&e.length<=5?`zip=${e}`:`q=${e}`}(e);try{const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?${o}&appid=8bca1959c6a202f7005fb61ead8b63e5&units=standard`,{mode:"cors"});!function(e){switch(e.weather[0].main){case"Clear":document.body.style.backgroundImage='url("../dist/clear.jpg")';break;case"Clouds":document.body.style.backgroundImage='url("../dist/cloudy.jpg")';break;case"Rain":case"Drizzle":case"Mist":document.body.style.backgroundImage='url("../dist/rain.jpg")';break;case"Thunderstorm":document.body.style.backgroundImage='url("../dist/thunderstorm.jpg")';break;case"Snow":document.body.style.backgroundImage='url("../dist/snow.jpg")'}const t=document.querySelector("[cityName]"),r=document.querySelector("[cityTemperature]"),o=document.querySelector("[cityWeather]"),a=document.querySelector("[tempFeeling]"),i=document.querySelector("[humidity]"),l=document.querySelector("[wind]"),m=document.getElementById("image"),g=document.querySelector("[date-time]"),y=e.timezone,p=e.weather[0].description;let h=e.main.temp,f=e.main.feels_like;t.innerHTML=`${e.name}, ${e.sys.country}`,g.innerHTML=function(e){let t=new Date,n=t.getTime(),r=6e4*t.getTimezoneOffset();return new Date(n+r+1e3*e).toLocaleString()}(y),n.checked?(h=u(h),f=u(f),r.innerHTML=h+"&degF"):(h=c(h),f=c(f),r.innerHTML=h+"&degC"),m.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}.png`,o.innerHTML=p.charAt(0).toUpperCase()+p.slice(1),a.innerHTML="Feels like: "+f+"&deg",i.innerHTML="Humidity levels: "+e.main.humidity+"%",l.innerHTML="Wind: "+e.wind.speed+"k/m",n.addEventListener("change",(()=>{n.checked?setTimeout((()=>{h=d(h),f=d(f),r.innerHTML=h+"&degF",a.innerHTML="Feels like: "+f+"&deg"}),150):setTimeout((()=>{h=s(h),f=s(f),r.innerHTML=h+"&degC",a.innerHTML="Feels like: "+f+"&deg"}),150)}))}(await e.json())}catch(e){alert(e)}}function c(e){return e=parseFloat(e),Math.round(e-=273.15)}function u(e){return e=parseFloat(e),Math.round(9*(e-=273.15)/5+32)}function d(e){return e=parseFloat(e),Math.round(e=1.8*e+32)}function s(e){return e=parseFloat(e),Math.round(e=5/9*(e-32))}r.addEventListener("click",(e=>{e.preventDefault(),navigator.geolocation.getCurrentPosition((e=>{i("lat="+e.coords.latitude+"&lon="+e.coords.longitude)}),(e=>{alert(e)}))})),e.addEventListener("submit",(e=>{e.preventDefault(),a=t.value,i(a),t.value=""})),i(a)}();