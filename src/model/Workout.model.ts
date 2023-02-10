import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';

export class Workout extends Model {
  static table = 'workouts';

  static associations: Associations = {
    workout_exercises: {type: 'has_many', foreignKey: 'workout_id'},
  };

  @field('created_at') createdAt!: number;

  /** TODO
   * implement @lazy workoutExercises
   */
}
