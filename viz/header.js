var reportbacks = [];
var offset;
var height;
var width;

//http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addPhotoLayer() {
  if (reportbacks.length == 0) {
    return;
  }
  var rb = reportbacks.pop();
  var image = rb.media.uri;
  var $rb = $(`<div class="header-card"><img src=${image}></div>`);
  $rb.css('top', getRandomInt(0, height));
  $rb.css('left', getRandomInt(0, width));
  $rb.css('z-index', reportbacks.length);
  $rb.fadeIn(800);
  $('.header').append($rb);
}

$(document).on('ready', function() {
  offset = $('.header').offset();
  height = $('.header').height();
  width = $('.header').width();
  $.ajax({
    url: 'https://www.dosomething.org/api/v1/reportback-items',
    data: {
      count: 45,
      campaigns: 3755
    },
    success: function(data) {
      reportbacks = data.data;
      $('.header .wrapper').css('z-index', reportbacks.length + 1);
      addPhotoLayer();
      setInterval(addPhotoLayer, 250);
    }
  });
});
