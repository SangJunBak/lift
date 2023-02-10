import {Database} from '@nozbe/watermelondb';
import {Exercise} from '../../model/Exercise.model';
import * as exercisesJSON from './exercises.json';

function buildExercise({name}: {name: string}) {
  return (exercise: Exercise) => {
    exercise.name = name;
  };
}

export async function initExercises(database: Database) {
  const exerciseTable = database.get<Exercise>('exercises');

  // const exerciseCount = await exerciseTable.query().fetchCount();
  // if (exerciseCount > 0) {
  //   return;
  // }

  const preparedExercises = exercisesJSON.exercises.map(exerciseData =>
    exerciseTable.prepareCreate(exercise => {
      buildExercise(exerciseData)(exercise);
    }),
  );

  await database.write(async () => {
    await database.unsafeResetDatabase();
    await database.batch(...preparedExercises);
  });
}
