<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thiệp Valentine</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: pink;
            font-family: Arial, sans-serif;
            overflow: hidden;
            position: relative;
        }
        .card {
            width: 350px;
            height: 500px;
            background: #ffb6c1;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
            padding: 20px;
            position: relative;
            z-index: 2;
        }
        .card img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        .heart {
            color: red;
            font-size: 100px;
            position: relative;
            margin-bottom: -10px;
            animation: beat 1s infinite alternate;
        }
        @keyframes beat {
            0% { transform: scale(1); }
            100% { transform: scale(1.2); }
        }
        .hidden-content {
            display: none;
        }
        .password-container {
            margin-top: 20px;
        }
        .floating-heart {
            position: absolute;
            font-size: 24px;
            animation: floatHearts 5s linear infinite;
        }
        @keyframes floatHearts {
            from { transform: translateY(100vh); opacity: 1; }
            to { transform: translateY(-10vh); opacity: 0; }
        }
        h2 {
            font-size: 32px;
            margin-top: 10px;
            display: none; /* Ẩn tiêu đề ban đầu */
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        h2 span {
            white-space: nowrap;
        }
        p {
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="background-effect"></div>
    <div class="card">
        <div class="heart">❤️</div>
        <h2 class="hidden-content"><span>Happy</span> <span>Valentine’s</span> <span>Day!</span></h2>
        <p class="hidden-content">Chúc mừng ngày Valentine miuuu nhóoo 😘</p>
        <p class="hidden-content">Chúc miu có một ngày Valentine zui zẻ hạnh phúc bên anh nhen anh muốn mình có nhiều ảnh chụp cùng nhau miu ơi và tối nay đi bộ với anh , anh có bất ngờ á hehe iu em😘❤️</p>
        <div class="password-container">
            <input type="password" id="password" placeholder="Nhập mật khẩu">
            <button onclick="checkPassword()">Xác nhận</button>
        </div>
        <img src="https://via.placeholder.com/300" alt="Ảnh Valentine" id="valentineImage" class="hidden-content">
    </div>
    <script>
        function checkPassword() {
            let input = document.getElementById("password").value;
            if (input === "29102024") {
                document.querySelectorAll(".hidden-content").forEach(el => el.style.display = "block");
                document.querySelector(".password-container").style.display = "none";
                document.getElementById("valentineImage").src = "https://via.placeholder.com/300/FF69B4/FFFFFF?text=I+Love+You";
            } else {
                alert("Sai mật khẩu rồi nhaa");
            }
        }
        function createFloatingHeart() {
            let heart = document.createElement("div");
            heart.innerHTML = Math.random() > 0.5 ? "❤️" : "😽";
            heart.classList.add("floating-heart");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            heart.style.color = "red";
            heart.style.position = "absolute";
            heart.style.bottom = "0";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
        setInterval(createFloatingHeart, 500);
    </script>
</body>
</html>
