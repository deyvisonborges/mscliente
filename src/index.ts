require('dotenv').config();

import Keys from './config/Keys';
import ApplicationListener from './config/Server';

ApplicationListener.listen(Keys.port);