# Next-MF-SSR-RST Architecture Example

Hello lovely team,

Welcome to the Container-MFES project! This repository contains three micro frontend applications: `main-app`, `login-app`, and `remote1`. This guide will walk you through the setup process.

## Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js**: v14 or higher (preferably v20.11.1)
- **npm**: v7 or higher (preferably v10.8.1)

If you need help managing different Node.js versions, we recommend using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm).



### Note on Architecture Diagram

We have included an architecture diagram (`Archticture.dio`) to help you better understand the project structure. For viewing this file, we encourage you to install a suitable diagram viewer extension.

## Installation

Each application has its dependencies listed in its `package.json` file. Follow the steps below to set up each app.


### 1. Setting Up `login-app`

Navigate to the `login-app` directory and install the dependencies:


cd ./micro-frontend/login-app

```
npm install

npm run dev
```


### 2. Setting Up `remote1`

Navigate to the `remote1` directory and install the dependencies:

cd ./micro-frontend/remote1

```
npm install

npm run dev
```


### 3. Setting Up `main-app`

Navigate to the `main-app` directory and install the dependencies:


cd ./micro-frontend/main-app

```
npm install

npm run dev
```




## Development

Each application uses Next.js and can be developed independently. Ensure each application is running on a different port to avoid conflicts.

