import {Model, Relation} from '@nozbe/watermelondb';
import {field, relation} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import {Exercise} from './Exercise.Model';

export class WorkoutExercise extends Model {
  static table = 'workout_exercises';

  static associations: Associations = {
    sets: {type: 'has_many', foreignKey: 'workout_exercise_id'},
    workout: {type: 'belongs_to', key: 'workout_id'},
  };

  @field('weight') weight!: number;
  @field('reps') reps!: number;
  @field('position') position!: number;

  @relation('exercises', 'exercise_id') exercise!: Relation<Exercise>;

  /** TODO
   * Implement getOrderedSets
   *
   */
}
