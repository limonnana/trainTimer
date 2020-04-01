import { Component, OnInit } from '@angular/core';
import { Time } from '../entities/time.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  time: Time;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.time = JSON.parse(localStorage.getItem('timeObject'));
  }

}
