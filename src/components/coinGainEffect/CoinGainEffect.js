import "./coinGainEffect.css"
import moneyIcon from "../../image_assets/general/money_icon.webp"


export function CoinGainEffect(amount) {
    let click_X = 0
    let click_Y = 0

    const createCoin = (x, y) => {
        const coin = document.createElement("img");
        coin.className = "coin";
        coin.src = moneyIcon;
        coin.style.left = `${x}px`;
        coin.style.top = `${y}px`;
    
        return coin
    }

    console.log(moneyIcon)
    
    const createText = (x, y) => {
        const text = document.createElement("div");
        text.className = "text_animation";
        text.textContent = amount;
        text.style.left = `${x}px`;
        text.style.top = `${y}px`;
        text.style.color = "lightgreen";
        text.style.fontSize = "20px"
        text.style.fontWeight = "bold"
    
        return text
    }
    
   
    const removeCoinFromDom = (coin, text) => {
        const timeout = setTimeout(() => {
            coin.remove()
            text.remove()
            clearTimeout(timeout)
        }, 1000)
    }
    

    window.addEventListener("click", event => {
        click_X = event.pageX
        click_Y = event.pageY
    })

    

    const showElement = () => {
        setTimeout(function() {
            const coin = createCoin(click_X, click_Y) 
            const text = createText(click_X, click_Y) 
            document.body.append(coin)
            document.body.append(text)
            removeCoinFromDom(coin, text)
        }, 200);
        
    }


    return showElement()
    
}






