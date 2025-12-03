// Translations
const translations = {
    ru: {
        appTitle: 'СИГНАЛ',
        appSubtitle: 'elite trading signals',
        helpText: 'Получить помощь',
        changeLanguage: 'Изменить язык',
        standard: 'STANDARD',
        otc: 'OTC',
        signalHeader: 'СИГНАЛ',
        timeDetailLabel: 'Время',
        pairDetailLabel: 'Пара',
        volatilityLabel: 'Волатильность',
        riskLabel: 'Уровень риска',
        accuracyLabel: 'Точность',
        validLabel: 'Действителен до',
        getSignal: 'ПОЛУЧИТЬ СИГНАЛ',
        repeat: 'ПОВТОРИТЬ',
        reset: 'СБРОСИТЬ',
        buy: 'КУПИТЬ',
        sell: 'ПРОДАТЬ',
        analyzing: 'Анализирует...',
        pressButton: 'Нажми ПОЛУЧИТЬ СИГНАЛ',
        high: 'Высокая',
        low: 'Низкая',
        medium: 'Средняя',
        selectPair: '-- Выбрать пару --',
        selectTime: '-- Выбрать время --',
        timeOptions: {
            '1m': '1M',
            '5m': '5M',
            '15m': '15M',
            '1h': '1H',
            '4h': '4H',
            '1d': '1D',
            '5s': '5S',
            '15s': '15S',
            '30s': '30S'
        }
    },
    en: {
        appTitle: 'SIGNAL',
        appSubtitle: 'elite trading signals',
        helpText: 'Get help',
        changeLanguage: 'Change language',
        standard: 'STANDARD',
        otc: 'OTC',
        signalHeader: 'SIGNAL',
        timeDetailLabel: 'Time',
        pairDetailLabel: 'Pair',
        volatilityLabel: 'Volatility',
        riskLabel: 'Risk level',
        accuracyLabel: 'Accuracy',
        validLabel: 'Valid until',
        getSignal: 'GET SIGNAL',
        repeat: 'REPEAT',
        reset: 'RESET',
        buy: 'BUY',
        sell: 'SELL',
        analyzing: 'Analyzing...',
        pressButton: 'Press GET SIGNAL',
        high: 'High',
        low: 'Low',
        medium: 'Medium',
        selectPair: '-- Select pair --',
        selectTime: '-- Select time --',
        timeOptions: {
            '1m': '1M',
            '5m': '5M',
            '15m': '15M',
            '1h': '1H',
            '4h': '4H',
            '1d': '1D',
            '5s': '5S',
            '15s': '15S',
            '30s': '30S'
        }
    },
    es: {
        appTitle: 'SEÑAL',
        appSubtitle: 'elite trading signals',
        helpText: 'Obtener ayuda',
        changeLanguage: 'Cambiar idioma',
        standard: 'STANDARD',
        otc: 'OTC',
        signalHeader: 'SEÑAL',
        timeDetailLabel: 'Tiempo',
        pairDetailLabel: 'Par',
        volatilityLabel: 'Volatilidad',
        riskLabel: 'Nivel de riesgo',
        accuracyLabel: 'Precisión',
        validLabel: 'Válido hasta',
        getSignal: 'OBTENER SEÑAL',
        repeat: 'REPETIR',
        reset: 'REINICIAR',
        buy: 'COMPRAR',
        sell: 'VENDER',
        analyzing: 'Analizando...',
        pressButton: 'Presiona OBTENER SEÑAL',
        high: 'Alta',
        low: 'Baja',
        medium: 'Media',
        selectPair: '-- Seleccionar par --',
        selectTime: '-- Seleccionar tiempo --',
        timeOptions: {
            '1m': '1M',
            '5m': '5M',
            '15m': '15M',
            '1h': '1H',
            '4h': '4H',
            '1d': '1D',
            '5s': '5S',
            '15s': '15S',
            '30s': '30S'
        }
    }
};

// Real pairs from Pocket Option
const standardPairs = {
    'EURUSD': 'EUR/USD',
    'GBPUSD': 'GBP/USD',
    'USDJPY': 'USD/JPY',
    'AUDUSD': 'AUD/USD',
    'USDCAD': 'USD/CAD',
    'NZDUSD': 'NZD/USD',
    'USDCHF': 'USD/CHF',
    'GBPJPY': 'GBP/JPY',
    'EURJPY': 'EUR/JPY',
    'EURGBP': 'EUR/GBP',
    'CHFJPY': 'CHF/JPY',
    'AUDCAD': 'AUD/CAD',
    'BTCUSD': 'BTC/USD',
    'ETHUSD': 'ETH/USD',
    'XRPUSD': 'XRP/USD',
    'LTCUSD': 'LTC/USD',
    'BCHUSD': 'BCH/USD',
    'ADAUSD': 'ADA/USD'
};

