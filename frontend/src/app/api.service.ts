import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
    providedIn:'root'
})
export class ApiService{
    constructor(private http:HttpClient){}

      messages={};

    getMessages():void{
        this.http.get('http://localhost:3000/posts').subscribe(res=>{
            console.log(res);
           this.messages=res;
           console.log(this.messages);
        })
    }
}