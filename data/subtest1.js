// ==================== SUBTEST 1: Kemampuan Penalaran Umum ====================
// Total 30 soal

const subtest1 = [
    // SOAL 1
    {
        id: 1,
        type: 'multiple-choice',
        text: `Apabila tidak dipanen pada musim panas, buah cepat membusuk. Fenomena tersebut terjadi pada buah berkulit lunak.

Manakah simpulan berikut yang BENAR?`,
        options: [
            { letter: 'A', text: 'Memanen buah sebaiknya dilakukan di musim panas agar tidak busuk.' },
            { letter: 'B', text: 'Semua buah tetap akan terjaga kesegarannya jika dipanen di musim panas.' },
            { letter: 'C', text: 'Beberapa buah tetap segar meskipun dipanen tidak di musim panas.' },
            { letter: 'D', text: 'Buah berkulit lunak cepat membusuk jika dipanen tidak di musim panas.' },
            { letter: 'E', text: 'Semua buah sebaiknya dipanen di musim panas, kecuali buah berkulit lunak.' }
        ]
    },
    // SOAL 2
    {
        id: 2,
        type: 'multiple-choice',
        text: `Pendukung fanatik Tim Sepak Bola PHF yang selalu hadir di stadion memakai seragam khusus. Sebagian dari mereka lebih rajin membantu membersihkan stadion dibandingkan pendukung tim lain.

Berdasarkan informasi di atas, manakah simpulan yang PALING TEPAT?`,
        options: [
            { letter: 'A', text: 'Pendukung fanatik Tim Sepak Bola PHF yang selalu hadir di stadion membantu membersihkan stadion lebih rajin dibandingkan pendukung tim lain.' },
            { letter: 'B', text: 'Pendukung fanatik Tim Sepak Bola PHF yang selalu hadir di stadion memakai seragam khusus dan membantu membersihkan stadion lebih rajin dibandingkan pendukung tim lain.' },
            { letter: 'C', text: 'Beberapa pendukung fanatik Tim Sepak Bola PHF memakai seragam khusus dan membantu membersihkan stadion lebih rajin dibandingkan pendukung tim lain.' },
            { letter: 'D', text: 'Sebagian penonton yang tidak membantu membersihkan stadion lebih rajin dibandingkan pendukung tim lain bukan pendukung fanatik Tim Sepak Bola PHF.' },
            { letter: 'E', text: 'Beberapa pendukung fanatik Tim Sepak Bola PHF memakai seragam khusus, tetapi tidak membantu membersihkan stadion lebih rajin dibandingkan pendukung tim lain.' }
        ]
    },
    // SOAL 3
    {
        id: 3,
        type: 'multiple-choice',
        text: `Akhir bulan ini, X akan mengunjungi keluarga di kampung atau membantu kakak pindah rumah. Adiknya minta ditemani untuk melihat kantor barunya di Kota M. Karena X belum pasti mendapat cuti, keduanya tidak jadi pergi ke Kota M.

Apa yang PALING MUNGKIN dilakukan X pada akhir bulan ini?`,
        options: [
            { letter: 'A', text: 'Mengunjungi keluarga di kampung atau membantu kakak pindah rumah.' },
            { letter: 'B', text: 'Mengunjungi keluarga di kampung dan membantu kakak pindah rumah.' },
            { letter: 'C', text: 'Menemani adiknya melihat kantor baru di kota M saat mendapat cuti.' },
            { letter: 'D', text: 'Mengunjungi keluarga di kampung, tetapi tidak membantu kakak pindah rumah.' },
            { letter: 'E', text: 'Membantu kakak pindah rumah, tetapi tidak mengunjungi keluarga di kampung.' }
        ]
    },
    // SOAL 4
    {
        id: 4,
        type: 'multiple-choice',
        text: `Ketika film tentang profil para pelaut andal diputar, jumlah pengunjung Museum Maritim XYZ meningkat dibandingkan ketika acara tersebut tidak diselenggarakan. Hal serupa terjadi ketika pameran bertema sejarah kemaritiman diadakan. Namun, ketika pameran teknologi kelautan diadakan, jumlah pengunjung museum tidak meningkat dibandingkan dengan ketika acara tersebut tidak diselenggarakan.

Berdasarkan informasi di atas, manakah dari pernyataan berikut yang PALING MUNGKIN BENAR?`,
        options: [
            { letter: 'A', text: 'Mengadakan pemutaran film tentang profil para pelaut andal di kota lain akan menurunkan jumlah pengunjung Museum Maritim XYZ.' },
            { letter: 'B', text: 'Pemutaran film tentang profil para pelaut andal atau pameran sejarah kemaritiman meningkatkan jumlah pengunjung Museum Maritim XYZ.' },
            { letter: 'C', text: 'Jumlah pengunjung ke Museum Maritim XYZ akan mengalami penurunan ketika pameran bertema pelaut di kota tidak diadakan.' },
            { letter: 'D', text: 'Mengadakan pameran teknologi kemaritiman meningkatkan jumlah pengunjung Museum Maritim XYZ dibandingkan ketika memutar film tentang pelaut.' },
            { letter: 'E', text: 'Meskipun pameran bertema pelaut diadakan di kota lain, jumlah pengunjung Museum Maritim XYZ tetap meningkat.' }
        ]
    },
    // SOAL 5
    {
        id: 5,
        type: 'multiple-choice',
        text: `Banyaknya fitur menarik yang tersedia dalam gawai menyebabkan siswa menghabiskan waktu untuk bermain dengan gawainya. Banyaknya waktu yang dihabiskan untuk bermain dengan gawai menyebabkan siswa kurang bergerak. Meskipun sekolah menambah jam olahraga untuk siswa, banyak siswa yang tidak sehat karena kurang bergerak.

Berdasarkan informasi di atas, manakah pernyataan di bawah ini yang BENAR?`,
        options: [
            { letter: 'A', text: 'Banyaknya siswa yang kurang bergerak disebabkan banyaknya fitur menarik dalam gawai.' },
            { letter: 'B', text: 'Adanya tambahan jam olahraga untuk siswa menyebabkan banyaknya fitur menarik yang tersedia dalam gawai.' },
            { letter: 'C', text: 'Siswa yang kurang bergerak menyebabkan ditambahnya jam olahraga untuk siswa.' },
            { letter: 'D', text: 'Banyaknya siswa yang tidak sehat menyebabkan dikuranginya fitur menarik dalam gawai.' },
            { letter: 'E', text: 'Banyaknya waktu yang dihabiskan untuk bermain gawai disebabkan tidak ada penambahan jam olahraga untuk siswa.' }
        ]
    },
    // SOAL 6
    {
        id: 6,
        type: 'multiple-choice',
        text: `Pupuk banyak digunakan petani untuk menambah nutrisi tanah dan menyuburkan tanaman. Selain itu, pupuk juga dapat meningkatkan hasil panen. Namun, penggunaan pupuk yang berlebihan memiliki dampak negatif bagi kelestarian alam dan kesehatan manusia. Penggunaan pupuk yang berlebihan dapat meningkatkan pencemaran air dan membuat manusia mengonsumsi residu kimia dan pupuk yang terserap oleh tanaman.

Berdasarkan informasi tersebut, manakah pernyataan berikut yang PASTI SALAH?`,
        options: [
            { letter: 'A', text: 'Petani yang hasil panennya sedikit mungkin tidak menggunakan pupuk.' },
            { letter: 'B', text: 'Pupuk dapat menyebabkan peningkatan ketahanan hama tanaman.' },
            { letter: 'C', text: 'Pencemaran air meningkat karena penggunaan pupuk yang berlebihan.' },
            { letter: 'D', text: 'Manusia dapat mengonsumsi residu kimia karena penggunaan pupuk berlebihan.' },
            { letter: 'E', text: 'Penggunaan pupuk yang berlebihan tidak menyebabkan pencemaran air.' }
        ]
    },
    // SOAL 7
    {
        id: 7,
        type: 'multiple-choice',
        text: `Menginap di vila pegunungan pada akhir pekan banyak dilakukan beberapa keluarga karena dapat menampung banyak anggota keluarga dan menghemat biaya liburan. Salah satu vila yang banyak terdapat di pegunungan adalah Vila X yang lokasinya strategis dan memiliki fasilitas sesuai dengan kebutuhan keluarga.

Berdasarkan paparan tersebut, manakah simpulan yang PALING TEPAT?`,
        options: [
            { letter: 'A', text: 'Hanya Vila X yang memberikan biaya hemat pada saat liburan berlangsung.' },
            { letter: 'B', text: 'Semua vila di pegunungan memiliki lokasi yang strategis bagi keluarga.' },
            { letter: 'C', text: 'Vila selain Vila X tidak memiliki fasilitas sesuai kebutuhan keluarga.' },
            { letter: 'D', text: 'Vila yang menampung banyak anggota keluarga pasti lokasinya strategis.' },
            { letter: 'E', text: 'Beberapa orang menyewa Vila X karena dirasa vila tersebut cocok untuk keluarga.' }
        ]
    },
    // SOAL 8
    {
        id: 8,
        type: 'multiple-choice',
        text: `Hari ini jalanan lancar karena tidak ada pengalihan arus lalu lintas. Biasanya, jika jalanan sangat ramai, banyak pengalihan arus lalu lintas.

Berdasarkan pernyataan di atas, manakah simpulan yang BENAR?`,
        options: [
            { letter: 'A', text: 'Hari ini jalanan sangat ramai.' },
            { letter: 'B', text: 'Hari ini jalanan tidak ramai.' },
            { letter: 'C', text: 'Hari ini banyak pengalihan arus lalu lintas.' },
            { letter: 'D', text: 'Hari ini jalanan macet.' },
            { letter: 'E', text: 'Hari ini lalu lintas padat.' }
        ]
    },
    // SOAL 9 (tidak ada soal, tapi nomor tetap dihitung)
    {
        id: 9,
        type: 'multiple-choice',
        text: `Tim Negara X menjuarai badminton beregu berkat mental tanding yang tangguh dan adanya latihan ekstra. Adanya latihan ekstra tersebut terlihat dari penambahan durasi latihan dan adanya hukuman bagi yang melakukan kesalahan. Selain itu, kuatnya mental membuat pemain tahan terhadap tekanan yang terlihat dari minimnya kesalahan saat bertanding dan terlihat santai saat pertandingan.

Jika tim Negara X terlihat minim melakukan kesalahan, manakah kesimpulan di bawah ini yang PALING MUNGKIN BENAR?`,
        options: [
            { letter: 'A', text: 'Pemain melampiaskan hukuman yang diterima dengan bercanda.' },
            { letter: 'B', text: 'Target menjadi juara membuat mereka harus bertanding lebih santai.' },
            { letter: 'C', text: 'Pemain tim Negara X memiliki mental yang kuat saat pertandingan.' },
            { letter: 'D', text: 'Mereka mampu menunjukkan sikap yang santai pada saat pertandingan.' },
            { letter: 'E', text: 'Mereka mampu melepas ketegangan karena telah berlatih dengan ekstra.' }
        ]
    },
    // SOAL 10
    {
        id: 10,
        type: 'multiple-choice',
        text: `Sekolah A merupakan sekolah favorit bagi siswa sekitarnya sebelum terjadi pergantian kepala sekolah. Setelah dua tahun pergantian kepala sekolah, sekolah tersebut kurang diminati warga di sekitarnya.

Manakah pernyataan berikut yang PALING MUNGKIN menjelaskan perbedaan kedua kondisi tersebut?`,
        options: [
            { letter: 'A', text: 'Pada awal kepemimpinan kepala sekolah yang baru, ada banyak program unggulan yang diusulkan.' },
            { letter: 'B', text: 'Dari dulu hingga sekarang, sekolah sering memprioritaskan pada lomba-lomba nonakademik.' },
            { letter: 'C', text: 'Fasilitas sekolah tidak mengalami perubahan sebelum dan sesudah pergantian pimpinan.' },
            { letter: 'D', text: 'Di bawah pimpinan yang baru, sekolah tersebut tidak mempertahankan kompetensi gurunya.' },
            { letter: 'E', text: 'Sekolah tersebut tidak pernah mendapatkan pemeriksaan dewan pengawas sekolah.' }
        ]
    },
    // SOAL 11
    {
        id: 11,
        type: 'multiple-choice',
        text: `Pengembangan start-up kini menjadi pilihan anak muda sebagai bisnis alternatif yang menjanjikan. Banyak di antara mereka yang berhasil mendapatkan pendanaan sehingga mampu mengembangkan bisnisnya secara masif. Para pengamat menjelaskan bahwa kegiatan tersebut telah mampu mengurangi jumlah pengangguran.

Berdasarkan tulisan di atas, manakah yang PALING MUNGKIN mendasari argumen pengamat?`,
        options: [
            { letter: 'A', text: 'Anak muda membutuhkan pendanaan untuk bisnis mereka.' },
            { letter: 'B', text: 'Mengembangkan start-up bukan sekadar penyaluran hobi.' },
            { letter: 'C', text: 'Start-up tidak lagi hanya menjadi sebuah bisnis.' },
            { letter: 'D', text: 'Anak muda memiliki potensi besar untuk berinovasi.' },
            { letter: 'E', text: 'Bisnis start-up membutuhkan banyak tenaga kerja.' }
        ]
    },
    // SOAL 12 (tidak ada soal)
    {
        id: 12,
        type: 'multiple-choice',
        text: `Pakar 1 menyatakan bahwa kualitas pendidikan Universitas X lebih maju dari Universitas Y. 
        Pakar 2 menyatakan bahwa Universitas X tidak memberikan insentif yang layak bagi dosen dan penelitinya. 
        Sementara itu, menurut data organisasi pendidikan dunia, lebih banyak lulusan Universitas X memiliki karier yang sukses dibandingkan Universitas Y.

        Manakah pernyataan yang PALING TEPAT mengenai data dari organisasi pendidikan tersebut?`,
        options: [
            { letter: 'A', text: 'Memperkuat pernyataan Pakar 1.' },
            { letter: 'B', text: 'Memperlemah pernyataan Pakar 1.' },
            { letter: 'C', text: 'Memperkuat pernyataan Pakar 2.' },
            { letter: 'D', text: 'Memperlemah pernyataan Pakar 2.' },
            { letter: 'E', text: 'Tidak relevan dengan pernyataan Pakar 1 dan Pakar 2' }
        ]
    },
    // SOAL 13
    {
        id: 13,
        type: 'multiple-choice',
        text: `Bermain gim bermanfaat untuk memunculkan perasaan senang karena memberikan hiburan. Selain itu, bermain gim juga meningkatkan keterampilan motorik dan berpikir strategis. Meskipun demikian, terlalu banyak bermain gim dapat menimbulkan dampak negatif, seperti meningkatnya ketergantungan yang dapat menurunkan minat belajar.

Berdasarkan informasi tersebut, manakah pernyataan berikut yang PASTI BENAR?`,
        options: [
            { letter: 'A', text: 'Bermain gim akan menurunkan minat belajar seseorang.' },
            { letter: 'B', text: 'Beberapa orang yang rajin belajar akan menghindari bermain gim.' },
            { letter: 'C', text: 'Kurangnya keterampilan motorik seseorang diatasi dengan bermain gim.' },
            { letter: 'D', text: 'Perasaan senang akan mendorong seseorang untuk bermain gim.' },
            { letter: 'E', text: 'Beberapa masalah kecanduan diakibatkan oleh terlalu banyak bermain gim.' }
        ]
    },
    // SOAL 14
    {
        id: 14,
        type: 'multiple-choice',
        text: `Desa T mengalami peningkatan tingkat polusi udara yang cukup signifikan dalam beberapa waktu terakhir. Polusi ini ditandai dengan adanya lapisan debu yang semakin tebal dalam menyelimuti jalan-jalan dan pepohonan. Kondisi tersebut diikuti dengan peningkatan risiko penyakit gangguan saluran pernapasan pada warga. Namun, berdasarkan pengamatan, banyak warga Desa T tetap beraktivitas di luar rumah tanpa perlindungan.

Berdasarkan paragraf di atas, manakah di bawah ini peristiwa yang PALING MUNGKIN BENAR mengenai Desa T?`,
        options: [
            { letter: 'A', text: 'Tidak ada warga yang mengalami gangguan saluran pernapasan sebelum polusi terjadi.' },
            { letter: 'B', text: 'Sebelum polusi terjadi tidak ada warga yang beraktivitas di luar rumah.' },
            { letter: 'C', text: 'Warga Desa T semakin terbiasa dengan jalan dan pepohonan yang berdebu.' },
            { letter: 'D', text: 'Polusi udara di Desa T akan terus meningkat akibat jalan dan pepohonan yang berdebu.' },
            { letter: 'E', text: 'Banyak warga Desa T diprediksi akan mengalami gangguan saluran pernapasan.' }
        ]
    },
    // SOAL 15
    {
        id: 15,
        type: 'multiple-choice',
        text: `Pengusaha X ingin mengubah konsep kafe yang dikelolanya. Ia dihadapkan pada dua pilihan. Konsep P memiliki pangsa pasar yang besar, tetapi keuntungan yang didapat kecil. Konsep Q memiliki pangsa pasar yang terbatas, tetapi keuntungannya lebih besar. Pengusaha X akhirnya memilih konsep P untuk menghindari risiko kerugian yang cukup besar.

Manakah yang PALING MEMPERKUAT keputusan pengusaha tersebut?`,
        options: [
            { letter: 'A', text: 'Pengusaha X ingin mendapatkan keuntungan yang rutin meskipun jumlahnya kecil.' },
            { letter: 'B', text: 'Pengusaha X ingin membangun bisnis kafe dengan ukuran yang sangat besar.' },
            { letter: 'C', text: 'Konsep P lebih cocok diterapkan untuk menyasar penikmat kopi kelas menengah.' },
            { letter: 'D', text: 'Konsep Q mudah diterapkan bagi pengusaha yang ingin membangun bisnis kafe.' },
            { letter: 'E', text: 'Pengusaha X memiliki strategi khusus agar sukses untuk memasarkan kafenya.' }
        ]
    },
    // SOAL 16
    {
        id: 16,
        type: 'multiple-choice',
        text: `Komposisi dan kualitas bahan dinilai sebagai faktor yang mendukung ketahanan wangi parfum ketika dipakai di tempat terbuka. Konsumen mengatakan bahwa aroma parfum merek X cepat hilang dibandingkan dengan merek Y.

Manakah pernyataan di bawah ini yang PALING MEMPERLEMAH pendapat konsumen?`,
        options: [
            { letter: 'A', text: 'Parfum merek X dibuat menggunakan bahan asli pilihan.' },
            { letter: 'B', text: 'Sebelum diproduksi massal, parfum Y telah teruji dengan baik.' },
            { letter: 'C', text: 'Sedikit artis terkenal yang mempromosikan penggunaan parfum X.' },
            { letter: 'D', text: 'Testimoni konsumen terhadap kualitas parfum Y sangat positif.' },
            { letter: 'E', text: 'Ada banyak bahan yang dapat dipakai untuk membuat parfum yang harum.' }
        ]
    },
    // SOAL 17
    {
        id: 17,
        type: 'multiple-choice',
        text: `Pengelola kantin di Sekolah X mengatakan bahwa tingkat penjualan makanan di Sekolah X mengalami penurunan secara drastis dalam satu minggu terakhir ini. Hal ini disebabkan adanya fenomena siswa yang lebih suka membawa bekal sendiri dari rumah.

Manakah pernyataan berikut, yang jika benar, akan MEMPERKUAT pernyataan pengelola kantin di Sekolah X?`,
        options: [
            { letter: 'A', text: 'Siswa sekolah lain tidak tertarik membawa bekal sendiri dari rumah.' },
            { letter: 'B', text: 'Jumlah siswa yang membawa bekal sendiri dari rumah bertambah belakangan ini.' },
            { letter: 'C', text: 'Tidak semua siswa Sekolah X membawa bekal sendiri dari rumah.' },
            { letter: 'D', text: 'Sudah lama, para siswa Sekolah X membawa bekal sendiri.' },
            { letter: 'E', text: 'Pengelola kantin di Sekolah X hanya berjualan pada hari-hari sekolah.' }
        ]
    },
    // SOAL 18
    {
        id: 18,
        type: 'multiple-choice',
        text: `Dalam beberapa tahun terakhir, banyak program penyelenggaraan karnaval diadakan oleh Pemerintah Kota ABC sebagai upaya untuk meningkatkan pariwisata lokal. Seperti halnya panggung yang menyediakan ruang bagi para aktor untuk menampilkan bakat mereka, karnaval ini memberikan wadah bagi masyarakat lokal untuk mengekspresikan kreativitas melalui kostum tarian yang berwarna-warni. Jika pariwisata lokal terus menurun, ekonomi lokal akan terpengaruh dan peluang lapangan kerja akan berkurang.

Berdasarkan paragraf tersebut, jika karnaval disamakan dengan panggung, manakah di bawah ini simpulan yang PALING MUNGKIN BENAR?`,
        options: [
            { letter: 'A', text: 'Wisatawan berkunjung ke Kota ABC hanya karena adanya penyelenggaraan karnaval.' },
            { letter: 'B', text: 'Peningkatan ekonomi lokal disebabkan oleh banyaknya peserta karnaval yang hadir.' },
            { letter: 'C', text: 'Kemajuan pariwisata lokal ditandai dengan banyaknya penyelenggaraan karnaval.' },
            { letter: 'D', text: 'Jika karnaval diselenggarakan, berkurangnya lapangan pekerjaan dapat dicegah.' },
            { letter: 'E', text: 'Ekonomi Kota ABC tidak akan berkembang tanpa karnaval yang penuh kreativitas.' }
        ]
    },
    // SOAL 19
    {
        id: 19,
        type: 'multiple-choice',
        text: `Karyawan ingin mengembangkan kariernya di perusahaan. Karena keterbatasan waktu, ia harus memilih antara mengikuti pelatihan keterampilan teknis sesuai pekerjaannya atau mengikuti pelatihan kepemimpinan untuk jenjang karier yang lebih tinggi. Jika mengikuti pelatihan keterampilan teknis sesuai pekerjaannya, ia lebih ahli dan produktif dalam tugas sehari-hari. Namun, jika mengikuti pelatihan kepemimpinan, ia memiliki peluang untuk dipromosikan ke posisi yang lebih tinggi.

Berdasarkan bacaan di atas, manakah dari pernyataan berikut ini yang PALING TEPAT menggambarkan keputusan karyawan tersebut?`,
        options: [
            { letter: 'A', text: 'Jika mengikuti pelatihan keterampilan teknis sesuai pekerjaannya, ia lebih ahli dan produktif dalam tugas sehari-hari maupun dipromosikan ke posisi yang lebih tinggi.' },
            { letter: 'B', text: 'Jika mengikuti pelatihan kepemimpinan, ia tidak lebih ahli dan produktif dalam tugas sehari-hari.' },
            { letter: 'C', text: 'Jika memilih salah satu kegiatan, ia tidak lebih ahli dan produktif dalam tugas sehari-hari dan tidak dipromosikan ke posisi yang lebih tinggi.' },
            { letter: 'D', text: 'Jika ikut keduanya, ia dapat lebih ahli dan produktif dalam tugas sehari-hari atau dipromosikan ke posisi yang lebih tinggi.' },
            { letter: 'E', text: 'Jika mengikuti salah satu kegiatan, ia dapat lebih ahli dan produktif dalam tugas sehari-hari atau dipromosikan ke posisi yang lebih tinggi.' }
        ]
    },
    // SOAL 20
    {
        id: 20,
        type: 'multiple-choice',
        text: `Untuk bisa menjadi anggota suatu klub diet, peserta harus rutin olahraga. Peserta tidak boleh mengonsumsi makanan selain yang ditentukan. X tidak menyukai makanan cepat saji. Kesimpulannya, X pernah menjadi anggota Klub Diet Y.

Manakah pernyataan berikut yang menggambarkan kualitas kesimpulan tersebut?`,
        options: [
            { letter: 'A', text: 'Kesimpulan tersebut dapat dipastikan benar.' },
            { letter: 'B', text: 'Kesimpulan tersebut memiliki kemungkinan benar.' },
            { letter: 'C', text: 'Kesimpulan tersebut dapat dipastikan salah.' },
            { letter: 'D', text: 'Kesimpulan tidak relevan dengan informasi yang diberikan.' },
            { letter: 'E', text: 'Kesimpulan tersebut memiliki kemungkinan salah.' }
        ]
    },
    // SOAL 21
    {
        id: 21,
        type: 'multiple-choice',
        text: `Koperasi konsumsi mengadakan penjualan sembako murah selama seminggu berturut-turut. Jumlah pembeli sembako murah dari hari ketiga sampai dengan hari ketujuh berturut-turut adalah 87, 95, 92, 100, dan 97. Jika jumlah pembeli sembako tersebut bersifat konstan sejak hari pertama, jumlah pembeli sembako di hari pertama adalah . . .`,
        options: [
            { letter: 'A', text: '79' },
            { letter: 'B', text: '82' },
            { letter: 'C', text: '84' },
            { letter: 'D', text: '86' },
            { letter: 'E', text: '90' }
        ]
    },
    // SOAL 22
    {
        id: 22,
        type: 'multiple-choice',
        text: `Perbandingan bahan baku dalam produksi sampo antara air, lidah buaya, dan aroma adalah 15 : 7 : 3. Jika jumlah lidah buaya dan aroma yang digunakan adalah 30 liter, berapa total volume sampo yang dihasilkan?`,
        options: [
            { letter: 'A', text: '55 liter' },
            { letter: 'B', text: '65 liter' },
            { letter: 'C', text: '75 liter' },
            { letter: 'D', text: '85 liter' },
            { letter: 'E', text: '95 liter' }
        ]
    },
        // SOAL 23
    {
        id: 23,
        type: 'multiple-choice',
        text: `Bilangan yang PALING MENDEKATI hasil pengurangan 8,72 – 87% adalah ....`,
        options: [
            { letter: 'A', text: '7 1/4' },
            { letter: 'B', text: '7 3/5' },
            { letter: 'C', text: '7 1/7' },
            { letter: 'D', text: '8 3/4' },
            { letter: 'E', text: '8 1/8' }
        ]
    },
    // SOAL 24
    {
        id: 24,
        type: 'multiple-choice',
        text: `<div style="text-align: center;">
                    <img src="images/PU2425.jpeg" alt="Diagram Penjualan Motor" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
                Berdasarkan data dalam diagram tersebut, manakah pernyataan yang PALING TEPAT untuk menggambarkan kondisi jual-beli motor pada tahun 2024?`,
        options: [
            { letter: 'A', text: 'Jumlah yang lulus sama dengan jumlah yang gagal.' },
            { letter: 'B', text: 'Jumlah yang lulus lebih besar daripada tahun sebelumnya.' },
            { letter: 'C', text: 'Jumlah yang gagal lebih besar daripada yang lulus.' },
            { letter: 'D', text: 'Jumlah yang gagal lebih besar daripada tahun sebelumnya.' },
            { letter: 'E', text: 'Jumlah peserta lebih besar daripada tahun sebelumnya.' }
        ]
    },
    // SOAL 25
    {
        id: 25,
        type: 'multiple-choice',
        text: `<div style="text-align: center;">
                    <img src="images/PU2425.jpeg" alt="Diagram Penjualan Motor" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
                Berdasarkan data dalam diagram tersebut, pada tahun berapa produksi nikel memiliki persentase PALING BESAR?`,
        options: [
            { letter: 'A', text: '2019' },
            { letter: 'B', text: '2020' },
            { letter: 'C', text: '2021' },
            { letter: 'D', text: '2022' },
            { letter: 'E', text: '2023' }
        ]
    },
    // SOAL 26
    {
        id: 26,
        type: 'multiple-choice',
        text: `<div style="text-align: center;">
                    <img src="images/PU26.jpeg" alt="Diagram Penjualan Tanaman" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>
                Jika peserta lomba masak adalah 50 orang, total jumlah peserta yang memasak jenis makanan lebih dari 25% adalah . . .`,
        options: [
            { letter: 'A', text: '16' },
            { letter: 'B', text: '17' },
            { letter: 'C', text: '26' },
            { letter: 'D', text: '27' },
            { letter: 'E', text: '29' }
        ]
    },
    // SOAL 27
    {
        id: 27,
        type: 'multiple-choice',
        text: `Sebuah Pembangkit Listrik Tenaga Uap (PLTU) mendapat pasokan batu bara selama lima hari berturut-turut sebesar 5, 7, 6, 8, dan 7 ton. Selama kurun waktu tersebut, PLTU menghasilkan daya listrik sebesar 7, 9, 8, 10, dan 9 MWh.
        Jika tren perubahan tersebut bersifat konstan, berapa MWh daya listrik yang dihasilkan pada hari ke-6?`,
        options: [
            { letter: 'A', text: '8' },
            { letter: 'B', text: '9' },
            { letter: 'C', text: '10' },
            { letter: 'D', text: '11' },
            { letter: 'E', text: '12' }
        ]
    },
    // SOAL 28
    {
        id: 28,
        type: 'multiple-choice',
        text: `Harga komputer bekas turun 15% dari harga komputer baru. Jika harga komputer bekas Rp 8.500.000, 00, berapakah harga komputer baru?`,
        options: [
            { letter: 'A', text: 'Rp9.500.000,00' },
            { letter: 'B', text: 'Rp10.000.000,00' },
            { letter: 'C', text: 'Rp10.500.000,00' },
            { letter: 'D', text: 'Rp11.000.000,00' },
            { letter: 'E', text: 'Rp11.500.000,00' }
        ]
    },
    // SOAL 29
    {
        id: 29,
        type: 'multiple-choice',
        text: `Bacalah dua informasi berikut!
(1) Sebuah kelas memiliki 40 siswa dan rata-rata nilai Matematika mereka adalah 75
(2) Terdapat lima siswa yang mendapatkan nilai Matematika yang sempurna
(100)
Pilihlah informasi yang dapat digunakan untuk menjawab pertanyaan,
”Berapakah rata-rata nilai Matematika dari 35 siswa yang tidak mendapat nilai sempurna?"`,
        options: [
            { letter: 'A', text: 'Cukup (1).' },
            { letter: 'B', text: 'Cukup (2).' },
            { letter: 'C', text: 'Informasi (1) dan (2).' },
            { letter: 'D', text: 'Menggunakan (1) saja atau (2) saja.' },
            { letter: 'E', text: 'Kedua informasi tidak cukup.' }
        ]
    },
    // SOAL 30
    {
        id: 30,
        type: 'multiple-choice',
        text: `Dealer X menjual mobil dan sepeda motor. Keuntungan sepeda motor 1/9 dari penjualan mobil. Berikut laporan penjualan pada lima cabang dealer X per tahun. Cabang dealer X manakah yang mendapatkan keuntungan TERENDAH?
        <div style="text-align: center;">
                    <img src="images/PU30.jpeg" alt="Tabel Penjualan Tiket" style="max-width: 40%; margin: 8px 0; border-radius: 8px;">
                </div>`,
        options: [
            { letter: 'A', text: 'I' },
            { letter: 'B', text: 'II' },
            { letter: 'C', text: 'III' },
            { letter: 'D', text: 'IV' },
            { letter: 'E', text: 'V' }
        ]
    }
];