import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnizel',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6biyuILts1PyON4mpcCR7Foq7snwIY3DcTw&usqp=CAU',
      ingredients: ['Fries', 'Salad', 'Meat'],
    },
    {
      id: 'r2',
      title: 'Spagetti',
      imageUrl:
        'https://cdn.lifehacker.ru/wp-content/uploads/2020/01/shutterstock_1315335506-1_1589978896.jpg',
      ingredients: ['Oil', 'Spagetti', 'Meat'],
    },
    {
      id: 'r11',
      title: 'Schnizel',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6biyuILts1PyON4mpcCR7Foq7snwIY3DcTw&usqp=CAU',
      ingredients: ['Fries', 'Salad', 'Meat'],
    },
    {
      id: 'r21',
      title: 'Spagetti',
      imageUrl:
        'https://cdn.lifehacker.ru/wp-content/uploads/2020/01/shutterstock_1315335506-1_1589978896.jpg',
      ingredients: ['Oil', 'Spagetti', 'Meat'],
    },
  ];
  constructor() {}

  getAllRcipes() {
    return [...this.recipes];
  }

  getRcipe(id: string): Recipe {
    const result = this.recipes.find((el) => el.id === id);
    if (!result) {
      throw new Error('not Found');
    } else {
      return { ...result };
    }
  }

  deleteRecipe(id: string): Recipe[] {
    return this.recipes.filter((el) => el.id !== id);
  }
}
