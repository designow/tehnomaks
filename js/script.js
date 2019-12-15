document.addEventListener('DOMContentLoaded', function () {


    let catalog_button = selectTag('#catalog-button');
    let catalog_block = selectTag('#catalog-block');
    let block_minicart = selectTag('#header-cart-block__minicart');
    let minicart_list = selectTag('#header-minicart-list');
    let button_more = selectTag('#button-more');
    let header_menu = selectTag('#header-menu');
    let container = selectTag('.container');

    function selectTag(name) {
        return document.querySelector(name);
    }

    catalog_button.addEventListener('click', function (evt) {
        catalog_block.classList.toggle('catalog-block--show');
    });

    button_more.addEventListener('click', function (evt) {
        header_menu.classList.toggle('header-menu--show');
    });

    block_minicart.addEventListener('click', function (evt) {
        block_minicart.classList.toggle('header-cart-block__minicart--show');
        minicart_list.classList.toggle('header-minicart-list--show');
    });

    //Задаем выоту меню

    var menuHeight = catalog_block.getBoundingClientRect().height;
    var subMenu = document.querySelectorAll('.catalog-submenu');

    for (var i = 0; i < subMenu.length; i++) {
        subMenu[i].style.minHeight = menuHeight + 'px';
    }

});

    

    