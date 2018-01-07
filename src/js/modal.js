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
