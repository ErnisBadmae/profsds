## Работа с монорепозиторием

### Начало работы

После клонирования репозитория запустите следующую команду из корня проекта:

```
npm install
```

### Установка пакета для конкретного воркспейса

Чтобы установить пакет для использования в конкретном воркспейсе используйте команду

```
npm i $DEPENDENCY_NAME$ -w
где:
- `$DEPENDENCY_NAME$` - название npm-пакета

Используемые пакеты в проекте:

       "@ant-design/icons": "^4.7.0",
    "@reduxjs/toolkit": "^1.8.1",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.0.1",
    "@testing-library/user-event": "^13.5.0",
    "antd": "^4.19.5",
    "axios": "^0.27.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-redux": "^7.2.8",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux-logger": "^3.0.6",
    "sass": "^1.50.0",
    "url": "^0.11.0",


Важно запускать эту команду, находясь в корне проекта.


## Разработка


Для запуска сервера разработки фронтэнда используйте из корня:

```

npm run start

```

```
