document.querySelector('#submit').addEventListener('click',function(){

    let nombre = document.querySelector('#nome').value;
    let botella = document.querySelector('#lanche').value;
    let direccion = document.querySelector('#endereco').value;
    let fecha = document.querySelector('#info').value;
    let hentrega = document.querySelector('#entrega').value;
    let telefono = document.querySelector('#telefone').value;


    let url = " SISTEMA DE PEDIDOS*%0A%0A*nome(s): *%0A" + nome +  "%0A*Lanche desejado: *%0A" + lanche + "%0A*Endereco de entrega: *%0A" + endereco + "%0A*informacoes do pedido: *%0A" + info + "%0A*hora de entrega desejada: *%0A" + entrega  + "%0A*telefone: *%0A" + telefone;
    window.open(url);

});