const User = require("../module/user.js");

module.exports.renderRegisterForm = (req, res) => {
  res.render("signup.ejs");
};


module.exports.checkUsername = async (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.json({ available: false });
  }

  const existingUser = await User.findOne({ username });
  res.json({ available: !existingUser });
};

module.exports.registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // 🔴 USERNAME LENGTH CHECK
    if (username.length < 3) {
      req.flash("error", "Username must be at least 3 characters long");
      return res.redirect("/register");
    }

    const user = new User({ username, email });
    const registeredUser = await User.register(user, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", `logged in as ${registeredUser.username}`);
      res.redirect("/listings");
    });

  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/register");
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
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "logged out successfully");
    res.redirect("/listings");
  });
};
