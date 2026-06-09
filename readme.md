# Gün Projesi: Movie Search API

API, bir yazılımın başka bir yazılımda tanımlanmış işlevlerini kullanabilmesi için oluşturulmuş arayüzdür.

Bu API'lar bir server'da çalışır ve bu server için para öderiz ve belli sınırları vardır(aynı anda 100 isteğe cevap vermek gibi).

Fakat,

- ya kötü amaçlı kişiler sonsuz request gönderirlerse...
- veya yanlışlıkla bir developer kodunda hata yapıp sonsuz döngü içinde requestler gönderirse...

İşte bu tarz sorunları engellemek, kullanıcıları sınırlamak için API'lerde bazı sınırlar koyarız. Örneğin, 1 saatte 100 request gönderebilirsin gibi...

Bu projede bir API üzerinden sinamalarda oynamış filmler üzerinde bir arama yapacağız ve arama sonucunu ekranda göstereceğiz.

İlk görevimiz bu servisi kullanabilmek için `ìndex.js`de bir APIKEY oluşturmak.

https://www.omdbapi.com/ adresinden bir APIKEY oluşturabilirsin.
