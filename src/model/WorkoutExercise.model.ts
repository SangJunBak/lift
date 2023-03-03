import {Model, Query, Relation} from '@nozbe/watermelondb';
import {
  children,
  field,
  immutableRelation,
  relation,
} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import {Exercise} from './Exercise.Model';
import {Set} from './Set.model';
import {Workout} from './Workout.model';

export class WorkoutExercise extends Model {
  static table = 'workout_exercises';

  static associations: Associations = {
    sets: {type: 'has_many', foreignKey: 'workout_exercise_id'},
    workout: {type: 'belongs_to', key: 'workout_id'},
  };

  @field('position') position!: number;

  @children('sets') sets!: Query<Set>;

  @relation('exercises', 'exercise_id') exercise!: Relation<Exercise>;
  @immutableRelation('workout', 'workout_id') workout!: Relation<Workout>;

  /** TODO
   * Implement getOrderedSets
   *
   */
}
