CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
  	devoured BOOLEAN default 0,
    createdAt timestamp not null,
    primary key(id)
);
