import Checkit from 'checkit';
import db from './_db';
import BaseModel from './_base-model';


class Role extends BaseModel {
    get tableName() {
        return 'roles';
    }
    
    users() {
        return this.hasMany('User', 'role_id');
    }

    validations = new Checkit({
        name: ['required', 'string']
    });
}


export default db.model('Role', Role);