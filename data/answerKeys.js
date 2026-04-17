// ==================== KUNCI JAWABAN PER SUBTEST ====================
// Format: answerKeys[subtestIndex][soalIndex] = jawaban_benar

const answerKeys = {
    // SUBTEST 1: Kemampuan Penalaran Umum (30 soal)
    0: {
        0: 'D',    // soal 1
        1: 'C',    // soal 2
        2: 'A',    // soal 3
        3: 'B',    // soal 4
        4: 'A',    // soal 5
        5: 'E',    // soal 6
        6: 'E',    // soal 7
        7: 'B',    // soal 8
        8: 'C',     // soal 9
        9: 'D',    // soal 10
        10: 'E',   // soal 11
        11: 'A',    // soal 12
        12: 'E',   // soal 13
        13: 'E',   // soal 14
        14: 'A',   // soal 15
        15: 'A',   // soal 16
        16: 'B',   // soal 17
        17: 'D',   // soal 18
        18: 'E',   // soal 19
        19: 'D',   // soal 20
        20: 'B',   // soal 21
        21: 'C',   // soal 22
        22: 'B',   // soal 23
        23: 'B',   // soal 24
        24: 'B',   // soal 25
        25: 'E',   // soal 26
        26: 'D',   // soal 27
        27: 'B',   // soal 28
        28: 'C',   // soal 29
        29: 'E'    // soal 30
    },

    // SUBTEST 2: Pengetahuan dan Pemahaman Umum (20 soal)
    1: {
        0: 'A',    // soal 1
        1: 'C',    // soal 2
        2: 'D',    // soal 3
        3: 'A',    // soal 4
        4: 'C',    // soal 5
        5: 'A',    // soal 6
        6: 'E',    // soal 7
        7: 'E',    // soal 8
        8: 'C',    // soal 9
        9: 'B',    // soal 10
        10: 'E',   // soal 11
        11: 'C',   // soal 12
        12: 'E',   // soal 13
        13: 'A',   // soal 14
        14: 'D',   // soal 15
        15: 'D',   // soal 16
        16: 'D',   // soal 17
        17: 'B',   // soal 18
        18: 'A',   // soal 19
        19: 'A'    // soal 20
    },

    // SUBTEST 3: Kemampuan Memahami Bacaan dan Menulis (20 soal)
    2: {
        0: 'B',    // soal 1
        1: 'D',    // soal 2
        2: 'B',    // soal 3
        3: 'C',    // soal 4
        4: 'C',    // soal 5
        5: 'A',    // soal 6
        6: 'D',    // soal 7
        7: 'B',    // soal 8
        8: 'E',    // soal 9
        9: 'B',    // soal 10
        10: 'D',   // soal 11
        11: 'A',   // soal 12
        12: 'E',   // soal 13
        13: 'E',   // soal 14
        14: 'D',   // soal 15
        15: 'E',   // soal 16
        16: 'A',   // soal 17
        17: 'C',   // soal 18
        18: 'B',   // soal 19
        19: 'C'    // soal 20
    },

    // SUBTEST 4: Pengetahuan Kuantitatif (20 soal)
    3: {
        0: '13',    // soal 1 (isian angka)
        1: '7',     // soal 2 (isian angka)
        2: '16',    // soal 3
        3: 'D',     // soal 4
        4: 'B',     // soal 5
        5: 'D',     // soal 6
        6: 'C',     // soal 7
        7: 'A',     // soal 8
        8: 'B',     // soal 9
        9: 'D',     // soal 10
        10: 'A',    // soal 11
        11: 'B',    // soal 12
        12: 'A',    // soal 13
        13: 'D',    // soal 14
        14: 'C',    // soal 15
        15: 'C',    // soal 16
        16: 'A',    // soal 17
        17: '95',   // soal 18 (isian angka)
        18: 'C',    // soal 19
        19: 'C'     // soal 20
    },

    // SUBTEST 5: Literasi Bahasa Indonesia (20 soal)
    4: {
        0: 'A',    // soal 1
        1: 'E',    // soal 2
        2: 'B',    // soal 3
        3: 'B',    // soal 4
        4: 'A',    // soal 5
        5: 'A',    // soal 6
        6: 'A',    // soal 7
        7: 'A',    // soal 8
        8: 'C',    // soal 9
        9: 'B',    // soal 10
        10: 'C',   // soal 11
        11: 'B',   // soal 12
        12: 'B',   // soal 13
        13: 'C',   // soal 14
        14: 'E',   // soal 15
        15: 'B',   // soal 16
        16: 'A',   // soal 17
        17: 'D',   // soal 18
        18: 'E',   // soal 19
        19: 'A'    // soal 20
    },

    // SUBTEST 6: Literasi Bahasa Inggris (20 soal)
    5: {
        0: 'D',    // soal 1
        1: 'C',    // soal 2
        2: 'C',    // soal 3
        3: 'C',    // soal 4
        4: 'E',    // soal 5
        5: 'B',    // soal 6
        6: 'A',    // soal 7
        7: 'C',    // soal 8
        8: 'E',    // soal 9
        9: 'C',    // soal 10
        10: 'B',   // soal 11
        11: 'D',   // soal 12
        12: 'D',   // soal 13
        13: 'A',   // soal 14
        14: 'E',   // soal 15
        15: 'D',   // soal 16
        16: 'B',   // soal 17
        17: 'B',   // soal 18
        18: 'A',   // soal 19
        19: 'C'    // soal 20
    },

    // SUBTEST 7: Penalaran Matematika (20 soal)
    6: {
        0: 'A',    // soal 1
        1: 'C',    // soal 2
        2: 'C',    // soal 3
        3: 'D',    // soal 4
        4: 'C',    // soal 5
        // Soal 6 (indeks 5) adalah true-false, tidak perlu di answerKeys
        6: 'A',    // soal 7
        7: 'C',    // soal 8
        8: 'A',    // soal 9
        9: 'B',    // soal 10
        10: 'E',   // soal 11
        11: 'C',   // soal 12
        12: 'E',   // soal 13
        // Soal 14 (indeks 13) adalah true-false, tidak perlu di answerKeys
        14: 'C',   // soal 15
        15: 'D',   // soal 16
        16: 'C',   // soal 17
        17: 'A',   // soal 18
        18: 'A',   // soal 19
        19: 'E'    // soal 20
    }
};

// ==================== KUNCI JAWABAN TRUE-FALSE ====================
const trueFalseKeys = {
    // Subtest 7, soal 6 (indeks 5) - dengan 3 pernyataan
    '6_5': {
        0: true,   // pernyataan 1: Benar
        1: false,  // pernyataan 2: Salah
        2: true    // pernyataan 3: Benar
    },
    // Subtest 7, soal 14 (indeks 13) - dengan 3 pernyataan
    '6_13': {
        0: true,   // pernyataan 1: Benar
        1: true,   // pernyataan 2: Benar
        2: false   // pernyataan 3: Salah
    }
};