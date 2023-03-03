import {Model, Q, Query} from '@nozbe/watermelondb';
import {children, field, lazy} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import {Template} from './Template.model';
import {WorkoutExercise} from './WorkoutExercise.model';

export class Workout extends Model {
  static table = 'workouts';

  static associations: Associations = {
    workout_exercises: {type: 'has_many', foreignKey: 'workout_id'},
  };

  @children('workout_exercises') workoutExercises!: Query<WorkoutExercise>;

  @lazy orderedWorkoutExercises = this.workoutExercises.extend(
    Q.sortBy('position', Q.asc),
  );

  @lazy orderedExercises = this.collections
    .get('exercises')
    .query(Q.on('workout_exercises', 'workout_id', this.id));

  @field('created_at') createdAt!: number;

  /** TODO
   * implement @lazy workoutExercises
   * Implement
   */
}

export async function createWorkoutFromTemplate(template: Template) {
  // TODO
}
