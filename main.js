var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://www.pngkit.com/png/detail/220-2201098_grandma-clipart-png-grandmother-clipart.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.pinimg.com/originals/3a/2c/74/3a2c7419810a64807d6006b1e9662514.jpg", "https://static.vecteezy.com/system/resources/previews/001/307/953/non_2x/cute-boy-in-standing-position-showing-thumb-vector.jpg", "https://i.pinimg.com/564x/ba/76/4b/ba764ba3bcb52bbce8c3280f6dc38256--teacher-cartoon-eps.jpg"];
var names = ["Family Book","Prafulla Chandra Bora", "Piyush Bora", "Sanjoy Kumar Bora", "Aniket Aakash Bora", "Ambarish Ankur Bora", "Aparajita Bora"];
var i = 0;
function update(){
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
