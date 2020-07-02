var wrap = document.querySelector('.wrap')
var main = document.querySelector('.main')
var imgs = document.querySelectorAll('.img1')
var left = document.querySelector('.left')
var right = document.querySelector('.right')
var arrow = document.querySelectorAll('.arrow')
var lis = document.querySelectorAll('.lis')
var imgW = imgs[0].clientWidth
var imgIndex = 0
main.scrollLeft = imgIndex * imgW
var dsq1, dsq2
var btnIndex = 0
 
$(function() {
	// 进入页面加载数据
	$.ajax({
		url: '../json/list.json',
		type: 'get',
		data: 'type=3',
		dataType: 'json',
		success: function(json) {
			console.log(json)
			$.each(json, function(index, item) {
				console.log(item)
				var goodsdom =
					'<div>' +
					'<div class="content-main">' +
					'<h1 class="title">[预售]' + item.game + '</h1>' +
					'<div class="sk1">' +
					'<div class="main1-container">' +
					'<div class="sk2">' +
					'<div class="sk3" style="left: 0px;">' +
					'<div class="mian1-box">' +
					'<div>' +
					'<div class="cover-wrapper">' +
					'<img src="' + item.img1 + '">' +
					'</div>' +
					'<div class="info">' +
					'<p>' +
					'<span>国际站</span><b>'+item.game+'</b>'+
					'</p>' +
					'<div class="price">' +
					'<div class="list-wrap">' +
					'<span class="sale-price">' + item.price + '</span>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="corner promotion">' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="mian1-box">' +
					'<div>' +
					'<div class="cover-wrapper">' +
					'<img src="' + item.img1 + '">' +
					'</div>' +
					'<div class="info">' +
					'<p>' +
					'<span>国际站</span><b>'+item.game+'</b>'+
					'</p>' +
					'<div class="price">' +
					'<div class="list-wrap">' +
					'<span class="sale-price">' + item.price + '</span>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="corner promotion">' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="mian1-box">' +
					'<div>' +
					'<div class="cover-wrapper">' +
					'<img src="' + item.img1 + '">' +
					'</div>' +
					'<div class="info">' +
					'<p>' +
					'<span>国际站</span><b>'+item.game+'</b>'+
					'</p>' +
					'<div class="price">' +
					'<div class="list-wrap">' +
					'<span class="sale-price">' + item.price + '</span>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="corner promotion">' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="mian1-box">' +
					'<div>' +
					'<div class="cover-wrapper">' +
					'<img src="' + item.img1 + '">' +
					'</div>' +
					'<div class="info">' +
					'<p>' +
					'<span>国际站</span><b>'+item.game+'</b>'+
					'</p>' +
					'<div class="price">' +
					'<div class="list-wrap">' +
					'<span class="sale-price">' + item.price + '</span>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="corner promotion">' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="mian1-box">' +
					'<div>' +
					'<div class="cover-wrapper">' +
					'<img src="' + item.img1 + '">' +
					'</div>' +
					'<div class="info">' +
					'<p>' +
					'<span>国际站</span><b>'+item.game+'</b>'+
					'</p>' +
					'<div class="price">' +
					'<div class="list-wrap">' +
					'<span class="sale-price">' + item.price + '</span>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="corner promotion">' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>' ;
					
					$('.shujuzhongxin').append(goodsdom);
					
			})
			var btnbox=document.querySelectorAll('.mian1-box')
			for(var i=0;i<btnbox.length;i++){
				btnbox[i].onclick=function(){
					var a=this.querySelector('.info').querySelector('p').querySelector('b').innerText
					localStorage.setItem('gamename',a)
					location.href='xiangqing.html'
				}
			}
		}
	})
});

//阻止a标签的默认行为
left.addEventListener('click', function(e) {
	var e = e || window.event
	e.preventDefault ? e.preventDefault() : e.returnValue = false
})
right.addEventListener('click', function(e) {
	var e = e || window.event
	e.preventDefault ? e.preventDefault() : e.returnValue = false
})

