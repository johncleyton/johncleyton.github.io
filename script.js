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

var Hopes = new Audio()
Hopes.src = "Musicas/Hopes2.mp3"

var somMorte = new Audio()
somMorte.src = "Musicas/Oof.mp3"

var Boss = document.getElementById("Boss")

let qualFase = 1

let xAtaque1 = 0
let yAtaque1 = []

let yAtaque2 = 0
let xAtaque2 = []

let yAtaque3 = 0
let xAtaque3 = []

let yAtaque4 = yAtaque5 = yAtaque6 = 0

let quantasVezesRosa = 0
let quantasVezesLaranja = 0

let quantosErros = 0

let noFim = false

//---------------------------Funcões-------------------------------------

function Iniciar(){

	objCanvas = document.getElementById("meuCanvas");
	objContexto = objCanvas.getContext("2d");

	Randomizar()
	ResetarY()

	quantasVezesRosa = 0
	quantasVezesLaranja = 0
	AtualizaTela();

}


function Randomizar()
{
	for (let v = 0; v < 16; v++)
	{
		xAtaque1[v] = Math.floor(Math.random() * 498)
	}

	for (let vet = 0; vet < 16; vet++)
	{
		xAtaque2[vet] = Math.floor(Math.random() * 498)
	}

	for (let vetor3 = 0; vetor3 < 16; vetor3++)
	{
		xAtaque3[vetor3] = Math.floor(Math.random() * 498)
	}
}

function ResetarY()
{
	yAtaque1 = -70;
	yAtaque2 = -100
	yAtaque3 = -80
	yAtaque4 = yAtaque5 = yAtaque6 = -70
	yAtaqueRosaMeio = yAtaqueRosaDireitaMeio = yAtaqueRosaEsquerdaMeio = 
	yAtaqueRosaEsquerdaDireita = yAtaqueRosa1 = -200
	yAtaqueRosaTriplo = -60
}

function AtualizaTela(){
	objContexto.drawImage(imgFundo,0,0);
	objContexto.drawImage(imgCoracao, xCoracao, yCoracao);

	objContexto.fillStyle = "white"
	objContexto.font = "30px Arial";

	objContexto.fillText("Fase " + qualFase, 10, 30);
	objContexto.fillText("Erros: " + quantosErros, 10, 470);
}

function Ataques(){
	if (qualFase == 1 || qualFase == 2)
	{
		AtaqueLaranja1()
	}
	else 
		if (qualFase == 3 || qualFase == 4)
	{
		AtaqueRosa1()
	}
}

//-----------------------------------------Ataques Laranjas-------------------------------------------

yAtaque1 = -70;
xAtaque1 = [];

for (let v = 0; v < 16; v++)
{
	xAtaque1[v] = Math.floor(Math.random() * 498)
}

function AtaqueLaranja1(){
	animacao1 = requestAnimationFrame(AtaqueLaranja1)
	AtualizaTela()
	let i = 0
	while (i < 16)
	{
		objContexto.drawImage(imgLanca, xAtaque1[i], yAtaque1)
		Colidir(xAtaque1[i], yAtaque1, animacao1)
		i += 1
	}
	yAtaque1 += 6
	if (yAtaque1 >= 480)
	{
		cancelAnimationFrame(animacao1)
		yAtaque1 = -70
		AtaqueLaranja2()
	}
}

function AtaqueLaranja2(){
	animacao2 = requestAnimationFrame(AtaqueLaranja2)
	AtualizaTela()

	let x = 0
	while (x < 16)
	{
		objContexto.drawImage(imgLanca, xAtaque2[x], yAtaque2)
		Colidir(xAtaque2[x], yAtaque2, animacao2)
		x += 1
	}
	yAtaque2 += 6
	if (yAtaque2 >= 480)
	{
		cancelAnimationFrame(animacao2)
		yAtaque2 = -70
		AtaqueLaranja3();
	}
}

