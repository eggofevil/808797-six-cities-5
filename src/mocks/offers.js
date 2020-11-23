// TODO: Возможно следует изменить структуру моковых данных так чтобы в общем списке данных выделялся список данных для карточки предложения.

export default [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Comfortable and modern multi-apartment house, situated in nice natural area. Good transport acceciblity, many places to spend a time: tennis court, workout grounds, etc`,
    propertyId: 1,
    rating: 4.1,
    property: `Teremok`,
    host: `Fly`,
    hostAvatar: `https://via.placeholder.com/74x74`,
    slogan: `Nice apartment among various friendly neighbors!`,
    photo: [`https://via.placeholder.com/260x200`],
    price: 100,
    main: {
      address: `some meadow in the forest`,
      coords: [52.3909553943508, 4.85309666406198],

      type: `apartment`
    },
    facilities: {
      premium: false,
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
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Historical underground bulding, was founded in dark ages and has a dark story. Many unusual entertainments for the most demanding taste.`,
    propertyId: 2,
    rating: 4.4,
    property: `Cell in Darkest Dungeon`,
    host: `Some evil force`,
    hostAvatar: `https://via.placeholder.com/74x74`,
    slogan: `You will be frequently provided with very interesting visiters!`,
    photo: [`https://via.placeholder.com/260x200`],
    price: 50,
    main: {
      address: `castle in some forgotten land`,
      coords: [52.369553943508, 4.85309666406198],
      type: `room`
    },
    facilities: {
      premium: false,
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
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Nice and fast wooden building without a fixed abode. It was built in ancient times and still preserves historical shape.`,
    propertyId: 3,
    rating: 4.8,
    property: `Hut on chicken legs`,
    host: `Bаba Yaga`,
    hostAvatar: `https://via.placeholder.com/74x74`,
    slogan: `Many interesting sights in stone's throw, you don't need to rent a car`,
    photo: [`https://via.placeholder.com/260x200`],
    price: 200,
    main: {
      address: `Who knows were is it in this moment?`,
      coords: [52.3909553943508, 4.929309666406198],
      type: `Entire house`,
    },
    facilities: {
      premium: true,
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
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Old historical building with unusual architecture. It's situated in wonderful natural area. Very nice children's restoraunt inside.`,
    propertyId: 4,
    rating: 4.2,
    property: `Gingerbread house`,
    host: `Evil Witch`,
    hostAvatar: `https://via.placeholder.com/74x74`,
    slogan: `Many sweets for nice children! Only for children`,
    photo: [`https://via.placeholder.com/260x200`],
    price: 150,
    main: {
      address: `Dark thicket deep in forest`,
      coords: [52.3809553943508, 4.939309666406198],
      type: `Entire house`
    },
    facilities: {
      premium: true,
      capacity: {
        adults: 0,
        children: 4
      },
      amentities: [
        `WiFi`, `stove`, `kitchen`, `fridge`, `washing machine`, `towels`, `TV`
      ]
    }
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 50.8505,
        longitude: 4.3488,
        zoom: 10
      },
      name: `Brussels`
    },
    description: `Comfortable and modern multi-apartment house, situated in nice natural area. Good transport acceciblity, many places to spend a time: tennis court, workout grounds, etc`,
    propertyId: 5,
    rating: 3.9,
    property: `Teremok`,
    host: `Fly`,
    hostAvatar: `https://via.placeholder.com/74x74`,
    slogan: `Nice apartment among various friendly neighbors!`,
    photo: [`https://via.placeholder.com/260x200`],
    price: 100,
    main: {
      address: `some meadow in the forest`,
      coords: [50.850122, 4.342151],
      type: `apartment`
    },
    facilities: {
      premium: false,
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
    bedrooms: 1,
    city: {
      location: {
        latitude: 50.8505,
        longitude: 4.3488,
        zoom: 10
      },
      name: `Brussels`
    },
    description: `Historical underground bulding, was founded in dark ages and has a dark story. Many unusual entertainments for the most demanding taste.`,
    propertyId: 6,
    rating: 4.9,
    property: `Cell in Darkest Dungeon`,
    host: `Some evil force`,
    hostAvatar: `https://via.placeholder.com/74x74`,
    slogan: `You will be frequently provided with very interesting visiters!`,
    photo: [`https://via.placeholder.com/260x200`],
    price: 50,
    main: {
      address: `castle in some forgotten land`,
      coords: [50.848833, 4.351776],
      type: `room`
    },
    facilities: {
      premium: false,
      capacity: {
        adults: 1,
        children: 0
      },
      amentities: [
        `WiFi`, `TV`, `big club`
      ]
    }
  }
];
