import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reminders-list', 'Integration | Component | reminders list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{reminders-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#reminders-list}}
      template block text
    {{/reminders-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders an h1 tag', () => {
  
})
