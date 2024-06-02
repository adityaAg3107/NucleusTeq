## Quizzy - An Interactive Quiz Application 
Quizzy is quiz game where users can answer questions based on various categories and difficulties. The game will display questions one by one where the user will select one of the given questions and get to know if the chosen option was correct or not. In the end the user will get the score with a remark on his performance.

### Technologie Used:
#### Fronted - HTML, CSS, JavaScript
#### Backend - Java 17, Springboot 6
#### Database - MySql 5.7.8

### Diagrams:
#### Entity Relationship Diagram:
 
![ER](https://github.com/adityaAg3107/NucleusTeq/assets/120568867/42b93833-cedd-44ad-a4ea-c4b237aa16ab)


#### Use Case Diagram:         
 
![UseCaseDiagram](https://github.com/adityaAg3107/NucleusTeq/assets/120568867/10b5a6d7-d3a7-49cf-99d3-ccb13ab66aa1)

### Project Screenshots:
#### Home Page:
![Screenshot (1025)](https://github.com/adityaAg3107/NucleusTeq/assets/120568867/6d68b99b-16bc-4a20-9ccb-042f47172d27)
#### Question Page:
![Screenshot (1026)](https://github.com/adityaAg3107/NucleusTeq/assets/120568867/1a98d7bd-92d6-4f1e-b764-78fe1d641a95)
#### Result Page:

![Screenshot (1027)](https://github.com/adityaAg3107/NucleusTeq/assets/120568867/b9f7d30d-514d-4419-9302-e5de9bd5ad15)
### Frontend Installation:

Step 1: Install live server extension in Vs Code.

Step 2: Open the project folder in Vs Code

Step 3: Open index.html.

Step 4: Click on Go Live button present on bottom right side.

Step 5: Now the frontend will start running on live server.

### Starting the server:
Step 1: Open the backend folder inside IntelliJ Idea

Step 2: Load the maven dependencies.

Step 3: Run "QuizzyApplication.java" file.


### Sample Queries to insert data:

#### Category:
INSERT INTO `category` (`name`) VALUES
('General Knowledge');

#### Questions:
INSERT INTO `question` (`category_id`, `type`, `difficulty`, `question`, `correct_answer`, `options`) VALUES
(1, 'multiple', 'easy', 'What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?', 'Swiss Air', json_array('Swiss Air', 'Air France', 'British Airways', 'TWA'));


 
