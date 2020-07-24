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

var qualFase = 1

var xAtaque1 = 0
var yAtaque1 = []

var yAtaque2 = 0
var xAtaque2 = []

var yAtaque3 = 0
var xAtaque3 = []

var yAtaque4 = 0

var yAtaque5 = 0

var yAtaque6 = 0

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

	AtualizaTela();

}

function AtualizaTela(){
	objContexto.drawImage(imgFundo,0,0);
	objContexto.drawImage(imgCoracao, xCoracao, yCoracao);
}

//Ataques de Lança

yAtaque1 = -70;
xAtaque1 = [];

for (let v = 0; v < 12; v++)
{
	xAtaque1[v] = Math.floor(Math.random() * 513)
}

function AtaqueLanca1(){
	if (qualFase == 1)
	{
	animacao1 = requestAnimationFrame(AtaqueLanca1)
	AtualizaTela()
	let i = 0
	while (i < 12)
	{
		objContexto.drawImage(imgLanca, xAtaque1[i], yAtaque1)
		Colidir(xAtaque1[i], yAtaque1)
		i += 1
	}
	yAtaque1 += 6
	if (yAtaque1 >= 480)
	{
		cancelAnimationFrame(animacao1)
		AtaqueLanca2()
	}
}
else if (qualFase == 2)
	{
		animacao7 = requestAnimationFrame()
		AtualizaTela()
	}		
}

function AtaqueLanca2(){
	animacao2 = requestAnimationFrame(AtaqueLanca2)
	AtualizaTela()

	let x = 0
	while (x < 12)
	{
		objContexto.drawImage(imgLanca, xAtaque2[x], yAtaque2)
		x += 1
	}
	yAtaque2 += 7
	if (yAtaque2 >= 480)
	{
		cancelAnimationFrame(animacao2)
		AtaqueLanca3();
	}
}

function AtaqueLanca3(){
	animacao3 = requestAnimationFrame(AtaqueLanca3)
	AtualizaTela()

	let x3 = 0
	while (x3 < 12)
	{
		objContexto.drawImage(imgLanca, xAtaque3[x3], yAtaque3)
		x3 += 1
	}
	yAtaque3 += 8
	if (yAtaque3 >= 480)
	{
		cancelAnimationFrame(animacao3)
		AtaqueLanca4()
	}
}

function AtaqueLanca4(){
	animacao4 = requestAnimationFrame(AtaqueLanca4)
	AtualizaTela()

	for (let x4 = 181; x4 < 316; x4 += 15)
	{
		objContexto.drawImage(imgLanca, x4, yAtaque4)
	}
	yAtaque4 += 8

	if (yAtaque4 >= 480)
	{
		cancelAnimationFrame(animacao4)
		AtaqueLanca5()
	}
}

function AtaqueLanca5(){
	animacao5 = requestAnimationFrame(AtaqueLanca5)
	AtualizaTela()

	for (let x5 = 0; x5 < 135; x5 += 15)
	{
		objContexto.drawImage(imgLanca, x5, yAtaque5)
	}

	yAtaque5 += 8

	for (let x6 = 361; x6 < 496; x6 += 15)
	{
		objContexto.drawImage(imgLanca, x6, yAtaque6)
	}

	yAtaque6 += 8

	if (yAtaque5 >= 480 || yAtaque6 >= 480)
	{
		cancelAnimationFrame(animacao5)
		window.alert('Boa irmão passou da primeira fase, mas sem colisão até minha vó')
		qualFase++;
		xCoracao = 260
		yCoracao = 400
		imgCoracao.src = "Img/coracaoRosa.png"
		AtualizaTela()
	}
}

//Movimentação do Coração Laranja
document.addEventListener("keydown", function(e) {

	if (qualFase == 1)
	{
	if ( e.keyCode == 87 ) {
		if (yCoracao > 0)
			yCoracao -= 10;
		AtualizaTela();
	}

	if ( e.keyCode == 83 ) {
		if (yCoracao < 460)
			yCoracao += 10;
		AtualizaTela();
	}

	if ( e.keyCode == 65 ) {
		if (xCoracao > 0)
			xCoracao -= 10;
		AtualizaTela();
	}

	if ( e.keyCode == 68 ) {
		if (xCoracao < 480)
			xCoracao += 10;
		AtualizaTela();
	}
}
else if (qualFase == 2)
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
	qualFase = 1;
	xCoracao=260;
	yCoracao=400;
	imgCoracao.src = "Img/coracao.png"
	Iniciar();
}

function Colidir(x, y){
	if (xCoracao + 15 > x &&
		xCoracao < x + 15 &&
		yCoracao + 64 < y &&
		yCoracao < y + 64 )
	{
		window.alert('Caiu na lanca?')
	}
}
