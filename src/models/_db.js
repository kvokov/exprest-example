import Knex from 'knex';
import Bookshelf from 'bookshelf';
import config from '../config';


var knex = Knex(config.get('db'));
var bookshelf = Bookshelf(knex);
bookshelf.plugin(['registry']);


export default bookshelf;