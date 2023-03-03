import {Model, Q, Query} from '@nozbe/watermelondb';
import {children, field, lazy} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import {database} from 'db';
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

  @field('created_at') createdAt!: number;

  /** TODO
   * implement @lazy workoutExercises
   * Implement
   */
}

export async function createWorkoutFromTemplate(template: Template) {
  // TODO

  await database.write(async () => {
    // Create workout

    const workout = database.get<Workout>('workouts').prepareCreate();

    // Create workout exercises
    const templateExercises = await template.exercises.fetch();

    const workoutExercises = [];

    for (const [i, templateExercise] of templateExercises.entries()) {
      workoutExercises.push(
        database
          .get<WorkoutExercise>('workout_exercises')
          .prepareCreate(workoutExercise => {
            workoutExercise.position = i;
            workoutExercise.exercise.set(templateExercise);
            workoutExercise.workout.set(workout);
          }),
      );
    }

    // debugger;

    await database.batch(workout, ...workoutExercises);
  });
}
