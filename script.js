// start offers secion
window.onload = function () {
    const offers = document.querySelector('.offers-items');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');
    const total = offers.children.length;
    let index = 0;

    //dots
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => goToSlide(i));
    }
    const dots = dotsContainer.querySelectorAll('span');

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function slide(to) {
        index = (index + to + total) % total;
        offers.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function goToSlide(i) {
        index = i;
       offers.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    next.onclick = () => slide(1);
    prev.onclick = () => slide(-1);

    // Auto-slide every 5 seconds
    setInterval(() => slide(1), 5000);
};
// end offers secion
//Menu Section start

var menuItems = [
    {

        name: "LASAL CHEESE",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food1.png"
    },
    {
        name: "JUMBO CRAB SHRIMP",
        price: "$24.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food2.png"
    },
    {
        name: "KOKTAIL JUICE",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food3.png"
    },
    {
        name: "CAPO STEAK",
        price: "$60.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food4.png"
    },
    {
        name: "ORGANIC FRUIT SALAD",
        price: "$8.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food5.png"
    },
    {
        name: "CHEESE PIZZA",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food6.png"
    },
    {
        name: "KOFTA MEAT",
        price: "$40.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food7.jpeg"
    },
    {
        name: "SPANISH PIES",
        price: "$14.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food8.jpeg"
    },
    {
        name: "CHEESE TOST",
        price: "$6.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food9.jpeg"
    },
    {
        name: "FRUIT SALAD",
        price: "$14.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food10.jpeg"
    },
    {
        name: "CHICKEN SHAWARMA",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food11.jpeg"
    },
    {
        name: "MEGA CHEESE PIZZA",
        price: "$30.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "img/specialmenu/food12.jpeg"
    }
]
// Menu Section End
// Start Gallery Section

var BtnClose = document.getElementById("close");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var BoxContainer = document.getElementById("boxContainer");
var boxItem = document.getElementById("boxItem");
var images = document.querySelectorAll(".img-gallery img");

var imagesArr = [];
for (var i = 0; i < images.length; i++) {
    imagesArr.push(images[i]);
}

var currentIndex = 0;

function showImage(index) {
    boxItem.style.backgroundImage = "url(" + imagesArr[index].src +
        ")";
}
for (var j = 0; j < imagesArr.length; j++) {
    (function (j) {
        imagesArr[j].addEventListener("click", function () {
            BoxContainer.style.display = "flex";
            currentIndex = j;
            showImage(currentIndex);
        });
    })(j);
}

BtnClose.addEventListener("click", function () {
    BoxContainer.style.display = "none";
});

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex === imagesArr.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});

prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagesArr.length - 1;
    }
    showImage(currentIndex);
});

BoxContainer.addEventListener("click", function (event) {
    if (event.target === BoxContainer) {
        BoxContainer.style.display = "none";
    }
});
// End Gallery Section
//Contact Section start
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var subjectError = document.getElementById("subject-error");
    var messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    var valid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    } else if (name.length < 3 || name.length > 15) {
        nameError.textContent = "Name must be 3-15 characters.";
        valid = false;
    }

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    }

    if (subject !== "" && subject.length < 3) {
        subjectError.textContent = "Subject must be at least 3 characters.";
        valid = false;
    }

    if (message !== "" && message.length < 5) {
        messageError.textContent = "Message must be at least 5characters.";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");

    }
});


// Contact Section End