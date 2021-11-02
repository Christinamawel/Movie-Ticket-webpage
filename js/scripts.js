// business logic

function Ticket(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
  this.totalPrice = this.addPrice();
};

Ticket.prototype.addPrice = function() {
  let price = 20;
  if (this.age === "child") {
    price -= 4
  } else if (this.age === "senior") {
    price -= 3
  }

  if (this.time === 1) {
    price -= 5
  }

  if (this.movie !== "newest-marvel-movie") {
    price -= 3
  }
  return price;
};


// UI logic

$(document).ready(function() {
  $("form#movie-ticket-creator").submit(function(event) {
    event.preventDefault();
    const age = $("select#age-select option:selected").val();
    const time = parseInt($("input:radio[name=time]:checked").val());
    const movie = $("input:radio[name=time]:checked").parent().parent().attr('id');
    
    const ourTicket = new Ticket(movie, age, time);
    $("#output-div").text("$" + ourTicket.totalPrice);
  });
});

const answer1 = parseInt($("input:radio[name=question1]:checked").val());