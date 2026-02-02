const User = require("../module/user.js");

module.exports.renderRegisterForm = (req, res) => {
  res.render("signup.ejs");
};

module.exports.registerUser = async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email
    });

    const registeredUser = await User.register(user, req.body.password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);

      req.flash("success", `logged in as ${req.body.username}`);
      res.redirect("/listings");
    });

  } catch (err) {
    res.send(err.message);
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("login.ejs");
};

module.exports.loginUser = async (req, res) => {
  let redirectUrl = res.locals.url || "/listings";
  req.flash("success", `logged in as ${req.body.username}`);
  res.redirect(redirectUrl);
};

module.exports.logoutUser = (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);

    req.flash("success", "logged out successfully");
    res.redirect("/listings");
  });
};
