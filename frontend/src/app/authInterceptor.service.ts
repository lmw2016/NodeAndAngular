import { HttpClient, HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private http: HttpClient, private auth: AuthService) {}

  intercept(req, next) {
    var authReq = req.clone({
      headers: req.headers.set("Authentication", "token " + this.auth.token)
    });
    return next.handle(authReq);
  }
}
