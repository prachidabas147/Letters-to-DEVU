const enterBtn = document.getElementById("enterBtn");
const loading = document.getElementById("loading");
const main = document.getElementById("main");

const envelope = document.getElementById("envelope");

const typedText = document.getElementById("typedText");

const continueBtn = document.getElementById("continueBtn");

const gallery = document.getElementById("gallery");

const message = `

Hi My Batman ❤️

You may not wear a cape every day,

but you have always been my hero.

Thank you for making ordinary days
feel extraordinary.

If Gotham ever needed saving,
I'd still look for you first.

Every laugh,
every memory,
every hug,
has become my favourite place.

No matter where life takes us...

I'll always choose you.

Forever,

❤️ Prachi

`;

enterBtn.onclick = () => {
    loading.classList.add("hidden");
    main.classList.remove("hidden");
};

envelope.onclick = () => {
    envelope.classList.add("open");

    typeWriter();
};

let i = 0;

function typeWriter(){

    if(i < message.length){

        typedText.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

continueBtn.onclick = ()=>{

    document.getElementById("main").style.display="none";

    gallery.classList.remove("hidden");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
