# Scheduler API

## Table of Contents

- [Problem Description](#problem-description)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running Docker](#running-docker)
- [Seeding the Database](#seeding-the-database)
- [Running the app](#running-the-app)
- [Testing](#testing)
- [Future Improvements](#future-improvements)

## Problem Description

Implement API endpoints for managing schedules and tasks using TypeScript.

The project involves designing and building RESTful endpoints to handle scheduling and task management.

See below are the details of the resources:

**Schedule**

- `id`: Universally unique identiﬁer (UUID) for the schedule.
- `account_id`: Integer representing the account associated with the schedule.
- `agent_id`: Integer representing the agent assigned to the schedule.
- `start_time`: DateTime indicating the start time of the schedule.
- `end_time`: DateTime indicating the end time of the schedule.

**Tasks**

- `id`: UUID for the task.
- `account_id`: Integer representing the account associated with the task.
- `schedule_id`: UUID referencing the schedule to which the task belongs.
- `start_time`: DateTime indicating the start time of the task.
- `duration`: Integer representing the duration of the task.
- `type`: String enumeration with values 'break' or 'work', indicating the type of task.

> There's a one-to-many relationship between Schedule and Tasks, where a Schedule can have multiple Tasks associated.

## Requirements

1. Docker Desktop (or similar) with support for docker-compose
2. NodeJS v20

## Installation

```bash
$ npm install
```

## Running Docker

```bash
# docker full solution -> will install the app dependencies and run it in watch mode
$ docker compose up -d

# database only
$ docker compose up -d postgres
```

## Seeding the Database

```bash
$ npx prisma db seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Future Improvements

1. Refactor Unit Tests

   - Some unit test are not properly written and therefore should be improved.
   - Make use of the framework's automock feature.

2. Write more E2E tests

   - At the moment, I'm only testing the "findAll" method of each resource.
   - Create specific DB configuration for dev and testing

3. Improve API configurtion and security

   - Take leverage of the framework's builtin modules

     - Add [Helmet](https://docs.nestjs.com/security/helmet) security headers
     - Add [Cross-site request forgery](https://docs.nestjs.com/security/csrf) security
     - Add [Rate Limiting](https://docs.nestjs.com/security/rate-limiting)
     - Add [Cache](https://docs.nestjs.com/techniques/caching)
     - Add [Configuration](https://docs.nestjs.com/techniques/configuration)
     - Add [Healthchecks](https://docs.nestjs.com/recipes/terminus) (replace current hard-coded implementation)
     - Add [Documentation](https://docs.nestjs.com/recipes/documentation) for devs

   - Implement HTTPS
   - Implement [Authentication](https://docs.nestjs.com/security/authentication) and [Authorization](https://docs.nestjs.com/security/authorization) with [Auth Guards](https://docs.nestjs.com/guards#authorization-guard). Move them to an Auth module

   - Implement better [Exception Filters](https://docs.nestjs.com/exception-filters)

4. Database
   - Manage dotenv files per environment
   - Improve security of the database
