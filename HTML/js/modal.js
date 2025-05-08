/*jslint browser*/
/*global window*/
(function iife() {
    "use strict";
    function closestEl(el, selector) {
        var doc = el.document || el.ownerDocument;
        var matches = doc.querySelectorAll(selector);
        var i;
        while (el) {
            i = matches.length - 1;
            while (i >= 0) {
                if (matches.item(i) === el) {
                    return el;
                }
                i -= 1;
            }
            el = el.parentElement;
        }
        return el;
    }

     function getOffset(el) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
    } 
    

    var modalBtns = document.querySelectorAll(".button");

    modalBtns.forEach(function addBtnClickEvent(btn) {

        btn.onclick = function showModal() {

            if ( window.location !== window.parent.location ) {
                // The page is in an iframe
                var modal = btn.getAttribute("data-modal");

                document.getElementById(modal).style.display = "block";
                document.getElementById(modal).style.setProperty('padding-top', '' + (getOffset(btn).top - 200)+ 'px');

            } else {
              // The page is not in an iframe
              var modal = btn.getAttribute("data-modal");
              document.getElementById(modal).style.display = "block";
              

            }

            //var modal = btn.getAttribute("data-modal");
            /*var bodyRect = document.body.getBoundingClientRect(),
            elemRect = btn.getBoundingClientRect(),
            offset   = elemRect.top - bodyRect.top; */

            //document.getElementById(modal).style.display = "block";
            //document.getElementById(modal).style.setProperty('padding-top', '' + (getOffset(btn).top - 200)+ 'px');

            /*console.log(getOffset(btn).top);
            console.log(getOffset(btn).left);
            console.log("padding-top: " + getComputedStyle(document.getElementById(modal)).getPropertyValue('padding-top'));
            console.log('left: ' + getComputedStyle(document.getElementById(modal)).getPropertyValue('left'));*/
        };

    });

    var closeBtns = document.querySelectorAll(".close");
    closeBtns.forEach(function addCloseClickEvent(btn) {
        btn.onclick = function closeModal() {
            var modal = closestEl(btn, ".modal");
            modal.style.display = "none";
        };
    });

    window.onclick = function closeOnClick(event) {
        if (event.target.className === "modal") {
            event.target.style.display = "none";
        }
    };
}());