//运动函数
function move() {
	var start = main.scrollLeft
	var end = imgIndex * imgW
	var startspeed = 0
	var endspeed = 30
	var speed = (end - start) / endspeed
	clearInterval(dsq1)
	dsq1 = setInterval(function() {
		startspeed++
		if(startspeed >= endspeed) {
			clearInterval(dsq1)
		}
		start += speed
		main.scrollLeft = start
	}, 20)
}
//开始自动轮播
function automove() {
	if(imgIndex == 0) {
		wrap.addEventListener('mouseover', function() {
			right.style.display = 'block'
		})
	}
	dsq2 = setInterval(function() {
		imgIndex++
		if(imgIndex == imgs.length - 1) {
			wrap.addEventListener('mouseover', function() {
				right.style.display = 'none'
			})
		}
		if(imgIndex != imgs.length - 1) {
			wrap.addEventListener('mouseover', function() {
				right.style.display = 'block'
			})
		}
		if(imgIndex >= imgs.length) {
			imgIndex = 0
			wrap.addEventListener('mouseover', function() {
				left.style.display = 'none'
			})
		}
		if(imgIndex != 0) {
			wrap.addEventListener('mouseover', function() {
				left.style.display = 'block'
			})
		}
		lis[btnIndex].className = ""
		btnIndex++
		if(btnIndex >= lis.length) {
			btnIndex = 0
		}
		lis[btnIndex].className = 'show'
		move()
	}, 3000)
}
automove()

//鼠标移出wrap盒子,箭头消失
wrap.addEventListener('mouseout', function() {
	left.style.display = 'none'
	right.style.display = 'none'
})

//点击右边按钮
right.onclick = function() {
	clearInterval(dsq2)
	imgIndex++
	if(imgIndex != imgs.length - 1) {
		left.style.display = 'block'
		wrap.addEventListener('mouseover', function() {
			left.style.display = 'block'
			right.style.display = 'block'
		})

	}
	if(imgIndex == imgs.length - 1) {
		right.style.display = 'none'
		wrap.addEventListener('mouseover', function() {
			left.style.display = 'block'
			right.style.display = 'none'

		})

	}
	lis[btnIndex].className = ""
	btnIndex++
	lis[btnIndex].className = 'show'

	move()
	automove()
}

//点击左边按钮
left.onclick = function() {
	clearInterval(dsq2)
	imgIndex--
	if(imgIndex <= imgs.length - 1) {
		right.style.display = 'block'
		wrap.addEventListener('mouseover', function() {
			left.style.display = 'block'
			right.style.display = 'block'
		})
	}
	if(imgIndex == 0) {
		left.style.display = 'none'
		wrap.addEventListener('mouseover', function() {
			left.style.display = 'none'
			right.style.display = 'block'
		})
	}
	lis[btnIndex].className = ""
	btnIndex--
	lis[btnIndex].className = 'show'
	move()
	automove()
}

//点击btn按钮
for(let i = 0; i < lis.length; i++) {
	lis[i].onclick = function() {
		clearInterval(dsq2)
		imgIndex = i
		lis[btnIndex].className = ""
		btnIndex = i
		lis[btnIndex].className = "show"
		if(btnIndex == 0) {
			left.style.display = 'none'
			right.style.display = 'block'
			wrap.addEventListener('mouseover', function() {
				left.style.display = 'none'
				right.style.display = 'block'
			})
		}
		if(btnIndex > 0 && btnIndex < lis.length - 1) {
			left.style.display = 'block'
			right.style.display = 'block'
			wrap.addEventListener('mouseover', function() {
				left.style.display = 'block'
				right.style.display = 'block'
			})
		}
		if(btnIndex == lis.length - 1) {
			right.style.display = 'none'
			left.style.display = 'block'
			wrap.addEventListener('mouseover', function() {
				left.style.display = 'block'
				right.style.display = 'none'
			})
		}
		move()
		automove()
	}

}

