import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { TimeService } from '../services/time.service';
import { Time } from '../entities/time.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  timeFormGroup: FormGroup = null;
  time: Time;
  

  constructor(
    private fb: FormBuilder,
    private timeService: TimeService,
    private router: Router,
    ) { }


  ngOnInit() {
    this.timeFormGroup = this.buildForm();
  }

  getTime() {
       const timeFromForm = this.timeFormGroup.value;
       let train = timeFromForm.trainTime;
       console.log('train: ' + train);
       this.timeService.getTime(train).subscribe(data => {
       this.time = data;
       localStorage.setItem('timeObject', JSON.stringify(this.time));
        console.log('the answer from server is: ' + JSON.stringify(this.time));
       this.router.navigate(['schedule']);
      });
     }
  


  buildForm(): FormGroup {
    return this.fb.group({
      trainTime: new FormControl('', Validators.required) 
     
    });
  }

  
  

}
