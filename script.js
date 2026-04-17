// ==================== DATA SUBTEST ====================
const subtests = [
    { id: 1, name: "Kemampuan Penalaran Umum", shortName: "Penalaran Umum", totalQuestions: 30, timeMinutes: 30 },
    { id: 2, name: "Pengetahuan dan Pemahaman Umum", shortName: "Pengetahuan Umum", totalQuestions: 20, timeMinutes: 15 },
    { id: 3, name: "Kemampuan Memahami Bacaan dan Menulis", shortName: "Bacaan & Menulis", totalQuestions: 20, timeMinutes: 25 },
    { id: 4, name: "Pengetahuan Kuantitatif", shortName: "Kuantitatif", totalQuestions: 20, timeMinutes: 20 },
    { id: 5, name: "Literasi dalam Bahasa Indonesia", shortName: "Literasi Indonesia", totalQuestions: 30, timeMinutes: 42.5 },
    { id: 6, name: "Literasi dalam Bahasa Inggris", shortName: "Literasi Inggris", totalQuestions: 20, timeMinutes: 20 },
    { id: 7, name: "Penalaran Matematika", shortName: "Penalaran Matematika", totalQuestions: 20, timeMinutes: 42.5 }
];

// ==================== DATA SISWA DAN KODE AKSES ====================
const studentData = [
    { name: "Xavier", code: "UTBKSMARRT#1" },
    { name: "Livia", code: "UTBKSMARRT#2" },
    { name: "Samuel", code: "UTBKSMARRT#3" },
    { name: "Moniq", code: "UTBKSMARRT#4" }
];

// Untuk menyimpan kode yang sudah digunakan (agar tidak bisa dipakai ulang)
let usedCodes = [];

// Fungsi untuk memverifikasi nama dan kode
function verifyStudentAccess(name, code) {
    // Cari siswa dengan nama yang cocok (case insensitive)
    const student = studentData.find(s => s.name.toLowerCase() === name.toLowerCase());
    
    if (!student) {
        return { valid: false, message: `❌ Nama "${name}" tidak terdaftar sebagai peserta tryout!` };
    }
    
    if (student.code !== code) {
        return { valid: false, message: `❌ Kode akses untuk ${student.name} salah!` };
    }
    
    // Cek apakah kode sudah digunakan
    if (usedCodes.includes(code)) {
        return { valid: false, message: `⚠️ Kode akses untuk ${student.name} sudah digunakan! Setiap siswa hanya bisa mencoba sekali.` };
    }
    
    return { valid: true, message: `✅ Selamat datang, ${student.name}!` };
}

// ==================== DATA STATE ====================
let state = {
    participantName: '',
    currentSubtest: 0,
    currentQuestion: 0,
    answers: {},
    timeRemaining: 0,
    timerInterval: null,
    questions: []
};

// ==================== MEMBACA SOAL DARI FILE TERPISAH ====================
function getQuestions(subtestIndex) {
    // Cek apakah data allQuestions tersedia (dari index.js)
    if (typeof allQuestions !== 'undefined' && allQuestions[subtestIndex]) {
        const questions = allQuestions[subtestIndex];
        console.log(`Memuat ${questions.length} soal untuk subtest ${subtestIndex + 1}`);
        return questions;
    }
    
    // Jika tidak ada data, buat soal contoh otomatis
    console.warn(`Data soal untuk subtest ${subtestIndex + 1} tidak ditemukan, menggunakan soal contoh`);
    return generateSampleQuestions(subtestIndex);
}

// Fungsi cadangan untuk membuat soal contoh
function generateSampleQuestions(subtestIndex) {
    const subtest = subtests[subtestIndex];
    const totalQuestions = subtest.totalQuestions;
    const questions = [];
    
    for (let i = 1; i <= totalQuestions; i++) {
        questions.push({
            id: i,
            type: 'multiple-choice',
            text: `[SOAL SEMENTARA] Subtest ${subtestIndex + 1} - Soal nomor ${i}. Silakan ganti dengan soal sesungguhnya di file data/subtest${subtestIndex + 1}.js`,
            options: [
                { letter: 'A', text: 'Pilihan A' },
                { letter: 'B', text: 'Pilihan B' },
                { letter: 'C', text: 'Pilihan C' },
                { letter: 'D', text: 'Pilihan D' },
                { letter: 'E', text: 'Pilihan E' }
            ]
        });
    }
    return questions;
}

