/* =========================================================
   ASTRO JYOTISH KENDRA
   Main Website JavaScript
========================================================= */


/* =========================================================
   PANCHANG DATA
   Replace this object later with API data.
========================================================= */

const panchangData = {

    dateLabel: "",

    day: "शनिवार",

    tithi: "शुक्ल पक्ष — डेमो",

    nakshatra: "रोहिणी — डेमो",

    yoga: "सिद्ध — डेमो",

    karana: "बव — डेमो",

    sunrise: "06:02 AM",

    sunset: "06:10 PM",

    moonrise: "09:12 AM",

    moonset: "09:48 PM"
};


/* =========================================================
   NAKSHATRA DATA
========================================================= */

const nakshatraData = {

    name: "रोहिणी",

    lord: "चंद्रमा",

    rashi: "वृषभ",

    pada: "द्वितीय चरण — डेमो",

    auspicious: "सुबह एवं संध्या का समय",

    effect:
        "सृजनात्मकता, सौम्यता और स्थिर कार्यों के लिए पारंपरिक रूप से अनुकूल माना जाता है।"
};


/* =========================================================
   RASHIFAL DATA
========================================================= */

const rashifalData = {

    mesha: {

        name: "मेष",

        english: "Aries",

        symbol: "♈",

        short:
            "ऊर्जा और पहल के साथ कार्यों को आगे बढ़ाने का दिन।",

        love:
            "संवाद को प्राथमिकता दें और जल्दबाजी से बचें।",

        career:
            "लंबित कार्यों को क्रम से पूरा करने पर ध्यान दें।",

        money:
            "बजट बनाकर खर्च करना उपयोगी रहेगा।",

        health:
            "दिनचर्या और पर्याप्त विश्राम पर ध्यान दें।",

        family:
            "परिवार के साथ शांतिपूर्ण बातचीत लाभदायक रहेगी।",

        remedy:
            "सुबह सूर्य को जल अर्पित करें।",

        color: "लाल",

        number: 9
    },


    vrishabha: {

        name: "वृषभ",

        english: "Taurus",

        symbol: "♉",

        short:
            "स्थिरता, धैर्य और व्यावहारिक निर्णयों का दिन।",

        love:
            "रिश्तों में भरोसा और स्पष्ट बातचीत रखें।",

        career:
            "लगातार प्रयास से काम में प्रगति के अवसर बन सकते हैं।",

        money:
            "अनावश्यक खरीदारी से बचकर योजनाबद्ध खर्च करें।",

        health:
            "हल्का भोजन और नियमित विश्राम उपयोगी रहेगा।",

        family:
            "परिवार में सहयोग और सौहार्द बनाए रखें।",

        remedy:
            "शुक्रवार को सफेद वस्तु का दान पारंपरिक उपाय माना जाता है।",

        color: "सफेद",

        number: 6
    },


    mithuna: {

        name: "मिथुन",

        english: "Gemini",

        symbol: "♊",

        short:
            "नई जानकारी और संवाद से जुड़े कार्यों के लिए सक्रिय दिन।",

        love:
            "अपनी बात स्पष्ट और विनम्रता से रखें।",

        career:
            "नए विचारों को व्यवस्थित रूप में प्रस्तुत करें।",

        money:
            "छोटे वित्तीय निर्णयों में भी सावधानी रखें।",

        health:
            "स्क्रीन टाइम के बीच विश्राम लें।",

        family:
            "परिजनों की बात ध्यान से सुनें।",

        remedy:
            "बुधवार को हरी वस्तु का दान पारंपरिक उपाय माना जाता है।",

        color: "हरा",

        number: 5
    },


    kark: {

        name: "कर्क",

        english: "Cancer",

        symbol: "♋",

        short:
            "भावनात्मक संतुलन और घर-परिवार पर ध्यान देने का दिन।",

        love:
            "संवेदनशील विषयों पर धैर्य से बात करें।",

        career:
            "कार्यस्थल पर प्राथमिकताएँ स्पष्ट रखें।",

        money:
            "बचत की योजना पर ध्यान देना उपयोगी रहेगा।",

        health:
            "नींद और जल सेवन का ध्यान रखें।",

        family:
            "घर के वातावरण में सहयोग बढ़ेगा।",

        remedy:
            "चंद्रमा का स्मरण और शांत मन से ध्यान पारंपरिक रूप से किया जाता है।",

        color: "क्रीम",

        number: 2
    },


    simha: {

        name: "सिंह",

        english: "Leo",

        symbol: "♌",

        short:
            "आत्मविश्वास के साथ जिम्मेदारियाँ संभालने का समय।",

        love:
            "सम्मान और खुला संवाद संबंधों को मजबूत करेगा।",

        career:
            "नेतृत्व से जुड़े कार्यों में पहल करें।",

        money:
            "बड़े खर्च से पहले योजना की समीक्षा करें।",

        health:
            "नियमित शारीरिक गतिविधि रखें।",

        family:
            "अपनों के साथ समय बिताएँ।",

        remedy:
            "सूर्य को प्रातः जल अर्पित करना पारंपरिक उपाय है।",

        color: "केसरिया",

        number: 1
    },


    kanya: {

        name: "कन्या",

        english: "Virgo",

        symbol: "♍",

        short:
            "योजना, अनुशासन और बारीकियों पर ध्यान का दिन।",

        love:
            "छोटी बातों को अनावश्यक रूप से बड़ा न बनाएं।",

        career:
            "दस्तावेज और विवरण दोबारा जाँचें।",

        money:
            "व्यय का रिकॉर्ड रखना लाभदायक रहेगा।",

        health:
            "कार्य के बीच छोटे विराम लें।",

        family:
            "परिवार के किसी सदस्य को सहयोग दें।",

        remedy:
            "गणेश स्मरण पारंपरिक रूप से शुभ माना जाता है।",

        color: "हरा",

        number: 5
    },


    tula: {

        name: "तुला",

        english: "Libra",

        symbol: "♎",

        short:
            "संतुलन और सहयोग से काम आगे बढ़ाने का दिन।",

        love:
            "साथी की बात समझने का प्रयास करें।",

        career:
            "सहयोगी कार्यों में समन्वय रखें।",

        money:
            "खरीदारी में तुलना करके निर्णय लें।",

        health:
            "मानसिक शांति के लिए विश्राम जरूरी है।",

        family:
            "परिवार के साथ संतुलित व्यवहार रखें।",

        remedy:
            "शुक्र मंत्र का स्मरण पारंपरिक उपायों में माना जाता है।",

        color: "सफेद",

        number: 6
    },


    vrishchika: {

        name: "वृश्चिक",

        english: "Scorpio",

        symbol: "♏",

        short:
            "गहराई से सोचकर निर्णय लेने का समय।",

        love:
            "विश्वास बनाए रखने के लिए स्पष्टता रखें।",

        career:
            "गोपनीय कार्यों में सावधानी रखें।",

        money:
            "जोखिम वाले निर्णयों में अतिरिक्त विचार करें।",

        health:
            "तनाव कम करने के लिए विश्राम करें।",

        family:
            "पुराने मतभेद बातचीत से सुलझाने का प्रयास करें।",

        remedy:
            "हनुमान जी का स्मरण पारंपरिक रूप से किया जाता है।",

        color: "मरून",

        number: 9
    },


    dhanu: {

        name: "धनु",

        english: "Sagittarius",

        symbol: "♐",

        short:
            "सीखने, योजना बनाने और नए दृष्टिकोण का दिन।",

        love:
            "साथ मिलकर भविष्य की योजनाओं पर चर्चा करें।",

        career:
            "नई सीख को कार्य में लागू करें।",

        money:
            "लंबी अवधि की योजना पर ध्यान दें।",

        health:
            "सक्रिय दिनचर्या बनाए रखें।",

        family:
            "परिजनों के साथ सकारात्मक समय बिताएँ।",

        remedy:
            "गुरु का स्मरण और ज्ञान का अध्ययन पारंपरिक उपाय है।",

        color: "पीला",

        number: 3
    },


    makar: {

        name: "मकर",

        english: "Capricorn",

        symbol: "♑",

        short:
            "अनुशासन और निरंतर प्रयास से प्रगति का दिन।",

        love:
            "काम के साथ रिश्तों के लिए भी समय निकालें।",

        career:
            "लक्ष्य को छोटे चरणों में बाँटें।",

        money:
            "बचत और दीर्घकालिक योजना पर ध्यान दें।",

        health:
            "काम और आराम में संतुलन रखें।",

        family:
            "बड़ों का मार्गदर्शन उपयोगी हो सकता है।",

        remedy:
            "शनिवार को सेवा या दान पारंपरिक उपाय माना जाता है।",

        color: "नीला",

        number: 8
    },


    kumbha: {

        name: "कुंभ",

        english: "Aquarius",

        symbol: "♒",

        short:
            "नए विचारों और उपयोगी संपर्कों से जुड़ा दिन।",

        love:
            "व्यक्तिगत स्वतंत्रता और संबंधों में संतुलन रखें।",

        career:
            "रचनात्मक विचार साझा करें।",

        money:
            "ऑनलाइन या आकस्मिक खर्च पर ध्यान दें।",

        health:
            "नियमित नींद का ध्यान रखें।",

        family:
            "परिवार में अपनी बात शांतिपूर्वक रखें।",

        remedy:
            "सेवा कार्य पारंपरिक रूप से शुभ माना जाता है।",

        color: "नीला",

        number: 8
    },


    meen: {

        name: "मीन",

        english: "Pisces",

        symbol: "♓",

        short:
            "अंतर्ज्ञान, संवेदनशीलता और रचनात्मकता पर ध्यान का दिन।",

        love:
            "भावनाओं को स्पष्ट शब्दों में व्यक्त करें।",

        career:
            "रचनात्मक कार्यों के लिए समय निकालें।",

        money:
            "भावनात्मक खरीदारी से बचें।",

        health:
            "ध्यान और पर्याप्त नींद उपयोगी रहेगी।",

        family:
            "परिवार की भावनाओं का सम्मान करें।",

        remedy:
            "भगवान विष्णु का स्मरण पारंपरिक उपायों में माना जाता है।",

        color: "पीला",

        number: 3
    }

};


