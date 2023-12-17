import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tdven',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tdven',
          title: 'Tdven'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
