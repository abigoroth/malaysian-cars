# Malaysia Postcodes

List of malaysian cars and models (JSON)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [allMakes](#allMakes)
  - [allModels](#allModels)
  - [getModels](#getModels)
- [License](#license)

## Installation

Install the package from NPM.

```bash
npm i malaysian-cars
```

Include it in your script.

```js
import {
  allMakes,
  allModels,
  getModels,
} from "malaysian-cars";
```

## Usage

### allMakes

Return all car maker

Example usage

```js
const carMakers = allMakes;
```

Example results

```js
[
    {
    "id": "27",
    "name": "Porsche",
    "slug": "porsche"
    },
    {
    "name": "Proton",
    "slug": "proton",
    "id": "28"
    },
    {
    "id": "29",
    "name": "Renault",
    "slug": "renault"
    }
]
```

### allModels

Return all car models

Example usage

```js
const models = allModels
```

Example results

```js
[
    ...,
      {
        "parent_id": "28",
        "values": [
          {
            "id": "1368",
            "name": "Arena",
            "slug": "arena"
          },
          {
            "id": "5168",
            "name": "Ertiga",
            "slug": "ertiga"
          },
          {
            "name": "Exora",
            "slug": "exora",
            "id": "1360"
          },
          {
            "id": "1358",
            "name": "Gen2",
            "slug": "gen2"
          },
        ]
      },
      ...
]
```

### getModels

Return all models on selected maker

Example usage

```js
const models = getModels("Proton");
```

Example results

```js
[
    {
    "id": "1368",
    "name": "Arena",
    "slug": "arena"
    },
    {
    "id": "5168",
    "name": "Ertiga",
    "slug": "ertiga"
    },
    {
    "name": "Exora",
    "slug": "exora",
    "id": "1360"
    },
    {
    "id": "1358",
    "name": "Gen2",
    "slug": "gen2"
    }
]
```

###

## Contributing

If you spot any errors, typos or missing information, please submit a pull request.

## License

ISC. See [LICENSE](LICENSE) for more details.