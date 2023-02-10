import {Model, Q} from '@nozbe/watermelondb';
import {field, lazy} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';

export class Template extends Model {
  static table = 'templates';

  static associations: Associations = {
    templates: {type: 'has_many', foreignKey: 'template_id'},
  };

  @field('name') name!: string;

  @lazy
  exercises = this.collections
    .get('exercises')
    .query(Q.on('template_exercises', 'exercise_id', this.id));
}
