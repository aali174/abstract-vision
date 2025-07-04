const allSliderGroups = document.querySelectorAll('.slider-group');

allSliderGroups.forEach((group)=>{
  const button = group.querySelector('button');
  button.addEventListener('click', () => {
    group.classList.toggle('paused');
  })
});

var url = "https://api.apify.com/v1/pZSbY6wdu7qahGcKe/crawlers/GsFuHT4H22EozSLPq/lastExec/results?token=JX2umjs4p5Yk2Cw4BaFsAv79n"

$('button').click(function(){
  
$.getJSON(url)
.then(getRes)
.then(displayData)


function getRes(res) {
  return res[0].pageFunctionResult;
}

function displayData(data) {
  var first = data[0].image_url;
  var second = data[1].image_url;
  var third = data[2].image_url;
  $('#firstImg').attr("src", first)
  $('#secondImg').attr("src", second)
  $('#thirdImg').attr("src", third)
}
  
  
})

