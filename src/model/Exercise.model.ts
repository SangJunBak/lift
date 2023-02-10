import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';

export class Exercise extends Model {
  static table = 'exercises';

  static associations: Associations = {
    templates: {type: 'has_many', foreignKey: 'exercise_id'},
  };

  @field('name') name!: string;
}
