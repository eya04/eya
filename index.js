
function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  var id = generateID();
  var clothesData=[
    {
      "id": id(),
      "name": "robe",
      "price": 120,
      "category": "women",
      "categoryArticle":"clothes",
      "image": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19473744/2022/9/13/5b4fc687-b93b-4141-aeb6-1bd82db75e671663054576612-Antheaa-Women-Dresses-631663054576038-1.jpg"
    },
    {
        "id": id(),
        "name": "Floral Sundress",
        "price": 99,
        "category":"women",
        "categoryArticle":"clothes",
        "image": "https://m.media-amazon.com/images/I/71iCl+YyRdL._AC_UY350_.jpg"
      },
      {
        "id": id(),
        "name": "Black Leather Jacket",
        "price": 90,
        "category": "men",
        "categoryArticle":"clothes",
        "image": "https://thursdayboots.com/cdn/shop/products/1024x1024-Moto-Black-020122-1.jpg?v=1643761841"
      },
      {
        "id": id(),
        "name": "Slim Fit Jeans",
        "price": 60,
        "category": "men",
        "categoryArticle":"clothes",
        "image": "https://www.youngla.com/cdn/shop/products/323A6390_1024x.jpg?v=1669087509"
      },
      {
        "id": id(),
        "name": "caron",
        "price":100,
        "category": "men",
        "categoryArticle":"parfum",
        "image": "https://www.parfumscaron.com/cdn/shop/files/FICHEPRODUIT_891a750c-c67f-42cf-8ad5-39ea9fc1bc7d_2690x.jpg?v=1690903415"
      },
      {
        "id": id(),
        "name": "sauvage",
        "price": 105,
        "category": "men",
        "categoryArticle":"parfum",
        "image": "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/en_US/dw57ed2a95/Y0998004/Y0998004_E05_ZHC.jpg?sw=400&sh=432"
      },
      
      {
        "id": id(),
        "name": "Myway",
        "price": 90,
        "category": "women",
        "categoryArticle":"parfum",
        "image": "https://www.fatales.tn/89261-large_default/armani-my-way-eau-de-parfum.jpg"
      },
      {
        "id":id(),
        "name": "idole",
        "price": 95,
        "category": "women",
        "categoryArticle":"parfum",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFGDsDQ-pa9VLZ77VugU0_8lSMVH8jE1D0dGYBbs&s"
      },
      {
        "id": id(),
        "name": "sunglasses",
        "price": 110,
        "category": "men",
        "categoryArticle":"accesoire",
        "image": "https://assets.oakley.com/is/image/OakleyEYE/700285554686_frogskins_polished-black-grey_main_010.png?impolicy=SEO_4x3"
      },
      {
        "id": id(),
        "name": "ring",
        "price": 999,
        "category": "women",
        "categoryArticle":"accesoire",
        "image": "https://sukkhi.com/cdn/shop/products/SKR108374_2000x.jpg?v=1661427630"
      },
      {
        "id": id(),
        "name": "Scarf",
        "price": 29,
        "category": "women",
        "categoryArticle":"accesoire",
        "image": "https://imagescdn.simons.ca/images/2270-191743-12-A1_3/xl-cashmere-and-wool-scarf.jpg?__=18"
      },
      {
        "id": id(),
        "name": "cap",
        "price": 18,
        "category": "men",
        "categoryArticle":"accesoire",
        "image": "https://m.media-amazon.com/images/I/51eR21+Xd+L._AC_UY1100_.jpg"
      },
      {
        "id": id(),
        "name": "Purse",
        "price": 15.99,
        "category": "men",
        "categoryArticle":"accesoire",
        "image": "https://rukminim1.flixcart.com/image/300/300/xif0q/wallet-card-wallet/a/k/w/kyle-1-4-5-ubf130blr1037-8-wallet-urban-forest-3-7-original-imagkcafzqmde8gb.jpeg"
      }
     
    ]
    ////////////////////////////////
    function showData(){
        each(clothesData,function(element,i){
        $(".list").append(`<div class="listone"><img class="img" src=${element.image} ><div id="name"><div>${element.name}</div><div>${element.price}$</div><div>category: ${element.category}</div>div>categoryArticle: ${element.categoryArticle} </div></div><div>`)
      })
    }
    showData()






































    


    function each(array, func) { 
        for (var i = 0; i < array.length; i++) { 
              func(array[i], i); 
        } 
      }
      
      function map(array, f) { 
        var acc = []; 
        each(array, function(element, i) { 
              acc.push(f(element, i)); 
        }); 
        return acc; 
      }
      
      function filter(array, predicate) {
      var acc = [];
      each(array, function (element, index) {
       // notice we added the index here
       if (predicate(element, index)) {
         // notice we added the index here
         acc.push(element);
       }
      });
      return acc;
      }
      
      function reduce(array, f, acc) {
      if (acc === undefined) {
       acc = array[0];
       array = array.slice(1);
      }
      each(array, function (element, i) {
       acc = f(acc, element, i);
      });
      return acc;
      }

var counter=0
var initial=$('#test')
initial.on('click',function(){
  counter++
$('#test')[0].src=item1.images[counter]
  if(counter===item1.images.length-1){
    counter=-1
  }
})
