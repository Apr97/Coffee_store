import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  declarations: [HomeScreenComponent, LoginScreenComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
