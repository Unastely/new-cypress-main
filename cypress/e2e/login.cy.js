describe('Проверка авторизации', function () {

it ('Верный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки

    cy.get('#mail').type('german@dolnikov.ru'); // верный логин
    cy.get('#pass').type('iLoveqastudio1'); // верный пароль
    cy.get('#loginButton').click(); // нажать войти

    cy.wait(5000);

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // после авторизации виден текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кресткик и он виден пользователю

})


it ('Не верный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки

    cy.get('#mail').type('german@dolnikov.ru'); // верный логин
    cy.get('#pass').type('iLoveqastudio12'); // не верный пароль
    cy.get('#loginButton').click(); // нажать войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // после авторизации виден текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кресткик и он виден пользователю

})


it ('В логине нет @', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки

    cy.get('#mail').type('germandolnikov.ru'); // логин без @
    cy.get('#pass').type('iLoveqastudio1'); // не верный пароль
    cy.get('#loginButton').click(); // нажать войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // после авторизации виден текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кресткик и он виден пользователю

})


it ('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки

    cy.get('#forgotEmailButton').click(); // нажать восстановить пароль

    cy.get('#mailForgot').type('german@dolnikov.ru'); // ввести почту для восстановления
    cy.get('#restoreEmailButton').click(); // нажать отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // совпадение текста после отправки пароля на имейл
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кресткик и он виден пользователю

})

it ('Верный пароль и не верный логин', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки

    cy.get('#mail').type('ger@man.ru'); // не верный логин 
    cy.get('#pass').type('iLoveqastudio1'); // верный пароль
    cy.get('#loginButton').click(); // нажать войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // после авторизации виден текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кресткик и он виден пользователю

})


it ('Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки

    cy.get('#mail').type('GerMan@Dolnikov.ru'); // логин с капсом
    cy.get('#pass').type('iLoveqastudio1'); // верный пароль
    cy.get('#loginButton').click(); // нажать войти

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // после авторизации виден текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кресткик и он виден пользователю

})


})
