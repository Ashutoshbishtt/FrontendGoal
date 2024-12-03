const coins = [];
const box = document.getElementById("mainBox");
document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(res => res.json())
    .then(res=>{
        coins.push(...res)
        coins.forEach(element => {
            box.innerHTML += `<div class="card">
            <div class="leftImage"><img src=${element.image} alt="cryptoImage"></div>
            <div class="details">
                <div class="infoFirstRow"><span class="coins">${element.name}</span><span class="points">${element.current_price}</span></div>
                <div class="inforSecondRow"><span class="symbol">${element.symbol}</span><span class="downpercent">${element.price_change_percentage_24h}%</span></div>
            </div>
        </div>`
        });
    })
    .catch((err) => console.log(err))
})