// ==================== INISIALISASI SUBTEST ====================
function initializeSubtest(subtestIndex) {
    const subtest = subtests[subtestIndex];
    state.currentSubtest = subtestIndex;
    state.currentQuestion = 0;
    state.timeRemaining = subtest.timeMinutes * 60;
    state.questions = getQuestions(subtestIndex);
    
    if (!state.answers[subtestIndex]) {
        state.answers[subtestIndex] = {};
    }
}

// ==================== FUNGSI NAVIGASI HALAMAN ====================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function startTryout() {
    const nameInput = document.getElementById('nama-peserta');
    const codeInput = document.getElementById('kode-akses');
    const name = nameInput.value.trim();
    const code = codeInput.value.trim();
    
    // Validasi nama tidak boleh kosong
    if (!name) {
        alert('❌ Mohon masukkan nama peserta terlebih dahulu!');
        nameInput.focus();
        return;
    }
    
    // Validasi kode tidak boleh kosong
    if (!code) {
        alert('❌ Mohon masukkan kode akses tryout!');
        codeInput.focus();
        return;
    }
    
    // Verifikasi nama dan kode
    const verification = verifyStudentAccess(name, code);
    
    if (!verification.valid) {
        alert(verification.message);
        codeInput.value = '';
        codeInput.focus();
        return;
    }
    
    // Tandai kode sebagai sudah digunakan
    usedCodes.push(code);
    
    // Simpan data ke state
    state.participantName = name;
    state.accessCode = code;
    state.answers = {};
    
    // Tampilkan pesan sukses sebentar
    alert(verification.message + '\n\n🚀 Tryout akan segera dimulai!');
    
    // Mulai tryout
    initializeSubtest(0);
    showPage('tryout-page');
    updateTryoutUI();
    startTimer();
}

// ==================== TIMER ====================
function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    
    updateTimerDisplay();
    
    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();
        
        if (state.timeRemaining <= 0) {
            clearInterval(state.timerInterval);
            autoNextSubtest();
        }
    }, 1000);
}

