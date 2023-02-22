import {schema} from 'src/model/schema';

import {modelClasses} from 'db';

import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import {Database} from '@nozbe/watermelondb';
import logger from '@nozbe/watermelondb/utils/common/logger';

export const mockDatabase = () => {
  const adapter = new LokiJSAdapter({
    dbName: 'test',
    schema,
    // migrations,
    useWebWorker: false,
    useIncrementalIndexedDB: true,
  });

  logger.silence();
  return new Database({
    adapter,
    modelClasses,
  });
};
