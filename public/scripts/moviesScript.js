//when called increments quantity amount
function incNumber(item_id) {
  let myDisplay = $(`.display[data-product-id='${item_id}']`);
  let oldNumber = myDisplay.text();
  let newNumber = Number(oldNumber) + 1;

  myDisplay.text(newNumber);
}

//when called decrements quantity amount
function decNumber(item_id) {
  let myDisplay = $(`.display[data-product-id='${item_id}']`);
  let oldNumber = myDisplay.text();
  let newNumber = Number(oldNumber) - 1;
  if (newNumber < 0) {
    newNumber = 0;
  }
  myDisplay.text(newNumber);
}

$(() => {

  const createMenuItemElement = function (item) {

    const stringifiedItems = `
        <div class="menu_display">
          <img  class="user" src="${item.thumbnail_url}">
          <div class="menu-info-and-button">
            <div class="menu_info">
              <p class="item-name">${item.name}</p>
              <p class="item-description">${item.description}</p>
              <p class="item-description">${item.year}</p>
              <p class="item-price">$ ${item.price / 100}</p>
              <input data-product-id="${item.id}" class="showtime-${item.id}" name="showtime" type="text" placeholder="showtime">${item.showtimes}</input>
            </div >
            <div class="menu_change">
              <div class="item_amount">
              <input type="button" value="+" class="inc" onclick="incNumber(${
                item.id
              })"/>
              <label class="display" data-product-id="${item.id}">0</label>
              <input type="button" value="-" class="dec" onclick="decNumber(${
                item.id
              })"/>
              </div>
              <button data-product-id="${item.id}" class="add-to-cart" type="button" class="btn btn-success">Add To Cart</button>
            </div>
          </div>
        </div>
      `;

    return $(stringifiedItems);
  };


  $.ajax({
    method: "GET",
    url: "/movies/1"
  })
    .done(res => {
    let movieItems = res.templateVars;
    for (let item = 0; item < movieItems.length; item++) {
        const $movieItem = createMenuItemElement(movieItems[item]);
        $('#menu_item_main').append($movieItem);
    }
      $(".add-to-cart").click(function (event) {
        console.log("this", this);
        const movieID = $(this).data("product-id");
        const showtimeValue = $(`.showtime-${movieID}`).val();

      const movieItemObject = movieItems.find(item => item.id === movieID);
      let qty = Number(($(`.display[data-product-id='${movieID}']`)).text());
      event.preventDefault();
      $.ajax({
        method: 'POST',
        url: '/checkout',
        data: { item_id: movieID, qty: qty, price: movieItemObject.price, name: movieItemObject.name, image:movieItemObject.thumbnail_url, showtimes: showtimeValue }
      })

    });
  });
});
