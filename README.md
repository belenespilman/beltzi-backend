# beltzi-backend
Beltzi is a robust and interactive platform designed to facilitate the exchange of knowledge. 

## Getting Started

First, clone the example env file 

```bash
cp.env.example.env
``` 
Then, add the correct values to it and install the dependencies 

```bash
npm install
``` 

## Running the App

```bash
#development
npm run dev

#production
npm start
```

## Migrations

### Generate migrations 

```bash
npm run migrations:generate ./src/migrations/name-of-the-migration
```

### Run migrations
```bash
npm run migration:run
```

### Revert migrations
```bash
npm run migration:revert
```


