import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {schema} from 'src/model/schema';
import {Exercise} from 'src/model/Exercise.model';
import {Database} from '@nozbe/watermelondb';

import {Set} from 'src/model/Set.model';
import {WorkoutExercise} from 'src/model/WorkoutExercise.model';
import {Workout} from 'src/model/Workout.model';

import {Template} from 'src/model/Template.model';
import {TemplateExercise} from 'src/model/TemplateExercise.model';

/** Watermelon DB Setup */

export const modelClasses = [
  Exercise,
  Set,
  WorkoutExercise,
  Workout,
  Template,
  TemplateExercise,
];

const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  // migrations,
  // (optional database name or file system path)
  dbName: 'lift-db',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: false /* Platform.OS === 'ios' */,
  // (optional, but you should implement this method)
  // onSetUpError: error => {
  //   // Database failed to load -- offer the user to reload the app or log out
  // },
});

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses,
});