// Fungsi untuk otomatis pindah ke subtest berikutnya dengan transisi 3 detik
function autoNextSubtest() {
    // Hentikan timer
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }
    
    // Tampilkan modal notifikasi waktu habis
    const modal = document.getElementById('timeout-modal');
    const modalMessage = modal.querySelector('p');
    modalMessage.innerHTML = 'Akan berpindah ke subtest berikutnya dalam <span id="countdown">3</span> detik...';
    modal.classList.add('active');
    
    // Hitung mundur 3 detik
    let countdown = 3;
    const countdownElement = document.getElementById('countdown');
    
    const countdownInterval = setInterval(() => {
        countdown--;
        if (countdownElement) {
            countdownElement.textContent = countdown;
        }
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            modal.classList.remove('active');
            
            // Pindah ke subtest berikutnya
            if (state.currentSubtest < subtests.length - 1) {
                initializeSubtest(state.currentSubtest + 1);
                updateTryoutUI();
                startTimer();
            } else {
                showResultPage();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timeRemaining / 60);
    const seconds = state.timeRemaining % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const timerElement = document.getElementById('time-display');
    const timerContainer = document.getElementById('timer');
    
    timerElement.textContent = display;
    
    timerContainer.classList.remove('warning', 'danger');
    if (state.timeRemaining <= 60) timerContainer.classList.add('danger');
    else if (state.timeRemaining <= 300) timerContainer.classList.add('warning');
}

// ==================== UPDATE TAMPILAN ====================
function updateTryoutUI() {
    const subtest = subtests[state.currentSubtest];
    const question = state.questions[state.currentQuestion];
    
    document.getElementById('subtest-title').textContent = `Subtest ${subtest.id}: ${subtest.name}`;
    document.getElementById('participant-name').textContent = state.participantName;
    document.getElementById('question-number').textContent = `Soal ${state.currentQuestion + 1} dari ${subtest.totalQuestions}`;
    
    const typeLabels = { 'multiple-choice': 'Pilihan Ganda', 'true-false': 'Benar/Salah', 'short-answer': 'Isian Singkat' };
    document.getElementById('question-type').textContent = typeLabels[question.type];
    document.getElementById('question-content').innerHTML = question.text.replace(/\n/g, '<br>');
    
    renderAnswerSection(question);
    renderQuestionGrid();
}

function renderAnswerSection(question) {
    const container = document.getElementById('answer-section');
    const currentAnswer = state.answers[state.currentSubtest]?.[state.currentQuestion];
    
    if (question.type === 'multiple-choice') {
        container.innerHTML = question.options.map(opt => `
            <div class="option ${currentAnswer === opt.letter ? 'selected' : ''}" onclick="selectOption('${opt.letter}')">
                <span class="option-letter">${opt.letter}</span>
                <span class="option-text">${opt.text}</span>
            </div>
        `).join('');
    } else if (question.type === 'true-false') {
    const answers = currentAnswer || {};
    container.innerHTML = `
        <div class="checkbox-group">
            ${question.statements.map(stmt => `
                <div class="checkbox-item">
                    <label><strong>${stmt.id}.</strong> ${stmt.text}</label>
                    <div class="checkbox-options">
                        <button class="checkbox-btn ${answers[stmt.id] === true ? 'selected-true' : ''}" 
                                onclick="selectTrueFalse(${stmt.id}, true)">
                            ✅ Benar
                        </button>
                        <button class="checkbox-btn ${answers[stmt.id] === false ? 'selected-false' : ''}" 
                                onclick="selectTrueFalse(${stmt.id}, false)">
                            ❌ Salah
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    } else {
        container.innerHTML = `<input type="number" class="short-answer-input" placeholder="${question.placeholder}" value="${currentAnswer || ''}" onchange="saveShortAnswer(this.value)">`;
    }
}

function renderQuestionGrid() {
    const grid = document.getElementById('question-grid');
    const subtest = subtests[state.currentSubtest];
    const answers = state.answers[state.currentSubtest] || {};
    
    let html = '';
    for (let i = 0; i < subtest.totalQuestions; i++) {
        const isAnswered = answers[i] !== undefined && answers[i] !== '' && answers[i] !== null;
        const isCurrent = i === state.currentQuestion;
        let classes = 'question-btn';
        if (isAnswered) classes += ' answered';
        if (isCurrent) classes += ' current';
        html += `<button class="${classes}" onclick="goToQuestion(${i})">${i + 1}</button>`;
    }
    grid.innerHTML = html;
}

// ==================== MENYIMPAN JAWABAN ====================
function selectOption(letter) {
    if (!state.answers[state.currentSubtest]) state.answers[state.currentSubtest] = {};
    state.answers[state.currentSubtest][state.currentQuestion] = letter;
    updateTryoutUI();
}

function selectTrueFalse(statementId, value) {
    // Inisialisasi struktur data jika belum ada
    if (!state.answers[state.currentSubtest]) {
        state.answers[state.currentSubtest] = {};
    }
    if (!state.answers[state.currentSubtest][state.currentQuestion]) {
        state.answers[state.currentSubtest][state.currentQuestion] = {};
    }
    
    // Simpan jawaban
    state.answers[state.currentSubtest][state.currentQuestion][statementId] = value;
    
    // LANGSUNG UPDATE TAMPILAN (tanpa reload seluruh halaman)
    const question = state.questions[state.currentQuestion];
    const currentAnswer = state.answers[state.currentSubtest][state.currentQuestion];
    
    // Update tampilan tombol Benar/Salah secara langsung
    for (let stmt of question.statements) {
        const trueBtn = document.querySelector(`.checkbox-btn[onclick="selectTrueFalse(${stmt.id}, true)"]`);
        const falseBtn = document.querySelector(`.checkbox-btn[onclick="selectTrueFalse(${stmt.id}, false)"]`);
        
        if (trueBtn && falseBtn) {
            // Hapus class selected dari kedua tombol
            trueBtn.classList.remove('selected-true');
            falseBtn.classList.remove('selected-false');
            
            // Tambahkan class ke tombol yang dipilih
            if (currentAnswer[stmt.id] === true) {
                trueBtn.classList.add('selected-true');
            } else if (currentAnswer[stmt.id] === false) {
                falseBtn.classList.add('selected-false');
            }
        }
    }
    
    // Update navigasi soal (ubah warna jadi hijau)
    renderQuestionGrid();
}

function saveShortAnswer(value) {
    if (!state.answers[state.currentSubtest]) state.answers[state.currentSubtest] = {};
    state.answers[state.currentSubtest][state.currentQuestion] = value;
    renderQuestionGrid();
}

// ==================== NAVIGASI SOAL ====================
function prevQuestion() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        updateTryoutUI();
    }
}

