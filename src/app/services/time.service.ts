import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Time } from 'src/app/entities/time.model';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(
    private http: HttpClient
  ) { }

  /*
   getUserById(id: number) {
    return this.http.get<User>(`${environment.secureUserApi}/getUser/` + id);
  }
  */

  getTime(trainTime: string){
    return this.http.get<Time>(`${environment.timeApi}/getSchedule/` + trainTime);
  }
}
