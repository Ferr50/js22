$(document).ready(function(){

    $("#btn").on("click", function() {
        const cep = $("#inputCEP").val();
        $.ajax({ url: `https://cep.awesomeapi.com.br/json/${cep}`})
        .done( (data) => {
            const lat = data.lat;
            const lng = data.lng;
            const srcCEP = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
            document.getElementById("iframeCEP").src = srcCEP;
            document.getElementById("tableCEP").style.display = "inline";
            $("#address").html("Endereço");
            $("#address-value").html(data.address);
            $("#cep").html("CEP");
            $("#cep-value").html(data.cep);
            $("#city").html("Cidade");
            $("#city-value").html(data.city);
            $("#ddd").html("DDD");
            $("#ddd-value").html(data.ddd);
            $("#district").html("Bairo");
            $("#district-value").html(data.district);
            $("#lat").html("Latitude");
            $("#lat-value").html(data.lat);
            $("#lng").html("Longitude");
            $("#lng-value").html(data.lng);
            $("#state").html("Estado");
            $("#state-value").html(data.state);
        })
        .catch(error => alert("CEP precisa ter 8 números e ser válido", error));;
    });



});