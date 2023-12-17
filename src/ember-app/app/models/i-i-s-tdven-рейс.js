import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РейсMixin
} from '../mixins/regenerated/models/i-i-s-tdven-рейс';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РейсMixin, Validations, {
});

defineProjections(Model);

export default Model;
