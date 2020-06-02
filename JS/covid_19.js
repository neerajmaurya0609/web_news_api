window.fetch("https://api.covid19api.com/summary").then(data => {
    data.json().then(covid => {
        let Global = covid.Global        
        document.getElementById("covidBlock").innerHTML = `
        <section>
        <div>
            <span class="badge badge-danger">New Confirmed</span>
            <span>${Global.NewConfirmed}</span>
        </div>
        <div>
            <span class = "badge badge-danger" >New Deaths</span> 
            <span>${Global.NewDeaths}</span>
        </div>        
        <div>
            <span class = "badge badge-danger" >Total confirmed</span> 
            <span>${Global.TotalConfirmed}</span>
        </div>
         <div>
            <span class = "badge badge-danger" >Total Deaths</span> 
            <span>${Global.TotalDeaths}</span>
        </div>
        <div>
            <span class = "badge badge-success" >New Recovered</span> 
            <span>${Global.NewRecovered}</span>
        </div>
         <div>
            <span class = "badge badge-success" >Total Recovered</span> 
            <span>${Global.TotalRecovered}</span>
        </div>
        </section>
        `;
    }).catch(err => console.log(err));
}).catch(err => console.log(err));

//https://github.com/shashikunal/news-api-project/blob/master/sanjay_news_api/NewsApiProject-Copy/public/js/covid19.js





