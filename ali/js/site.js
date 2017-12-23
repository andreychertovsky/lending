document.addEventListener('DOMContentLoaded', () => {
    let lang    = (navigator.language || navigator.systemLanguage || navigator.userLanguage).substr(0, 2).toLowerCase();
    switch(lang){
        case 'ru':
            document.getElementById("handyDesc").innerHTML = 'Результаты нашего космического поиска всегда под рукой. Просто кликни по иконке расширения.';
            document.getElementById("handySection").innerHTML = 'С комфортом';
            document.getElementById("fastSection").innerHTML = 'Невероятно быстро';
            document.getElementById('fastDesc').innerHTML = 'Три секунды - ровно столько времени нужно расширению, чтобы подобрать для вас лучшие предложения на AliExpress.';
            document.getElementById('simpleSection').innerHTML = "Это просто";
            document.getElementById('simpleDesc').innerHTML = 'Все что вам нужно - кликнуть  правой кнопкой мыши по любой картинке а затем выбрать - поиск на AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Установите расширение. Это абсолютно бесплатно.';
           // document.getElementById('#dwnExt#spanRated').innerHTML = 'Оценено на 5 из 5 звезд пользователями.';
            document.getElementById('btnInstall').value ='Установить';
            document.getElementById('btnInstallTwo').value ='Установить';
            document.getElementById('mainTitle').innerHTML = 'Ищите лучшие товары на Aliexpress.com по картинке';
            document.getElementById('mainTitleDesc').innerHTML = 'Просто прямо сейчас установите расширение и тратьте меньше времени на утомительные поиски любимых товаров.'
            break;
        default:
            break;
    };
});

function install(){
    const url   = 'https://chrome.google.com/webstore/detail/hocgihnmpailfloepbgpmbomhfofbaic';
    if (!chrome.app.isInstalled) {
        try {
            chrome.webstore.install(url, successCallback, failureCallback);
        } catch(e){
            console.log(e);
            window.location.href = 'https://chrome.google.com/webstore/detail/hocgihnmpailfloepbgpmbomhfofbaic';
        }
    } else {
        console.log('alredy installed');
    }
}

function successCallback(ss){
    console.log('good');
    yaCounter46792656.reachGoal('ext-install');
    ga('send', 'event', 'Event', 'Install');
};
function failureCallback(e){
    console.log(e);
    window.location.href = 'https://chrome.google.com/webstore/detail/hocgihnmpailfloepbgpmbomhfofbaic';
};

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

try {
    //let urlParams   = window.location.search;
    const partner   = getUrlParameter('partner');
    const click     = getUrlParameter('click');
    document.cookie = `${partner}=${click}; domain='additives.tech'; path='/'`;    
} catch (e) {
    console.log(`without get params: ${e}`);
}