const otcPairs = {
    'EURUSD_OTC': 'EUR/USD OTC',
    'GBPUSD_OTC': 'GBP/USD OTC',
    'USDJPY_OTC': 'USD/JPY OTC',
    'AUDUSD_OTC': 'AUD/USD OTC',
    'USDCAD_OTC': 'USD/CAD OTC',
    'NZDUSD_OTC': 'NZD/USD OTC',
    'USDCHF_OTC': 'USD/CHF OTC',
    'GBPJPY_OTC': 'GBP/JPY OTC',
    'EURJPY_OTC': 'EUR/JPY OTC',
    'EURGBP_OTC': 'EUR/GBP OTC',
    'GOLD_OTC': 'GOLD OTC',
    'SILVER_OTC': 'SILVER OTC',
    'BRENT_OTC': 'BRENT OTC',
    'WTI_OTC': 'WTI OTC',
    'NATGAS_OTC': 'NATGAS OTC',
    'BTC_OTC': 'BTC OTC',
    'ETH_OTC': 'ETH OTC',
    'AAPL_OTC': 'AAPL OTC',
    'GOOGL_OTC': 'GOOGL OTC',
    'MSFT_OTC': 'MSFT OTC',
    'TESLA_OTC': 'TESLA OTC',
    'NVDA_OTC': 'NVDA OTC',
    'META_OTC': 'META OTC',
    'AMZN_OTC': 'AMZN OTC'
};

// State
let currentLanguage = 'ru';
let currentMarketType = 'standard';
let lastSignalType = null;
let currentPair = null;
let currentTime = null;
let currentSignal = null;

// DOM Elements
const languageSelect = document.getElementById('languageSelect');
const standardToggle = document.getElementById('standardToggle');
const otcToggle = document.getElementById('otcToggle');
const pairSelect = document.getElementById('pairSelect');
const timeSelect = document.getElementById('timeSelect');
const getSignalBtn = document.getElementById('getSignalBtn');
const repeatBtn = document.getElementById('repeatBtn');
const resetBtn = document.getElementById('resetBtn');
const signalDisplay = document.getElementById('signalDisplay');
const signalInitial = document.getElementById('signalInitial');
const signalAnalyzer = document.getElementById('signalAnalyzer');
const signalResult = document.getElementById('signalResult');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    populatePairs();
    populateTimes();
    setupEventListeners();
});

function initializeLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
    currentLanguage = savedLanguage;
    updateAllText();
    populateLanguageSelect();
    languageSelect.value = currentLanguage;
}

function populateLanguageSelect() {
    const t = translations[currentLanguage];
    languageSelect.innerHTML = '';
    
    const langs = [
        { code: 'ru', label: 'Русский' },
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' }
    ];
    
    langs.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang.code;
        option.textContent = lang.label;
        languageSelect.appendChild(option);
    });
}

function setupEventListeners() {
    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem('selectedLanguage', currentLanguage);
        updateAllText();
        populatePairs();
        populateTimes();
    });

    standardToggle.addEventListener('change', () => {
        if (standardToggle.checked) {
            currentMarketType = 'standard';
            currentPair = null;
            currentTime = null;
            currentSignal = null;
            populatePairs();
            populateTimes();
            pairSelect.value = '';
            timeSelect.value = '';
            resetSignal();
        }
    });

    otcToggle.addEventListener('change', () => {
        if (otcToggle.checked) {
            currentMarketType = 'otc';
            currentPair = null;
            currentTime = null;
            currentSignal = null;
            populatePairs();
            populateTimes();
            pairSelect.value = '';
            timeSelect.value = '';
            resetSignal();
        }
    });

    pairSelect.addEventListener('change', () => {
        updateButtonState();
        if (currentPair !== null && currentTime !== null) {
            resetSignal();
        }
    });
    timeSelect.addEventListener('change', () => {
        updateButtonState();
        if (currentPair !== null && currentTime !== null) {
            resetSignal();
        }
    });
    getSignalBtn.addEventListener('click', generateSignal);
    repeatBtn.addEventListener('click', generateSignal);
    resetBtn.addEventListener('click', resetSignal);
}

