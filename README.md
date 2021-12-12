# NgrxExamples

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@ngrx-examples/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

# NgRx Help

- [State Management With NgRx](https://nx.dev/p/a/guides/misc-ngrx)

- [MonoRepo Design Architecture](https://nx.dev/l/r/guides/monorepo-nx-enterprise)

- [Grouping Libraries](https://nx.dev/l/r/structure/grouping-libraries)

# NgRx Tutorials

- https://brandonroberts.dev/blog/posts/2021-02-24-building-an-angular-application-from-scratch-with-nx-and-ngrx/

- https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/3-generating-components-and-nx-lib

# Commands Used

## Kill Process Currently Using Port

`netstat -ano | findstr :4200`
`taskkill /PID 16080 /F`

## Creating Workspace

`npx create-nx-workspace ngrx-examples --appName ngrx-io --preset angular --style scss --routing --nxCloud false`

## Adding NGRX

`nx g ngrx app --root --no-interactive --module apps/ngrx-io/src/app/app.module.ts`

`ng g @nrwl/angular:ngrx app --root --module=apps/<appname>/src/app/app.module.ts`

## Generating Libraries

`nx g lib ngrx-io/data-access`

`nx g lib ngrx-io/page`

`ng g @nrwl/angular:lib products`

## Moving Libraries

- `nx g move --project booking-some-library shared/some-library`

## Generating Services

`nx g service ngrx-io --project ngrx-io-data-access`

## Generating Components

`nx g component ngrx-io-page --project ngrx-io-page`

## Generating NgRx Feature State

`nx g ngrx ngrx-io --no-interactive --module libs/ngrx-io/data-access/src/lib/examples-data-access.module.ts --barrels`

`ng g ngrx counter --no-interactive --module libs/ngrx-io/counter/data-access/src/lib/ngrx-io-counter-data-access.module.ts`

`ng g @nrwl/angular:ngrx products --module=libs/products/src/lib/products.module.ts --directory +state/products --defaults`

` npx nx g @ngrx/schematics:feature --name=counter --project=ngrx-io-counter-data-access --module=ngrx-io-counter-data-access --no-interactive --dry-run`

### NgRx Tip: To generate an empty feature state, use the feature schematic from the @ngrx/schematics package.

`nx g @ngrx/schematics:feature quote`
