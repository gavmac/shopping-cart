/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 9
   Case Problem 3


   Author: Gavin Macken  
   Date: 2 May `15    

   Filename: orders.js


   Functions List:

  addOrder()
      Adds an order to the user's shopping cart using the entries in the
      completed order form.
*/


addEvent(window, "load", setupOrders, false) 

function setupOrders () {
   // Add event handler to submit button
   document.getElementById("submitButton").onclick = addOrder;
}

function addOrder() {
   var expiryDate = new Date();
   expiryDate.setHours(expiryDate.getHours() + 48);

   var itemCount = 1;

   if  (document.cookie)  {

      var  cookiesName =  document.cookie.split(";  ");
      for  (var  i  =  0;  i  <  cookiesName.length;  i++)  {
         var cartItemNumber;
         
         if (cookiesName[i].slice(0,8) == "cartItem") { 
        
              cartItemNumber = parseInt(cookiesName[i].slice(8));

              itemCount = cartItemNumber + 1;
            
               } 
      }

   var newItem = "cartItem" + itemCount;

   setCookie(newItem, "", expiryDate);

   var fieldItem = document.forms[0].product.value;//get product value

   var fieldValue = document.forms[0].price.value; //get price value

   setField(newItem, fieldItem, fieldValue, expiryDate);
  

   var allSelects = document.getElementsByTagName("select");

   for(var i = 0; i < allSelects.length; i++) {
      setField(newItem, allSelects[i].options[allSelects[i].selectedIndex].text, expiryDate);
   }

   alert(getField(newItem, "quantity") + " " + getField(newItem, "product") + " added to your shopping cart.");
}
}



