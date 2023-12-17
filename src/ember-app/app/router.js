import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tdven-код-брони-l');
  this.route('i-i-s-tdven-код-брони-e',
  { path: 'i-i-s-tdven-код-брони-e/:id' });
  this.route('i-i-s-tdven-код-брони-e.new',
  { path: 'i-i-s-tdven-код-брони-e/new' });
  this.route('i-i-s-tdven-место-на-рейс-l');
  this.route('i-i-s-tdven-место-на-рейс-e',
  { path: 'i-i-s-tdven-место-на-рейс-e/:id' });
  this.route('i-i-s-tdven-место-на-рейс-e.new',
  { path: 'i-i-s-tdven-место-на-рейс-e/new' });
  this.route('i-i-s-tdven-пассажир-l');
  this.route('i-i-s-tdven-пассажир-e',
  { path: 'i-i-s-tdven-пассажир-e/:id' });
  this.route('i-i-s-tdven-пассажир-e.new',
  { path: 'i-i-s-tdven-пассажир-e/new' });
  this.route('i-i-s-tdven-посад-талон-l');
  this.route('i-i-s-tdven-посад-талон-e',
  { path: 'i-i-s-tdven-посад-талон-e/:id' });
  this.route('i-i-s-tdven-посад-талон-e.new',
  { path: 'i-i-s-tdven-посад-талон-e/new' });
  this.route('i-i-s-tdven-рейс-l');
  this.route('i-i-s-tdven-рейс-e',
  { path: 'i-i-s-tdven-рейс-e/:id' });
  this.route('i-i-s-tdven-рейс-e.new',
  { path: 'i-i-s-tdven-рейс-e/new' });
});

export default Router;
