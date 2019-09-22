import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'
import {map, tap, catchError} from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
    providedIn:'root'
})
export class ApiService{
    constructor(private http:HttpClient){}

     // messages:any[]=[];

    getMessages():Observable<any[]>{
      return  this.http.get<any[]>('http://localhost:3000/posts').pipe(
        // tap(),
        // catchError()
        )
    }
}