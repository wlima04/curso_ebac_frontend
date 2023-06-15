var input1 = document.getElementById('inpt1')
var input2 = document.getElementById('inpt2')
var res = document.getElementById('res')

function clicar() {
    event.preventDefault()

    var n1 = Number(input1.value)
    var n2 = Number(input2.value)

    if (n2 > n1) {
        res.innerHTML = 'OK'
    } else {
        res.innerHTML = 'ERROR'
    }

}