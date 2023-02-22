# api-rest ts #

This is a very basic REST API written in Typescript.

I made this project as the example project for this tutorial:
[NODEJS de Crea una REST API Rest escalable y sostenible con Typescript y Express](https://www.youtube.com/watch?v=T1QFGwOnQxQ)

## Run ##

To run this project it is necessary to have installed:
* Node v18 or superior
* Typescript 4.9 or superior
* MongoDB (a docker-compose file is provided for those who want to use docker)

Create the storage/ directory in the project's root folder. This directory will be
used to save the uploaded files.

To run the project in dev enviroment, run the following command:
´´´
npm run dev
´´´

To compile the project, run:
´´´
tsc
´´´
The output will be in the dist/ directory
