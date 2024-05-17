USE htld;

CREATE TABLE Person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100)
);

INSERT INTO Person (firstname, lastname) VALUES ('Max', 'Mustermann');
INSERT INTO Person (firstname, lastname) VALUES ('Luca', 'Grabherr');
INSERT INTO Person (firstname, lastname) VALUES ('Maxi', 'Muxxl');



Select * from Person;