function AtaqueLaranja3(){
	animacao3 = requestAnimationFrame(AtaqueLaranja3)
	AtualizaTela()

	let x3 = 0
	while (x3 < 16)
	{
		objContexto.drawImage(imgLanca, xAtaque3[x3], yAtaque3)
		Colidir(xAtaque3[x3], yAtaque3, animacao3)
		x3 += 1
	}
	yAtaque3 += 6
	if (yAtaque3 >= 480)
	{
		cancelAnimationFrame(animacao3)
		yAtaque3 = -70
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
	yAtaque4 += 6

	if (yAtaque4 >= 480)
	{
		cancelAnimationFrame(animacao4)
		if (qualFase == 2)
		{
		if (quantasVezesLaranja <= 4)
		{
			Randomizar()
			AtaqueLaranja1()
			quantasVezesLaranja++
		}
		else
			AtaqueLaranja5()
	}
	else
		if (quantasVezesLaranja <= 2)
		{
			Randomizar()
			AtaqueLaranja1()
			quantasVezesLaranja++
		}
		else
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

	yAtaque5 += 6

	for (let x6 = 361; x6 < 496; x6 += 15)
	{
		objContexto.drawImage(imgLanca, x6, yAtaque6)
		Colidir(x6, yAtaque6, animacao5)
	}

	yAtaque6 += 6

	if (yAtaque5 >= 480 || yAtaque6 >= 480)
	{
		cancelAnimationFrame(animacao5)
		qualFase++;
		xCoracao = 260
		yCoracao = 400
		if (qualFase == 3)
		{
			imgCoracao.src = "Img/coracaoRosa.png"
			imgFundo.src = "Img/fundoPretoListras.png"
			Boss.src = "Img/ArbokNivel3.png"
			AtualizaTela()
		}
		else
		{
			Boss.src = "Img/absolNivel2.png"
			Iniciar()
		}
	}
}

//------------------------------------------Ataques Rosas---------------------------------------------


function AtaqueRosa1()
{
	if (noFim == false)
	{
	animacaoRosa1 = requestAnimationFrame(AtaqueRosa1)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 260, yAtaqueRosa1)
	Colidir(260, yAtaqueRosa1, animacaoRosa1)

	objContexto.drawImage(imgLanca, 460, yAtaqueRosa1)
	Colidir(460, yAtaqueRosa1, animacaoRosa1)

	yAtaqueRosa1 += 15

	if (yAtaqueRosa1 >= 480)
	{
		cancelAnimationFrame(animacaoRosa1)
		AtaqueRosaMeio()
		yAtaqueRosa1 = -200
	}
}
}

function AtaqueRosaMeio()
{
	animacaoRosa2 = requestAnimationFrame(AtaqueRosaMeio)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 260, yAtaqueRosaMeio)
	Colidir(260, yAtaqueRosaMeio, animacaoRosa2)

	yAtaqueRosaMeio += 15

	if (yAtaqueRosaMeio >= 480)
	{
		cancelAnimationFrame(animacaoRosa2)
		AtaqueRosaEsquerdaMeio()
		yAtaqueRosaMeio = -200
	}
}

function AtaqueRosaEsquerdaMeio()
{
	animacaoRosa3 = requestAnimationFrame(AtaqueRosaEsquerdaMeio)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 60, yAtaqueRosaEsquerdaMeio)
	Colidir(60, yAtaqueRosaEsquerdaMeio, animacaoRosa3)

	objContexto.drawImage(imgLanca, 260, yAtaqueRosaEsquerdaMeio)
	Colidir(260, yAtaqueRosaEsquerdaMeio, animacaoRosa3)

	yAtaqueRosaEsquerdaMeio += 15

	if (yAtaqueRosaEsquerdaMeio >= 480)
	{
		cancelAnimationFrame(animacaoRosa3)
		AtaqueRosaDireitaMeio()
		yAtaqueRosaEsquerdaMeio = -200
	}
}

