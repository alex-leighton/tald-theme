$( document ).ready(function() {
    $('#btnAddItem').on("click", function() {
        var newItem = $('input').val();
        $('ul').append('<li>'+ newItem +'</li>');
        console.log('DUn dun dun');
    });

    $('input#addItem').on("click", function() {
        $('input#addItem').val('');
    });

    $('#editTitle').on("click", function() {
        $('.popup').addClass('show');
    });

    $('.btnClose').on("click", function() {
        $('.popup').removeClass('show');
    });

    $('#btnChangeName').on("click", function() {
        $('h3').html($('#changeListName').val());
    });

});