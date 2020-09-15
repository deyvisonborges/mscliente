require('dotenv').config();

import { SqliteConnect } from './config/database/ClientSQLite';
import Keys from './config/Keys';
import ApplicationListener from './config/Server';

ApplicationListener.listen(Keys.port, async () => {
  await SqliteConnect();
});
