import cors from "cors";
import express from "express";
import session from "express-session";
import passport from "passport";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("Using memory store for sessions (development only)");
app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev-secret-change-this",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // HTTP only for development
      httpOnly: true, // XSS protection
      maxAge: parseInt(process.env.SESSION_MAX_AGE || "86400000"), // 24h
      sameSite: "lax",
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(
  (user: Express.User, done: (err: any, id?: Express.User) => void) => {
    done(null, user);
  },
);

passport.deserializeUser(
  (user: Express.User, done: (err: any, user?: Express.User) => void) => {
    done(null, user);
  },
);

app.use("/api", authRoutes);

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

export default app;
