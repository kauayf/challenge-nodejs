



//IMPORTS
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
//APP.USES
const app = express();
app.use(express.json());
app.use(cors());




//BDFAKE
const repositories = [];




//CREATE
app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  
  const repository = {
    id: uuidv4(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(repository);

  return response.json(repository)
});




//LIST
app.get("/repositories", (request, response) => {
  return response.json(repositories)
});




//UPDATE
app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositoryIndex = repositories.findIndex(repository =>
     repository.id === id
     );

  if (repositoryIndex === -1) {
    return response.status(400).json( { error: "Repository not found" } );
  }

  const repository = {
    id,
    title,
    url,
    techs,
    likes: repositories[repositoryIndex].likes,
  };

  repositories[repositoryIndex] = repository;

  return response.json(repository)
});




//DELETE
app.delete("/repositories/:id", (request, response) => {

  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository =>
     repository.id === id
     );

  if (repositoryIndex >= 0) {
    repositories.splice(repositoryIndex, 1); 
  } else {
    return response.status(400).json( { error: "Repository not found." } );
  }
  return response.status(204).send()
});



//CREATE(POST) LIKES
app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository =>
    repository.id === id
    );

 if (repositoryIndex === -1) {
   return response.status(400).json( { error: "Repository not found" } );
 }

 repositories[repositoryIndex].likes++

 return response.json(repositories[repositoryIndex]);

});




module.exports = app;
