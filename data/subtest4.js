// ==================== SUBTEST 4: Pengetahuan Kuantitatif ====================
// Total 20 soal

const subtest4 = [
    // SOAL 1
    {
        id: 1,
        type: 'multiple-choice',
        text: `Jika p dan q adalah bilangan bulat positif terkecil yang memenuhi 250 × 18 × p = q², maka nilai q + p = ...`,
        options: [
            { letter: 'A', text: '145' },
            { letter: 'B', text: '155' },
            { letter: 'C', text: '165' },
            { letter: 'D', text: '175' },
            { letter: 'E', text: '185' }
        ]
    },
    // SOAL 2
    {
        id: 2,
        type: 'multiple-choice',
        text: `Diketahui f(x) = 3x + 1 dan g(x) = x - 5. Nilai dari f⁻¹(g⁻¹(2)) = ...`,
        options: [
            { letter: 'A', text: '0' },
            { letter: 'B', text: '1' },
            { letter: 'C', text: '2' },
            { letter: 'D', text: '3' },
            { letter: 'E', text: '4' }
        ]
    },
    // SOAL 3
    {
        id: 3,
        type: 'multiple-choice',
        text: `Di RW 08, diketahui bahwa 30% dari total penduduk adalah laki-laki dewasa yang berjumlah 54 orang. Jika jumlah penduduk anak-anak adalah 1/6 dari total penduduk, maka berapakah jumlah penduduk perempuan dewasa?`,
        options: [
            { letter: 'A', text: '60 orang' },
            { letter: 'B', text: '72 orang' },
            { letter: 'C', text: '96 orang' },
            { letter: 'D', text: '108 orang' },
            { letter: 'E', text: '120 orang' }
        ]
    },
    // SOAL 4
    {
        id: 4,
        type: 'multiple-choice',
        text: `Total harga dua unit rumah (Tipe A dan Tipe B) saat ini adalah Rp1,26 miliar. Tiga tahun yang lalu, harga Tipe B adalah 3 kali harga Tipe A. Jika setiap tahun harga masing-masing naik Rp10 juta, berapakah harga Tipe A saat ini?`,
        options: [
            { letter: 'A', text: 'Rp300 juta' },
            { letter: 'B', text: 'Rp330 juta' },
            { letter: 'C', text: 'Rp360 juta' },
            { letter: 'D', text: 'Rp390 juta' },
            { letter: 'E', text: 'Rp420 juta' }
        ]
    },
    // SOAL 5
    {
        id: 5,
        type: 'multiple-choice',
        text: `Hasil panen (dalam kg) mengikuti pola: 8, 10, 30, 25, 75, 70, ... Berapakah hasil panen pada periode ke-7?`,
        options: [
            { letter: 'A', text: '210' },
            { letter: 'B', text: '215' },
            { letter: 'C', text: '220' },
            { letter: 'D', text: '225' },
            { letter: 'E', text: '230' }
        ]
    },
    // SOAL 6
    {
        id: 6,
        type: 'multiple-choice',
        text: `Bilangan bulat m jika dibagi 4 menghasilkan a sisa 1, dan jika dibagi 5 menghasilkan b sisa 3. Hubungan a dan b adalah ...`,
        options: [
            { letter: 'A', text: '4a - 5b = 2' },
            { letter: 'B', text: '4a + 5b = 7' },
            { letter: 'C', text: '4a - 5b = 1' },
            { letter: 'D', text: '5b - 4a = 1' },
            { letter: 'E', text: '4a + 5b = 1' }
        ]
    },
    // SOAL 7
    {
        id: 7,
        type: 'multiple-choice',
        text: `Banyak bilangan 4 digit berbeda dari angka 2, 3, 4, 5, 6, 7, 8 tanpa pengulangan, dengan syarat:
- Bilangan genap
- Digit pertama kurang dari digit ketiga
- Jumlah digit pertama, kedua, dan keempat = 12

Adalah ...`,
        options: [
            { letter: 'A', text: '12' },
            { letter: 'B', text: '18' },
            { letter: 'C', text: '24' },
            { letter: 'D', text: '30' },
            { letter: 'E', text: '36' }
        ]
    },
    // SOAL 8
    {
        id: 8,
        type: 'multiple-choice',
        text: `Di sebuah klub, 60% anggota mengambil kelas Piano, sisanya Gitar. 80% buku yang tersedia adalah Edisi Baru, sisanya Edisi Lama. 30% siswa Gitar memakai Edisi Lama. Berapa persen buku Edisi Baru yang dipakai siswa Piano terhadap total buku?`,
        options: [
            { letter: 'A', text: '51%' },
            { letter: 'B', text: '52%' },
            { letter: 'C', text: '53%' },
            { letter: 'D', text: '54%' },
            { letter: 'E', text: '55%' }
        ]
    },
    // SOAL 9
    {
        id: 9,
        type: 'multiple-choice',
        text: `Diketahui dua bilangan bulat positif x dan y dengan xy = 48. Peluang jumlah x + y ganjil adalah P. Nilai P = ...`,
        options: [
            { letter: 'A', text: '1/5' },
            { letter: 'B', text: '2/5' },
            { letter: 'C', text: '1/2' },
            { letter: 'D', text: '3/5' },
            { letter: 'E', text: '4/5' }
        ]
    },
    // SOAL 10
    {
        id: 10,
        type: 'multiple-choice',
        text: `Fungsi ketinggian bola h(t) = b(t - 3)². Jika tinggi bola pada detik ke-1 adalah 12 meter, tinggi awal bola (t = 0) adalah ... meter.`,
        options: [
            { letter: 'A', text: '18' },
            { letter: 'B', text: '24' },
            { letter: 'C', text: '27' },
            { letter: 'D', text: '30' },
            { letter: 'E', text: '36' }
        ]
    },
    // SOAL 11
    {
        id: 11,
        type: 'multiple-choice',
        text: `Lampu A menyala setiap 12 menit, B setiap 18 menit, C setiap 24 menit. Jika pertama kali bersama pukul 08.00, pukul berapa mereka menyala bersama untuk keempat kalinya?`,
        options: [
            { letter: 'A', text: '10.24' },
            { letter: 'B', text: '10.48' },
            { letter: 'C', text: '11.12' },
            { letter: 'D', text: '11.36' },
            { letter: 'E', text: '12.00' }
        ]
    },
    // SOAL 12
    {
        id: 12,
        type: 'multiple-choice',
        text: `Apakah mobil A lebih cepat sampai daripada mobil B jika menempuh jarak yang sama?
(i) Kecepatan A 20 km/jam lebih besar dari kecepatan B.
(ii) B memerlukan 3 jam jika sendirian.`,
        options: [
            { letter: 'A', text: '(i) cukup, (ii) tidak' },
            { letter: 'B', text: '(ii) cukup, (i) tidak' },
            { letter: 'C', text: 'Keduanya bersama cukup' },
            { letter: 'D', text: 'Masing-masing cukup' },
            { letter: 'E', text: 'Tidak cukup' }
        ]
    },
    // SOAL 13
    {
        id: 13,
        type: 'multiple-choice',
        text: `Diketahui f(x) = x² dan g(x) = 1/(x² - 1). Nilai dari (f ∘ g)(2) = ...`,
        options: [
            { letter: 'A', text: '1/9' },
            { letter: 'B', text: '1/4' },
            { letter: 'C', text: '1' },
            { letter: 'D', text: '4' },
            { letter: 'E', text: '9' }
        ]
    },
    // SOAL 14
    {
        id: 14,
        type: 'multiple-choice',
        text: `Barisan aritmatika: 27, a, 15, ... Jika 12 × U₈ = U₇ + Uₖ, maka k = ...`,
        options: [
            { letter: 'A', text: '31' },
            { letter: 'B', text: '32' },
            { letter: 'C', text: '33' },
            { letter: 'D', text: '34' },
            { letter: 'E', text: '35' }
        ]
    },
    // SOAL 15
    {
        id: 15,
        type: 'multiple-choice',
        text: `Diketahui sistem:
3/x + 2/y = 5, x + 3y = 4
Jika solusi (p, q), maka 2p + q = ...`,
        options: [
            { letter: 'A', text: '1' },
            { letter: 'B', text: '2' },
            { letter: 'C', text: '3' },
            { letter: 'D', text: '4' },
            { letter: 'E', text: '5' }
        ]
    },
    // SOAL 16
    {
        id: 16,
        type: 'short-answer',
        text: `Untuk m bilangan asli, tentukan banyaknya bilangan berbentuk 3m + 7 dengan 4 < m < 12 yang jika dibagi 6 bersisa 2 atau 5.`,
        placeholder: 'Masukkan jawaban (angka)'
    },
    // SOAL 17
    {
        id: 17,
        type: 'short-answer',
        text: `Bilangan asli terkecil n sehingga √(180 × 42 × n) merupakan bilangan bulat adalah ...`,
        placeholder: 'Masukkan jawaban (angka)'
    },
    // SOAL 18
    {
        id: 18,
        type: 'multiple-choice',
        text: `Diketahui sin 2θ = 4/5 dengan 0° < 2θ < 90°. Pernyataan yang benar:
(1) sin θ = 2/√5
(2) cos θ = 1/√5
(3) sin θ - cos θ = 1/√5
(4) sin θ + cos θ = 3/√5`,
        options: [
            { letter: 'A', text: '(1), (2), (3)' },
            { letter: 'B', text: '(1), (3)' },
            { letter: 'C', text: '(2), (4)' },
            { letter: 'D', text: '(4) saja' },
            { letter: 'E', text: 'Semua benar' }
        ]
    },
    // SOAL 19
    {
        id: 19,
        type: 'multiple-choice',
        text: `Dari bilangan 15–35, diambil satu bilangan acak. Manakah pernyataan benar?
(1) Peluang prima = 6/21
(2) Peluang komposit = 14/21
(3) Peluang habis dibagi 4 = 5/21
(4) Peluang ganjil = 11/21`,
        options: [
            { letter: 'A', text: '(1), (2), (3)' },
            { letter: 'B', text: '(1), (2)' },
            { letter: 'C', text: '(3), (4)' },
            { letter: 'D', text: '(4) saja' },
            { letter: 'E', text: 'Semua' }
        ]
    },
    // SOAL 20
    {
        id: 20,
        type: 'multiple-choice',
        text: `Diketahui f(x+2) = bx + 4 dan g(f(x+2)) = bx - 2. Manakah hubungan P dan Q jika P = g(b) untuk b = 1 dan b = 4, dan Q = -2?`,
        options: [
            { letter: 'A', text: 'P ≥ 2Q' },
            { letter: 'B', text: 'Q < P < 2Q' },
            { letter: 'C', text: 'P = Q' },
            { letter: 'D', text: 'P < Q' },
            { letter: 'E', text: 'Tidak dapat ditentukan' }
        ]
    }
];