function updateAllText() {
    const t = translations[currentLanguage];

    document.getElementById('appTitle').textContent = t.appTitle;
    document.getElementById('appSubtitle').textContent = t.appSubtitle;
    document.getElementById('helpText').textContent = t.helpText;
    languageSelect.title = t.changeLanguage;
    document.getElementById('standardText').textContent = t.standard;
    document.getElementById('otcText').textContent = t.otc;
    document.getElementById('signalHeaderText').textContent = t.signalHeader;
    document.getElementById('timeDetailLabel').textContent = t.timeDetailLabel;
    document.getElementById('pairDetailLabel').textContent = t.pairDetailLabel;
    document.getElementById('volatilityLabel').textContent = t.volatilityLabel;
    document.getElementById('riskLabel').textContent = t.riskLabel;
    document.getElementById('accuracyLabel').textContent = t.accuracyLabel;
    document.getElementById('validLabel').textContent = t.validLabel;
    document.getElementById('getSignalBtn').textContent = t.getSignal;
    document.getElementById('repeatBtn').textContent = t.repeat;
    document.getElementById('resetBtn').textContent = t.reset;
    document.getElementById('analyzingText').textContent = t.analyzing;
    document.getElementById('initialText').textContent = t.pressButton;

    // Update select options
    updateSelectOptions();
}

function updateButtonState() {
    const pairSelected = pairSelect.value !== '';
    const timeSelected = timeSelect.value !== '';
    
    if (pairSelected && timeSelected) {
        getSignalBtn.disabled = false;
    } else {
        getSignalBtn.disabled = true;
    }
}

function updateSelectOptions() {
    const t = translations[currentLanguage];
    
    // Update pair select
    const pairOptions = pairSelect.querySelectorAll('option');
    if (pairOptions[0]) {
        pairOptions[0].textContent = t.selectPair;
    }

    // Update time select
    const timeOptions = timeSelect.querySelectorAll('option');
    if (timeOptions[0]) {
        timeOptions[0].textContent = t.selectTime;
    }
}

function populatePairs() {
    const pairs = currentMarketType === 'standard' ? standardPairs : otcPairs;
    const t = translations[currentLanguage];

    pairSelect.innerHTML = `<option value="">${t.selectPair}</option>`;

    Object.entries(pairs).forEach(([key, name]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = name;
        pairSelect.appendChild(option);
    });
}

function populateTimes() {
    const t = translations[currentLanguage];
    const times = currentMarketType === 'standard' 
        ? ['1m', '5m', '15m', '1h', '4h', '1d']
        : ['5s', '15s', '30s', '1m', '5m', '15m'];

    timeSelect.innerHTML = `<option value="">${t.selectTime}</option>`;

    times.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = t.timeOptions[time];
        timeSelect.appendChild(option);
    });
}

function generateSignal() {
    const selectedPair = pairSelect.value;
    const selectedTime = timeSelect.value;

    if (!selectedPair || !selectedTime) {
        const t = translations[currentLanguage];
        alert(currentLanguage === 'ru' ? 'Выберите пару и время!' : 
              currentLanguage === 'en' ? 'Select pair and time!' : 
              '¡Seleccione par y tiempo!');
        return;
    }

    currentPair = selectedPair;
    currentTime = selectedTime;

    getSignalBtn.disabled = true;
    repeatBtn.disabled = true;
    resetBtn.disabled = true;

    showAnalyzer();

    // Random analysis time between 2-5 seconds
    const analysisTime = 2000 + Math.random() * 3000;

    setTimeout(() => {
        const signal = generateRandomSignal();
        currentSignal = signal;
        displaySignal(signal, selectedPair, selectedTime);
        
        getSignalBtn.disabled = false;
        repeatBtn.disabled = false;
        resetBtn.disabled = false;
    }, analysisTime);
}

