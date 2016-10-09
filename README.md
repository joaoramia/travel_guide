Por: Joao Paulo Ramia

	O aplicativo foi feito com Ionic e foram criados 6 diferentes states:

		1-login
		2-destination
		3-cities
		4-hotels
		5-hotel
		6-comments

	Para este projeto com tempo limitado, os testes automatizados foram feitos para a sessao de login e de comments, pois acreditei serem as sessoes mais sensiveis ao olhar do cliente por haver input do usuario.

	Foquei em desenvolver as funcionalidades que achei essenciais para o cliente. Acredito que comentarios, paginas de cada hotel e opcoes por tipo de destino (praias, romantico e paradisiaco) seriam os elementos principais para a escolha de um hotel pelo usuario.

	Espero que gostem! Qualquer duvida fico a disposicao.

	Joao Paulo Ramia

/* -----------------------------------------------------------------------------------------------

Os arquivos estao organizados da seguinte forma:

	JS e HTML: dentro de www/js, cada sessao do aplicativo possui uma pasta com um arquivo .js (que possui os Controllers, Factories, States e Directives) e arquivos .html (com os States e potenciais Directives).

	CSS: na pasta www/css estao os .css para cada sessao.

	TESTES: dentro de tests/unit-tests estao os testes feitos com Karma e Jasmine para as sessoes de comments e login

/* -----------------------------------------------------------------------------------------------

Instrucoes para rodar o aplicativo:

	$npm install

	$npm install -g karma-cli (if you want it to be install gloabally)

	$npm install -g phantomjs (if you want it to be install gloabally)

	$npm test (for testing)

	$ionic serve --lab (for emulating on the browser. You need ionic globally installed)

