var counter=0
var initial=$('#test')
initial.on('click',function(){
  counter++
$('#test')[0].src=item1.images[counter]
  if(counter===item1.images.length-1){
    counter=-1
  }
})