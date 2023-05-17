import { Component } from '@angular/core';
import { MenuItem } from './menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizzaLab_2023';
  menuItems: MenuItem[] = [
    {
    Name: "Med Pizza",
    Category: "Pizzas",
    Price: 12.74,
    },
    {
    Name: "Lg Pizza",
    Category: "Pizzas",
    Price: 15.99,
    },
    {
    Name: "Cheese Bread",
    Category: "Breads", 
    Price: 7.99,
    },
    {
    Name: "Garlic Bread",
    Category: "Breads", 
    Price: 7.49,
    },
    {
    Name: "Chicken Wings",
    Category: "Sides",
    Price: 9.99,
    },
    {
    Name: "Buffalo Wings",
    Category: "Sides",
    Price: 9.99,
    },
    {
    Name: "Cinnamon Twists",
    Category: "Desserts",
    Price: 7.49,
    },
    {
    Name: "Cheesecake", 
    Category: "Desserts", 
    Price:4.49,
    },
    {
    Name: "Garden Salad",
    Category: "Salads",
    Price: 5.99,
    },
    {
    Name: "Chicken Ceasar Salad",
    Category: "Salads",
    Price: 7.49,
    },
    {
    Name: "2-Liter Cola",
    Category: "Drinks",
    Price: 3.19,
    },
    {
    Name: "2-Liter Citrus",
    Category: "Drinks",
    Price: 3.19,
    },
    {
    Name: "2-Liter Diet Cola",
    Category: "Drinks",
    Price: 3.19,
    }
  ];
}
