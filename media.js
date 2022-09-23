function calcularmedia(){
    const img = document.getElementById('img')
    const media = Number(document.getElementById('media').value)
    const text = document.getElementById('text')
    const mediafinal = 15 - media * 2.0 
    let result = ''

    if (media < 3) { //reprovado
        img.src = 'usagisad.jpg'
        document.body.style.background = '#5bd9ab'
        result = 'Xiii... Você foi reprovado! :('
    }
    else if (media >= 7) { //aprovado
        img.src = 'usagihappy.jpg'
        document.body.style.background = '#1ba673'
        result = ' Fi da peste! Você foi aprovado! :D'
    }
    else { //final
        img.src = 'usagi - java.jpg'
        document.body.style.background = '#f28f79'
        result = 'Professor passou texto e não leu, o pau comeu. Você precisa tirar ' + mediafinal.toFixed(1)  + ' para ser aprovado na final :/'
    }
    text.innerText = result
}

let button = document.getElementById('button')
button.addEventListener('click', calcularmedia)