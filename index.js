import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import {schema} from './src/model/schema';
import {Exercise} from './src/model/Exercise.model';
import {Set} from './src/model/Set.model';
import {WorkoutExercise} from './src/model/WorkoutExercise.model';
import {Workout} from './src/model/Workout.model';

import {Template} from './src/model/Template.model';
import {TemplateExercise} from './src/model/TemplateExercise.model';

import {initExercises} from './src/utils/initExercises';

AppRegistry.registerComponent(appName, () => App);

/** Watermelon DB Setup */

// import Post from './model/Post' // ⬅️ You'll import your Models here

// First, create the adapter to the underlying database:
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
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  },
});

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [
    Exercise,
    Set,
    WorkoutExercise,
    Workout,
    Template,
    TemplateExercise,
  ],
});

/**
 * Initialize database with exercises
 */

async function init() {
  await initExercises(database);

  const allExercises = await database.get('exercises').query().fetch();
  console.log(allExercises);
}

init().catch(err => console.log(err));
