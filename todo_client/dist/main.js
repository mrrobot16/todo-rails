"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
require('rxjs/Rx');
var core_1 = require('@angular/core');
var _1 = require('./app/');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.TodoClientAppComponent);
//# sourceMappingURL=main.js.map