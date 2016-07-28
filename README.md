# Pikmedia
**Демо** [frontende.info/pikmedia](http://frontende.info/pikmedia)

## Описание
* Сборщик [Gulp](http://gulpjs.com/)
* Шаблонизатор [Jade](https://www.npmjs.com/package/gulp-jade)
* Препроцессор [Stylus](https://www.npmjs.com/package/gulp-stylus) ([карты кода](https://www.npmjs.com/package/gulp-sourcemaps), [rupture для media queries](http://jescalan.github.io/rupture/), [jeet сетка](http://jeet.gs/))
* [Сервер](https://www.npmjs.com/package/gulp-connect) с livereload
* CSS: добавление [вендорных префиксов](https://www.npmjs.com/package/autoprefixer-stylus), форматирование [csscomb](https://www.npmjs.com/package/gulp-csscomb), минификация [csso](https://www.npmjs.com/package/gulp-csso)
* HTML: форматирование [html-prettify](https://www.npmjs.com/package/gulp-html-prettify), сортировка атрибутов [AttrsSorter](https://www.npmjs.com/package/posthtml-attrs-sorter)
* JS: [импорт из модулей](https://www.npmjs.com/package/gulp-include), конкатенация, [минификация](https://www.npmjs.com/package/gulp-uglify)
* Перехват и вывод ошибок без остановки gulp с помощью [plumber](https://www.npmjs.com/package/gulp-plumber)
* Упаковка скомпилированных файлов в zip архив

## Быстрый старт

* Установить [node.js](https://nodejs.org)
* Зайти в папку с установленной nodejs и обновить npm до последней версии

	```bash
	cd "C:\Program Files\nodejs"
	```

	или

	```bash
	cd "C:\Program Files (x86)\nodejs"
	```

	в зависимости от того где у вас установленна nodejs, и выполнить

	```bash
	npm install npm@latest
	```

* Склонировать проект либо [скачать архив](https://github.com/zoxon/gulp-front/archive/master.zip)

	```bash
	git clone git@github.com:zoxon/gulp-front.git my-project && cd my-project
	```

* Установить `gulp` глобально (один раз!)

	```bash
	npm i -g gulp
	```

* Установить зависимости (1 раз на проект)

	```bash
	npm i
	```

* Запустить `gulp`

	```bash
	gulp dev
	```

* В браузере откроется страница с проектом, по адрессу [`http://localhost:8080/`](http://localhost:8080/)

## Основные таски

* `gulp dev` - запускает вотчеры и сервер
* `gulp build` - собирает проект
* `gulp zip` - архивирует проект в zip архив
* `gulp cleanup` - удаляет временные и скомпилированные файлы

## Структура папок и файлов

```
frontend/                               # Корень проекта
├── dest                                # Скомилированные файлы
├── source                              # Исходные файлы
│   ├── modules                         # Модули
│   ├── pages                           # Страницы
│   └── static                          # Статичные файлы
│       ├── fonts                       # Шрифты
│       ├── images                      # Изображения
│       ├── js                          # JavaScript файлы
│       │   ├── plugins                 # Плагины (css+js)
│       │   ├── jquery.min              # jQuery
│       │   └── main.js                 # Точка сборки скриптов
│       └── styl                        # Статичные стили
│           ├── base                    # Базовые стили
│           │   ├── fonts.styl          # Подключение @font-face
│           │   ├── helper.styl         # Служебные классы
│           │   ├── layout.styl         # Стили для основной сетки
│           │   ├── mixins.styl         # Миксины
│           │   ├── reset.styl          # Сброс стилей
│           │   └── variables.styl      # Переменные проекта
│           ├── components              # Глобальные компоненты
│           └── app.styl                # Точка сборки styl файлов
├── tmp                                 # Временная папка
├── zip                                 # Папка с zip архивами
├── package.json                        # Зависимости для node.js
├── .csscomb.json                       # Конфиг для csscomb
├── gulpfile.js                         # Конфиг gulp.js
└── README.md                           # Файл который вы читаете
```

## Контакты
**Email**: mischuk.alexander@gmail.com

**Skype**: mischuk.alexander