/* =========================================================
   12 RASHIS
========================================================= */

const rashiInfo = [

    ["मेष","Aries","♈","अग्नि","मंगल"],

    ["वृषभ","Taurus","♉","पृथ्वी","शुक्र"],

    ["मिथुन","Gemini","♊","वायु","बुध"],

    ["कर्क","Cancer","♋","जल","चंद्रमा"],

    ["सिंह","Leo","♌","अग्नि","सूर्य"],

    ["कन्या","Virgo","♍","पृथ्वी","बुध"],

    ["तुला","Libra","♎","वायु","शुक्र"],

    ["वृश्चिक","Scorpio","♏","जल","मंगल"],

    ["धनु","Sagittarius","♐","अग्नि","गुरु"],

    ["मकर","Capricorn","♑","पृथ्वी","शनि"],

    ["कुंभ","Aquarius","♒","वायु","शनि"],

    ["मीन","Pisces","♓","जल","गुरु"]

];


/* =========================================================
   PLANETARY DATA
========================================================= */

const planetaryData = [

    ["☀️ सूर्य","सिंह","मार्गी","आत्मविश्वास और नेतृत्व — सामान्य संकेत"],

    ["🌙 चंद्र","वृषभ","मार्गी","भावनात्मक स्थिरता — सामान्य संकेत"],

    ["♂️ मंगल","कर्क","मार्गी","ऊर्जा और पहल — सामान्य संकेत"],

    ["☿ बुध","कन्या","मार्गी","बुद्धि और संवाद — सामान्य संकेत"],

    ["♃ गुरु","मिथुन","मार्गी","ज्ञान और विस्तार — सामान्य संकेत"],

    ["♀️ शुक्र","तुला","मार्गी","संबंध और सौंदर्य — सामान्य संकेत"],

    ["♄ शनि","मीन","मार्गी","अनुशासन और धैर्य — सामान्य संकेत"],

    ["☊ राहु","कुंभ","डेमो","अभिनव सोच — सामान्य संकेत"],

    ["☋ केतु","सिंह","डेमो","अंतर्मुखी चिंतन — सामान्य संकेत"]

];


