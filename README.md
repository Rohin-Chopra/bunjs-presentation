# Bunjs Presentation demo

## Bunjs hello world

Although command `bun init` can be run to generate a new bunjs project, the following commands can be run to appreciate the power of bunjs

```sh
npm init -y
bun add -d bun-types
tsc --init
```

## Create React app speed test

### Create react app via bunjs

```sh
bun create react bunjs && cd bunjs && bun dev
```

### Create react app via node

```sh
npx create-react-app nodejs --template typescript && cd nodejs && PORT=3001 npm start
```

## HTTP Load Test

To perform a load test, we will be running the following command:

```sh
wrk -t12 -c400 -d30s http://localhost:3001
```

### What does this mean?

`t12` => Running on 12 threads

`c400` => 400 connections on each thread

`d30s` => Run the benchmark test for 30 seconds of duration.

### Running the load test on nodejs

```sh
wrk -t12 -c400 -d30s http://localhost:3000/users
```

### Running the load test on bunjs

```sh
wrk -t12 -c400 -d30s http://localhost:4000/users
```
