# Alura Viagens


### Core Dependencies
- enable typescript

```bash
yarn add -D @types/node @types/react @types/react-dom @types/styled-components babel-plugin-styled-components typescript
```

Also, add the import resolver to avoid any unwanted eslint issues on code.

```bash
yarn add eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript -D

```

- [husky](https://github.com/typicode/husky)

- [commitizen](https://github.com/commitizen/cz-cli): create commit following [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

- [commitlint](https://github.com/conventional-changelog/commitlint#getting-started): linter for git-commits

- [eslint](https://eslint.org/docs/user-guide/getting-started): find and fix problems in JS code

- [cypress](https://www.cypress.io/): run integration tests. Cypress is a combination of `cypress` and `chay`.

```bash
yarn add -D cypress eslint-plugin-cypress
```

activate and extend cypress in `.eslintrc` by adding into:

```bash
  env: {
    ...
    'cypress/globals': true,
  }
  extends: [
    ...
    'plugin:cypress/recommended',
  ]
```

- [jest](https://jestjs.io/): unit tests in JS. Jest is a combination of `jest`, `expect` and `jsdom`.

```bash
yarn add jest -D @types/jest -D eslint-plugin-jest
```

- [testing library](https://testing-library.com/): unit test of react components

```bash
yarn add -D @testing-library/jest-dom @testing-library/react @testing-library/react-hooks jest-canvas-mock jest-styled-components
```

---

This example features how you use a different styling solution than [styled-jsx](https://github.com/zeit/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>
