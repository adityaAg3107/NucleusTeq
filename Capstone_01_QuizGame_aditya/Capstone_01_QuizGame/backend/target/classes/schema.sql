CREATE DATABASE IF NOT EXISTS `quiz_db_aditya`;

USE `quiz_db_aditya`;

CREATE TABLE IF NOT EXISTS `category` (
    `category_id`   INT AUTO_INCREMENT PRIMARY KEY,
    `name`          VARCHAR(100)    NOT NULL
);

CREATE TABLE IF NOT EXISTS `question` (
    `question_id`   	INT AUTO_INCREMENT PRIMARY KEY,
    `category_id`   	INT     		NOT NULL,
    `type`				VARCHAR(20)		NOT NULL,
    `difficulty`		VARCHAR(10)		NOT NULL,
    `question`			VARCHAR(500) 	NOT NULL,
    `correct_answer`	VARCHAR(200)	NOT NULL,
    `options`			JSON			NOT NULL,
    
    FOREIGN KEY(`category_id`) REFERENCES `category` (`category_id`)
);


