---
title: 'GüçlendirMac'
author: 'Ergenekon Yiğit ([@ergenekonyigit](https://twitter.com/ergenekonyigit)), Software Engineer'
avatars:
  - ergenekon-yigit
date: 2017-10-25 12:48:00
tags:
  - macOS
  - TipsAndTricks
description: 'GüçlendirMac'
tweet: '923124034778357761'
---
Son zamanlarda çevremdeki insanlar kullandığım kısa yollar, uygulamalar vs. hakkında sorular sormaya başlayınca bu yazı kafamda kendi kendini yazmaya başlamıştı. Bende geçtim bilgisayarın başına, bilgisayarımı hangi ayarlarla, hangi uygulamalarla kullanıyorum hepsini teker teker anlattım. 😄

---

Başlamadan önce [Adem Ilter](https://medium.com/@ademilter)'in yazısını da okumanızı öneririm.

[BasitleştirMac](https://medium.com/adem-md/basitle%C5%9Fmac-1b4bb9599825)

---

Öncelikle hangi cihazı kullanıyorum; elimde 2 yıldır Early 2015 bir MacBook Air var. Tabi ki 2 yıldır her gün kullandığım bir işletim sistemini daha kullanışlı hale getirecek bazı geliştirmeler yaptım.

Bu anlatacağım ayarlar maçOS 10.13 High Sierra üzerinde kullanılıyor olup yıllar içerisinde yazıdaki anlattığım bir ayarın yeri değişmiş olabilir.

### Desktop & Dock

Bilgisayarı çoğunlukla mobil olarak kullandığım için trackpadi çok fazla kullanıyorum, üst üste birden fazla windowun bulunması ve onların arasında kaybolmak beni yormaya başladıktan sonra çoklu desktop kullanımına geçtim. İlk desktopta çoğunlukla Safari ve finderı kullanıyorum, ikinci desktopta VSCode ve iTerm2 açık oluyor ve geliştirme yapacağımda ikinci desktopa kayıyorum. Üçüncü desktopta ise Spotify her zaman açık oluyor.

<figure>
  <img src="/img/guclendirmac/desktops.png" alt="">
  <figcaption>KISS (Keep It Simple, Stupid)</figcaption>
</figure>

Desktopta klasör ve dosya barındırmayı sevmediğim için tüm dosyalarım belli dizinlerin içerisinde. Bu konuya yazının devamında değineceğim.

<figure>
  <img src="/img/guclendirmac/dock.png" alt="">
</figure>

Dockta ise her gün açtığım uygulamaları sabitlemiş durumdayım. Diğer uygulamaları açmak için çoğunlukla spotlight (cmd+space) kullanıyorum.

---

### Launchpad

Launchpadde de 3 sayfa kullanıyorum. Her şeyin tek sayfada karmaşık olmasının yerine kategorilerine göre ayrı sayfalarda olmasından yanayım. İlk sayfayı varsayılan gelen haliyle tutmak gibi ilginç bir alışkanlığım var, telefonda da aynısı söz konusu. İkinci sayfada günlük olarak kullandığım yardımcı araçlar yer alıyor, üçüncü sayfada da development ile alakalı araçlar yer alıyor.

<figure>
  <img src="/img/guclendirmac/launchpad.png" alt="">
</figure>

Kullandığım uygulamaları yazının devamında tek tek açıklayacağım, özellikle ikinci sayfadakileri.

### Finder

Gelelim findera. Buraya kadar pek fazla bir özelleştirme söz konusu değildi ama iş findera gelince her gün ama her gün kullandığım bir aracı daha kullanışlı hale getirmem gerekiyordu.

<figure>
  <img src="/img/guclendirmac/finder.png" alt="">
  <figcaption>Finder ikonuna bastığımda karşıma gelen ekran</figcaption>
</figure>

Başta biraz renkli ve karmaşık gelebilir, ancak sadelik karmaşıklığın doruğudur diye bir söz var.

Öncelikle git kullanan projeleri (yani hepsini) dev isimli bir klasöre topladım ve finderın yeni pencere açılma pathini dev olarak ayarladım.

<figure>
  <img src="/img/guclendirmac/preferences-1.png" alt="">
</figure>

Ama yukarıdan da göreceğiniz üzere kendi projelerim, iş projeleri, okumak/incelemek için indirdiğim projeler derken dev pathi karmakarışık bir hal aldı. Neredeyse 1 buçuk yıldır kullanmadığım ve “ne işe yarayacak ki” dediğim etiketler imdadıma koştu.

<figure>
  <img src="/img/guclendirmac/preferences-2.png" alt="">
</figure>

5 ana başlık belirledim, bunları yanda görüyorsunuz. dev pathindeki her projeyi bu etiketler ile etiketledim. Sadece dev pathi ile kalmadı tabi bu. Örneğin google drive klasörümde bulunan bir kitabı da Read etiketiyle etiketlediğim zaman finderdaki sidebardan sadece Read kısmına basarak erişebiliyorum, hangi pathte olduğu önemini yitiriyor.

<figure>
  <img src="/img/guclendirmac/tags.png" alt="">
  <figcaption>Örneğin Review’a tıkladığımda etiketlediğim tüm projeleri görebiliyorum</figcaption>
</figure>

---

Dosyalarımı yedeklemek için Google Drive kullanıyorum, bir süre önce Backup and Sync from Google ismine dönüşen program ile artık bilgisayardaki herhangi bir pathi de yedekleyebiliyorsunuz.

<figure>
  <img src="/img/guclendirmac/drive.png" alt="">
</figure>

Drive klasörümde kitaplar, okuldaki projeleri içeren klasör, sunumlar, ekran görüntüleri ve sketch dosyalarını içen klasörler var. Ekran görüntüleri dikkatinizi çekmiş olabilir. Evet macteki ekran görüntülerini drive içerisindeki Screenshots isimli klasörde tutuyorum. Bu sayede bilgisayarı açamadığım durumda bile telefonumdan ekran görüntülerine erişebiliyorum.

<figure>
  <img src="/img/guclendirmac/downloads.png" alt="">
</figure>

Downloads klasörümü de google driveda tutuyorum. Burası da dağınık değil. İndirdiğim dosya saklamaya değer ise bu klasörlerden birine giriyor, değil ise zaten cöpü boyluyor.

Open in code adında ufak bir eklenti de kullanıyorum finder içerisinde. Bu ikona tıkladığımda o an bulunduğum pathi VSCode ile açıyor.

<figure>
  <img src="/img/guclendirmac/open-in-vscode.png" alt="">
</figure>

---

### Apps

Kullandığım yardımcı araçları anlatmaya başlayabilirim artık. 😄

<figure>
  <img src="/img/guclendirmac/utils.png" alt="">
</figure>

VLC, Shazam gibi bilinenler haricinde diğerlerini açıklayacağım.

*Backup and Sync from Google*: Google Drive uygulamasının yeni adı.

*KeepingYouAwake*: Caffeine isimli bilgisayarın uykuya dalmasını engelleyen uygulamanın open source muadili.

*4K Video Downloader*: Youtubedan video indirmek için kullanıdığım araç.

*Mos*: Yakın zamanda klavye ve mouse alarak evde maci masaüstü gibi kullanmaya başladım ancak ben scroll directionı natural kullandığım için mouse kullanırken reverse scrolling yapmam gerekiyordu. Ayrıca magic mouse olmadığı için smooth scrolling de yapamıyordum. Arayışlarım sonucunda bu uygulama ile iki sorunu da tek seferde çözdüm.

*Kap*: kısa gifler hazırlamak için kullandığım menübar uygulaması.

*App Cleaner*: Birkaç mb olmasına rağmen kaldırmak istediğiniz uygulamanın işletim sistemindeki tüm izlerini silmenize yardımcı oluyor.

*Itsycal*: Ufak, sade bir takvim uygulaması.

*Shiftit*: Gün içinde en fazla kullandığım uygulama olabilir. ctrl+alt+cmd ile c / m / - /+/ sağ / sol / yukarı / aşağı gibi kısayolları olan pencereleri hizalamanıza yarayan efsane bir open source uygulama.

*ShowKeys*: Hangi tuşa bastığınızı büyük bir şekilde konumlandırdığınız pencerede gösteren uygulama.

*Spotify Notifications*: Ben spotifyı 3. desktopta kullandığım için ismini bilmediğim bir şarkıda git gel toplam 4 defa kaydırma yapmam gerekiyordu. Bu yüzden githubda bu uygulamayı buldum, her yeni şarkı başladığında bildirim olarak gösteriyor. (eskiden spotify içerisinde olan bu özellik daha sonra kaldırılmış.)

---

### Terminal

Terminali full screen kullanan kişilerdenim, İkinci desktopta iTerm2 her zaman açık halde bekler. Mac kullananların bildiği üzere full screen appler yeni bir desktop olarak açılıyor. Ama hem ikinci desktopta hem de full screen nasıl kullanılıyor diye sormuş olabilirsiniz, iTerm2nin ayarlarında native full screen windows tikini kaldırdığınızda artık bulunduğunuz desktop içinde full screen kullanabilirsiniz.

<figure>
  <img src="/img/guclendirmac/terminal.png" alt="">
</figure>

Tabi her seferinde -cmd+tab olmadığını varsayarsak- docktaki ikona tıklamak zahmetli olacağı için Pointer menüsü altından iTerm2'ye bir hotkey atadım (ctrl+t). Bu sayede hangi desktopta olursam olayım ctrl+t’ye basarak terminale geçebiliyorum. Tabi bir sorun daha var, mac klavyelerinde ctrl tuşu çok saçma bir yerde. Ben bu tuşu caps lock ile değiştirdim. Bu sayede serçe parmağımı saçma sapan bükmeden rahatlıkla ctrl tuşuna basabiliyorum.

---

Githubdan çektiğim dosyaları dev pathi altına çektiğimi söylemiştim. Ama terminalde cd yaptığım zaman ~/ pathine dönüyordu. Bunun için ve başka şeyler için de birkaç alias yazmam gerekti.

<figure>
  <img src="/img/guclendirmac/alias.png" alt="">
</figure>

En alttaki png ve jpg aliasları aldığım screenshotı hangi dosya formatında kaydedeceğimi belirlemek için kullanıyorum. Örneğin twitterda png yerine jpg resim yüklüyorum çünkü png bazen patlıyor.

---

Şimdilik aklıma gelenler bunlar, aklıma geldikçe eklemeler düzenlemeler yapmaya çalışacağım. Sizin de bu tarzda iyileştirmeleriniz varsa paylaşmaktan çekinmeyin.
