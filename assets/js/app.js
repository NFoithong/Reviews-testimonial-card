const reviews = [{
        id: 1,
        name: "Natthaphon Foithong",
        job: "Graphic design | wed developer",
        img: "./assets/images/person-profile.png",
        text: "Graphic Design with 8+ years of experience in the management of the complete design process, from conceptualization to delivery. Able to stretch the boundaries of web design and photography to help client's brands stand out.",
    },
    {
        id: 2,
        name: "Peeti Sriwongsanguan",
        job: "Principal-Pred/Pres Anlytcs",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQE9whu4bj_3TQ/profile-displayphoto-shrink_200_200/0/1516904714803?e=1648080000&v=beta&t=cGjIXMIF7_KxMDn_1TMziGVT35qxmvNpQpQdtJ1WPmU",
        text: "10 years of Experience, an accomplished predictive analytics professional who has a passion for solving business problems through smart analytics and disruptive technology, with ability to turn large, complex data into meaningful insights and ability to model data for optimal performance and improved life-cycle marketing and customer journeys.",
    },
    {
        id: 3,
        name: "Andy Vikayanon",
        job: "Cybersecurity Doctoral Candidate and CompTIA SME",
        img: "https://media-exp1.licdn.com/dms/image/C4E03AQEX55rEdBCeUQ/profile-displayphoto-shrink_200_200/0/1612937584128?e=1648080000&v=beta&t=BE91MH-4CqIJywSjZyNoW4OHc47Js9vBo0ln6da2tZs",
        text: "Andy is an experienced Cyber Security professional with a strong background working with Financial Institutions. He is the first person from Thailand selected to be CompTIA Subject Matter Expert (SME) for CompTIA Security+ Exam (SY0-601). He has led various IT projects such as Cloud Migration and User Account Auditing.",
    },
    {
        id: 4,
        name: "Methinee (Mae) Chaijan",
        job: "Expert sales closer & master auto sales and F&I negotiator",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQFyk4IMJ54EMA/profile-displayphoto-shrink_800_800/0/1590708771184?e=1648080000&v=beta&t=-OR3TVThQOLOb6HZO4Lg__ZkdItrtKTcsBl23jbIiwc",
        text: "Expert sales closer and master negotiator; established automotive sales, finance, and insurance (F&I) professional with 16+ years of experience. Deliver refined customer service with advanced product knowledge and outstanding communication skills to drive sales and generate maximum profit. Consistently outperform sales expectations and goals, recognized by local and regional leadership as a top performer.",
    }
]

// select items
const img = document.querySelector('.img');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const info = document.querySelector('.info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function() {
    showperson();
});

//show person based on item
function showperson() {
    const item = reviews[currentItem];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showperson();
})

//show prev person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showperson();
})

// show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showperson();
})