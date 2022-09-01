DELIMITER $$
CREATE PROCEDURE `Sum`(IN `num1` INT,IN `num2` INT,OUT `result` INT)
BEGIN
set result = num1 + num2;
END$$
