(function() {
    "use strict";
    var modal, loader;

    document.addEventListener("DOMContentLoaded", function() {
        commentInputButtonEvent();
        initModal();
        initLoader();
    });

    function commentInputButtonEvent() {

        $('#comment-input-button').on("click", function() {
            var formDataArray = $('#comment-input-form').serializeArray(),
                data = {},isValid;

            formDataArray.reduce((object, formData) => {
                object[formData.name] = formData.value;
                return object;
            }, data);

            isValid = areRequiredInputsValid("#comment-input-form input, textarea", data);

            if (isValid) {
                openLoader();

                $.ajax({
                    type: "POST",
                    url: "https://quilombodrivdevmessages-labsjs.rhcloud.com/post/comment",
                    contentType: "application/x-www-form-urlencoded",
                    json: true,
                    data: data,
                    success: function(data) {
                        closeLoader();
                        openModal("Gracias! Su mensaje sera aprobado en unos minutos");
                    },
                    error: function(data) {
                        closeLoader();
                        openModal("Error al recibir el mensaje");
                    }
                });
            } else {
                openModal("Complete todos los campos");
            }

        });
    };

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };

    function areRequiredInputsValid(formElement, data) {
        var requiredInputs = $(formElement).filter('[required]').toArray(),
            fieldName;

        return requiredInputs.every(function(field) {
            fieldName = field["name"];

            if (fieldName == -"email") {
                return isEmail(data[fieldName]);
            }

            return data[fieldName].length > 0;
        });
    };

    // --------- MODAL
    function initModal(){
        modal = document.getElementById('modal');
    }

    function openModal(message){
        document.getElementById('modal-body-text').innerHTML = message;
        showModal(true);
    };

    function closeModal(){
        showModal(false);
    };

    function showModal(bool){
        modal.classList.toggle('modal-visible',bool);
        modal.classList.toggle('modal-hidden',!bool);
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event){
        if (event.target == modal){
            closeModal()
        }
    };

    // ----- LOADER
    function initLoader(){
        loader = document.getElementById('loader');
    }

    function openLoader(){
        showLoader(true);
    };

    function closeLoader(){
        showLoader(false);
    };

    function showLoader(bool){
        loader.classList.toggle('loader--visible',bool);
        loader.classList.toggle('loader--hidden',!bool);
    };

})();
