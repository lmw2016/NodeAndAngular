import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list'; 


import { AppComponent } from './app.component';

import { RegisterComponent } from './register.component';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';
import {LoginComponent} from './login.component';
import { PostComponent } from './post.component';


const routers=[
  {path:'',component:PostComponent},
  {path:'register',component:RegisterComponent},
  {path:'users',component:UsersComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'login',component:LoginComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UsersComponent,
    ProfileComponent,
    LoginComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule, 
     FormsModule,
     MatButtonModule, 
     MatSlideToggleModule,
     MatCardModule,
     MatToolbarModule,
     MatInputModule,
     MatListModule,
    RouterModule.forRoot(routers),
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
