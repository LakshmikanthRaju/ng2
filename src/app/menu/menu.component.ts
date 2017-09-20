import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { flyInOut, expand } from '../animations/app.animation';
//import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  selectedDish:Dish;
  errMsg: string;

  constructor(
    private dishService:DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe(
      dishes => this.dishes = dishes,
      errmsg => this.errMsg = errmsg);
  }

  onSelect(dish:Dish) {
    this.selectedDish = dish;
  }

}
