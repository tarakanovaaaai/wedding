function updateCountdown() {
    const targetDate = new Date('2026-08-15T16:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

updateCountdown();

setInterval(updateCountdown, 1000);

function formatRemainingTime() {
    const targetDate = new Date('2026-08-15T16:00:00');
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        return 'Время истекло!';
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return `${days} дней и ${hours} часов`;
}