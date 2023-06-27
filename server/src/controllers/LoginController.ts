import { NextFunction, Request, Response } from "express";
import { get, controller, use, bodyValidator, post } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('request was made');
  next();
}

@controller('/auth')
class LoginController {

  @get('/login')
  @use(logger)
  getLogin(req: Request, res:Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email','password')
  postLogin(req: Request, res: Response) {
    const {email, password} = req.body;
  
    // typeguard
    if(email === 'hello@hi.com' && password === 'pw') {
      // mark person as logged in
      req.session = { loggedIn: true };
      res.redirect('/');
  
    }else{
      res.send('Invalid email or pw');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}