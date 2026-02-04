require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const ejsMate = require("ejs-mate");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const session = require("express-session");
// const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const User = require("./module/user.js");

const userRouter = require("./routes/user.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");


// ================= APP CONFIG =================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));


// ================= DATABASE + SESSION + SERVER =================
const db_url = process.env.ATLAS_URL;
const port = process.env.PORT || 8080;
 
mongoose
  .connect(db_url)
  .then(() => {
    console.log("MongoDB Connected");

    // ===== SESSION STORE (AFTER DB CONNECT) =====
    // const store = MongoStore.create({
    //   mongoUrl: db_url,
    //   crypto: {
    //     secret: process.env.SECRET || "mysecretkey",
    //   },
    //   touchAfter: 24 * 3600,
    // });

    // store.on("error", (err) => {
    //   console.log("SESSION STORE ERROR:", err);
    // });

    const sessionOptions = {
      secret: process.env.SECRET || "mysecretkey",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      },
    };

    app.use(session(sessionOptions));
    app.use(flash());

    // ===== PASSPORT =====
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    // ===== LOCALS =====
    app.use((req, res, next) => {
      res.locals.currentUser = req.user;
      res.locals.success = req.flash("success");
      res.locals.error = req.flash("error");
      next();
    });

    // ===== ROUTES =====
    app.use("/", userRouter);
    app.use("/listings", listingRouter);
    app.use("/review", reviewRouter);

    // ===== START SERVER =====
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