function generateRandomSignal() {
    const t = translations[currentLanguage];
    
    // Truly random signal type - avoid repetition
    let signalType;
    do {
        signalType = Math.random() < 0.5 ? 'buy' : 'sell';
    } while (lastSignalType === signalType && Math.random() < 0.7);

    lastSignalType = signalType;

    // Random properties
    const volatilityOptions = [t.low, t.medium, t.high];
    const volatility = volatilityOptions[Math.floor(Math.random() * volatilityOptions.length)];

    const riskOptions = [t.low, t.medium, t.high];
    const risk = riskOptions[Math.floor(Math.random() * riskOptions.length)];

    // Accuracy between 75% and 99%
    const accuracy = 75 + Math.floor(Math.random() * 25);

    return {
        type: signalType,
        volatility: volatility,
        risk: risk,
        accuracy: accuracy
    };
}

function showAnalyzer() {
    signalInitial.style.display = 'none';
    signalAnalyzer.style.display = 'flex';
    signalResult.style.display = 'none';
    
    // Remove border classes when showing analyzer
    signalDisplay.classList.remove('buy', 'sell');
}

function displaySignal(signal, pairKey, timeKey) {
    const t = translations[currentLanguage];
    const pairs = currentMarketType === 'standard' ? standardPairs : otcPairs;
    const pairName = pairs[pairKey];
    const timeText = t.timeOptions[timeKey];

    // Update signal display
    const signalText = document.getElementById('signalText');
    signalText.textContent = signal.type === 'buy' ? t.buy : t.sell;

    if (signal.type === 'buy') {
        signalDisplay.classList.remove('sell');
        signalDisplay.classList.add('buy');
    } else {
        signalDisplay.classList.remove('buy');
        signalDisplay.classList.add('sell');
    }

    // Update details
    const validUntil = generateValidUntilTime(timeKey);
    
    document.getElementById('detailTime').textContent = timeText;
    document.getElementById('detailPair').textContent = pairName;
    document.getElementById('detailVolatility').textContent = signal.volatility;
    document.getElementById('detailRisk').textContent = signal.risk;
    document.getElementById('detailAccuracy').textContent = signal.accuracy + '%';
    document.getElementById('detailValid').textContent = validUntil;

    // Show result and update buttons
    signalInitial.style.display = 'none';
    signalAnalyzer.style.display = 'none';
    signalResult.style.display = 'block';

    getSignalBtn.style.display = 'none';
    repeatBtn.style.display = 'flex';
    resetBtn.style.display = 'flex';
}

function resetSignal() {
    const t = translations[currentLanguage];

    signalInitial.style.display = 'flex';
    signalAnalyzer.style.display = 'none';
    signalResult.style.display = 'none';

    getSignalBtn.style.display = 'block';
    repeatBtn.style.display = 'none';
    resetBtn.style.display = 'none';

    // Reset details
    document.getElementById('detailTime').textContent = '--';
    document.getElementById('detailPair').textContent = '--';
    document.getElementById('detailVolatility').textContent = '--';
    document.getElementById('detailRisk').textContent = '--';
    document.getElementById('detailAccuracy').textContent = '--';
    document.getElementById('detailValid').textContent = '--';

    // Reset selections
    pairSelect.value = '';
    timeSelect.value = '';
    currentPair = null;
    currentTime = null;
    currentSignal = null;

    // Reset signal display classes
    signalDisplay.classList.remove('buy', 'sell');
    
    // Disable button
    updateButtonState();
}

function generateValidUntilTime(timeKey) {
    const now = new Date();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let hours = now.getHours();

    // Add time based on selected timeframe
    switch(timeKey) {
        case '5s':
            seconds += 5;
            break;
        case '15s':
            seconds += 15;
            break;
        case '30s':
            seconds += 30;
            break;
        case '1m':
            minutes += 1;
            break;
        case '5m':
            minutes += 5;
            break;
        case '15m':
            minutes += 15;
            break;
        case '1h':
            hours += 1;
            break;
        case '4h':
            hours += 4;
            break;
        case '1d':
            hours += 24;
            break;
    }

    // Handle overflow
    if (seconds >= 60) {
        minutes += Math.floor(seconds / 60);
        seconds = seconds % 60;
    }
    if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes = minutes % 60;
    }
    if (hours >= 24) {
        hours = hours % 24;
    }

    // Format time
    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');

    if (currentMarketType === 'otc') {
        return `${hoursStr}:${minutesStr}:${secondsStr}`;
    } else {
        return `${hoursStr}:${minutesStr}`;
    }
}

// Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (getSignalBtn.style.display !== 'none' && !getSignalBtn.disabled) {
            generateSignal();
        } else if (repeatBtn.style.display !== 'none' && !repeatBtn.disabled) {
            generateSignal();
        }
    }
});
