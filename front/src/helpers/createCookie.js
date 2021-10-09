export const createCookie = (key, value, minutesToLive) => {
  var now = new Date();
  var time = now.getTime();
  time += minutesToLive * 60 * 1000;
  now.setTime(time);
  document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`;
};