function AtaqueRosaDireitaMeio()
{
	animacaoRosa4 = requestAnimationFrame(AtaqueRosaDireitaMeio)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 460, yAtaqueRosaDireitaMeio)
	Colidir(460, yAtaqueRosaDireitaMeio, animacaoRosa4)

	objContexto.drawImage(imgLanca, 260, yAtaqueRosaDireitaMeio)
	Colidir(260, yAtaqueRosaDireitaMeio, animacaoRosa4)

	yAtaqueRosaDireitaMeio += 15

	if (yAtaqueRosaDireitaMeio >= 480)
	{
		cancelAnimationFrame(animacaoRosa4)
		AtaqueRosaEsquerdaDireita()
		yAtaqueRosaDireitaMeio = -200
	}
}

function AtaqueRosaEsquerdaDireita()
{
	animacaoRosa5 = requestAnimationFrame(AtaqueRosaEsquerdaDireita)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 460, yAtaqueRosaEsquerdaDireita)
	Colidir(460, yAtaqueRosaEsquerdaDireita, animacaoRosa5)

	objContexto.drawImage(imgLanca, 60, yAtaqueRosaEsquerdaDireita)
	Colidir(60, yAtaqueRosaEsquerdaDireita, animacaoRosa5)

	yAtaqueRosaEsquerdaDireita += 15

	if (yAtaqueRosaEsquerdaDireita >= 480)
	{
		cancelAnimationFrame(animacaoRosa5)
		yAtaqueRosaEsquerdaDireita = -200
		if (qualFase == 4)
		{
		if (quantasVezesRosa <= 5)
		{
			AtaqueRosa1()
			quantasVezesRosa++
		}
		else
		{
			Hopes.pause()
			musica.play()
			AtaqueRosaTriplo()
		}
	}
	else
	{
		if (quantasVezesRosa <= 2)
		{
			AtaqueRosa1()
			quantasVezesRosa++
		}
		else
		{
			qualFase++;
			Boss.src = "Img/galvantulaNivel4.png"
			Iniciar()
		}
	}
	}
}

function AtaqueRosaTriplo()
{
	animacaoRosa6 = requestAnimationFrame(AtaqueRosaTriplo)
	AtualizaTela()

	objContexto.drawImage(imgLanca, 460, yAtaqueRosaTriplo)
	Colidir(460, yAtaqueRosaTriplo, animacaoRosa6)

	objContexto.drawImage(imgLanca, 60, yAtaqueRosaTriplo)
	Colidir(60, yAtaqueRosaTriplo, animacaoRosa6)

	objContexto.drawImage(imgLanca, 260, yAtaqueRosaTriplo)
	Colidir(260, yAtaqueRosaTriplo, animacaoRosa6)

	yAtaqueRosaTriplo += 1

	if (yAtaqueRosaTriplo >= 300)
	{
		cancelAnimationFrame(animacaoRosa6)
		musica.pause()
		Hopes.play()
		noFim = true
		xCoracao = 1000
		yCoracao = 1000
		if (quantosErros == 0)
		{
			imgFundo.src = "Img/uga.png"
			AtualizaTela()
		}
		else
		{
			imgFundo.src = "Img/TelaFinalNormal.png"
			AtualizaTela()
		}
	}
}


document.addEventListener("keydown", function(e) {

	if (e.keyCode == 76)
	{
		Ataques()
	}

	if (e.keycode == 82)
	{
		Reiniciar()
	}

	if (qualFase == 1 || qualFase == 2) //Movimentação do coração laranja
	{
	if ( e.keyCode == 87 ) {
		if (yCoracao > 0)
			yCoracao -= 10;
		Hopes.play()
		AtualizaTela();
	}

	if ( e.keyCode == 83 ) {
		if (yCoracao < 460)
			yCoracao += 10;
		Hopes.play()
		AtualizaTela();
	}

	if ( e.keyCode == 65 ) {
		if (xCoracao > 0)
			xCoracao -= 10;
		Hopes.play()
		AtualizaTela();
	}

	if ( e.keyCode == 68 ) {
		if (xCoracao < 480)
			xCoracao += 10;
		Hopes.play()
		AtualizaTela();
	}
}

else
	if (qualFase == 3 || qualFase == 4)
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
		quantosErros++
		somMorte.play()
		Resetar()
	}
}


function Reiniciar()
{
	xCoracao=260;
	yCoracao=400;
	Iniciar();
	quantosErros = 0
	qualFase = 1
	noFim = false
}