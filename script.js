window.onload = function(){    
    document.getElementById(backToTop).onclick = f1
    document.getElementById(test).onclick = f2
}

f1.onclick = window.scrollTo(0, 0, smooth)
f2.onclick = window.scrollTo(1000, 0, smooth)