'use strict';

define('notes/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/header-main.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-main.js should pass ESLint\n\n');
  });

  QUnit.test('components/note-card-add.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/note-card-add.js should pass ESLint\n\n');
  });

  QUnit.test('components/note-card-done.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/note-card-done.js should pass ESLint\n\n');
  });

  QUnit.test('components/note-card-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/note-card-edit.js should pass ESLint\n\n');
  });

  QUnit.test('components/notes-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/notes-container.js should pass ESLint\n\n');
  });

  QUnit.test('models/note.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/note.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('storages/notes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'storages/notes.js should pass ESLint\n\n');
  });
});
define('notes/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('notes/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'notes/tests/helpers/start-app', 'notes/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = _ember.default.RSVP.Promise;
});
define('notes/tests/helpers/resolver', ['exports', 'notes/resolver', 'notes/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('notes/tests/helpers/start-app', ['exports', 'ember', 'notes/app', 'notes/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('notes/tests/integration/components/header-main-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('header-main', 'Integration | Component | header main', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "lUrYu6om",
      "block": "{\"statements\":[[1,[26,[\"header-main\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "jVcyElQD",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"header-main\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('notes/tests/integration/components/note-card-add-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('note-card-add', 'Integration | Component | note card add', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "5Zq8ZpRn",
      "block": "{\"statements\":[[1,[26,[\"note-card-add\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ugoVmtaV",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"note-card-add\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('notes/tests/integration/components/note-card-done-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('note-card-done', 'Integration | Component | note card done', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "NrVjRQPc",
      "block": "{\"statements\":[[1,[26,[\"note-card-done\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "bqc0AsJo",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"note-card-done\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('notes/tests/integration/components/note-card-edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('note-card-edit', 'Integration | Component | note card edit', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "4pe1+St5",
      "block": "{\"statements\":[[1,[26,[\"note-card-edit\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "YP9z6jVk",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"note-card-edit\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('notes/tests/integration/components/notes-container-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('notes-container', 'Integration | Component | notes container', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "WuOdNOKF",
      "block": "{\"statements\":[[1,[26,[\"notes-container\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "2rtms884",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"notes-container\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('notes/tests/test-helper', ['notes/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('notes/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/header-main-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-main-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/note-card-add-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/note-card-add-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/note-card-done-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/note-card-done-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/note-card-edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/note-card-edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/notes-container-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/notes-container-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/note-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/note-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/notes-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/notes-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
});
define('notes/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('notes/tests/unit/models/note-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('note', 'Unit | Model | note', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('notes/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('notes/tests/unit/routes/notes-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:notes', 'Unit | Route | notes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('notes/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
require('notes/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
