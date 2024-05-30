# HomeWork8
# HomeWork8

Привет, проверяющий! Хорошего тебе настроения <3

API Ручки для управления пользователями

Описание:

Данный API предоставляет набор ручек для работы с информацией о пользователях, хранящейся в памяти.

1. Получение списка всех пользователей

Тип запроса: GET

Путь: `/users`

Параметры пути: Отсутствуют

Тело запроса: Отсутствует

Тело ответа: Массив объектов пользователей.

Пример запроса: GET http://localhost:3000/users

Пример ответа:
json
[
  {
    "id": 1,
    "name": "Валерия Сергеевна",
    "email": "lera72tymen@gmail.com",
    "age": 25
  },
  {
    "id": 2,
    "name": "Алексей Романович",
    "email": "alex25@gmail.com",
    "age": 27
  }
]
_______________________________________________
2. Получение информации о пользователе по ID

Тип запроса: GET

Путь: `/users/:id`

Параметры пути:

id: ID пользователя (целое число).

Тело запроса: Отсутствует

Тело ответа: Объект пользователя

Пример запроса: GET http://localhost:3000/users/1

Пример ответа:

json
  {
    "id": 1,
    "name": "Валерия Сергеевна",
    "email": "lera72tymen@gmail.com",
    "age": 25
  }

Ошибка 404: Возвращается, если пользователь с указанным ID не найден.
_____________________________________________________________________
3. Создание нового пользователя

Тип запроса: POST

Путь:`/users`

Параметры пути: Отсутствуют

Тело запроса:

json
{
  "name": "Имя пользователя",
  "email": "email@gmail.com",
  "age": 25
}

Тело ответа:  Объект созданного пользователя.

Пример запроса:
POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "Валерия Сергеевна",
  "email": "lera72tymen@gmail.com",
  "age": 25
}

Пример ответа:

json
{
  "id": 3,
  "name": "Валерия Сергеевна",
  "email": "lera72tymen@gmail.com",
  "age": 25
}


Ошибка 400: Возвращается, если в теле запроса отсутствуют обязательные поля (`name`, `email`, `age`).
______________________________________________________________________________________________________

4. Обновление информации о пользователе по ID

Тип запроса: PUT

Путь: `/users/:id`

Параметры пути:

id: ID пользователя (целое число).

Тело запроса:

json
{
  "name": "Новое имя",
  "email": "новый_email@example.com",
  "age": 35
}

Тело ответа:  Объект обновленного пользователя.

Пример запроса:
PUT http://localhost:3000/users/1
Content-Type: application/json

{
  "name": "Валерия Сергеевна",
  "email": "lera72tymen@gmail.com",
  "age": 25
}

Пример ответа:
json
{
  "id": 1,
  "name": "Валерия Сергеевна",
  "email": "lera72tymen@gmail.com",
  "age": 25
}


Ошибка 404: Возвращается, если пользователь с указанным ID не найден.
Ошибка 400: Возвращается, если в теле запроса отсутствуют обязательные поля (`name`, `email`, `age`).
______________________________________________________________________________________________________
5. Удаление пользователя по ID

Тип запроса:DELETE

Путь:`/users/:id`

Параметры пути:

id:ID пользователя (целое число).

Тело запроса: Отсутствует

Тело ответа: Пустой ответ (status 204).

Пример запроса:
DELETE http://localhost:3000/users/1

Ошибка 404: Возвращается, если пользователь с указанным ID не найден.
______________________________________________________________________________________________________

6. Получение списка пользователей старше заданного возраста

Тип запроса: GET

Путь:`/users/age/:age`

Параметры пути:

age: Минимальный возраст (целое число).

Тело запроса: Отсутствует

Тело ответа: Массив объектов пользователей, возраст которых больше заданного.

Пример запроса:
GET http://localhost:3000/users/age/25

Пример ответа:

json
[
  {
    "id": 1,
    "name": "Валерия Сергеевна",
    "email": "lera72tymen@gmail.com",
    "age": 25
  }
]
______________________________________________________________________________________________________
7. Получение списка пользователей с определенным доменом в email

Тип запроса: GET

Путь: `/users/domain/:domain`

Параметры пути:

domain: Домен (строка).

Тело запроса: Отсутствует

Тело ответа:  Массив объектов пользователей, у которых в email указан заданный домен.

Пример запроса:
GET http://localhost:3000/users/domain/gmail.com

Пример ответа:
json
[
  {
    "id": 1,
    "name": "Валерия Сергеевна",
    "email": "lera72tymen@gmail.com",
    "age": 25
  },
  {
    "id": 2,
    "name": "Алексей Романович",
    "email": "alex25@gmail.com",
    "age": 27
  }
]
______________________________________________________________________________________________________
8. Получение отсортированного списка пользователей по имени

Тип запроса: GET

Путь:`/users/sorted`

Параметры пути: Отсутствуют

Тело запроса: Отсутствует

Тело ответа: Массив объектов пользователей, отсортированных по имени в алфавитном порядке.

Пример запроса:
GET http://localhost:3000/users/sorted

Пример ответа:

json
[
  {
    "id": 2,
    "name": "Алексей Романович",
    "email": "alex25gmail.com",
    "age": 27
  },
  {
    "id": 1,
    "name": "Валерия Сергеевна",
    "email": "lera72tymen@gmail.com",
    "age": 25
  }
]
