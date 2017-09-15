import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders():Promise<Leader[]> {
    return Observable.of(LEADERS).delay(2000).toPromise();
  }

  getFeaturedLeader():Promise<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000).toPromise();
  }

}
