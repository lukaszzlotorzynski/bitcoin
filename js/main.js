$(document).ready(function () {

    function getBitCoinData() {
        var buyPrice = $('#buy-price').html();
        var sellPrice = $('#sell-price').html();

        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            $('#buy-price').text(data.PLN.buy.toFixed(2) + data.PLN.symbol);
            $('#sell-price').text(data.PLN.sell.toFixed(2) + data.PLN.symbol);

            if (buyPrice > data.PLN.buy.toFixed(2) + data.PLN.symbol) {
                $('#buy-arrow').removeClass().addClass('fas fa-caret-square-down');
            } else if (buyPrice < data.PLN.buy.toFixed(2) + data.PLN.symbol) {
                $('#buy-arrow').removeClass().addClass('fas fa-caret-square-up');

            } else {
                $('#buy-arrow').removeClass().addClass('fas fa-minus-square');
            }

        })
    };

    getBitCoinData();

    setInterval(getBitCoinData, 3000);
})