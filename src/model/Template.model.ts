import {Model, Q} from '@nozbe/watermelondb';
import {field, lazy} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import {Exercise} from './Exercise.model';

export class Template extends Model {
  static table = 'templates';

  static associations: Associations = {
    template_exercises: {type: 'has_many', foreignKey: 'template_id'},
  };

  @field('name') name!: string;

  @lazy
  exercises = this.collections
    .get<Exercise>('exercises')
    .query(Q.on('template_exercises', 'template_id', this.id));
}
