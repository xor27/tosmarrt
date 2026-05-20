// ==================== SUBTEST 4: Pengetahuan Kuantitatif ====================
// Total 20 soal

const subtest4 = [
    // SOAL 1 (Isian Singkat)
    {
        id: 1,
        type: 'short-answer',
        text: `Jika a - 5 = ⁴⁄₅ × 10, nilai a sama dengan ...`,
        placeholder: 'Masukkan jawaban (angka)'
    },
    // SOAL 2 (Isian Singkat)
    {
        id: 2,
        type: 'short-answer',
        text: `Titik Q(-1, 5) terletak pada grafik fungsi g(x) = 3x² - bx - 5. Nilai b sama dengan ...`,
        placeholder: 'Masukkan jawaban (angka)'
    },
    // SOAL 3
    {
        id: 3,
        type: 'multiple-choice',
        text: `Sepuluh bilangan yaitu 7, 5, 8, 6, 4, 4, 3, 3, 3, dan 2, diurutkan dari yang terkecil hingga terbesar. Jika e dan f berturut-turut merepresentasikan bilangan pada posisi ke-1 dan ke-9 setelah diurutkan, nilai e + (2 × f) sama dengan ...`,
        options: [
            { letter: 'A', text: '2' },
            { letter: 'B', text: '7' },
            { letter: 'C', text: '9' },
            { letter: 'D', text: '11' },
            { letter: 'E', text: '16' }
        ]
    },
    // SOAL 4 (dengan gambar - placeholder)
    {
        id: 4,
        type: 'multiple-choice',
        text: `<div style="text-align: center;">
                    <img src="images/PK3.png" alt="Banyak Segitiga" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
                Banyaknya segitiga pada bangun datar di atas adalah ...`,
        options: [
            { letter: 'A', text: '4' },
            { letter: 'B', text: '5' },
            { letter: 'C', text: '6' },
            { letter: 'D', text: '7' },
            { letter: 'E', text: '8' }
        ]
    },
    // SOAL 5
    {
        id: 5,
        type: 'multiple-choice',
        text: `Untuk setiap bilangan bulat k didefinisikan:
<div style="text-align: center;">
                    <img src="images/PK5.png" alt="Fungsi (k)" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>

Nilai (1 + (-4]] sama dengan ...`,
        options: [
            { letter: 'A', text: '-8' },
            { letter: 'B', text: '-3' },
            { letter: 'C', text: '4' },
            { letter: 'D', text: '9' },
            { letter: 'E', text: '16' }
        ]
    },
    // SOAL 6 (untuk nomor 6-8, teks ditampilkan di setiap soal)
    {
        id: 6,
        type: 'multiple-choice',
        text: `Fungsi f dan g berpotongan di dua titik berbeda.
Grafik fungsi f(x) = -x² + 5x dan garis g(x) = x² + 3x - 12 berpotongan di dua titik berbeda, yaitu A(p, q) dan B(r, t). Garis h melalui kedua titik tersebut.

Jika p < r, nilai t sama dengan ...`,
        options: [
            { letter: 'A', text: '-14' },
            { letter: 'B', text: '-2' },
            { letter: 'C', text: '3' },
            { letter: 'D', text: '6' },
            { letter: 'E', text: '14' }
        ]
    },
    // SOAL 7
    {
        id: 7,
        type: 'multiple-choice',
        text: `Fungsi f dan g berpotongan di dua titik berbeda.
Grafik fungsi f(x) = -x² + 5x dan garis g(x) = x² + 3x - 12 berpotongan di dua titik berbeda, yaitu A(p, q) dan B(r, t). Garis h melalui kedua titik tersebut.

Gradien garis h sama dengan ...`,
        options: [
            { letter: 'A', text: '-8' },
            { letter: 'B', text: '-4' },
            { letter: 'C', text: '4' },
            { letter: 'D', text: '5' },
            { letter: 'E', text: '8' }
        ]
    },
    // SOAL 8
    {
        id: 8,
        type: 'multiple-choice',
        text: `Fungsi f dan g berpotongan di dua titik berbeda.
Grafik fungsi f(x) = -x² + 5x dan garis g(x) = x² + 3x - 12 berpotongan di dua titik berbeda, yaitu A(p, q) dan B(r, t). Garis h melalui kedua titik tersebut.

Jika y = mx + c melalui titik (1, 1) dan sejajar dengan garis h, nilai c adalah ...`,
        options: [
            { letter: 'A', text: '-3' },
            { letter: 'B', text: '-2' },
            { letter: 'C', text: '1' },
            { letter: 'D', text: '3' },
            { letter: 'E', text: '4' }
        ]
    },
    // SOAL 9 (untuk nomor 9-11)
    {
        id: 9,
        type: 'multiple-choice',
        text: `Suatu limas dengan volume 42 memiliki alas berupa daerah trapesium ABCD. Koordinat titik-titik sudut trapesium tersebut disajikan pada gambar berikut.
        <div style="text-align: center;">
                    <img src="images/PK9.png" alt="Gambar Tranpesium" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>

Jarak antara sisi AB dan sisi CD sama dengan ...`,
        options: [
            { letter: 'A', text: '5' },
            { letter: 'B', text: '6' },
            { letter: 'C', text: '7' },
            { letter: 'D', text: '8' },
            { letter: 'E', text: '9' }
        ]
    },
    // SOAL 10
    {
        id: 10,
        type: 'multiple-choice',
        text: `Suatu limas dengan volume 42 memiliki alas berupa daerah trapesium ABCD. Koordinat titik-titik sudut trapesium tersebut disajikan pada gambar berikut.
        <div style="text-align: center;">
                    <img src="images/PK9.png" alt="Gambar Tranpesium" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>

Luas daerah trapesium ABCD sama dengan ...`,
        options: [
            { letter: 'A', text: '63' },
            { letter: 'B', text: '56' },
            { letter: 'C', text: '49' },
            { letter: 'D', text: '42' },
            { letter: 'E', text: '35' }
        ]
    },
    // SOAL 11
    {
        id: 11,
        type: 'multiple-choice',
        text: `Suatu limas dengan volume 42 memiliki alas berupa daerah trapesium ABCD. Koordinat titik-titik sudut trapesium tersebut disajikan pada gambar berikut.
        <div style="text-align: center;">
                    <img src="images/PK9.png" alt="Gambar Tranpesium" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>

Tinggi limas tersebut sama dengan ...`,
        options: [
            { letter: 'A', text: '3' },
            { letter: 'B', text: '18/7' },
            { letter: 'C', text: '9/4' },
            { letter: 'D', text: '2' },
            { letter: 'E', text: '1' }
        ]
    },
    // SOAL 12
    {
        id: 12,
        type: 'multiple-choice',
        text: `Di antara pilihan berikut, yang merupakan faktor persekutuan dari (21² + 84) dan (45² - 30²) adalah ...

(1) 25
(2) 35
(3) 75
(4) 105`,
        options: [
            { letter: 'A', text: '(1), (2), dan (3) SAJA' },
            { letter: 'B', text: '(1) dan (3) SAJA' },
            { letter: 'C', text: '(2) dan (4) SAJA' },
            { letter: 'D', text: '(4) SAJA' },
            { letter: 'E', text: 'SEMUA PILIHAN' }
        ]
    },
    // SOAL 13
    {
        id: 13,
        type: 'multiple-choice',
        text: `Fungsi f memenuhi:

x² + 1 < f(x) < 3ˣ

untuk x ≥ 2.
Di antara pilihan berikut, nilai f di x = 3 yang TIDAK MUNGKIN adalah:

(1) 36
(2) 28
(3) 32
(4) 24`,
        options: [
            { letter: 'A', text: '(1), (2), dan (3) SAJA' },
            { letter: 'B', text: '(1) dan (3) SAJA' },
            { letter: 'C', text: '(2) dan (4) SAJA' },
            { letter: 'D', text: '(4) SAJA' },
            { letter: 'E', text: 'SEMUA PILIHAN' }
        ]
    },
    // SOAL 14
    {
        id: 14,
        type: 'multiple-choice',
        text: `Jika 0° < x < 90° dan 1/sin x = 7/6, di antara pilihan berikut, yang benar adalah ...

(1) 1/cos x = 12/7
(2) tan x = 6/7
(3) tan x + sin x < 12/7
(4) sin(90° - x) = √13/7`,
        options: [
            { letter: 'A', text: '(1), (2), dan (3) SAJA' },
            { letter: 'B', text: '(1) dan (3) SAJA' },
            { letter: 'C', text: '(2) dan (4) SAJA' },
            { letter: 'D', text: '(4) SAJA' },
            { letter: 'E', text: 'SEMUA PILIHAN' }
        ]
    },
    // SOAL 15
    {
        id: 15,
        type: 'multiple-choice',
        text: `Segi empat PQRS merupakan persegi panjang dengan PQ = 6 dan QR = 8. Titik T terletak di dalam persegi panjang tersebut sehingga jarak titik T ke sisi QR adalah 4. Luas daerah segitiga PTS dan QRT berturut-turut adalah A₁ dan A₂.
<div style="text-align: center;">
                    <img src="images/PK15.jpeg" alt="Diagram Penjualan Motor" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>

Berdasarkan informasi yang diberikan, manakah hubungan kuantitas P dan Q berikut yang benar?`,
        options: [
            { letter: 'A', text: 'Kuantitas P lebih dari Q.' },
            { letter: 'B', text: 'Kuantitas P kurang dari Q.' },
            { letter: 'C', text: 'Kuantitas P sama dengan Q.' },
            { letter: 'D', text: 'Tidak dapat ditentukan hubungan antara kuantitas P dan Q.' }
        ]
    },
    // SOAL 16
    {
        id: 16,
        type: 'multiple-choice',
        text: `<div style="text-align: center;">
                    <img src="images/PK16-1.png" alt="SPLTV" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
                Untuk setiap bilangan bulat a, b, c, d, e, dan f, didefinisikan seperti di atas. Diketahui e merupakan bilangan genap positif. Berdasarkan informasi yang diberikan, manakah hubungan antara kuantitas P dan Q berikut yang benar?
<div style="text-align: center;">
                    <img src="images/PK16-2.png" alt="SPLTV" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>`,
        options: [
            { letter: 'A', text: 'Kuantitas P lebih dari Q.' },
            { letter: 'B', text: 'Kuantitas P kurang dari Q.' },
            { letter: 'C', text: 'Kuantitas P sama dengan Q.' },
            { letter: 'D', text: 'Tidak dapat ditentukan hubungan antara kuantitas P dan Q.' }
        ]
    },
    // SOAL 17
    {
        id: 17,
        type: 'multiple-choice',
        text: `Sistem persamaan linear dalam x, y, dan z berikut:
        <div style="text-align: center;">
                    <img src="images/PK17-1.jpeg" alt="SPLTV" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
        mempunyai solusi x = a, y = b, dan z = c. Berdasarkan informasi yang diberikan, manakah hubungan kuantitas P dan Q berikut yang benar?
        <div style="text-align: center;">
                    <img src="images/PK17-2.jpeg" alt="Diagram Penjualan Motor" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>`,
        options: [
            { letter: 'A', text: 'Kuantitas P lebih dari Q.' },
            { letter: 'B', text: 'Kuantitas P kurang dari Q.' },
            { letter: 'C', text: 'Kuantitas P sama dengan Q.' },
            { letter: 'D', text: 'Tidak dapat ditentukan hubungan antara kuantitas P dan Q.' }
        ]
    },
    // SOAL 18 (Isian Singkat)
    {
        id: 18,
        type: 'short-answer',
        text: `Enam bilangan bulat positif, yaitu 2, 9, 3, 1, x, dan 2, memiliki median x. Jika median dikali rata-rata menghasilkan P/15, nilai P sama dengan ...`,
        placeholder: 'Masukkan jawaban (angka)'
    },
    // SOAL 19
    {
        id: 19,
        type: 'multiple-choice',
        text: `Barisan geometri u₁, u₂, u₃, ... memenuhi uₙ = a(bⁿ) untuk bilangan bulat positif a dan b tertentu dengan b ≠ 1. Apakah u₅ lebih dari 100?

Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.

(1) a² > 6
(2) ab = 6`,
        options: [
            { letter: 'A', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup' },
            { letter: 'B', text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup' },
            { letter: 'C', text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU saja tidak cukup' },
            { letter: 'D', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup' },
            { letter: 'E', text: 'Pernyataan (1) dan (2) tidak cukup untuk menjawab pertanyaan' }
        ]
    },
    // SOAL 20
    {
        id: 20,
        type: 'multiple-choice',
        text: `Fungsi f dan g dengan variabel real didefinisikan sebagai berikut:

f(x) = ax² + 5x dan g(x) = bx - 6

untuk bilangan asli a dan b.

Apakah terdapat bilangan real c sehingga f(c) = g(2)?

Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.

(1) a + 2b < 5
(2) a = 2`,
        options: [
            { letter: 'A', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup' },
            { letter: 'B', text: 'Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup' },
            { letter: 'C', text: 'DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU saja tidak cukup' },
            { letter: 'D', text: 'Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup' },
            { letter: 'E', text: 'Pernyataan (1) dan (2) tidak cukup untuk menjawab pertanyaan' }
        ]
    }
];