import { Component,OnInit  } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-form';
  employeeForm:FormGroup;
  ngOnInit()
  {
 this.employeeForm=new FormGroup({
   firstName:new FormControl(),
   lastName:new FormControl(),
   email:new FormControl(),
   phoneNo:new FormControl(),
   address:new FormGroup({
     line1:new FormControl(),
     line2:new FormControl(),
    pincode:new FormControl(),
     district:new FormControl(),
    state:new FormControl(),

   })
   
 });
  }
}

