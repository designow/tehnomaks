document.addEventListener('DOMContentLoaded', function () {


    let catalog_button = selectTag('#catalog-button');
    let catalog_block = selectTag('#catalog-block');
    let block_minicart = selectTag('#header-cart-block__minicart');
    let minicart_list = selectTag('#header-minicart-list');
    let button_more = selectTag('#button-more');
    let header_menu = selectTag('#header-menu');
    let container = selectTag('.container');
    let close_button = selectTag('.close-button');
    let cities_container = selectTag('.cities-container');
    let city_select = selectTag('.header-top__city');
    let warehouse_show = selectTag('.product-price-block__warehouse');
    let overlay_div = selectTag('.overlay');
    let warehouses_block = selectTag('.warehouses-block');
    let warehouses_close = selectTag('.warehouses-product__close');

    function selectTag(name) {
        return document.querySelector(name);
    }

    function toggle(elemName, elemTarget, tagName, elemAction) {
        elemName.addEventListener(elemAction, function (evt) {
            elemTarget.classList.toggle(tagName);
        });
    }

    toggle(catalog_button, catalog_block, 'catalog-block--show', 'click');
    toggle(button_more, header_menu, 'header-menu--show', 'click');
    toggle(close_button, cities_container, 'cities-container--show', 'click');
    toggle(city_select, cities_container, 'cities-container--show', 'click');
    toggle(warehouse_show, overlay_div, 'overlay--show', 'click');
    toggle(overlay_div, overlay_div, 'overlay--show', 'click');
    toggle(overlay_div, warehouses_block, 'warehouses-block--show', 'click');
    toggle(warehouse_show, warehouses_block, 'warehouses-block--show', 'click');
    toggle(warehouses_close, warehouses_block, 'warehouses-block--show', 'click');
    toggle(warehouses_close, overlay_div, 'overlay--show', 'click');

    //Задаем выcоту меню

    var menuHeight = catalog_block.getBoundingClientRect().height;
    var subMenu = document.querySelectorAll('.catalog-submenu');

    for (var i = 0; i < subMenu.length; i++) {
        subMenu[i].style.minHeight = menuHeight + 'px';
    }

});