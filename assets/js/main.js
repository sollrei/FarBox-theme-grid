/**
 *
 *
 * @update: 16/1/13
 * @author: zhangdan
 *
 */
$(function () {

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});