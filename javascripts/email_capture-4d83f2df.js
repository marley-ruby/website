!function(t){"use strict";t.fn.emailCapture=function(n){return t(this).each(function(n,i){function e(t){t.preventDefault(),analytics.identify(a()),f.html(o).show(2e3)}function a(){var t={email:u.val(),newsletter:!0},n=u.data("segments");return n&&n.split(",").forEach(function(n){t[n]=!0}),t}var r=t(i),u=r.find("input[type=email]"),f=r.find("label[for="+u.attr("id")+"]"),o="Thank you for subscribing!";r.on("submit",e)})}}(jQuery);