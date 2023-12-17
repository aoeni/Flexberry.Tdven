export default {
  projections: {
    ПосадТалонE: {
      датаВыд: {
        __caption__: 'Дата выдачи'
      },
      пассажир: {
        __caption__: 'Пассажир',
        кодБрони: {
          __caption__: '',
          код: {
            __caption__: 'Код бронирования'
          }
        },
        фИО: {
          __caption__: 'ФИО'
        },
        местоНаРейс: {
          __caption__: '',
          класс: {
            __caption__: 'Класс'
          },
          место: {
            __caption__: 'Место'
          }
        }
      },
      рейс: {
        __caption__: 'Рейс',
        дата: {
          __caption__: 'Дата'
        },
        откуда: {
          __caption__: 'Откуда'
        },
        куда: {
          __caption__: 'Куда'
        },
        времяОтпр: {
          __caption__: 'Время отправления'
        },
        начПосад: {
          __caption__: 'Начало посадки'
        },
        конецПосад: {
          __caption__: 'Конец посадки'
        },
        выход: {
          __caption__: 'Выход'
        }
      }
    },
    ПосадТалонL: {
      датаВыд: {
        __caption__: 'Дата выдачи'
      },
      пассажир: {
        __caption__: 'ФИО',
        фИО: {
          __caption__: 'ФИО'
        }
      },
      рейс: {
        __caption__: 'Куда',
        куда: {
          __caption__: 'Куда'
        }
      }
    }
  },
  validations: {
    датаВыд: {
      __caption__: 'Дата выдачи'
    },
    пассажир: {
      __caption__: 'Пассажир'
    },
    рейс: {
      __caption__: 'Рейс'
    }
  }
};
