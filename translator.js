
document.addEventListener('DOMContentLoaded', () => {
    // --- Translation Dictionary (English to Uzbek) ---
    // Keep the comprehensive dictionary from the previous step here
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

    // --- State ---
    let activeWordSpan = null; // Keep track of the currently highlighted word span
    let highlightedParagraph = null; // Keep track of the highlighted paragraph element

    // --- Functions ---

    // Function to clean word (lowercase, remove surrounding punctuation)
    function cleanWord(word) {
        if (!word) return '';
        return word.replace(/^[.,!?;:"“”’]+|[.,!?;:"“”’]+$/g, '').toLowerCase();
    }

     // Function to wrap words in spans (No changes needed from previous version)
     function wrapWordsInSpans() {
        const paragraphs = contentArea.querySelectorAll('p:not(.drawing-placeholder)');
        paragraphs.forEach(p => {
            const childNodes = Array.from(p.childNodes);
            const newNodes = [];
            childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent;
                    const parts = text.split(/(\s+)/);
                    parts.forEach(part => {
                        if (part.trim().length > 0 && /\S/.test(part)) {
                             const span = document.createElement('span');
                             span.className = 'translatable-word';
                             span.textContent = part;
                             span.dataset.key = cleanWord(part);
                             newNodes.push(span);
                        } else if (part.length > 0) {
                            newNodes.push(document.createTextNode(part));
                        }
                    });
                } else {
                    newNodes.push(node.cloneNode(true));
                }
            });
            p.innerHTML = '';
            newNodes.forEach(newNode => p.appendChild(newNode));
        });
    }


    // Function to show the popup (Modified to handle potential sentence mode)
    function showPopup(targetElement, translation, isSentence = false) {
        popup.textContent = translation;
        popup.classList.add('visible');

        // Position relative to the word span OR the paragraph
        const targetRect = targetElement.getBoundingClientRect();
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;

        let top, left;

        if (isSentence) {
            // Position near the top-center of the paragraph
            top = targetRect.top + window.scrollY - popupHeight - 10; // Above paragraph
            left = targetRect.left + window.scrollX + (targetRect.width / 2) - (popupWidth / 2);
             // If too high, position below paragraph start
             if (top < window.scrollY + 10) {
                  top = targetRect.top + window.scrollY + 15; // Below paragraph start
             }

        } else {
            // Position relative to the word span (existing logic)
            top = targetRect.bottom + window.scrollY + 5; // Below word
            left = targetRect.left + window.scrollX + (targetRect.width / 2) - (popupWidth / 2);
            if (top + popupHeight > window.innerHeight + window.scrollY - 10) {
                top = targetRect.top + window.scrollY - popupHeight - 5; // Above word
            }
        }

        // Adjust horizontal position to stay on screen
        left = Math.max(10, left);
        left = Math.min(left, window.innerWidth + window.scrollX - popupWidth - 10);

        popup.style.top = `${top}px`;
        popup.style.left = `${left}px`;
    }

    // Function to hide the popup
    function hidePopup() {
        popup.classList.remove('visible');
        // Optional: Move off-screen
        // popup.style.top = '-9999px';
        // popup.style.left = '-9999px';
    }

    // Function to remove ALL highlights (word and sentence)
    function removeHighlights() {
        if (activeWordSpan) {
            activeWordSpan.classList.remove('highlighted-word');
            activeWordSpan = null;
        }
        if (highlightedParagraph) {
            highlightedParagraph.classList.remove('highlighted-sentence');
            highlightedParagraph = null;
        }
        hidePopup();
    }

    // Function to get word-by-word sentence translation (BASIC)
    function getSentenceTranslation(paragraphElement) {
        if (!paragraphElement) return "[Translation error]";

        const wordSpans = paragraphElement.querySelectorAll('.translatable-word');
        const translatedWords = [];

        wordSpans.forEach(span => {
            const key = span.dataset.key;
            // Basic phrase check (could be more robust)
            let translation = translations[key];
            const nextEl = span.nextElementSibling;
            if(nextEl && nextEl.classList.contains('translatable-word')) {
                const phraseKey = `${key} ${cleanWord(nextEl.textContent)}`;
                if(translations[phraseKey]) {
                    // If phrase found, use it and potentially skip next word's lookup
                    // For simplicity, we'll just use the word translation here
                    // More complex logic needed to handle phrase output correctly in sequence
                }
            }

            // Fallback to original word if no translation
            translatedWords.push(translation && translation !== "" ? translation : span.textContent);
        });

        // IMPORTANT: This simple join doesn't respect Uzbek grammar rules!
        return translatedWords.join(' ');
    }


    // --- Event Listeners ---

    // Event delegation for word clicks within the content area
    contentArea.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('translatable-word')) {
            // Prevent interfering with text selection
            if (window.getSelection().toString()) {
                removeHighlights(); // Remove highlights if selecting text
                return;
            }

            const parentP = target.closest('p'); // Find the parent paragraph

            // --- Check if clicking the ALREADY highlighted word ---
            if (target === activeWordSpan) {
                // SECOND TAP: Show sentence translation
                removeHighlights(); // Clear previous word highlight first

                if (parentP) {
                    const sentenceTrans = getSentenceTranslation(parentP);
                    console.warn("Sentence translation is basic word-by-word and may be inaccurate.");

                    parentP.classList.add('highlighted-sentence');
                    highlightedParagraph = parentP; // Track highlighted paragraph
                    showPopup(parentP, sentenceTrans, true); // Show popup relative to paragraph
                    activeWordSpan = null; // No word is 'active' in sentence mode
                } else {
                    hidePopup(); // Should not happen if target is valid word span
                }

            } else {
                // --- FIRST TAP on a NEW word ---
                removeHighlights(); // Clear any previous highlights (word or sentence)

                const key = target.dataset.key;
                let wordTranslation = translations[key]; // Direct lookup

                 // Simple phrase check (as before) - refine if needed
                 if (!wordTranslation || wordTranslation === "") {
                     const nextEl = target.nextElementSibling;
                     const prevEl = target.previousElementSibling;
                     let phraseKey = "";
                     if (nextEl && nextEl.classList.contains('translatable-word')) {
                          phraseKey = `${key} ${cleanWord(nextEl.textContent)}`;
                          if (translations[phraseKey]) wordTranslation = translations[phraseKey];
                     }
                     if (!wordTranslation && prevEl && prevEl.classList.contains('translatable-word')) {
                         phraseKey = `${cleanWord(prevEl.textContent)} ${key}`;
                         if (translations[phraseKey]) wordTranslation = translations[phraseKey];
                     }
                     // Add more phrase checks if necessary
                 }


                if (wordTranslation && wordTranslation !== "") {
                    target.classList.add('highlighted-word');
                    activeWordSpan = target; // Track new active word
                    highlightedParagraph = null; // Ensure no sentence highlight
                    showPopup(target, wordTranslation, false); // Show popup relative to word
                } else {
                    // No translation found for this word/phrase
                    hidePopup();
                    console.log(`No translation for key: "${key}" (from word: "${target.textContent}")`);
                }
            }

            event.stopPropagation(); // Prevent body listener closing popup immediately

        }
        // Note: Clicking whitespace within the content area will now fall through
        // to the body listener, which calls removeHighlights()
    });

    // Hide popup and highlights if clicking anywhere else
    document.body.addEventListener('mousedown', (event) => {
        // Check if the click was outside the content area,
        // or directly on the container/h1, or on a non-word element (like <p> itself or image placeholder)
        if (!contentArea.contains(event.target) ||
            event.target === contentArea ||
            event.target.tagName === 'H1' ||
            (contentArea.contains(event.target) && !event.target.classList.contains('translatable-word') && !event.target.closest('.translatable-word')) // Clicked inside content but not on a word
           )
        {
             // Also ensure click isn't on the popup itself (though pointer-events:none helps)
             if(event.target.id !== 'translation-popup') {
                removeHighlights();
             }
        }
    }, true); // Use capture phase


    // --- Initialization ---
    wrapWordsInSpans(); // Process the text on load

    // Initialize Telegram Web App SDK
    try {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
            console.log("Telegram Web App SDK initialized.");
        } else {
            console.log("Telegram Web App script not loaded or not in Telegram environment.");
        }
    } catch (e) {
        console.error("Error initializing Telegram Web App SDK:", e);
    }

}); // End DOMContentLoaded