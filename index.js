import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {setupDb} from 'src/utils/setupDb';

import {database} from 'db';

AppRegistry.registerComponent(appName, () => App);

/**
 * Initialize database with exercises
 */

async function init() {
  await setupDb(database);
  // await initExercises(database);

  // const allExercises = await database.get('exercises').query().fetch();
  // console.log(allExercises);
}

init().catch(err => console.log(err));
