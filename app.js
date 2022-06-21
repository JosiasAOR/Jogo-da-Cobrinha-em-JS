var rastro = []
var rabo=3
var tela = document.getElementById("canvas")
var pincel = tela.getContext('2d')


var pontosnatela = document.getElementById("pontos")
var pontos = 0
var velocidade = 70




var x=0
var y=0

var a = 300
var b = 300
var f = x-20
var g = y

var cima = 38
var baixo = 40
var esquerda = 37
var direita = 39
var taxa = 20


function limpaTela (){

var descer =0
while(descer<=600){
for(var ni=0;ni<=600;ni=ni+20){
    pincel.fillStyle = "grey";
    pincel.strokeStyle = "grey";
    pincel.beginPath();
    pincel.rect(ni,descer,20,20)
    pincel.closePath()
    pincel.fill()
    pincel.stroke()
    }
descer = descer +20
}

}
function cobrinha(x,y){

pincel.fillStyle="black"
 pincel.strokeStyle = "red";
 pincel.beginPath()
 pincel.rect(x,y,20,20)
 pincel.fill()
 pincel.stroke()

}

function maca(){


pincel.fillStyle="red"
pincel.strokeStyle = "black";
pincel.beginPath()
pincel.rect(a,b,20,20)
pincel.fill()
pincel.stroke()

}
function olhos(){
    pincel.fillStyle="white"
    pincel.beginPath()
    pincel.arc(x+5,y+5,4,0,2*2)
    pincel.fill()
    
    


}
function cabecaCobra(){


    pincel.fillStyle="black"
    pincel.strokeStyle = "red";
    pincel.beginPath()
    pincel.rect(x,y,20,20)
    pincel.fill()
    pincel.stroke()
    }
    function leteclas(evento) {

        if(evento.keyCode == cima) {
            
            if(direcao==2){
                direcao=2
            } else{
                direcao = 1
            }        

        } else if (evento.keyCode == baixo ) {
            if(direcao==1){
                direcao=1
            } else{
                direcao = 2
            }            

        } else if (evento.keyCode == esquerda) {
            if(direcao==4){
                direcao=4
            } else{
                direcao = 3
            } 
            

        } else if (evento.keyCode == direita ) {
            if(direcao==3){
                direcao=3
            } else{
                direcao = 4           
             } 
            
        }
        else if (evento.keyCode == 27 && x + taxa < 400) {
            direcao=0
            
        }

    }


function speed(){
 if (direcao==1 && y>=-20){
    y=y-20        
 }
 if (direcao==2 && y<=620){
    y=y+20       
 }
 if (direcao==3 && x>=-20){
    x=x-20
 }
 if (direcao==4 && x<=620){
    x=x+20
 }
}



function atualizaTela(){
        limpaTela()
        speed()
        maca()
        colisao()
        for (var i = 0; i < rastro.length; i++) {

        cobrinha(rastro[i].px,rastro[i].py);

        if ((rastro[i].px == x && a)&& (rastro[i].py == y&&b))
        {   
            rastro=[]
            pontos = 0
           
            x = 100
            y = 100
            rabo = 3
            
        }
    }
    rastro.push({ px:x, py:y })
    while (rastro.length > rabo) {
        rastro.shift();//tira o primeiro elemento do array
    }
    cabecaCobra()
    olhos()

    pontosnatela.textContent = `Pontos: ${pontos} `
    setTimeout(atualizaTela,velocidade )
}

function colisao(){
    if(pontos==100){
        velocidade=40
    }

    if (x==a && y==b){        

               b = array[Math.floor(Math.random()*(0,array.length)+0)]
               a = array[Math.floor(Math.random()*(0,array.length)+0)]
               pontos=pontos+10
               rabo++
        
    } 
   
    
    
    
    if(x==600){
        rastro=[]
        alert("SE FUDEU")
        x=100
        y=100
        rabo=3
        direcao=0
        pontos =0
        velocidade = 70
    
    }
if(x==-20){
    rastro=[]
         alert("SE FUDEU")
        x=120
        y=120
        rabo=3
        direcao=0
        pontos=0
        velocidade = 70
    }
    if(y==-20){
        rastro=[]
        alert("SE FUDEU")
        y=120
        x=120
        rabo =3
        direcao=0
        pontos=0
        velocidade = 70
    } 
    if(y==600){
        rastro=[]
        alert("SE FUDEU")
        y=120
        x=120
        rabo=3
        direcao=0
        pontos=0
        velocidade = 70
    
    }
}


atualizaTela()




var array = [0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560,580]

var direcao = 0
 document.onkeydown = leteclas



