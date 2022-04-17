// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// export const preset = 'ts-jest';
// export const testEnvironment = 'node';
// export const globals = {
//   // we must specify a custom tsconfig for tests because we need the typescript transform
//   // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
//   // can see this setting in tsconfig.jest.json -> "jsx": "react"
//   "ts-jest": {
//     tsConfig: "tsconfig.jest.json"
//   }
// };
module.exports = {
  preset:  'ts-jest',
  testEnvironment: 'node'
}