function nextQuestion() {
    const subtest = subtests[state.currentSubtest];
    if (state.currentQuestion < subtest.totalQuestions - 1) {
        state.currentQuestion++;
        updateTryoutUI();
    }
}

function goToQuestion(index) {
    state.currentQuestion = index;
    updateTryoutUI();
}

// ==================== SELESAI SUBTEST ====================
function finishSubtest() {
    const subtest = subtests[state.currentSubtest];
    const answers = state.answers[state.currentSubtest] || {};
    const answeredCount = Object.keys(answers).filter(key => {
        const ans = answers[key];
        if (typeof ans === 'object') return Object.keys(ans).length > 0;
        return ans !== undefined && ans !== '' && ans !== null;
    }).length;
    
    const unanswered = subtest.totalQuestions - answeredCount;
    
    document.getElementById('modal-message').textContent = 'Apakah Anda yakin ingin menyelesaikan subtest ini?';
    if (unanswered > 0) document.getElementById('modal-warning').textContent = `Masih ada ${unanswered} soal yang belum dijawab!`;
    else document.getElementById('modal-warning').textContent = '';
    
    document.getElementById('confirm-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('confirm-modal').classList.remove('active');
}

function confirmFinish() {
    closeModal();
    clearInterval(state.timerInterval);
    // Langsung pindah ke subtest berikutnya (sama seperti timer habis)
    autoNextSubtest();
}

function showTransitionPage() {
    const subtest = subtests[state.currentSubtest];
    const answers = state.answers[state.currentSubtest] || {};
    const answeredCount = Object.keys(answers).filter(key => {
        const ans = answers[key];
        if (typeof ans === 'object') return Object.keys(ans).length > 0;
        return ans !== undefined && ans !== '' && ans !== null;
    }).length;
    
    document.getElementById('completed-subtest').textContent = `Subtest ${subtest.id}: ${subtest.shortName} Selesai!`;
    document.getElementById('answered-count').textContent = answeredCount;
    document.getElementById('total-questions').textContent = subtest.totalQuestions;
    
    const nextSubtestInfo = document.getElementById('next-subtest-info');
    if (state.currentSubtest < subtests.length - 1) {
        const nextSubtest = subtests[state.currentSubtest + 1];
        nextSubtestInfo.style.display = 'block';
        document.getElementById('next-subtest-name').textContent = nextSubtest.name;
        document.getElementById('next-subtest-detail').textContent = `${nextSubtest.totalQuestions} soal • ${nextSubtest.timeMinutes} menit`;
        document.querySelector('#transition-page .btn-start').textContent = 'Lanjut ke Subtest Berikutnya →';
    } else {
        nextSubtestInfo.style.display = 'none';
        document.querySelector('#transition-page .btn-start').textContent = 'Lihat Hasil Tryout 🎉';
    }
    
    showPage('transition-page');
}

function startNextSubtest() {
    if (state.currentSubtest < subtests.length - 1) {
        initializeSubtest(state.currentSubtest + 1);
        showPage('tryout-page');
        updateTryoutUI();
        startTimer();
    } else {
        showResultPage();
    }
}

function timeoutContinue() {
    // Tutup modal dan langsung pindah (skip countdown)
    const modal = document.getElementById('timeout-modal');
    modal.classList.remove('active');
    
    // Langsung pindah ke subtest berikutnya
    if (state.currentSubtest < subtests.length - 1) {
        initializeSubtest(state.currentSubtest + 1);
        updateTryoutUI();
        startTimer();
    } else {
        showResultPage();
    }
}

function showResultPage() {
    document.getElementById('result-name').textContent = state.participantName;
    
    const resultGrid = document.getElementById('result-grid');
    let html = '';
    let totalCorrectAll = 0;
    let totalPointsAll = 0;
    let totalQuestionsAll = 0;
    let totalAnsweredAll = 0;
    
    subtests.forEach((subtest, index) => {
        // Dapatkan detail jawaban untuk subtest ini
        const detail = getSubtestDetail(index);
        const correctCount = detail.correct;
        const wrongCount = detail.wrong;
        const emptyCount = detail.empty;
        const totalPoints = detail.totalPoints;
        const totalQuestions = subtest.totalQuestions;
        
        totalCorrectAll += correctCount;
        totalPointsAll += totalPoints;
        totalQuestionsAll += totalQuestions;
        totalAnsweredAll += (correctCount + wrongCount);
        
        // Hitung skor subtest (0-1000)
        const subtestScore = totalPoints > 0 ? Math.round((correctCount / totalPoints) * 1000) : 0;
        
        // Tentukan warna untuk skor
        let scoreColor = '#ffc107';
        if (subtestScore >= 800) scoreColor = '#28a745';
        else if (subtestScore >= 600) scoreColor = '#ffc107';
        else scoreColor = '#dc3545';
        
        html += `
            <div class="result-item" style="flex-direction: column; align-items: flex-start; gap: 10px;">
                <div style="display: flex; justify-content: space-between; width: 100%;">
                    <div class="result-item-name" style="font-weight: bold; font-size: 1.1em;">
                        ${subtest.id}. ${subtest.name}
                    </div>
                    <div class="result-item-score">
                        <span style="font-size: 1.5em; font-weight: bold; color: ${scoreColor};">${subtestScore}</span>
                        <span style="font-size: 0.9em;">/ 1000</span>
                    </div>
                </div>
                <div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 0.9em;">
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <span style="display: inline-block; width: 12px; height: 12px; background: #28a745; border-radius: 3px;"></span>
                        <span>Benar: <strong>${correctCount}</strong></span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <span style="display: inline-block; width: 12px; height: 12px; background: #dc3545; border-radius: 3px;"></span>
                        <span>Salah: <strong>${wrongCount}</strong></span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <span style="display: inline-block; width: 12px; height: 12px; background: #6c757d; border-radius: 3px;"></span>
                        <span>Kosong: <strong>${emptyCount}</strong></span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <span style="display: inline-block; width: 12px; height: 12px; background: #9b4dff; border-radius: 3px;"></span>
                        <span>Total Poin: <strong>${correctCount}/${totalPoints}</strong></span>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Hitung skor akhir (0-1000)
    const finalScore = totalPointsAll > 0 ? Math.round((totalCorrectAll / totalPointsAll) * 1000) : 0;
    
    // Tentukan warna untuk skor akhir
    let finalScoreColor = '#ffc107';
    if (finalScore >= 800) finalScoreColor = '#28a745';
    else if (finalScore >= 600) finalScoreColor = '#ffc107';
    else finalScoreColor = '#dc3545';
    
    resultGrid.innerHTML = `
        <div class="result-total" style="background: linear-gradient(90deg, rgba(123,44,191,0.3), rgba(155,77,255,0.3)); padding: 20px; border-radius: 15px; margin-bottom: 20px; text-align: center;">
            <h3>🎯 SKOR AKHIR</h3>
            <p style="font-size: 3em; margin: 10px 0; font-weight: bold; color: ${finalScoreColor};">${finalScore}</p>
            <p style="font-size: 1.2em;">dari 1000</p>
            <div style="display: flex; justify-content: center; gap: 30px; margin-top: 15px; flex-wrap: wrap;">
                <div>✅ Benar: <strong>${totalCorrectAll}</strong> poin</div>
                <div>📊 Total Poin: <strong>${totalPointsAll}</strong></div>
                <div>📝 Soal Dijawab: <strong>${totalAnsweredAll}</strong> dari <strong>${totalQuestionsAll}</strong></div>
            </div>
        </div>
        ${html}
    `;
    
    saveStudentAnswers();
    showPage('result-page');
}

// Fungsi untuk menyimpan jawaban detail siswa
function saveStudentAnswers() {
    const studentData = {
        name: state.participantName,
        code: state.accessCode,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString('id-ID'),
        answers: state.answers,
        scores: {},
        detailedScores: {}
    };
    
    // Hitung skor per subtest dengan poin
    for (let i = 0; i < subtests.length; i++) {
        const scoreData = calculateSubtestScore(i);
        studentData.scores[i] = {
            subtestName: subtests[i].name,
            correctPoints: scoreData.correct,
            totalPoints: scoreData.total,
            score1000: Math.round((scoreData.correct / scoreData.total) * 1000)
        };
    }
    
    let allResults = JSON.parse(localStorage.getItem('tryout_results') || '[]');
    const existingIndex = allResults.findIndex(r => r.code === state.accessCode);
    if (existingIndex !== -1) {
        allResults[existingIndex] = studentData;
    } else {
        allResults.push(studentData);
    }
    
    localStorage.setItem('tryout_results', JSON.stringify(allResults));
    console.log("✅ Jawaban siswa telah disimpan:", studentData.name);
}

function restartTryout() {
    state = {
        participantName: '',
        currentSubtest: 0,
        currentQuestion: 0,
        answers: {},
        timeRemaining: 0,
        timerInterval: null,
        questions: []
    };
    document.getElementById('nama-peserta').value = '';
    showPage('home-page');
}

// ==================== FUNGSI KOREKSI JAWABAN ====================

// Fungsi untuk mengecek jawaban benar (untuk multiple choice dan isian)
function isAnswerCorrect(subtestIndex, questionIndex, userAnswer) {
    const key = answerKeys[subtestIndex];
    if (!key) return false;
    
    const correctAnswer = key[questionIndex];
    if (!correctAnswer) return false;
    
    // Untuk multiple choice (huruf)
    if (typeof userAnswer === 'string' && userAnswer.length === 1) {
        return userAnswer.toUpperCase() === correctAnswer.toUpperCase();
    }
    
    // Untuk isian singkat (angka)
    if (typeof userAnswer === 'string' || typeof userAnswer === 'number') {
        return String(userAnswer).trim() === String(correctAnswer).trim();
    }
    
    return false;
}

// Fungsi untuk mengecek jawaban true-false
function isTrueFalseCorrect(subtestIndex, questionIndex, userAnswers) {
    const key = trueFalseKeys[`${subtestIndex}_${questionIndex}`];
    if (!key) return false;
    
    let correctCount = 0;
    let totalStatements = Object.keys(key).length;
    
    for (let stmtId in key) {
        if (userAnswers[stmtId] === key[stmtId]) {
            correctCount++;
        }
    }
    
    return { correct: correctCount, total: totalStatements };
}

// Fungsi menghitung skor per subtest (dengan bobot pernyataan true-false)
function calculateSubtestScore(subtestIndex) {
    const answers = state.answers[subtestIndex] || {};
    const subtest = subtests[subtestIndex];
    let correctPoints = 0;
    let totalPoints = 0;
    
    // Dapatkan data soal untuk mengetahui tipe setiap soal
    const questionsData = (typeof allQuestions !== 'undefined') ? allQuestions[subtestIndex] : null;
    
    for (let i = 0; i < subtest.totalQuestions; i++) {
        const userAnswer = answers[i];
        if (userAnswer === undefined || userAnswer === null) continue;
        
        // Cek tipe soal dari questionsData
        let isTrueFalseType = false;
        let statementsCount = 0;
        
        if (questionsData && questionsData[i]) {
            if (questionsData[i].type === 'true-false') {
                isTrueFalseType = true;
                statementsCount = questionsData[i].statements ? questionsData[i].statements.length : 0;
            }
        }
        
        if (isTrueFalseType) {
            // Untuk tipe true-false: setiap pernyataan bernilai 1 poin
            const key = trueFalseKeys[`${subtestIndex}_${i}`];
            if (key && typeof userAnswer === 'object') {
                for (let stmtId in key) {
                    totalPoints++; // Tambah bobot 1 untuk setiap pernyataan
                    if (userAnswer[stmtId] === key[stmtId]) {
                        correctPoints++;
                    }
                }
            }
        } else {
            // Untuk multiple choice dan isian: 1 soal = 1 poin
            totalPoints++;
            const key = answerKeys[subtestIndex];
            if (key && key[i] !== undefined) {
                const correctAnswer = key[i];
                if (String(userAnswer).trim().toUpperCase() === String(correctAnswer).trim().toUpperCase()) {
                    correctPoints++;
                }
            }
        }
    }
    
    // Kembalikan object dengan correctPoints dan totalPoints
    return { correct: correctPoints, total: totalPoints };
}

// Fungsi untuk mendapatkan detail jawaban per subtest (benar, salah, kosong)
function getSubtestDetail(subtestIndex) {
    const answers = state.answers[subtestIndex] || {};
    const subtest = subtests[subtestIndex];
    const questionsData = (typeof allQuestions !== 'undefined') ? allQuestions[subtestIndex] : null;
    
    let correctCount = 0;
    let wrongCount = 0;
    let emptyCount = 0;
    let totalPoints = 0;
    
    for (let i = 0; i < subtest.totalQuestions; i++) {
        const userAnswer = answers[i];
        const isAnswered = userAnswer !== undefined && userAnswer !== null && userAnswer !== '';
        
        // Cek tipe soal
        let isTrueFalseType = false;
        let statementsCount = 0;
        
        if (questionsData && questionsData[i]) {
            if (questionsData[i].type === 'true-false') {
                isTrueFalseType = true;
                statementsCount = questionsData[i].statements ? questionsData[i].statements.length : 0;
            }
        }
        
        if (isTrueFalseType) {
            // Untuk true-false: setiap pernyataan adalah 1 poin
            const key = trueFalseKeys[`${subtestIndex}_${i}`];
            if (key && typeof userAnswer === 'object') {
                for (let stmtId in key) {
                    totalPoints++;
                    if (!isAnswered) {
                        emptyCount++;
                    } else if (userAnswer[stmtId] === key[stmtId]) {
                        correctCount++;
                    } else {
                        wrongCount++;
                    }
                }
            } else if (!isAnswered) {
                // Jika tidak dijawab sama sekali, semua pernyataan kosong
                for (let stmtId in key) {
                    totalPoints++;
                    emptyCount++;
                }
            }
        } else {
            // Untuk multiple choice dan isian: 1 soal = 1 poin
            totalPoints++;
            
            if (!isAnswered) {
                emptyCount++;
            } else {
                const key = answerKeys[subtestIndex];
                if (key && key[i] !== undefined) {
                    const correctAnswer = key[i];
                    if (String(userAnswer).trim().toUpperCase() === String(correctAnswer).trim().toUpperCase()) {
                        correctCount++;
                    } else {
                        wrongCount++;
                    }
                } else {
                    // Jika tidak ada kunci jawaban, anggap salah
                    wrongCount++;
                }
            }
        }
    }
    
    return {
        correct: correctCount,
        wrong: wrongCount,
        empty: emptyCount,
        totalPoints: totalPoints
    };
}

// Fungsi menghitung total skor semua subtest (berdasarkan poin)
function calculateTotalScore() {
    let totalCorrectPoints = 0;
    let totalPointsAll = 0;
    
    for (let i = 0; i < subtests.length; i++) {
        const scoreData = calculateSubtestScore(i);
        totalCorrectPoints += scoreData.correct;
        totalPointsAll += scoreData.total;
    }
    
    return { correct: totalCorrectPoints, total: totalPointsAll };
}

// Fungsi menghitung persentase skor (0-100)
function calculatePercentage() {
    const { correct, total } = calculateTotalScore();
    if (total === 0) return 0;
    return Math.round((correct / total) * 100);
}

// ==================== FUNGSI TOGGLE THEME ====================
function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.getElementById('theme-toggle');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        if (toggleBtn) toggleBtn.innerHTML = '🌙 Dark';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-mode');
        if (toggleBtn) toggleBtn.innerHTML = '☀️ Light';
        localStorage.setItem('theme', 'light');
    }
}

// Memuat tema yang tersimpan saat halaman dimuat
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const toggleBtn = document.getElementById('theme-toggle');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (toggleBtn) toggleBtn.innerHTML = '☀️ Light';
    } else {
        document.body.classList.remove('light-mode');
        if (toggleBtn) toggleBtn.innerHTML = '🌙 Dark';
    }
}

// Panggil fungsi loadSavedTheme saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', loadSavedTheme);