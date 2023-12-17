import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tdven-пассажир', 'Unit | Serializer | i-i-s-tdven-пассажир', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tdven-пассажир',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-tdven-класс-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
