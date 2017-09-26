import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Observable } from 'rxjs/Observable';

import { Feedback } from '../shared/feedback';

@Injectable()
export class FeedbackService {

  constructor(private http:Http,
    private processHTTPMsgService:ProcessHTTPMsgService) { }

  submitFeedback(feedback:Feedback):Observable<Feedback> {
    return this.http.post(baseURL + 'feedback', feedback)
      .map(response => { return this.processHTTPMsgService.extractData(response); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); })
      .delay(1000);
  }

}
