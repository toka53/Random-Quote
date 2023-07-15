var con1 = ['"You miss 100% of the shots you don t take."',

'"The best revenge is massive success."','"Resentment is like drinking poison and waiting for your enemies to die."','"It s not what happens to you, but how you react to it that matters."','"Do not take life too seriously. You will not get out alive."']


var con2 =["--Wayne Gretzy","--Nelson Mandela","--Elbert Hubbard","--Epictetus",'--Frank Sinatra']

function test(){
    var box =Math.floor(Math.random()*con1.length)
    document.getElementById('p1').innerHTML=con1[box]
    document.getElementById('p2').innerHTML=con2[box]
}