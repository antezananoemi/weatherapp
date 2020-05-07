const latlon = {};
latlon.checkLatLon = (lat, lon) => {
  const regex = /^(\-?([0-8]?[0-9](\.\d+)?|90(.[0]+)?)\s?[,]\s?)+(\-?([1]?[0-7]?[0-9](\.\d+)?|180((.[0]+)?)))$/;
  return regex.test(`${lat},${lon}`);
};

module.exports = latlon;