//头部二级菜单
var navs = document.querySelectorAll('.nav')
var aas = document.querySelectorAll('.aa')

function list(btns, boxs) {
	this.btns = btns
	this.boxs = boxs
}
list.prototype.sayHi = function() {
	var nav1 = this.btns
	var aa1 = this.boxs
	for(let i = 0; i < nav1.length; i++) {
		nav1[i].onmouseover = function() {
			for(var j = 0; j < nav1.length; j++) {

				aa1[j].style.display = 'none'
			}

			aa1[i].style.display = 'block'
		}
		aa1[i].onmouseover = function() {
			nav1[i].style.color = '#acb2e0'
			aa1[i].style.display = 'block'
		}
		aa1[i].onmouseout = function() {
			nav1[i].style.color = '#7a80a2'
			aa1[i].style.display = 'none'
		}
		nav1[i].onmouseout = function() {

			aa1[i].style.display = 'none'
		}
	}
}
var f1 = new list(navs, aas)
f1.sayHi()
var ols1 = aas[0].querySelector('ol')
var lis1 = ols1.querySelectorAll('li')

function list1(boxs) {
	this.boxs = boxs
}
list1.prototype.sayYes = function() {
	var li1 = this.boxs
	for(let i = 0; i < li1.length; i++) {
		li1[i].onmouseover = function() {
			for(var j = 0; j < li1.length; j++) {
				li1[j].style.backgroundColor = '#292e42'
				li1[j].style.color = '#7a80a2'
			}
			li1[i].style.backgroundColor = '#30354b'
			li1[i].style.color = '#acb2e0'
		}
		li1[i].onmouseout = function() {
			li1[i].style.backgroundColor = '#292e42'
			li1[i].style.color = '#7a80a2'
		}
	}
}
var f2 = new list1(lis1)
f2.sayYes()

var ols2 = aas[1].querySelector('ol')
var lis2 = ols2.querySelectorAll('li')

function list2(boxs) {
	this.boxs = boxs
}
list2.prototype.sayYes = function() {
	var li1 = this.boxs
	for(let i = 0; i < li1.length; i++) {
		li1[i].onmouseover = function() {
			for(var j = 0; j < li1.length; j++) {
				li1[j].style.backgroundColor = '#292e42'
				li1[j].style.color = '#7a80a2'
			}
			li1[i].style.backgroundColor = '#30354b'
			li1[i].style.color = '#acb2e0'
		}
		li1[i].onmouseout = function() {
			li1[i].style.backgroundColor = '#292e42'
			li1[i].style.color = '#7a80a2'
		}
	}
}
var f3 = new list2(lis2)
f3.sayYes()

var ols3 = aas[2].querySelector('ol')
var lis3 = ols3.querySelectorAll('li')

function list3(boxs) {
	this.boxs = boxs
}
list3.prototype.sayYes = function() {
	var li1 = this.boxs
	for(let i = 0; i < li1.length; i++) {
		li1[i].onmouseover = function() {
			for(var j = 0; j < li1.length; j++) {
				li1[j].style.backgroundColor = '#292e42'
				li1[j].style.color = '#7a80a2'
			}
			li1[i].style.backgroundColor = '#30354b'
			li1[i].style.color = '#acb2e0'
		}
		li1[i].onmouseout = function() {
			li1[i].style.backgroundColor = '#292e42'
			li1[i].style.color = '#7a80a2'
		}
	}
}
var f4 = new list3(lis3)
f4.sayYes()

var a1 = document.querySelector('.head-top-ul').querySelectorAll('a')
console.log(a1)
for(let i = 1; i < a1.length; i++) {
	a1[i].addEventListener('mousemove', function() {
		for(var j = 1; j < a1.length; j++) {
			a1[j].style.color = '#7a80a2'
		}
		a1[i].style.color = '#acb2e0'
	})

	a1[i].addEventListener('mouseout', function() {
		a1[i].style.color = '#7a80a2'
	})
}