/* =========================================================
   SERVICES
========================================================= */

const servicesData = [

    [
        "🔮",
        "जन्म कुंडली",
        "जन्म कुंडली का विस्तृत वैदिक ज्योतिषीय विश्लेषण।"
    ],

    [
        "❤️",
        "विवाह कुंडली मिलान",
        "विवाह एवं संबंधों के लिए कुंडली और गुण मिलान।"
    ],

    [
        "💼",
        "करियर एवं व्यवसाय",
        "करियर, नौकरी और व्यवसाय से जुड़े ज्योतिषीय मार्गदर्शन।"
    ],

    [
        "💰",
        "धन एवं समृद्धि",
        "धन और आर्थिक स्थिति से संबंधित ज्योतिषीय विश्लेषण।"
    ],

    [
        "🪐",
        "ग्रह दोष एवं उपाय",
        "ग्रहों की स्थिति के अनुसार पारंपरिक ज्योतिषीय उपाय।"
    ],

    [
        "📅",
        "भविष्यफल",
        "दैनिक, मासिक एवं वार्षिक भविष्यफल।"
    ]

];


/* =========================================================
   PANCHANG LABELS
========================================================= */

const panchangLabels = [

    ["📅","दिनांक","dateLabel"],

    ["🌞","वार","day"],

    ["🌙","तिथि","tithi"],

    ["⭐","नक्षत्र","nakshatra"],

    ["🔱","योग","yoga"],

    ["🔱","करण","karana"],

    ["🌅","सूर्योदय","sunrise"],

    ["🌇","सूर्यास्त","sunset"],

    ["🌙","चंद्रोदय","moonrise"],

    ["🌙","चंद्रास्त","moonset"]

];


