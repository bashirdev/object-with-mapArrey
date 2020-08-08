
var userId =[
    {
    firstName:"sharuk",
    lastName :"khan",
    password :123,
    img:"<img src='https://magarticles.magzter.com/articles/54/199122/584e59deb03f5/Shah-Rukh-Khan.jpg'/>",
    text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas cumque, libero minus soluta hic, impedit voluptate perferendis, natus aspernatur ut facilis illum molestias tenetur consequatur.'
    
    },
    {
        
    firstName:"bashir",
    lastName :"ahammed",
    password :1234,
    img:'<img src="../img/bashir2.jpg"/>',
    text:' amet consectetur adipisicing elit. Voluptas cumque, libero minus soluta hic, impedit voluptate perferendis, natus aspernatur ut facilis illum molestias tenetur consequatur.' 
    },
    
    {
        
       firstName:"salman",
    lastName :"khan",
    password :12345,
    img:'<img src="https://gumlet.assettype.com/nationalherald%2F2019-06%2F96fc1675-1828-432a-b5ea-5013c31200ca%2Fsalman_khan.jpg?rect=0%2C0%2C750%2C422&auto=format%2Ccompress&w=1200"/>',
    text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas cumque, libero minus soluta hic, impedit voluptate perferendis, natus aspernatur ut facilis illum molestias tenetur consequatur.'
    }
    
    
    ];
    
    document.getElementById('signin-btn').addEventListener('click',()=>{
        const fname =document.getElementById('fname').value;
    
        const lname =document.getElementById('lname').value;
       
        const passCode=document.getElementById('password').value;
        
  
       
       const userData=userId.map(item=>{
         
            if(fname ==item.firstName && lname==item.lastName && passCode ==item.password  ){
              let img= document.getElementById('img');
            
              img.innerHTML=item.img + item.text + " " + item.firstName + " " + item.lastName;
             img.style.width="200px";
             img.style.height="200px"
            ;
               
               }else{
                   console.log ("You are not allowed");
               }
              return item ;
               
   
       })
        
    })
   
    // for(var i=0; i<userId.length; i++){
       
       
    // if(fname ==userId[i].firstName && lname==userId[i].lastName && passCode ==userId[i].password  ){
    
    // console.log("You got access!" + " " +
    
    //  userId[i].firstName + " " +
     
    //   userId[i].lastName  );
        
    // }else {
    //     console.log ("You are not allowed");
    // }
    
    // }
    