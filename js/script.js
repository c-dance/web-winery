;(function($){
    var $window = $(window);
    var $windowHeight = $window.innerHeight();
    var $windowWidth = $window.innerWidth();
    
    var $header = $('#header');
    var $headerGnb = $('#header .gnb');
    var $headerRight = $('#header .right-wrap');
    var $triggerBtn = $('.trigger-gap');
    var $triggerBar = $('.trigger');
    var $triggerMenu = $('.trigger-menu');

    var $section01 = $('#section01');
    var $section01TitleWrap = $('#section01 .title-wrap');
    var $section01TitleText = $('#seciont01 ')
    var section01_typo = 'winery restaurant near you';
    


    /*----------------------------header----------------------------*/

    function resizeHeader(e){
        var pageY = e.originalEvent.pageY;
        if(pageY>$windowHeight){
            $header.addClass('addHeader');
        }else{
            $header.removeClass('addHeader');
        }
    };
    function toggleTrigger(){
        $triggerBtn.on("click",function(e){
            $triggerBar.toggleClass('toggleTrigger');
            $triggerMenu.slideToggle(500);
        })
    }
    function foldTriggerMenu(screenWidth){
        if(screenWidth>960){
            $triggerMenu.slideUp('fast');
        }
    }


    /*----------------------------section01----------------------------*/
    function setSection01(){
        $section01.css('height',$windowHeight+'px');
        setSection01Title();
    };
    function setSection01Title(){
        var video = document.getElementById('section01Video');
        /*비디오 로드 안 되면 이미지 띄우기 */
        video.addEventListener('play',(e)=>{
            setTimeout(function(){
                $section01TitleWrap.addClass('addTitle');
            },10000);
        });
        video.addEventListener('ended', (e)=>{
            $section01TitleWrap.css('opacity', .6);
            /*next버튼 보이게 하기 */
        });
    };
    var section01TypeWriter = function(element,text,period){
        this.full_text=text;
        this.typed_text='';
        this.period = period;
        this.startTyping(element, period);
        this.stopTyping(typeWriter);
    }



    var handleSection01Typing = function(text){
        var full_length = text.length;
        var typed_text = '';
        var period = 3000;
        var stopInterval = function(interval_func){
            clearInterval(interval_func);
        }
        var startTyping = setInterval((typed_text)=>{
            if(typed_text.length==full_length) this.clearInterval(startTyping);
        },period);

    };
    
    /*----------------------------section04: lunch, dinner, group----------------------------*/

    var section04Data =[
        {name: 'lunch', img: "/img/main/lunch.jpg", time: '12:00 ~ 03:00', color: '#C4A484', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis suscipit eos aut quam ea consequatur quis error repudiandae et illo?'},
        {name: 'dinner', img: "/img/main/dinner.jpg", time: '18:00 ~ 01:00', color: '#a4b8ba', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis suscipit eos aut quam ea.'},
        {name: 'group', img: "/img/main/group.jpg", time: 'TABLE FOR 6 ~ 12', color: '#C4A484', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis suscipit eos aut quam ea consequatur quis?'}
    ];
    var section04Back = $('#section04 .background-box');
    var section04Box = $('#section04 .view-box');
    var section04Img = $('#section04 .text-wrap img');
    var section04Time = $('#section04 .text-wrap span');
    var section04Text = $('#section04 .text-wrap p');
    var section04Name = $('#section04 .text-wrap .text-title');
    var section04Btn = $('#section04 .selection-btn');

    function setSection04Slide(data){
        section04Back.css({'background':'url('+data.img+') 50% 50% no-repeat', 'background-size':'cover'});
        section04Box.css({'background-color': data.color});
        section04Img.attr("src", data.img);
        section04Time.text(data.time);
        section04Text.text(data.text);
        section04Name.text(data.name);
    }

    function setSection04(){
        setSection04Slide(section04Data[0]);
        section04Btn.each(function(idx){
            var data = section04Data[idx];
            $(this).click(function(){
                setSection04Slide(data);
            });
        })
    };

    /*----------------------------section07: menus----------------------------*/
    var $07Data = [
        {   
            category: 'starter',
            menus: [
                {id: 0, name: 'lemon prawn vol-au-vents', cost: '$10.00', img:'/img/main/starter01.jpg', desc:'Fruity, tangy, crunchy and colourful, this easy fresh vegan salad makes for a fantastic light and healthy starter.'},
                {id: 1, name: 'bruschetta', cost: '$9.00', img:'/img/main/starter02.jpg', desc:'Bruschetta is an Italian appetizer/starter dish consisting of grilled/baked bread that is brushed with garlic and olive oil'},
                {id: 2, name: 'Great British Menu Starter', cost: '$11.00', img:'/img/main/starter03.jpg', desc:'This dish is simplistic elegance. No surprise ingredients or molecular cooking techniques. Just a superb array of the freshest ingredients we have today.'},
            ]
        },
        {   
            category: 'salad',
            menus: [
                {id: 0, name: 'chickpea salad', cost: '$13.00', img:'/img/main/salad01.jpg', desc:'If you like shawarma, you should definitely try this vegan chickpea shawarma salad by Deryn from Running on Real Food.'},
                {id: 1, name: 'blt salad', cost: '$12.00', img:'/img/main/salad02.jpg', desc:'Melissa used homemade croutons and a simple yogurt based ranch dressing for this healthy and delicious vegan salad.'},
                {id: 2, name: 'crunchy salad', cost: '$12.00', img:'/img/main/salad03.jpg', desc:'This crunchy broccoli salad is super healthy and completely oil-free. It’s perfect for a picnic or potluck.'},
                {id: 3, name: 'farro salad', cost: '$12.00', img:'/img/main/salad04.jpg', desc:'super fresh and delicious. If you can find farro,  you could also replace it with quinoa, millet, or brown rice.'},
                {id: 4, name: 'detox salad', cost: '$14.00', img:'/img/main/salad05.jpg', desc:'This detox crunch salad is loaded with healthy and fresh ingredients! It makes a delicious and healthy lunch or dinner.'},
            ]
        },
        {
            category: 'meal',
            menus: [
                {id: 0, name: 'spaghetti carbonara', cost: '$17.00', img:'/img/main/pasta01.jpg', desc:'Discover how to make superb spaghetti carbonara. This cheesy pasta dish is an Italian favourite and with the right technique, you can make it perfect every time.'},
                {id: 1, name: 'Fettuccine alfredo', cost: '$16.00', img:'/img/main/pasta02.jpg', desc:' This sumptuous Italian dish is for you.'},
                {id: 2, name: 'Spaghetti puttanesca', cost: '$16.00', img:'/img/main/pasta03.jpg', desc:'true Italian classic with a meaty, chilli sauce. Serve straight from the dish with a dressed green salad.'},
                {id: 3, name: 'Tortilla pizza', cost: '$20.00', img:'/img/main/pizza01.jpg', desc:'homemade toppings on this easy tortilla pizza, with plenty of melted mozzarella.'},
                {id: 4, name: 'Margherita pizza', cost: '$21.00', img:'/img/main/pizza02.jpg', desc:"a homemade Margherita pizza topped with fresh tomato sauce and melted cheese. Here's how to master this everyday classic."},
            ]
        },
        {
            category: 'dessert',
            menus: [
                {id: 0, name: 'raspberry cake', cost: '$23.00', img:'/img/main/dessert01.jpg', desc:'Like a Victoria sponge but better, try budget-friendly frozen raspberries for the cream'},
                {id: 1, name: 'crêpes', cost: '$17.00', img:'/img/main/dessert02.jpg', desc:' crêpe cake is perfect for a special occasion. We love the combination of sweet pancakes and a sharp, creamy filling.'},
                {id: 2, name: 'chocolate fudge', cost: '$12.00', img:'/img/main/dessert03.jpg', desc:"the chocolate cake with an airy, light sponge and rich buttercream filling. It's simple enough for an afternoon tea but special enough for a party too."},
                {id: 3, name: 'Belgian waffles', cost: '$13.00', img:'/img/main/dessert04.jpg', desc:'These delicious vegan pancakes can be sweet or savoury and are super adaptable to every taste. A great low-calorie breakfast or brunch option.'},
            ]
        }
    ];
    var $07Btn = $('#section07 .menu-btn');
    var $07SelectedImg = $('#section07 .menu-img');
    var $07SelectedName = $('#section07 .selected-name');
    var $07SelectedCost= $('#section07 .selected-cost');
    var $07MenuListWrap = $('#section07 .content-col-right');//ul


    function setSection07(){
        var initItem = $07Data[0]['menus'][0];
        setSection07Menus();
        $('#section07 .content-starter').removeClass('hide');
        setSection07Selected(initItem.img,initItem.name, initItem.cost);
        handleSection07Select();
        handleSection07Event();
    }
    
    function setSection07Menus(){
        var menuData;
        var menuCategory;
        var menuItem;
        var menuName;
        var menuCost;
        var menuImgSrc;
        var menuDesc;
        var menuList;
        var newMenu;
        var htmlText;

        for(var i = 0; i<$07Data.length; i++){
            menuData = $07Data[i];
            menuCategory = menuData.category;
            menuList = menuData.menus;
            newMenu = $('<ul class="hide content-wrap content-'+menuCategory+'"></ul>');
            newMenu.append($('<li><h2 class="menu-title">'+menuCategory+'</h2></li>'));
            /*$07MenuListWrap.append($('<ul/>',{
                class : "hide content-wrap content-"+menuCategory
            }));*/
            htmlText = '';
            for(var j = 0; j<menuList.length; j++){
                menuItem = menuList[j];
                menuName = menuItem.name;
                menuCost = menuItem.cost;
                menuImgSrc = menuItem.img;
                menuDesc = menuItem.desc;
                htmlText+= '<li class="content" data-menu="'+ menuImgSrc+'%'+menuName+'%'+menuCost+'">';
                htmlText+= '<p class="row01"><span class="name">'+ menuName +'</span>';
                htmlText+= '<span class="cost">'+ menuCost + '</span></p>';
                htmlText+= '<p class="row02">'+ menuDesc + '</p>';
                htmlText+= '</li>';
            }
            newMenu.append($(htmlText));
            $07MenuListWrap.append(newMenu);
        }
    }

    function handleSection07Select(){
        var selectedCategory = '';
        var initItem={};
        $07Btn.each(function(){
            $(this).click(function(){
                handleSection07Btn($(this));
                selectedCategory = $(this).data('menu');
                $07Data.filter(function(el){
                    if(el.category===selectedCategory){
                        initItem = el.menus[0];
                        setSection07Selected(initItem.img, initItem.name, initItem.cost);
                        return;
                    }
                });
                $('#section07 .content-wrap').addClass('hide');
                $('#section07 .content-'+selectedCategory).removeClass('hide');
            })
        })
    }

    function handleSection07Btn(button){
        $07Btn.css({'padding':'0', 'font-size':'24px', 'font-weight':'600'});
        $07Btn.children('i').css('display', 'block');
        button.css({'padding':'4px 4px', 'font-size':'28px', 'font-weight':'600'})
        button.children('i').css('display', 'none');
    }

    function handleSection07Event(){
        var $menuContent = $('#section07 .content');
        var htmlData = [];
        var imgPath = '';
        var name = '';
        var cost = '';
        $menuContent.each(function(){
            $(this).hover(function(){
                $menuContent.css('color', '#626262');
                $(this).css('color', '#fff');
                htmlData = $(this).data('menu').split('%');
                imgPath = htmlData[0];
                name = htmlData[1];
                cost = htmlData[2];
                setSection07Selected(imgPath, name, cost);
            })
        })
    }

    function setSection07Selected(imgPath, name, cost){
        $07SelectedImg.attr("src", imgPath);
        $07SelectedName.text(name);
        $07SelectedCost.text(cost);
    }




    /*----------------------------section08: Gallery slide----------------------------*/
    var sliderWrap = $('.slider-wrap');
    var slideWidth = pxToNum('.slider-item', 'width') + pxToNum('.slider-item', 'margin-left') + pxToNum('.slider-item', 'margin-right');
    var PX = 'px';
    
    /*btn move slide (left to right) */
    function setSliderBtn(){
        var btnMoveWidth = 0;
        var btnClass = '.slider-btn';

        $(btnClass).each(function(idx){
            $(this).click(function(){
                restartSlider();
                btnMoveWidth = '-'+(idx*slideWidth)+PX;
                sliderWrap.css('left', btnMoveWidth);
            });
        });
    };

    /*auto move slide (.5s, left to rigth) */
    function setAutoSlider(){
        var autoMoveWidth = slideWidth;
        setInterval(function(){
            currentPosition = pxToNum('.slider-wrap', 'left');
            if(isSliderEnd()){
                restartSlider();
                /*console.log('is ended');*/
            }else{
                sliderWrap.css('left', currentPosition-autoMoveWidth+PX);
                /*console.log('next');*/
            }
        }, 5000);
    }

    function isSliderEnd(){
        console.log('function');
        var sliderEndLeft = -(5*slideWidth);
        var currentLeft = pxToNum('.slider-wrap', 'left');
        /*console.log('sliderEndLeft : '+sliderEndLeft);
        console.log('curentLeft : '+ currentLeft);*/
        if(currentLeft<=sliderEndLeft){
            return true;
        }
        return false;
    }

    function restartSlider(){
        sliderWrap.css('left', 0);
    }

    function pxToNum(selector, properties){
        var result = $(selector).css(properties).slice(0, -2);
        return Number(result);
    };

    




    var init = function(){
        $window.on('wheel',(e)=>{
            resizeHeader(e);
        });
        $window.resize((e)=>{
            $windowWidth = $window.innerWidth();
            foldTriggerMenu($windowWidth);
        })
        toggleTrigger();
        setSection01();
        setSection04();
        setSection07();
        setSliderBtn();
        setAutoSlider();
    }

    init();

})(jQuery);
