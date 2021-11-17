# News-portal
- Для запуска frontend части используйте команду yarn/npm start.
- Для запуска backend части используйте команду yarn/npm start в корневой папке.
- Для совместного запуска используйте команду yar run dev.

Отчет о проекте News portal 

Проект News portal состоит из пяти страниц: 
•	Домашняя страница;
•	Приватная (Private page) доступная только авторизованным пользователям;
•	Блог  - для создание и чтение новостей;
•	Страница об одном пользователе (имя, электронный адрес, новости, которые добавил);
•	Информация об одной новости (можно читать новость и оставлять комментарий).
•	
В данном web приложении пользователь может зарегистрироваться, и после авторизации создавать новости, просмотреть приватные страницы. 
Для разработки данного web приложения были использованы следующие библиотеки:
	React  - для разработки пользовательского интерфейса;
	Tailwind – для верстки страниц;
	Mongo DB – для хранения данных;
	Mongoose   - для взаимодействия бэкенда с базой данных, а также построения архитектуру данных;
	CORS – для того, чтоб запустить проект на разных портах.

Структура backend части проекта:

Server – в данном файле сначала импортируется необходимые библиотеки express, cors, mongoose. Далее с помощью mongoose бэкенд подключается к базе данных. Строка подключения хранится в отдельном файле .env, для того, чтобы читать содержимое файла используетя dotenv. Далее импортируется необходимые роуты и указывается адресные строки. 
Запускается сервер с помощью метода server.listen.

	

Router – состоит из трех файлов: 
1.	Authroute - принимает post запросы по регистрации, для входа, авторизации, а также get запрос для получения информации об одном пользователе. 
2.	CommentRoute – принимает пост запрос для добавления комментариев.
3.	News – post запрос для созданий новостей, get запросы для получения всех новостей и одну новость по id.



Models – user, news, comment:

1.	User – с помощью библиотеки mongoose создается структура объекта. И указывается какие ключи будут и требования к значению. В объект пользователя добавляется объект новость, который создал пользователь. Через ref указывается откуда брать объект с новостью. В данной модели есть функции Userschema.pre – пароль пользователя захешируется и передается salt в числовом значении для обеспечения сектрености пароля. Вторая функция UserSchema.methods.authenticate – проверяет соответствует ли пароль который отправил клиент с паролем хранившимся в базе данных.
2.	News – структура объекта с новостью, содержит в себе title, description, а также пользователь который создал эту новость и массив с комментариями. 
3.	NewComment – структура состоит из контекста, пользователя и новости. 

Controllers – В контроллере обрабатывается запросы. 

1.	authController - состоит из следующих middlewares: Signup, Signin, 
isAuthenticate, GetUserInfo.

•	Signup – этап регистрации пользователя. Когда от клиента приходит запрос на регистрацию с помощью FindOne осуществляется проверка, есть ли пользователь с таким e-mail адресом. Если есть на клиент возвращается ошибка 400, иначе создается новый объект с пользователем согласно модели сохраняется с помощью метода mongoose save (). После чего клиенту отправляется ответ об успешном регистрации или об ошибке. 
•	Signin – обрабатывает пост запрос для входа пользователя. От клиента приходит пароль и электронный адрес. В данном middleware используется метод mongoose FindOne. В базу данных отправляется e-mail пользователя, если такой e-mail есть осуществляется проверка пароли с помощью метода созданного в модели. Далее если пользователь успешно прошел проверку создается токен, для этого используется jwt.sign объект. Токен состоит из id, секретного слова, которая хранится в файле .env, срок жизни токена 2 дня. 
•	isAuthenticate – обрабатывает запрос на аутентификацию пользователя. Для аутентификации от клиента приходит токен. Парвильность токена проверяется с помощью jwt.verify туда передается токен и секретное слово. Если токен есть на клиент возвращается объект за исключением пароля, иначе ошибка 401.
•	getUserInfo – обрабатывает get запрос и возвращает объект с найденным пользователем. Используется методы FindById и populate. FindById находит в базе пользователя с id, populate id ключа news заменяет на объект с одной новостью.

