const boton=document.getElementById('boton')
const valor=document.getElementById('valor')
const cel=document.getElementById('C')
const fare=document.getElementById('F')
const temp=document.getElementsByClassName('temp')
const resultado=document.getElementsByClassName('resultado')
const mercurio=document.querySelector('#mercurio')
let relleno=0


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
    
    if(relleno>=100){
        mercurio.style.height= '100%'
    }
    
    else if (relleno<0){
        mercurio.style.height='0%'
    }
    else{
        mercurio.style.height=`${relleno}%`
    }
}
})
