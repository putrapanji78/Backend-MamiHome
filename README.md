# heroku-test

setting Config 

"production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "protocol": "postgres",
    "dialectOptions": {
      "ssl": true
    }
  }
  
  
  setting procfile
  
  release: node_modules/.bin/sequelize db:migrate
web: node index.js
