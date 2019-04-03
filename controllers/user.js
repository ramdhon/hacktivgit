const axios = require('axios');
const ax = axios.create({
  baseURL: 'https://api.github.com'
})

ax.defaults.headers.common['Authorization'] = `token ${process.env.GITHUB_TOKEN}`

class Controller {
  static getRepos(req, res) {
    ax
      .get('/user')
      .then(( { data } ) => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }

  static createRepo(req, res) {
    ax
      .post('/user/repos', {
        name: req.body.repoName
      })
      .then(( { data } ) => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }

  static deleteRepo(req, res) {
    ax
      .delete(`/repos/${req.params.owner}/${req.params.repoName}`)
      .then(( { data } ) => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }

  static getStarredRepos(req, res) {
    ax
      .get(`user/starred`)
      .then(( { data } ) => {
        let { search } = req.query;
        if (!search) 
          res.status(200).json(data);
        else {
          let result = data.filter(object => object.name.match(search))
          res.status(200).json(result);
        }
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }

  static searchStarredRepos(req, res) {
    let { searchQuery } = req.body;
    res.status(200).redirect(`/users/starred?search=${searchQuery}`);
  }

  static getUserRepos(req, res) {
    ax
    .get(`/users/${req.params.owner}/repos`)
    .then(( { data } ) => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
  }

  static staringRepo(req, res) {
    let { staring } = req.query;
    if (staring == 1) 
      ax
        .put(`/user/starred/${req.params.owner}/${req.params.repoName}`)
        .then(( { data } ) => {
          let { search } = req.query;
          if (!search) 
            res.status(200).json(data);
          else {
            let result = data.filter(object => object.name.match(search))
            res.status(200).json(result);
          }
        })
        .catch(err => {
          res.status(500).json(err);
        })
    else if (staring == 0)
      ax
        .delete(`/user/starred/${req.params.owner}/${req.params.repoName}`)
        .then(( { data } ) => {
          let { search } = req.query;
          if (!search) 
            res.status(200).json(data);
          else {
            let result = data.filter(object => object.name.match(search))
            res.status(200).json(result);
          }
        })
        .catch(err => {
          res.status(500).json(err);
        })
    else
      res.status(200).json('no command for staring');
  }

  static staringRepos(req, res) {
    res.status(200).redirect(`/users/staring/${req.params.owner}/${req.params.repoName}?staring=1`);
  }

  static unstaringRepos(req, res) {
    res.status(200).redirect(`/users/staring/${req.params.owner}/${req.params.repoName}?staring=0`);
  }
}


module.exports = Controller;