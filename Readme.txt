https://sergeychunkevich.com/animaciya-elementa-pri-skrollinge-kombinaciya-animate-css-wow-js/

КАК НАСТРОИТЬ?

ШАГ 1
Для начала нам нужно скачать эти два файла («WOW.js» и «Animate.css»)

ШАГ 2
Помещаем папку «wow-animation» в корневую папку сайта. Конечно, Вы можете поместить ее в любое место, главное, чтобы путь к файлам Вы указали правильный. Желательно все же поместить эту папку в корневую папку: index.html. Если это WordPress, то поместите папку куда хотите. (главное — указать правильный путь к ней).

ШАГ 3
Помещаем в <head></head> эту строку:

<link rel="stylesheet" type="text/css" href="wow-animation/animate.min.css">

* Естественно, указываем правильный путь к файлу. Если устанавливаете на WordPress, то рекомендую указывать полный путь, т.е. начиная с httpS://ВашДомен и т.д. Чтобы проверить, правильно ли Вы подключили файл — скопируйте URL, введите в адресную строку и нажмите «Enter». Если откроется файл с непонятным кодом, значит все ок ??

ШАГ 4
Помещаем в самый низ страницы перед </body> эти строки:

<script src="wow-animation/wow.min.js"></script>
<script>
    new WOW().init();
</script>

ШАГ 5
Добавляем два класса для любого элемента, где: 
класс wow — подключение элемента к скрипту;
класс fadeInRight — определенный стиль для анимации элемента.
Часто используют: fadeInRight (Left/Up/Down) и bounceInRight (Left/Up/Down)
Все стили Вы можете посмотреть здесь: Animate.css: Примеры анимаций - https://daneden.github.io/animate.css/

<div class="wow fadeInRight">
    Определенная информация
</div>

ШАГ 6
Продвинутые настройки. Добавляем функции:
data-wow-duration: Меняем продолжительность анимации;
data-wow-delay: Задержка перед началом анимации;
data-wow-offset: Расстояние до запуска анимации (относительно нижней части окна браузера);
data-wow-iteration: Повторяем анимацию «столько-то раз».

<div class="wow slideInLeft" data-wow-duration="3.5s" data-wow-delay="1s" data-wow-offset="120">
    Определенная информация
</div>

<!-- Вы можете использовать ЛЮБОЙ тег, как пример: -->

<h1 class="wow slideInLeft" data-wow-duration="3.5s" data-wow-delay="1s" data-wow-offset="120">
    Определенная информация
</h1>
