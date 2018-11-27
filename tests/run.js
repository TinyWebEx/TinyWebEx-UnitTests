import "https://unpkg.com/mocha@5.2.0/mocha.js"; /* globals mocha */

/* tests */
import "./dataTest/globalConsts.test.js";
import "./dataTest/messageLevel.test.js";
import "../modules/RandomTips/tests/dataTest/tips.test.js";
import "./dataTest/defaultSettings.test.js";

import "../modules/AddonSettings/tests/addonSettings.test.js";
import "../modules/AutomaticSettings/tests/automaticSettings.test.js";
import "../modules/Logger/tests/logger.test.js";
import "../modules/MessageHandler/tests/messageHandler.test.js";
import "../modules/RandomTips/tests/randomTips.test.js";

mocha.checkLeaks();
mocha.run();
