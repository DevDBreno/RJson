<p align="center">
  <img src="https://imgur.com/utbfMGe.png"/>
</p>

<p align="center">RJson is an rest api built with
  <a href="http://nodejs.org" target="blank">Node.js</a>
	<br/>
  <b>RJson handles a json file using http methods</b>
</p>

### Developed in:

    Node.js    		(v13.8.0)
    Typescript 		(v3.7.5)
    Express.js 		(v4.17.1)

### First steps:

    1. Install Node.js (v12+)

    2. Clone the repository

    3. Inside the directory: type "yarn install" or "npm install"

<!-- ### Estrutura dos arquivos e pastas:

![Estrutura dos arquivos e pastas](https://s3.amazonaws.com/befunkyanonymous/ANdmLgl-156635192340632.jpg) -->

<!-- ### Iniciando a aplicação:

    yarn start ou npm start (para produção: recomendável)

    		   Ou

    yarn dev ou npm run dev (para desenvolvimento)

    PS: Eu disponibilizei uma pasta com o build da aplicação.
    	Podes usá-la caso queira, então execute:

    	=> node dist/server.js -->

<!-- ### URLs:

    +   http://localhost:9090

    		 Ou

    +   http://localhost:{PORT}

    + URL Base: http://localhost:{PORT}/api -->

<!-- ### Estrutura JSON das Regras:

    {
    	"id": "toxmau4zn",
    	"day": "DD-MM-YYY",		("day": "Diariamente" ou "day": ["Segunda", "Terça"])
    	"intervals": [{ "start": "HH:mm", "end": "HH:mm" }, { "start": "HH:mm", "end": "HH:mm" } ...{ object }]
    } -->

<!-- ### [POST] /api/cadastrar-regra JSON Schema para o POST:

- Use o **[cUrl](https://curl.haxx.se/)** (sudo apt install curl, em distribuições baseada no Debian)
- Ou use o **[Postman](https://www.getpostman.com/)** ou o **[Insomnia](https://insomnia.rest/download/)**(_softwares para API's Rest_)

#### Exemplos de requisições:

**> Dia Específico** :

    curl --location --request POST "http://localhost:9090/api/cadastrar-regra" \
     	  --header "Content-Type: application/json" \
    	  --data "{ \"day\": \"18-07-2019\", \"intervals\": [{ \"start\": \"08:15\", \"end\": \"9:15\" }, { \"start\": \"17:00\", \"end\": \"18:00\" }]	}"

**> Diariamente** :

    curl --location --request POST "http://localhost:9090/api/cadastrar-regra" \
    	  --header "Content-Type: application/json" \
    	  --data "{\"day\": \"Diariamente\", \"intervals\": [{ \"start\": \"12:00\", \"end\": \"13:00\" }, { \"start\": \"14:30\", \"end\": \"15:30\" }]}"

**> Semanalmente**:

    curl --location --request POST "http://localhost:9090/api/cadastrar-regra" \
    	  --header "Content-Type: application/json" \
    	  --data "{\"day\": [\"Quinta\", \"Sexta\"], \"intervals\": [{ \"start\": \"06:00\", \"end\": \"08:00\" }, { \"start\": \"11:00\", \"end\": \"13:00\" }]}"

### cUrl, imagem de exemplo:

![Imagem de exemplo](https://s3.amazonaws.com/befunkyanonymous/A8Uu13M-1566337937932682.jpg)

### Postman, imagem de exemplo:

![Imagem de exemplo](https://s3.amazonaws.com/befunkyanonymous/AfAGQAO-1566346814322423.jpg)

###### => E então cria o arquivo JSON: 'dataRules.json' (ou o nome previamente escolhido)!

### [GET] /api/listar-regras [TODAS]:

_Podes fazer requisições costumizadas também._

#### Por exemplo:

    http://localhost:9090/api/listar-regras?field[id]=true&field[day]=true (URL legível)

    	curl --request GET \
    	     --url 'http://localhost:9090/api/listar-regras?field%5Bid%5D=true&field%5Bday%5D=true'

    Retorno:

    [
    		{
    			"id": "toxmau4zn",
    			"day": "15/05/2019"
    		},
    		{
    			"id": "77627ur6c",
    			"day": "Diariamente"
    		},
    		{
    			"id": "n24xafidb",
    			"day": ["Quarta", "Quinta"]
    		}
    	]

    Em geral:

    curl --location --request GET "http://localhost:9090/api/listar-regras"

    + http://localhost:{PORT}/api/listar-regras (no navegador ou postman, ou insomnia...)
    + E então retorna TODAS as regras salvas

    Exemplo de resposta:

    	[
    		{
    			"id": "toxmau4zn",
    			"day": "15/05/2019",
    			"intervals": [{ "start": "10:00", "end": "11:00" }]
    		},
    		{
    			"id": "77627ur6c",
    			"day": "Diariamente",
    			"intervals": [{ "start": "11:30", "end": "12:20" }]
    		},
    		{
    			"id": "n24xafidb",
    			"day": ["Quarta", "Quinta"],
    			"intervals": [{ "start": "13:30", "end": "14:30" }]"
    		}
    	]

### [GET] /api/regra/{id} [ÚNICA]:

    curl --location --request GET "http://localhost:9090/api/regra/:id"

    > http://localhost:{PORT}/api/regras/:id (no navegador ou postman, insomnia...)
    	> E então retorna a ÚNICA regra com o ID referente

    Exemplo de resposta para (http://localhost:{PORT}/api/regras/toxmau4zn):

    		{
    			"id": "toxmau4zn",
    			"day": "15-05-2019",
    			"intervals": [{ "start": "11:30", "end": "12:20" }]
    		}

    Ou também com uma requisição customizada:

    http://localhost:{PORT}/api/regras/toxmau4zn

### [GET] /api/listar-regras/?idate={Data Inicial}&fdate={Data Final} [Regras por query]:

    Substitua 'dd-mm-yyy' de "idate" e "fdate" para que ambos tenha uma data válida
    Sendo que: "idate" sempre deverá ser mais antiga do que "fdate" em sentido temporais

    curl --location --request GET "http://localhost:9090/api/listar-regras/?idate=11-07-2019&fdate=18-07-2019" \

--data ""

    + http://localhost:9090/api/listar-regras/?idate=dd-mm-yyy&fdate=dd-mm-yyy
    	+ E então retorna a ÚNICA regra com o ID referente

    Exemplo de resposta para http://localhost:{PORT}/api/?idate=11-07-2019&fdate=18-07-2019

    						Ou

    			 http://localhost:9090/api/?idate=11-07-2019&fdate=18-07-2019:

    	[
    		{
    			"id": "tbmessu4z",
    			"day": "11-07-2019",
    			"intervals": [{ "start": "11:30", "end": "12:20" }],
    		},
    		{
    			"id": "aykoxcyxl",
    			"day": "14-07-2019",
    			"intervals": [{ "start": "11:30", "end": "12:20" }],
    		},
    		{
    			"id": "zxc3jkityu",
    			"day": "12-07-2019",
    			"intervals": [{ "start": "11:30", "end": "12:20" }],
    		},
    		{
    			"id": "tyuighjk1",
    			"day": "18-07-2019",
    			"intervals": [{ "start": "11:30", "end": "12:20" }],
    		}
    	]

### [DELETE] /api/{id}

    Notas: ':id' equivale à propriedade "id" da Regra

    curl --location --request DELETE "http://localhost:9090/api/:id" => (ponha um id válido em ':id')

    Exemplo de resposta para http://localhost:{PORT}/api/listar-regras/toxmau4zn:

    						Ou

    			http://localhost:9090/listar-regras/toxmau4zn:

    Resposta: "Regra deletada!"

    Ou seja, a estrutura:

    			{
    				"id": "toxmau4zn",
    				"day": "15-05-2019",
    				"intervals": [{ "start": "11:30", "end": "12:20" }],
    				"createdAt": "2019-08-18T05:13:41.264Z"
    			}

    É apagada do arquivo JSON. -->
