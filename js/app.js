/* global $ */

var ctx = $('#myChart')

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1/12/17', '2/12/17', '3/12/17', '4/12/17', '5/12/17', '6/12/17', '7/12/17'],

    datasets: [{
      label: '',
      data: [12, 19, 3, 5, 2, 3, 17],
      backgroundColor: [
        'rgba(254,213,0, 0.20)'
      ],
      borderColor: [
        'rgba(254,213,0,1)'
      ],
      borderWidth: 4
    }]
  },
  options: {
    title: {
      display: false
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 5
        },
        gridLines: {
          display: true,
          color: 'rgba(242,246,249,1)'
        }

      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
})
/* global jQuery */

;(function ($) {
  var toggle = $('.statToggle')
  var close = $('.close')
  var modal = $('.modal')
  var overlay = $('.overlay')

  var closeModal = function () {
    modal.removeClass('is-active')
    overlay.removeClass('is-active')
  }

  toggle.on('click', function () {
    modal.addClass('is-active')
    overlay.addClass('is-active')
  })

  close.on('click', closeModal)
  overlay.on('click', closeModal)

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      modal.removeClass('is-active')
      overlay.removeClass('is-active')
    }
  })
})(jQuery)

//# sourceMappingURL=app.js.map
