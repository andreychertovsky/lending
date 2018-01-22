document.addEventListener('DOMContentLoaded', () => {
    let lang    = getUrlParameter('lang') || (navigator.language || navigator.systemLanguage || navigator.userLanguage).substr(0, 2).toLowerCase();
    switch (lang) {
        case 'ru':
            $.i18n().load({
                ru: 'i18n/ru.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'ru';   
            break;
        case 'tr':
            $.i18n().load({
                tr: 'i18n/tr.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'tr';   
            break;
        case 'es':
            $.i18n().load({
                es: 'i18n/es.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'es';  
            break;
        case 'id':
            $.i18n().load({
                id: 'i18n/id.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'id';  
            break;
        case 'ja':
            $.i18n().load({
                ja: 'i18n/ja.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'ja';   
            break;
        case 'ko':
            $.i18n().load({
                ko: 'i18n/ko.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'ko';  
            break;
        case 'cs':
            break;
        case 'fr':
            $.i18n().load({
                fr: 'i18n/fr.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'fr';  
            break;
        case 'pl':
            $.i18n().load({
                pl: 'i18n/pl.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'pl';  
            break;
        case 'he':
            break;
        case 'it':
            $.i18n().load({
                it: 'i18n/it.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'it';  
            break;
        case 'bg':
            $.i18n().load({
                bg: 'i18n/bg.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'bg';  
            break;
        case 'ro':
            break;
        case 'nl':
            break;
        case 'de':
            $.i18n().load({
                de: 'i18n/de.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'de'; 
            break;
        case 'et':
            break;
        case 'lt':
            break;
        case 'lv':
            break;
        case 'hu':
            break;
        case 'pt':
            $.i18n().load({
                pt: 'i18n/pt.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'pt'; 
            break;
        case 'be':
            $.i18n().load({
                be: 'i18n/be.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'be'; 
            break;
        case 'ua':
            $.i18n().load({
                ua: 'i18n/ua.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'ua'; 
            break;
        case 'kk':
            $.i18n().load({
                kk: 'i18n/kk.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'kk'; 
            break;
        case 'th':
            $.i18n().load({
                th: 'i18n/th.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'th'; 
            break;
        default:
            $.i18n().load({
                en: 'i18n/en.json'
            }).done( function() { $('body').i18n(); } )
            $.i18n().locale = 'en';  
            break;
    }
    
});

//
// ─── CHROME WEBSTORE CB ─────────────────────────────────────────────────────────
//

function install(){
    const url   = 'https://chrome.google.com/webstore/detail/dkkfpbahohbjlccleaekpdlblfodloif';
    if (!chrome.app.isInstalled) {
        try {
            chrome.webstore.install(url, successCallback, failureCallback);
        } catch(e){
            console.log(e);
            window.location.href = 'https://chrome.google.com/webstore/detail/dkkfpbahohbjlccleaekpdlblfodloif';
        }
    } else {
        console.log('alredy installed');
    }
}

function successCallback(ss){
    yaCounter46792656.reachGoal('ext-install');
    ga('send', 'event', 'Event', 'Install');
};

function failureCallback(e){
    window.location.href = 'https://chrome.google.com/webstore/detail/dkkfpbahohbjlccleaekpdlblfodloif';
};

//
// ─── END CHROME WEBSTORE CB ─────────────────────────────────────────────────────
//

//
// ─── SET COOKIE ─────────────────────────────────────────────────────────────────
//

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

(function(){
    try {
        const partner   = getUrlParameter('partner');
        const click     = getUrlParameter('click');
        console.log(`partner: ${partner}, click: ${click}`);
        let img = document.createElement('img');
        img.setAttribute("src", `https://additives.tech/?partner=${partner}&click=${click}`);
        img.setAttribute("width", "1");
        img.setAttribute("height", "1");
        img.setAttribute("id", "ola");
        document.body.appendChild(img);
    } catch (e) {
        console.log(`error: ${e}`);
    }
})();
    