var searchtitle = document.querySelector('.search-type-title')
var searchhide = document.querySelector('.search-type-hide')
var footli = searchhide.querySelectorAll('li')
searchtitle.onmouseover = function() {
	searchhide.style.display = 'block'
}
searchtitle.onmouseout = function() {
	searchhide.style.display = 'none'
}
searchhide.onmouseover = function() {
	searchhide.style.display = 'block'
}
searchhide.onmouseout = function() {
	searchhide.style.display = 'none'
}

for(var i = 0; i < footli.length; i++) {
	if(i == 0) {
		footli[i].onclick = function() {
			searchtitle.innerHTML = '商城'
		}
	}
	if(i == 1) {
		footli[i].onclick = function() {
			searchtitle.innerHTML = '社区'
		}
	}
	if(i == 2) {
		footli[i].onclick = function() {
			searchtitle.innerHTML = '周边'
		}
	}
}
//头部随滚动条移动
window.onscroll = function() {
	var header = document.querySelector('.header')
	var guntop = document.documentElement.scrollTop
	header.style.top = parseFloat(guntop) + 'px'

}

//回到顶部
var returnTop = document.querySelector('.returnTop')
returnTop.onclick = function() {
	var guntop = document.documentElement.scrollTop
	guntop = 0
	document.documentElement.scrollTop = guntop
}

//小组的前进后退按钮
var nextbtn = document.querySelector('.next-button')
var prevbtn = document.querySelector('.prev-button')
var viewport = document.querySelector('.viewport-content')
nextbtn.onclick = function() {
	viewport.style.left = -1220 + 'px'
	prevbtn.style.display = 'block'
	nextbtn.style.display = 'none'
}
prevbtn.onclick = function() {
	viewport.style.left = 0 + 'px'
	prevbtn.style.display = 'none'
	nextbtn.style.display = 'block'
}
var wrap = document.querySelector('.wrap')
var main = document.querySelector('.main')
var imgs = document.querySelectorAll('.img1')
var left = document.querySelector('.left')
var right = document.querySelector('.right')
var arrow = document.querySelectorAll('.arrow')
var lis = document.querySelectorAll('.lis')
var imgW = imgs[0].clientWidth
var imgIndex = 0
main.scrollLeft = imgIndex * imgW
var dsq1, dsq2
var btnIndex = 0

//阻止a标签的默认行为
left.addEventListener('click', function(e) {
	var e = e || window.event
	e.preventDefault ? e.preventDefault() : e.returnValue = false
})
right.addEventListener('click', function(e) {
	var e = e || window.event
	e.preventDefault ? e.preventDefault() : e.returnValue = false
})

//选项卡切换
var tabbtn = document.querySelector('.type-game-lists').querySelectorAll('.type-button')

var tabsitem = document.querySelector('.type-game-lists').querySelectorAll('.tabs-item-container')
for(let i = 0; i < tabbtn.length; i++) {
	tabbtn[i].addEventListener('click', function() {
		for(var z = 0; z < tabbtn.length; z++) {
			tabbtn[z].classList.remove('active')
			tabsitem[z].classList.remove('active')
		}
		tabbtn[i].classList.add('active')
		tabsitem[i].classList.add('active')
	})
}

//用户名

function loaddata() {
	var links = document.querySelector('.links')
	var theme = localStorage.getItem('username')
	if(!theme == null || !theme == "") {
		links.innerHTML = '<h4>欢迎<b>' + theme + '</b>回来<h5 class="exit">退出登录</h5></h4>'

	} else {
		links.innerHTML = '<a href="login.html">登录</a>' +
			'<span class="divide"></span>' +
			'<a href="zhuce.html">注册</a>'
	}
}
loaddata()
var exit = document.querySelector('.exit')
exit.onclick = function() {
	localStorage.removeItem("username");
	loaddata();
}


