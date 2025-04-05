// translator.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Comprehensive Translation Dictionary (English to Uzbek) ---
    // Based on Chapter 1 text provided. Keys are lowercase, punctuation removed.
    const translations = {
        // --- Words ---
        "a": "", // Often omitted or part of phrase
        "able": "qodir",
        "about": "haqida",
        "act": "harakat",
        "adventures": "sarguzashtlar",
        "advise": "maslahat bermoq",
        "after": "keyin",
        "age": "yosh",
        "airplanes": "samolyotlar",
        "all": "barcha / hamma",
        "always": "har doim",
        "am": "-man", // (part of 'I am')
        "among": "orasida",
        "an": "", // Often omitted or part of phrase
        "and": "va",
        "animal": "hayvon",
        "answered": "javob berishdi",
        "any": "biror / hech qanday",
        "anything": "hech narsa",
        "arithmetic": "arifmetika",
        "arizona": "Arizona",
        "are": "-dir / -lar", // (e.g., 'they are')
        "as": "sifatida / kabi",
        "aside": "chetga", // (part of 'lay aside')
        "asked": "so'radim",
        "at": "-da / qarab", // (contextual)
        "been": "bo'lgan", // (part of perfect tenses)
        "be": "bo'lmoq",
        "boa": "bo'g'ma", // (part of 'boa constrictor')
        "book": "kitob",
        "bridge": "brij (o'yin)",
        "bring": "olib kelmoq / tushirmoq", // (part of 'bring down')
        "but": "ammo / lekin",
        "by": "tomonidan / -dan / bilan",
        "called": "deb nomlangan / chaqirilgan",
        "career": "karera / faoliyat",
        "can": "-a olmoq", // (modal verb)
        "career": "faoliyat",
        "caused": "sabab bo'ldi", // Not in text, added as example
        "chewing": "chaynamasdan",
        "children": "bolalar",
        "china": "Xitoy",
        "chose": "tanladim",
        "clearly": "aniq",
        "clear-sighted": "ziyrak / दूरंदेश",
        "close": "yaqin",
        "colored": "rangli",
        "come": "kelmoq", // Not in text, added as example
        "concerned": "qiziqqan / aloqador",
        "consequence": "ahamiyat / oqibat",
        "constrictor": "bo'g'uvchi", // (part of 'boa constrictor')
        "constrictors": "bo'g'ma ilonlar",
        "copy": "nusxa",
        "could": "-a olardi", // (modal verb)
        "course": "davomida / yo'nalish",
        "deal": "ko'p / miqdor", // (part of 'great deal')
        "deeply": "chuqur",
        "devote": "bag'ishlamoq",
        "digesting": "hazm qilayotgan",
        "digestion": "hazm qilish",
        "disheartened": "tushkunlikka tushgan",
        "distinguish": "ajratmoq / farqlamoq",
        "down": "pastga", // (part of 'bring down')
        "drawing": "rasm / chizma",
        "drawings": "rasmlar / chizmalar",
        "drew": "chizdim",
        "elephant": "fil",
        "encounters": "uchrashuvlar / to'qnashuvlar",
        "explained": "tushuntirilgan",
        "explaining": "tushuntirish",
        "experiment": "tajriba",
        "failure": "muvaffaqiyatsizlik",
        "find": "topmoq", // (part of 'find out')
        "first": "birinchi",
        "flown": "uchgan", // (part of 'have flown')
        "for": "uchun",
        "forest": "o'rmon",
        "forests": "o'rmonlar",
        "forever": "abadiy / doimo",
        "frighten": "qo'rqitmoq",
        "frightened": "qo'rqqan / qo'rqitgan",
        "from": "-dan",
        "gave": "berdi", // (part of 'gave up')
        "geography": "geografiya",
        "gets": "oladi / bo'ladi", // (part of 'gets lost')
        "glance": "qarash / nazar", // (part of 'at a glance')
        "golf": "golf",
        "grammar": "grammatika",
        "great": "buyuk / juda ko'p",
        "greatly": "juda / katta darajada",
        "grown": "o'sgan / katta bo'lgan", // (part of 'grown-ups')
        "hand": "qo'l", // (part of 'close at hand')
        "has": "bor / ega", // (part of perfect tenses)
        "hasn't": "-madi", // (has not)
        "hat": "shlyapa",
        "have": "bor / ega bo'lmoq",
        "he": "u (erkak)",
        "here": "bu yerda / mana",
        "him": "unga (erkak)",
        "his": "uning (erkak)",
        "history": "tarix",
        "i": "men",
        "if": "agar",
        "improved": "yaxshilangan",
        "in": "-da / ichida",
        "inside": "ichkari / ichida",
        "instead": "o'rniga",
        "intimately": "juda yaqindan",
        "is": "bu / -dir",
        "it": "u / bu",
        "jungle": "changalzor",
        "kept": "saqlagan",
        "knowledge": "bilim",
        "lay": "qo'ymoq", // (part of 'lay aside')
        "learned": "o'rgandim",
        "level": "daraja / sath",
        "life": "hayot",
        "like": "kabi / o'xshash",
        "little": "kichik / ozgina",
        "lived": "yashagan",
        "looked": "ko'rindi / qaradi",
        "lost": "yo'qolgan / adashgan", // (part of 'gets lost')
        "made": "yasadim / qildim",
        "magnificent": "ajoyib / dabdabali",
        "making": "yasash / qilish",
        "man": "odam / erkak",
        "many": "ko'p",
        "masterpiece": "shoh asar",
        "matters": "masalalar / ishlar",
        "me": "menga",
        "meet": "uchrashmoq", // (base form of 'met')
        "met": "uchratdim / uchrashdim",
        "might": "-ishi mumkin edi", // (modal verb)
        "months": "oylar",
        "move": "harakatlanmoq / ko'chmoq",
        "much": "ko'p",
        "my": "mening",
        "myself": "o'zimni / o'zim",
        "nature": "tabiat",
        "neckties": "galstuklar",
        "need": "kerak bo'lmoq / ehtiyoj sezmoq",
        "never": "hech qachon",
        "night": "tun",
        "not": "emas / -ma",
        "number": "raqam",
        "of": "-ning / haqida",
        "old": "eski / qari / yoshda",
        "on": "-da / ustida", // Not prominent, but added
        "once": "bir marta / bir paytlar",
        "one": "bir / kimsa",
        "opinion": "fikr",
        "or": "yoki",
        "other": "boshqa", // Not in text, added as example
        "out": "tashqari", // (part of 'find out')
        "outside": "tashqarisi / tashqarisida",
        "over": "ustida / bo'ylab / tugadi",
        "painter": "rassom",
        "parts": "qismlar",
        "pencil": "qalam",
        "people": "odamlar",
        "person": "shaxs / odam",
        "picture": "rasm / surat",
        "pilot": "uchuvchi / boshqarmoq",
        "pleased": "xursand / mamnun",
        "politics": "siyosat",
        "pondered": "chuqur o'yladim",
        "prey": "o'lja",
        "primeval": "qadimgi / ibtidoiy",
        "profession": "kasb / hunar",
        "response": "javob / reaksiya",
        "said": "dedi / aytilgan",
        "saw": "ko'rdim",
        "say": "demoq / aytmoq",
        "see": "ko'rmoq",
        "seemed": "ko'rindi / tuyuldi",
        "sensible": "oqilona / aqli raso",
        "seen": "ko'rgan",
        "she": "u (ayol)",
        "should": "-ishi kerak", // (modal verb)
        "showed": "ko'rsatdim",
        "showing": "ko'rsatish",
        "since": "chunki / -dan beri",
        "six": "olti",
        "sleep": "uxlamoq",
        "so": "shunday qilib / juda",
        "some": "ba'zi / bir oz",
        "something": "nimadir",
        "stars": "yulduzlar",
        "stories": "hikoyalar",
        "such": "bunday / shunday",
        "succeeded": "muvaffaqiyat qozondim / uddaladim",
        "swallow": "yutmoq",
        "swallowing": "yutayotgan",
        "talk": "gaplashmoq / suhbatlashmoq",
        " Teni": "ularni",
        "that": "u / anavi / shu / -ki",
        "the": "", // Often omitted or implied
        "their": "ularning",
        "them": "ularga / ularni",
        "themselves": "o'zlari",
        "then": "keyin / unda",
        "they": "ular",
        "things": "narsalar",
        "this": "bu / shu",
        "through": "orqali / davomida",
        "time": "vaqt / marta / safar",
        "tiresome": "zerikarli / charchatadigan",
        "to": "-ga / -ga / uchun",
        "tried": "harakat qildim / sinab ko'rdim",
        "true": "haqiqiy / rost",
        "try": "harakat qilmoq / sinab ko'rmoq",
        "two": "ikki",
        "understand": "tushunmoq",
        "understanding": "tushunish / tushuncha",
        "up": "yuqoriga", // (part of 'gave up')
        "useful": "foydali",
        "valuable": "qimmatli / qadrli",
        "very": "juda",
        "was": "edi / bo'lgan",
        "way": "yo'l / usul", // Not in text, added as example
        "went": "bordi", // Not in text, added as example
        "were": "edilar / bo'lganlar",
        "what": "nima / qanday",
        "when": "qachon",
        "whenever": "har qachon / har safar",
        "whether": "-mi yoki yo'qmi / -ligini",
        "which": "qaysi / qaysiki",
        "whole": "butun / yaxlit",
        "who": "kim / kimki",
        "whoever": "kim bo'lmasin / har kim",
        "why": "nega / nima uchun",
        "will": "-adi / -adi", // Future tense, not in text
        "with": "bilan",
        "without": "-siz / -masdan",
        "work": "ish / mehnat",
        "world": "dunyo",
        "would": "-ardi / -ardi", // (conditional/past habit)
        "years": "yillar", // Often used with 'old'

        // --- Phrases (lowercase keys) ---
        "a glance": "bir qarash", // (part of 'at a glance')
        "a great deal": "juda ko'p",
        "a great many": "juda ko'p",
        "a little": "ozgina",
        "a magnificent picture": "ajoyib rasm",
        "a picture of a hat": "shlyapaning rasmi",
        "a person of true understanding": "haqiqiy tushunchaga ega odam",
        "a sensible man": "oqilona odam",
        "act of swallowing": "yutish harakati",
        "age of six": "olti yosh",
        "all parts": "barcha qismlari",
        "all parts of the world": "dunyoning barcha qismlari",
        "at a glance": "bir qarashda",
        "at all": "umuman / hech",
        "at hand": "yaqin", // (part of 'close at hand')
        "at the age": "yoshida",
        "be frightened": "qo'rqmoq",
        "boa constrictor": "bo'g'ma ilon",
        "boa constrictors": "bo'g'ma ilonlar",
        "bring myself down": "o'zimni tushirmoq",
        "by themselves": "o'zlari",
        "close at hand": "juda yaqin",
        "colored pencil": "rangli qalam",
        "course of this life": "bu hayot davomida",
        "drawing number one": "birinchi raqamli rasmim",
        "drawing number two": "ikkinchi raqamli rasmim",
        "failure of": "muvaffaqiyatsizligi",
        "find out": "aniqlamoq",
        "gave up": "voz kechdim",
        "gets lost": "adashib qolmoq",
        "great deal": "ko'p miqdorda",
        "great many encounters": "juda ko'p uchrashuvlar",
        "great many people": "juda ko'p odamlar",
        "grown-up": "katta odam", // singular
        "grown-ups": "kattalar", // plural
        "had been": "bo'lgan edi(m)",
        "has been": "bo'ldi",
        "hasn't much improved": "ko'p ham yaxshilanmadi",
        "have always kept": "har doim saqlaganman",
        "have been concerned": "qiziqqanlar / shug'ullanganlar",
        "have flown": "uchganman",
        "have had": "bo'lgan / ega bo'lganman",
        "have lived": "yashaganman",
        "have things explained": "narsalarni tushuntirish kerak",
        "in the act of": "jarayonida",
        "in the book": "kitobda",
        "in the course": "davomida",
        "in the night": "tunda",
        "inside or the outside": "ichkaridan yoki tashqaridan",
        "instead of": "o'rniga", // common phrase form
        "is true": "rost",
        "it is true": "bu haqiqat",
        "it looked": "u ko'rinar edi",
        "it said": "aytildi / yozilgan edi",
        "it was": "u edi / bu edi",
        "i was": "men edim",
        "lay aside": "bir chetga surib qo'ymoq",
        "learned to pilot": "boshqarishni o'rgandim",
        "looked something like": "-ga o'xshardi",
        "matters of consequence": "muhim masalalar",
        "might have been": "bo'lishi mumkin edi",
        "my drawing": "mening rasmim",
        "my first drawing": "mening birinchi rasmim",
        "my opinion": "mening fikrim",
        "need for digestion": "hazm qilish uchun kerak",
        "need to have": "kerak bo'ladi",
        "not able": "qodir emas",
        "number one": "birinchi raqam",
        "number two": "ikkinchi raqam",
        "of course": "albatta", // common phrase, not exactly in text this way
        "of six": "olti", // as in 'age of six'
        "once when": "bir paytlar ...-ganda",
        "one of them": "ulardan biri",
        "over all parts": "barcha qismlari bo'ylab",
        "parts of the world": "dunyoning qismlari",
        "picture in a book": "kitobdagi rasm",
        "picture of": "rasmi",
        "pleased to have met": "uchrashganidan xursand",
        "primeval forest": "qadimgi o'rmon",
        "primeval forests": "qadimgi o'rmonlar",
        "see it clearly": "uni aniq ko'rmoq",
        "seemed to me": "menga tuyuldi",
        "should any one": "kimdir ... kerakmi?",
        "six months": "olti oy",
        "six years": "olti yil",
        "six years old": "olti yoshda",
        "so that": "shunday qilib / uchun",
        "so then": "shundan keyin",
        "such knowledge": "bunday bilim",
        "swallow their prey": "o'z o'ljasini yutmoq",
        "that is": "ya'ni / bu",
        "that is why": "shuning uchun",
        "the age of": "yoshida",
        "the book": "kitob", // 'the' context
        "the drawing": "rasm", // 'the' context
        "the grown-ups": "kattalar", // 'the' context
        "the inside": "ichki qism",
        "the jungle": "changalzor", // 'the' context
        "the six months": "olti oy", // 'the' context
        "to be always": "har doim bo'lish",
        "to find out": "aniqlash uchun",
        "to have met": "uchrashganlik",
        "to lay aside": "chetga surib qo'yish",
        "to move": "harakatlanish",
        "to pilot": "boshqarish",
        "to see": "ko'rish",
        "to understand": "tushunish",
        "true stories": "haqiqiy hikoyalar",
        "true stories from nature": "tabiat haqidagi haqiqiy hikoyalar",
        "true understanding": "haqiqiy tushuncha",
        "very useful": "juda foydali",
        "was not": "emas edi",
        "when i was": "men ... bo'lganimda",
        "whether the": "-mi yoki yo'qligi",
        "who have been": "bo'lganlar",
        "who seemed": "ko'ringan",
        "without chewing": "chaynamasdan",
        "work with": "bilan ishlash",
        "would always say": "har doim aytar edi",
        "would be": "bo'lar edi",
        "would bring": "olib kelar edi / tushirar edi",
        "would never talk": "hech qachon gaplashmas edim",
        "would talk": "gaplashar edim",
        "would try": "harakat qilar edim"

        // Add any other words or specific phrases identified during testing
    };

    // --- Elements ---
    const contentArea = document.getElementById('chapter-content');
    const popup = document.getElementById('translation-popup');
    let activeWordSpan = null; // Keep track of the currently active word span

    // --- Functions ---

    // Function to clean word (lowercase, remove trailing punctuation)
    function cleanWord(word) {
        if (!word) return '';
        // Remove common trailing punctuation and convert to lowercase
        // Updated regex to handle more punctuation cases including quotes
        return word.replace(/^[.,!?;:"“”’]+|[.,!?;:"“”’]+$/g, '').toLowerCase();
    }


    // Function to wrap words in spans
    function wrapWordsInSpans() {
        const paragraphs = contentArea.querySelectorAll('p:not(.drawing-placeholder)');

        paragraphs.forEach(p => {
            const childNodes = Array.from(p.childNodes);
            const newNodes = [];

            childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent;
                    const parts = text.split(/(\s+)/); // Split by space, keep spaces

                    parts.forEach(part => {
                        if (part.trim().length > 0 && /\S/.test(part)) { // It's a word/token
                             // Check if the part itself contains internal punctuation like hyphen (e.g., grown-ups)
                             // For simplicity here, we treat hyphenated words as single units.
                             // More complex splitting (e.g., on sentence-ending punctuation within a token) is avoided.
                             const span = document.createElement('span');
                             span.className = 'translatable-word';
                             span.textContent = part; // Display original form with punctuation
                             span.dataset.key = cleanWord(part); // Store cleaned key for lookup
                             newNodes.push(span);
                        } else if (part.length > 0) { // It's whitespace
                            newNodes.push(document.createTextNode(part));
                        }
                    });
                } else {
                    // Keep other node types (like placeholders, maybe <em> etc. if added later)
                    newNodes.push(node.cloneNode(true));
                }
            });

            // Replace paragraph content
            p.innerHTML = '';
            newNodes.forEach(newNode => p.appendChild(newNode));
        });
    }


    // Function to show the popup
    function showPopup(spanElement, translation) {
        hidePopup(); // Hide any previous popup

        popup.textContent = translation;
        popup.classList.add('visible'); // Make it visible via CSS transition

        const wordRect = spanElement.getBoundingClientRect();
        const popupWidth = popup.offsetWidth; // Get width after content is set
        const popupHeight = popup.offsetHeight; // Get height after content is set

        // Position below by default
        let top = wordRect.bottom + window.scrollY + 5;
        let left = wordRect.left + window.scrollX + (wordRect.width / 2) - (popupWidth / 2);

        // Adjust if popup goes off bottom edge
        if (top + popupHeight > window.innerHeight + window.scrollY - 10) {
            top = wordRect.top + window.scrollY - popupHeight - 5; // Position above
        }

        // Adjust if popup goes off left/right edges
        left = Math.max(10, left); // Ensure min 10px from left edge
        left = Math.min(left, window.innerWidth + window.scrollX - popupWidth - 10); // Ensure min 10px from right edge

        popup.style.top = `${top}px`;
        popup.style.left = `${left}px`;

        activeWordSpan = spanElement;
    }

    // Function to hide the popup
    function hidePopup() {
        popup.classList.remove('visible');
        // Optional: Move off-screen immediately to prevent brief visibility during fade-out animation
        // popup.style.top = '-9999px';
        // popup.style.left = '-9999px';
        activeWordSpan = null;
    }


    // --- Event Listeners ---

    // Event delegation for word clicks within the content area
    contentArea.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('translatable-word')) {
             // If user is selecting text, don't trigger popup
             if (window.getSelection().toString()) {
                 hidePopup(); // Hide popup if selection is happening
                 return;
             }

            // If clicking the same word again, hide the popup
            if (target === activeWordSpan) {
                hidePopup();
                return;
            }

            const key = target.dataset.key;
            let translation = translations[key]; // Direct word lookup first

            // Simple Phrase Handling: Check for predefined phrases involving this word
            // This is basic; more robust NLP would be needed for complex cases.
             if (!translation || translation === "") {
                 const textContent = target.textContent; // Original text from span
                 const prevEl = target.previousElementSibling;
                 const nextEl = target.nextElementSibling;
                 const prevPrevEl = prevEl ? prevEl.previousElementSibling : null;
                 const nextNextEl = nextEl ? nextEl.nextElementSibling : null;

                 // Check common patterns (add more as needed)
                 let phraseKey = "";
                 // Two-word phrases (current + next)
                 if (nextEl) {
                     phraseKey = `${key} ${cleanWord(nextEl.textContent)}`;
                     if (translations[phraseKey]) translation = translations[phraseKey];
                 }
                 // Two-word phrases (prev + current)
                 if (!translation && prevEl) {
                      phraseKey = `${cleanWord(prevEl.textContent)} ${key}`;
                     if (translations[phraseKey]) translation = translations[phraseKey];
                 }
                 // Three-word phrases (current + next + nextNext) - e.g., "act of swallowing"
                 if (!translation && nextEl && nextNextEl) {
                      phraseKey = `${key} ${cleanWord(nextEl.textContent)} ${cleanWord(nextNextEl.textContent)}`;
                      if (translations[phraseKey]) translation = translations[phraseKey];
                 }
                  // Three-word phrases (prev + current + next)
                  if (!translation && prevEl && nextEl) {
                       phraseKey = `${cleanWord(prevEl.textContent)} ${key} ${cleanWord(nextEl.textContent)}`;
                       if (translations[phraseKey]) translation = translations[phraseKey];
                  }
                   // Three-word phrases (prevPrev + prev + current)
                   if (!translation && prevPrevEl && prevEl) {
                        phraseKey = `${cleanWord(prevPrevEl.textContent)} ${cleanWord(prevEl.textContent)} ${key}`;
                        if (translations[phraseKey]) translation = translations[phraseKey];
                   }

                 // Specific overrides for very common function words if they are part of a known phrase from dictionary
                  if ((key === 'a' || key === 'an' || key === 'the') && translation === "") {
                       // Check combinations like 'at a glance' explicitly defined
                       if (prevEl && translations[`${cleanWord(prevEl.textContent)} ${key}`]) {
                           translation = translations[`${cleanWord(prevEl.textContent)} ${key}`];
                       } else if (nextEl && translations[`${key} ${cleanWord(nextEl.textContent)}`]) {
                           translation = translations[`${key} ${cleanWord(nextEl.textContent)}`];
                       }
                       // Add more specific phrase checks if needed
                  }
            }


            if (translation && translation !== "") {
                showPopup(target, translation);
                event.stopPropagation(); // Prevent body click listener from firing immediately
            } else {
                hidePopup(); // No translation found, ensure popup is hidden
                console.log(`No translation for key: "${key}" (from word: "${target.textContent}")`);
            }
        }
        // If clicking *not* on a word span *within* the content area (e.g., whitespace between words)
        // else if (contentArea.contains(target)) {
        //     hidePopup();
        // }
    });

    // Hide popup if clicking anywhere outside of a word span
    // Use 'mousedown' instead of 'click' to potentially hide faster before selection might start
    document.body.addEventListener('mousedown', (event) => {
        // Check if the click target is NOT a translatable word OR the popup itself
        if (!event.target.classList.contains('translatable-word') && event.target.id !== 'translation-popup') {
             hidePopup();
        }
    }, true); // Use capture phase to catch early


    // --- Initialization ---
    wrapWordsInSpans(); // Process the text on load

    // Initialize Telegram Web App SDK
    try {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready(); // Inform Telegram app is ready
            window.Telegram.WebApp.expand(); // Request app to expand to full height
            // Optional: Disable swipe down to close, might interfere with scrolling
            // window.Telegram.WebApp.disableVerticalSwipes();
            console.log("Telegram Web App SDK initialized.");
             // Optional: Apply theme colors dynamically if needed later
             // document.body.style.backgroundColor = window.Telegram.WebApp.themeParams.bg_color || '#ffffff';
             // document.body.style.color = window.Telegram.WebApp.themeParams.text_color || '#000000';
        } else {
            console.log("Telegram Web App script not loaded or not in Telegram environment.");
        }
    } catch (e) {
        console.error("Error initializing Telegram Web App SDK:", e);
    }

}); // End DOMContentLoaded
