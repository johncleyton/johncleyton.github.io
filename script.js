var objCanvas=null;
var objContexto=null;

var imgFundo = new Image();
imgFundo.src = "Img/fundoPreto.png";

var xCoracao=260;
var yCoracao=400;

var imgCoracao = new Image();
imgCoracao.src = "Img/coracao.png";

var imgLanca = new Image()
imgLanca.src = "Img/LancaMenor.png"

var musica = new Audio()
musica.src = "Musicas/HeartBeat.mp3"

var Itachi = new Audio()
Itachi.src = "Musicas/Itachi.mpeg"

let qualFase = 1

let xAtaque1 = 0
let yAtaque1 = []

let yAtaque2 = 0
let xAtaque2 = []

let yAtaque3 = 0
let xAtaque3 = []

let yAtaque4 = 0
let yAtaque5 = 0

let yAtaque6 = 0

let quantasVezes = 0

//---------------------------Funcões-------------------------------------

function Iniciar(){

	objCanvas = document.getElementById("meuCanvas");
	objContexto = objCanvas.getContext("2d");
	yAtaque1 = -70;

	for (let v = 0; v < 12; v++)
	{
		xAtaque1[v] = Math.floor(Math.random() * 513)
	}

	yAtaque2 = -100

	for (let vet = 0; vet < 12; vet++)
	{
		xAtaque2[vet] = Math.floor(Math.random() * 513)
	}

	yAtaque3 = -80

	for (let vetor3 = 0; vetor3 < 12; vetor3++)
	{
		xAtaque3[vetor3] = Math.floor(Math.random() * 513)
	}

	yAtaque4 = yAtaque5 = yAtaque6 = -70

	yAtaqueRosaMeio = yAtaqueRosaDireitaMeio = yAtaqueRosaEsquerdaMeio = 
	yAtaqueRosaEsquerdaDireita = -200

	yAtaqueRosaTriplo = -60

	quantasVezes = 0

	AtualizaTela();

}

function AtualizaTela(){
	objContexto.drawImage(imgFundo,0,0);
	objContexto.drawImage(imgCoracao, xCoracao, yCoracao);
}

function Ataques(){
	if (qualFase == 1)
	{
		AtaqueLaranja1()
	}
	else 
	if (qualFase == 2)
	{
		AtaqueRosa1()
	}	
}

//-----------------------------------------Ataques Laranjas-------------------------------------------

yAtaque1 = -70;
xAtaque1 = [];

for (let v = 0; v < 12; v++)
{
	xAtaque1[v] = Math.floor(Math.random() * 513)
}

function AtaqueLaranja1(){
	animacao1 = requestAnimationFrame(AtaqueLaranja1)
	AtualizaTela()
	let i = 0
	while (i < 12)
	{
		objContexto.drawImage(imgLanca, xAtaque1[i], yAtaque1)
		Colidir(xAtaque1[i], yAtaque1, animacao1)
		i += 1
	}
	yAtaque1 += 6
	if (yAtaque1 >= 480)
	{
		cancelAnimationFrame(animacao1)
		AtaqueLaranja2()
	}
}

function AtaqueLaranja2(){
	animacao2 = requestAnimationFrame(AtaqueLaranja2)
	AtualizaTela()

	let x = 0
	while (x < 12)
	{
		objContexto.drawImage(imgLanca, xAtaque2[x], yAtaque2)
		Colidir(xAtaque2[x], yAtaque2, animacao2)
		x += 1
	}
	yAtaque2 += 7
	if (yAtaque2 >= 480)
	{
		cancelAnimationFrame(animacao2)
		AtaqueLaranja3();
	}
}

function AtaqueLaranja3(){
	animacao3 = requestAnimationFrame(AtaqueLaranja3)
	AtualizaTela()

	let x3 = 0
	while (x3 < 12)
	{
		objContexto.drawImage(imgLanca, xAtaque3[x3], yAtaque3)
		Colidir(xAtaque3[x3], yAtaque3, animacao3)
		x3 += 1
	}
	yAtaque3 += 8
	if (yAtaque3 >= 480)
	{
		cancelAnimationFrame(animacao3)
		AtaqueLaranja4()
	}
}

function AtaqueLaranja4(){
	animacao4 = requestAnimationFrame(AtaqueLaranja4)
	AtualizaTela()

	for (let x4 = 181; x4 < 316; x4 += 15)
	{
		objContexto.drawImage(imgLanca, x4, yAtaque4)
		Colidir(x4, yAtaque4, animacao4)
	}
	yAtaque4 += 8

	if (yAtaque4 >= 480)
	{
		cancelAnimationFrame(animacao4)
		AtaqueLaranja5()
	}
}

function AtaqueLaranja5(){
	animacao5 = requestAnimationFrame(AtaqueLaranja5)
	AtualizaTela()

	for (let x5 = 0; x5 < 135; x5 += 15)
	{
		objContexto.drawImage(imgLanca, x5, yAtaque5)
		Colidir(x5, yAtaque5, animacao5)
	}

	yAtaque5 += 8

	for (let x6 = 361; x6 < 496; x6 += 15)
	{
		objContexto.drawImage(imgLanca, x6, yAtaque6)
		Colidir(x6, yAtaque6, animacao5)
	}

	yAtaque6 += 8

	if (yAtaque5 >= 480 || yAtaque6 >= 480)
	{
		cancelAnimationFrame(animacao5)
		window.alert('Boa irmão passou da primeira fase')
		qualFase++;
		xCoracao = 260
		yCoracao = 400
		imgCoracao.src = "Img/coracaoRosa.png"
		imgFundo.src = "Img/fundoPretoListras.png"
		AtualizaTela()
	}
}

