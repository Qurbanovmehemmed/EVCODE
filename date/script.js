// //!1 İstifadəçinin sistem tarixini və saatını əldə edirik
// let now = new Date();

// // Tarixi və saatı formatlayırıq (YYYY-MM-DD HH:MM:SS)
// let year = now.getFullYear();
// let month = (now.getMonth() + 1).toString().padStart(2, '0'); // Ay 0-dan başlayır, ona görə 1 əlavə edirik
// let day = now.getDate().toString().padStart(2, '0');
// let hour = now.getHours().toString().padStart(2, '0');
// let minute = now.getMinutes().toString().padStart(2, '0');
// let second = now.getSeconds().toString().padStart(2, '0');

// // Tarix və saatı uyğun formata salırıq
// let dateTimeString = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

// // Saatı alırıq
// let currentHour = now.getHours();

// // Mesajı saata uyğun təyin edirik
// let message = '';

// if (currentHour >= 5 && currentHour < 12) {
//     message = 'Səhəriniz xeyir!';
// } else if (currentHour >= 12 && currentHour < 17) {
//     message = 'Günortanız xeyir!';
// } else if (currentHour >= 17 && currentHour < 21) {
//     message = 'Axşamınız xeyir!';
// } else {
//     message = 'Gecəniz xeyir!';
// }

// // Tarixi və saatı istifadəçiyə alert ilə göstəririk
// alert(`İndiki tarix və saat: ${dateTimeString}\n\n${message}`);


//! 1
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
console.log(text);
