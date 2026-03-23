$(function () {
  const MAX_LENGTH = 140
  $(".alert").hide()

  const updateCountAndAlert = function () {
    const inputLength = $("#humming").val().length
    const remaining = MAX_LENGTH - inputLength
    $(".count").text(remaining)
    $(".count").toggleClass("is-limit", remaining <= 0)

    if (inputLength > MAX_LENGTH) {
      $(".alert").text("max number of text is 140!!").show()
      return false
    }

    $(".alert").text("").hide()
    return true
  }

  updateCountAndAlert()

  $("#humming").on("input", function () {
    updateCountAndAlert()
  })

  $("form").on("submit", function (event) {
    event.preventDefault()

    const inputValue = $("#humming").val().trim()
    if (!inputValue) {
      $(".alert").text("Please write what you are humming about!!").show()
      return
    }

    if (!updateCountAndAlert()) {
      return
    }

    $(".alert").text("").hide()
    $("<p></p>").addClass("humming-text").text(inputValue).insertAfter(this)
    $("#humming").val("")
    updateCountAndAlert()
  })
})
