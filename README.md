# Test Messaging Api

<hr />

## Estructura del proyecto

```
.
├── __tests__
│   └── ...
├── dist (auto generated in npm start)
├── src
│   ├── config
│   │   └── index
│   ├── controllers
│   │   └── ...
│   ├── errors
│   │   └── ...
│   ├── interfaces
│   │   └── ...
│   ├── models
│   │   └── ...
│   ├── routes
│   │   └── ...
│   ├── services
│   │   └── ...
│   └── index.ts
├── README.md
├── jest.config.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```

## Correr la API

- Utilizar `npm run dev` para correr en development.
- Utilizar `npm test` para correr los tests.
- Utilizar `npm start` para correr en producción.

## Consigna

La siguiente API es encargada de crear chats y agregar mensajes a los mismos. Se asume que se trata de los chats de una empresa con diversos clientes, aunque se desconoce el identificador de cada cliente, y se toma a los chats como una entidad en sí.

Es decir, la empresa cuenta con una colección de chats, donde un chat puede tener de **0** a **N** mensajes. El mensaje puede ser de parte de la empresa (BUSINESS) o del cliente (CUSTOMER).

## La evaluación

El objetivo de esta evaluación es completar todas las áreas que se encuentren marcadas como `// TODO`. En particular, aquellas áreas a completar son los los **services** y los **tests**.

Para poder completar los servicios, es necesario utilizar una etructura que esconda la implementación de la base de datos (en este caso, Mongoose), de manera que se pueda cambiar fácilmente de ODM sin necesidad de modificar la logica de negocio que se encuentra en los servicios.

No hay problema en crear directorios o archivos para ayudarse si se considera necesario.

La estructura de las pruebas en general ya esta armada bajo la carpeta `__tests__`, simplemente queda completar el contenido de las pruebas para **crear chat** y **agregar un mensaje** a un chat.

## Documentación

[Documentación de Express](https://expressjs.com/es/)
[Documentación de Typescript](https://www.typescriptlang.org/)
