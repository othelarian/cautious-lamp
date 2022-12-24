(function () {

  var Piston;

  Piston = {
    init: function() {
      if (navigator.serviceWorker !== null) {
        return navigator.serviceWorker.register('/cautious-lamp/piston_gh/sw.js', {
          scope: '/cautious-lamp/piston_gh/'
        });
      }
    }
  };

  window.Piston = Piston;

})();
