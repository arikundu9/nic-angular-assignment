import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface state {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entryForm!: FormGroup; //bang eliminate and test
  title = 'nic-angular-assignment';
  showFiller = false;

  btnText: string = "Submit";
  states: any[] = ["Wset Bengal", "Bihar", "Jharkhand"];
  dists: any[] = ["Bankura", "Purulia", "Birbhum", "Nadia", "Murshidabad"];
  cities: any[] = ["City1", "City2", "City3"];
  genders: any[] = ["Male", "Female", "Others"]

  data: any = { "name": "", "state": "", "dist": "", "pin": "", "gender": "", "city": "", "designation": "" };

  /* pname: any;
  state: any;
  district:any;
  city:any;
  age:any;
  gender:any; */

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.entryForm = this.formBuilder.group({
      pname: [''/*,Validators.required*/],
      state: [''/*,Validators.required*/],
      district: [''/*,Validators.required*/],
      pin: ['',[Validators.max(999999),Validators.min(100000)/*,Validators.required*/]],
      gender: [''/*,Validators.required*/],
      city: [''/*,Validators.required*/],
      designation: [''/*,Validators.required*/],
    });
  }

  onSubmit(tabs: any) {
    if (this.entryForm.valid) {
      this.data.name = this.entryForm.controls.pname.value;
      this.data.state = this.entryForm.controls.state.value;
      this.data.dist = this.entryForm.controls.district.value;
      this.data.pin = this.entryForm.controls.pin.value;
      this.data.gender = this.entryForm.controls.gender.value;
      this.data.city = this.entryForm.controls.city.value;
      this.data.designation = this.entryForm.controls.designation.value;
      console.log(this.data);
      this.btnText = "Update";
      tabs.selectedIndex = 1;
    }
  }
  finalSubmit(e: any) {
    alert(JSON.stringify(this.data));
  }
  getFirstKey(x: any) {
    var firstKey = Object.keys(x)[0];
    return x[firstKey];
  }
  RestrictPin(e:Event,pin:number){
    if(pin>999999){
      // alert();
      e.preventDefault();
    }
  }
  get pname() { return this.entryForm.controls.pname; }
  get entryform() { return this.entryForm.controls; }
}
