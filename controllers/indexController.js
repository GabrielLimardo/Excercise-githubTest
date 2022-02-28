const { validationResult } = require("express-validator");
const axios = require('axios');

const controller = {
  root: (req, res) => {
    
    var config = {
      method: 'get',
      url: 'https://api.github.com/repos/FlatDigital/fullstack-interview-test',
      headers: { 
        'Authorization': 'Bearer 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'
      }
    };

    axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });

  },
  Commits: (req, res) => {
    
    var config = {
      method: 'get',
      url: 'https://api.github.com/repos/FlatDigital/fullstack-interview-test/commits',
      headers: { 
        'Authorization': 'Bearer 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'
      }
    };

    axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });

  },
  Authors: (req, res) => {
    
    var config = {
      method: 'get',
      url: ' https://api.github.com/repos/FlatDigital/fullstack-interview-test/contributors',
      headers: { 
        'Authorization': 'Bearer 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'
      }
    };

    axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });

  },
  Branches: (req, res) => {
    
    var config = {
      method: 'get',
      url: 'https://api.github.com/repos/FlatDigital/fullstack-interview-test/branches',
      headers: { 
        'Authorization': 'Bearer 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'
      }
    };

    axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });

  },
  PRs: (req, res) => {
    
    var config = {
      method: 'get',
      url: 'https://api.github.com/repos/FlatDigital/fullstack-interview-test/pulls',
      headers: { 
        'Authorization': 'Bearer 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'
      }
    };

    axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });

  }
};

module.exports = controller;