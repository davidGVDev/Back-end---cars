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
  <a href="https://swagger.io/" target="_blank"><img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=black" alt="Swagger" /></a>
  <a href="https://jestjs.io/" target="_blank"><img src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white" alt="Jest" /></a>
  <a href="https://www.docker.com/" target="_blank"><img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker" /></a>
</p>

## 📋 Descripción

API REST para un sistema de gestión de concesionario de autos, desarrollada con [NestJS](https://nestjs.com/). Este proyecto proporciona endpoints para la gestión de vehículos, incluyendo operaciones CRUD y funcionalidades específicas del negocio.

## ✨ Características

- 🚗 Gestión completa de vehículos (CRUD)
- 🔄 API RESTful
- 📝 TypeScript
- 🏗️ Arquitectura modular
- ✅ Validación de datos

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- TypeScript

## 🚀 Instalación

```bash
# Clonar el repositorio
$ git clone https://github.com/tu-usuario/car-dealership.git

# Instalar dependencias
$ npm install

# Configurar variables de entorno
$ cp .env.example .env

# Ejecutar en modo desarrollo
$ npm run start:dev

# Compilar para producción
$ npm run build

# Ejecutar en producción
$ npm run start:prod

```

## 📁 Estructura del Proyecto

```
src/
├── cars/           # Módulo de vehículos
├── brands/         # Módulo de marcas
├── seed/           # Poblar la data
├── common/         # Utilidades comunes
├── config/         # Configuraciones
├── app.module.ts   # Módulo principal
└── main.ts         # Punto de entrada
```

## 📚 Documentación de la API

La documentación de la API está disponible en `/api` cuando el servidor esté en ejecución. Utiliza Swagger para una interfaz interactiva.

## 🔌 Endpoints

### 🚗 Autos (`/cars`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/cars` | Obtener todos los autos |
| GET | `/cars/:id` | Obtener un auto por ID |
| POST | `/cars` | Crear un nuevo auto |
| PATCH | `/cars/:id` | Actualizar un auto existente |
| DELETE | `/cars/:id` | Eliminar un auto |

### 🏭 Marcas (`/brands`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/brands` | Obtener todas las marcas |
| GET | `/brands/:id` | Obtener una marca por ID |
| POST | `/brands` | Crear una nueva marca |
| PATCH | `/brands/:id` | Actualizar una marca existente |
| DELETE | `/brands/:id` | Eliminar una marca |

### 🌱 Seed (`/seed`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/seed` | Poblar la base de datos con datos de ejemplo |

## 🧪 Pruebas

```bash
# Ejecutar pruebas unitarias
$ npm run test

# Ejecutar pruebas con cobertura
$ npm run test:cov
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, lee las [guías de contribución](CONTRIBUTING.md) para más detalles.

## 📄 Licencia

[MIT licensed](LICENSE)

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest