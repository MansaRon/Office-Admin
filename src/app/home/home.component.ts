import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  officeData: any = [
    {
      companyName: "TestA",
      numOfficePeople: [
        {
          name: "Thendo",
          surname: "Ramashia",
          avator: this.avator_1
        }
      ],
      officeNumber: "0853605000",
      officeEmail: "info@specno.com",
      officeCapacity: 25,
      officeAddress: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
    },
    {
      companyName: "Test Company B",
      numOfficePeople: [
        {
          name: "Thendo",
          surname: "Ramashia",
          avator: this.avator_1
        },
        {
          name: "Ronny",
          surname: "Ramashia",
          avator: this.avator_2
        },
        {
          name: "Khano",
          surname: "Ramukumba",
          avator: this.avator_3
        }
      ],
      officeNumber: "0614806500",
      officeEmail: "info@specno.com",
      officeCapacity: 2,
      officeAddress: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
    },
    {
      companyName: "Test Company C",
      numOfficePeople: [
        {
          name: "Wayne",
          surname: "Rooney",
          avator: this.avator_5
        },
        {
          name: "Carlos",
          surname: "Tevez",
          avator: this.avator_6
        },
        {
          name: "Cristiano",
          surname: "Ronaldo",
          avator: this.avator_7
        }
      ],
      officeNumber: "0736007050",
      officeEmail: "info@specno.com",
      officeCapacity: 7,
      officeAddress: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
    },
    {
      companyName: "Test Company D",
      numOfficePeople: [
        {
          name: "Lionel",
          surname: "Messi",
          avator: this.avator_2
        },
        {
          name: "Andreas",
          surname: "Iniesta",
          avator: this.avator_3
        },
        {
          name: "Xavi",
          surname: "Hernandez",
          avator: this.avator_4
        },
        {
          name: "Sergio",
          surname: "Busquets",
          avator: this.avator_5
        }
      ],
      officeNumber: "0817208090",
      officeEmail: "info@specno.com",
      officeCapacity: 16,
      officeAddress: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
    },
  ]

  arrow: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.officeData);
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
