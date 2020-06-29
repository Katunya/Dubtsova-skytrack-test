# Dubtsova-skytrack-test

Спасибо за интересное задание!)
В данный момент: оптимизирую работу компонента HistoryPage, дорабатываю пагинацию, работа с redux-thunk 

ЗАДАЧА №2
Текстовое описание задания и требования. 
Необходимо создать React приложение с динамической загрузкой картинок и роутингом.
API получения картинок: 
https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY
Макета для задачи нет, внешнее оформление на Ваше усмотрение. 
Основное:
```
Приложение будет состоять из 2 страниц:
Главная — вывести изображение и кнопку «Загрузить», при нажатии на которую будет загружаться новое приложение. При первой загрузке приложения — изображение должно загрузиться без нажатия на кнопку;
История - выводить все загруженные картинки с главной страницы (картинка, время загрузки и название картинки). Добавить пагинацию и возможность удалить ранее загруженную картинку.
```
Стек:
* React;
* React-router (https://reacttraining.com/react-router/web);
* Redux (https://redux.js.org/);
Цель:
Полученные данные хранить в Redux.
Для всех асинхронных запросов желательно использовать Redux-Saga или Redux-Thunk
Предусмотреть обработку ошибок.
При создании приложения можно использовать create-react-app (https://github.com/facebook/create-react-app)
Результат выложите на github.

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm lint`

Launches the eslint runner and fix errors.<br>

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8181](http://localhost:8181) to view it in the browser.<br>

### `npm build-prod`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>

Your app is ready to be deployed!

### `npm build-dev`

Launches the app in the interactive watch mode.<br>
The page will reload if you make edits.

