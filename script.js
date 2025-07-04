// Состояние приложения
const state = {
    currentScreen: 'settings', 
    cooldown: 0,
    cooldownInterval: null,
    currentPair: 'EUR/USD',
    currentTimeframe: '5 seconds',
    currentMarket: 'standard'
};

// Элементы интерфейса
const elements = {
    settingsSection: document.querySelector('.settings-section'),
    loadingSection: document.querySelector('.loading-section'),
    signalSection: document.querySelector('.signal-section'),
    getSignalBtn: document.getElementById('get-signal-btn'),
    signalPair: document.getElementById('signal-pair'),
    signalAction: document.getElementById('signal-action'),
    signalTimestamp: document.getElementById('signal-timestamp'),
    cooldownTimer: document.getElementById('cooldown-timer'),
    currencyPair: document.getElementById('currency-pair'),
    timeframe: document.getElementById('timeframe')
};

// Списки инструментов (USD/MVR OTC удален)
const instruments = {
    standard: [
        "EUR/USD", "BTC/USD", "ETH/USD", "USD/RUB", 
        "USD/JPY", "GBP/USD", "USD/CHF", "AUD/USD", 
        "USD/CAD", "NZD/USD", "EUR/GBP", "EUR/JPY", 
        "GBP/JPY", "AUD/JPY", "CHF/JPY", "EUR/AUD", 
        "EUR/CAD", "GBP/AUD", "GBP/CAD", "AUD/CAD", 
        "AUD/CHF", "NZD/JPY", "NZD/CHF"
    ],
    otc: [
        "ZAR/USD OTC", "YER/USD OTC", "WTI Crude Oil OTC", "VIX OTC", 
        "VISA OTC", "USD/VND OTC", "USD/THB OTC", "USD/SGD OTC", 
        "USD/RUB OTC", "USD/PKR OTC", "USD/PHP OTC", 
        "USD/MXN OTC", "USD/JPY OTC", "USD/INR OTC", "USD/IDR OTC", 
        "USD/EGP OTC", "USD/DZD OTC", "USD/COP OTC", "USD/CNH OTC", 
        "USD/CLP OTC", "USD/CHF OTC", "USD/CAD OTC", "USD/BRL OTC", 
        "USD/BDT OTC", "USD/ARS OTC", "US100 OTC", "UAH/USD OTC", 
        "Toncoin OTC", "Tesla OTC", "TRON OTC", "TND/USD OTC", 
        "Solana OTC", "Silver OTC", "SP500 OTC", "SAR/CNY OTC", 
        "QAR/CNY OTC", "GBP/USD OTC", "EUR/GBP OTC", "EUR/JPY OTC", 
        "GBP/JPY OTC", "AUD/NZD OTC", "CAD/JPY OTC", "CHF/JPY OTC", 
        "EUR/CHF OTC", "AUD/CAD OTC", "AED/CNY OTC"
    ]
};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    // Обработчик кнопки "Get Signal"
    elements.getSignalBtn.addEventListener('click', startSignalProcess);
    
    // Обработчики выбора
    elements.currencyPair.addEventListener('change', (e) => {
        state.currentPair = e.target.value;
    });
    
    elements.timeframe.addEventListener('change', (e) => {
        state.currentTimeframe = e.target.value;
    });
    
    // Обработчики вкладок рынка
    document.querySelectorAll('.market-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.market-tab').forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');
            state.currentMarket = tab.dataset.market;
            updateInstruments(state.currentMarket);
        });
    });
    
    // Инициализация инструментов для стандартного рынка
    updateInstruments('standard');
    // Активируем вкладку Standard
    document.querySelector('.market-tab[data-market="standard"]').classList.add('active');
    document.querySelector('.market-tab[data-market="otc"]').classList.remove('active');
});

// Начать процесс получения сигнала
function startSignalProcess() {
    // Проверка cooldown
    if (state.cooldown > Date.now()) return;
    
    // Переход на экран загрузки
    showScreen('loading');
    
    // Установка текущей пары и времени
    elements.signalPair.textContent = state.currentPair;
    elements.signalTimestamp.textContent = getCurrentTime();
    
    // Фиксированная задержка в 1 секунду для анализа
    setTimeout(() => {
        // Генерация случайного сигнала
        const isBuy = Math.random() > 0.5;
        elements.signalAction.textContent = isBuy ? 'Buy' : 'Sell';
        elements.signalAction.className = `signal-action ${isBuy ? 'buy' : 'sell'}`;
        
        // Переход на экран сигнала
        showScreen('signal');
        
        // Установка cooldown
        startCooldown();
    }, 1000);
}

// Показать определенный экран
function showScreen(screen) {
    state.currentScreen = screen;
    
    elements.settingsSection.classList.toggle('active', screen === 'settings');
    elements.loadingSection.style.display = screen === 'loading' ? 'flex' : 'none';
    elements.signalSection.style.display = screen === 'signal' ? 'flex' : 'none';
    
    if (screen === 'settings') {
        // Проверить cooldown
        checkCooldown();
    }
}

// Обновить инструменты при смене рынка
function updateInstruments(market) {
    // Обновить опции
    elements.currencyPair.innerHTML = '';
    instruments[market].forEach(pair => {
        const option = document.createElement('option');
        option.value = pair;
        option.textContent = pair;
        elements.currencyPair.appendChild(option);
    });
    
    // Установить текущую пару
    state.currentPair = instruments[market][0];
    elements.currencyPair.value = state.currentPair;
}

// Запустить cooldown
function startCooldown() {
    // Рассчитать длительность cooldown в миллисекундах
    const duration = parseTimeframe(state.currentTimeframe);
    
    // Установить время окончания cooldown
    state.cooldown = Date.now() + duration;
    
    // Запустить таймер
    updateCooldownTimer();
    
    if (state.cooldownInterval) {
        clearInterval(state.cooldownInterval);
    }
    
    // Точный таймер с немедленным первым обновлением
    state.cooldownInterval = setInterval(updateCooldownTimer, 1000);
}

// Обновить таймер cooldown
function updateCooldownTimer() {
    const now = Date.now();
    const remaining = Math.max(0, state.cooldown - now);
    const seconds = Math.ceil(remaining / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    elements.cooldownTimer.textContent = 
        `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    
    if (remaining <= 0) {
        clearInterval(state.cooldownInterval);
        showScreen('settings');
    }
}

// Проверить cooldown при входе в настройки
function checkCooldown() {
    if (state.cooldown > Date.now()) {
        elements.getSignalBtn.disabled = true;
        elements.getSignalBtn.textContent = 'Processing...';
        startCooldown(); // Продолжить отсчет
    } else {
        elements.getSignalBtn.disabled = false;
        elements.getSignalBtn.textContent = 'Get Signal';
    }
}

// Преобразовать timeframe в миллисекунды
function parseTimeframe(timeframe) {
    const value = parseInt(timeframe);
    
    if (timeframe.includes('second')) {
        return value * 1000;
    }
    
    if (timeframe.includes('minute')) {
        return value * 60 * 1000;
    }
    
    return 5000; // По умолчанию 5 секунд
}

// Получить текущее время
function getCurrentTime() {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
}