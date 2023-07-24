import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currencyValue: number = 10050.4521;
  percentValue: number = 0.52876;

  condition: boolean = true;
  toggle(){
    this.condition = !this.condition;
  }

  words: string[] = ['umbrella', 'snowman', 'comet', 'flower'];

  people: any[] = [
    {
      "name": "Diego",
      "age": 35,
      "country": 'Spain'
    },
    {
      "name": "Roberta",
      "age": 18,
      "country": 'Italy'
    },
    {
      "name": "Emma",
      "age": 27,
      "country": 'United States'
    },
    {
      "name": "Akira",
      "age": 43,
      "country": 'Japan'
    },
    {
      "name": "Olha",
      "age": 22,
      "country": 'Ukraine'
    },
    {
      "name": "Carla",
      "age": 31,
      "country": 'Spain'
    },
    {
      "name": "Emilia",
      "age": 56,
      "country": 'Italy'
    },
    {
      "name": "Tom",
      "age": 40,
      "country": 'United States'
    },
  ];

  carInfo: string = 'БелАЗ 75710 - це найбільший у світі самоскид, вантажопідйомність якого становить 450 тонн. Довжина самоскида становить 20,6 м, ширина – 9,75 м, висота – 8,17 м. Вага самоскида – 360 тонн.';
  planeInfo: string = 'Ан-225 «Мрія» (кодове ім\'я НАТО — «Козак» англ. Cossack) — надважкий транспортний літак, створений 1988 року в СРСР київським КБ імені Антонова. До 2022 року Ан-225 був найбільшим та найпотужнішим літаком у світі.';
  shipInfo: string = 'Harmony of the Seas (укр. Гармонія морів) — найбільший круїзний лайнер у світі. Вага судна — 120 тисяч тонн, висота — 70 метрів, ширина — 66 метрів, загальна довжина — 362 метри. Побудова судна коштувала 1 мільярд євро.';
}
