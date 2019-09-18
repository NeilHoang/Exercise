    function is_usZipCode(str) {
        regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
        if (regexp.test(str)) {
            return true;
        }
        return false;
    }

    let zipcode = "09201 - 2550";
    console.log(is_usZipCode(zipcode));
    zipcode = "7892";
    console.log(is_usZipCode(zipcode));

