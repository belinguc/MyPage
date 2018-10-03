// Code widget

var i;
for (i = 0; i < 128; i++) {
    var indexImg = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    var urlImage = 'https://belinguc.github.io/KPI/Beamy_logo/Beamy_logo'+ indexImg +'.jpg';
    var containerResponsiveTile = new UWA.Element('div', { 'class': 'wux-control-inline-container', styles: { 'vertical-align': 'top' } }).inject(mainContainer);
    var myResponsiveTileView = new WUXResponsiveTileView({
        picture: urlImage,
        //icon : 'picture',
        title : 'Beamy' + i,
        multipleTitleLineNumber: false,
        subtitle : 'Dassault Systemes',
        description : 'Home assistant with projection capabilities',
        //statusbarIcons: ['lock', 'trash', 'picture', 'favorite-on', 'check', 'eye', 'home', 'book-open'],
        statusbarIconsTooltips: ['Click to unlock', '', '', 'Remove from favorites'],
        contextualMenu : ['Menu 1', 'and Menu 2'],
        onContextMenuBuildCallback: function (menuList) {
            var me = this;
            var menu = [];
            if (menuList && menuList.length) {
                for (var i = 0; i < menuList.length; i++) {

                    var currentMenu = menuList[i];
                    var icon = WebappsUtils.getWebappsBaseUrl();
                    icon = i == 0 ? icon + 'WUXResponsiveTileView/assets/ExpandAll.png' : icon + 'WUXResponsiveTileView/assets/CollapseAll.png';

                    menu.push({
                        'type': 'PushItem',
                        'title': currentMenu,
                        'icon': icon,
                        'action': {
                            'callback': function (d) {

                            }
                        }
                    });

                    if (i >= 0 && i < menuList.length) {
                        menu.push({
                            'type': 'SeparatorItem'
                        });
                    }
                }
            }
            return menu;
        },
        onStatusbarIconPointerDown: function (e) {
            if (e.options && e.options.iconIndex >= 0 && e.options.iconIndex < myResponsiveTileView.statusbarIcons.length) {
                var NewStatusbarIcons = [];
                var NewStatusbarIconsTooltips = [];

                for (var i = 0; i < myResponsiveTileView.statusbarIcons.length; i++) {
                    NewStatusbarIcons.push(myResponsiveTileView.statusbarIcons[i]);
                    NewStatusbarIconsTooltips.push(myResponsiveTileView.statusbarIconsTooltips[i]);
                }

                //Manage lock/unlock icons
                if (NewStatusbarIcons[e.options.iconIndex] === 'lock') {
                    NewStatusbarIcons[e.options.iconIndex] = 'lock-open';
                    NewStatusbarIconsTooltips[e.options.iconIndex] = 'Click to lock';
                }
                else if (NewStatusbarIcons[e.options.iconIndex] === 'lock-open') {
                    NewStatusbarIcons[e.options.iconIndex] = 'lock';
                    NewStatusbarIconsTooltips[e.options.iconIndex] = 'Click to unlock';
                }

                //Manage favorite-on/favorite-off icons
                if (NewStatusbarIcons[e.options.iconIndex] === 'favorite-on') {
                    NewStatusbarIcons[e.options.iconIndex] = 'favorite-off';
                    NewStatusbarIconsTooltips[e.options.iconIndex] = 'Add to favorites';
                }
                else if (NewStatusbarIcons[e.options.iconIndex] === 'favorite-off') {
                    NewStatusbarIcons[e.options.iconIndex] = 'favorite-on';
                    NewStatusbarIconsTooltips[e.options.iconIndex] = 'Remove from favorites';
                }

                myResponsiveTileView.setProperties({
                    statusbarIcons: NewStatusbarIcons,
                    statusbarIconsTooltips: NewStatusbarIconsTooltips
                });
            }
        }
    }).inject(containerResponsiveTile);
}

myResponsiveTileView.getContent().setStyle('width', '300px');


//Highlight on click event.
myResponsiveTileView.elements.container.addEventListener(PointerEvents.POINTERDOWN, function (e) {
    if (myResponsiveTileView.isHighlighted()) {
        myResponsiveTileView.unhighlight();
    } else {
        myResponsiveTileView.highlight();
    }
});

