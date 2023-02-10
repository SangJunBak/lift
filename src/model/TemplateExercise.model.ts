import {Model} from '@nozbe/watermelondb';
import {immutableRelation} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';

export class TemplateExercise extends Model {
  static table = 'template_exercises';
  static associations: Associations = {
    templates: {type: 'belongs_to', key: 'template_id'},
    exercises: {type: 'belongs_to', key: 'exercise_id'},
  };
  @immutableRelation('templates', 'template_id') template!: string;
  @immutableRelation('exercises', 'exercise_id') exercise!: string;
}
