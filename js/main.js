/*
 Scripts using jQuery.
 */
$(function () {
    // Expand/Collapse sub-menus
    $('#journalMenu').on('click', "ul li a", function () {
        var subMenus = $(this).parent().find('ul');
        if (subMenus.length > 0) {
            subMenus.slideToggle(500);
        }
        return false;
    });

    // validation to search box
    $("#searchForm").on("submit", function() {
        var inp = $("#searchInput");
        var inputLength = inp.val().length;

        if(inputLength == 0) {
            inp.addClass("error");
            alert("Please enter a search term");
            return false;
        }

        if(inputLength == 1) {
            inp.addClass("error");
            alert("Search terms should be more than 1 character long");
            return false;
        }
        return true;
    });
    return false;
});

/*
 Alternative scripts without jQuery.
 */
/*
function preventDefaultEvent (e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

function initMenuExpander(menuId) {
    var li, a, i, length, listItem;
    var ul = document.getElementById(menuId);

    for (i = 0, length = ul.childNodes.length; i < length; i++) {
        listItem = ul.childNodes[i];
        if (listItem.nodeType == 1 && listItem.tagName.toLowerCase() == "li") {
            a = listItem.firstChild;
            if (a) {
                if (a.addEventListener) {
                    a.addEventListener("click", expandMenu, false);
                } else if (a.attachEvent) {
                    a.attachEvent("onclick", expandMenu);
                }
            }
        }
    }

    function expandMenu(e) {
        var target, li;
        e = e || window.event;
        target = e.target || e.srcElement;
        li = target.parentNode;
        if (li.getAttribute('class') != null && li.getAttribute('class') == 'active') {
            li.removeAttribute('class');
        } else {
            li.setAttribute('class', 'active');
        }
        preventDefaultEvent(e);
        return false;
    }
}

function initFormValidator(formId) {
    var i, input, length, searchInput, submitButton;

    var form = document.getElementById(formId);
    var inputs = form.getElementsByTagName("input");
    for (i = 0, length = inputs.length; i < length; i++) {
        input = inputs[i];
        if (input.getAttribute("type") != null) {
            switch (input.getAttribute("type")) {
                case "submit":
                    submitButton = input;
                    break;
                case "text":
                    searchInput = input;
                    break;
            }
        }
    }
    if (searchInput && submitButton) {
        if (submitButton.addEventListener) {
            submitButton.addEventListener("click", validateSearchInput, false);
        } else if (submitButton.attachEvent) {
            submitButton.attachEvent("onclick", validateSearchInput);
        }
    }

    function validateSearchInput(e) {
        e = e || window.event;
        if (searchInput.value.length == 0) {
            searchInput.setAttribute('class', 'error');
            alert("Please enter a search term");
            preventDefaultEvent(e);
            return false;
        }
        if (searchInput.value.length == 1) {
            searchInput.setAttribute('class', 'error');
            alert("Search terms should be more than 1 character long");
            preventDefaultEvent(e);
            return false;
        }
        return true;
    }
}

window.onload = function() {
    initFormValidator("searchForm");
    initMenuExpander("menuList");
};
*/