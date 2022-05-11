1. На локальном репозитории сделать ветки для:
- Postman - git branch Postman
- Jmeter - git branch Jmeter
- CheckLists - git branch Checklists
- Bug Reports - git branch Bug_Reports
- SQL - git branch SQL
- Charles - git branch Charles
- Mobile testing - git branch Mobile_Testing

2. Запушить все ветки на внешний репозиторий
git push -u origin Postman
git push -u origin Jmeter
git push -u origin Checklists
git push -u origin Bug_Reports
git push -u origin SQL
git push -u origin Charles
git push -u origin Mobile_Testing

3. В ветке Bug_Reports сделать текстовый документ со структурой баг репорта
git checkout Bug_Reports
touch BugReport.txt
vim BugReport.txt
I
№	name    	        description
1 	ID                  	Уникальный идентификационный номер
2 	Summary 	    	Что? Где? И когда?
3 	STR 	            	Шаги воспроизведения
4 	Actual Result 	    	Фактический результат
5 	Expected Result  	Ожидаемый результат
6 	Environment 	    	Окружение 
7 	Project 	    	Название проекта
8 	Module 	            	Компонент/модуль/юнит, в котором обнаружен дефект
9 	Build 	            	Версия сборки
10 	Severity            	Критичность/серьезность бага 
11 	Priority 	    	Приоритет бага
12 	Status 	            	Статус бага в жизненном цикле бага
13 	Author 	            	Тот, кто нашёл баг, автор
14 	Assigned to 	    	Назначение
15 	Attachments 	    	Скриншоты, видео и пр.
ESC,  :wq,  ENTER

4. Запушить структуру багрепорта на внешний репозиторий
git status
git add BugReport.txt
git commit -m "Adding new file BugReport.txt"
git push

5. Вмержить ветку Bug Reports в Main
git checkout main
git merge Bug_Reports

6. Запушить main на внешний репозиторий.
git push

7. В ветке CheckLists набросать структуру чек листа.
git checkout Checklists
touch checklist.txt
vim checklist.txt
I
№    name 	           
 1     Название проверки 	   
 2     Результат 	   
 3     Комментарии 	  
 ESC,  :wq,  ENTER
 
 8. Запушить структуру на внешний репозиторий
git add checklist.txt
git commit -m "Adding new file checklist.txt"
git push   

9. На внешнем репозитории сделать Pull Request ветки CheckLists в main
Зайти на сайт github
Нажать на репозиторий Group_29
Нажать на кнопку "Confirm merge"
В текстовом поле заголовка написать Adding new file checklist.txt from Checklists branch
Нажать на кнопку Create pull request
Убеждаемся, что нет конфликтов и есть надпись-This branch has no conflicts with the base branch
Нажать на кнопку Merge pull request
Нажать на кнопку Confirm merge
После успешного слияния веток должна появиться запись-Pull request successfully merged and closed

10. Синхронизировать Внешнюю и Локальную ветки Main
git checkout main
git pull
     