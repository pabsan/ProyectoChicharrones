$(function () {
    $(".add").click(function () {
        var product = $(this).parent().parent().get(0).id
        if($("#"+ product +" #cantidad").val() > 0){
            addProd($("#"+ product +" .card-title").text(),$("#"+ product +" #cantidad").val(),$("#"+ product +" #precio").text())
        }else{
            alert("Debe elegir la cantidad.")
        }
    })

    function addProd(product, cantidad, precio){
        var row = $('tbody').children('tr').length
        $("#total").before("<tr>"+
        '<th scope="row">'+row+'</th>'+
        '<td>'+product+'</td>'+
        '<td>'+cantidad+'</td>'+
        '<td>'+cantidad*precio+'</td>'+
        '<td><button type="button" class="close" ><span>&times;</span></button></td>'+
        "</tr>")
        $('#precioTotal').text(parseInt($('#precioTotal').text())+parseInt(cantidad*precio))
    }

})