//------------------------------------------Ataques Rosas---------------------------------------------


function AtaqueRosa1()
{
	AtaqueRosaMeio()
	Iniciar()
	AtaqueRosaEsquerdaMeio()
}

function AtaqueRosaMeio()
{
	animacaoRosa1 = requestAnimationFrame(AtaqueRosaMeio)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 260, yAtaqueRosaMeio)
	Colidir(260, yAtaqueRosaMeio, animacaoRosa1)

	yAtaqueRosaMeio += 15

	if (yAtaqueRosaMeio >= 480)
	{
		cancelAnimationFrame(animacaoRosa1)
	}
}

function AtaqueRosaEsquerdaMeio()
{
	animacaoRosa2 = requestAnimationFrame(AtaqueRosaEsquerdaMeio)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 60, yAtaqueRosaEsquerdaMeio)
	Colidir(60, yAtaqueRosaEsquerdaMeio, animacaoRosa2)

	objContexto.drawImage(imgLanca, 260, yAtaqueRosaEsquerdaMeio)
	Colidir(260, yAtaqueRosaEsquerdaMeio, animacaoRosa2)

	yAtaqueRosaEsquerdaMeio += 15

	if (yAtaqueRosaEsquerdaMeio >= 480)
	{
		cancelAnimationFrame(animacaoRosa2)
	}
}

function AtaqueRosaDireitaMeio()
{
	animacaoRosa3 = requestAnimationFrame(AtaqueRosaDireitaMeio)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 460, yAtaqueRosaDireitaMeio)
	Colidir(460, yAtaqueRosaDireitaMeio, animacaoRosa3)

	objContexto.drawImage(imgLanca, 260, yAtaqueRosaDireitaMeio)
	Colidir(260, yAtaqueRosaDireitaMeio, animacaoRosa3)

	yAtaqueRosaDireitaMeio += 15

	if (yAtaqueRosaDireitaMeio >= 480)
	{
		cancelAnimationFrame(animacaoRosa3)
		AtaqueRosaEsquerdaDireita()
	}
}

function AtaqueRosaEsquerdaDireita()
{
	animacaoRosa4 = requestAnimationFrame(AtaqueRosaEsquerdaDireita)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 460, yAtaqueRosaEsquerdaDireita)
	Colidir(460, yAtaqueRosaEsquerdaDireita, animacaoRosa4)

	objContexto.drawImage(imgLanca, 60, yAtaqueRosaEsquerdaDireita)
	Colidir(60, yAtaqueRosaEsquerdaDireita, animacaoRosa4)

	yAtaqueRosaEsquerdaDireita += 15

	if (yAtaqueRosaEsquerdaDireita >= 480)
	{
		cancelAnimationFrame(animacaoRosa4)
		musica.play()
		AtaqueRosaTriplo()
	}
}

function AtaqueRosaTriplo()
{
	animacaoRosa5 = requestAnimationFrame(AtaqueRosaTriplo)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 460, yAtaqueRosaTriplo)
	Colidir(460, yAtaqueRosaTriplo, animacaoRosa5)

	objContexto.drawImage(imgLanca, 60, yAtaqueRosaTriplo)
	Colidir(60, yAtaqueRosaTriplo, animacaoRosa5)

	objContexto.drawImage(imgLanca, 260, yAtaqueRosaTriplo)
	Colidir(260, yAtaqueRosaTriplo, animacaoRosa5)

	yAtaqueRosaTriplo += 1

	if (yAtaqueRosaTriplo >= 300)
	{
		cancelAnimationFrame(animacaoRosa5)
		musica.pause()
		window.alert('Caiu no bait que eu sei kk')
		xCoracao = 256
		yCoracao = 240
		imgCoracao.src = "Img/coracaoVerde.png"
		imgFundo.src = "Img/fundoPreto.png"
		AtualizaTela()
	}
}


document.addEventListener("keydown", function(e) {

	if (qualFase == 1) //Movimentação do coração laranja
	{
	if ( e.keyCode == 87 ) {
		if (yCoracao > 0)
			yCoracao -= 10;
		Itachi.play()
		AtualizaTela();
	}

	if ( e.keyCode == 83 ) {
		if (yCoracao < 460)
			yCoracao += 10;
		Itachi.play()
		AtualizaTela();
	}

	if ( e.keyCode == 65 ) {
		if (xCoracao > 0)
			xCoracao -= 10;
		Itachi.play()
		AtualizaTela();
	}

	if ( e.keyCode == 68 ) {
		if (xCoracao < 480)
			xCoracao += 10;
		Itachi.play()
		AtualizaTela();
	}
}
else 
	if (qualFase == 2) //Movimentação do coração rosa
	{
	if ( e.keyCode == 65 ) {
		if (xCoracao >= 75)
			xCoracao -= 200;
		AtualizaTela();
	}

	if ( e.keyCode == 68 ) {
		if (xCoracao <= 445)
			xCoracao += 200;
		AtualizaTela();
	}
}

else
	if (qualFase == 3)
	{

	}

})

function Resetar(){
	xCoracao=260;
	yCoracao=400;
	Iniciar();
}

function Colidir(x, y, animacao){
	if (xCoracao + 15 > x &&
		xCoracao < x + 15 &&
		yCoracao + 64 > y &&
		yCoracao < y + 64 )
	{
		cancelAnimationFrame(animacao)
		Resetar()
	}


}
