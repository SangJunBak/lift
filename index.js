import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {setupDb} from 'src/utils/setupDb';

import {database} from 'db';

AppRegistry.registerComponent(appName, () => App);

async function init() {
  await setupDb(database);
}

init().catch(err => console.log(err));
