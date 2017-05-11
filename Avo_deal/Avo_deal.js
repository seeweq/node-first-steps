module.exports = function() {
    var aDeal = '1 for R3, 2 for R7, 3 for R10, 5 for R14.50'
    var splitDeal = aDeal.split(", ")
    console.log(splitDeal);
    return splitDeal,

    function avoPrices(stringPrice){
      var Allprice = stringPrice.split(' for ')
      var qty = Number(Allprice[0])
      var price = Number(Allprice[i].replace('R',''))
    }();
}();
