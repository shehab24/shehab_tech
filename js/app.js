var btn=document.querySelector(".menu_btn");
btn.addEventListener("click",function () {
var menu_btn=document.querySelector(".mobile_header_sec");
menu_btn.classList.add("active");
});

var mobile_menu_btn=document.querySelector(".mobile_menu_btn");
mobile_menu_btn.addEventListener("click",function () {
var menu_btn=document.querySelector(".mobile_header_sec");
menu_btn.classList.remove("active");
});

var list=document.querySelectorAll(".menu ul li");
for(var i =0 ; i<list.length;i++){
  list[i].addEventListener("click" ,function () {
    var menu=document.querySelector(".menu");
    var menu_btn=document.querySelector(".menu_btn");
 menu.classList.remove("active");
 menu_btn.classList.remove("active");
  })
}

window.addEventListener("scroll",function(){
  var header=document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY >150 );
})

  $(document).ready(function () {
  
        $('.bck').backToTop({
            
              trigger : 300
            
            });
        
         
                


    $(".list-item").click(function () {
        let value = $(this).attr("data-filter");
        if (value == 'all') {
            $(".list-box").show("600");
        }
        else {
            $(".list-box").not("." + value).hide("600");
            $(".list-box").filter("." + value).show("600");
        }

    })
    $(".list-item").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

    })
    
    $(".owl_project").owlCarousel({
      loop: true,
      animateOut: "animate__zoomOutDown",
      animateIn: "animate__zoomInDown",
      smartSpeed: 300,
      margin:30,
      stagePadding:25,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 4,
        },
      },
    });

 

    $(".owl-carousel").owlCarousel({
        loop: true,
        animateOut: "animate__zoomOutDown",
        animateIn: "animate__zoomInDown",
        smartSpeed: 300,
        margin:30,
        stagePadding:25,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      });

    $(".owl_project").owlCarousel({
        loop: true,
        animateOut: "animate__zoomOutDown",
        animateIn: "animate__zoomInDown",
        smartSpeed: 300,
        margin:30,
        stagePadding:25,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        },
      });

      // $(function() {
      //   $('#navigation').navpoints({
      //       speed: 1000,
      //       offset: 70,
      //       currentClass:'active',
      //       updateHash:true,
      //       classToParent:true,

      //     });
        
      //   });
      $(document).ready(function(){
        $('.scrollspy').scrollSpy();
      });
      
      $("span.arrow_cng_btn_one").click(function(){
        var sec1=$(".top_section1");
        var sec2=$(".top_section2");
        var sec3=$(".top_section3");
        var h1=$(".hero_overlay_content h1");
        var h3=$(".hero_overlay_content h3");
        var button=$(".hero_overlay_content button");
        var second_h1=$(".second_hero_over h1");
        var second_h3=$(".second_hero_over h3");
        var second_button=$(".second_hero_over button");
        var third_h1=$(".third_hero_over h1");
        var third_h3=$(".third_hero_over h3");
        var third_button=$(".third_hero_over button");
        
        if(sec1.hasClass("active")==true){
          // sec1.addClass("animate__flipOutX");
          sec3.addClass("animate__flipInX");
          sec3.addClass("active");
          third_h1.addClass("animate__bounceInRight");
          third_h3.addClass("animate__bounceInLeft");
          third_button.addClass("animate__bounceInUp");

          sec1.removeClass("active");
          sec1.removeClass("animate__backInUp");
          h1.removeClass("animate__bounceInRight");
          h3.removeClass("animate__bounceInLeft");
          button.removeClass("animate__bounceInUp");
          
        }else if(sec3.hasClass("active")==true){
          sec2.addClass("animate__flipInY");
          sec2.addClass("active");
          second_h1.addClass("animate__bounceInRight");
          second_h3.addClass("animate__bounceInLeft");
          second_button.addClass("animate__bounceInUp");

          sec3.removeClass("active");
          sec3.removeClass("animate__flipInX");
          third_h1.removeClass("animate__bounceInRight");
          third_h3.removeClass("animate__bounceInLeft");
          third_button.removeClass("animate__bounceInUp");
        }
        else if (sec2.hasClass("active")==true){
          sec1.addClass("animate__backInUp");
          sec1.addClass("active");
          h1.addClass("animate__bounceInRight");
          h3.addClass("animate__bounceInLeft");
          button.addClass("animate__bounceInUp");

          sec2.removeClass("active");
          sec2.removeClass("animate__flipInY");
          second_h1.removeClass("animate__bounceInRight");
          second_h3.removeClass("animate__bounceInLeft");
          second_button.removeClass("animate__bounceInUp");
        }
     
      });
      $("span.arrow_cng_btn_two").click(function(){
        var sec1=$(".top_section1");
        var sec2=$(".top_section2");
        var sec3=$(".top_section3");
        var h1=$(".hero_overlay_content h1");
        var h3=$(".hero_overlay_content h3");
        var button=$(".hero_overlay_content button");
        var second_h1=$(".second_hero_over h1");
        var second_h3=$(".second_hero_over h3");
        var second_button=$(".second_hero_over button");
        var third_h1=$(".third_hero_over h1");
        var third_h3=$(".third_hero_over h3");
        var third_button=$(".third_hero_over button");
        if(sec1.hasClass("active")==true){
          // sec1.addClass("animate__flipOutX");
          sec2.addClass("animate__flipInX");
          sec2.addClass("active");
          second_h1.addClass("animate__bounceInRight");
          second_h3.addClass("animate__bounceInLeft");
          second_button.addClass("animate__bounceInUp");

          sec1.removeClass("active");
          sec1.removeClass("animate__backInUp");
          h1.removeClass("animate__bounceInRight");
          h3.removeClass("animate__bounceInLeft");
          button.removeClass("animate__bounceInUp");
          
        }else if(sec2.hasClass("active")==true){
          sec3.addClass("animate__flipInY");
          sec3.addClass("active");
          third_h1.addClass("animate__bounceInRight");
          third_h3.addClass("animate__bounceInLeft");
          third_button.addClass("animate__bounceInUp");

          sec2.removeClass("active");
          sec2.removeClass("animate__flipInX");
          second_h1.removeClass("animate__bounceInRight");
          second_h3.removeClass("animate__bounceInLeft");
          second_button.removeClass("animate__bounceInUp");
        }
        else if (sec3.hasClass("active")==true){
          sec1.addClass("animate__backInUp");
          sec1.addClass("active");
          h1.addClass("animate__bounceInRight");
          h3.addClass("animate__bounceInLeft");
          button.addClass("animate__bounceInUp");

          sec3.removeClass("active");
          sec3.removeClass("animate__flipInY");
          third_h1.removeClass("animate__bounceInRight");
          third_h3.removeClass("animate__bounceInLeft");
          third_button.removeClass("animate__bounceInUp");
        }
      });
            
        

});