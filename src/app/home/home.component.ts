import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish:Dish;
  promotion:Promotion;
  leader:Leader;
  errMsg:string;
  errMsgLeader:string;
  errMsgPromo:string;

  constructor(private dishService:DishService,
    private promotionService:PromotionService,
    private leaderService:LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe(
      dish => this.dish = dish,
      errmsg => this.errMsg = errmsg);
    this.leaderService.getFeaturedLeader().subscribe(
      leader => this.leader = leader,
      errMsg => this.errMsgLeader = this.errMsg);
    this.promotionService.getFeaturedPromotion().subscribe(
      promotion => this.promotion = promotion,
      errmsg => this.errMsgPromo = errmsg);
  }
}
