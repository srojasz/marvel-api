import { filterByComics } from "./fetchCharacters";

describe("filter by comics", () => {
  test("0 to 10", () => {

    const comics = [
      {
        id: 1,
        comics: {
          available: 12
        }

      },
      {
        id: 2,
        comics: {
          available: 0
        }

      },
      {
        id: 3,
        comics: {
          available: 7
        }

      },

      {
        id: 4,
        comics: {
          available: 10
        }

      }
    ]

    const expected = [
      {
        id: 2,
        comics: {
          available: 0
        }

      },
      {
        id: 3,
        comics: {
          available: 7
        }

      },

      {
        id: 4,
        comics: {
          available: 10
        }

      }
    ]

    expect(filterByComics(comics, 0, 10)).toEqual(expected);

  })
  test("11 to 20", () => {

    const comics = [
      {
        id: 1,
        comics: {
          available: 11
        }

      },
      {
        id: 2,
        comics: {
          available: 20
        }

      },
      {
        id: 3,
        comics: {
          available: 17
        }

      },

      {
        id: 4,
        comics: {
          available: 24
        }

      },
      {
        id: 5,
        comics: {
          available: 10
        }

      },
      {
        id: 6,
        comics: {
          available: 49
        }

      }
    ]

    const expected = [
      {
        id: 1,
        comics: {
          available: 11
        }

      },
      {
        id: 2,
        comics: {
          available: 20
        }

      },
      {
        id: 3,
        comics: {
          available: 17
        }

      }
    ]

    expect(filterByComics(comics, 11, 20)).toEqual(expected);



  })
  test("more than 20", () => {
    const comics = [
      {
        id: 1,
        comics: {
          available: 21
        }

      },
      {
        id: 2,
        comics: {
          available: 459
        }

      },
      {
        id: 3,
        comics: {
          available: 20
        }

      },

      {
        id: 4,
        comics: {
          available: 1
        }

      }

    ]

    const expected = [
      {
        id: 1,
        comics: {
          available: 21
        }

      },
      {
        id: 2,
        comics: {
          available: 459
        }

      }

    ]


    expect(filterByComics(comics, 21, Number.POSITIVE_INFINITY)).toEqual(expected);


  })
})

