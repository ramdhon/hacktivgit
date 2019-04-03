const users = require('express').Router();
const UserController = require('../../controllers/user.js');


users.get('/', UserController.getRepos);
users.post('/', UserController.createRepo);
users.delete('/:owner/:repoName', UserController.deleteRepo);
users.get('/starred', UserController.getStarredRepos);
users.post('/starred', UserController.searchStarredRepos);
users.get('/:owner/repos', UserController.getUserRepos);

users.get('/staring/:owner/:repoName', UserController.staringRepo);
users.put('/staring/:owner/:repoName', UserController.staringRepos);
users.delete('/staring/:owner/:repoName', UserController.unstaringRepos);


module.exports = users;