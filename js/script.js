// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');

        }
    });

    // Sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // Animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
var typed = new Typed('#element', {
    strings: ['Fresher', 'Web Developer'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 40
});


// <!-- To store the data on google sheet form  -->

const scriptURL = 'https://script.google.com/macros/s/AKfycbzvZTmT8B2H4Ts1CokGMStLGVp5mw6qJ98ziSNaZLulnq7G3ES0ZzZZ7JYbkdtWnxY/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Your message has been sent Successfully !');
    alert('Thank you for a message me 🤗!');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});


// Pagination
$(document).ready(function () {
    // Array of card data (you can fetch it dynamically if needed)
    var cardsData = [
        {
            imgSrc: '/portfolio/images/Speed-Typing-Game.png',
            title: 'Speed Typing Game',
            description: 'A thrilling challenge where players type rapidly to beat the clock, crafted with HTML, CSS, and JavaScript for an engaging and interactive experience.',
            demoLink: 'https://speedyfingers.netlify.app/',
            githubLink: 'https://github.com/Ritik0706/SpeedTypingGame'
        },
        {
            imgSrc: '/portfolio/images/Quotes-website.png',
            title: 'Quotes Generator',
            description: 'This simple web app randomly generates thought-provoking quotes using HTML, CSS, and JavaScript. Perfect for daily motivation or sharing on social media.',
            demoLink: 'https://ritik0706.github.io/quotes-app/',
            githubLink: 'https://github.com/Ritik0706/quotes-app.git'
        },
        {
            imgSrc: '/portfolio/images/Meme-Generator.png',
            title: 'Meme Generator',
            description: 'Create hilarious memes with customizable text and images using this fun web tool built with HTML, CSS, and JavaScript. ',
            demoLink: 'https://ritik0706.github.io/meme-generator/',
            githubLink: 'https://github.com/Ritik0706/meme-generator.git'
        },
        {
            imgSrc: '/portfolio/images/Game.png',
            title: 'Route Racer',
            description: 'It is an exhilarating JavaScript game where players navigate through a maze of obstacles to reach the finish line. A simple game built with HTML, CSS, and JavaScript. ',
            demoLink: 'https://ritik0706.github.io/javascriptgame/',
            githubLink: 'https://github.com/Ritik0706/javascriptgame'
        },
        {
            imgSrc: '/portfolio/images/QR-Code-Generator.png',
            title: 'QR Code Generator',
            description: 'A QR code generator using HTML, CSS, and JavaScript allows users to input text or URLs, which are dynamically converted into a QR code displayed as an image.',
            demoLink: 'https://ritik0706.github.io/qr_code_generator/',
            githubLink: 'https://github.com/Ritik0706/qr_code_generator'
        },
        {
            imgSrc: '/portfolio/images/quiz_app.jpg',
            title: 'Quiz Hub: Brain Teasers',
            description: 'Quiz Hub: Brain Teasers is the app to challenge your mind with fun puzzles. Sharpen your skills and boost your brainpower with a variety of quizzes.',
            demoLink: 'https://ritik0706.github.io/quiz_app/',
            githubLink: 'https://github.com/Ritik0706/quiz_app'
        },
        {
            imgSrc: '/portfolio/images/teamUi.png',
            title: 'Animated Team UI',
            description: 'An animated team member UI crafted with HTML, CSS, and JavaScript, showcasing dynamic transitions and engaging hover effects for a team profiles.',
            demoLink: 'https://animatedteamui.netlify.app/',
            githubLink: 'https://github.com/Ritik0706/teamUI'
        },
      
        // {
        //     imgSrc: '/portfolio/images/bg-img.png',
        //     title: 'Card 9',
        //     description: 'Some text describing Card 9.',
        //     demoLink: 'demo_link_1',
        //     githubLink: 'github_link_1'
        // },
    ];


    var currentPage = 1;
    var cardsPerPage = 6;
    var totalPages = Math.ceil(cardsData.length / cardsPerPage);

    function showCards(page) {
        var startIndex = (page - 1) * cardsPerPage;
        var endIndex = startIndex + cardsPerPage;
        var visibleCards = cardsData.slice(startIndex, endIndex);

        var cardHtml = '';
        visibleCards.forEach(function (card, index) {
            cardHtml += `
                    <div class="col-md-4">
                        <div class="card custom-card-height">
                            <img src="${card.imgSrc}" class="card-img-top" alt="Card ${index + 1}" />
                            <div class="card-body">
                                <h5 class="card-title">${card.title}</h5>
                                <p class="card-text">${card.description}</p>
                            </div>
                            <div class="card-footer">
                            <a href="${card.demoLink}" class="btn btn-primary btn-lg" target="_blank">Demo</a>
                            <a href="${card.githubLink}" class="btn btn-secondary btn-lg" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                `;
        });

        $('#cardWrapper').html(cardHtml);
    }

    function updatePagination() {
        var pageNumbersHtml = '';
        for (var i = 1; i <= totalPages; i++) {
            pageNumbersHtml += `<button class="btn btn-outline-secondary mr-2 pageNumber">${i}</button>`;
        }
        $('#pageNumbers').html(pageNumbersHtml);
        $('.pageNumber').removeClass('active');
        $('.pageNumber').eq(currentPage - 1).addClass('active');
    }

    function updatePaginationButtons() {
        $('#prevBtn').prop('disabled', currentPage === 1);
        $('#nextBtn').prop('disabled', currentPage === totalPages);
    }

    $('#prevBtn').click(function () {
        if (currentPage > 1) {
            currentPage--;
            showCards(currentPage);
            updatePaginationButtons();
            updatePagination();
        }
    });

    $('#nextBtn').click(function () {
        if (currentPage < totalPages) {
            currentPage++;
            showCards(currentPage);
            updatePaginationButtons();
            updatePagination();
        }
    });

    $(document).on('click', '.pageNumber', function () {
        currentPage = parseInt($(this).text());
        showCards(currentPage);
        updatePaginationButtons();
        updatePagination();
    });

    // Initially show the first page of cards
    showCards(currentPage);
    updatePaginationButtons();
    updatePagination();
});

