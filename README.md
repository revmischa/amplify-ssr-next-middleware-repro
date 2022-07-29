Reproduction repo for https://github.com/aws-amplify/amplify-js/issues/9145

## Instructions

```
pnpm install
pnpm build
```

The only addition to create-next-app is the file `middleware.ts`.

## Error

```
info  - SWC minify release candidate enabled. https://nextjs.link/swcmin
info  - Linting and checking validity of types
info  - Creating an optimized production build
Failed to compile.

./node_modules/.pnpm/@aws-amplify+core@4.6.0/node_modules/@aws-amplify/core/lib-esm/JS.js
Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime

Import trace for requested module:
./node_modules/.pnpm/@aws-amplify+core@4.6.0/node_modules/@aws-amplify/core/lib-esm/index.js
./node_modules/.pnpm/aws-amplify@4.3.29/node_modules/aws-amplify/lib-esm/withSSRContext.js
./middleware.ts

./node_modules/.pnpm/amazon-cognito-identity-js@5.2.10/node_modules/amazon-cognito-identity-js/es/Client.js
Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime

Import trace for requested module:
./node_modules/.pnpm/amazon-cognito-identity-js@5.2.10/node_modules/amazon-cognito-identity-js/es/CognitoUserPool.js
./node_modules/.pnpm/amazon-cognito-identity-js@5.2.10/node_modules/amazon-cognito-identity-js/es/index.js
./node_modules/.pnpm/@aws-amplify+auth@4.6.0/node_modules/@aws-amplify/auth/lib-esm/index.js
./node_modules/.pnpm/aws-amplify@4.3.29/node_modules/aws-amplify/lib-esm/withSSRContext.js
./middleware.ts

./node_modules/.pnpm/immer@9.0.6/node_modules/immer/dist/immer.esm.js
Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime

Import trace for requested module:
./node_modules/.pnpm/@aws-amplify+datastore@3.12.4/node_modules/@aws-amplify/datastore/lib-esm/util.js
./node_modules/.pnpm/@aws-amplify+datastore@3.12.4/node_modules/@aws-amplify/datastore/lib-esm/index.js
./node_modules/.pnpm/aws-amplify@4.3.29/node_modules/aws-amplify/lib-esm/withSSRContext.js
./middleware.ts

./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js
Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime

Import trace for requested module:
./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js
./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js
./node_modules/.pnpm/@aws-amplify+analytics@5.2.14/node_modules/@aws-amplify/analytics/lib-esm/Providers/AmazonPersonalizeProvider.js
./node_modules/.pnpm/@aws-amplify+analytics@5.2.14/node_modules/@aws-amplify/analytics/lib-esm/Providers/index.js
./node_modules/.pnpm/@aws-amplify+analytics@5.2.14/node_modules/@aws-amplify/analytics/lib-esm/index.js
./node_modules/.pnpm/aws-amplify@4.3.29/node_modules/aws-amplify/lib-esm/index.js
./node_modules/.pnpm/aws-amplify@4.3.29/node_modules/aws-amplify/lib-esm/withSSRContext.js
./middleware.ts

./node_modules/.pnpm/graphql@15.8.0/node_modules/graphql/error/GraphQLError.mjs
Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime

Import trace for requested module:
./node_modules/.pnpm/graphql@15.8.0/node_modules/graphql/error/index.mjs
./node_modules/.pnpm/graphql@15.8.0/node_modules/graphql/index.mjs
./node_modules/.pnpm/@aws-amplify+api-graphql@2.3.11/node_modules/@aws-amplify/api-graphql/lib-esm/GraphQLAPI.js
./node_modules/.pnpm/@aws-amplify+api-graphql@2.3.11/node_modules/@aws-amplify/api-graphql/lib-esm/index.js
./node_modules/.pnpm/@aws-amplify+api@4.0.47/node_modules/@aws-amplify/api/lib-esm/index.js
./node_modules/.pnpm/aws-amplify@4.3.29/node_modules/aws-amplify/lib-esm/withSSRContext.js
./middleware.ts
```
