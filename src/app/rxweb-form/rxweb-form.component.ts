import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'rxweb-form',
  templateUrl: './rxweb-form.component.html',
  styleUrls: ['./rxweb-form.component.css']
})
export class RxwebFormComponent implements OnInit{
  myForm: FormGroup;

	constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', RxwebValidators.required({message:'name cannot be blank.' })],
      marks: ['', RxwebValidators.maxNumber({value: 100, message : 'marks can not be greater than 100'})],
      age : ['', RxwebValidators.digit({message : 'Only Digits are allowed'})]
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.reset();
  }

  get name() {
    return this.myForm.controls['name'];
  }

  get marks() {
    return this.myForm.controls['marks'];
  }

  get age() {
    return this.myForm.controls['age'];
  }

    

}
