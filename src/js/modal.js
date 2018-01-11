/* global jQuery */

;(function ($) {
  var toggle = $('.statToggle')
  var modal = $('.modal')
  var overlay = $('.overlay')

  function closeModal () {
    modal.removeClass('is-active')
    overlay.removeClass('is-active')
  }

  toggle.on('click', function () {
    var nameID = ($(this).attr('id')).replace('toggle_', '')    // toggle_X
    var modal = $('#modal_' + nameID)                           // modal_X
    var modalClose = $('.close', modal)

    modal.addClass('is-active')
    overlay.addClass('is-active')

    modalClose.on('click', closeModal)
  })

  overlay.on('click', closeModal)

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      closeModal()
    }
  })
})(jQuery)
