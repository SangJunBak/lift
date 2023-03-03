import {Model, Relation} from '@nozbe/watermelondb';
import {field, immutableRelation} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import {WorkoutExercise} from './WorkoutExercise.model';

export class Set extends Model {
  static table = 'sets';

  static associations: Associations = {
    workoutExercise: {type: 'belongs_to', key: 'workout_exercise_id'},
  };

  @field('weight') weight!: number;
  @field('reps') reps!: number;
  @field('position') position!: number;

  @immutableRelation('workout_exercises', 'workout_exercise_id')
  workoutExercise!: Relation<WorkoutExercise>;

  /** TODO
   * Implement updateReps and updateWeight
   *
   */
}
