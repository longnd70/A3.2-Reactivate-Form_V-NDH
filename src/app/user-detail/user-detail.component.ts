import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { states } from '../data-model';
import { emailValidator } from '../shared/CustomValidators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  states = states;
  ates = states;
  userFormGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
  this.userFormGroup=this.formBuilder.group({
    name: ['Hoang', [Validators.required, Validators.minLength(4)]],  
    email: ['', [Validators.required,emailValidator()]],       
    addresses: this.formBuilder.group({ //the child FormGroup        
      street: ['', [Validators.required]],
      city: '',
      state: this.states[0]})
  })
}
}