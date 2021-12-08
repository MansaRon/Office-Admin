import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDatabase, ref, get, child } from "firebase/database";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  avator_1: string = 'assets\\MaskGroup_1.png';
  avator_2: string = 'assets\\MaskGroup_2.png';
  avator_3: string = 'assets\\MaskGroup_3.png';
  avator_4: string = 'assets\\MaskGroup_4.png';
  avator_5: string = 'assets\\MaskGroup_5.png';
  avator_6: string = 'assets\\MaskGroup_6.png';
  avator_7: string = 'assets\\MaskGroup.png';
  officeData = [];
  arrow: boolean = false;
  loader: boolean = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.retrieveOffices();
  }

  public retrieveOffices() {
    this.loader = true;
    this.http.get('https://lekker-code-db-default-rtdb.firebaseio.com/offices.json').
    pipe(map(responseMap => {
      const officeArray = [];
       for (const key in responseMap) {
         if (responseMap.hasOwnProperty(key)) {
           officeArray.push({...responseMap[key], id: key});
         }
       }
       return officeArray;
    })).subscribe(response => {
      this.loader = false;
      this.officeData = response;
      }, error => { this.loader = false; console.log(error); })

  }

  public dropDownClicked() {
    if (!this.arrow) {
      this.arrow = true;
    }
    else {
      this.arrow = false;
    }
  }

  public viewOffice(data) {
    localStorage.setItem("officeData", JSON.stringify(data));
    this.router.navigateByUrl('/view-offices');
  }

  public editOffice(officeDetails) {
    localStorage.setItem("officeData", JSON.stringify(officeDetails));
    this.router.navigateByUrl('/edit-office');
  }

  public createNewOffice() {
    this.router.navigateByUrl('/new-office');
  }

}
