import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor() { }
  showTodayDate(){ 
    let ndate = new Date();
  return ndate;
  }
  serviceproperty = "Service Created"

  allProducts(){
    return[
      {
        id: "PROD1",
        produkto:"assets/coke.jfif",
        name: "Coke",
        description: "Cola is a carbonated soft drink flavored with vanilla, cinnamon, citrus oils and other flavorings. ... Most modern colas are made a dark color using caramel color, and are sweetened with sugar and/or high-fructose corn syrup. They now come in numerous different brands."
      },
      {
        id:"PROD2",
        produkto:"assets/sprite.jfif",
        name: "Sprite",
        description: "Sprite is a soft drink that has a lemon-lime flavor, a crisp clean taste, and is clear and caffeine free. ... Sprite was introduced into the United States of America in the year 1961 and was intended to be a competitor to the similar soft drink, 7 Up, the only major lemon-lime soda on the market at the time."
      },
      {
        id:"PROD3",
        produkto:"assets/mm.png",
        name: "Minute Maid",
        description: "Minute Maid is a product line of beverages that associates with lemonade, orange juice, or soft drinks of many kinds, including Hi-C. the products of the company are orange juices, lemonade and punch juices, light juice drinks, variety juices such as apples and berries, and kids juices and juice drinks."
      },
      {
        id:"PROD4",
        produkto:"assets/powerade.png",
        name: "Powerade",
        description: "Powerade is a sports beverage that replenishes electrolytes, carbohydrates and vitamins during physical activity. ... While Powerade is effective and replaces lost nutrients during exercise, it also contains high levels of sodium and sugar that are detrimental in excess."
      }
    ];
  }
}
