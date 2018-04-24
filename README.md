## Ultra basic Electron React App boilerplate ready for 2018
Electron + React + React-Bootrstrap + Babel + WebPack with HMR (hot module replacement)

I made this boilerplate to quickly get and up running with Electron app development with React (with a dev and prod build and traspilation pipeline). You can also use react-bootstrap https://react-bootstrap.github.io/ components.

## Prepare Environment
1. **NodeJS**  
``` https://nodejs.org/en/download/ ```
2. **Webpack**
``` npm install --global webpack ```
3. **Clone this repository**
``` $ https://github.com/HydroCarbons/electron-react-boilerplate-2018.git ```
4. **Switch to project***
```cd electron-react-boilerplate-2018```
5. **Install Depedencies***
``` npm install ```

## Development Environment

**Run Dev Build with HMR using DevServer**
``` npm run dev ```
it will run the build with HMR 

Or, **Create a dev build**
``` npm run devbuild ```
it will create **build** folder with both background app and react app.

## Production Environment

**Run Prod Build with HMR using Electron App**
``` npm run prod ```
it will run the build with HMR

Or, **Create a Prod build**
``` npm run prodbuild ```
it will create **build** folder with both uglified build of background app and react app.

## Create Packaged App

**Build app**
``` npm run package ```
it will create **release** folder with app using **electron-builder**


## App Screenshot

![App Screenshot](https://github.com/HydroCarbons/electron-react-boilerplate-2018/blob/master/docs/app.png)

## Build Pipeline

( Install Dependencies => Create Dev / Prod Build => Create Packaged App )

## License
This project is licensed under the Apache License 2.0, Copyright (c) 2018 HydroCarbons. For more information see LICENSE.md.
