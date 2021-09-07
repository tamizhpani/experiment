/*(function ($) {
    "use strict";
    [ Validate ]
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(e){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(subject).val().trim() == ''){
            showValidate(subject);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }
        if(!check)
            return false;

        e.preventDefault();
      
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxuSCQS7maeU-2N3E7T0fgqGlby5bGOEmLSvmh2/exec",
            method: "POST",
            dataType: "json",
            data: $(".contact1-form").serialize(),
            success: function(response) {
                
                if(response.result == "success") {
                    $('.contact1-form')[0].reset();
                    alert('Thank you for contacting us.');
                    return true;
                }
                else {
                    alert("Something went wrong. Please try again.")
                }
            },
            error: function() {
                
                alert("Something went wrong. Please try again.")
            }
        })
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);*/
window.addEventListener( "load", function () {
  function sendData() {
		alert("in send data");
    
    let url = "https://script.google.com/macros/s/AKfycbwgzc4yVdqNcQ6aJ0W9uPAnc-fcg8csqi5uIBA6qXr0sVrrMnucQvkdJp--gl5GOk7B/exec";
    // disable default action
    event.preventDefault();

    // configure a request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    // prepare form data
    let data = new FormData(form);

    // set headers
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    	// url encode form data for sending as post data
	var encoded = Object.keys(data).map(function(k) {
		return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
	}).join('&')
    // send request
    xhr.send(encoded);

    // listen for `load` event
    xhr.onload = () => {
        console.log(xhr.responseText);
    }
		xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.responseText);
          if (xhr.status === 200) {
             console.log('successful');
          } else {
             console.log('failed');
          }
      }
    }
  }

  // Access the form element...
  const form = document.getElementById( "myForm" );

  // ...and take over its submit event.
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();
    sendData();
  } );
} );
