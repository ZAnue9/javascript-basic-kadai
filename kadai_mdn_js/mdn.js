const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);
