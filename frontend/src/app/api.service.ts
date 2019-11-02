import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'
import {map, tap, catchError} from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
    providedIn:'root'
})
export class ApiService{
    constructor(private http:HttpClient){}

     // messages={}

    getMessages():Observable<any[]>{
      return  this.http.get<any[]>('http://localhost:3000/posts').pipe(
        // tap(),
        // catchError()
        )
    }

    // getMessagesWithSub(){
    //       this.http.get('http://localhost:3000/posts').subscribe(res=>{
    //         this.messages=res
    //     })
    //   }

    // registerUser(registerData){
    //    return   this.http.post('http://localhost:3000/register',registerData);
    //   }

    //   loginUser(loginData){
    //       this.http.post('http://localhost:3000/login',loginData).subscribe(res=>{
    //         console.log(res);
    //       });
    //    }

      getUsers():Observable<any[]>{
        return  this.http.get<any[]>('http://localhost:3000/users').pipe(
          // tap(),
          // catchError()
          )
      }

      //code in video
    //   getUsers(){
    //      this.http.get<any[]>('http://localhost:3000/users').subscribe({
    //          this.users=res.json() //this code won't work
    //      })
    //   }
    getProfile(id:string):Observable<any>{
         return  this.http.get<any>('http://localhost:3000/profile/'+id).pipe(

           );
        }
}