$(document).ready(function(){
  animations();
})

function animations(){
  //showmastercardgif
  $('.loader').html("<img src='https://d13yacurqjgara.cloudfront.net/users/99875/screenshots/1805070/more-drib.gif' alt='mastercard'>")

  function loading(){
    $('.loader').html("<br><br><div id='spinner'></div><br><br><p class='animatedText'>Listening for payment</p>")
  }
  setTimeout(loading, 7000);

  $(window).keypress(function(e) {
    if (e.which === 32) {
      $('.loader').html("<br><br><div id='spinner'></div><br><br><p class='animatedText'>TinyPay payment text received.</p>")

      $(window).keypress(function(e) {
        if (e.which === 32) {
          debugger;
          console.log("Im inside")
            $('.loader').html("<br><br><div id='spinner'></div><br><br><p class='animatedText'>Verifying Sender and Recipient</p>")

            $(window).keypress(function(e) {
              if (e.which === 32) {
              $('.loader').html("<p class='animatedText'>Verified Sender and Recipient</p><br><img src='https://d13yacurqjgara.cloudfront.net/users/799964/screenshots/3004653/5.1_cc_to_safe.gif' alt='verified sender and recipient'>")

              $(window).keypress(function(e) {
                if (e.which === 32) {
                  $('.loader').html("<br><br><div id='spinner'></div><br><br><p class='animatedText'>Asking user for payment amount... </p>")

                  $(window).keypress(function(e) {
                    if (e.which === 32) {
                      $('.loader').html("<br><br><div id='spinner'></div><br><br><p class='animatedText'>Waiting for user to reply with amount...</p>")

                      $(window).keypress(function(e) {
                        if (e.which === 32) {
                            $('.loader').html("<br><br><div id='spinner'></div><br><br><p class='animatedText'>Amount Received.</p>")

                            $(window).keypress(function(e) {
                              if (e.which === 32) {
                                $('.loader').html("<br><br><div id='spinner'></div><br><br><p class='animatedText'>Asking user to verify with PIN...</p>")

                                $(window).keypress(function(e) {
                                    if (e.which === 32) {
                                        $('.loader').html("<br><br><div id='spinner'></div><br><br><p class='animatedText'>Waiting for user to confirm verification with PIN...</p>")

                                        $(window).keypress(function(e) {
                                          if (e.which === 32) {
                                            $('.loader').html("<br><br><div id='spinner'></div><br><br><p class='animatedText'>PIN received.</p>")
                                            $(window).keypress(function(e) {
                                            if (e.which === 32) {
                                              $('.loader').html("<br><br><div id='spinner'></div><br><br><p class='animatedText'>Verifying user with PIN.</p>")
                                              $(window).keypress(function(e) {
                                                if (e.which === 32) {
                                                  $('.loader').html("<img src='https://d13yacurqjgara.cloudfront.net/users/159981/screenshots/2345952/vcn.gif' alt='send'><br><p class='animatedText'>User verified.</p>")
                                                  $(window).keypress(function(e) {
                                                    if (e.which === 32) {
                                                      $('.loader').html("<img src='https://d13yacurqjgara.cloudfront.net/users/486050/screenshots/2832783/seamless-payments.gif' alt='send'><br><br><p class='animatedText'>Processing payment</p>")
                                                    }
                                                    $(window).keypress(function(e) {
                                                      if (e.which === 32) {
                                                        $('.loader').html("<img src='https://d13yacurqjgara.cloudfront.net/users/760333/screenshots/2123456/lipco.gif' alt='send'><br><br><p class='animatedText'>Payment Complete!</p>")
                                                      }
                                                    })
                                                    }
                                                  })
                                                }
                                              })
                                            }
                                          })

                                          }
                                        })
                                    }
                                  })
                              }
                            })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })


}
