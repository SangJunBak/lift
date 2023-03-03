import {Model, Relation} from '@nozbe/watermelondb';
import {immutableRelation} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import {Exercise} from './Exercise.model';
import {Template} from './Template.model';

export class TemplateExercise extends Model {
  static table = 'template_exercises';
  static associations: Associations = {
    templates: {type: 'belongs_to', key: 'template_id'},
    exercises: {type: 'belongs_to', key: 'exercise_id'},
  };
  @immutableRelation('templates', 'template_id') template!: Relation<Template>;
  @immutableRelation('exercises', 'exercise_id') exercise!: Relation<Exercise>;
}
