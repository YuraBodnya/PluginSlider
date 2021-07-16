# Slider v1.0

Плагин позволяет создавать slider

## Быстрый старт

### Установка

Загрузите таблицу стилей и JS

#### HTML

Подключите стили :

```html
<link rel="stylesheet" href="css/style.css" />
```

Поместите скрипты в нижнюю часть: 

```html
<script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/script.js"></script>
    <script>
      $(function(){
        $('.wrapper').pluginSlider({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoLoop: 'on',
          btnColor: 'black'
        });
      })
    </script>
```

### Использование
Добавьте в HTML структуру

``` html
<div class="wrapper">
    <div class="slider-container">
      <div class="slider-track">
        <div class="slider-item">You Item 1</div>
      </div>
    </div>
    <div class="slider-buttons">
      <button class="btn-prev">Prev</button>
      <button class="btn-next">Next</button>
    </div>
  </div>
```
