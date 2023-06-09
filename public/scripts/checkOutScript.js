let itemInfo = {};
let subTotalPrice = 0;
let totalPrice = 0;

//once called function will increase quantity by 1 and the equivalent price wise.
function incNumber(item_name) {
  let myDisplay = $(`.display[data-product-id='${item_name}']`);
  let oldNumber = myDisplay.text();
  let newNumber = Number(oldNumber) + 1;
  myDisplay.text(newNumber);
  itemInfo[item_name].qty = newNumber;
  subTotalPrice += (Number(itemInfo[item_name].price));

  $("#subtotalprice").text(`$${(subTotalPrice / 100).toFixed(2)}`);
  $("#totalprice").text(`$${((Math.round(subTotalPrice * 1.12)) / 100).toFixed(2)}`);
}


//once called function will decrease quantity by 1 and the equivalent price wise.
function decNumber(item_name) {
  let myDisplay = $(`.display[data-product-id='${item_name}']`);
  let oldNumber = myDisplay.text();
  let newNumber = Number(oldNumber) - 1;
  itemInfo[item_name].qty = newNumber;
  if (newNumber < 0) {
    newNumber = 0;
  }
  myDisplay.text(newNumber);
  if (itemInfo[item_name].qty > -1) {
    subTotalPrice -= (Number(itemInfo[item_name].price));
  }
  $("#subtotalprice").text(`$${(subTotalPrice / 100).toFixed(2)}`);
  $("#totalprice").text(`$${((Math.round(subTotalPrice * 1.12)) / 100).toFixed(2)}`);
}


$(() => {
  //when click listener is heard on "+" button, incNumber() will be called for specific item.
  $('#items_selected').on('click', '.inc', function () {
    const productId = $(this).siblings('.display').data('productId')

    console.log(itemInfo)
    incNumber(productId)
  })

  //when click listener is heard on "-" button, incNumber() will be called for specific item.
  $('#items_selected').on('click', '.dec', function () {
    const productId = $(this).siblings('.display').data('productId')
    decNumber(productId)
  })



  const createCheckoutItemElement = function (item) {

    const stringifiedItems =
      `
      <li class="col-md-4">
        <figure class="itemside mb-3">
          <div class="aside"><img src="${item.image}" class="img-sm border"></div>
          <figcaption class="info align-self-center">
            <p class="title">${item.name}<br></p> <span class="text-muted">$${(item.price / 100)}</span>
            <p class="showtime">${item.showtimes}</p>
            <input type="button" value="+" class="inc"/>
            <label class="display" data-product-id="${item.name}" id="${item.name}">${item.qty}</label>
            <input type="button" value="-" class="dec"/>
          </figcaption>
        </figure>
      </li>
    `;


    return $(stringifiedItems);
  };


  //Getting selected items from checkout.js, which were originally selected in the menu page.
  $.ajax({
    method: "GET",
    url: "/checkout/1"
  })
    .done(res => {
      // Adding items to .ejs file.
      let checkoutItems = res.movieItems;
      for (let item in checkoutItems) {
        const $checkoutItem = createCheckoutItemElement(checkoutItems[item]);
          $('#items_selected').append($checkoutItem);
          let currentItem = checkoutItems[item].name
          itemInfo[currentItem] = {};
          itemInfo[currentItem].id = checkoutItems[item].id;
          itemInfo[currentItem].qty = checkoutItems[item].qty;
          itemInfo[currentItem].name = checkoutItems[item].name;
          itemInfo[currentItem].price = checkoutItems[item].price;
          itemInfo[currentItem].image = checkoutItems[item].image;
          itemInfo[currentItem].showtimes = checkoutItems[item].showtimes;
      }
      //calculate total cost from initial choices made in the menu page
      for (let item in itemInfo) {
        subTotalPrice += (itemInfo[item].price * itemInfo[item].qty);
      }
      $("#subtotalprice").text(`$${(subTotalPrice / 100).toFixed(2)}`);
      $("#totalprice").text(`$${((Math.round(subTotalPrice * 1.12)) / 100).toFixed(2)}`);


      $("#place-order").click(function (event) {
        event.preventDefault();
        let customerName = $('#pickUpName').val()
        let customerPhone = $('#phone').val()

        if ($('#pickUpName').val().length === 0  || $('#phone').val().length == 0) {
          alert("Please fill out Name and Phone number.")
        } else {
          $.ajax({
          method: 'POST',
          url: '/confirmation',
          data: { itemInfo, subTotalPrice, customerName, customerPhone }
          })
          .done(() => {
          window.location.replace("/confirmation")
          })
        }
      });

    });
});
