# Basic Showcase Application
## Tech Assessment by Ryan Smith
<br>


#### Context:
This is a Laravel application utilising the Vue.js framework with Vuex store to present a user interface.
<br><br>
#### Architecture:
This application has been dockerised into component containers (Application, Web and Database) primarily for ease of local deployment, but also to illustrate best practice and pipeline readiness (e.g. Kubernetes).
<br><br>


#### Getting Started:

* Clone the repository
* Execute composer commands for initial build of the containers:<br>
    `docker-compose up -d --build`
* Install composer requirements into the application container:<br>
    `docker-compose exec interview-showcase-app composer install`
* Duplicate the .env.example file to create a local '.env'
* Run the Laravel command to generate the web application key:<br>
    `docker-compose exec interview-showcase-app php artisan key:generate`
* Unit tests can be executed:<br>
  `docker-compose exec interview-showcase-app vendor/bin/phpunit`
* Run the initial database migrations:<br>
    `docker-compose exec interview-showcase-app php artisan migrate`<br>
* Install package dependencies:<br>
  `npm install`
* Serve the web application:<br>
`npm run dev`
  
---
* Application should be running at http://localhost:80/
* Local MySQL database should be available to connect at port 33065 using
---
#### Assumptions, Scope and Design Considerations:
* Authentication/user profiles excluded from scope
