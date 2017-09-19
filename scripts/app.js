(function(){
 var app = angular.module('store', [ ]);
 
 app.controller('StoreController', function(){
     this.products = gems


 });
 
var gems = 
[
    
{
 name: 'Dodecahedron',
 price: 2.95,
 description: 'this is a gem',
 canPurchase: true,
 soldOut:false,
},

{
    name:'Alchemite',
    price: 3.95,
    description: 'this is another gem',
    canPurchase: true,
    soldOut: true
    
}

]

})();

 