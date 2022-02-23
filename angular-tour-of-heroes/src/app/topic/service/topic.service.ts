import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Topic } from '../entity/topic';


@Injectable({
  providedIn: 'root'
})
export class TopicService {
  apiUrl: string = `${environment.protocol}${environment.host}:${environment.port}`;

  constructor(private http: HttpClient) { }

  getTopic(): Observable<Array<Topic>>  {
    return this.http.get<Array<Topic>>(`${this.apiUrl}/topic`) 
  }
}
