/**
 * Fisher-Yates Shuffle algoritmi ishlashi:

1)	Tekshirilayotgan massiv uzunligi noma’lumligi sababli, for loopi kamayish tartibida i - -, i’ning dastlabki qiymati => massivning elementlar sonini aniqlab beruvchi ifodaga (= array.length -1) teng, shart esa i>0 dan katta bo’ladi.

Qisqa qilib aytganda, for takrorlashidagi i o’zgaruvchisi => massivning oxirgi indeksdan boshlanadi (= array.length - 1 )va orqaga qarab ishlaydi ( i--).

2)	i o’zgaruvchisi => joriy indeks (= ya’ni ishlov berilayotgan element indeksini) ifodalaydi..
3)	J o’zgaruvchisi =>  massivdagi i-indeksda turgan element ( array[i] ) bilan ALAMASHTIRISH uchun TASODIFIY indeksdir.
4)	TASODIFIY indekslar ORALIG’I  => [0, i] (shu jumladan 0 va i ham kiradi) bo'lishi kerak.
5)	i o’zgaruvchisi => j o’zgaruvchisiga indekslardan foydalanish imkoniyatlar sonini => cheklab beradi.
6)	Biroq i bilan random() funksiyasi hosil qilgan o’nli kasr ko’paytmasining Math.floor funksiyasidan chiqqan qiymat nol (0) bilan (i – 1) oralig’ida bo’ladi ya’ni [0, i). Bu esa j o’zgaruvchisining joriy indeksdagi (i) elementini tanlay olmaslikka olib keladi. Sababi, Math.floor() => o’nli kasrning faqat butun qismini oladi. Buni to’g’irlash uchun i’ning qiymatini bittaga oshirib, Math.random’ga ko’paytirish kerak. Ya’ni: Math.floor(random() * ( i + 1 ).
7)	i o’zgaruvchisi qiymatining kamayib borishi j o’zgaruvchisining foydalanishi mumkin bo’lgan indekslari oralig’ini ham kamaytirib boradi.
Siz shu massivning => qolgan aralashtirilmagan qismidan  ( i-indeksdagi joriy element ham kiradi) tasodifiy birorta elementini tanlamoqchisiz .
Masalan: [1,2,3,4,5]
biz 5 indeksda turgan elementni almashtirmoqchimiz:
Masalan: 
•	Random() = 0.2340012;
•	i = 5;
•	j ning tasodifiy tanlash indeksi => [0,5] gacha bo’lishi kerak.
•	// randomning eng katta qiymati => 0.999.. bo’lgan taqdirda ham
•	Math.floor(random() * i = 0.9990012 * 5 = 4.9…) = 4 chiqadi.
•	// Buni to’g’irlash uchun i’ning qiymatini bittaga oshirib, Math.random’ga ko’paytirish kerak 
•	Math.floor(random() * ( i + 1 ) = 0.9990012 * ( 5 + 1 ) = 5.9…) = 5

 */

const points = [40, 100, 1, 5, 25, 10]; 

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

console.log(points);