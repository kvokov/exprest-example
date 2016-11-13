import Checkit from 'checkit';
import db from './_db';
import BaseModel from './_base-model';


class User extends BaseModel {
    get tableName() {
        return 'users';
    }

    hidden = ['password'];

    role() {
        return this.belongsTo('Role', 'role_id');
    }

    validations = new Checkit({
        email       : ['email', 'required'],
        password    : ['required', 'string'],
        first_name  : ['required', 'string'],
        last_name   : ['required', 'string'],
        role_id     : ['integer', 'required'],
    });
}


export default db.model('User', User);