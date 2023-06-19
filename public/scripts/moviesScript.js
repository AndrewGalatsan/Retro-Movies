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


            <h3 class="showtime-heading" > Showtimes </h3>
            <label ><input   data-product-id="${item.id}  id="showtime-${
      item.id
    }" name="showtime" type="radio" value="12:00"></input>12:00 PM</label>

              
              <label><input   data-product-id="${item.id}  id="showtime-${
      item.id
    }" name="showtime" type="radio" value="3:00"></input>3:00 PM</label>
              
              
              <label><input   data-product-id="${item.id}  id="showtime-${
      item.id
    }" name="showtime" type="radio" value="6:00"></input>6:00 PM</label>
              
             
              <label> <input   data-product-id="${item.id}  id="showtime-${
      item.id
    }" name="showtime" type="radio" value="9:00"></input>9:00 PM</label>
           

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
              <button data-product-id="${
                item.id
              }" class="add-to-cart" type="button" class="btn btn-success">Add To Cart</button>
            </div>
          </div>
        </div>
      `;

    return $(stringifiedItems);
  };

  $.ajax({
    method: "GET",
    url: "/movies/1",
  }).done((res) => {
    let movieItems = res.templateVars;
    for (let item = 0; item < movieItems.length; item++) {
      const $movieItem = createMenuItemElement(movieItems[item]);
      $("#menu_item_main").append($movieItem);
    }
    $(".add-to-cart").click(function (event) {
      const movieID = $(this).data("product-id");
      console.log("movieID", movieID);
      const showtimeValue = $("input[name='showtime']:checked").val(); ;
      console.log("showTimevalue", $("input[name='showtime']:checked"));
      console.log("showTimevalue", showtimeValue);

      const movieItemObject = movieItems.find((item) => item.id === movieID);
      let qty = Number($(`.display[data-product-id='${movieID}']`).text());
      event.preventDefault();
      $.ajax({
        method: "POST",
        url: "/checkout",
        data: {
          item_id: movieID,
          qty: qty,
          price: movieItemObject.price,
          name: movieItemObject.name,
          image: movieItemObject.thumbnail_url,
          showtimes: showtimeValue,
        },
      });
    });
  });
});
