
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', function (table) {
            table.increments('id').primary();
            table.string('name').unique().notNull();
        })
        .then(function () {
            return knex.insert(
                [
                    {
                        //id: 1,
                        name: 'Admin'
                    },
                    {
                        //id: 2,
                        name: 'Manager'
                    },
                    {
                        //id: 3,
                        name: 'User'
                    }
                ], 'id').into('roles');
        });
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTable('roles');
};