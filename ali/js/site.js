document.addEventListener('DOMContentLoaded', () => {
    let lang    = (navigator.language || navigator.systemLanguage || navigator.userLanguage).substr(0, 2).toLowerCase();
    switch (lang) {
        case 'ru':
            document.getElementById("handyDesc").innerHTML = 'Результаты нашего космического поиска всегда под рукой. Просто кликни по иконке расширения.';
            document.getElementById("handySection").innerHTML = 'С комфортом';
            document.getElementById("fastSection").innerHTML = 'Невероятно быстро';
            document.getElementById('fastDesc').innerHTML = 'Три секунды - ровно столько времени нужно расширению, чтобы подобрать для вас лучшие предложения на AliExpress.';
            document.getElementById('simpleSection').innerHTML = "Это просто";
            document.getElementById('simpleDesc').innerHTML = 'Все что вам нужно - кликнуть  правой кнопкой мыши по любой картинке а затем выбрать - поиск на AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Установите расширение. Это абсолютно бесплатно.';
            // document.getElementById('#dwnExt#spanRated').innerHTML = 'Оценено на 5 из 5 звезд пользователями.';
            document.getElementById('btnInstall').value = 'Установить';
            document.getElementById('btnInstallTwo').value = 'Установить';
            document.getElementById('mainTitle').innerHTML = 'Ищите лучшие товары на Aliexpress.com по картинке';
            document.getElementById('mainTitleDesc').innerHTML = 'Просто прямо сейчас установите расширение и тратьте меньше времени на утомительные поиски любимых товаров.';
            break;
        case 'tr':
            document.getElementById("handyDesc").innerHTML = 'Uzay arama sonuçlarımız her zaman hazır. Sadece uzantı simgesini tıklayın. ';
            document.getElementById("handySection").innerHTML = 'Konforlu';
            document.getElementById("fastSection").innerHTML = 'İnanılmaz derecede hızlı';
            document.getElementById('fastDesc').innerHTML = 'Üç saniye - tam olarak AliExpress\'in en iyi fırsatlarını bulmak için genişlemeniz gereken zaman.';
            document.getElementById('simpleSection').innerHTML = "Basittir";
            document.getElementById('simpleDesc').innerHTML = 'İhtiyacınız olan tek şey herhangi bir resme sağ tıklayın ve ardından - AliExpress\'te arama yapın.';
            document.getElementById('dwnExt').innerHTML = 'Uzantıyı yükle. Kesinlikle özgürdür. ';
            // document.getElementById ('# dwnExt # spanRated').innerHTML = 'Kullanıcılar tarafından 5 yıldızın 5\'i derecelendirildi.';
            document.getElementById('btnInstall').value = 'Yükle';
            document.getElementById('btnInstallTwo').value = 'Yükle';
            document.getElementById('mainTitle').innerHTML = 'Resimden Aliexpress.com\'da en iyi ürünleri arayın';
            document.getElementById('mainTitleDesc').innerHTML = 'Şu anda, uzantıyı kurun ve sık kullandığınız ürünler için sıkıcı aramalarda daha az zaman harcayın.';
            break;
        case 'es':
            document.getElementById("handyDesc").innerHTML = 'Los resultados de nuestra búsqueda espacial están siempre a mano. Simplemente haga clic en el ícono de la extensión. ';
            document.getElementById("handySection").innerHTML = 'Con comodidad';
            document.getElementById("fastSection").innerHTML = 'Increíblemente rápido';
            document.getElementById('fastDesc').innerHTML = 'Tres segundos: exactamente el tiempo que necesita expandirse para encontrar las mejores ofertas en AliExpress.';
            document.getElementById('simpleSection').innerHTML = "Es simple";
            document.getElementById('simpleDesc').innerHTML = 'Todo lo que necesita es hacer clic derecho en cualquier imagen y luego seleccionar - buscar en AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Instalar la extensión. Es absolutamente gratis. ';
            // document.getElementById ('# dwnExt # spanRated').innerHTML = 'Calificado por 5 de 5 estrellas por los usuarios.';
            document.getElementById('btnInstall').value = 'Instalar';
            document.getElementById('btnInstallTwo').value = 'Instalar';
            document.getElementById('mainTitle').innerHTML = 'Busque los mejores productos en Aliexpress.com de la imagen';
            document.getElementById('mainTitleDesc').innerHTML = 'Justo ahora, instale la extensión y dedique menos tiempo a tediosas búsquedas de sus productos favoritos.';
            break;
        case 'id':
            document.getElementById("handyDesc").innerHTML = 'Hasil pencarian ruang kami selalu ada. Cukup klik pada icon ekstensi. ';
            document.getElementById("handypection").innerHTML = 'Dengan kenyamanan';
            document.getElementById("fastSection").innerHTML = 'Sangat cepat';
            document.getElementById('fastDesc').innerHTML = 'Tiga detik - persis saat Anda perlu memperluas untuk menemukan penawaran terbaik di AliExpress.';
            document.getElementById('simpleSection').innerHTML = "Sederhana saja";
            document.getElementById('simpleDesc').innerHTML = 'Yang Anda butuhkan hanyalah klik kanan pada gambar apapun dan kemudian pilih - cari di AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Instal ekstensi. Ini gratis. ';
            // document.getElementById ('# dwnExt # spanRated').innerHTML = 'Diperingkat 5 dari 5 bintang oleh pengguna.';
            document.getElementById('btnInstall').value = 'Install';
            document.getElementById('btnInstallTwo').value = 'Install';
            document.getElementById('mainTitle').innerHTML = 'Carilah produk terbaik di Aliexpress.com dari gambar';
            document.getElementById('mainTitleDesc').innerHTML = 'Saat ini juga, pasang ekstensi dan luangkan sedikit waktu untuk pencarian yang membosankan untuk produk favorit Anda.';
            break;
        case 'ja':
            document.getElementById("handyDesc").innerHTML = '私たちのスペース検索の結果は、常に手元にあります。拡張機能アイコンをクリックするだけです。 ';
            document.getElementById("handySection").innerHTML = '快適さで';
            document.getElementById("fastSection").innerHTML = '信じられないほど速い';
            document.getElementById('fastDesc').innerHTML = '3秒間 - AliExpressで最良の取引を見つけるために展開する必要がある正確な時間です。';
            document.getElementById('simpleSection').innerHTML = "それは簡単です";
            document.getElementById('simpleDesc').innerHTML = '必要なのは、画像を右クリックしてAliExpressで検索するだけです。';
            document.getElementById('dwnExt').innerHTML = '拡張機能をインストールします。それは絶対に自由です。';
            // document.getElementById('＃dwnExt＃spanRated')。innerHTML = 'ユーザーによって5個の星のうち5個の評価されています。';
            document.getElementById('btnInstall').value = 'インストール';
            document.getElementById('btnInstallTwo').value = 'インストール';
            document.getElementById('mainTitle').innerHTML = '写真からAliexpress.comで最高の製品を探す';
            document.getElementById('mainTitleDesc').innerHTML = 'ちょうど今すぐ、拡張機能をインストールして、お気に入りの製品の退屈な検索に費やす時間を減らしてください。';
            break;
        case 'ko':
            document.getElementById("handyDesc").innerHTML = '우리의 공간 검색 결과는 항상 도움이됩니다. 확장 아이콘을 클릭하십시오. ';
            document.getElementById("handySection").innerHTML = '편안함과 함께';
            document.getElementById("fastSection").innerHTML = '믿을 수 없을 정도로 빠름';
            document.getElementById('fastDesc').innerHTML = '3 초 - AliExpress에서 가장 좋은 거래를 찾기 위해 확장해야하는 시간.';
            document.getElementById('simpleSection').innerHTML = "간단합니다.";
            document.getElementById('simpleDesc').innerHTML = '그림 만 마우스 오른쪽 버튼으로 클릭하고 AliExpress에서 검색을 선택하면됩니다.';
            document.getElementById('dwnExt').innerHTML = '확장 프로그램을 설치하십시오. 그것은 절대적으로 무료입니다. ';
            // document.getElementById ( '# dwnExt # spanRated').innerHTML = '사용자 별 5 점 만점에 5 점을 받았습니다.';
            document.getElementById('btnInstall').value = '설치';
            document.getElementById('btnInstallTwo').value = '설치';
            document.getElementById('mainTitle').innerHTML = '그림에서 Aliexpress.com에서 최고의 제품을 찾으십시오.';
            document.getElementById('mainTitleDesc').innerHTML = '지금 당장은 확장 프로그램을 설치하고 좋아하는 제품에 대한 지루한 검색에 더 적은 시간을 할애하십시오.';
            break;
        case 'cs':
            document.getElementById('handyDesc').innerHTML = 'Výsledky našeho hledání prostoru je vždy po ruce. Stačí kliknout na ikonu rozšíření.';
            document.getElementById("handySection").innerHTML = 'S komfortem';
            document.getElementById("fastSection").innerHTML = 'Neuvěřitelně rychlý';
            document.getElementById('fastDesc').innerHTML = 'Tři vteřiny. - přesně doba, kterou je třeba rozšířit, k vyzvednutí vás nejlepší nabídky na aliexpress';
            document.getElementById('simpleSection').innerHTML = "Je to jednoduché";
            document.getElementById('simpleDesc').innerHTML = 'Vše, co potřebujete - pravým tlačítkem myši na libovolný obrázek a vyberte - hledat na aliexpress.';
            document.getElementById('dwnExt').innerHTML = 'Nainstalujte příponu. Je to zcela zdarma. ';
            //document.getElementById ( '# # dwnExt spanRated').innerHTML = 'Hodnoceno 5 z 5 uživatelů hvězd.';
            document.getElementById('btnInstall').value = 'Nainstalovat';
            document.getElementById('btnInstallTwo').value = 'Nainstalovat';
            document.getElementById('mainTitle').innerHTML = 'Hledání nejlepší produkty na Aliexpress.com obraz';
            document.getElementById('mainTitleDesc').innerHTML = 'Právě teď nainstalovat rozšíření a stráví méně času na únavné hledání pro své oblíbené produkty.';
            break;
        case 'fr':
            document.getElementById("handyDesc").innerHTML = 'Les résultats de notre recherche spatiale sont toujours à portée de main. Cliquez simplement sur l\'icône de l\'extension. ';
            document.getElementById("handySection").innerHTML = 'Avec confort';
            document.getElementById("fastSection").innerHTML = "Incroyablement rapide";
            document.getElementById('fastDesc').innerHTML = 'Trois secondes - exactement le temps nécessaire pour développer les meilleures offres sur AliExpress.';
            document.getElementById('simpleSection').innerHTML = "C'est simple";
            document.getElementById('simpleDesc').innerHTML = 'Tout ce dont vous avez besoin est de cliquer avec le bouton droit de la souris sur une image, puis de sélectionner - rechercher sur AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Installer l\'extension. C\'est absolument gratuit. ';
            // document.getElementById ('# dwnExt # spanRated'). innerHTML = 'évalué par 5 étoiles sur 5 par les utilisateurs.';
            document.getElementById('btnInstall').value = 'Installer';
            document.getElementById('btnInstallTwo').value = 'Installer';
            document.getElementById('mainTitle').innerHTML = 'Rechercher les meilleurs produits sur Aliexpress.com à partir de l\'image';
            document.getElementById('mainTitleDesc').innerHTML = 'Juste maintenant, installez l\'extension et passez moins de temps sur les recherches fastidieuses pour vos produits favoris.';
            break;
        case 'pl':
            document.getElementById("handyDesc").innerHTML = 'Wyniki naszego wyszukiwania przestrzeni są zawsze pod ręką. Wystarczy kliknąć ikonę rozszerzenia. ';
            document.getElementById("handySection").innerHTML = 'Z komfortem';
            document.getElementById("fastSection").innerHTML = 'Niewiarygodnie szybki';
            document.getElementById("fastDesc").innerHTML = 'Trzy sekundy - dokładnie czas, który musisz rozwinąć, aby znaleźć najlepszą ofertę AliExpress.';
            document.getElementById("simpleSection").innerHTML = "To proste";
            document.getElementById('simpleDesc').innerHTML = 'Wszystko, czego potrzebujesz - kliknij prawym przyciskiem myszy na dowolnym obrazie, a następnie wybierz - wyszukiwać AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Zainstaluj rozszerzenie. Jest całkowicie bezpłatny. ';
            // document.getElementById ('# dwnExt # spanRated'). innerHTML = 'Ocenione przez 5 na 5 gwiazdek przez użytkowników.';
            document.getElementById('btnInstall').value = 'Zainstaluj';
            document.getElementById('btnInstallTwo').value = 'Install';
            document.getElementById('mainTitle').innerHTML = 'Poszukaj najlepszych produktów na stronie od obrazu ';
            document.getElementById('mainTitleDesc').innerHTML = 'Właśnie teraz zainstalować rozszerzenie i spędzają mniej czasu na żmudne poszukiwania dla swoich ulubionych produktów.';
            break;
        case 'he':
            document.getElementById("handyDesc").innerHTML = 'התוצאות של חיפוש החלל שלנו תמיד בהישג יד. פשוט לחץ על סמל התוסף.';
            document.getElementById("handySection").innerHTML = 'בנוחות';
            document.getElementById("fastSection").innerHTML = 'מהר מאוד';
            document.getElementById('fastDesc').innerHTML = 'שלוש שניות - בדיוק כמו הרבה זמן אתה צריך להרחיב כדי למצוא את העסקאות הטובות ביותר עבורך על Aliexpress';
            document.getElementById('simpleSection').innerHTML = "זה קל";
            document.getElementById('simpleDesc').innerHTML = 'כל מה שאתה צריך - לחץ לחיצה ימנית על כל תמונה ולאחר מכן בחר - לחפש AliExpress';
            document.getElementById('dwnExt').innerHTML = 'התקן את התוסף. זה לגמרי בחינם.';
            // document.getElementById('#dwnExt#spanRated').innerHTML = 'דורג 5 מתוך 5 כוכבים על ידי משתמשים.';
            document.getElementById('btnInstall').value = 'התקן';
            document.getElementById('btnInstallTwo').value = 'התקן';
            document.getElementById('mainTitle').innerHTML = 'חפש את המוצרים הטובים ביותר על Aliexpress.com על התמונה';
            document.getElementById('mainTitleDesc').innerHTML = 'כל שעליך לעשות הוא להתקין את התוסף עכשיו ולהוציא פחות זמן על חיפושים מייגעים למוצרים המועדפים עליך.';
            break;
        case 'it':
            document.getElementById("handyDesc").innerHTML = 'I risultati della nostra ricerca spaziale sono sempre a portata di mano. Basta fare clic sull\'icona di estensione. ';
            document.getElementById("handySection").innerHTML = 'Con comodità';
            document.getElementById("fastSection").innerHTML = 'Incredibilmente veloce';
            document.getElementById('fastDesc').innerHTML = 'Tre secondi - esattamente il tempo che devi espandere per trovare le migliori offerte su AliExpress.';
            document.getElementById('simpleSection').innerHTML = "È semplice";
            document.getElementById('simpleDesc').innerHTML = 'Tutto ciò che serve è fare clic con il tasto destro del mouse su qualsiasi immagine e selezionare - cerca su AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Installa l\'estensione. È assolutamente gratuito. ';
            // document.getElementById ('# dwnExt # spanRated'). innerHTML = 'Valutato da 5 su 5 stelle dagli utenti.';
            document.getElementById('btnInstall').value = 'Install';
            document.getElementById('btnInstallTwo').value = 'Install';
            document.getElementById('mainTitle').innerHTML = 'Cerca i prodotti migliori su Aliexpress.com dall\'immagine';
            document.getElementById('mainTitleDesc').innerHTML = 'Proprio adesso, installa l\'estensione e dedica meno tempo a ricerche noiose per i tuoi prodotti preferiti.';
            break;
        case 'bg':
            document.getElementById("handyDesc").innerHTML = 'Резултатите от нашето космическо търсене винаги са на разположение. Трябва само да кликнете върху иконата на разширението. ';
            document.getElementById("handySection").innerHTML = 'С комфорт';
            document.getElementById("fastSection").innerHTML = 'Невероятно бързо';
            document.getElementById('fastDesc').innerHTML = 'Три секунди - точно времето, което трябва да разширите, за да намерите най-добрите сделки на AliExpress.';
            document.getElementById('simpleSection').innerHTML = "Това е просто";
            document.getElementById('simpleDesc').innerHTML = 'Всичко, от което се нуждаете, е да щракнете с десния бутон на мишката върху която и да е снимка и след това да изберете - search on AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Инсталирайте разширението. Това е абсолютно безплатно. ';
            // document.getElementById ('# dwnExt # spanRated').innerHTML = 'Оценени от 5 от 5 звезди от потребители.';
            document.getElementById('btnInstall').value = 'Инсталиране';
            document.getElementById('btnInstallTwo').value = 'Инсталиране';
            document.getElementById('mainTitle').innerHTML = 'Търсене на най-добрите продукти на Aliexpress.com от снимката';
            document.getElementById('mainTitleDesc').innerHTML = 'Просто инсталирайте разширението точно сега и отделете по-малко време за досадни търсения на любимите си продукти.';
            break;
        case 'ro':
            document.getElementById("handyDesc").innerHTML = 'Rezultatele căutării noastre în spațiu sunt întotdeauna la îndemânădoar faceți clic pe pictograma extensie. ';
            document.getElementById("handySection").innerHTML = 'Cu confort';
            document.getElementById("fastSection").innerHTML = 'Incredibil de rapid';
            document.getElementById('fastDesc').innerHTML = 'Trei secunde - exact momentul în care trebuie să vă extindeți pentru a găsi cele mai bune oferte pe AliExpress.';
            document.getElementById('simpleSection').innerHTML = "Este simplu";
            document.getElementById('simpleDesc').innerHTML = 'Tot ce ai nevoie este să faceți clic dreapta pe orice imagine și apoi să selectați - căutați pe AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Instalați extensia. Este absolut gratuit. ';
            // document.getElementById ('# dwnExt # spanRated').innerHTML = 'Evaluat de 5 stele din 5 de către utilizatori.';
            document.getElementById('btnInstall').value = 'Instalare';
            document.getElementById('btnInstallTwo').value = 'Instalare';
            document.getElementById('mainTitle').innerHTML = 'Căutați cele mai bune produse de pe imagine pe Aliexpress.com';
            document.getElementById('mainTitleDesc').innerHTML = 'Doar acum, instalați extensia și petreceți mai puțin timp pe căutări obositoare pentru produsele dvs. preferate.';
            break;
        case 'nl':
            document.getElementById("handyDesc").innerHTML = 'De resultaten van ons zoeken in de ruimte zijn altijd bij de hand. Klik gewoon op het extensiepictogram. ';
            document.getElementById("handySection").innerHTML = 'Met comfort';
            document.getElementById("fastSection").innerHTML = 'Ongelooflijk snel';
            document.getElementById('fastDesc').innerHTML = 'Drie seconden - precies de tijd die u nodig hebt om uit te breiden om de beste deals voor AliExpress te vinden.';
            document.getElementById('simpleSection').innerHTML = "Het is eenvoudig";
            document.getElementById('simpleDesc').innerHTML = 'Het enige dat u nodig hebt, is door met de rechtermuisknop op een afbeelding te klikken en vervolgens te selecteren - zoeken op AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Installeer de extensie. Het is helemaal gratis. ';
            // document.getElementById ('# dwnExt # spanRated'). innerHTML = 'Door 5 van de 5 sterren door gebruikers beoordeeld.';
            document.getElementById('btnInstall').value = 'Installeren';
            document.getElementById('btnInstallTwo').value = 'Installeren';
            document.getElementById('mainTitle').innerHTML = 'Kijk voor de beste producten op Aliexpress.com van de afbeelding';
            document.getElementById('mainTitleDesc').innerHTML = 'Installeer nu de extensie en besteed minder tijd aan saaie zoekopdrachten naar uw favoriete producten.';
            break;
        case 'de':
            document.getElementById("handyDesc").innerHTML = 'Die Ergebnisse unserer Space-Suche sind immer zur Hand. Klicken Sie einfach auf das Erweiterungssymbol. ';
            document.getElementById("handySection").innerHTML = 'Mit Komfort';
            document.getElementById("fastSection").innerHTML = 'Unglaublich schnell';
            document.getElementById('fastDesc').innerHTML = 'Drei Sekunden - genau die Zeit, die Sie benötigen, um die besten Angebote für AliExpress zu finden.';
            document.getElementById('simpleSection').innerHTML = "Es ist einfach";
            document.getElementById('simpleDesc').innerHTML = 'Alles, was Sie brauchen, ist mit der rechten Maustaste auf ein Bild und wählen Sie dann - Suche auf AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Installieren Sie die Erweiterung. Es ist absolut kostenlos. ';
            // document.getElementById ('# dwnExt # spanRated'). innerHTML = 'Von Benutzern mit 5 von 5 Sternen bewertet.';
            document.getElementById('btnInstall').value = 'Installieren';
            document.getElementById('btnInstallTwo').value = 'Installieren';
            document.getElementById('mainTitle').innerHTML = 'Suchen Sie nach den besten Produkten bei Aliexpress.com aus dem Bild';
            document.getElementById('mainTitleDesc').innerHTML = 'Installieren Sie gerade jetzt die Erweiterung und verbringen Sie weniger Zeit mit langwierigen Suchen nach Ihren Lieblingsprodukten.';
            break;
        case 'et':
            document.getElementById("handyDesc").innerHTML = 'Meie ruumiotsingu tulemused on alati käepärast. Lihtsalt klõpsake pikendusikoonil. ';
            document.getElementById("handySection").innerHTML = "mugavusega";
            document.getElementById("fastSection").innerHTML = "Uskumatult kiire";
            document.getElementById('fastDesc').innerHTML = 'Kolm sekundit - täpselt aeg, mida peate laiendama, et leida parimaid pakkumisi AliExpress\'is.';
            document.getElementById('simpleSection').innerHTML = "See on lihtne";
            document.getElementById('simpleDesc').innerHTML = 'Kõik, mida vajate, on paremklõps mis tahes pildil ja seejärel valida - otsida AliExpress\'is.';
            document.getElementById('dwnExt').innerHTML = 'Paigaldage laiendus. See on täiesti tasuta. ';
            // document.getElementById ('# dwnExt # spanRated'). innerHTML = 'Rated by 5 out of 5 stars by users.';
            document.getElementById('btnInstall').value = 'Install';
            document.getElementById('btnInstallTwo').value = 'Install';
            document.getElementById('mainTitle').innerHTML = 'Otsige Aliexpress.comist parimaid tooteid pildilt';
            document.getElementById('mainTitleDesc').innerHTML = 'Praegu installige laiendus ja kulutage vähem aega lemmiktooteid otsivatele otsingutele.';
            break;
        case 'lt':
            document.getElementById("handyDesc").innerHTML = 'Mūsų paieškos erdvėje rezultatai yra visada prieinami. Tiesiog spustelėkite piktogramos piktogramą. ';
            document.getElementById("handySection").innerHTML = "Su komfortu";
            document.getElementById("fastSection").innerHTML = "Neįtikėtinai greitai";
            document.getElementById('fastDesc').innerHTML = 'Trys sekundės - tiksliai laikas, kurį reikia išplėsti, norint rasti geriausius pasiūlymus AliExpress\'e.';
            document.getElementById("simpleSection").innerHTML = "Tai paprasta";
            document.getElementById('simpleDesc').innerHTML = 'Viskas ko jums reikia, kad dešiniuoju pelės mygtuku spustelėkite bet kurį paveikslėlį, tada pasirinkite - ieškokite AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Įdiekite plėtinį. Tai visiškai nemokama. ';
            // document.getElementById ('# dwnExt # spanRated'). innerHTML = 'Rated by 5 out of 5 stars by users.';
            document.getElementById('btnInstall').value = 'Įdiegti';
            document.getElementById('btnInstallTwo').value = 'Įdiegti';
            document.getElementById('mainTitle').innerHTML = 'Ieškokite geriausių produktų Aliexpress.com iš paveikslėlio';
            document.getElementById('mainTitleDesc').innerHTML = 'Tiesiog dabar, įdiekite plėtinį ir praleidžiate mažiau laiko, kad nuobodūs mėgstamų produktų paieška.';
            break;
        case 'lv':
            document.getElementById("handyDesc").innerHTML = 'Mūsu meklēšanas telpā rezultāti vienmēr ir pie rokas. Vienkārši noklikšķiniet uz paplašinājuma ikonas. ';
            document.getElementById("handySection").innerHTML = 'Ar komfortu';
            document.getElementById("fastSection").innerHTML = 'Neticami ātri';
            document.getElementById("fastDesc").innerHTML = "Trīs sekundes -. tieši laikā jums ir nepieciešams paplašināt, lai jums pakaļ labākos piedāvājumus par AliExpress ";
            document.getElementById('simpleSection').innerHTML = "Tas ir vienkārši";
            document.getElementById("simpleDesc").innerHTML = "Viss, kas Jums nepieciešams - peles labo pogu noklikšķiniet uz jebkuru attēlu, un pēc tam izvēlieties - meklēt AliExpress. ";
            document.getElementById('dwnExt').innerHTML = 'Instalējiet paplašinājumu. Tas ir absolūti bezmaksas. ';
            // document.getElementById ( "# dwnExt # spanRated").innerHTML = 'Nominālais 5 no 5 zvaigznēm lietotājiem. ";
            document.getElementById('btnInstall').value = 'Instalēt';
            document.getElementById("btnInstallTwo").value = 'Instalēt';
            document.getElementById("mainTitle").innerHTML = "Meklēt labākajiem produktiem Aliexpress.com attēlu";
            document.getElementById("mainTitleDesc").innerHTML = "Tikko instalēt paplašinājumu un tērēt mazāk laika garlaicīga meklējot saviem iecienītākajiem produktiem. ";
            break;
        case 'hu':
            document.getElementById("handyDesc").innerHTML = 'Az űrkutatási eredményeink mindig elérhetőek. Csak kattintson a kiterjesztés ikonra. ';
            document.getElementById("handySection").innerHTML = "Kényelem";
            document.getElementById("fastSection").innerHTML = "Hihetetlenül gyors";
            document.getElementById('fastDesc').innerHTML = 'Három másodperc - pontosan az időt meg kell bővíteni, hogy elhozzuk a legjobb ajánlatot a AliExpress.';
            document.getElementById('simpleSection').innerHTML = "Ez egyszerű";
            document.getElementById('simpleDesc').innerHTML = 'Minden, amire szükség van - a jobb gombbal bármelyik képre, majd válassza - keresni a AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Telepítse a kiterjesztést. Teljesen ingyenes. ';
            // document.getElementById ( '# dwnExt # spanRated).innerHTML = 'Rated 5 out of 5 stars felhasználók.';
            document.getElementById('btnInstall').value = 'Telepítés';
            document.getElementById('btnInstallTwo').value = 'Telepítés';
            document.getElementById('mainTitle').innerHTML = "keresése a legjobb termék Aliexpress.com a képen";
            document.getElementById('mainTitleDesc').innerHTML = 'Csak most telepíteni a bővítményt, és kevesebb időt töltenek a fáradságos keresés kedvenc termékeket.';
            break;
        case 'pt':
            document.getElementById("handyDesc").innerHTML = 'Os resultados da nossa pesquisa espacial estão sempre à mão. Basta clicar no ícone da extensão. ';
            document.getElementById("handySection").innerHTML = 'Com conforto';
            document.getElementById("fastSection").innerHTML = 'Incredibly fast';
            document.getElementById('fastDesc').innerHTML = 'Três segundos - exatamente o tempo que você precisa expandir para encontrar as melhores ofertas no AliExpress.';
            document.getElementById('simplesSection').innerHTML = "É simples";
            document.getElementById('simplesDesc').innerHTML = 'Tudo o que você precisa é clicar com o botão direito em qualquer imagem e, em seguida, selecionar - procurar no AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Instale a extensão. É absolutamente grátis. ';
            // document.getElementById ('# dwnExt # spanRated'). innerHTML = 'Avaliado por 5 de 5 estrelas por usuários.';
            document.getElementById('btnInstall').value = 'Install';
            document.getElementById('btnInstallTwo').value = 'Install';
            document.getElementById('mainTitle').innerHTML = 'Procure os melhores produtos em Aliexpress.com a partir da imagem';
            document.getElementById('mainTitleDesc').innerHTML = 'Agora, instale a extensão e gaste menos tempo em pesquisas tediosas para seus produtos favoritos.';
            break;
        case 'be':
            document.getElementById("handyDesc").innerHTML = 'Вынікі нашага касмічнага пошуку заўсёды пад рукой. Проста клікні па абразку пашырэння. ';
            document.getElementById("handySection").innerHTML = 'З камфортам';
            document.getElementById("fastSection").innerHTML = 'Неверагодна хутка';
            document.getElementById('fastDesc').innerHTML = 'Тры секунды - роўна столькі часу трэба пашырэнню, каб падабраць для вас лепшыя прапановы на AliExpress.';
            document.getElementById('simpleSection').innerHTML = "Гэта проста";
            document.getElementById('simpleDesc').innerHTML = 'Усё, што вам трэба - клікнуць правай кнопкай мышы па любой малюнку а затым выбраць - пошук на AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Усталюйце пашырэнне. Гэта абсалютна бясплатна. ';
            // document.getElementById ( '# dwnExt # spanRated'). InnerHTML = 'Ацэнена на 5 з 5 зорак карыстальнікамі.';
            document.getElementById('btnInstall').value = 'Наставіць';
            document.getElementById('btnInstallTwo').value = 'Наставіць';
            document.getElementById('mainTitle').innerHTML = 'Шукайце лепшыя тавары на Aliexpress.com па малюнку';
            document.getElementById('mainTitleDesc').innerHTML = 'Проста прама зараз ўсталюеце пашырэнне і марнуйце менш часу на стомныя пошукі любімых тавараў.';
            break;
        case 'uk':
            document.getElementById("handyDesc").innerHTML = 'Результати нашого космічного пошуку завжди під рукою. Просто кликни по іконці розширення. ';
            document.getElementById("handySection").innerHTML = 'З комфортом';
            document.getElementById("fastSection").innerHTML = 'Неймовірно швидко';
            document.getElementById('fastDesc').innerHTML = 'Три секунди - рівно стільки часу потрібно розширення, щоб підібрати для вас кращі пропозиції на AliExpress.';
            document.getElementById('simpleSection').innerHTML = "Це просто";
            document.getElementById('simpleDesc').innerHTML = 'Все що вам потрібно - натиснути правою кнопкою миші по будь-якої картинки а потім вибрати - пошук на AliExpress.';
            document.getElementById('dwnExt').innerHTML = 'Встановіть розширення. Це абсолютно безкоштовно. ';
            // document.getElementById ( '# dwnExt # spanRated'). InnerHTML = 'Оцінено на 5 з 5 зірок користувачами.';
            document.getElementById('btnInstall').value = 'Встановити';
            document.getElementById('btnInstallTwo').value = 'Встановити';
            document.getElementById('mainTitle').innerHTML = 'Шукайте кращі товари на Aliexpress.com по картинці ';
            document.getElementById('mainTitleDesc').innerHTML = 'Просто прямо зараз встановіть розширення і витрачайте менше часу на виснажливі пошуки улюблених товарів.';
            break;
        case 'kk':
            document.getElementById('handyDesc').innerHTML = 'Біздің кеңістігімізді іздестіру нәтижелері әрқашан қолда. Кеңейтім белгішесін басыңыз. ';
            document.getElementById('handySection').innerHTML = 'жайлылықпен';
            document.getElementById('fastSection').innerHTML = 'өте жылдам';
            document.getElementById('fastDesc').innerHTML = 'Үш секунд - дәл AliExpress-те үздік мәмілелерді табу үшін кеңейтілу уақыты.';
            document.getElementById('simpleSection').innerHTML = 'Қарапайым';
            document.getElementById('simpleDesc').innerHTML = 'Сізге қажет кез-келген суретті тінтуірдің оң жағымен басып, содан кейін - AliExpress-да іздеу.';
            document.getElementById('dwnExt').innerHTML = 'Кеңейтімді орнатыңыз. Бұл мүлдем тегін. ';
            // document.getElementById ('# dwnExt # spanRated'). innerHTML = 'Пайдаланушылардың 5 жұлдызынан 5-ке дейін баға берді.';
            document.getElementById('btnInstall').value = 'Орнату';
            document.getElementById('btnInstallTwo').value = 'Орнату';
            document.getElementById('mainTitle').innerHTML = 'Aliexpress.com сайтындағы суреттегі үздік өнімдерді іздеңіз';
            document.getElementById('mainTitleDesc').innerHTML = 'Дәл қазір, кеңейтімді орнатыңыз және сүйікті өнімдеріңізді мұқият іздестіруге аз уақыт жұмсаңыз.';
            break;
        case 'th':
            document.getElementById("handyDesc").innerHTML = 'ผลการค้นหาพื้นที่ของเราอยู่ในมือ เพียงคลิกไอคอนส่วนขยาย ';
            document.getElementById("handySection").innerHTML = 'ด้วยความสบาย';
            document.getElementById("fastSection").innerHTML = 'ไม่น่าเชื่อเร็ว';
            document.getElementById('fastDesc').innerHTML = 'สามวินาที - ตรงเวลาที่คุณต้องการขยายเพื่อค้นหาข้อเสนอที่ดีที่สุดใน AliExpress';
            document.getElementById('simpleSection').innerHTML = "มันง่าย";
            document.getElementById('simpleDesc').innerHTML = 'คุณเพียงแค่คลิกขวาที่รูปภาพใดก็ได้แล้วเลือก - ค้นหาใน AliExpress';
            document.getElementById('dwnExt').innerHTML = 'ติดตั้งส่วนขยาย เป็นอิสระอย่างแน่นอน ';
            // document.getElementById ('# dwnExt # spanRated'). innerHTML = 'จัดอันดับโดยผู้ใช้จาก 5 ใน 5 ดาว';
            document.getElementById('btnInstall').value = 'ติดตั้ง';
            document.getElementById('btnInstallTwo').value = 'ติดตั้ง';
            document.getElementById('mainTitle').innerHTML = 'มองหาผลิตภัณฑ์ที่ดีที่สุดจาก Aliexpress.com จากภาพ';
            document.getElementById('mainTitleDesc').innerHTML = 'ตอนนี้ติดตั้งส่วนขยายและใช้เวลาน้อยลงในการค้นหาที่น่าเบื่อสำหรับผลิตภัณฑ์โปรดของคุณ';
            break;
        default:
            break;
    }
});

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
    console.log('good');
    yaCounter46792656.reachGoal('ext-install');
    ga('send', 'event', 'Event', 'Install');
};
function failureCallback(e){
    console.log(e);
    window.location.href = 'https://chrome.google.com/webstore/detail/dkkfpbahohbjlccleaekpdlblfodloif';
};