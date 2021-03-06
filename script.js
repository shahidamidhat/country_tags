
var data=fetch("https://restcountries.eu/rest/v2/all");
data.then(function(res){
    return res.json();
})
.then(function(res){
    getCountryCards(res);
})
.catch(function(){
    console.log(err);
})

function getCountryCards(data){
    for(let i=0;i<data.length;i++){
        var col=document.createElement("div");
        col.setAttribute("class","col-3")
        var div=document.createElement("div");
        div.setAttribute("class","card")
       
        
        var img=document.createElement("img");
        img.setAttribute("class","card-img-top");
        img.setAttribute("src",data[i].flag);

        var div1=document.createElement("div");
        div1.setAttribute("class","card-title");
        var h=document.createElement("h5")
        h.innerHTML=data[i].name;
        var p1=document.createElement("p");
        p1.innerHTML="Capital: "+ data[i].capital;
        var p2=document.createElement("p");
        p2.innerHTML="Region: "+ data[i].region;
        var p3=document.createElement("p");
        p3.innerHTML="Country Code: "+ data[i].alpha3Code;
        var btn=document.createElement("button");
        btn.setAttribute("class","btn-check");
        btn.addEventListener("click",function(){
            checkWeather(data[i])
        });
        btn.innerHTML="Check Weather";

        div1.append(h,p1,p2,p3,btn);
        div.append(img,div1);
        col.append(div);
        document.getElementById("rows").append(col);

        
    }

    function checkWeather(country){
        lat=country.latlng[0];
        lng=country.latlng[1];
        link="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=fe282060c2b9014b5585f2e77b670fac";
        var response=fetch(link);
        response.then(function(res){
            return res.json();
        })
        .then(function(res){
             
            alert(
                "Weather Of "+country.name+" :"+
                "\nTemperature: "+res.main.temp+
                "\nFeels-like: "+res.main.feels_like+
                "\nMin temp: "+res.main.temp_min+
                "\nMax temp: "+res.main.temp_max+
                "\nPressure: "+res.main.pressure+
                "\nHumidity: "+res.main.humidity

                );
        })
        .catch(function(){
            console.log(err);
        })
    }
    
}

