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
        '<td><button type="button" class="close" onclick=deleteProduct(this) ><span>&times;</span></button></td>'+
        "</tr>")
        $('#precioTotal').text(parseInt($('#precioTotal').text())+parseInt(cantidad*precio))
    }

    function deleteProduct (tr){
        $(tr).closest('tr').remove();
        console.log("here");
    }


    $(".requestOrder").click(function () {
        var row = $('tbody').children('tr').length;
        var msj = "";
        var i = 0;
        //this is to remove the last row as it is total
        row = row - 1;
        console.log(row);
        if (row > 0){
            $('table > tbody  > tr').each(function(index, tr) {
                console.log(i);
                console.log(row);
                var $cell = $(tr).find('td'),
                    product = $cell.eq(0).text(),
                    quantity = $cell.eq(1).text(),
                    price = $cell.eq(2).text();
                if (i == row){
                    msj += product + "%20-%20" + quantity + "%20"
                }else{
                    msj += product + "%20-%20Cantidad%20" + quantity + "%20-%20Subtotal%20" + price + "%0A"
                }
                i += 1;
             });
             var url = 'https://api.whatsapp.com/send?phone=50686656919&text=' + msj;
             //console.log(url);
             openInNewTab(url);
        }else{
            alert("Debe al menos elegir un producto")
        }

    })
    
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
      }

})