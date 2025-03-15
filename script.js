function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')


    if(fano.value.length == 0 || fano.value > ano || fano.value <=1920){
        alert('Erro. Tente novamente.')
        }
    
   
    else{   
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - fano.value
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

            if(fsex[0].checked){
            gen = 'Homem'

                if(idade <=5){
                    img.setAttribute('src', 'bebê.png')
                } 
                else if(idade >5 && idade <=13){
                    img.setAttribute('src', 'homem criança.png')
                }
                else if(idade>14 && idade <=25){
                    img.setAttribute('src', 'Homem jovem.png')
                }
                else if(idade>25 && idade <=59){
                    img.setAttribute('src', 'homem adulto.png')
                }
                else{
                    img.setAttribute('src', 'Homem Idoso.png')
                }

        }
            else if(fsex[1].checked){
            gen = 'Mulher'

            if(idade <=5){
                img.setAttribute('src', 'bebê.png')
            } 
            else if(idade >5 && idade <=13){
                img.setAttribute('src', 'Mulher Criança.png')
            }
            else if(idade>14 && idade <=25){
                img.setAttribute('src', 'Mulher jovem.png')
            }
            else if(idade>25 && idade <=59){
                img.setAttribute('src', 'Mulher Adulta.png')
            }
            else{
                img.setAttribute('src', 'Mulher Idosa.png')
            }
        }
        res.innerHTML = `Gênero: ${gen}. Idade: ${idade}`
        res.appendChild(img)
    }   
}
