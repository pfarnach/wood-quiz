// So mocha doesn't barf all over the .jpg extension
function noop() {
  return null;
}

require.extensions['.jpg'] = noop;