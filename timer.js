// Set countdown target date to 7 days from now (you can change this)
const countDownDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).getTime();

const timerElement = document.getElementById("demo");

if (timerElement) {
  const intervalId = setInterval(() => {
    const now = Date.now();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(intervalId);
      timerElement.innerHTML = "EXPIRED";
      // Optional: Add any expiration callback here
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format with leading zeros
    const formatNumber = (num) => num.toString().padStart(2, "0");

    timerElement.innerHTML =
      `${days}d ${formatNumber(hours)}h ${formatNumber(minutes)}m ${formatNumber(seconds)}s`;
  }, 1000);
}
