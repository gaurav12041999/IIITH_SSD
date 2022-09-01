DELIMITER && 
CREATE PROCEDURE Selectcustomers (IN city nvarchar(35))
BEGIN
SELECT CUST_NAME FROM customer WHERE WORKING_AREA = city; 
END &&
DELIMITER ;
CALL selectcustomers("Bangalore");
DELIMITER &&

