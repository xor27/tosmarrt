// ==================== SUBTEST 2: Pengetahuan dan Pemahaman Umum ====================
// Total 20 soal

const subtest2 = [
    // SOAL 1
    {
        id: 1,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 1 sampai 4.
(1) Perkembangan industri kopi di Indonesia ditandai dengan munculnya kedai kopi modern. (2) Kedai kopi ini menawarkan kopi berkualitas tinggi serta suasana nyaman dan desain interior yang menarik. (3) Kedai kopi modern menjadi tempat berkumpul, bekerja, dan bersosialisasi bagi kaum urban.
(4) Saat ini industri kopi di Indonesia telah berkembang pesat. (5) Indonesia menjadi salah satu produsen kopi terbesar di dunia, bersama dengan Brasil, Vietnam, dan Kolombia. (6) Kopi Indonesia telah menjadi komoditas ekspor yang penting karena menyumbang devisa bagi negara. (7) Di balik kesuksesan industri kopi Indonesia, terdapat peran penting para petani kopi. (8) Perjalanan industri kopi di Indonesia adalah sebuah kisah panjang yang penuh lika-liku. (9) Ada jerih payah para petani kopi sekaligus sejarah panjang kopi di bumi pertiwi saat kita menikmati secangkir kopi.

Kelompok kata dalam bacaan tersebut yang memiliki pola makna dengan <i>bengkel mobil</i> adalah ...`,
        options: [
            { letter: 'A', text: 'kedai kopi (kalimat 1)' },
            { letter: 'B', text: 'desain interior (kalimat 2)' },
            { letter: 'C', text: 'kaum urban (kalimat 3)' },
            { letter: 'D', text: 'peran penting (kalimat 7)' },
            { letter: 'E', text: 'sejarah panjang (kalimat 9)' }
        ]
    },
    // SOAL 2
    {
        id: 2,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 1 sampai 4.
(1) Perkembangan industri kopi di Indonesia ditandai dengan munculnya kedai kopi modern. (2) Kedai kopi ini menawarkan kopi berkualitas tinggi <i>serta</i> suasana nyaman dan desain interior yang menarik. (3) Kedai kopi modern menjadi tempat berkumpul, bekerja, dan bersosialisasi bagi kaum urban.
(4) Saat ini industri kopi di Indonesia telah berkembang pesat. (5) Indonesia menjadi salah satu produsen kopi terbesar di dunia, bersama dengan Brasil, Vietnam, dan Kolombia. (6) Kopi Indonesia telah menjadi komoditas ekspor yang penting karena menyumbang devisa bagi negara. (7) Di balik kesuksesan industri kopi Indonesia, terdapat peran penting para petani kopi. (8) Perjalanan industri kopi di Indonesia adalah sebuah kisah panjang yang penuh lika-liku. (9) Ada jerih payah para petani kopi sekaligus sejarah panjang kopi di bumi pertiwi saat kita menikmati secangkir kopi.

Fungsi kata penghubung <i>serta</i> dalam kalimat (2) adalah ...`,
        options: [
            { letter: 'A', text: 'menjelaskan hubungan sebab-akibat' },
            { letter: 'B', text: 'menunjukkan alasan' },
            { letter: 'C', text: 'memberikan informasi tambahan' },
            { letter: 'D', text: 'memerinci pernyataan' },
            { letter: 'E', text: 'menandai hubungan logis' }
        ]
    },
    // SOAL 3
    {
        id: 3,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 1 sampai 4.
(1) Perkembangan industri kopi di Indonesia ditandai dengan munculnya kedai kopi modern. (2) Kedai kopi ini menawarkan kopi berkualitas tinggi serta suasana nyaman dan desain interior yang menarik. (3) Kedai kopi modern menjadi tempat berkumpul, bekerja, dan bersosialisasi bagi kaum urban.
(4) Saat ini industri kopi di Indonesia telah berkembang pesat. (5) Indonesia menjadi salah satu produsen kopi terbesar di dunia, bersama dengan Brasil, Vietnam, dan Kolombia. (6) Kopi Indonesia telah menjadi komoditas ekspor yang penting karena menyumbang devisa bagi negara. (7) Di balik kesuksesan industri kopi Indonesia, terdapat peran penting para petani kopi. (8) Perjalanan industri kopi di Indonesia adalah sebuah kisah panjang yang penuh lika-liku. (9) Ada jerih payah para petani kopi sekaligus sejarah panjang kopi di bumi pertiwi saat kita menikmati secangkir kopi.

Hubungan kata <i>kopi</i> dan kata <i>petani</i> sama dengan hubungan kata emas dan kata ...`,
        options: [
            { letter: 'A', text: 'perajin' },
            { letter: 'B', text: 'pedagang' },
            { letter: 'C', text: 'pengoleksi' },
            { letter: 'D', text: 'penambang' },
            { letter: 'E', text: 'pembeli' }
        ]
    },
    // SOAL 4
    {
        id: 4,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 1 sampai 4.
(1) Perkembangan industri kopi di Indonesia ditandai dengan munculnya kedai kopi modern. (2) Kedai kopi ini menawarkan kopi berkualitas tinggi serta suasana nyaman dan desain interior yang menarik. (3) Kedai kopi modern menjadi tempat berkumpul, bekerja, dan bersosialisasi bagi kaum urban.
(4) Saat ini industri kopi di Indonesia telah berkembang pesat. (5) Indonesia menjadi salah satu produsen kopi terbesar di dunia, bersama dengan Brasil, Vietnam, dan Kolombia. (6) Kopi Indonesia telah menjadi komoditas ekspor yang penting karena <i>menyumbang devisa</i> bagi negara. (7) Di balik kesuksesan industri kopi Indonesia, terdapat peran penting para petani kopi. (8) Perjalanan industri kopi di Indonesia adalah sebuah kisah panjang yang penuh lika-liku. (9) Ada jerih payah para petani kopi sekaligus sejarah panjang kopi di bumi pertiwi saat kita menikmati secangkir kopi.    
        
Kelompok kata <i>menyumbang devisa</i> dalam kalimat (6) memiliki makna paling dekat dengan kelompok kata ...`,
        options: [
            { letter: 'A', text: 'memberikan keuntungan' },
            { letter: 'B', text: 'mendatangkan kebaikan' },
            { letter: 'C', text: 'membagikan laba' },
            { letter: 'D', text: 'mendukung pembangunan' },
            { letter: 'E', text: 'menyediakan kontribusi' }
        ]
    },
    // SOAL 5
    {
        id: 5,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 5 sampai 8.
(1) Sebuah studi terbaru mengungkapkan fakta mengejutkan bahwa kelelahan pada <i>remaja</i> memiliki dampak yang lebih luas dari sekadar kesulitan berkonsentrasi saat belajar. (2) Sekitar 40% remaja melaporkan bahwa mereka mengalami rasa kantuk yang cukup sering. (3) Kondisi ini tidak hanya mengganggu aktivitas belajar mereka di sekolah, tetapi juga berpotensi memicu perilaku yang tidak diinginkan. (4) Penelitian tersebut menunjukkan adanya hubungan antara kelelahan pada remaja dan peningkatan kecenderungan melakukan tindakan antisosial.
(5) Remaja yang sering merasa lelah akan cenderung lebih sering berbohong, menipu, mencuri, bahkan terlibat dalam perkelahian. (6) Meskipun banyak penelitian menyoroti kesulitan tidur pada remaja, studi ini memberikan pemahaman yang lebih mendalam dan menggali lebih jauh dampak kelelahan terhadap perilaku remaja. (7) Hasilnya sangat...dan menggarisbawahi...mengatasi kondisi kelelahan pada remaja secara serius.

Kata yang memiliki makna lebih luas dari kata <i>remaja</i> dalam kalimat (2) adalah ...`,
        options: [
            { letter: 'A', text: 'Dewasa' },
            { letter: 'B', text: 'Anak' },
            { letter: 'C', text: 'Usia' },
            { letter: 'D', text: 'Manusia' },
            { letter: 'E', text: 'Masyarakat' }
        ]
    },
    // SOAL 6
    {
        id: 6,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 5 sampai 8.
(1) Sebuah studi terbaru mengungkapkan fakta mengejutkan bahwa kelelahan pada remaja memiliki dampak yang lebih luas dari sekadar <i>kesulitan</i> berkonsentrasi saat belajar. (2) Sekitar 40% remaja melaporkan bahwa mereka mengalami rasa kantuk yang cukup sering. (3) Kondisi ini tidak hanya mengganggu aktivitas belajar mereka di sekolah, tetapi juga berpotensi memicu perilaku yang tidak diinginkan. (4) Penelitian tersebut menunjukkan adanya hubungan antara kelelahan pada remaja dan peningkatan kecenderungan melakukan tindakan antisosial.
(5) Remaja yang sering merasa lelah akan cenderung lebih sering berbohong, menipu, mencuri, bahkan terlibat dalam perkelahian. (6) Meskipun banyak penelitian menyoroti kesulitan tidur pada remaja, studi ini memberikan pemahaman yang lebih mendalam dan menggali lebih jauh dampak kelelahan terhadap perilaku remaja. (7) Hasilnya sangat...dan menggarisbawahi...mengatasi kondisi kelelahan pada remaja secara serius.

Kata <i>kesulitan</i> pada kalimat (1) dalam bacaan tersebut paling dekat maknanya dengan kata ...`,
        options: [
            { letter: 'A', text: 'Kekurangan' },
            { letter: 'B', text: 'Batasan' },
            { letter: 'C', text: 'Urusan' },
            { letter: 'D', text: 'Masalah' },
            { letter: 'E', text: 'Penyakit' }
        ]
    },
    // SOAL 7
    {
        id: 7,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 5 sampai 8.
(1) Sebuah studi terbaru mengungkapkan fakta mengejutkan bahwa kelelahan pada remaja memiliki dampak yang lebih luas dari sekadar kesulitan berkonsentrasi saat belajar. (2) Sekitar 40% remaja melaporkan bahwa mereka mengalami rasa kantuk yang cukup sering. (3) Kondisi ini tidak hanya mengganggu aktivitas belajar mereka di sekolah, tetapi juga berpotensi memicu perilaku yang tidak diinginkan. (4) Penelitian tersebut menunjukkan adanya hubungan antara kelelahan pada remaja dan peningkatan kecenderungan melakukan tindakan antisosial.
(5) Remaja yang sering merasa lelah akan cenderung lebih sering berbohong, menipu, mencuri, bahkan terlibat dalam perkelahian. (6) Meskipun banyak penelitian menyoroti kesulitan tidur pada remaja, studi ini memberikan pemahaman yang lebih mendalam dan menggali lebih jauh dampak kelelahan terhadap perilaku remaja. (7) Hasilnya sangat...dan menggarisbawahi...mengatasi kondisi kelelahan pada remaja secara serius.

Perumpamaan pada bacaan tersebut dapat ditemukan pada kata ...`,
        options: [
            { letter: 'A', text: 'Berkonsentrasi (kalimat 1)' },
            { letter: 'B', text: 'Belajar (kalimat 3)' },
            { letter: 'C', text: 'Melakukan (kalimat 4)' },
            { letter: 'D', text: 'Mencuri (kalimat 5)' },
            { letter: 'E', text: 'Menggali (kalimat 6)' }
        ]
    },
    // SOAL 8
    {
        id: 8,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 5 sampai 8.
(1) Sebuah studi terbaru mengungkapkan fakta mengejutkan bahwa kelelahan pada remaja memiliki dampak yang lebih luas dari sekadar kesulitan berkonsentrasi saat belajar. (2) Sekitar 40% remaja melaporkan bahwa mereka mengalami rasa kantuk yang cukup sering. (3) Kondisi ini tidak hanya mengganggu aktivitas belajar mereka di sekolah, tetapi juga berpotensi memicu perilaku yang tidak diinginkan. (4) Penelitian tersebut menunjukkan adanya hubungan antara kelelahan pada remaja dan peningkatan kecenderungan melakukan tindakan antisosial.
(5) Remaja yang sering merasa lelah akan cenderung lebih sering berbohong, menipu, mencuri, bahkan terlibat dalam perkelahian. (6) Meskipun banyak penelitian menyoroti kesulitan tidur pada remaja, studi ini memberikan pemahaman yang lebih mendalam dan menggali lebih jauh dampak kelelahan terhadap perilaku remaja. (7) Hasilnya sangat...dan menggarisbawahi...mengatasi kondisi kelelahan pada remaja secara serius.

Kalimat (7) dalam bacaan tersebut akan menjadi bermakna bila dilengkapi dengan kata-kata ...`,
        options: [
            { letter: 'A', text: 'Berdampak ; keharusan' },
            { letter: 'B', text: 'Nyata ; wajibnya' },
            { letter: 'C', text: 'Berarti; potensi' },
            { letter: 'D', text: 'Jelas ; kemungkinan' },
            { letter: 'E', text: 'Signifikan ; pentingnya' }
        ]
    },
    // SOAL 9
    {
        id: 9,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 9 sampai 12.
(1) Saat ini kecerdasan buatan atau artificial intelligence(AI) bukan hanya tentang robot atau sistem otomatisasi yang biasa digunakan dalam aktivitas sehari-hari. (2) AI juga menjadi sahabat terbaik dalam perawatan kulit. (3) Tren AI dalam industri kecantikan merupakan revolusi kecantikan yang menggabungkan kecerdasan buatan dengan ilmu perawatan kulit. (4) Melalui teknologi cerdas dalam pemrosesan data, AI mampu menganalisis kondisi kulit secara cepat (real-time), mengidentifikasi masalah kulit secara spesifik, dan memberikan rekomendasi perawatan yang disesuaikan dengan tipe kulit setiap individu.
(5) Tidak hanya itu, AI dalam dunia kecantikan juga membantu mengembangkan formula baru yang inovatif, memprediksi tren kecantikan, dan menyesuaikan pengalaman konsumen dengan kebutuhan kulit masing-masing. (6) Dengan demikian, tren AI tidak hanya mengubah cara pembuatan dan penjualan produk kecantikan, tetapi juga membangun interaksi konsumen dengan AI untuk perawatan kecantikan mereka sehari-hari.

Bentuk pe-an pada kata perawatan dalam kalimat (2) mempunyai makna yang sama dengan bentuk pe-an pada kalimat`,
        options: [
            { letter: 'A', text: 'Di pelabuhan itu, banyak kapal pesiar singgah dalam waktu yang cukup lama.' },
            { letter: 'B', text: 'Ikan-ikan yang ditangkap para nelayan dijual di pelelangan ikan.' },
            { letter: 'C', text: 'Para petani modern sudah menerapkan teknologi pembenihan.' },
            { letter: 'D', text: 'Perumahan yang ramah lingkungan harus disiapkan oleh pemerintah.' },
            { letter: 'E', text: 'Sebenarnya cerita pewayangan menggambarkan peristiwa dunia nyata.' }
        ]
    },
    // SOAL 10
    {
        id: 10,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 9 sampai 12.
(1) Saat ini kecerdasan buatan atau artificial intelligence(AI) bukan hanya tentang robot atau sistem otomatisasi yang biasa digunakan dalam aktivitas sehari-hari. (2) AI juga menjadi sahabat terbaik dalam perawatan kulit. (3) Tren AI dalam industri kecantikan merupakan revolusi kecantikan yang menggabungkan kecerdasan buatan dengan ilmu perawatan kulit. (4) Melalui teknologi cerdas dalam pemrosesan data, AI mampu menganalisis kondisi kulit secara cepat (real-time), mengidentifikasi masalah kulit secara spesifik, dan memberikan rekomendasi perawatan yang disesuaikan dengan tipe kulit setiap individu.
(5) Tidak hanya itu, AI dalam dunia kecantikan juga membantu mengembangkan formula baru yang inovatif, memprediksi tren kecantikan, dan menyesuaikan pengalaman konsumen dengan kebutuhan kulit masing-masing. (6) Dengan demikian, tren AI tidak hanya mengubah cara pembuatan dan penjualan produk kecantikan, tetapi juga membangun interaksi konsumen dengan AI untuk perawatan kecantikan mereka sehari-hari.

Kelompok kata yang berpasangan tetap dalam bacaan tersebut adalah ...`,
        options: [
            { letter: 'A', text: 'Sahabat terbaik (kalimat 2)' },
            { letter: 'B', text: 'Kecerdasan buatan (kalimat 3)' },
            { letter: 'C', text: 'Tipe kulit (kalimat 4)' },
            { letter: 'D', text: 'Formula baru (kalimat 5)' },
            { letter: 'E', text: 'Produk kecantikan (kalimat 6)' }
        ]
    },
    // SOAL 11
    {
        id: 11,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 9 sampai 12.
(1) Saat ini kecerdasan buatan atau artificial intelligence(AI) bukan hanya tentang robot atau sistem otomatisasi yang biasa digunakan dalam aktivitas sehari-hari. (2) AI juga menjadi sahabat terbaik dalam perawatan kulit. (3) Tren AI dalam industri kecantikan merupakan revolusi kecantikan yang menggabungkan kecerdasan buatan dengan ilmu perawatan kulit. (4) Melalui teknologi <i>cerdas</i> dalam pemrosesan data, AI mampu menganalisis kondisi kulit secara cepat (real-time), mengidentifikasi masalah kulit secara spesifik, dan memberikan rekomendasi perawatan yang disesuaikan dengan tipe kulit setiap individu.
(5) Tidak hanya itu, AI dalam dunia kecantikan juga membantu mengembangkan formula baru yang inovatif, memprediksi tren kecantikan, dan menyesuaikan pengalaman konsumen dengan kebutuhan kulit masing-masing. (6) Dengan demikian, tren AI tidak hanya mengubah cara pembuatan dan penjualan produk kecantikan, tetapi juga membangun interaksi konsumen dengan AI untuk perawatan kecantikan mereka sehari-hari.

Sesuai dengan konteks dalam bacaan tersebut, kata <i>cerdas</i> (kalimat 4) memiliki makna yang berlawanan dengan kata ...`,
        options: [
            { letter: 'A', text: 'Bodoh' },
            { letter: 'B', text: 'Kolot' },
            { letter: 'C', text: 'Lambat' },
            { letter: 'D', text: 'Kuno' },
            { letter: 'E', text: 'Manual' }
        ]
    },
    // SOAL 12
    {
        id: 12,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 9 sampai 12.
(1) Saat ini kecerdasan buatan atau artificial intelligence(AI) bukan hanya tentang robot atau sistem otomatisasi yang biasa digunakan dalam aktivitas sehari-hari. (2) AI juga menjadi sahabat terbaik dalam perawatan kulit. (3) Tren AI dalam industri kecantikan merupakan revolusi kecantikan yang menggabungkan kecerdasan buatan dengan ilmu perawatan kulit. (4) Melalui teknologi cerdas dalam pemrosesan data, AI mampu menganalisis kondisi kulit secara cepat (real-time), mengidentifikasi masalah kulit secara spesifik, dan memberikan rekomendasi perawatan yang disesuaikan dengan tipe kulit setiap individu.
(5) Tidak hanya itu, AI dalam dunia kecantikan juga membantu mengembangkan formula baru yang inovatif, memprediksi tren kecantikan, dan menyesuaikan pengalaman konsumen dengan kebutuhan kulit masing-masing. (6) Dengan demikian, tren AI tidak hanya mengubah cara pembuatan dan penjualan produk kecantikan, tetapi juga membangun interaksi konsumen dengan AI untuk perawatan kecantikan mereka sehari-hari.

Kata dalam bacaan tersebut yang mengacu pada makna yang sebenarnya adalah ...`,
        options: [
            { letter: 'A', text: 'Sahabat (kalimat 2)' },
            { letter: 'B', text: 'Revolusi (kalimat 3)' },
            { letter: 'C', text: 'Perawatan (kalimat 4)' },
            { letter: 'D', text: 'Dunia (kalimat 5)' },
            { letter: 'E', text: 'Membangun (kalimat 6)' }
        ]
    },
    // SOAL 13
    {
        id: 13,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 13 sampai 16
(1) Awan terbentuk dari kristal udara dan air yang seharusnya lebih padat daripada udara. (2) Namun, awan terlihat melayang bebas, mengapung tinggi, dan perlawanan gravitasi. (3) Mengapa awan tidak jatuh? (4) Hal itu terjadi karena awan tersebut tenggelam di dalam udara sekitarnya. (5) Hanya saja awan tersebut tenggelam dengan kecepatan yang sangat lambat sehingga terlihat mengapung.
(6) Galileo galilei, jauh sebelum abad ke-16 menjelaskan bahwa semua benda jatuh bebas dengan kecepatan yang sama terlepas dari massanya. (7) Gaya gravitasi yang mendorong benda ke bawah dan memaksanya jatuh ke permukaan bumi. (8) Sebaliknya, penerjun payung dapat mendarat dengan aman karena parasut mendistribusikan massa ke area permukaan yang luas. (9) Karena tersebar di area yang luas, hambatan udaranya sangat besar pada awan.

Kata yang tepat di awal paragraf dua untuk menghubungkan kedua paragraf pada bacaan adalah ...`,
        options: [
            { letter: 'A', text: 'Sementara itu' },
            { letter: 'B', text: 'Lebih jauh lagi' },
            { letter: 'C', text: 'Oleh karena itu' },
            { letter: 'D', text: 'Berbeda dengan hal di atas' },
            { letter: 'E', text: 'Berkaitan dengan hal tersebut' }
        ]
    },
    // SOAL 14
    {
        id: 14,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 13 sampai 16
(1) Awan terbentuk dari kristal udara dan air yang seharusnya lebih padat daripada udara. (2) Namun, awan terlihat melayang bebas, mengapung tinggi, dan perlawanan gravitasi. (3) Mengapa awan tidak jatuh? (4) Hal itu terjadi karena awan tersebut tenggelam di dalam udara sekitarnya. (5) Hanya saja awan tersebut tenggelam dengan kecepatan yang sangat lambat sehingga terlihat mengapung.
(6) Galileo galilei, jauh sebelum abad ke-16 menjelaskan bahwa semua benda jatuh bebas dengan kecepatan yang sama terlepas dari massanya. (7) Gaya gravitasi yang mendorong benda ke bawah dan memaksanya jatuh ke permukaan bumi. (8) Sebaliknya, penerjun payung dapat mendarat dengan aman karena parasut mendistribusikan massa ke area permukaan yang luas. (9) Karena tersebar di area yang luas, <i>hambatan udaranya sangat besar pada awan</i>.

Ungkapan <i>hambatan udaranya sangat besar pada awan</i> pada kalimat (9) dapat disempurnakan menjadi ...`,
        options: [
            { letter: 'A', text: 'awan mendapat hambatan udara yang sangat besar' },
            { letter: 'B', text: 'udara yang sangat besar menghambat awan' },
            { letter: 'C', text: 'besarnya udara mendapat hambatan dari awan' },
            { letter: 'D', text: 'dari awan udara mendapat hambatan yang sangat besar' },
            { letter: 'E', text: 'yang sangat besar adalah hambatan udara' }
        ]
    },
    // SOAL 15
    {
        id: 15,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 13 sampai 16
(1) Awan terbentuk dari kristal udara dan air yang seharusnya lebih padat daripada udara. (2) Namun, awan terlihat <i>melayang bebas, mengapung tinggi, dan perlawanan gravitasi</i>. (3) Mengapa awan tidak jatuh? (4) Hal itu terjadi karena awan tersebut tenggelam di dalam udara sekitarnya. (5) Hanya saja awan tersebut tenggelam dengan kecepatan yang sangat lambat sehingga terlihat mengapung.
(6) Galileo galilei, jauh sebelum abad ke-16 menjelaskan bahwa semua benda jatuh bebas dengan kecepatan yang sama terlepas dari massanya. (7) Gaya gravitasi yang mendorong benda ke bawah dan memaksanya jatuh ke permukaan bumi. (8) Sebaliknya, penerjun payung dapat mendarat dengan aman karena parasut mendistribusikan massa ke area permukaan yang luas. (9) Karena tersebar di area yang luas, hambatan udaranya sangat besar pada awan.

Frasa <i>melayang bebas, mengapung tinggi, dan perlawanan gravitasi</i> pada kalimat (2) dapat diperbaiki menjadi ...`,
        options: [
            { letter: 'A', text: 'kata gravitasi seharusnya bergravitasi' },
            { letter: 'B', text: 'kata tinggi seharusnya ketinggian' },
            { letter: 'C', text: 'kata mengapung seharusnya terapung' },
            { letter: 'D', text: 'kata perlawanan seharusnya melawan' },
            { letter: 'E', text: 'kata melayang seharusnya layangan' }
        ]
    },
    // SOAL 16
    {
        id: 16,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 13 sampai 16
(1) Awan terbentuk dari kristal udara dan air yang seharusnya lebih padat daripada udara. (2) Namun, awan terlihat melayang bebas, mengapung tinggi, dan perlawanan gravitasi. (3) Mengapa awan tidak jatuh? (4) Hal itu terjadi karena awan tersebut tenggelam di dalam udara sekitarnya. (5) Hanya saja awan tersebut tenggelam dengan kecepatan yang sangat lambat sehingga terlihat mengapung.
(6) Galileo galilei, jauh sebelum abad ke-16 menjelaskan bahwa semua benda jatuh bebas dengan kecepatan yang sama terlepas dari massanya. (7) Gaya gravitasi yang mendorong benda ke bawah dan memaksanya jatuh ke permukaan bumi. (8) Sebaliknya, penerjun payung dapat mendarat dengan aman karena parasut mendistribusikan massa ke area permukaan yang luas. (9) Karena tersebar di area yang luas, hambatan udaranya sangat besar pada awan.

Kalimat yang tidak logis dalam bacaan di atas adalah ...`,
        options: [
            { letter: 'A', text: 'Kalimat (1)' },
            { letter: 'B', text: 'Kalimat (3)' },
            { letter: 'C', text: 'Kalimat (4)' },
            { letter: 'D', text: 'Kalimat (7)' },
            { letter: 'E', text: 'Kalimat (8)' }
        ]
    },
    // SOAL 17
    {
        id: 17,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 17 sampai 19
(1) Upaya penanaman lahan kering dengan tanaman hijau sangat menantang karena berhadapan dengan tiga masalah, yaitu kekurangan air, tanah yang tandus, dan perubahan iklim. (2) Tanah kurang air, layaknya spons yang haus, kesulitan menyerap dan menyimpan kelembapan. (3) Hal tersebut membuat vegetasi sulit bertahan hidup. (4) Kekurangan air bahkan dapat menghambat pertumbuhan akar sehingga mencegah tanaman untuk mencengkram tanah dengan kuat. (5) Selain itu, kondisi tanah yang miskin unsur hara makin memperburuk keadaan. (6) Tanah kering sering kekurangan nutrisi penting yang dibutuhkan tanaman untuk tumbuh. (7) Masalah lain yang dapat mengganjal upaya penghijauan adalah perubahan iklim. (8) Curah hujan yang tidak menentu dan kekeringan yang berkepanjangan menghambat tanaman untuk bertahan hidup di bawah kondisi yang tidak menguntungkan.

Kalimat "<i>Rumah mungil tempat ibu pernah tinggal bersama adik perempuannya itu milik negara</i>" memiliki pola kalimat yang sama dengan kalimat ...`,
        options: [
            { letter: 'A', text: '(1)' },
            { letter: 'B', text: '(3)' },
            { letter: 'C', text: '(4)' },
            { letter: 'D', text: '(7)' },
            { letter: 'E', text: '(8)' }
        ]
    },
    // SOAL 18
    {
        id: 18,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 17 sampai 19
(1) Upaya penanaman lahan kering dengan tanaman hijau sangat menantang karena berhadapan dengan tiga masalah, yaitu kekurangan air, tanah yang tandus, dan perubahan iklim. (2) Tanah kurang air, layaknya spons yang haus, kesulitan menyerap dan menyimpan kelembapan. (3) Hal tersebut membuat vegetasi sulit bertahan hidup. (4) Kekurangan air bahkan dapat menghambat pertumbuhan akar sehingga mencegah tanaman untuk mencengkram tanah dengan kuat. (5) Selain itu, kondisi tanah yang miskin unsur hara makin memperburuk keadaan. (6) Tanah kering sering kekurangan nutrisi penting yang dibutuhkan tanaman untuk tumbuh. (7) Masalah lain yang dapat mengganjal upaya penghijauan adalah perubahan iklim. (8) Curah hujan yang tidak menentu dan kekeringan yang berkepanjangan menghambat tanaman untuk bertahan hidup di bawah kondisi yang tidak menguntungkan.

Tujuan penggunaan kata dapat pada kalimat (4) adalah ...`,
        options: [
            { letter: 'A', text: 'Mewajibkan' },
            { letter: 'B', text: 'Memungkinkan' },
            { letter: 'C', text: 'Membolehkan' },
            { letter: 'D', text: 'Memastikan' },
            { letter: 'E', text: 'Menganjurkan' }
        ]
    },
    // SOAL 19
    {
        id: 19,
        type: 'multiple-choice',
        text: `Bacalah informasi berikut untuk nomor 17 sampai 19
(1) Upaya penanaman lahan kering dengan tanaman hijau sangat menantang karena berhadapan dengan tiga masalah, yaitu kekurangan air, tanah yang tandus, dan perubahan iklim. (2) Tanah kurang air, layaknya spons yang haus, kesulitan menyerap dan menyimpan kelembapan. (3) Hal tersebut membuat vegetasi sulit bertahan hidup. (4) Kekurangan air bahkan dapat menghambat pertumbuhan akar sehingga mencegah tanaman untuk mencengkram tanah dengan kuat. (5) Selain itu, kondisi tanah yang miskin unsur hara makin memperburuk keadaan. (6) Tanah kering sering kekurangan nutrisi penting yang dibutuhkan tanaman untuk tumbuh. (7) Masalah lain yang dapat mengganjal upaya penghijauan adalah perubahan iklim. (8) Curah hujan yang tidak menentu dan kekeringan yang berkepanjangan menghambat tanaman untuk bertahan hidup di bawah kondisi yang tidak menguntungkan.

Pandangan penulis terhadap penanaman lahan kering adalah ...`,
        options: [
            { letter: 'A', text: 'cukup khawatir' },
            { letter: 'B', text: 'cenderung apatis' },
            { letter: 'C', text: 'sangat menentang' },
            { letter: 'D', text: 'terlalu pesimis' },
            { letter: 'E', text: 'tidak berpihak' }
        ]
    },
    // SOAL 20
    {
        id: 20,
        type: 'multiple-choice',
        text: `Truk mengangkut brangkas "Tabila lam cenai mbos"
Kereta menarik gerbong "Grosean noy seano ndosh"
Brangkas ditarik kereta "Tabila ndosh noy seano noy"

Bagaimana mengatakan "Gerbong diangkut truk" dengan bahasa tersebut?`,
        options: [
            { letter: 'A', text: 'Grosean mbosh lam cenai lam' },
            { letter: 'B', text: 'Grosean ndosh lam cenai lam' },
            { letter: 'C', text: 'Tabila mbosh lam cenai lam' },
            { letter: 'D', text: 'Tabila ndosh lam cenai lam' },
            { letter: 'E', text: 'Seano mbosh noy seano noy' }
        ]
    }
];