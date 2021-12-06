import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "apiKey",
//   authDomain: "lekker-code-db-default-rtdb.firebaseapp.com",
//   databaseURL: "https://lekker-code-db-default-rtdb.firebaseio.com/",
//   storageBucket: "bucket.appspot.com"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAbNr8sQlTeImQZ7FCoA52B9xbsptP7ONo",
  authDomain: "lekker-code-db.firebaseapp.com",
  databaseURL: "https://lekker-code-db-default-rtdb.firebaseio.com",
  projectId: "lekker-code-db",
  storageBucket: "lekker-code-db.appspot.com",
  messagingSenderId: "1048885049005",
  appId: "1:1048885049005:web:f1ee3ebce8ef5972567824",
  measurementId: "G-J5PF443N6P"
};

const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
