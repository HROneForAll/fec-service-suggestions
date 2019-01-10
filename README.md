# Project Name

> Project description

## Related Projects

- https://github.com/HROneForAll/fec-photo-gallery-service
- https://github.com/HROneForAll/fec-photo-gallery-proxy-server
- https://github.com/HROneForAll/fec-service-info
- https://github.com/HROneForAll/fec-proxy-info
- https://github.com/HROneForAll/fec-service-reviews
- https://github.com/HROneForAll/fec-proxy-reviews
- https://github.com/HROneForAll/fec-proxy-suggestions
- https://github.com/HROneForAll/fec-service-suggestions
- https://github.com/HROneForAll/fec-proxy-availability
- https://github.com/HROneForAll/fec-service-availability

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## CRUD Operations

- Create
  * HTTP method: POST
  * Route URL: /user/favorites
  * Description: Save new suggestion to suggestions db

- Read
  * HTTP method: GET
  * Route URL: /homes/:id/suggestions
  * Description: Retrieve suggestions from database

- Update
  * HTTP method: PUT
  * Route URL: /user/updateFavorite
  * Description: Update suggestions in suggestions db

- Delete
  * HTTP method: DELETE
  * Route URL: /homes/:id/suggestions
  * Description: Remove suggested link in db 

