let input =document.getElementById("inputEng");

  function search() {
      let Engl = ['Hello','Thank you','Sorry','Yes','No','Hoàng'];
      let Tv = ['Xin Chào','Cảm ơn','Xin Lỗi','Đúng','Sai','Đẹp zai nhé'];
      for (let i=0; i < Engl.length - 1; i++) {
          if ( Engl[i] === input.value ) {
              document.getElementById("inputEng").value = Tv[i];
          } else if ( Tv[i] === input.value ) {
              document.getElementById("inputEng").value = Engl[i];
          }
      }
}