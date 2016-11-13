import _ from 'lodash';
import moment from 'moment';
import db from './_db';


class BaseModel extends db.Model {
    toJSON() {
        let json = super.toJSON();

        // remove hidden
        json = _.omit.apply(_, [json].concat(this.hidden));


        // date fields format
        if (_.has(json, 'created_at') && json.created_at) {
            json.created_at = moment(this.get('created_at')).format('YYYY-MM-DD HH:mm:ss');
        }
        if (_.has(json, 'updated_at') && json.updated_at) {
            json.updated_at = moment(this.get('updated_at')).format('YYYY-MM-DD HH:mm:ss');
        }

        return json;
    }
}


export default BaseModel;