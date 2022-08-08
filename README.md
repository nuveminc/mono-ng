# Reactive/Clean Architecture Example Code

This project utilizes concepts from Robert Martin (Uncle Bob). The architectural style adapted from
his blog on [Clean Architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

The driving design concept is to remove all dependencies on the UI framework, namely Angular, and any use of the "recommended"
supporting libraries in a slightly different design pattern from what is prescribed by Angular documentation.

### Framework Agnostic

The core concept (following SoC best practices) is to separate the concerns from the UI Framework such that all data
is available to the UI through a presentation layer which in turn calls into the repository
which is the state maintenance layer.

A simple flow diagram:
UI Component (Controller) => [ Presenter => Repository => HttpGateway (API) ] : Test

With this design, ideally, testing can be conducted on the "black box" which is exposed as the interface on the presentation layer. 
All subsequent layers (repository, and gateway) are irrelevant and state is maintained in a segrated repository. The testing 
can be conducted on what is the expected output (Presenter) and what is being called (HttpGateway / API).

The industry-standard logical SoC is followed here as well:

- **Presentation**: only exposes the ViewModel / presentation data to the UI
- **Repository/BL**: responsible for holding system state and preforms Business Logic (BL) CRUD data
- **Gateway**: responsbile for fetching data from APIs

## Folder Structure

```
/apps/private (Pages/Views)
  |__dashboard
  |__ ...etc

/libs
  |__app-config
  |__http-gateway
  |__interfaces
  |__mocks
  |__presenters
  |__repositories
  |__ui-components
```

**apps/private/:** (the Angular application)

**libs/http-gateway/:** The gateway modules for accessing the API using HttpClient/GraphQL (Apollo) and an HttpMock.

**libs/interfaces/:** Interfaces used in the libs directory. All interfaces should live in this directory.

**libs/mocks/:** Mocked data. This is used by HttpMock to provide data without a backend API. Can be used for testing or for creating a new service that hasn't been implemented as the API yet. Also provides mocked data for testing. Data is available in `/mocks/src/lib/data/`.

**libs/presenters/:** All presenters live in this directory and are the single point of truth for their corresponding component or components. This is typically a 1:1 relationship although Presenters can be aggregated.

**libs/repositories/:** All respositories live in this directory and are responsible for the interchange of data models to/from the Gateway and the Presenter.

**libs/ui-components/:** This is where all components live that are used by the application. A `shared` or `common` directory can be created to hold common components.

**NOTE** The current implementation only calls into the mock data.

The `MockDataProvider` (`/mocks/src/lib/mock-data.provider.ts`) is the mock
provider used by the `/http-gateway/src/lib/providers/http-mock.provider.ts` to deliver mock
data. The `entity` property in the `*Repository` module is the property used to locate the correct data file.
e.g. To fetch mock `inventory` data `InventoryRepository.entity = 'identity'`

Also, the UI is very crude to simply demonstrate the use of components and the injection pattern.
The UI does not use any component libraries for displaying the sample data.

## Unit Tests

Unit tests have only been started for the Inventory view `/libs/ui-components/src/lib/inventory.component.spec.ts`. Following the Clean Architecture design, test should only need to be written for the `presentation`
layer ensuring the correct data is returned. Another test at the `gateway` layer also ensures the correct end-point is being called. With this design, we encapsulate all UI logic and data within the
presentation layer and expose that as the `View Model` by the `[Entity]Presenter` (e.g. `InventoryPresenter` ) which allows for cleaner separation and unit testing of the data structures rather than relying on the framework for UI element testing which becomesvery convoluted and difficult as the project iterates and progresses.

Tests should be written with the component `ui-component/**` and can also include component tests if there are any edge-cases that require testing.

### Create UI Component (ui-components)

Run `npx ng g component inventory --project=ui-components --export`

## Generate a library

Run `ng g @nrwl/angular:lib my-lib --directory=repositories` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@mono/mylib`.

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

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
