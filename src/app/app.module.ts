import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { UsersComponent } from './users/users.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    UsersComponent,
    NotificationsComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
