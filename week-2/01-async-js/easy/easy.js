function secInterval() {
  count = 0;
  nSec = 5;
  counter = setInterval(() => {
    count++;
    console.log(count);
  }, 1000);
  setTimeout(() => clearInterval(counter), 1000 * (nSec + 1));
}

secInterval();
