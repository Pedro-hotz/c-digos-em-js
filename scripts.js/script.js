function calcular(){
    var txti = document.querySelector('input#txtid')
    var res = document.querySelector('div#res')
    var idade = String(txti.value)
    res.innerHTML = `SUA VELOCIDADE ATUAL É DE ${idade}Km/h`
    if(idade < 16){
        res.innerHTML = `Não vota `

    }else if(idade <= 17){
            res.innerHTML = `Voto opcional`

        }else if(idade >= 65){
        res.innerHTML = `Voto opcional`

    }else{
        res.innerHTML = `Voto obrigatorio`
    }
    res.innerHTML += `<br>Obrigado pela informação ` 
}