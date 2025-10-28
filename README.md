# exeCrud
iniciar projeto 
npm init

baixar o express
npm i express

import para rodar os testes automatizados
  
baixar a lib de tests
npm i --save-dev jest cross-env

adicionar a baixo de main
  "type": "module",


adicionar em scripts
    "dev": "node --watch ./src/index.js",


adicionar em scripts
    "test": "cross-env TEST=true node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"

baixar libs para o banco de dados
npm install sequelize mysql2