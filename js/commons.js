(function() {
    "use strict";
    var modal, loader, navMobile;

    document.addEventListener("DOMContentLoaded", function() {
        commentInputButtonEvent();
        initModal();
        initLoader();
        initNavMobile();
    });

    function commentInputButtonEvent() {

        $('#comment-input-button').on("click", function() {
            var formDataArray = $('#comment-input-form').serializeArray(),
                data = {},
                isValid;

            formDataArray.reduce(function(object, formData) {
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
    function initModal() {
        modal = document.getElementById('modal');
        initCloseButton('modal-content-header-close', function() {
            closeModal();
        });
    }

    function initCloseButton(id, closeCallback) {
        var closeButton;

        closeButton = document.getElementById(id);
        closeButton.addEventListener('click', function() {
            closeCallback.call();
        });
    }

    function openModal(message) {
        document.getElementById('modal-content-body-text').innerHTML = message;
        showModal(true);
    };

    function closeModal() {
        showModal(false);
    };

    function showModal(bool) {
        modal.classList.toggle('modal-visible', bool);
        modal.classList.toggle('modal-hidden', !bool);
    };


    window.addEventListener('touchstart', function(event) {
        if (event.target == modal) {
            closeModal();
        }
        if (event.target == navMobile) {
            toggleMenu()
        }
    });

    // ----- LOADER
    function initLoader() {
        loader = document.getElementById('loader');
    }

    function openLoader() {
        showLoader(true);
    };

    function closeLoader() {
        showLoader(false);
    };

    function showLoader(bool) {
        loader.classList.toggle('loader--visible', bool);
        loader.classList.toggle('loader--hidden', !bool);
    };

    // navigation
    function initNavMobile() {
        navMobile = document.getElementById('header-nav-mobile-menu');
        initHamburgerButton();
        initCloseNavMobile();
    }

    function initCloseNavMobile() {
        initCloseButton('header-nav-mobile-menu-item-close', function() {
            toggleMenu();
        });
    }

    function initHamburgerButton() {
        var button;

        button = document.getElementById('header-nav-mobile-top-hamburger');
        button.addEventListener('click', function() {
            toggleMenu();
        });
    }

    function toggleMenu() {
        navMobile.classList.toggle('header__nav__mobile__menu--open');
    }

})();
