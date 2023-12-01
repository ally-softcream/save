$(":disabled").css("border","3px dashed salmon");
$("input:disabled").css("border","3px solid chartreuse");
$(":selected").css("backgroundColor","chartreuse");
// 기본값이 enabled라서 disabled가 아닌 것들은 전부 선택된 것으로 처리된다!
$(":enabled").css("border","2px solid yellow");

console.log($(":checked"));