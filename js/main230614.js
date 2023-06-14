$(function(){
    let worksNum = $('#works').offset().top;
    console.log(worksNum);
    let meNum = $('#me').offset().top;
    console.log(meNum);
    let contNum = $('#contact').offset().top;
    console.log(contNum);

    $('.gnb li a, h1 a').click(function(){
        let name = $($(this).attr('href'));
        console.log(name);

        let target = $($(this).attr('href')).offset().top;
        console.log(target);

        $('body,html').animate({scrollTop:target},1000);
    });


    // $(window).scroll(function(){
    //     let num = $(this).scrollTop();
    //     console.log(num);

    //     if(num >= worksNum && num < meNum ){
    //         $('.gnb li a').css({color:'#fff'});
    //         $('.gnb li:eq(0) a').css({color:'#D95032'});
    //     }
    //     if(num >= meNum && num < contNum ){
    //         $('.gnb li a').css({color:'#fff'});
    //         $('.gnb li:eq(1) a').css({color:'#D95032'});
    //     }
    //     if(num >= contNum ){
    //         $('.gnb li a').css({color:'#fff'});
    //         $('.gnb li:eq(2) a').css({color:'#D95032'});
    //     }

    // });

    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });

    $('#all').click(function(){
        $('.grid').isotope({filter:'.grid-item'})
    });
    $('#design').click(function(){
        $('.grid').isotope({filter:'.ds'})
    });
    $('#publish').click(function(){
        $('.grid').isotope({filter:'.pb'})
    });
    $('#front').click(function(){
        $('.grid').isotope({filter:'.ft'})
    });
    $('#vid').click(function(){
        $('.grid').isotope({filter:''})
    });

    $('.grid .grid-item a').lightBox({
        imageLoading:"./images/lightbox-ico-loading.gif",
        imageBtnClose:"./images/icon_close_wh.png",
        imageBtnPrev:"./images/lightbox-btn-prev.gif",
        imageBtnNext:"./images/lightbox-btn-next.gif",
        txtImage:"작품",
        containerResizeSpeed: 800,
    });
});