# Concesionario de Autos - API REST

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://github.com/nestjs/nest" target="_blank"><img src="https://img.shields.io/github/stars/nestjs/nest.svg?style=social&label=Stars" alt="GitHub Stars" /></a>
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://nodejs.org/" target="_blank"><img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" /></a>
  <a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" /></a>
</p>

## Descripción

API REST para un sistema de gestión de concesionario de autos, desarrollada con [NestJS](https://nestjs.com/). Este proyecto proporciona endpoints para la gestión de vehículos, incluyendo operaciones CRUD y funcionalidades específicas del negocio.

## Características

- Gestión completa de vehículos (CRUD)
- API RESTful
- TypeScript
- Arquitectura modular
- Validación de datos
- Documentación de API

## Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- TypeScript

## Instalación

```bash
# Instalar dependencias
$ npm install

# Ejecutar en modo desarrollo
$ npm run start:dev

# Compilar para producción
$ npm run build

# Ejecutar en producción
$ npm run start:prod
```

## Estructura del Proyecto

```
src/
├── cars/           # Módulo de vehículos
├── app.module.ts   # Módulo principal
└── main.ts         # Punto de entrada
```

## Documentación de la API

La documentación de la API estará disponible en `/api` cuando el servidor esté en ejecución.

## Licencia

[MIT licensed](LICENSE)

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest