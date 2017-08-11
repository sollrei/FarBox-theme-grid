/**
 *
 *
 * @update: 16/1/13
 * 
 *
 */
$(function () {
    // $('#main').imagesLoaded(function () {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });

        $('.loader-wrap').hide();
    // });

});
