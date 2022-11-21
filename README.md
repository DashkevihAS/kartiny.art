# kartiny.art

Дана голая верстка без интерактива. 

Вы имеете право изменять проект так, как вам нужно для достижения цели - добавлять необходимые id,
классы, стили, анимации, подключать дополнительные стили (например animate.css)...

Но так же есть несколько условий:
JavaScript код должен быть нативным, без использования библиотек, фреймворков или плагинов (напр. JQuery)
В консоли должны отсутствовать любые ошибки
Названия всех переменных/классов не должны содержать кириллицу или транслит. Никаких peremennaya
Итоговый вариант должен быть построен на любой модульной структуре. В будущем планируем расширяться.
Работоспособность во всех современных браузерах (Chrome, Firefox, Opera, IE11, Edge, Safari)
Анимации очень приветствуются, но также остаются на усмотрение (установленные классы от animate.css можете менять как вам угодно)

Реализовать:
- слайдеры
- показ модальных окон и закрытие
- Внутри всех модальных окон есть форма. Она должна отправляться 
  посредством ajax(без перезагрузки страницы) и захватывать все введенные данные. 
  Также необходимо оповестить пользователя о состоянии отправки (идет отправка, отправлено, ошибка). 
  В последних двух состояниях необходимо заменить сам контент модального окна на оповещение.
  Необходима маска или валидация номера телефона (нужное кол-во чисел, код страны).
  Заполнение имени и комментария - только на русском языке.
- Реализация калькулятора:
  Обязательны к выбору - первые 2 селекта. Только когда они выбраны - показывается стоимость. 
  Если выбран 1 обязательный и “Дополнительные услуги” - общая сумма не выводится. 
  Также логика должна сохраняться при изменении выбора.
  Если в поле “Промокод” введен IWANTPOPART  (из подарочной модалки), то общая сумма уменьшается на 30%.
- Реализация фильтрации элементов.

