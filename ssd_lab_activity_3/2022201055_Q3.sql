SELECT 	D.Mgr_ssn, COUNT(W.Pno) AS Number_of_projects FROM PROJECT AS P, DEPARTMENT AS D, WORKS_ON AS W WHERE (P.Pname='ProductY') AND (P.Dnum=D.Dnumber) AND (D.Mgr_ssn=W.Essn);
