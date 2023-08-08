$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: '<h4 class="msg-red">Por favor, insira seu nome</h4>',
            email: '<h4 class="msg-red">Por favor, insira seu email</h4>',
            telefone:'<h4 class="msg-red">Por favor, insira seu telefone</h4>',
            cpf: '<h4 class="msg-red">Por favor, insira seu cpf</h4>',
            endereço: '<h4 class="msg-red">Por favor, insira seu endereço</h4>',
            cep: '<h4 class="msg-red">Por favor, insira seu cep</h4>'
        }
    })
})