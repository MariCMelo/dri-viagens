# Driviagens

## Sobre

Este projeto consiste na criação do backend de um aplicativo de venda de passagens aereas. Essa aplicação oferece uma API com diversas rotas para gerenciar informações relacionadas a passageiros, cidades, voos e viagens. 

Instruções para rodar o projeto:

- Certifique-se de ter o `Node.js` , `npm`  e `postgress` previamente instalados.


  ## Instalação

`git clone https://github.com/MariCMelo/driviagens`

`cd driviagens`

`npm install` -- Instala as dependencias

`npm run dev` -- inicia o projeto

Crie um arquivo `.env` na raiz do projeto e adicione as configurações necessárias:

preencha **username** e **password** com os utilizados no seu postgress local, siga o exemplo abaixo:

`DATABASE_URL="postgresql://username:password@localhost:5432/driviagens"`

## Requisições
Após configurado, é possível fazer as seguintes requisições:

Para realizar as requisições localmente utilize 

```
localhost:3000
```
**verificação a integridade da aplicação**

--> GET /health


**Criação de Passageiros**

--> POST /passengers

```
{
	firstName: string; // primeiro nome do passageiro,
	lastName: string; // segundo nome do passageiro
}
```

Retorno do passageiro no seguinte formato:

```
{
	id: number; // id no banco,
	firstName: string; // primeiro nome do passageiro,
	lastName: string; // segundo nome do passageiro
}

```

**Criação de Cidades**

--> POST /cities

```
{
	name: string; // nome da cidade
}
```


Retorno da cidade no seguinte formato:

```
{
	id: number; // id no banco,
	name: string; // nome da cidade
}
```

**Criação de Voos**

--> POST /flights

```
{
	origin: number; //código da cidade,
	destination: number; //código da cidade,
	date:  date; //no formato dd-mm-aaaa
}

```

Retorno do voo no seguinte formato:

```
{
	id: number; // id no banco,
	origin: number; //código da cidade,
	destination: number; //código da cidade,
	date:  date; //no formato dd-mm-aaaa
}

```


**Criação de uma viagem**

--> POST /travels


```
{
	passengerId: number; // id no banco,
	flightId: number; // id no banco,
}
```

Retorno da viagem no seguinte formato:

```
{
id: number; // id no banco,
passengerId: number; // id no banco,
flightId: number; // id no banco,
}
```
**Retorno dos voos criados**

--> GET /flights

```
[

  {
    id: number; // id no banco,
    origin: number; //código da cidade,
    destination: "Fortaleza",
    destination: number; //código da cidade,
    date:  date; //no formato dd-mm-aaaa
  },

  {
    id: number; // id no banco,
    origin: number; //código da cidade,
    destination: "Fortaleza",
    destination: number; //código da cidade,
    date:  date; //no formato dd-mm-aaaa
  }

	// ...
]

```

**Retorno das viagens dos passageiros**

--> GET /passengers/travels

```
[
  {
    passenger: string; // nome completo do passageiro,
    travels: number; //número total de viagens do passageiro
  },

  {
    passenger: string; // nome completo do passageiro,
    travels: number; //número total de viagens do passageiro
  }
	// ...
]
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias! Abra uma issue ou envie um pull request.

