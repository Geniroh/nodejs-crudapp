const axios = require("axios");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      //   console.log(response);
      res.render("index", {
        users: response.data,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user.ejs");
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", {
      params: { id: req.query.id },
    })
    .then((userdata) => {
      res.render("update_user.ejs", {
        user: userdata.data,
      });
    })
    .catch((err) => {
      res.send(err);
    });
  //   res.render("update_user.ejs");
};
