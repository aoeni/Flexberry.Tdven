import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tdven-пассажир', 'Unit | Model | i-i-s-tdven-пассажир', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tdven-инф-бронь',
    'model:i-i-s-tdven-код-брони',
    'model:i-i-s-tdven-место-на-рейс',
    'model:i-i-s-tdven-пассажир',
    'model:i-i-s-tdven-посад-талон',
    'model:i-i-s-tdven-рейс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
