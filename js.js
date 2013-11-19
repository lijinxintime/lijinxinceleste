function getElementsByClassName(n) {
var el = [],
_el = document.getElementsByTagName('*');
for (var i=0; i<_el.length; i++ ) {
if (_el[i].className == n ) {
el[el.length] = _el[i];
}
}
return el;
}
var classBlack = getElementsByClassName('black');
for (var i=0; i<classBlack.length; i++) {
classBlack[i].className = 'red';
}