function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if ( fano.value.length == 0 || Number(fano.value) >= ano) {
        window.alert('[ERROR] Verifique os dados novamente.')
    }  else {
        var fsex = document.getElementsByName('sex')
        var age = ano - Number(fano.value)
        var gen = ''
        var image = document.createElement('img')
        image.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (age > 1 && age < 4) {
                image.setAttribute('src', 'imagens/Homem/bebe2_elipse.png') 
            } else if (age >= 4 && age < 14){
                image.setAttribute('src', 'imagens/Homem/crianca2_elipse.png')
            } else if(age < 25) {
                image.setAttribute('src', 'imagens/Homem/jovem_elipse.png')
            } else if(age < 50) {
                image.setAttribute('src', 'imagens/Homem/adulto_elipse.png')
            } else {
                image.setAttribute('src', 'imagens/Homem/idoso_elipse.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (age > 1 && age < 4) {
                image.setAttribute('src', 'imagens/Mulher/bebe2_elipse.png')
                } else if (age >= 4 && age < 14){
                    image.setAttribute('src', 'imagens/Mulher/crianca_elipse.png')
                } else if(age < 25) {
                    image.setAttribute('src', 'imagens/Mulher/jovem_elipse.png')
                } else if(age < 50) {
                    image.setAttribute('src', 'imagens/Mulher/adulta_elipse.png')
                } else {
                    image.setAttribute('src', 'imagens/Mulher/idosa_elipse.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${age} anos.`
        res.appendChild(image)
        }
    }
