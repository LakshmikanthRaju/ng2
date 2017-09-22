import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

//import { Http, Response } from '@angular/http';
//import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/delay';
//import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

import { Dish } from '../shared/dish';
//import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    //return Observable.of(DISHES).delay(2000);
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured:true}).map(dishes => dishes[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
    .map(dishes => { return dishes.map(dish => dish.id); });
    //.catch(error => { return error; });
  }
  
}
