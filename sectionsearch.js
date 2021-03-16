$("*", document.body).click(function (event) { 
    event.stopPropagation(); 
    var domElement = $(this).get(0); 
    $("h3:first").text(domElement.parentNode.parentElement.className); 
}); 