# Задание на пагинацию

Склонируйте данный репозиторий для работы с практическим заданием

Суть задания заключается в формировании пагинации на странице со списками продуктов 
Пагинация - возможность формирования нескольких страниц с перечисляемыми элементами для лучшей
оптимизации работы веб-приложения. Пользователю будет дана возможность самостоятельно переключаться по страницам, нажимая на нумерованные элементы 
Реализуйте в рамках 1 страницы отображения ПЕРВЫХ 9 продуктов [0,1,2,...8]
Для второй страницы - [9,10,11,..17] 
Для третьей - (по аналогии)

Количество страниц можно определить выражением (длина массива / 9) округляя вверъ
В работе не предоплагается использовать роутинг, работайте с состоянием useState
Глобальная задача - отслайсить массив продуктов по диапазону индексов в зависимости от выбранной страницы 