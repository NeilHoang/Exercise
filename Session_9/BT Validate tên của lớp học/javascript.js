  function Checkclass(str) {
      regexp = /^[CAP][0-9]{4}[GHIKLM]$/
      if (regexp.test(str)) {
          return true;
      }
      return false;
  }
  
  function checkClass() {
      let ccl = document.getElementById('demo').value;
      alert(Checkclass(ccl));
  }