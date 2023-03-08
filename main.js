const boton=document.getElementById('boton')
const valor=document.getElementById('valor')
const cel=document.getElementById('C')
const fare=document.getElementById('F')
const temp=document.getElementsByClassName('temp')
const resultado=document.getElementsByClassName('resultado')
const mercurio=document.getElementById('mercurio')



boton.addEventListener('click',()=>{
    if (isNaN(valor.value || valor.value==''
    || visualViewport.value==undefined)){
        alert('No es un numero')

    }

    else{
        
    let celsius=(valor.value- 32) * 5/9
    let faren=(valor.value * 9/5) + 32

    if(temp[0].checked){
        relleno=celsius*100/100
        resultado[0].innerHTML=(`${(celsius.toFixed(2))}`)


    }else if(temp[1].checked){
        relleno=faren*100/100
        resultado[0].innerHTML=(`${(faren.toFixed(2))}`)

    }else{
        alert('No se selecciono')
    }

    if(relleno>100){
        mercurio.style.heigth= '50%'
    }
    
    else if (relleno<0){
        mercurio.style.heigth='0%'
    }
    else{
        mercurio.style.heigth=`${relleno}%`
    }
}
})
