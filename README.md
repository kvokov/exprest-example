# ExpREST example

Example project for demonstration [ExpREST](https://github.com/kvokov/exprest) power. 

Application based on [Skeleton for Node.js web applications](https://github.com/kvokov/node-web-starter).

## Getting Started

- Clone repository and install dependencies (also `knex` should be installed globally)
    ```bash
    $ git clone https://github.com/kvokov/exprest-example
    $ cd exprest-example/
    $ npm install && npm install knex -g
    ```

- Update `knexfile.js` with your database connection
    > This example used MySQL but you are free to replace it with PostgreSQL, SQLite3, Oracle or some else DBMS supported by [Bookshelf.js](http://bookshelfjs.org/). Just install needed database driver npm package and update `knexfile.js` config.

- Apply migrations
    ```bash
    $ knex migrate:latest
    ```

- Run application
    ```bash
    $ npm start
    ```

## API Endpoints

| Method | URL          | Action                  |
| :----- | :------------| :-----------------------|
| GET    | `/users`     | Get list of users       |
| GET    | `/users/:id` | Get a user by id        |
| POST   | `/users`     | Create a new user       |
| PUT    | `/users/:id` | Update an existing user |
| DELETE | `/users/:id` | Delete an existing user |
||||
| GET    | `/roles`     | Get list of roles       |
| GET    | `/roles/:id` | Get a role by id        |
| POST   | `/roles`     | Create a new role       |
| PUT    | `/roles/:id` | Update an existing role |
| DELETE | `/roles/:id` | Delete an existing role |

## Documentation 

You can find ExpREST documentation [here](https://github.com/kvokov/exprest#documentation).

**That's it!** :sunglasses:
