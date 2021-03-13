// var full_page = document.getElementsByClassName("full_page");
// if (full_page.length != 0) {
//   full_page[0].style.background = "transparent";
// }

// imgs=document.getElementsByTagName('img')
// for(i=0;i<imgs.length;i++)
// {
//     if (imgs[i].src.indexOf('blog.revincx.icu') != -1)
//     {
//         imgs[i].src.replace('blog.revincx.icu','cdn.jsdelivr.net/gh/Revincx/revincx.github.io@master');
//     }
// }

var date = new Date()

if(date.getDate() == 4 && date.getMonth() == 3){
    document.getElementsByTagName('html')[0].style.filter = "grayscale(1)"
    console.log("清明节安康。")
}