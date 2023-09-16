function humanReadable (seconds) {

    function pad(number) {
        return number < 10 ? '0' + number : '' + number;
    }

    return pad(parseInt(seconds / 3600)) + ':' + pad(parseInt((seconds % 3600) / 60)) + ':' + pad(parseInt((seconds % 3600) % 60));
  }
