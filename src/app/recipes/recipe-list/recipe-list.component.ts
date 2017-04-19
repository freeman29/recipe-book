import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe(
			'Pork Humba', 
			'Humba (HOOM-BAA) is a Filipino dish similar to adobo.', 
			'http://i0.wp.com/russianfilipinokitchen.files.wordpress.com/2014/07/dsc_0628.jpg?ssl=1'
		),
		new Recipe(
			'Bicol Express', 
			'Pork cooked in coconut milk with shrimp paste and chilies.', 
			'http://homekitchenomics.com/wp-content/uploads/2014/03/bicol_express_recipe.jpg'
		),
		new Recipe(
			'Dinengdeng', 
			'Vegetable dish that originated from the Ilocos region in the Philippines.', 
			'https://s-media-cache-ak0.pinimg.com/736x/fa/95/3b/fa953b2c54d80525d04c47c54610b992.jpg'
		)
	];
	
  constructor() { }

  ngOnInit() {
  }

}
