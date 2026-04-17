// ==================== SUBTEST 7: Penalaran Matematika ====================
// Total 20 soal

const subtest7 = [
    // SOAL 1 (untuk nomor 1-4 - teks pemilihan kepala daerah)
    {
        id: 1,
        type: 'multiple-choice',
        text: `Akan diadakan pemilihan kepala daerah dengan tiga calon, yaitu Sabar, Subur, dan Makmur. Sebelum dilaksanakan pemilihan, diadakan debat para calon. Pada debat pertama, panitia menyediakan 11 masalah kelompok ekonomi dan 9 masalah kelompok pendidikan. Masalah akan diberikan kepada para calon secara acak untuk dicari penyelesaiannya.

Jika dipilih tiga masalah berbeda untuk diberikan kepada ketiga calon, banyak cara memilih masalah dengan Sabar dan Subur mendapat masalah ekonomi dan Makmur mendapat masalah pendidikan adalah ...`,
        options: [
            { letter: 'A', text: '990' },
            { letter: 'B', text: '900' },
            { letter: 'C', text: '198' },
            { letter: 'D', text: '189' },
            { letter: 'E', text: '119' }
        ]
    },
    // SOAL 2
    {
        id: 2,
        type: 'multiple-choice',
        text: `Akan diadakan pemilihan kepala daerah dengan tiga calon, yaitu Sabar, Subur, dan Makmur. Sebelum dilaksanakan pemilihan, diadakan debat para calon. Pada debat pertama, panitia menyediakan 11 masalah kelompok ekonomi dan 9 masalah kelompok pendidikan. Masalah akan diberikan kepada para calon secara acak untuk dicari penyelesaiannya.

Jika dipilih tiga masalah dengan setiap calon mendapatkan ketiga masalah tersebut, peluang terpilihnya dua masalah ekonomi dan satu masalah pendidikan adalah ...`,
        options: [
            { letter: 'A', text: '11/76' },
            { letter: 'B', text: '4/58' },
            { letter: 'C', text: '33/76' },
            { letter: 'D', text: '11/20' },
            { letter: 'E', text: '3/5' }
        ]
    },
    // SOAL 3
    {
        id: 3,
        type: 'multiple-choice',
        text: `Akan diadakan pemilihan kepala daerah dengan tiga calon, yaitu Sabar, Subur, dan Makmur. Sebelum dilaksanakan pemilihan, diadakan debat para calon. Pada debat pertama, panitia menyediakan 11 masalah kelompok ekonomi dan 9 masalah kelompok pendidikan. Masalah akan diberikan kepada para calon secara acak untuk dicari penyelesaiannya.

Jika dipilih tiga masalah berbeda untuk ketiga calon, peluang Sabar mendapat masalah ekonomi dengan Subur dan Makmur mendapat masalah pendidikan atau Makmur dan Subur mendapat masalah ekonomi dengan Sabar mendapat masalah pendidikan adalah ...`,
        options: [
            { letter: 'A', text: '3/16' },
            { letter: 'B', text: '89/380' },
            { letter: 'C', text: '99/380' },
            { letter: 'D', text: '5/16' },
            { letter: 'E', text: '6/16' }
        ]
    },
    // SOAL 4
    {
        id: 4,
        type: 'multiple-choice',
        text: `Akan diadakan pemilihan kepala daerah dengan tiga calon, yaitu Sabar, Subur, dan Makmur. Sebelum dilaksanakan pemilihan, diadakan debat para calon. Pada debat pertama, panitia menyediakan 11 masalah kelompok ekonomi dan 9 masalah kelompok pendidikan. Masalah akan diberikan kepada para calon secara acak untuk dicari penyelesaiannya.

Jika dipilih tiga masalah berbeda untuk ketiga calon, peluang Sabar mendapat masalah pendidikan dan kelompok masalah Subur berbeda dengan kelompok masalah Makmur adalah ...`,
        options: [
            { letter: 'A', text: '11/20' },
            { letter: 'B', text: '9/20' },
            { letter: 'C', text: '33/95' },
            { letter: 'D', text: '22/95' },
            { letter: 'E', text: '11/95' }
        ]
    },
    // SOAL 5 (untuk nomor 5-8 - teks Cika dan sepeda)
       // SOAL 5 (Versi dengan pecahan Unicode)
    {
        id: 5,
        type: 'multiple-choice',
        text: `Cika mengendarai sepedanya pada jalan yang menurun. Pada detik ke-1, Cika menempuh jarak sejauh 1 m, detik ke-2 menempuh jarak 2 m, detik ke-3 menempuh jarak 4 m, detik ke-4 menempuh jarak 7 m, demikian seterusnya dengan pola yang sama. Cika mengakhiri perjalanannya sampai di ujung jalan.

Jika Jₙ menyatakan jarak yang ditempuh Cika pada detik ke n, Jₙ = ... m.`,
        options: [
            { letter: 'A', text: 'Jₙ = n²/2 + n - ½ dengan n = 1, 2, ...' },
            { letter: 'B', text: 'Jₙ = n²/2 + 2n - ³⁄₂ dengan n = 1, 2, ...' },
            { letter: 'C', text: 'Jₙ = n²/2 - 2n + 1 dengan n = 1, 2, ...' },
            { letter: 'D', text: 'Jₙ = -n²/2 + 3n - ³⁄₂ dengan n = 1, 2, ...' },
            { letter: 'E', text: 'Jₙ = -n²/2 + n/2 + 1 dengan n = 1, 2, ...' }
        ]
    },
    // SOAL 6 (Checklist - Ya/Tidak)
    {
        id: 6,
        type: 'true-false',
        text: `Cika mengendarai sepedanya pada jalan yang menurun. Pada detik ke-1, Cika menempuh jarak sejauh 1 m, detik ke-2 menempuh jarak 2 m, detik ke-3 menempuh jarak 4 m, detik ke-4 menempuh jarak 7 m, demikian seterusnya dengan pola yang sama. Cika mengakhiri perjalanannya sampai di ujung jalan.

Berdasarkan informasi tersebut, tentukan apakah pernyataan berikut BENAR atau SALAH.`,
        statements: [
            { id: 1, text: 'Jarak yang ditempuh Cika pada detik ke-8 adalah 29 m' },
            { id: 2, text: 'Keseluruhan jarak yang ditempuh Cika pada 7 detik pertama adalah 65 m' },
            { id: 3, text: 'Selisih jarak yang ditempuh Cika pada detik ke-11 dan ke-6 adalah 40 m' }
        ]
    },
    // SOAL 7
    {
        id: 7,
        type: 'multiple-choice',
        text: `Cika mengendarai sepedanya pada jalan yang menurun. Pada detik ke-1, Cika menempuh jarak sejauh 1 m, detik ke-2 menempuh jarak 2 m, detik ke-3 menempuh jarak 4 m, detik ke-4 menempuh jarak 7 m, demikian seterusnya dengan pola yang sama. Cika mengakhiri perjalanannya sampai di ujung jalan.

Jumlah semua selisih jarak yang ditempuh Cika sampai detik ke-9 adalah ...`,
        options: [
            { letter: 'A', text: '36' },
            { letter: 'B', text: '45' },
            { letter: 'C', text: '55' },
            { letter: 'D', text: '66' },
            { letter: 'E', text: '78' }
        ]
    },
    // SOAL 8
    {
        id: 8,
        type: 'multiple-choice',
        text: `Cika mengendarai sepedanya pada jalan yang menurun. Pada detik ke-1, Cika menempuh jarak sejauh 1 m, detik ke-2 menempuh jarak 2 m, detik ke-3 menempuh jarak 4 m, detik ke-4 menempuh jarak 7 m, demikian seterusnya dengan pola yang sama. Cika mengakhiri perjalanannya sampai di ujung jalan.

Jika panjang jalan menurun yang ditempuh Cika untuk mengendarai sepedanya adalah 231 m, waktu yang ditempuh Cika sampai di ujung jalan menurun adalah ...`,
        options: [
            { letter: 'A', text: '9' },
            { letter: 'B', text: '10' },
            { letter: 'C', text: '11' },
            { letter: 'D', text: '12' },
            { letter: 'E', text: '13' }
        ]
    },
    // SOAL 9 (untuk nomor 9-12 - teks lampu dan bayangan)
    {
        id: 9,
        type: 'multiple-choice',
        text: `Pada salah satu sisi jalan raya yang lurus terdapat lampu penerangan jalan umum. Pada sisi yang lain, berdiri seorang anak bernama Kris. Tinggi badan Kris 180 cm, sedangkan panjang bayangannya 3,6 m.
<div style="text-align: center;">
                    <img src="images/PM9-12.jpeg" alt="PM Perbandingan" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>

Jika tinggi tiang lampu adalah 12 m, jarak Kris dari tiang lampu adalah ... m.`,
        options: [
            { letter: 'A', text: '20,4' },
            { letter: 'B', text: '20,8' },
            { letter: 'C', text: '21,0' },
            { letter: 'D', text: '22,0' },
            { letter: 'E', text: '22,4' }
        ]
    },
    // SOAL 10
    {
        id: 10,
        type: 'multiple-choice',
        text: `Pada salah satu sisi jalan raya yang lurus terdapat lampu penerangan jalan umum. Pada sisi yang lain, berdiri seorang anak bernama Kris. Tinggi badan Kris 180 cm, sedangkan panjang bayangannya 3,6 m.
<div style="text-align: center;">
                    <img src="images/PM9-12.jpeg" alt="PM Perbandingan" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
Misal ujung bayangan Kris adalah A. Jika titik A berada 2,7 m dari sisi jalan dan Kris berdiri 16 m dari lampu, lebar jalan raya tersebut adalah ... m.`,
        options: [
            { letter: 'A', text: '11,5' },
            { letter: 'B', text: '12,0' },
            { letter: 'C', text: '12,5' },
            { letter: 'D', text: '13,0' },
            { letter: 'E', text: '13,5' }
        ]
    },
    // SOAL 11
    {
        id: 11,
        type: 'multiple-choice',
        text: `Pada salah satu sisi jalan raya yang lurus terdapat lampu penerangan jalan umum. Pada sisi yang lain, berdiri seorang anak bernama Kris. Tinggi badan Kris 180 cm, sedangkan panjang bayangannya 3,6 m.
<div style="text-align: center;">
                    <img src="images/PM9-12.jpeg" alt="PM Perbandingan" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
Misalkan tinggi tiang lampu adalah 7,2 m dan Kris berjalan sepanjang sisi jalan dengan laju tetap. Perbandingan jarak tempuh Kris dan jarak tempuh ujung bayangan Kris adalah ...`,
        options: [
            { letter: 'A', text: '1 : 4' },
            { letter: 'B', text: '1 : 3' },
            { letter: 'C', text: '2 : 5' },
            { letter: 'D', text: '2 : 3' },
            { letter: 'E', text: '3 : 4' }
        ]
    },
    // SOAL 12
    {
        id: 12,
        type: 'multiple-choice',
        text: `Pada salah satu sisi jalan raya yang lurus terdapat lampu penerangan jalan umum. Pada sisi yang lain, berdiri seorang anak bernama Kris. Tinggi badan Kris 180 cm, sedangkan panjang bayangannya 3,6 m.
<div style="text-align: center;">
                    <img src="images/PM9-12.jpeg" alt="PM Perbandingan" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
Misalkan tinggi tiang lampu adalah 10 m. Kris berdiri di suatu titik yang berjarak 36 m dari titik di bawah lampu sambil melempar kelereng secara vertikal ke atas. Kelereng lepas dari tangan Kris pada ketinggian 1 m. Jika jarak yang ditempuh bayangan kelereng di lantai adalah 5 m, tinggi maksimum kelereng dari tanah adalah ... m.`,
        options: [
            { letter: 'A', text: '3,0' },
            { letter: 'B', text: '2,5' },
            { letter: 'C', text: '2,0' },
            { letter: 'D', text: '1,5' },
            { letter: 'E', text: '1,2' }
        ]
    },
    // SOAL 13 (untuk nomor 13-16 - teks pasien BPJS)
    {
        id: 13,
        type: 'multiple-choice',
        text: `Pasien yang berobat di suatu rumah sakit terdiri dari pasien rawat inap dengan biaya pribadi, asuransi, dan BPJS. Berdasarkan peraturan rumah sakit, pelayanan bagi pasien dengan BPJS dibatasi tiap harinya. Data pasien yang dilayani dengan fasilitas BPJS dalam satu minggu yang masuk dan keluar disajikan dalam diagram berikut.
<div style="text-align: center;">
                    <img src="images/PM13-16.jpeg" alt="PM Perbandingan" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
Berdasarkan diagram di atas, tidak ada pasien dengan BPJS yang dirawat di rumah sakit pada hari ...`,
        options: [
            { letter: 'A', text: 'Rabu' },
            { letter: 'B', text: 'Kamis' },
            { letter: 'C', text: 'Jumat' },
            { letter: 'D', text: 'Sabtu' },
            { letter: 'E', text: 'Minggu' }
        ]
    },
    // SOAL 14 (Checklist - Ya/Tidak)
    {
        id: 14,
        type: 'true-false',
        text: `Pasien yang berobat di suatu rumah sakit terdiri dari pasien rawat inap dengan biaya pribadi, asuransi, dan BPJS. Data pasien BPJS dalam satu minggu disajikan dalam tabel di atas.
<div style="text-align: center;">
                    <img src="images/PM13-16.jpeg" alt="PM Perbandingan" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
Berdasarkan informasi tersebut, tentukan apakah pernyataan berikut BENAR atau SALAH.`,
        statements: [
            { id: 1, text: 'Jumlah pasien rawat inap terbanyak di rumah sakit pada minggu itu adalah hari Selasa dan Kamis' },
            { id: 2, text: 'Jumlah pasien rawat inap di rumah sakit sebanyak 4 pada hari Rabu dan Jumat' },
            { id: 3, text: 'Rata-rata rawat inap pasien dengan BPJS per hari dalam satu minggu tersebut adalah 3' }
        ]
    },
    // SOAL 15
    {
        id: 15,
        type: 'multiple-choice',
        text: `Pasien yang berobat di suatu rumah sakit terdiri dari pasien rawat inap dengan biaya pribadi, asuransi, dan BPJS. Berdasarkan peraturan rumah sakit, pelayanan bagi pasien dengan BPJS dibatasi tiap harinya. Data pasien yang dilayani dengan fasilitas BPJS dalam satu minggu yang masuk dan keluar disajikan dalam diagram berikut.
<div style="text-align: center;">
                    <img src="images/PM13-16.jpeg" alt="PM Perbandingan" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
Rumah sakit mengajukan klaim biaya perawatan pasien kepada BPJS pada hari Senin pagi. Rumah sakit dapat mengajukan klaim pada hari Jumat pagi jika jumlah pasien dengan BPJS pada hari Senin sampai hari Kamis sudah melampaui kuota pasien dengan BPJS. Kuota rumah sakit tersebut adalah 35 pasien.

Jika rata-rata biaya perawatan pasien dengan BPJS adalah Rp500.000,00 per orang, pada hari Senin pagi klaim biaya perawatan yang diajukan rumah sakit kepada BPJS adalah ... juta rupiah.`,
        options: [
            { letter: 'A', text: '15,0' },
            { letter: 'B', text: '17,5' },
            { letter: 'C', text: '20,0' },
            { letter: 'D', text: '23,5' },
            { letter: 'E', text: '35,0' }
        ]
    },
    // SOAL 16
    {
        id: 16,
        type: 'multiple-choice',
        text: `Pasien yang berobat di suatu rumah sakit terdiri dari pasien rawat inap dengan biaya pribadi, asuransi, dan BPJS. Berdasarkan peraturan rumah sakit, pelayanan bagi pasien dengan BPJS dibatasi tiap harinya. Data pasien yang dilayani dengan fasilitas BPJS dalam satu minggu yang masuk dan keluar disajikan dalam diagram berikut.
<div style="text-align: center;">
                    <img src="images/PM13-16.jpeg" alt="PM Perbandingan" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
Setiap harinya, khusus bagi pasien dengan BPJS, pelayanan akan optimal jika jumlah pasien rawat inap dengan BPJS pada hari tersebut tidak lebih dari rata-rata pasien rawat inap dengan BPJS ditambah simpangan baku. Diasumsikan minggu berikutnya banyak pasien mempunyai pola yang sama. Manajemen rumah sakit akan lebih memperhatikan pelayanan bagi pasien dengan BPJS pada minggu berikutnya pada hari ...`,
        options: [
            { letter: 'A', text: 'Senin, Selasa, Rabu' },
            { letter: 'B', text: 'Selasa, Rabu, Kamis' },
            { letter: 'C', text: 'Rabu, Jumat, Sabtu' },
            { letter: 'D', text: 'Selasa, Kamis, Sabtu' },
            { letter: 'E', text: 'Jumat, Sabtu, Minggu' }
        ]
    },
    // SOAL 17 (untuk nomor 17-20 - teks dinding kaca)
    {
        id: 17,
        type: 'multiple-choice',
        text: `Pada ruang pajang barang di suatu toko mainan, dinding bagian depannya dibuat dari kaca-kaca persegi, masing-masing berukuran 68 cm × 68 cm, yang disusun membentuk persegi panjang.

Jika f adalah fungsi yang menyatakan luas dinding kaca tersebut f(x) = ... m².`,
        options: [
            { letter: 'A', text: '0,4244x' },
            { letter: 'B', text: '0,4264x' },
            { letter: 'C', text: '0,4624x' },
            { letter: 'D', text: '46,24x' },
            { letter: 'E', text: '4624x' }
        ]
    },
    // SOAL 18
    {
        id: 18,
        type: 'multiple-choice',
        text: `Pada ruang pajang barang di suatu toko mainan, dinding bagian depannya dibuat dari kaca-kaca persegi, masing-masing berukuran 68 cm × 68 cm, yang disusun membentuk persegi panjang.

Jika kaca-kaca persegi yang diperlukan sebanyak 28, luas dinding tersebut yang mungkin adalah ... m².`,
        options: [
            { letter: 'A', text: '4,76 × 2,72' },
            { letter: 'B', text: '4,76 × 2,72' },
            { letter: 'C', text: '4,66 × 2,74' },
            { letter: 'D', text: '4,66 × 2,72' },
            { letter: 'E', text: '4,64 × 2,74' }
        ]
    },
    // SOAL 19
    {
        id: 19,
        type: 'multiple-choice',
        text: `Pada ruang pajang barang di suatu toko mainan, dinding bagian depannya dibuat dari kaca-kaca persegi, masing-masing berukuran 68 cm × 68 cm, yang disusun membentuk persegi panjang.
        
        Agar lebih menarik, kaca-kaca tersebut dipasang pada rangka berbentuk kisi-kisi dengan lebar 4 cm. Setiap tepi kaca tertutup oleh kisi selebar 1 cm. Jika kaca-kaca tersebut disusun dalam 7 baris dan 4 kolom, ukuran bagian dinding tersebut adalah ... m².
        <div style="text-align: center;">
                    <img src="images/PM19-20.jpeg" alt="PM Perbandingan" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>`,
        options: [
            { letter: 'A', text: '4,96 × 2,86' },
            { letter: 'B', text: '4,96 × 2,80' },
            { letter: 'C', text: '4,90 × 2,86' },
            { letter: 'D', text: '4,90 × 2,80' },
            { letter: 'E', text: '4,86 × 2,86' }
        ]
    },
    // SOAL 20
    {
        id: 20,
        type: 'multiple-choice',
        text: `Pada ruang pajang barang di suatu toko mainan, dinding bagian depannya dibuat dari kaca-kaca persegi, masing-masing berukuran 68 cm × 68 cm, yang disusun membentuk persegi panjang.

Biaya pemasangan tiap kaca pada rangka sebesar Rp45.000,00. Jika total biaya pemasangan kaca pada rangka adalah Rp1.260.000,00, ukuran bagian dinding tersebut adalah ... m².`,
        options: [
            { letter: 'A', text: '4,86 × 2,86' },
            { letter: 'B', text: '4,90 × 2,80' },
            { letter: 'C', text: '4,90 × 2,86' },
            { letter: 'D', text: '4,96 × 2,80' },
            { letter: 'E', text: '4,96 × 2,86' }
        ]
    }
];