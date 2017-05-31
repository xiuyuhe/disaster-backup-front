import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EQUIPMENT_URI } from '../backen-const';
import { Observable } from 'rxjs';

@Injectable()
export class DemoService {

  constructor(private http: Http) { }

  demourl: string = EQUIPMENT_URI + '/siteInfo';

  getData(): Observable<any> {
      return this.http.get(this.demourl+'/page?start=0');
  }
}
