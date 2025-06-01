-- DATABASE test
-- usuarios -> tareas

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(250) NOT NULL
);

INSERT INTO usuarios(username, email, password) VALUES('luis','user@mail.com','123321');