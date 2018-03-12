const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(event) {
    console.log(event.which)
    const key = parseInt(event.detail || event.which);
    if (key === code[index]) {
      console.log(key)
      index++;
      if (index === code.length) {
        alert("Good work!");
        index = 0;
      }
      } else {
        index = 0;
      }
    })


}
init()
