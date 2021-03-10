export const webglSupport = (function () {
  var webglsupport = false;
  var canvas;
  var ctx;

  try {
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (e) {
    return false;
  }

  if (ctx !== undefined) {
    webglsupport = true;
  }

  canvas = undefined;
  return webglsupport;
})();