/* =========================================================
   DATE
========================================================= */

function formatHindiDate(date) {

    return new Intl.DateTimeFormat(
        "hi-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "long"
        }
    ).format(date);

}


/* =========================================================
   RENDER PANCHANG
========================================================= */

function renderPanchang() {

    const today = new Date();

    panchangData.dateLabel =
        formatHindiDate(today);

    document.querySelector("#todayDate")
        .textContent =
        `आज: ${panchangData.dateLabel}`;


    document.querySelector("#panchangGrid")
        .innerHTML =

        panchangLabels.map(

            ([icon,label,key]) => `

                <div class="info-card">

                    <div class="icon">
                        ${icon}
                    </div>

                    <small>
                        ${label}
                    </small>

                    <strong>
                        ${panchangData[key]}
                    </strong>

                </div>

            `

        ).join("");

}


/* =========================================================
   NAKSHATRA
========================================================= */

function renderNakshatra() {

    const d = nakshatraData;

    document.querySelector("#nakshatraDetails")
        .innerHTML = [

            ["नक्षत्र",d.name],

            ["नक्षत्र स्वामी",d.lord],

            ["राशि",d.rashi],

            ["चरण",d.pada],

            ["शुभ समय",d.auspicious],

            ["सामान्य प्रभाव",d.effect]

        ].map(

            ([a,b]) => `

                <div class="detail">

                    <b>${a}</b>

                    <span>${b}</span>

                </div>

            `

        ).join("");

}


/* =========================================================
   RASHIFAL
========================================================= */

function renderRashifal() {

    document.querySelector("#rashifalGrid")
        .innerHTML =

        Object.entries(rashifalData)
        .map(

            ([key,d]) => `

                <article class="rashi-card">

                    <div class="rashi-symbol">
                        ${d.symbol}
                    </div>

                    <h3>
                        ${d.name}
                    </h3>

                    <div class="english">
                        ${d.english}
                    </div>

                    <p class="short">
                        ${d.short}
                    </p>

                    <div class="card-meta">

                        <span>
                            शुभ रंग: ${d.color}
                        </span>

                        <span>
                            अंक: ${d.number}
                        </span>

                    </div>

                    <button
                        class="btn btn-primary"
                        type="button"
                        data-rashi="${key}">

                        पूरा राशिफल देखें

                    </button>

                </article>

            `

        ).join("");

}


/* =========================================================
   RASHI INFO
========================================================= */

function renderRashiInfo() {

    document.querySelector("#rashiInfoGrid")
        .innerHTML =

        rashiInfo.map(

            d => `

                <article class="rashi-info">

                    <div class="symbol">
                        ${d[2]}
                    </div>

                    <h3>
                        ${d[0]} — ${d[1]}
                    </h3>

                    <p>
                        तत्व: ${d[3]}
                    </p>

                    <p>
                        स्वामी ग्रह: ${d[4]}
                    </p>

                </article>

            `

        ).join("");

}


