import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTdvenКодБрониLForm from './forms/i-i-s-tdven-код-брони-l';
import IISTdvenМестоНаРейсLForm from './forms/i-i-s-tdven-место-на-рейс-l';
import IISTdvenПассажирLForm from './forms/i-i-s-tdven-пассажир-l';
import IISTdvenПосадТалонLForm from './forms/i-i-s-tdven-посад-талон-l';
import IISTdvenРейсLForm from './forms/i-i-s-tdven-рейс-l';
import IISTdvenКодБрониEForm from './forms/i-i-s-tdven-код-брони-e';
import IISTdvenМестоНаРейсEForm from './forms/i-i-s-tdven-место-на-рейс-e';
import IISTdvenПассажирEForm from './forms/i-i-s-tdven-пассажир-e';
import IISTdvenПосадТалонEForm from './forms/i-i-s-tdven-посад-талон-e';
import IISTdvenРейсEForm from './forms/i-i-s-tdven-рейс-e';
import IISTdvenИнфБроньModel from './models/i-i-s-tdven-инф-бронь';
import IISTdvenКодБрониModel from './models/i-i-s-tdven-код-брони';
import IISTdvenМестоНаРейсModel from './models/i-i-s-tdven-место-на-рейс';
import IISTdvenПассажирModel from './models/i-i-s-tdven-пассажир';
import IISTdvenПосадТалонModel from './models/i-i-s-tdven-посад-талон';
import IISTdvenРейсModel from './models/i-i-s-tdven-рейс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tdven-инф-бронь': IISTdvenИнфБроньModel,
    'i-i-s-tdven-код-брони': IISTdvenКодБрониModel,
    'i-i-s-tdven-место-на-рейс': IISTdvenМестоНаРейсModel,
    'i-i-s-tdven-пассажир': IISTdvenПассажирModel,
    'i-i-s-tdven-посад-талон': IISTdvenПосадТалонModel,
    'i-i-s-tdven-рейс': IISTdvenРейсModel
  },

  'application-name': 'Tdven',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tdven',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tdven',
          title: 'Tdven'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        терминал: {
          caption: 'Терминал',
          title: 'Терминал',
          'i-i-s-tdven-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          },
          'i-i-s-tdven-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          },
          'i-i-s-tdven-код-брони-l': {
            caption: 'Код бронирования',
            title: ''
          },
          'i-i-s-tdven-рейс-l': {
            caption: 'Рейс',
            title: ''
          },
          'i-i-s-tdven-посад-талон-l': {
            caption: 'Посадочный талон',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tdven-код-брони-l': IISTdvenКодБрониLForm,
    'i-i-s-tdven-место-на-рейс-l': IISTdvenМестоНаРейсLForm,
    'i-i-s-tdven-пассажир-l': IISTdvenПассажирLForm,
    'i-i-s-tdven-посад-талон-l': IISTdvenПосадТалонLForm,
    'i-i-s-tdven-рейс-l': IISTdvenРейсLForm,
    'i-i-s-tdven-код-брони-e': IISTdvenКодБрониEForm,
    'i-i-s-tdven-место-на-рейс-e': IISTdvenМестоНаРейсEForm,
    'i-i-s-tdven-пассажир-e': IISTdvenПассажирEForm,
    'i-i-s-tdven-посад-талон-e': IISTdvenПосадТалонEForm,
    'i-i-s-tdven-рейс-e': IISTdvenРейсEForm
  },

});

export default translations;
