document.addEventListener('DOMContentLoaded', function () {


    let catalog_button = selectTag('#catalog-button');
    let catalog_block = selectTag('#catalog-block');
    let block_minicart = selectTag('#header-cart-block__minicart');
    let minicart_list = selectTag('#header-minicart-list');
    let button_more = selectTag('#button-more');
    let header_menu = selectTag('#header-menu');

    function selectTag(name) {
        return document.querySelector(name);
    }

    function getSubmenu(event) {
        return selectTag('#articul-' + event.target.getAttribute('data-articul'));
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


    //Показ подменю

    selectTag('#catalog-list').addEventListener('mouseover', function (evt) {
        if (event.target.nodeName == 'A') {

            //Получаем ссылку на подменю исходя из data-articul  

            let subMenu = getSubmenu(evt);

            if (subMenu && !subMenu.classList.contains("catalog-submenu--show")) {
                subMenu.classList.add("catalog-submenu--show");
            }
        }
    });

    selectTag('#catalog-submenu-block').addEventListener('mouseover', function (evt) {
        if (event.target.nodeName == 'DIV') {

            //Получаем ссылку на подменю исходя из data-articul  

            let subMenu = getSubmenu(evt);

            if (subMenu && !subMenu.classList.contains("catalog-submenu--show")) {
                subMenu.classList.add("catalog-submenu--show");
            }
        }
    });


    selectTag('#catalog-submenu-block').addEventListener('mouseout', function (evt) {
        if (event.target.nodeName == 'DIV') {

            let subMenu = getSubmenu(evt);

            if (subMenu && subMenu.classList.contains("catalog-submenu--show")) {
                subMenu.classList.remove("catalog-submenu--show");
            }
        }
    });

    //Cкрытие подменю

    selectTag('#catalog-list').addEventListener('mouseout', function (evt) {
        if (event.target.nodeName == 'A') {

            let subMenu = getSubmenu(evt);

            if (subMenu && subMenu.classList.contains("catalog-submenu--show")) {

                subMenu.classList.remove("catalog-submenu--show");

            }
        }
    });

    //Конец показ подменю

});

    //Останки от прежнего меню

    // var menuHeight = catalog_block.getBoundingClientRect().height;
    // var subMenu = document.querySelectorAll('.catalog-list--sublist');

    // for (var i = 0; i < subMenu.length; i++) {
    //     subMenu[i].style.height = menuHeight + 'px';
    // }