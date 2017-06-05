"use strict";



define('notes/adapters/application', ['exports', 'ember-local-storage/adapters/local'], function (exports, _local) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _local.default;
    }
  });
});
define('notes/app', ['exports', 'ember', 'notes/resolver', 'ember-load-initializers', 'notes/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('notes/components/header-main', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({});
});
define('notes/components/note-card-add', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        actions: {
            newNote: function newNote() {
                this.set('isEdit', true);
            },
            isSaved: function isSaved() {
                this.set('isEdit', false);
            }
        }
    });
});
define('notes/components/note-card-done', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({});
});
define('notes/components/note-card-edit', ['exports', 'ember', 'ember-local-storage'], function (exports, _ember, _emberLocalStorage) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        notes: (0, _emberLocalStorage.storageFor)('notes'),

        actions: {
            saveNote: function saveNote(title, content) {
                this.get('notes').addObject({ title: title, content: content });
                this.get('saved')();
            }
        }
    });
});
define('notes/components/notes-container', ['exports', 'ember', 'ember-local-storage'], function (exports, _ember, _emberLocalStorage) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        notes: (0, _emberLocalStorage.storageFor)('notes'),

        didRender: function didRender() {
            window.componentHandler.upgradeDom();
        }
    });
});
define('notes/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('notes/helpers/app-version', ['exports', 'ember', 'notes/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('notes/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('notes/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('notes/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'notes/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('notes/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('notes/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('notes/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('notes/initializers/export-application-global', ['exports', 'ember', 'notes/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('notes/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('notes/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _localStorageAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _localStorageAdapter.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _localStorageAdapter.initialize;
    }
  });
});
define('notes/initializers/store', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('notes/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("notes/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('notes/models/note', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        title: _emberData.default.attr('string'),
        content: _emberData.default.attr('string')
    });
});
define('notes/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('notes/router', ['exports', 'ember', 'notes/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('notes');
  });

  exports.default = Router;
});
define('notes/routes/application', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend({
        model: function model() {
            var store = this.get('store');
            if (window.localStorage.getItem('notes') === null) {
                store.createRecord('note', {
                    title: 'Rails is Omakase',
                    content: 'Lorem ipsum'
                });
            }
        },

        setupController: function setupController(controller, model) {
            controller.set('model', model);
        }

    });
});
define('notes/serializers/application', ['exports', 'ember-local-storage/serializers/serializer'], function (exports, _serializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _serializer.default;
    }
  });
});
define('notes/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("notes/storages/notes", ["exports", "ember-local-storage/local/array"], function (exports, _array) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Storage = _array.default.extend();

  // Uncomment if you would like to set initialState
  Storage.reopenClass({
    initialState: function initialState() {
      return [{ title: "Welcome to Notes", content: "Hello!" }, { title: "Create", content: "note" }];
    }
  });

  exports.default = Storage;
});
define("notes/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cuieAgVb", "block": "{\"statements\":[[1,[26,[\"header-main\"]],false],[0,\"\\n\\n\"],[1,[26,[\"notes-container\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "notes/templates/application.hbs" } });
});
define("notes/templates/components/header-main", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dU406+6r", "block": "{\"statements\":[[0,\"  \"],[11,\"header\",[]],[15,\"class\",\"mdl-layout__header\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"mdl-layout__header-row\"],[13],[0,\"\\n      \"],[4,\" Title \"],[0,\"\\n      \"],[11,\"span\",[]],[15,\"class\",\"mdl-layout-title\"],[13],[0,\"Notes\"],[14],[0,\"\\n      \"],[4,\" Add spacer, to align navigation to the right \"],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"mdl-layout-spacer\"],[13],[14],[0,\"\\n      \"],[4,\" Navigation. We hide it in small screens. \"],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "notes/templates/components/header-main.hbs" } });
});
define("notes/templates/components/note-card-add", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "s65WMrxx", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"isEdit\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"note-card-edit\"],null,[[\"saved\"],[[33,[\"action\"],[[28,[null]],\"isSaved\"],null]]]],false],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[11,\"div\",[]],[15,\"class\",\"note-card mdl-card mdl-shadow--2dp\"],[5,[\"action\"],[[28,[null]],\"newNote\"]],[13],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\"],[13],[0,\"\\n         \"],[11,\"i\",[]],[15,\"class\",\"material-icons\"],[13],[0,\"add\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "notes/templates/components/note-card-add.hbs" } });
});
define("notes/templates/components/note-card-done", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lodJkuCU", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"note-card mdl-card mdl-shadow--2dp\"],[13],[0,\"\\n    \"],[4,\"\\n    <button class=\\\"delete-btn mdl-button mdl-js-button mdl-button--icon\\\">\\n        <i class=\\\"material-icons\\\">delete</i>\\n    </button>\\n    \"],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"mdl-card__title\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[15,\"class\",\"mdl-card__title-text\"],[13],[1,[26,[\"title\"]],false],[14],[0,\"\\n\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"mdl-card__supporting-text\"],[13],[0,\"\\n        \"],[1,[26,[\"content\"]],false],[0,\"\\n    \"],[14],[0,\"\\n            \\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "notes/templates/components/note-card-done.hbs" } });
});
define("notes/templates/components/note-card-edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZsvHb479", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"note-card mdl-card mdl-shadow--2dp\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\"],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"type\",\"class\",\"id\",\"value\"],[\"text\",\"mdl-textfield__input mdl-card__title-text\",\"sample1\",[28,[\"title\"]]]]],false],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"mdl-textfield__label\"],[15,\"for\",\"sample1\"],[13],[0,\"Title ...\"],[14],[0,\"\\n\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"mdl-textfield mdl-js-textfield\"],[13],[0,\"\\n        \"],[4,\" <textarea class=\\\"mdl-textfield__input\\\" type=\\\"text\\\" rows=\\\"3\\\" id=\\\"sample5\\\"></textarea> \"],[0,\"\\n        \"],[1,[33,[\"textarea\"],null,[[\"type\",\"class\",\"rows\",\"id\",\"value\"],[\"text\",\"mdl-textfield__input\",\"3\",\"sample5\",[28,[\"content\"]]]]],false],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"mdl-textfield__label\"],[15,\"for\",\"sample5\"],[13],[0,\"Content ...\"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"note-edit-add-btn\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"class\",\"mdl-button mdl-js-button\"],[5,[\"action\"],[[28,[null]],\"saveNote\",[28,[\"title\"]],[28,[\"content\"]]]],[13],[0,\" Save \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "notes/templates/components/note-card-edit.hbs" } });
});
define("notes/templates/components/notes-container", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jIZHBrXX", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"notes-container\"],[13],[0,\"\\n    \\n\"],[6,[\"each\"],[[28,[\"notes\"]]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"note-card-done\"],null,[[\"title\",\"content\"],[[28,[\"note\",\"title\"]],[28,[\"note\",\"content\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"note\"]},null],[0,\"\\n    \"],[1,[26,[\"note-card-add\"]],false],[0,\"\\n\\n\\n\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "notes/templates/components/notes-container.hbs" } });
});


define('notes/config/environment', ['ember'], function(Ember) {
  var prefix = 'notes';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("notes/app")["default"].create({"name":"notes","version":"0.0.0+c80276d7"});
}
//# sourceMappingURL=notes.map
