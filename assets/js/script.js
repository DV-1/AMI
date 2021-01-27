window.addEventListener('scroll',(event) => {
    var content_event = document.getElementById("content_event");
    var service_text_event_1 = document.getElementById("service_text_event_1");
    var service_text_event_2 = document.getElementById("service_text_event_2");
    var service_text_event_3 = document.getElementById("service_text_event_3");
    var service_text_event_4 = document.getElementById("service_text_event_4");

    var y = scrollY;
    var screenWidth = window.screen.width

    if (y<150) { content_event.classList.remove('shadow_event') }
    else { content_event.classList.add('shadow_event') }

    if (screenWidth < 769){}
    else{
        if (y<600) {
            service_text_event_1.style.opacity = "0";
            service_text_event_1.style.transform = "translateX(100px)";
        }
        else {
            service_text_event_1.style.opacity = "1";
            service_text_event_1.style.transform = "translateY(0)";
        }

        if (y<900) {
            service_text_event_2.style.opacity = "0"
            service_text_event_2.style.transform = "translateX(-100px)"
        }
        else {
            service_text_event_2.style.opacity = "1"
            service_text_event_2.style.transform = "translateY(0)"
        }

        if (y<1300) {
            service_text_event_3.style.opacity = "0"
            service_text_event_3.style.transform = "translateX(100px)"
        }
        else {
            service_text_event_3.style.opacity = "1"
            service_text_event_3.style.transform = "translateY(0)"
        }

        if (y<1800) {
            service_text_event_4.style.opacity = "0"
            service_text_event_4.style.transform = "translateX(-100px)"
        }
        else {
            service_text_event_4.style.opacity = "1"
            service_text_event_4.style.transform = "translateY(0)"
        }
    }
});

function menu(){
    document.getElementById("main_menu").classList.toggle("open_menu");
}

function info_image_1(){
    document.getElementById("project_text_box_1").classList.toggle("info_opacity");
    document.getElementById('project_img_1').classList.toggle('small_image');
}
function info_image_2(){
    document.getElementById("project_text_box_2").classList.toggle("info_opacity");
    document.getElementById('project_img_2').classList.toggle('small_image');
}
