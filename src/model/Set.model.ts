import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';

export class Set extends Model {
  static table = 'sets';

  static associations: Associations = {
    workoutExercise: {type: 'belongs_to', key: 'workout_exercise_id'},
  };

  @field('weight') weight!: number;
  @field('reps') reps!: number;
  @field('position') position!: number;

  /** TODO
   * Implement updateReps and updateWeight
   *
   */
}
