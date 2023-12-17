import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.терминал.caption'),
          title: i18n.t('forms.application.sitemap.терминал.title'),
          children: [{
            link: 'i-i-s-tdven-место-на-рейс-l',
            caption: i18n.t('forms.application.sitemap.терминал.i-i-s-tdven-место-на-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.терминал.i-i-s-tdven-место-на-рейс-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-tdven-пассажир-l',
            caption: i18n.t('forms.application.sitemap.терминал.i-i-s-tdven-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.терминал.i-i-s-tdven-пассажир-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-tdven-код-брони-l',
            caption: i18n.t('forms.application.sitemap.терминал.i-i-s-tdven-код-брони-l.caption'),
            title: i18n.t('forms.application.sitemap.терминал.i-i-s-tdven-код-брони-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-tdven-рейс-l',
            caption: i18n.t('forms.application.sitemap.терминал.i-i-s-tdven-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.терминал.i-i-s-tdven-рейс-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-tdven-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.терминал.i-i-s-tdven-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.терминал.i-i-s-tdven-посад-талон-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})