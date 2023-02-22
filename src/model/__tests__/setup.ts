import {schema} from '../schema';

import {modelClasses} from 'db';

import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import {Database} from '@nozbe/watermelondb';

export const mockDatabase = () => {
  const adapter = new LokiJSAdapter({
    dbName: 'test',
    schema,
    // migrations,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses,
  });
};
