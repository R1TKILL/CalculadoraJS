'use strict'

const teclasNumericas = [...document.querySelectorAll(".tnum")]
const teclasOperacionais = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelectorAll(".res")
const tLigaDesliga = document.getElementById("tON_OFF")
const tClear = document.getElementById("tclear")
const tResultado = document.getElementById("tresultado")
const puxador = document.getElementById("puxador")
const gaveta = document.getElementById("gaveta1")
const display = document.querySelector(".display")

let sinal = false
let decimal = false
let ligado = true
let aberto = false

teclasNumericas.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0."
                }
                else{
                    display.innerHTML+="."
                }
            }
        }
        else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOperacionais.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="X"){
                display.innerHTML+="*"
            }
            else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

tClear.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    display.innerHTML="0"
})

tResultado.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    //Eval recebe uma expressão como parâmetro e devolve o resultado da expressão.
    const res = eval(display.innerHTML)
    display.innerHTML=res
})

tLigaDesliga.addEventListener("click",(evt)=>{
    if(!ligado){
        ligado = true
        teclasNumericas.forEach((el)=>{
            el.setAttribute("disabled","true")
        })
        teclasOperacionais.forEach((el)=>{
            el.setAttribute("disabled","true")
        })
    }
    else{
        ligado = false
        teclasNumericas.forEach((el)=>{
            el.removeAttribute("disabled","true")
        })
        teclasOperacionais.forEach((el)=>{
            el.removeAttribute("disabled","true")
        })
    }
})

puxador.addEventListener("click",(evt)=>{
    if(!aberto){
        aberto = true
        evt.target.innerHTML="<-"
    }
    else{
        aberto = false
        evt.target.innerHTML="->"
    }
    gaveta.classList.toggle("exibir")

})