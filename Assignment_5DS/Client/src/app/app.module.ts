import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './pipes/sort.pipe';
import { DefaultColorOnEventDirective } from './directives/bgdirective';
import { HeaderComponent } from './components/header/header.component';
import { RegisterformComponent } from './components/registerForm/registerform.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthHeaderService } from './Interceptor/auth-header.service';
import { HomeComponent } from './components/home/home.component';
import { MomentComponent } from './components/moment/moment.component';
import { EditMomentComponent } from './components/edit-moment/edit-moment.component';
import { AddMomentComponent } from './components/add-moment/add-moment.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,  
    DefaultColorOnEventDirective,
    HeaderComponent,
    RegisterformComponent,
    LoginComponent,
    ResetPasswordComponent,
    ProfileComponent,
    FooterComponent,
    HomeComponent,
    MomentComponent,
    EditMomentComponent,
    AddMomentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderService,
    multi: true 
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
