let num_1=1;
let limit = 10;
//tạo biến sout để tạo bảng
let sout;
sout = "<table border='5' width='1000' cellspacing='3' cellpadding='6' style='margin: 0 auto'>";
for (num_1 ; num_1 <= limit ; num_1++ ) {
    sout = sout + "<tr>";
    let num_2=1;
    for (num_2 ; num_2 <= limit ; num_2++ ) {
        let product = num_1 * num_2;
        //in ra kết quả
        sout = sout +"<td>"+ num_1 + " x " + num_2 + " = " + product + "<br>" +"</td>";
        // document.write(num_1 + " x " + num_2 + " = " + product + "<br>");
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);