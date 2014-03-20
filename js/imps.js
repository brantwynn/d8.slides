/**
 * imps.js
 *
 * imps.js provides imps (impress.js shortcuts) to help create presentations
 * without calculating your own math. Combine simple css classes with
 * impress' .step class to create div data-* attributes on imps.init().
 *
 */
var imps = {
  w: $(window).width(),
  h: $(window).height(),
  init: function() {
    // TRBL imps
    $(".step.above").each(function() {
      a = 'data-y';
      p = ($(this).prev().attr(a)) ? parseInt($(this).prev().attr(a)) : 0; 
      $(this).attr(a, p-imps.h);
      imps.cleanup($(this));
    });
    $(".step.ahead").each(function() {
      a = 'data-x';
      p = ($(this).prev().attr(a)) ? parseInt($(this).prev().attr(a)) : 0;
      $(this).attr(a, p+imps.w);
      imps.cleanup($(this));
    });
    $(".step.below").each(function() {
      a = 'data-y';
      p = ($(this).prev().attr(a)) ? parseInt($(this).prev().attr(a)) : 0; 
      $(this).attr(a, p+imps.h);
      imps.cleanup($(this));
    });
    $(".step.behind").each(function() {
      a = 'data-x';
      p = ($(this).prev().attr(a)) ? parseInt($(this).prev().attr(a)) : 0;
      $(this).attr(a, p-imps.w);
      imps.cleanup($(this));
    });
  },
  cleanup: function($step) {
    a = ['data-x', 'data-y'];
    a.forEach(function(e) {
      n = ($step.attr(e)) ? $step.attr(e) : $step.prev().attr(e);
      $step.attr(e, parseInt(n));
    });
  }
}
