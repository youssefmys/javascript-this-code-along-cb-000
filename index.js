const app = "I don't do much."

var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles",
  name: "peanut butter and jelly",
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

pbj.serve() ;


//function Sandwich(bread, ingredients, cut) {
//  this.bread = bread;
//  this.ingredients = ingredients;
//  this.cut = cut;
//}


//function serve(customer) {
//  console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
//}

function serve(){
  if(arguments.length > 0) {
    var customers = Array.prototype.slice.call(arguments) ;
    var last = customers.pop();
    console.log(this.name + " for " + customers.join(', ') + ' and ' + last + ".Enjoy!") ;
  } else {
    console.log(this.name + ' order up!')
  }
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

gc.name = 'Grilled Cheese'
pbj.name = "PBJ"

serve.call(gc, 'Terry');
serve.call(pbj, 'Jesse');


serve.apply(gc, ["Terry"]);
serve.apply(pbj, ["Jesse"]);

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

//deliverFood.call(gc, "Terry", "4");
//deliverFood.apply(pbj, ["Jesse", "15"]);

serve.call(gc);
serve.apply(pbj, ["Terry", "Tom", "Tabitha"]);

function Sandwich(bread, ingredients, name){
  this.bread = bread ;
  this.ingredients = ingredients ;
  this.name = name ;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(', ') + ". Yum!") ;
  }
}

pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");
pbj.describe() ;

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

pbj.describe.call(salad)

var describeSalad = pbj.describe.bind(salad);
describeSalad()

salad.describe = pbj.describe.bind(salad)

salad.describe() ;

function visitCustomer() {
  console.log('visiting ' + this.name + ' at table ' + this.table);
}

var customer = {
  name: 'Salley' ,
  table: 4
}

var visitSalley = visitCustomer.bind(customer)

visitSalley() ; 
