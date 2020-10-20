// TODO: Возможно следует изменить структуру моковых данных так чтобы в общем списке данных выделялся список данных для карточки предложения.

export default [
  {
    id: 1,
    city: `Amsterdam`,
    property: `Teremok`,
    host: `Fly`,
    hostAvatar: `https://via.placeholder.com/74x74`,
    slogan: `Nice apartment among various friendly neighbors!`,
    description: [`Comfortable and modern multi-apartment house, situated in nice natural area.`, `Good transport acceciblity, many places to spend a time: tennis court, workout grounds, etc`],
    photo: [`https://via.placeholder.com/260x200`],
    main: {
      address: `some meadow in the forest`,
      coords: [0, 0],
      price: 100,
      type: `apartment`
    },
    facilities: {
      premium: false,
      bedrooms: 1,
      capacity: {
        adults: 2,
        children: 2
      },
      amentities: [
        `WiFi`, `Heating`, `kitchen`, `fridge`, `washing machine`, `towels`, `TV`
      ]
    }
  },
  {
    id: 2,
    city: `Amsterdam`,
    property: `Cell in Darkest Dungeon`,
    host: `Some evil force`,
    hostAvatar: `https://via.placeholder.com/74x74`,
    slogan: `You will be frequently provided with very interesting visiters!`,
    description: [`Historical underground bulding, was founded in dark ages and has a dark story.`, `Many unusual entertainments for the most demanding taste.`],
    photo: [`https://via.placeholder.com/260x200`],
    main: {
      address: `castle in some forgotten land`,
      coords: [30, 30],
      price: 50,
      type: `room`
    },
    facilities: {
      premium: false,
      bedrooms: 1,
      capacity: {
        adults: 1,
        children: 0
      },
      amentities: [
        `WiFi`, `TV`, `big club`
      ]
    }
  },
  {
    id: 3,
    city: `Amsterdam`,
    property: `Hut on chicken legs`,
    host: `Bаba Yaga`,
    hostAvatar: `https://via.placeholder.com/74x74`,
    slogan: `Many interesting sights in stone's throw, you don't need to rent a car`,
    description: [`Nice and fast wooden building without a fixed abode.`, `It was built in ancient times and still preserves historical shape.`],
    photo: [`https://via.placeholder.com/260x200`],
    main: {
      address: `Who knows were is it in this moment?`,
      coords: [50, 50],
      type: `Entire house`,
      price: 200
    },
    facilities: {
      premium: true,
      bedrooms: 2,
      capacity: {
        adults: 4,
        children: 4
      },
      amentities: [
        `WiFi`, `stove`, `kitchen`, `fridge`, `washing machine`, `towels`, `TV`, `navigation system`, `private flyibg transport`
      ]
    }
  },
  {
    id: 4,
    city: `Amsterdam`,
    property: `Gingerbread house`,
    host: `Evil Witch`,
    hostAvatar: `https://via.placeholder.com/74x74`,
    slogan: `Many sweets for nice children! Only for children`,
    description: [`Old historical building with unusual architecture.`, `It's situated in wonderful natural area.`, `Very nice children's restoraunt inside.`],
    photo: [`https://via.placeholder.com/260x200`],
    main: {
      address: `Dark thicket deep in forest`,
      coords: [70, 70],
      price: 150,
      type: `Entire house`
    },
    facilities: {
      premium: true,
      bedrooms: 2,
      capacity: {
        adults: 0,
        children: 4
      },
      amentities: [
        `WiFi`, `stove`, `kitchen`, `fridge`, `washing machine`, `towels`, `TV`
      ]
    }
  }
];
