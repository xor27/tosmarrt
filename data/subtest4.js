// ==================== SUBTEST 4: Pengetahuan Kuantitatif ====================
// Total 20 soal

const subtest4 = [
    // SOAL 1
    {
        id: 1,
        type: 'multiple-choice',
        text: `Untuk bilangan real a dan b tertentu pada grafik fungsi f(x) = x² - ax + 7 melalui titik (2, 3), (b, 12), dan (b+6, 12). Nilai a + 2b adalah ...`,
        options: [
            { letter: 'A', text: '2' },
            { letter: 'B', text: '3' },
            { letter: 'C', text: '4' },
            { letter: 'D', text: '5' },
            { letter: 'E', text: '6' }
        ]
    },
    // SOAL 2
    {
        id: 2,
        type: 'multiple-choice',
        text: `Hasil kali tiga bilangan prima p, q, r dengan p < q < r adalah 2431. Nilai p + q + r adalah ...`,
        options: [
            { letter: 'A', text: '40' },
            { letter: 'B', text: '41' },
            { letter: 'C', text: '42' },
            { letter: 'D', text: '43' },
            { letter: 'E', text: '44' }
        ]
    },
    // SOAL 3
    {
        id: 3,
        type: 'multiple-choice',
        text: `Banyak bilangan dua digit yang bersisa 3 jika dibagi 7 adalah ...`,
        options: [
            { letter: 'A', text: '13' },
            { letter: 'B', text: '14' },
            { letter: 'C', text: '15' },
            { letter: 'D', text: '16' },
            { letter: 'E', text: '17' }
        ]
    },
    // SOAL 4
    {
        id: 4,
        type: 'multiple-choice',
        text: `Diketahui KPK(6, 20, m) = 4 × KPK(m, 45, n) = 900. Manakah pernyataan yang benar antara kuantitas P dan Q berikut:

P = 3m
Q = n`,
        options: [
            { letter: 'A', text: 'Kuantitas P lebih dari Q' },
            { letter: 'B', text: 'Kuantitas P kurang dari Q' },
            { letter: 'C', text: 'Kuantitas P sama dengan Q' },
            { letter: 'D', text: 'Tidak dapat ditentukan hubungan antara kuantitas P dan Q' }
        ]
    },
    // SOAL 5
    {
        id: 5,
        type: 'multiple-choice',
        text: `Suatu barisan geometri memiliki rasio -3 dan suku ke-5 barisan tersebut sama dengan 1. Berdasarkan informasi yang diberikan, manakah dari pernyataan berikut yang benar?

(1) Suku ke-1 barisan negatif
(2) Suku ke-9 barisan positif
(3) Hasil penjumlahan dua suku barisan yang berurutan negatif
(4) Hasil perkalian dua suku barisan yang berurutan negatif`,
        options: [
            { letter: 'A', text: '(1), (2) dan (3) saja' },
            { letter: 'B', text: '(1) dan (3) saja' },
            { letter: 'C', text: '(2) dan (4) saja' },
            { letter: 'D', text: '(4) saja' },
            { letter: 'E', text: 'Semua pilihan' }
        ]
    },
    // SOAL 6
    {
        id: 6,
        type: 'multiple-choice',
        text: `Luas daerah lingkaran dengan pusat O adalah 9π. Titik M dan N terletak pada lingkaran tersebut sehingga panjang busur MN adalah π. Berdasarkan informasi yang diberikan, manakah dari pernyataan berikut yang benar?

(1) jari-jari lingkaran tersebut adalah 3
(2) Keliling lingkaran tersebut adalah 6π
(3) Luas juring MON adalah ³⁄₂ π
(4) Sudut MON adalah 60°`,
        options: [
            { letter: 'A', text: '(1), (2) dan (3) saja' },
            { letter: 'B', text: '(1) dan (3) saja' },
            { letter: 'C', text: '(2) dan (4) saja' },
            { letter: 'D', text: '(4) saja' },
            { letter: 'E', text: 'Semua pilihan' }
        ]
    },
    // SOAL 7
    {
        id: 7,
        type: 'multiple-choice',
        text: `Sebuah jembatan memiliki bentuk trapesium ABCD dengan AB sejajar CD, panjang AB = 14 m dan CD = 8 m. Tinggi trapesium adalah 6 m. Diagonal AC dan BD berpotongan di titik P. Perbandingan luas segitiga APB dan CPD adalah ...`,
        options: [
            { letter: 'A', text: '1 : 1' },
            { letter: 'B', text: '7 : 4' },
            { letter: 'C', text: '2 : 1' },
            { letter: 'D', text: '14 : 8' },
            { letter: 'E', text: '49 : 16' }
        ]
    },
    // SOAL 8
    {
        id: 8,
        type: 'multiple-choice',
        text: `Diketahui kubus ABCD.EFGH dengan panjang rusuk 6 cm. Titik K adalah titik potong diagonal AC dan BD. Titik L terletak pada rusuk CG sehingga CL : LG = 1 : 2. Tentukan jarak antara titik K dan L.`,
        options: [
            { letter: 'A', text: '√18' },
            { letter: 'B', text: '√20' },
            { letter: 'C', text: '√22' },
            { letter: 'D', text: '√24' },
            { letter: 'E', text: '√26' }
        ]
    },
    // SOAL 9
    {
        id: 9,
        type: 'multiple-choice',
        text: `Seorang peternak memiliki 16 ayam hitam dan 14 ayam putih. Diketahui ada 10 ayam putih betina. Berapa banyak cara memilih 4 ayam putih dengan tepat 2 ayam betina dan 2 ayam jantan ...`,
        options: [
            { letter: 'A', text: '180' },
            { letter: 'B', text: '270' },
            { letter: 'C', text: '360' },
            { letter: 'D', text: '540' },
            { letter: 'E', text: '1080' }
        ]
    },
    // SOAL 10
    {
        id: 10,
        type: 'multiple-choice',
        text: `Seorang peternak memiliki 16 ayam hitam dan 14 ayam putih. Diketahui ada 10 ayam putih betina. Jika dipilih 2 ayam secara acak, peluang terambil 1 ayam betina putih dan 1 ayam hitam adalah ...`,
        options: [
            { letter: 'A', text: '30/87' },
            { letter: 'B', text: '31/87' },
            { letter: 'C', text: '32/87' },
            { letter: 'D', text: '33/87' },
            { letter: 'E', text: '34/87' }
        ]
    },
    // SOAL 11
    {
        id: 11,
        type: 'multiple-choice',
        text: `Diberikan sistem persamaan linear dua variabel berikut ini:

x + 3y = 7
2x + by = -1

Tentukan nilai dari bilangan bulat b terbesar sehingga y juga merupakan bilangan bulat ...`,
        options: [
            { letter: 'A', text: '21' },
            { letter: 'B', text: '22' },
            { letter: 'C', text: '23' },
            { letter: 'D', text: '24' },
            { letter: 'E', text: '25' }
        ]
    },
    // SOAL 12
    {
        id: 12,
        type: 'multiple-choice',
        text: `Untuk bilangan bulat positif n < 50, diketahui bahwa √(4n + 9) merupakan bilangan bulat. Nilai terbesar dari √(4n + 9) adalah ...`,
        options: [
            { letter: 'A', text: '11' },
            { letter: 'B', text: '12' },
            { letter: 'C', text: '13' },
            { letter: 'D', text: '14' },
            { letter: 'E', text: '15' }
        ]
    },
    // SOAL 13
    {
        id: 13,
        type: 'multiple-choice',
        text: `Banyak permutasi 7 digit yaitu 1, 2, 3, 5, 7, 8, 9 dengan syarat digit-digit genap tidak berdampingan adalah ...`,
        options: [
            { letter: 'A', text: '1440' },
            { letter: 'B', text: '2160' },
            { letter: 'C', text: '2880' },
            { letter: 'D', text: '3600' },
            { letter: 'E', text: '4320' }
        ]
    },
    // SOAL 14
    {
        id: 14,
        type: 'multiple-choice',
        text: `Dua buah kereta dari stasiun X dan Y yang berjarak 300 km berangkat bersamaan tepat pukul 08.00 dari jalur 1 dan jalur 2. Kereta tanpa berhenti dari X menuju Y dengan kecepatan rata-rata 35 km/jam sedangkan dari Y ke X dengan kecepatan rata-rata 25 km/jam. Kedua kereta akan berpapasan pada pukul ...`,
        options: [
            { letter: 'A', text: '11.00' },
            { letter: 'B', text: '12.00' },
            { letter: 'C', text: '13.00' },
            { letter: 'D', text: '14.00' },
            { letter: 'E', text: '15.00' }
        ]
    },
    // SOAL 15
    {
        id: 15,
        type: 'short-answer',
        text: `Sebuah toko baju memberikan diskon 20% untuk semua item. Karena ada promo Lebaran, toko memberikan diskon tambahan 10% dari harga setelah diskon pertama. Jika harga setelah diskon adalah Rp162.000,00 maka harga awal baju tersebut adalah ...`,
        placeholder: 'Masukkan jawaban (angka)'
    },
    // SOAL 16
    {
        id: 16,
        type: 'multiple-choice',
        text: `Dalam klub tenis meja, anggota yang menyukai tepat satu dari tiga genre musik memiliki perbandingan 3 : 2 : 1. Anggota yang menyukai tepat dua genre berjumlah 45 orang. Anggota yang menyukai ketiga genre berjumlah 25 orang. Jika total anggota yang menyukai sedikitnya satu genre adalah 160 orang, maka banyak anggota terbanyak pada salah satu kelompok "tepat satu genre" adalah ...`,
        options: [
            { letter: 'A', text: '40' },
            { letter: 'B', text: '45' },
            { letter: 'C', text: '50' },
            { letter: 'D', text: '55' },
            { letter: 'E', text: '60' }
        ]
    },
    // SOAL 17
    {
        id: 17,
        type: 'multiple-choice',
        text: `Diketahui sistem persamaan:

x + y + z = 6
x + y - z = 2
x - y + z = 4

Nilai x + y + z adalah ...`,
        options: [
            { letter: 'A', text: '8' },
            { letter: 'B', text: '4' },
            { letter: 'C', text: '5' },
            { letter: 'D', text: '6' },
            { letter: 'E', text: '7' }
        ]
    },
    // SOAL 18
    {
        id: 18,
        type: 'multiple-choice',
        text: `Berikut ini yang merupakan ciri-ciri prisma tegak segi tujuh adalah...

(1) Memiliki sisi 9
(2) Memiliki 21 rusuk
(3) Memiliki 14 titik sudut
(4) Memiliki sisi tegak berbentuk segitiga

Pernyataan yang bernilai benar adalah ...`,
        options: [
            { letter: 'A', text: '(1), (2), (3)' },
            { letter: 'B', text: '(1) dan (3)' },
            { letter: 'C', text: '(2) dan (4)' },
            { letter: 'D', text: '(4) saja' },
            { letter: 'E', text: 'Semua pilihan' }
        ]
    },
    // SOAL 19
    {
        id: 19,
        type: 'multiple-choice',
        text: `Fungsi f dengan f(x) = x + 2b untuk x bilangan real. f memiliki f⁻¹ yang memenuhi f⁻¹(1 + b²) = 9. Manakah hubungan yang tepat antara kuantitas P dan Q berdasarkan informasi yang diberikan?

P = b
Q = 1`,
        options: [
            { letter: 'A', text: 'Kuantitas P lebih dari Q' },
            { letter: 'B', text: 'Kuantitas P kurang dari Q' },
            { letter: 'C', text: 'Kuantitas P sama dengan Q' },
            { letter: 'D', text: 'Tidak dapat ditentukan' }
        ]
    },
    // SOAL 20
    {
        id: 20,
        type: 'multiple-choice',
        text: `Bilangan bulat n jika dibagi 2, hasil baginya x dan sisanya 3. Sedangkan jika dibagi 3 hasil baginya y dan sisanya 2. Hubungan antara x dan y yang benar adalah ...`,
        options: [
            { letter: 'A', text: '2x = 3y' },
            { letter: 'B', text: '2x + 3y = 5' },
            { letter: 'C', text: '2x + 3y = 1' },
            { letter: 'D', text: '2x - 3y = 1' },
            { letter: 'E', text: '3y - 2x = 1' }
        ]
    }
];
