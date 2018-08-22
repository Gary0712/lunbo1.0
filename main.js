var allButtons = $('#buttons > span')

for(let i=0;i<allButtons.length;i++){
  $(allButtons[i]).on('click', function(x){
    var index = $(x.currentTarget).index()
    var n = index * -200
    $('#images').css({
      transfrom: 'translate(' + n + 'px)'
    })
  })
} 


$('.window').on('mouseleave', function(){
  timerTd = setInterval(()=>{
  n += 1
  allButtons.eq(n % size).trigger('click')
   .addClass('red')
   .siblings('.red').removeClass('red')
  }, 1000)
})