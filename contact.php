<?php
?>

<html>
    <head>
        <title>Web assignment</title>
        <link rel="stylesheet"  type="text/css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <style>
*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}


header{
    height: 60px;
    background: #262626;
    padding: 0 50px;
}


.logo{
        float:left;
        padding: 10px;
}

nav{
    width: 68%;
    float:inline-start;
}
nav ul{
    list-style: none;
    float: right;
}
nav ul li{
    display: inline-block;
    margin: 0 20px;
    position: relative;
}
nav ul li a{
    text-decoration: none;
    color: #fff;
    font-family: sans-serif;
    font-weight: bold;
    margin: 0 10px;
    line-height: 60px;
    text-transform: uppercase;
}

a
{
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;
    color: #069818;
}


a:hover
{
    color: red;
}





.banner{
    height: 90vh;
    width: 100%;
    background-image: linear-gradient(rgba(61, 66, 55, 0.71), rgba(83, 73, 73, 0.71)),  url("aari2.jpg");
    background-size: cover;
    background-position: center;
}
.banner img{
    width: 100%;
    height: 90vh;
}




footer{
    background: rgb(5, 5, 5);
    color:rgb(252, 245, 245);
    padding: 15px 20px;
    text-align: center;
    padding-top: 15px;
}

.heading{
       text-align: center;
       text-shadow: rgb(129, 5, 5);
       font-size: 50px;
       font-family:sans-serif;
       color: rgb(248, 4, 4);

}

.container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}
.container .contactInfo{
    width: 50%;
    display: flex;
    flex-direction: column;
}
.container .contactInfo .box{
    position: relative;
    padding: 20px 0;
    display: flex;
}
.container .contactInfo .box .icon{
    min-width: 60px;
    height: 60px;
    background: rgba(240, 11, 11, 0.425);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
}
.container .contactInfo .box .text h3{
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: rgb(141, 2, 2);
    /* flex-direction: column; */
    font-weight: 500;
}
.container .contactInfo .box .text p{
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: rgb(3, 3, 3);
    /* flex-direction: column; */
    font-weight: 300;
}
.contactForm{
    width: 40%;
    padding: 40px;
    background: #fff;

}
.contactForm h2{
    font-size: 30px;
    color: #333;
    font-weight: 500;
}
.contactForm .inputBox{
    position: relative;
    width: 100%;
    margin-top: 10px;
}
.contactForm .inputBox input,
.contactForm .inputBox textarea{
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
}
.contactForm .inputBox span{
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
}
.contactForm .inputBox input:focus ~ span,
.contactForm .inputBox input:valid ~ span,
.contactForm .inputBox textarea:focus ~ span,
.contactForm .inputBox textarea:valid ~ span{
    color: #ff0000;
    font-size: 12px;
    transform: translateY(-20px);
}
.contactForm .inputBox input[type="submit"]{
    width: 100px;
    background: #00bcd4;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
}


        </style>
    </head>
    <body>

        
                
        <header>
            
            <nav>
                <div class="logo">
                    <img src="logo.PNG" width="50" height="50" >
               </div>
                <ul>
                    <li> <a href="home.html">HOME</a> </li>
                    <li><a href="#">ABOUTUS</a></li>
                    <li><a href="index.html">QUIZ</a></li>
                    <li><a href="contact.php">CONTACT</a></li>
                </ul>
            </nav>
<br><br><br><br>
            <div class = "heading">
                   <p><strong><center>CONTACT</center></strong></p>
             </div>
                <div class="container">
                    <div class="contactInfo">
                       
<br>
                        <div class="box">
                            <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                            <div class="text">
                                <h3><b>Phone</b></h3>
                                <p><b>+94-766082446</b></p>
                            </div>
                        </div>
                        <br>
                        <div class="box">
                            <div class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></i></div>
                            <div class="text">
                                <h3><b>Email</b></h3>
                                <p><b>sspriyanka1997@gmail.com</b></p>
                            </div>
                        </div>

                 </div>
                 <br>
                 <div class="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div class="inputBox">
                            <input type="text" required="required">
                            <span>Full Name</span>
                        </div>
                        <div class="inputBox">
                            <input type="text" required="required">
                            <span>Eamil</span>
                        </div>
                        <div class="inputBox">
                            <textarea name="" id="" required="required"></textarea>
                            <span>Type your Message...</span>
                        </div>
                        <div class="inputBox">
                            <input type="submit" value="Send">
                            
                        </div>
                    </form>
                </div>
             </div>
</header>
<div class="banner">
</div>



<footer>
    <p>All right reserved by our website</p>
</footer>

</body>

</html>
 