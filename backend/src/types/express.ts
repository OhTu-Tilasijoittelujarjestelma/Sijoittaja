import "express-session";

declare global {
  namespace Express {
    interface User {
      id: string;
      name: string;
      username: string;
      email: string;
    }

    interface Request {
      user?: User;
      isAuthenticated(): boolean;
      login(user: User, done: (err: any) => void): void;
      logout(done: (err: any) => void): void;
    }
  }
}

declare module "express-session" {
  interface SessionData {
    passport?: {
      user?: Express.User;
    };
  }
}

export {};
