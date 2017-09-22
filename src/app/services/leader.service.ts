import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/delay';
//import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Leader } from '../shared/leader';
//import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders():Observable<Leader[]> {
    //return Observable.of(LEADERS).delay(2000).toPromise();
    return this.restangular.all('leaders').getList();
  }

  getFeaturedLeader():Observable<Leader> {
    //return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000).toPromise();
    return this.restangular.all('leaders').getList({featured:true}).map(leaders => leaders[0]);
  }

}
