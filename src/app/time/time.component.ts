import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  timeFormGroup: FormGroup = null;
  time: string = '';

  constructor(
    private fb: FormBuilder,
    private timeService: TimeService
    ) { }


  ngOnInit() {
    this.timeFormGroup = this.buildForm();
  }

  getTime() {
       const timeFromForm = this.timeFormGroup.value;
       let train = timeFromForm.trainTime;
       console.log('train: ' + train);
       this.timeService.getTime(train).subscribe(data => {
        // this.router.navigate(['login']);
        console.log('the answer from server is: ' + data.start);
      });
     }
  


  buildForm(): FormGroup {
    return this.fb.group({
      trainTime: new FormControl('', Validators.required) 
     
    });
  }

  
  

}
