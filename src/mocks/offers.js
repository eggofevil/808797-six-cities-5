export default [
  {
    property: `Teremok`,
    host: `Fly`,
    description: `Nice apartment among friendly various neighbors!`,
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
    property: `Cell in Darkest Dungeon`,
    host: `Some evil force`,
    description: `You will be provided with frequent very interesting visiters!`,
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
    property: `Hut on chicken legs`,
    host: `Bаba Yaga`,
    description: `Many interesting sights in stone's throw, you don't need to rent a car`,
    main: {
      address: `Who knows were is it in this moment?`,
      coords: [50, 50],
      price: 200,
      type: `Entire house`
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
    property: `Gingerbread house`,
    host: `Evil Witch`,
    description: `Many sweets for nice children! Only for children`,
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
