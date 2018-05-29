theory 0 calorie
====

Overview
カロリーは全て0に帰着します。"カロリー0理論"によって、それは証明されています。

## Description
痩せたい人のためにカロリーを表示するアプリケーションを作りました。

## Usage
```$xslt
let calorie=100
let Sweets = new Food(calorie)  
Sweets.Temperature=120
let [real_calorie,reason]=Sweets.calorie
console.log(real_calorie,reason)
  
let donut = new Donut(calorie)
let [real_calorie,reason]=donut.calorie
  
let icecream = new Icecream(calorie)
let [real_calorie,reason]=icecream.calorie
```

## Install
```$xslt
<script type="text/javascript" src="https://cdn.rawgit.com/takashiAg/calc_calorie/c1706a8c/index.js"></script>
```

## Licence
MIT

## Author

[ryosuke ando](https://github.com/takashiAg/)
