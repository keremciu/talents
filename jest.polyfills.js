/**
 * @note The block below contains polyfills for Node.js globals
 * required for Jest to function when running JSDOM tests.
 * These HAVE to be require's and HAVE to be in this exact
 * order.
 *
 * Consider migrating to a more modern test runner if
 * you don't want to deal with this.
 */
const {
  TextDecoder,
  TextEncoder,
  ReadableStream,
  clearImmediate,
} = require("node:util");

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
  ReadableStream: { value: ReadableStream },
  clearImmediate: { value: clearImmediate },
});
