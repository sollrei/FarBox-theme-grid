/**
 *
 *
 * @update: 16/1/13
 * @author: zhangdan
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