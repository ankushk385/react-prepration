function checkThrottled(fun, delay) {
  let isThrottled = false;

  return function throttled(...args) {
    if (!isThrottled) {
      fun(...args);
      isThrottled = true;
    }

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}

const loginMessage = () => {
  console.log("you are logged in at", new Date().toLocaleTimeString());
};

const result = checkThrottled(loginMessage, 2000);
result();
result();
setTimeout(result, 2500);
