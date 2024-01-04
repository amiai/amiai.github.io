// Scroll to top function
// $(window).scroll(function() {
// 	var height = $(window).scrollTop();
// 	if (height > 100) {
// 			$('#go-to-top').fadeIn();
// 	} else {
// 			$('#go-to-top').fadeOut();
// 	}
// });
// $(document).ready(function() {
// 	$("#go-to-top").click(function(event) {
// 			event.preventDefault();
// 			$("html, body").animate({ scrollTop: 0 }, "smooth");
// 			return false;
// 	});	
// });

window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop(){
window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('go-to-top').classList.remove('d-none');
    } else {
        document.getElementById('go-to-top').classList.add('d-none');
    }
}