/* =========================================================
   PLANETS
========================================================= */

function renderPlanets() {

    document.querySelector("#planetTable")
        .innerHTML =

        planetaryData.map(

            d => `

                <tr>

                    <td>
                        <strong>
                            ${d[0]}
                        </strong>
                    </td>

                    <td>
                        ${d[1]}
                    </td>

                    <td>
                        ${d[2]}
                    </td>

                    <td>
                        ${d[3]}
                    </td>

                </tr>

            `

        ).join("");

}


/* =========================================================
   SERVICES
========================================================= */

function renderServices() {

    document.querySelector("#servicesGrid")
        .innerHTML =

        servicesData.map(

            d => `

                <article class="service-card">

                    <div class="service-icon">
                        ${d[0]}
                    </div>

                    <h3>
                        ${d[1]}
                    </h3>

                    <p>
                        ${d[2]}
                    </p>

                    <a
                        class="btn btn-primary"
                        href="#contact">

                        संपर्क करें

                    </a>

                </article>

            `

        ).join("");

}


/* =========================================================
   MODAL
========================================================= */

const modal =
    document.querySelector("#rashiModal");

const modalTitle =
    document.querySelector("#modalTitle");

const modalSymbol =
    document.querySelector("#modalSymbol");

const modalContent =
    document.querySelector("#modalContent");


function openRashiModal(key) {

    const d = rashifalData[key];

    if (!d) return;


    modalTitle.textContent =
        `${d.name} — ${d.english}`;


    modalSymbol.textContent =
        d.symbol;


    modalContent.innerHTML = [

        ["आज का राशिफल",d.short],

        ["प्रेम",d.love],

        ["करियर",d.career],

        ["धन",d.money],

        ["स्वास्थ्य",d.health],

        ["परिवार",d.family],

        ["उपाय",d.remedy],

        ["शुभ रंग",d.color],

        ["शुभ अंक",d.number]

    ].map(

        ([a,b]) => `

            <div class="modal-item">

                <b>
                    ${a}
                </b>

                <span>
                    ${b}
                </span>

            </div>

        `

    ).join("");


    modal.hidden = false;

    document.body.style.overflow = "hidden";

    modal
        .querySelector(".modal-close")
        .focus();

}


function closeRashiModal() {

    modal.hidden = true;

    document.body.style.overflow = "";

}


/* =========================================================
   MODAL EVENTS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest("[data-rashi]");

        if (card) {

            openRashiModal(
                card.dataset.rashi
            );

        }


        if (
            event.target.matches(
                "[data-close-modal]"
            )
        ) {

            closeRashiModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !modal.hidden
        ) {

            closeRashiModal();

        }

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const nav =
    document.querySelector("#mainNav");


menuToggle.addEventListener(
    "click",
    () => {

        const open =
            nav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(open)
        );

        menuToggle.setAttribute(
            "aria-label",
            open
                ? "मेनू बंद करें"
                : "मेनू खोलें"
        );

    }
);


nav.querySelectorAll("a")
    .forEach(

        link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "open"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "मेनू खोलें"
                    );

                }
            );

        }

    );


/* =========================================================
   HEADER + SCROLL TOP
========================================================= */

const header =
    document.querySelector("#siteHeader");

const scrollTop =
    document.querySelector("#scrollTop");


window.addEventListener(
    "scroll",
    () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 10
        );

        scrollTop.classList.toggle(
            "show",
            window.scrollY > 500
        );

    },
    {
        passive: true
    }
);


scrollTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   CONTACT FORM
========================================================= */

document.querySelector("#contactForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const message =
                document.querySelector(
                    "#formMessage"
                );

            message.textContent =
                "धन्यवाद! आपका संदेश प्राप्त हो गया है।";

            event.target.reset();

        }
    );


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(

                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                }

            );

        },

        {
            threshold: .12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(
        element =>
            observer.observe(element)
    );


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

renderPanchang();

renderNakshatra();

renderRashifal();

renderRashiInfo();

renderPlanets();

renderServices();