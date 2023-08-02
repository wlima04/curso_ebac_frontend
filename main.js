$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault()
        
        const tarefa = $('#inptText').val()
        const novaLi = $(`<li>${tarefa}</li>`)
        $(novaLi).appendTo('ul')
    
        $('#inptText').val('')
        $('#inptText').focus()
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('tarefa-concluida')
    })
})