let year = prompt('Напишите, какой год вас интересует?');
if (year%4 == 0) {
    if (year%100 == 0) {
        if (year%400 == 0) {alert( 'Год является високосным (366 дней)' );} else{alert( 'Год не високосный (365 дней)' );}
    } else{alert( 'Год является високосным (366 дней)' );}
  } else {
  alert( 'Год не високосный (365 дней)' ); 
}