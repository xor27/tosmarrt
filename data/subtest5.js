// ==================== SUBTEST 5: Literasi dalam Bahasa Indonesia ====================
// Total 20 soal (seharusnya 30 soal, tapi dari naskah hanya 20 soal yang diberikan)

const subtest5 = [
    // SOAL 1 (untuk nomor 1-4)
    {
        id: 1,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 1 sampai 4.

Fotosintesis adalah proses kimia yang dilakukan oleh klorofil pada tumbuhan hijau untuk menangkap dan mengubah energi sinar matahari menjadi energi kimia. Dalam fotosintesis, tumbuhan menyerap karbon dioksida (CO₂) dari udara dan menyerap air dari tanah untuk diubah menjadi oksigen (O₂) yang dilepaskan ke udara dan glukosa (C₆H₁₂O₆) yang digunakan oleh tumbuhan. Glukosa adalah karbohidrat sederhana dan merupakan monomer yang digunakan untuk membentuk polimer karbohidrat. Glukosa dapat langsung dipolimerisasi menjadi selulosa untuk menunjang perkembangan tumbuhan, atau disimpan sebagai cadangan makanan dalam bentuk amilum.

Salah satu bentuk karbohidrat yang memberikan rasa manis pada buah-buahan dan banyak terkandung dalam air batang tebu adalah sukrosa, molekul dimer dari glukosa dengan ikatan α-glikosida. Sukrosa banyak digunakan dalam bentuk gula pasir sebagai pemanis makanan dan minuman, sedangkan monomer fruktosa banyak ditemukan dalam madu.

Glukosa dan fruktosa masing-masing dikelompokkan sebagai aldoheksosa dan fruktoheksosa. Kedua senyawa ini mudah larut dalam air karena keduanya dapat membentuk ikatan hidrogen dengan air. Dalam larutan, molekul glukosa dapat berada dalam bentuk rantai terbuka atau membentuk lingkar sebagai cincin piranosa sehingga dikenal sebagai glukopiranosa. Hal yang sama juga terjadi pada fruktosa yang rantai lingkarnya disebut sebagai furanosa. Semua jenis gula ini sebaiknya dikonsumsi dalam jumlah yang cukup karena konsumsi gula secara berlebihan akan menyebabkan penyakit.

Jika dalam fotosintesis digunakan 1,2 mol gas karbon dioksida, glukosa yang dihasilkan sebanyak ...`,
        options: [
            { letter: 'A', text: '0,2 mol' },
            { letter: 'B', text: '0,6 mol' },
            { letter: 'C', text: '1,2 mol' },
            { letter: 'D', text: '2,4 mol' },
            { letter: 'E', text: '7,2 mol' }
        ]
    },
    // SOAL 2
    {
        id: 2,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 1 sampai 4.

Fotosintesis adalah proses kimia yang dilakukan oleh klorofil pada tumbuhan hijau untuk menangkap dan mengubah energi sinar matahari menjadi energi kimia. Dalam fotosintesis, tumbuhan menyerap karbon dioksida (CO₂) dari udara dan menyerap air dari tanah untuk diubah menjadi oksigen (O₂) yang dilepaskan ke udara dan glukosa (C₆H₁₂O₆) yang digunakan oleh tumbuhan. Glukosa adalah karbohidrat sederhana dan merupakan monomer yang digunakan untuk membentuk polimer karbohidrat. Glukosa dapat langsung dipolimerisasi menjadi selulosa untuk menunjang perkembangan tumbuhan, atau disimpan sebagai cadangan makanan dalam bentuk amilum.

Salah satu bentuk karbohidrat yang memberikan rasa manis pada buah-buahan dan banyak terkandung dalam air batang tebu adalah sukrosa, molekul dimer dari glukosa dengan ikatan α-glikosida. Sukrosa banyak digunakan dalam bentuk gula pasir sebagai pemanis makanan dan minuman, sedangkan monomer fruktosa banyak ditemukan dalam madu.

Glukosa dan fruktosa masing-masing dikelompokkan sebagai aldoheksosa dan fruktoheksosa. Kedua senyawa ini mudah larut dalam air karena keduanya dapat membentuk ikatan hidrogen dengan air. Dalam larutan, molekul glukosa dapat berada dalam bentuk rantai terbuka atau membentuk lingkar sebagai cincin piranosa sehingga dikenal sebagai glukopiranosa. Hal yang sama juga terjadi pada fruktosa yang rantai lingkarnya disebut sebagai furanosa. Semua jenis gula ini sebaiknya dikonsumsi dalam jumlah yang cukup karena konsumsi gula secara berlebihan akan menyebabkan penyakit.

Fruktofuranosa adalah molekul ...`,
        options: [
            { letter: 'A', text: 'fruktosa yang terikat pada furanosa' },
            { letter: 'B', text: 'glukosa yang berasa sangat manis' },
            { letter: 'C', text: 'fruktosa dengan ikatan α-glikosida' },
            { letter: 'D', text: 'glukosa yang terdapat pada sukrosa' },
            { letter: 'E', text: 'fruktosa yang berbentuk lingkar' }
        ]
    },
    // SOAL 3
    {
        id: 3,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 1 sampai 4.

Fotosintesis adalah proses kimia yang dilakukan oleh klorofil pada tumbuhan hijau untuk menangkap dan mengubah energi sinar matahari menjadi energi kimia. Dalam fotosintesis, tumbuhan menyerap karbon dioksida (CO₂) dari udara dan menyerap air dari tanah untuk diubah menjadi oksigen (O₂) yang dilepaskan ke udara dan glukosa (C₆H₁₂O₆) yang digunakan oleh tumbuhan. Glukosa adalah karbohidrat sederhana dan merupakan monomer yang digunakan untuk membentuk polimer karbohidrat. Glukosa dapat langsung dipolimerisasi menjadi selulosa untuk menunjang perkembangan tumbuhan, atau disimpan sebagai cadangan makanan dalam bentuk amilum.

Salah satu bentuk karbohidrat yang memberikan rasa manis pada buah-buahan dan banyak terkandung dalam air batang tebu adalah sukrosa, molekul dimer dari glukosa dengan ikatan α-glikosida. Sukrosa banyak digunakan dalam bentuk gula pasir sebagai pemanis makanan dan minuman, sedangkan monomer fruktosa banyak ditemukan dalam madu.

Glukosa dan fruktosa masing-masing dikelompokkan sebagai aldoheksosa dan fruktoheksosa. Kedua senyawa ini mudah larut dalam air karena keduanya dapat membentuk ikatan hidrogen dengan air. Dalam larutan, molekul glukosa dapat berada dalam bentuk rantai terbuka atau membentuk lingkar sebagai cincin piranosa sehingga dikenal sebagai glukopiranosa. Hal yang sama juga terjadi pada fruktosa yang rantai lingkarnya disebut sebagai furanosa. Semua jenis gula ini sebaiknya dikonsumsi dalam jumlah yang cukup karena konsumsi gula secara berlebihan akan menyebabkan penyakit.

Perbedaan antara sukrosa dan glukosa adalah ...`,
        options: [
            { letter: 'A', text: 'sukrosa memiliki massa molekul lebih rendah' },
            { letter: 'B', text: 'glukosa memiliki gugus keton lebih banyak' },
            { letter: 'C', text: 'sukrosa mengandung energi lebih besar' },
            { letter: 'D', text: 'glukosa memiliki atom C lebih banyak' },
            { letter: 'E', text: 'sukrosa merupakan monomer glukosa' }
        ]
    },
    // SOAL 4
    {
        id: 4,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 1 sampai 4.

Fotosintesis adalah proses kimia yang dilakukan oleh klorofil pada tumbuhan hijau untuk menangkap dan mengubah energi sinar matahari menjadi energi kimia. Dalam fotosintesis, tumbuhan menyerap karbon dioksida (CO₂) dari udara dan menyerap air dari tanah untuk diubah menjadi oksigen (O₂) yang dilepaskan ke udara dan glukosa (C₆H₁₂O₆) yang digunakan oleh tumbuhan. Glukosa adalah karbohidrat sederhana dan merupakan monomer yang digunakan untuk membentuk polimer karbohidrat. Glukosa dapat langsung dipolimerisasi menjadi selulosa untuk menunjang perkembangan tumbuhan, atau disimpan sebagai cadangan makanan dalam bentuk amilum.

Salah satu bentuk karbohidrat yang memberikan rasa manis pada buah-buahan dan banyak terkandung dalam air batang tebu adalah sukrosa, molekul dimer dari glukosa dengan ikatan α-glikosida. Sukrosa banyak digunakan dalam bentuk gula pasir sebagai pemanis makanan dan minuman, sedangkan monomer fruktosa banyak ditemukan dalam madu.

Glukosa dan fruktosa masing-masing dikelompokkan sebagai aldoheksosa dan fruktoheksosa. Kedua senyawa ini mudah larut dalam air karena keduanya dapat membentuk ikatan hidrogen dengan air. Dalam larutan, molekul glukosa dapat berada dalam bentuk rantai terbuka atau membentuk lingkar sebagai cincin piranosa sehingga dikenal sebagai glukopiranosa. Hal yang sama juga terjadi pada fruktosa yang rantai lingkarnya disebut sebagai furanosa. Semua jenis gula ini sebaiknya dikonsumsi dalam jumlah yang cukup karena konsumsi gula secara berlebihan akan menyebabkan penyakit.

Jika molekul glukosa rantai terbuka direaksikan dengan Cu²⁺ (tartrat) dan dihasilkan Cu₂O, gugus fungsi dalam molekul glukosa akan berubah menjadi ...`,
        options: [
            { letter: 'A', text: 'aldehid' },
            { letter: 'B', text: 'karboksilat' },
            { letter: 'C', text: 'hidroksil' },
            { letter: 'D', text: 'keton' },
            { letter: 'E', text: 'ester' }
        ]
    },
    // SOAL 5 (untuk nomor 5-8 - teks cairan)
    {
        id: 5,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 5 sampai 8.

Di dalam kehidupan sehari-hari dijumpai berbagai jenis cairan. Pentingnya cairan mendorong banyak peneliti yang mencoba memahami karakteristik cairan. Kajian secara teoritis dilakukan antara lain dengan membangun model cairan. Model cairan berupa hubungan matematis antara pengaruh luar dan efek dinamis cairan. Hubungan tersebut melibatkan besaran-besaran internal cairan, seperti viskositas η. Pengaruh luar tersebut diungkapkan oleh tegangan geser τ (gaya geser per satuan luas), sedangkan efek dinamisnya berupa perbedaan kecepatan lapisan-lapisan fluida yang dinyatakan dalam laju geser s.

Salah satu model cairan adalah:

<div style="text-align: center;">
                    <img src="images/LBI5-1.png" alt="Model Cairan" style="max-width: 25%; margin: 8px 0; border-radius: 8px;">
                </div>

dengan α tetapan.

Untuk aliran dalam pipa, laju geser s sama dengan perubahan kecepatan terhadap posisi s = dv/dy, dengan sumbu y tegak lurus arah aliran dan y = 0 berada di tengah pipa. Integralnya berupa profil kecepatan v(y) yang menyatakan kecepatan aliran pada posisi y.
<div style="text-align: center;">
                    <img src="images/LBI5-2.jpeg" alt="Kecepatan Aliran" style="max-width: 25%; margin: 8px 0; border-radius: 8px;">
                </div>

Cairan dengan α = 0 bersifat Newtonian, cairan dengan α = -0,1 bersifat shear thickening, dan cairan dengan α = 0,1 bersifat shear thinning. Cairan dengan kecepatan aliran tinggi dapat mengalami turbulensi.

Satuan dari tetapan α dalam model cairan yang diungkapkan dalam bacaan adalah ...`,
        options: [
            { letter: 'A', text: 'm⁻²s⁴kg²' },
            { letter: 'B', text: 'm⁻²s⁴kg⁻²' },
            { letter: 'C', text: 'm²s⁴kg⁻²' },
            { letter: 'D', text: 'm²s⁻⁴kg²' },
            { letter: 'E', text: 'm⁻²s⁻⁴kg²' }
        ]
    },
    // SOAL 6
    {
        id: 6,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 5 sampai 8.

Di dalam kehidupan sehari-hari dijumpai berbagai jenis cairan. Pentingnya cairan mendorong banyak peneliti yang mencoba memahami karakteristik cairan. Kajian secara teoritis dilakukan antara lain dengan membangun model cairan. Model cairan berupa hubungan matematis antara pengaruh luar dan efek dinamis cairan. Hubungan tersebut melibatkan besaran-besaran internal cairan, seperti viskositas η. Pengaruh luar tersebut diungkapkan oleh tegangan geser τ (gaya geser per satuan luas), sedangkan efek dinamisnya berupa perbedaan kecepatan lapisan-lapisan fluida yang dinyatakan dalam laju geser s.

Salah satu model cairan adalah:

s = η⁻¹ × (τ + ατ³)

dengan α tetapan.

Untuk aliran dalam pipa, laju geser s sama dengan perubahan kecepatan terhadap posisi s = dv/dy, dengan sumbu y tegak lurus arah aliran dan y = 0 berada di tengah pipa. Integralnya berupa profil kecepatan v(y) yang menyatakan kecepatan aliran pada posisi y.

Cairan dengan α = 0 bersifat Newtonian, cairan dengan α = -0,1 bersifat shear thickening, dan cairan dengan α = 0,1 bersifat shear thinning. Cairan dengan kecepatan aliran tinggi dapat mengalami turbulensi.

Pernyataan yang benar tentang model cairan shear thickening yang diungkapkan dalam bacaan adalah ...`,
        options: [
            { letter: 'A', text: 'partikel cairan di tengah pipa memiliki kecepatan paling tinggi' },
            { letter: 'B', text: 'partikel cairan di dekat dinding pipa memiliki kecepatan paling tinggi' },
            { letter: 'C', text: 'laju geser tertinggi berada di tengah pipa' },
            { letter: 'D', text: 'laju geser tertinggi berada di dinding pipa' },
            { letter: 'E', text: 'laju geser nol hanya berada di tengah pipa' }
        ]
    },
    // SOAL 7
    {
        id: 7,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 5 sampai 8.

Di dalam kehidupan sehari-hari dijumpai berbagai jenis cairan. Pentingnya cairan mendorong banyak peneliti yang mencoba memahami karakteristik cairan. Kajian secara teoritis dilakukan antara lain dengan membangun model cairan. Model cairan berupa hubungan matematis antara pengaruh luar dan efek dinamis cairan. Hubungan tersebut melibatkan besaran-besaran internal cairan, seperti viskositas η. Pengaruh luar tersebut diungkapkan oleh tegangan geser τ (gaya geser per satuan luas), sedangkan efek dinamisnya berupa perbedaan kecepatan lapisan-lapisan fluida yang dinyatakan dalam laju geser s.

Salah satu model cairan adalah:

s = η⁻¹ × (τ + ατ³)

dengan α tetapan.

Untuk aliran dalam pipa, laju geser s sama dengan perubahan kecepatan terhadap posisi s = dv/dy, dengan sumbu y tegak lurus arah aliran dan y = 0 berada di tengah pipa. Integralnya berupa profil kecepatan v(y) yang menyatakan kecepatan aliran pada posisi y.

Cairan dengan α = 0 bersifat Newtonian, cairan dengan α = -0,1 bersifat <i>shear thickening</i>, dan cairan dengan α = 0,1 bersifat <i>shear thinning</i>. Cairan dengan kecepatan aliran tinggi dapat mengalami turbulensi.

Pernyataan yang benar tentang cairan <i>shear thickening</i> dan cairan <i>shear thinning</i> yang disebutkan dalam bacaan adalah ...`,
        options: [
            { letter: 'A', text: 'profil kecepatan cairan shear thickening serupa dengan profil kecepatan cairan shear thinning' },
            { letter: 'B', text: 'profil kecepatan cairan shear thickening serupa dengan profil kecepatan cairan Newtonian' },
            { letter: 'C', text: 'profil kecepatan cairan shear thinning serupa dengan profil kecepatan cairan Newtonian' },
            { letter: 'D', text: 'profil kecepatan cairan shear thickening memiliki laju geser nol di dinding tabung' },
            { letter: 'E', text: 'profil kecepatan cairan shear thinning memiliki laju geser nol di dinding tabung' }
        ]
    },
    // SOAL 8
    {
        id: 8,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 5 sampai 8.

Di dalam kehidupan sehari-hari dijumpai berbagai jenis cairan. Pentingnya cairan mendorong banyak peneliti yang mencoba memahami karakteristik cairan. Kajian secara teoritis dilakukan antara lain dengan membangun model cairan. Model cairan berupa hubungan matematis antara pengaruh luar dan efek dinamis cairan. Hubungan tersebut melibatkan besaran-besaran internal cairan, seperti viskositas η. Pengaruh luar tersebut diungkapkan oleh tegangan geser τ (gaya geser per satuan luas), sedangkan efek dinamisnya berupa perbedaan kecepatan lapisan-lapisan fluida yang dinyatakan dalam laju geser s.

Salah satu model cairan adalah:

s = η⁻¹ × (τ + ατ³)

dengan α tetapan.

Untuk aliran dalam pipa, laju geser s sama dengan perubahan kecepatan terhadap posisi s = dv/dy, dengan sumbu y tegak lurus arah aliran dan y = 0 berada di tengah pipa. Integralnya berupa profil kecepatan v(y) yang menyatakan kecepatan aliran pada posisi y.

Cairan dengan α = 0 bersifat Newtonian, cairan dengan α = -0,1 bersifat <i>shear thickening</i>, dan cairan dengan α = 0,1 bersifat <i>shear thinning</i>. Cairan dengan kecepatan aliran tinggi dapat mengalami turbulensi.

Jika tegangan geser diperkecil, model cairan yang dibahas dalam bacaan berubah menjadi cairan ...`,
        options: [
            { letter: 'A', text: 'Newtonian' },
            { letter: 'B', text: 'non-Newtonian' },
            { letter: 'C', text: '<i>shear thickening</i>' },
            { letter: 'D', text: '<i>shear thinning</i>' },
            { letter: 'E', text: 'turbulen' }
        ]
    },
    // SOAL 9 (untuk nomor 9-12 - teks ginjal)
    {
        id: 9,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 9 sampai 12.

Ginjal adalah organ vital yang berperan penting dalam menjaga keseimbangan cairan internal tubuh, antara lain mengatur kondisi elektrolit, menyaring darah, mengatur tekanan darah dan pH cairan tubuh, serta menghasilkan hormon. Fungsi esensial ginjal ini dilakukan oleh glomerulus, jaringan pembuluh darah kapiler yang terdapat dalam ginjal. Gagal ginjal merupakan kondisi serius ketika ginjal kehilangan kemampuan untuk menyaring limbah dan cairan berlebih dari darah. Kasus ini semakin sering terjadi pada usia muda, yang banyak dipengaruhi oleh gaya hidup modern yang kurang sehat.

Konsumsi makanan tinggi garam, tinggi lemak, tinggi gula, dan banyak mengandung zat pengawet, seperti makanan cepat saji, menjadi salah satu pemicu yang meningkatkan risiko hipertensi dan diabetes, dua penyebab utama gagal ginjal. Pola makan ini merupakan tren umum di kalangan anak muda. Kandungan natrium yang tinggi pada makanan tersebut dapat meningkatkan kadar kalsium dalam urin dan memicu pembentukan batu ginjal. Selain itu, kebiasaan mengonsumsi minuman berkafein, berwarna, dan bersoda secara berlebihan dapat membebani fungsi ginjal karena kandungannya dapat mengganggu keseimbangan elektrolit tubuh. Kurangnya kebiasaan minum air putih membuat urin menjadi lebih pekat sehingga meningkatkan risiko pengendapan mineral.

Kurangnya aktivitas fisik dan pola hidup sedentari juga berkontribusi pada obesitas, yang meningkatkan risiko gangguan metabolisme dan kerusakan ginjal. Di sisi lain, penggunaan obat-obatan atau suplemen tertentu tanpa pengawasan medis juga dapat merusak ginjal secara perlahan.

Penyebab terbentuknya batu ginjal adalah ...`,
        options: [
            { letter: 'A', text: 'mengonsumsi makanan kaya kalsium' },
            { letter: 'B', text: 'mengonsumsi banyak minuman bersoda' },
            { letter: 'C', text: 'mengonsumsi makanan kaya natrium' },
            { letter: 'D', text: 'banyak duduk dan kurang olahraga' },
            { letter: 'E', text: 'mengonsumsi banyak garam dan gula' }
        ]
    },
    // SOAL 10
    {
        id: 10,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 9 sampai 12.

Ginjal adalah organ vital yang berperan penting dalam menjaga keseimbangan cairan internal tubuh, antara lain mengatur kondisi elektrolit, menyaring darah, mengatur tekanan darah dan pH cairan tubuh, serta menghasilkan hormon. Fungsi esensial ginjal ini dilakukan oleh glomerulus, jaringan pembuluh darah kapiler yang terdapat dalam ginjal. Gagal ginjal merupakan kondisi serius ketika ginjal kehilangan kemampuan untuk menyaring limbah dan cairan berlebih dari darah. Kasus ini semakin sering terjadi pada usia muda, yang banyak dipengaruhi oleh gaya hidup modern yang kurang sehat.

Konsumsi makanan tinggi garam, tinggi lemak, tinggi gula, dan banyak mengandung zat pengawet, seperti makanan cepat saji, menjadi salah satu pemicu yang meningkatkan risiko hipertensi dan diabetes, dua penyebab utama gagal ginjal. Pola makan ini merupakan tren umum di kalangan anak muda. Kandungan natrium yang tinggi pada makanan tersebut dapat meningkatkan kadar kalsium dalam urin dan memicu pembentukan batu ginjal. Selain itu, kebiasaan mengonsumsi minuman berkafein, berwarna, dan bersoda secara berlebihan dapat membebani fungsi ginjal karena kandungannya dapat mengganggu keseimbangan elektrolit tubuh. Kurangnya kebiasaan minum air putih membuat urin menjadi lebih pekat sehingga meningkatkan risiko pengendapan mineral.

Kurangnya aktivitas fisik dan pola hidup sedentari juga berkontribusi pada obesitas, yang meningkatkan risiko gangguan metabolisme dan kerusakan ginjal. Di sisi lain, penggunaan obat-obatan atau suplemen tertentu tanpa pengawasan medis juga dapat merusak ginjal secara perlahan.

Menurut bacaan, salah satu fungsi glomerulus dalam ginjal adalah sebagai ...`,
        options: [
            { letter: 'A', text: 'bagian ginjal penghasil hormon' },
            { letter: 'B', text: 'filter penyaring cairan darah' },
            { letter: 'C', text: 'mineral pembentuk batu ginjal' },
            { letter: 'D', text: 'suplemen pencegah gagal ginjal' },
            { letter: 'E', text: 'elektrolit pengatur pH cairan tubuh' }
        ]
    },
    // SOAL 11
    {
        id: 11,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 9 sampai 12.

Ginjal adalah organ vital yang berperan penting dalam menjaga keseimbangan cairan internal tubuh, antara lain mengatur kondisi elektrolit, menyaring darah, mengatur tekanan darah dan pH cairan tubuh, serta menghasilkan hormon. Fungsi esensial ginjal ini dilakukan oleh glomerulus, jaringan pembuluh darah kapiler yang terdapat dalam ginjal. Gagal ginjal merupakan kondisi serius ketika ginjal kehilangan kemampuan untuk menyaring limbah dan cairan berlebih dari darah. Kasus ini semakin sering terjadi pada usia muda, yang banyak dipengaruhi oleh gaya hidup modern yang kurang sehat.

Konsumsi makanan tinggi garam, tinggi lemak, tinggi gula, dan banyak mengandung zat pengawet, seperti makanan cepat saji, menjadi salah satu pemicu yang meningkatkan risiko hipertensi dan diabetes, dua penyebab utama gagal ginjal. Pola makan ini merupakan tren umum di kalangan anak muda. Kandungan natrium yang tinggi pada makanan tersebut dapat meningkatkan kadar kalsium dalam urin dan memicu pembentukan batu ginjal. Selain itu, kebiasaan mengonsumsi minuman berkafein, berwarna, dan bersoda secara berlebihan dapat membebani fungsi ginjal karena kandungannya dapat mengganggu keseimbangan elektrolit tubuh. Kurangnya kebiasaan minum air putih membuat urin menjadi lebih pekat sehingga meningkatkan risiko pengendapan mineral.

Kurangnya aktivitas fisik dan pola hidup sedentari juga berkontribusi pada obesitas, yang meningkatkan risiko gangguan metabolisme dan kerusakan ginjal. Di sisi lain, penggunaan obat-obatan atau suplemen tertentu tanpa pengawasan medis juga dapat merusak ginjal secara perlahan.

Pernyataan yang benar tentang penyakit gagal ginjal dan batu ginjal adalah ...`,
        options: [
            { letter: 'A', text: 'penyakit gagal ginjal umumnya berawal dari kurang minum air putih' },
            { letter: 'B', text: 'penyakit batu ginjal berkaitan dengan ginjal yang tidak bisa menghasilkan hormon' },
            { letter: 'C', text: 'penyakit gagal ginjal berkaitan dengan terganggunya fungsi ginjal' },
            { letter: 'D', text: 'penyakit batu ginjal berkaitan dengan ginjal yang tidak dapat memfiltrasi darah' },
            { letter: 'E', text: 'penyakit gagal ginjal berkaitan dengan adanya pengendapan kalsium' }
        ]
    },
    // SOAL 12
    {
        id: 12,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 9 sampai 12.

Ginjal adalah organ vital yang berperan penting dalam menjaga keseimbangan cairan internal tubuh, antara lain mengatur kondisi elektrolit, menyaring darah, mengatur tekanan darah dan pH cairan tubuh, serta menghasilkan hormon. Fungsi esensial ginjal ini dilakukan oleh glomerulus, jaringan pembuluh darah kapiler yang terdapat dalam ginjal. Gagal ginjal merupakan kondisi serius ketika ginjal kehilangan kemampuan untuk menyaring limbah dan cairan berlebih dari darah. Kasus ini semakin sering terjadi pada usia muda, yang banyak dipengaruhi oleh gaya hidup modern yang kurang sehat.

Konsumsi makanan tinggi garam, tinggi lemak, tinggi gula, dan banyak mengandung zat pengawet, seperti makanan cepat saji, menjadi salah satu pemicu yang meningkatkan risiko hipertensi dan diabetes, dua penyebab utama gagal ginjal. Pola makan ini merupakan tren umum di kalangan anak muda. Kandungan natrium yang tinggi pada makanan tersebut dapat meningkatkan kadar kalsium dalam urin dan memicu pembentukan batu ginjal. Selain itu, kebiasaan mengonsumsi minuman berkafein, berwarna, dan bersoda secara berlebihan dapat membebani fungsi ginjal karena kandungannya dapat mengganggu keseimbangan elektrolit tubuh. Kurangnya kebiasaan minum air putih membuat urin menjadi lebih pekat sehingga meningkatkan risiko pengendapan mineral.

Kurangnya aktivitas fisik dan pola hidup sedentari juga berkontribusi pada obesitas, yang meningkatkan risiko gangguan metabolisme dan kerusakan ginjal. Di sisi lain, penggunaan obat-obatan atau suplemen tertentu tanpa pengawasan medis juga dapat merusak ginjal secara perlahan.

Gagal ginjal dapat menyebabkan gangguan ...`,
        options: [
            { letter: 'A', text: 'produksi sel darah merah di sumsum tulang' },
            { letter: 'B', text: 'keseimbangan asam-basa dalam tubuh' },
            { letter: 'C', text: 'perubahan kadar elektrolit fosfat' },
            { letter: 'D', text: 'penurunan kadar kreatinin dalam darah' },
            { letter: 'E', text: 'perubahan tekanan darah' }
        ]
    },
    // SOAL 13 (untuk nomor 13-16 - teks Bung Hatta)
    {
        id: 13,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 13 sampai 16.

Mohammad Hatta, atau dikenal dengan sebutan Bung Hatta, salah satu proklamator kemerdekaan Indonesia, telah memberikan warisan pemikiran yang sangat berharga bagi perjalanan bangsa. Sebagai Bapak Koperasi, ia menanamkan nilai-nilai gotong royong dalam bidang ekonomi, yang menjadikan koperasi sebagai solusi atas ketimpangan sosial. Namun, pengaruh Bung Hatta tidak terbatas pada bidang ekonomi. Ia juga memiliki pandangan visioner tentang peran generasi muda, demokrasi, dan tanggung jawab kaum intelektual.

Bung Hatta menegaskan pentingnya hubungan timbal balik antargenerasi. Generasi sekarang harus menjaga dan memperbaiki warisan bangsa agar dapat diwariskan dalam kondisi yang lebih baik kepada generasi mendatang. Pesannya jelas: kerusakan yang dibiarkan hari ini akan menjadi beban di masa depan, sementara upaya perbaikan akan menjamin kesejahteraan jangka panjang.

Selain itu, ia mengkritik keras paham <i>survival of the fittest</i>, yang dianggap bertentangan dengan nilai gotong royong dan keadilan sosial yang menjadi inti masyarakat Indonesia. Dalam era globalisasi, pandangan Bung Hatta itu relevan untuk menjaga semangat kolektivitas di tengah persaingan. Bung Hatta juga memberikan tanggung jawab besar kepada kaum intelektual. Menurutnya, kaum intelektual harus menjadi pemimpin yang bermoral tinggi, memiliki keberanian, dan cinta pada keadilan. Bagi Bung Hatta, membangun bangsa yang adil dan makmur bukan hanya tugas, tetapi juga amanah yang harus diteruskan dari generasi ke generasi.

Pemikiran-pemikiran ini menjadi panduan abadi bagi bangsa Indonesia untuk tetap menjaga nilai-nilai luhur dalam membangun masa depan.

Warisan utama yang ditanamkan Bung Hatta dalam bidang ekonomi adalah ...`,
        options: [
            { letter: 'A', text: 'demokrasi ekonomi dan pendidikan masyarakat' },
            { letter: 'B', text: 'nilai gotong royong melalui koperasi' },
            { letter: 'C', text: 'tanggung jawab intelektual generasi muda' },
            { letter: 'D', text: 'ekonomi berbasis kerakyatan' },
            { letter: 'E', text: 'nilai ekonomi dan keadilan sosial' }
        ]
    },
    // SOAL 14
    {
        id: 14,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 13 sampai 16.

Mohammad Hatta, atau dikenal dengan sebutan Bung Hatta, salah satu proklamator kemerdekaan Indonesia, telah memberikan warisan pemikiran yang sangat berharga bagi perjalanan bangsa. Sebagai Bapak Koperasi, ia menanamkan nilai-nilai gotong royong dalam bidang ekonomi, yang menjadikan koperasi sebagai solusi atas ketimpangan sosial. Namun, pengaruh Bung Hatta tidak terbatas pada bidang ekonomi. Ia juga memiliki pandangan visioner tentang peran generasi muda, demokrasi, dan tanggung jawab kaum intelektual.

Bung Hatta menegaskan pentingnya hubungan timbal balik antargenerasi. Generasi sekarang harus menjaga dan memperbaiki warisan bangsa agar dapat diwariskan dalam kondisi yang lebih baik kepada generasi mendatang. Pesannya jelas: kerusakan yang dibiarkan hari ini akan menjadi beban di masa depan, sementara upaya perbaikan akan menjamin kesejahteraan jangka panjang.

Selain itu, ia mengkritik keras paham <i>survival of the fittest</i>, yang dianggap bertentangan dengan nilai gotong royong dan keadilan sosial yang menjadi inti masyarakat Indonesia. Dalam era globalisasi, pandangan Bung Hatta itu relevan untuk menjaga semangat kolektivitas di tengah persaingan. Bung Hatta juga memberikan tanggung jawab besar kepada kaum intelektual. Menurutnya, kaum intelektual harus menjadi pemimpin yang bermoral tinggi, memiliki keberanian, dan cinta pada keadilan. Bagi Bung Hatta, membangun bangsa yang adil dan makmur bukan hanya tugas, tetapi juga amanah yang harus diteruskan dari generasi ke generasi.

Pemikiran-pemikiran ini menjadi panduan abadi bagi bangsa Indonesia untuk tetap menjaga nilai-nilai luhur dalam membangun masa depan.

Berdasarkan bacaan, yang dimaksud dengan "survival of the fittest" adalah ...`,
        options: [
            { letter: 'A', text: 'semangat gotong royong masyarakat Indonesia' },
            { letter: 'B', text: 'sistem yang menekankan kolektivitas dan keadilan' },
            { letter: 'C', text: 'paham yang membiarkan kemenangan pada yang terkuat' },
            { letter: 'D', text: 'pandangan yang mendukung pembangunan moral kaum intelektual' }
        ]
    },
    // SOAL 15
    {
        id: 15,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 13 sampai 16.

Mohammad Hatta, atau dikenal dengan sebutan Bung Hatta, salah satu proklamator kemerdekaan Indonesia, telah memberikan warisan pemikiran yang sangat berharga bagi perjalanan bangsa. Sebagai Bapak Koperasi, ia menanamkan nilai-nilai gotong royong dalam bidang ekonomi, yang menjadikan koperasi sebagai solusi atas ketimpangan sosial. Namun, pengaruh Bung Hatta tidak terbatas pada bidang ekonomi. Ia juga memiliki pandangan visioner tentang peran generasi muda, demokrasi, dan tanggung jawab kaum intelektual.

Bung Hatta menegaskan pentingnya hubungan timbal balik antargenerasi. Generasi sekarang harus menjaga dan memperbaiki warisan bangsa agar dapat diwariskan dalam kondisi yang lebih baik kepada generasi mendatang. Pesannya jelas: kerusakan yang dibiarkan hari ini akan menjadi beban di masa depan, sementara upaya perbaikan akan menjamin kesejahteraan jangka panjang.

Selain itu, ia mengkritik keras paham survival of the fittest, yang dianggap bertentangan dengan nilai gotong royong dan keadilan sosial yang menjadi inti masyarakat Indonesia. Dalam era globalisasi, pandangan Bung Hatta itu relevan untuk menjaga semangat kolektivitas di tengah persaingan. Bung Hatta juga memberikan tanggung jawab besar kepada kaum intelektual. Menurutnya, kaum intelektual harus menjadi pemimpin yang bermoral tinggi, memiliki keberanian, dan cinta pada keadilan. Bagi Bung Hatta, membangun bangsa yang adil dan makmur bukan hanya tugas, tetapi juga amanah yang harus diteruskan dari generasi ke generasi.

Pemikiran-pemikiran ini menjadi panduan abadi bagi bangsa Indonesia untuk tetap menjaga nilai-nilai luhur dalam membangun masa depan.

Perbedaan utama antara pandangan Bung Hatta dan paham survival of the fittest adalah ...`,
        options: [
            { letter: 'A', text: 'Bung Hatta mendukung persaingan individu, sedangkan survival of the fittest tidak' },
            { letter: 'B', text: 'Bung Hatta mengkritik gotong royong, sedangkan survival of the fittest mendukungnya' },
            { letter: 'C', text: 'Bung Hatta mendukung dominasi negara di bidang ekonomi, sedangkan survival of the fittest menentangnya' },
            { letter: 'D', text: 'Bung Hatta menolak kapitalisme, sedangkan survival of the fittest adalah dasar sosialisme' },
            { letter: 'E', text: 'Bung Hatta mengutamakan kolektivitas, sedangkan survival of the fittest mengutamakan kompetisi individu' }
        ]
    },
    // SOAL 16
    {
        id: 16,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 13 sampai 16.

Mohammad Hatta, atau dikenal dengan sebutan Bung Hatta, salah satu proklamator kemerdekaan Indonesia, telah memberikan warisan pemikiran yang sangat berharga bagi perjalanan bangsa. Sebagai Bapak Koperasi, ia menanamkan nilai-nilai gotong royong dalam bidang ekonomi, yang menjadikan koperasi sebagai solusi atas ketimpangan sosial. Namun, pengaruh Bung Hatta tidak terbatas pada bidang ekonomi. Ia juga memiliki pandangan visioner tentang peran generasi muda, demokrasi, dan tanggung jawab kaum intelektual.

Bung Hatta menegaskan pentingnya hubungan timbal balik antargenerasi. Generasi sekarang harus menjaga dan memperbaiki warisan bangsa agar dapat diwariskan dalam kondisi yang lebih baik kepada generasi mendatang. Pesannya jelas: kerusakan yang dibiarkan hari ini akan menjadi beban di masa depan, sementara upaya perbaikan akan menjamin kesejahteraan jangka panjang.

Selain itu, ia mengkritik keras paham survival of the fittest, yang dianggap bertentangan dengan nilai gotong royong dan keadilan sosial yang menjadi inti masyarakat Indonesia. Dalam era globalisasi, pandangan Bung Hatta itu relevan untuk menjaga semangat kolektivitas di tengah persaingan. Bung Hatta juga memberikan tanggung jawab besar kepada kaum intelektual. Menurutnya, kaum intelektual harus menjadi pemimpin yang bermoral tinggi, memiliki keberanian, dan cinta pada keadilan. Bagi Bung Hatta, membangun bangsa yang adil dan makmur bukan hanya tugas, tetapi juga amanah yang harus diteruskan dari generasi ke generasi.

Pemikiran-pemikiran ini menjadi panduan abadi bagi bangsa Indonesia untuk tetap menjaga nilai-nilai luhur dalam membangun masa depan.

Berdasarkan pemikiran Bung Hatta, jika paham survival of the fittest diterapkan dalam masyarakat Indonesia, ...`,
        options: [
            { letter: 'A', text: 'masyarakat Indonesia akan lebih maju karena persaingan bebas mendorong inovasi' },
            { letter: 'B', text: 'nilai kolektivitas dan keadilan sosial akan tergeser oleh individualisme' },
            { letter: 'C', text: 'gotong royong akan semakin kuat untuk melawan dampak persaingan' },
            { letter: 'D', text: 'perekonomian nasional akan menjadi lebih stabil dan adil' },
            { letter: 'E', text: 'perekonomian Indonesia semakin mandiri dan tidak bergantung dengan negara-negara maju' }
        ]
    },
    // SOAL 17 (teks PPN)
    {
        id: 17,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 17 sampai 20.
        Kenaikan Pajak Pertambahan Nilai (PPN) memberikan tantangan signifikan bagi saham mikro, kecil, dan menengah (UMKM), yang menjadi tulang punggung ekonomi Indonesia. Dengan daya beli masyarakat yang masih rapuh, pengusaha UMKM dihadapkan pada dilema: menaikkan harga barang untuk menutupi beban pajak atau mempertahankan harga dan menekan margin keuntungan. Pilihan ini berisiko menekan produksi, lapangan kerja, dan investasi sehingga menciptakan efek domino pada sektor ekonomi lainnya, seperti ritel modern
dan manufaktur.
Lebih lanjut, kenaikan PPN dapat melemahkan daya saing produk lokal. Barang lokal yang lebih mahal akan sulit bersaing dengan produk impor yang lebih murah. Kebijakan ini, meskipun bertujuan meningkatkan penerimaan negara, berpotensi memperburuk kondisi ekonomi domestik jika tidak diimbangi langkah mitigasi yang tepat.
Untuk meminimalkan dampak tersebut, pemerintah perlu menerapkan kebijakan yang berfokus pada pembelaan terhadap kelompok rentan dan sektor usaha kecil. Langkah pertama adalah memberikan pengecualian PPN untuk barang dan jasa esensial, seperti bahan pangan, kesehatan, dan pendidikan. Langkah ini akan melindungi daya beli masyarakat sekaligus memastikan kebutuhan pokok tetap terjangkau. Langkah kedua adalah memberikan insentif fiskal bagi UMKM yang harus diperkuat melalui keringanan pajak atau subsidi operasional. Dukungan ini tidak hanya menjaga keberlanjutan UMKM, tetapi juga memastikan stabilitas lapangan kerja dan kontribusi ekonomi sektor ini. Langkah ketiga adalah melakukan reformasi pajak yang lebih adil. Pemerintah perlu memperluas basis pajak dan mencegah penghindaran pajak untuk mendistribusikan beban secara merata sehingga kenaikan PPN tidak sepenuhnya membebani konsumen dan usaha kecil.

Menurut bacaan, salah satu sektor yang akan mengalami imbas negatif kenaikan PPN terhadap UMKM adalah`,
        options: [
            { letter: 'A', text: 'logistik' },
            { letter: 'B', text: 'pertambangan' },
            { letter: 'C', text: 'perdagangan' },
            { letter: 'D', text: 'konstruksi' },
            { letter: 'E', text: 'jasa keuangan' }
        ]
    },
    // SOAL 18
    {
        id: 18,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 17 sampai 20.
        Kenaikan Pajak Pertambahan Nilai (PPN) memberikan tantangan signifikan bagi saham mikro, kecil, dan menengah (UMKM), yang menjadi tulang punggung ekonomi Indonesia. Dengan daya beli masyarakat yang masih rapuh, pengusaha UMKM dihadapkan pada dilema: menaikkan harga barang untuk menutupi beban pajak atau mempertahankan harga dan menekan margin keuntungan. Pilihan ini berisiko menekan produksi, lapangan kerja, dan investasi sehingga menciptakan efek domino pada sektor ekonomi lainnya, seperti ritel modern
dan manufaktur.
Lebih lanjut, kenaikan PPN dapat melemahkan daya saing produk lokal. Barang lokal yang lebih mahal akan sulit bersaing dengan produk impor yang lebih murah. Kebijakan ini, meskipun bertujuan meningkatkan penerimaan negara, berpotensi memperburuk kondisi ekonomi domestik jika tidak diimbangi langkah mitigasi yang tepat.
Untuk meminimalkan dampak tersebut, pemerintah perlu menerapkan kebijakan yang berfokus pada pembelaan terhadap kelompok rentan dan sektor usaha kecil. Langkah pertama adalah memberikan pengecualian PPN untuk barang dan jasa esensial, seperti bahan pangan, kesehatan, dan pendidikan. Langkah ini akan melindungi daya beli masyarakat sekaligus memastikan kebutuhan pokok tetap terjangkau. Langkah kedua adalah memberikan insentif fiskal bagi UMKM yang harus diperkuat melalui keringanan pajak atau subsidi operasional. Dukungan ini tidak hanya menjaga keberlanjutan UMKM, tetapi juga memastikan stabilitas lapangan kerja dan kontribusi ekonomi sektor ini. Langkah ketiga adalah melakukan reformasi pajak yang lebih adil. Pemerintah perlu memperluas basis pajak dan mencegah penghindaran pajak untuk mendistribusikan beban secara merata sehingga kenaikan PPN tidak sepenuhnya membebani konsumen dan usaha kecil.

Istilah "insentif fiskal" pada bacaan memiliki makna ...`,
        options: [
            { letter: 'A', text: 'menaikkan anggaran pemerintah untuk pembangunan infrastruktur' },
            { letter: 'B', text: 'menurunkan tarif impor barang-barang esensial' },
            { letter: 'C', text: 'meningkatkan penerimaan pemerintah melalui reformasi perpajakan' },
            { letter: 'D', text: 'meringankan beban pajak atau membantu biaya produksi kelompok usaha tertentu' },
            { letter: 'E', text: 'melindungi daya beli masyarakat melalui sistem pajak progresif' }
        ]
    },
    // SOAL 19
    {
        id: 19,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 17 sampai 20.
        Kenaikan Pajak Pertambahan Nilai (PPN) memberikan tantangan signifikan bagi saham mikro, kecil, dan menengah (UMKM), yang menjadi tulang punggung ekonomi Indonesia. Dengan daya beli masyarakat yang masih rapuh, pengusaha UMKM dihadapkan pada dilema: menaikkan harga barang untuk menutupi beban pajak atau mempertahankan harga dan menekan margin keuntungan. Pilihan ini berisiko menekan produksi, lapangan kerja, dan investasi sehingga menciptakan efek domino pada sektor ekonomi lainnya, seperti ritel modern
dan manufaktur.
Lebih lanjut, kenaikan PPN dapat melemahkan daya saing produk lokal. Barang lokal yang lebih mahal akan sulit bersaing dengan produk impor yang lebih murah. Kebijakan ini, meskipun bertujuan meningkatkan penerimaan negara, berpotensi memperburuk kondisi ekonomi domestik jika tidak diimbangi langkah mitigasi yang tepat.
Untuk meminimalkan dampak tersebut, pemerintah perlu menerapkan kebijakan yang berfokus pada pembelaan terhadap kelompok rentan dan sektor usaha kecil. Langkah pertama adalah memberikan pengecualian PPN untuk barang dan jasa esensial, seperti bahan pangan, kesehatan, dan pendidikan. Langkah ini akan melindungi daya beli masyarakat sekaligus memastikan kebutuhan pokok tetap terjangkau. Langkah kedua adalah memberikan insentif fiskal bagi UMKM yang harus diperkuat melalui keringanan pajak atau subsidi operasional. Dukungan ini tidak hanya menjaga keberlanjutan UMKM, tetapi juga memastikan stabilitas lapangan kerja dan kontribusi ekonomi sektor ini. Langkah ketiga adalah melakukan reformasi pajak yang lebih adil. Pemerintah perlu memperluas basis pajak dan mencegah penghindaran pajak untuk mendistribusikan beban secara merata sehingga kenaikan PPN tidak sepenuhnya membebani konsumen dan usaha kecil.
Menurut bacaan, cara yang dapat ditempuh pemerintah untuk meningkatkan penerimaan negara selain menaikkan tarif PPN adalah ...`,
        options: [
            { letter: 'A', text: 'menaikkan tarif pajak penghasilan (PPh) perusahaan' },
            { letter: 'B', text: 'mendorong masuknya investasi yang lebih banyak' },
            { letter: 'C', text: 'menjaga stabilitas lapangan pekerjaan' },
            { letter: 'D', text: 'mencegah terjadinya manipulasi perpajakan' },
            { letter: 'E', text: 'memperluas basis pajak' }
        ]
    },
    // SOAL 20
    {
        id: 20,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 17 sampai 20.
        Kenaikan Pajak Pertambahan Nilai (PPN) memberikan tantangan signifikan bagi saham mikro, kecil, dan menengah (UMKM), yang menjadi tulang punggung ekonomi Indonesia. Dengan daya beli masyarakat yang masih rapuh, pengusaha UMKM dihadapkan pada dilema: menaikkan harga barang untuk menutupi beban pajak atau mempertahankan harga dan menekan margin keuntungan. Pilihan ini berisiko menekan produksi, lapangan kerja, dan investasi sehingga menciptakan efek domino pada sektor ekonomi lainnya, seperti ritel modern
dan manufaktur.
Lebih lanjut, kenaikan PPN dapat melemahkan daya saing produk lokal. Barang lokal yang lebih mahal akan sulit bersaing dengan produk impor yang lebih murah. Kebijakan ini, meskipun bertujuan meningkatkan penerimaan negara, berpotensi memperburuk kondisi ekonomi domestik jika tidak diimbangi langkah mitigasi yang tepat.
Untuk meminimalkan dampak tersebut, pemerintah perlu menerapkan kebijakan yang berfokus pada pembelaan terhadap kelompok rentan dan sektor usaha kecil. Langkah pertama adalah memberikan pengecualian PPN untuk barang dan jasa esensial, seperti bahan pangan, kesehatan, dan pendidikan. Langkah ini akan melindungi daya beli masyarakat sekaligus memastikan kebutuhan pokok tetap terjangkau. Langkah kedua adalah memberikan insentif fiskal bagi UMKM yang harus diperkuat melalui keringanan pajak atau subsidi operasional. Dukungan ini tidak hanya menjaga keberlanjutan UMKM, tetapi juga memastikan stabilitas lapangan kerja dan kontribusi ekonomi sektor ini. Langkah ketiga adalah melakukan reformasi pajak yang lebih adil. Pemerintah perlu memperluas basis pajak dan mencegah penghindaran pajak untuk mendistribusikan beban secara merata sehingga kenaikan PPN tidak sepenuhnya membebani konsumen dan usaha kecil.

Pernyataan yang sesuai dengan konsep ekonomi makro terkait kenaikan PPN <i>ceteris paribus</i> adalah ...`,
        options: [
            { letter: 'A', text: 'kenaikan PPN merupakan kebijakan fiskal yang bersifat kontraktif terhadap pertumbuhan ekonomi' },
            { letter: 'B', text: 'kenaikan PPN merupakan kebijakan fiskal yang bersifat ekspansif terhadap pertumbuhan ekonomi' },
            { letter: 'C', text: 'kenaikan PPN merupakan kebijakan fiskal yang bersifat kontraktif terhadap stabilitas harga' },
            { letter: 'D', text: 'kenaikan PPN merupakan kebijakan fiskal yang bersifat ekspansif terhadap nilai tukar' },
            { letter: 'E', text: 'kenaikan PPN merupakan kebijakan moneter yang bersifat kontraktif terhadap stabilitas harga' }
        ]
    },
        // SOAL 21 (Teks 6 - Program Transmigrasi)
    {
        id: 21,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 21 sampai 24.

Program transmigrasi berperan penting dalam mengembangkan desa terpencil dan kawasan tertinggal, terluar, dan terdepan (3T) di Indonesia. Kawasan transmigrasi dikembangkan dengan pendekatan ekonomi inklusif melalui kerja sama dengan sektor swasta untuk memasarkan produk unggulan daerah. Strategi ini bertujuan mempercepat pembangunan di luar Pulau Jawa, memanfaatkan potensi daerah sebagai motor penggerak pembangunan, dan meningkatkan daya saing wilayah yang masih tertinggal. Secara jangka panjang, program transmigrasi dapat menciptakan kawasan ekonomi baru yang berkelanjutan di luar Pulau Jawa.

Pengembangan ekonomi daerah sebaiknya berfokus pada potensi unggulan melalui kolaborasi pentahelix, yakni pelibatan pemerintah, masyarakat, akademisi, swasta, dan media. Kolaborasi ini mendukung peningkatan sumber daya manusia unggul dan usaha digitalisasi sebagai pondasi keberhasilan program transmigrasi. Untuk merealisasikannya, dibutuhkan kemitraan yang kuat, termasuk dalam investasi dan penerapan teknologi. Pendekatan yang membangun pusat pertumbuhan baru (epicentrum of growth) menjadi fokus utama untuk mempercepat pembangunan di kawasan transmigrasi melalui sinergi dengan berbagai pihak di sektor strategis.

Peraturan Presiden Nomor 50 Tahun 2018 tentang Koordinasi dan Integrasi Penyelenggaraan Transmigrasi (KIPT) mewadahi pembentukan Tim KIPT untuk mengoordinasikan dan mengintegrasikan program/kegiatan strategis kementerian/lembaga di kawasan transmigrasi, serta menginventarisasi permasalahan di tingkat pusat maupun daerah. Selain itu, Tim KIPT juga dapat mengawal dan mengevaluasi secara berkesinambungan program/kegiatan yang dilaksanakan sebagai upaya meningkatkan kesejahteraan transmigran dan penduduk di kawasan transmigrasi. Dengan dukungan Tim KIPT, pelaksanaan program transmigrasi dapat memperkuat pertumbuhan ekonomi dan meningkatkan kesejahteraan masyarakat di kawasan transmigrasi.

(Diadaptasi dari https://www.setkab.go.id/)

Menurut bacaan, tujuan pendekatan ekonomi inklusif dalam pengembangan daerah transmigrasi di masa depan adalah ...`,
        options: [
            { letter: 'A', text: 'mempercepat pembangunan daerah berpotensi di luar Pulau Jawa' },
            { letter: 'B', text: 'mengembangkan wilayah desa-desa terpencil dan daerah 3T' },
            { letter: 'C', text: 'menciptakan kawasan ekonomi baru berkelanjutan di luar Pulau Jawa' },
            { letter: 'D', text: 'mendistribusikan produk unggulan daerahnya masing-masing' },
            { letter: 'E', text: 'meningkatkan daya saing ekonomi daerah yang masih rendah' }
        ]
    },
    // SOAL 22
    {
        id: 22,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 21 sampai 24.

Program transmigrasi berperan penting dalam mengembangkan desa terpencil dan kawasan tertinggal, terluar, dan terdepan (3T) di Indonesia. Kawasan transmigrasi dikembangkan dengan pendekatan ekonomi inklusif melalui kerja sama dengan sektor swasta untuk memasarkan produk unggulan daerah. Strategi ini bertujuan mempercepat pembangunan di luar Pulau Jawa, memanfaatkan potensi daerah sebagai motor penggerak pembangunan, dan meningkatkan daya saing wilayah yang masih tertinggal. Secara jangka panjang, program transmigrasi dapat menciptakan kawasan ekonomi baru yang berkelanjutan di luar Pulau Jawa.

Pengembangan ekonomi daerah sebaiknya berfokus pada potensi unggulan melalui kolaborasi pentahelix, yakni pelibatan pemerintah, masyarakat, akademisi, swasta, dan media. Kolaborasi ini mendukung peningkatan sumber daya manusia unggul dan usaha digitalisasi sebagai pondasi keberhasilan program transmigrasi. Untuk merealisasikannya, dibutuhkan kemitraan yang kuat, termasuk dalam investasi dan penerapan teknologi. Pendekatan yang membangun pusat pertumbuhan baru (epicentrum of growth) menjadi fokus utama untuk mempercepat pembangunan di kawasan transmigrasi melalui sinergi dengan berbagai pihak di sektor strategis.

Peraturan Presiden Nomor 50 Tahun 2018 tentang Koordinasi dan Integrasi Penyelenggaraan Transmigrasi (KIPT) mewadahi pembentukan Tim KIPT untuk mengoordinasikan dan mengintegrasikan program/kegiatan strategis kementerian/lembaga di kawasan transmigrasi, serta menginventarisasi permasalahan di tingkat pusat maupun daerah. Selain itu, Tim KIPT juga dapat mengawal dan mengevaluasi secara berkesinambungan program/kegiatan yang dilaksanakan sebagai upaya meningkatkan kesejahteraan transmigran dan penduduk di kawasan transmigrasi. Dengan dukungan Tim KIPT, pelaksanaan program transmigrasi dapat memperkuat pertumbuhan ekonomi dan meningkatkan kesejahteraan masyarakat di kawasan transmigrasi.

(Diadaptasi dari https://www.setkab.go.id/)

Menurut bacaan, makna "kolaborasi pentahelix" dalam pengembangan ekonomi daerah transmigrasi adalah ...`,
        options: [
            { letter: 'A', text: 'kerja sama yang melibatkan lima pemangku kepentingan utama dalam pengembangan transmigrasi' },
            { letter: 'B', text: 'pembangunan transmigrasi yang berorientasi pada sumber daya manusia unggul dan digitalisasi' },
            { letter: 'C', text: 'pengembangan wilayah transmigrasi dengan memanfaatkan lima potensi alam unggulan yang tersedia' },
            { letter: 'D', text: 'kolaborasi dalam pembangunan yang berorientasi pada lima dukungan kebijakan pemerintah' },
            { letter: 'E', text: 'kebijakan pemerintah untuk mendorong pembangunan transmigrasi melalui lima peran aktif masyarakat setempat' }
        ]
    },
    // SOAL 23
    {
        id: 23,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 21 sampai 24.

Program transmigrasi berperan penting dalam mengembangkan desa terpencil dan kawasan tertinggal, terluar, dan terdepan (3T) di Indonesia. Kawasan transmigrasi dikembangkan dengan pendekatan ekonomi inklusif melalui kerja sama dengan sektor swasta untuk memasarkan produk unggulan daerah. Strategi ini bertujuan mempercepat pembangunan di luar Pulau Jawa, memanfaatkan potensi daerah sebagai motor penggerak pembangunan, dan meningkatkan daya saing wilayah yang masih tertinggal. Secara jangka panjang, program transmigrasi dapat menciptakan kawasan ekonomi baru yang berkelanjutan di luar Pulau Jawa.

Pengembangan ekonomi daerah sebaiknya berfokus pada potensi unggulan melalui kolaborasi pentahelix, yakni pelibatan pemerintah, masyarakat, akademisi, swasta, dan media. Kolaborasi ini mendukung peningkatan sumber daya manusia unggul dan usaha digitalisasi sebagai pondasi keberhasilan program transmigrasi. Untuk merealisasikannya, dibutuhkan kemitraan yang kuat, termasuk dalam investasi dan penerapan teknologi. Pendekatan yang membangun pusat pertumbuhan baru (epicentrum of growth) menjadi fokus utama untuk mempercepat pembangunan di kawasan transmigrasi melalui sinergi dengan berbagai pihak di sektor strategis.

Peraturan Presiden Nomor 50 Tahun 2018 tentang Koordinasi dan Integrasi Penyelenggaraan Transmigrasi (KIPT) mewadahi pembentukan Tim KIPT untuk mengoordinasikan dan mengintegrasikan program/kegiatan strategis kementerian/lembaga di kawasan transmigrasi, serta menginventarisasi permasalahan di tingkat pusat maupun daerah. Selain itu, Tim KIPT juga dapat mengawal dan mengevaluasi secara berkesinambungan program/kegiatan yang dilaksanakan sebagai upaya meningkatkan kesejahteraan transmigran dan penduduk di kawasan transmigrasi. Dengan dukungan Tim KIPT, pelaksanaan program transmigrasi dapat memperkuat pertumbuhan ekonomi dan meningkatkan kesejahteraan masyarakat di kawasan transmigrasi.

(Diadaptasi dari https://www.setkab.go.id/)

Menurut bacaan, manfaat keberadaan tim KIPT bagi Indonesia adalah ...`,
        options: [
            { letter: 'A', text: 'meningkatnya jumlah wilayah transmigrasi' },
            { letter: 'B', text: 'bertambahnya kegiatan strategis kementerian di wilayah transmigrasi' },
            { letter: 'C', text: 'tersedianya sumber daya yang cukup untuk pengembangan ekonomi wilayah transmigrasi' },
            { letter: 'D', text: 'meningkatnya kesejahteraan masyarakat dan pertumbuhan ekonomi nasional' },
            { letter: 'E', text: 'meratanya penyebaran penduduk melalui program transmigrasi' }
        ]
    },
    // SOAL 24
    {
        id: 24,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 21 sampai 24.

Program transmigrasi berperan penting dalam mengembangkan desa terpencil dan kawasan tertinggal, terluar, dan terdepan (3T) di Indonesia. Kawasan transmigrasi dikembangkan dengan pendekatan ekonomi inklusif melalui kerja sama dengan sektor swasta untuk memasarkan produk unggulan daerah. Strategi ini bertujuan mempercepat pembangunan di luar Pulau Jawa, memanfaatkan potensi daerah sebagai motor penggerak pembangunan, dan meningkatkan daya saing wilayah yang masih tertinggal. Secara jangka panjang, program transmigrasi dapat menciptakan kawasan ekonomi baru yang berkelanjutan di luar Pulau Jawa.

Pengembangan ekonomi daerah sebaiknya berfokus pada potensi unggulan melalui kolaborasi pentahelix, yakni pelibatan pemerintah, masyarakat, akademisi, swasta, dan media. Kolaborasi ini mendukung peningkatan sumber daya manusia unggul dan usaha digitalisasi sebagai pondasi keberhasilan program transmigrasi. Untuk merealisasikannya, dibutuhkan kemitraan yang kuat, termasuk dalam investasi dan penerapan teknologi. Pendekatan yang membangun pusat pertumbuhan baru (epicentrum of growth) menjadi fokus utama untuk mempercepat pembangunan di kawasan transmigrasi melalui sinergi dengan berbagai pihak di sektor strategis.

Peraturan Presiden Nomor 50 Tahun 2018 tentang Koordinasi dan Integrasi Penyelenggaraan Transmigrasi (KIPT) mewadahi pembentukan Tim KIPT untuk mengoordinasikan dan mengintegrasikan program/kegiatan strategis kementerian/lembaga di kawasan transmigrasi, serta menginventarisasi permasalahan di tingkat pusat maupun daerah. Selain itu, Tim KIPT juga dapat mengawal dan mengevaluasi secara berkesinambungan program/kegiatan yang dilaksanakan sebagai upaya meningkatkan kesejahteraan transmigran dan penduduk di kawasan transmigrasi. Dengan dukungan Tim KIPT, pelaksanaan program transmigrasi dapat memperkuat pertumbuhan ekonomi dan meningkatkan kesejahteraan masyarakat di kawasan transmigrasi.

(Diadaptasi dari https://www.setkab.go.id/)

Implikasi tidak terjalinnya sinergi yang baik antarpihak yang berkepentingan dalam program transmigrasi adalah ...`,
        options: [
            { letter: 'A', text: 'pemerintah sulit menyediakan alokasi dana pembangunan tambahan di wilayah transmigrasi' },
            { letter: 'B', text: 'KIPT tidak dapat menginventarisasi permasalahan di tingkat pusat maupun daerah' },
            { letter: 'C', text: 'media massa harus terlibat untuk mengawal dan mengevaluasi program transmigrasi secara berkesinambungan' },
            { letter: 'D', text: 'pertumbuhan ekonomi nasional dan daya saing produk dalam negeri turun' },
            { letter: 'E', text: 'kawasan transmigrasi tidak dapat mendorong terciptanya pusat pertumbuhan baru' }
        ]
    },
    // SOAL 25 (Teks 7 - Cerpen)
    {
        id: 25,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 25 sampai 30.

Seusai acara wisuda, aku mengajak ibu dan kakakku berziarah. Menyampaikan kabar anak bungsunya sudah lulus kuliah tepat di pusara sang bapak. Kembali kuusap tulisan yang terpahat di atas batu nisan hitam itu untuk yang kesekian kalinya. Perasaan menyesal terus menerus menghantam nuraniku, berpikir andai saja aku lulus lebih cepat pasti bapak turut bersuka cita merayakannya seperti teman-temanku yang lain. Mengingat watak bapak yang bersikap seolah tak acuh, padahal ialah yang paling sering membanggakan anak-anaknya di hadapan para kerabat.

"Anak bontotku itu sudah jago jahit, ini dia sendiri yang bikin," ujarnya kala itu, memamerkan tas serut kain yang kubuat untuk tempat bekal kerja di kebun sawit atas permintaannya di depan teman-temannya. Ia sangat senang mendapat pujian karena sudah berhasil mendidik anak-anaknya menjadi anak yang memiliki keahlian dan berbakti kepada orang tua. Suara tawanya yang cempreng bisa terdengar sampai keluar rumah.

Sebuah senyuman tipis tersungging di bibirku saat terkenang akan kelakuan bapak yang tampak tak pernah dewasa, tetapi sangat bertanggung jawab akan kelangsungan hidup keluarga kecilnya. Sayang sekali, waktu kebersamaan kami berkurang saat aku berkukuh melanjutkan pendidikan ke jenjang perguruan tinggi di ibu kota Provinsi Sumatera Utara, Medan.

Waktu itu, aku berargumen bahwa kemampuan menjahitku harus ditempa di universitas negeri yang menyediakan program studi tata busana agar karierku tidak berhenti sebatas tukang jahit rumahan. Untungnya keluargaku menyetujui dengan senang hati, terutama bapak yang terus berjuang mendukungku sampai akhir hayatnya.

Aku kembali teringat kenangan waktu mendengar suara bapak lewat telepon, bertanya tentang hal-hal sepele seperti aku makan pakai lauk apa, sudah shalat atau belum, atau bahkan sekadar membangunkan di pagi hari, dan sialnya sampai saat ini tak pernah kuperoleh lagi. Hari itu sama dengan hari-hari sebelumnya, bapak menelepon di sore hari, melepas penat setelah pulang bekerja dari kebun sawit orang.

(Diadaptasi dari https://www.kompas.id)

Permasalahan utama yang dihadapi tokoh adalah ...`,
        options: [
            { letter: 'A', text: 'penyesalan tokoh karena tidak dapat menyelesaikan studi tepat waktu sehingga sang ayah tidak dapat merayakan kelulusannya' },
            { letter: 'B', text: 'kesedihan tokoh karena merasa kurang memiliki keterampilan yang dapat dibanggakan seperti teman-temannya' },
            { letter: 'C', text: 'penyesalan tokoh karena memilih pendidikan yang membuatnya jauh dari keluarga dan terpisah dari ayahnya' },
            { letter: 'D', text: 'kekecewaan tokoh terhadap watak ayahnya yang tampak tenang dan kurang terbuka terhadap keluarga' },
            { letter: 'E', text: 'kerinduan tokoh akan kehidupan sederhana di desa yang tidak bisa ia peroleh di kota besar' }
        ]
    },
    // SOAL 26
    {
        id: 26,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 25 sampai 30.

Seusai acara wisuda, aku mengajak ibu dan kakakku berziarah. Menyampaikan kabar anak bungsunya sudah lulus kuliah tepat di pusara sang bapak. Kembali kuusap tulisan yang terpahat di atas batu nisan hitam itu untuk yang kesekian kalinya. Perasaan menyesal terus menerus menghantam nuraniku, berpikir andai saja aku lulus lebih cepat pasti bapak turut bersuka cita merayakannya seperti teman-temanku yang lain. Mengingat watak bapak yang bersikap seolah tak acuh, padahal ialah yang paling sering membanggakan anak-anaknya di hadapan para kerabat.

"Anak bontotku itu sudah jago jahit, ini dia sendiri yang bikin," ujarnya kala itu, memamerkan tas serut kain yang kubuat untuk tempat bekal kerja di kebun sawit atas permintaannya di depan teman-temannya. Ia sangat senang mendapat pujian karena sudah berhasil mendidik anak-anaknya menjadi anak yang memiliki keahlian dan berbakti kepada orang tua. Suara tawanya yang cempreng bisa terdengar sampai keluar rumah.

(Diadaptasi dari https://www.kompas.id)

Kata "cempreng" dalam frasa "Suara tawanya yang cempreng bisa terdengar sampai keluar rumah" menggambarkan ...`,
        options: [
            { letter: 'A', text: 'suara yang mengganggu dan tidak disukai orang lain di sekitarnya karena terlalu keras' },
            { letter: 'B', text: 'suara tawa ayah yang berwibawa dan tegas sehingga menimbulkan kekaguman pada keluarga' },
            { letter: 'C', text: 'kelembutan suara ayah yang membuat suasana hati anaknya nyaman dan damai dengan keadaan' },
            { letter: 'D', text: 'suara tawa ayah yang unik dan khas, mencerminkan wataknya yang ceria dan seolah tidak pernah dewasa' },
            { letter: 'E', text: 'suara ayah yang terlalu nyaring, menunjukkan bahwa ia pribadi yang keras dan cenderung emosional' }
        ]
    },
    // SOAL 27
    {
        id: 27,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 25 sampai 30.

Seusai acara wisuda, aku mengajak ibu dan kakakku berziarah. Menyampaikan kabar anak bungsunya sudah lulus kuliah tepat di pusara sang bapak. Kembali kuusap tulisan yang terpahat di atas batu nisan hitam itu untuk yang kesekian kalinya. Perasaan menyesal terus menerus menghantam nuraniku, berpikir andai saja aku lulus lebih cepat pasti bapak turut bersuka cita merayakannya seperti teman-temanku yang lain. Mengingat watak bapak yang bersikap seolah tak acuh, padahal ialah yang paling sering membanggakan anak-anaknya di hadapan para kerabat.

"Anak bontotku itu sudah jago jahit, ini dia sendiri yang bikin," ujarnya kala itu, memamerkan tas serut kain yang kubuat untuk tempat bekal kerja di kebun sawit atas permintaannya di depan teman-temannya. Ia sangat senang mendapat pujian karena sudah berhasil mendidik anak-anaknya menjadi anak yang memiliki keahlian dan berbakti kepada orang tua. Suara tawanya yang cempreng bisa terdengar sampai keluar rumah.

Sebuah senyuman tipis tersungging di bibirku saat terkenang akan kelakuan bapak yang tampak tak pernah dewasa, tetapi sangat bertanggung jawab akan kelangsungan hidup keluarga kecilnya. Sayang sekali, waktu kebersamaan kami berkurang saat aku berkukuh melanjutkan pendidikan ke jenjang perguruan tinggi di ibu kota Provinsi Sumatera Utara, Medan.

(Diadaptasi dari https://www.kompas.id)

Pernyataan berikut ini paling sesuai dengan isi cerpen adalah ...`,
        options: [
            { letter: 'A', text: 'memberikan kritik sosial terhadap pilihan pendidikan dan pekerjaan di masyarakat era kini' },
            { letter: 'B', text: 'menggambarkan suasana rumah dan kehidupan sederhana dengan detail yang mendalam' },
            { letter: 'C', text: 'menggunakan dialog panjang untuk mengungkapkan hubungan erat antar anggota keluarga' },
            { letter: 'D', text: 'menyampaikan emosi kerinduan, penyesalan, dan cinta keluarga secara mendalam dan mengalir alami' },
            { letter: 'E', text: 'menampilkan konflik besar antara tokoh utama dengan keluarganya terkait masa depan dan pendidikan' }
        ]
    },
    // SOAL 28
    {
        id: 28,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 25 sampai 30.

Seusai acara wisuda, aku mengajak ibu dan kakakku berziarah. Menyampaikan kabar anak bungsunya sudah lulus kuliah tepat di pusara sang bapak. Kembali kuusap tulisan yang terpahat di atas batu nisan hitam itu untuk yang kesekian kalinya. Perasaan menyesal terus menerus menghantam nuraniku, berpikir andai saja aku lulus lebih cepat pasti bapak turut bersuka cita merayakannya seperti teman-temanku yang lain. Mengingat watak bapak yang bersikap seolah tak acuh, padahal ialah yang paling sering membanggakan anak-anaknya di hadapan para kerabat.

(Diadaptasi dari https://www.kompas.id)

Cara tokoh menghadapi rasa penyesalan atas ketidakhadiran ayahnya dalam acara kelulusannya adalah ...`,
        options: [
            { letter: 'A', text: 'melupakan semua kenangan tentang ayah agar tidak terus-terusan merasa bersalah' },
            { letter: 'B', text: 'menghadirkan semua kenangan saat bersama dengan keluarga' },
            { letter: 'C', text: 'mengunjungi makam ayahnya bersama ibu dan kakaknya untuk mengabarkan kelulusannya' },
            { letter: 'D', text: 'menyesali pilihannya untuk melanjutkan pendidikan dan berusaha untuk tidak mengulanginya' },
            { letter: 'E', text: 'menyalahkan dirinya sendiri karena telah membuat ayahnya kecewa dengan pilihan hidupnya' }
        ]
    },
    // SOAL 29
    {
        id: 29,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 25 sampai 30.

Seusai acara wisuda, aku mengajak ibu dan kakakku berziarah. Menyampaikan kabar anak bungsunya sudah lulus kuliah tepat di pusara sang bapak. Kembali kuusap tulisan yang terpahat di atas batu nisan hitam itu untuk yang kesekian kalinya. Perasaan menyesal terus menerus menghantam nuraniku, berpikir andai saja aku lulus lebih cepat pasti bapak turut bersuka cita merayakannya seperti teman-temanku yang lain. Mengingat watak bapak yang bersikap seolah tak acuh, padahal ialah yang paling sering membanggakan anak-anaknya di hadapan para kerabat.

"Anak bontotku itu sudah jago jahit, ini dia sendiri yang bikin," ujarnya kala itu, memamerkan tas serut kain yang kubuat untuk tempat bekal kerja di kebun sawit atas permintaannya di depan teman-temannya. Ia sangat senang mendapat pujian karena sudah berhasil mendidik anak-anaknya menjadi anak yang memiliki keahlian dan berbakti kepada orang tua. Suara tawanya yang cempreng bisa terdengar sampai keluar rumah.

(Diadaptasi dari https://www.kompas.id)

Berdasarkan pernyataan dan tindakan tokoh, watak sang ayah dapat digambarkan sebagai ...`,
        options: [
            { letter: 'A', text: 'tokoh yang sederhana dan tidak mementingkan pendidikan formal, tetapi sangat tegas dalam mendidik anak-anaknya' },
            { letter: 'B', text: 'seorang yang penuh perhatian dan bangga terhadap anak-anaknya, meskipun tidak selalu mengungkapkannya' },
            { letter: 'C', text: 'orang yang acuh terhadap pendidikan anak-anaknya, tetapi tetap ingin terlibat dalam kehidupannya' },
            { letter: 'D', text: 'sosok ayah yang keras, disiplin, tetapi diam-diam penuh perhatian terhadap kebutuhan anaknya' },
            { letter: 'E', text: 'pribadi yang gemar berinteraksi dengan keluarga, tetapi sering menyembunyikan perasaannya' }
        ]
    },
    // SOAL 30
    {
        id: 30,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 25 sampai 30.

Seusai acara wisuda, aku mengajak ibu dan kakakku berziarah. Menyampaikan kabar anak bungsunya sudah lulus kuliah tepat di pusara sang bapak. Kembali kuusap tulisan yang terpahat di atas batu nisan hitam itu untuk yang kesekian kalinya. Perasaan menyesal terus menerus menghantam nuraniku, berpikir andai saja aku lulus lebih cepat pasti bapak turut bersuka cita merayakannya seperti teman-temanku yang lain. Mengingat watak bapak yang bersikap seolah tak acuh, padahal ialah yang paling sering membanggakan anak-anaknya di hadapan para kerabat.

"Anak bontotku itu sudah jago jahit, ini dia sendiri yang bikin," ujarnya kala itu, memamerkan tas serut kain yang kubuat untuk tempat bekal kerja di kebun sawit atas permintaannya di depan teman-temannya. Ia sangat senang mendapat pujian karena sudah berhasil mendidik anak-anaknya menjadi anak yang memiliki keahlian dan berbakti kepada orang tua. Suara tawanya yang cempreng bisa terdengar sampai keluar rumah.

Sebuah senyuman tipis tersungging di bibirku saat terkenang akan kelakuan bapak yang tampak tak pernah dewasa, tetapi sangat bertanggung jawab akan kelangsungan hidup keluarga kecilnya. Sayang sekali, waktu kebersamaan kami berkurang saat aku berkukuh melanjutkan pendidikan ke jenjang perguruan tinggi di ibu kota Provinsi Sumatera Utara, Medan.

Waktu itu, aku berargumen bahwa kemampuan menjahitku harus ditempa di universitas negeri yang menyediakan program studi tata busana agar karierku tidak berhenti sebatas tukang jahit rumahan. Untungnya keluargaku menyetujui dengan senang hati, terutama bapak yang terus berjuang mendukungku sampai akhir hayatnya.

(Diadaptasi dari https://www.kompas.id)

Berdasarkan kutipan cerpen, pandangan tokoh tentang arti keluarga terlihat dari ...`,
        options: [
            { letter: 'A', text: 'kepatuhan pada orang tua untuk mengikuti nasihat tentang masa depan' },
            { letter: 'B', text: 'kebanggaannya pada cara keluarga menyikapi kesederhanaan hidup' },
            { letter: 'C', text: 'rasa hormatnya pada keluarganya dan keinginannya untuk menjaga nama baik keluarga' },
            { letter: 'D', text: 'rasa bangganya terhadap prestasi yang diraih dan keinginannya untuk membuat ayah bangga' },
            { letter: 'E', text: 'upayanya untuk menunjukkan hasil pendidikannya kepada ayah yang telah bekerja keras' }
        ]
    }

];