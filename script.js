// بيانات المنتجات
const products = [
    {
        id: 1,
        name_ar: "عطر خمرة الفاخر",
        type: 'perfume',
        price: 249.00,
        old_price: 299.00,
        images: ['./images/khamrah.jpg'],
        description_ar: "عطر خمرة الفاخر من لطافة يجمع بين نفحات التوابل الدافئة والعود الغني. تبدأ الرائحة بلمسات منعشة من البرغموت والقرفة، وتتطور إلى قلب عطري من زهر العسل والياسمين. تستقر الرائحة على قاعدة دافئة من الفانيليا والعود وخشب الصندل، مما يمنحه ثباتًا عالياً.",
        quote: "كأنما العطر من أنفاسها سُرقا، والشمس من وجنتيها أشرقت غسقا.",
        bestseller: true,
        stock: 5,
        materials: ["عود", "فانيليا", "قرفة", "برغموت"],
        sku: "PER-001",
        isNew: true,
        onSale: true,
        mood: 'مسائي',
        occasion: 'رسمي'
    },
    {
        id: 2,
        name_ar: "عطر سحر الشرق",
        type: 'perfume',
        price: 199.00,
        images: ['./images/ihsas.webp', './images/arab.jpg'],
        description_ar: "عطر سحر الشرق هو مزيج شرقي آسر يجسد الأناقة العربية. يفتتح بنفحات من الورد الدمشقي والزعفران، يتوسطه قلب من المسك والعنبر، وتستقر قاعدته على خشب الصندل والعود، مما يترك انطباعًا فاخرًا لا يُنسى.",
        quote: "أنتِ القصيدة والمنفى وزنبقة، أنتِ الحنان وأنتِ العطر والرحم.",
        bestseller: true,
        stock: 12,
        materials: ["مسك", "ورد", "ياسمين", "عود"],
        sku: "PER-002",
        isNew: false,
        onSale: false,
        mood: 'يومي',
        occasion: 'نهاري'
    },
    {
        id: 5,
        name_ar: "عطر المبدع",
        type: 'perfume',
        price: 229.00,
        images: ['./images/المبدع.webp', './images/الهيبة.webp'],
        description_ar: "عطر المبدع هو تحفة عطرية تجمع بين الأناقة والغموض. يفتتح العطر بنفحات منعشة من الحمضيات، ثم يكشف عن قلب من البهارات الدافئة مثل الهيل والقرفة. قاعدته غنية بخشب الأرز والباتشولي، مما يمنحه عمقاً وثباتاً يدوم طويلاً.",
        quote: "الإبداع يكمن في التفاصيل، كما تفاصيل هذا العطر الفاخر.",
        bestseller: true,
        stock: 10,
        materials: ["أخشاب", "بهارات دافئة", "مسك", "باتشولي"],
        sku: "PER-003",
        isNew: true,
        onSale: false,
        mood: 'جريء',
        occasion: 'رسمي'
    },
    {
        id: 6,
        name_ar: "عطر الهيبة",
        type: 'perfume',
        price: 269.00,
        old_price: 299.00,
        images: ['./images/الهيبة.webp', './images/امير العود.webp'],
        description_ar: "عطر الهيبة من لطافة هو عطر شرقي خشبي يجسد القوة والحضور. يفتتح بمزيج من الزعفران والباتشولي، ويتبعه قلب من الورد والمسك. قاعدته غنية بالعود الفاخر والعنبر، مما يمنحه ثباتاً قوياً ورائحة ملكية تعكس الفخامة.",
        quote: "الهيبة في الكلام لا في المظهر، وهذا العطر يمنحك كليهما.",
        bestseller: true,
        stock: 7,
        materials: ["عود", "ورد دمشقي", "عنبر", "زعفران"],
        sku: "PER-004",
        isNew: false,
        onSale: true,
        mood: 'ملكي',
        occasion: 'سهرة'
    },
    {
        id: 7,
        name_ar: "عطر أمير العود",
        type: 'perfume',
        price: 289.00,
        images: ['./images/امير العود.webp'],
        description_ar: "عطر أمير العود هو عطر شرقي فاخر من لطافة يرتكز على العود الأصيل. تبدأ رائحته بنفحات البخور والتوابل، ويتوسطه قلب خشبي من العود وخشب الصندل. قاعدته غنية بالعنبر والفانيليا، مما يمنحها لمسة دافئة وحسية تدوم طويلاً وتجعله مثالياً للسهرات.",
        quote: "العودُ في الحبّ لا يُباع ولا يُشترى، وهذا العطر يستحق أكثر.",
        bestseller: false,
        stock: 15,
        materials: ["عود", "توابل", "بخور", "عنبر"],
        sku: "PER-005",
        isNew: false,
        onSale: false,
        mood: 'غامض',
        occasion: 'سهرة'
    },
    {
        id: 8,
        name_ar: "عطر أنا الملك",
        type: 'perfume',
        price: 279.00,
        images: ['./images/انا الملك.webp', './images/تاج الملك.webp'],
        description_ar: "عطر أنا الملك من لطافة هو عطر يجسد القوة والسيادة. يفتتح بنفحات منعشة من الحمضيات، ويتبعه قلب من زهر البرتقال والتوابل. قاعدته غنية بالباتشولي، خشب الصندل، والفانيليا، مما يمنحه ثباتًا عاليًا ورائحة قوية تعكس شخصية واثقة.",
        quote: "أنا الملك، فلا أحد غيري، ورائحتي تعكس مكانتي.",
        bestseller: true,
        stock: 8,
        materials: ["عود", "باتشولي", "فانيليا", "خشب الصندل"],
        sku: "PER-006",
        isNew: false,
        onSale: false,
        mood: 'واثق',
        occasion: 'رسمي'
    },
    {
        id: 9,
        name_ar: "عطر تاج الملك",
        type: 'perfume',
        price: 259.00,
        images: ['./images/تاج الملك.webp', './images/فخر العود.webp'],
        description_ar: "عطر تاج الملك من لطافة هو عطر شرقي خشبي يمنحك شعوراً بالفخامة والسلطة. يتميز بمزيج فريد من العود وخشب الصندل في القاعدة، مع نفحات عليا من الحمضيات واللافندر. قلب العطر يحتوي على لمسات من الزنجبيل والتوابل، مما يجعله عطراً قوياً وثابتاً.",
        quote: "التاجُ لا يوضعُ إلا على رأسٍ حرٍّ، وهذا العطر هو تاجُك.",
        bestseller: false,
        stock: 11,
        materials: ["عود", "خشب الصندل", "زنجبيل", "لافندر"],
        sku: "PER-007",
        isNew: false,
        onSale: false,
        mood: 'فخم',
        occasion: 'سهرة'
    },
    {
        id: 10,
        name_ar: "عطر فخر العود",
        type: 'perfume',
        price: 219.00,
        images: ['./images/فخر العود.webp', './images/arab.jpg'],
        description_ar: "عطر فخر العود من لطافة هو عطر خشبي شرقي فاخر. يفتتح بنفحات من العود الفاخر، ويتبعه قلب من الورد والياسمين، مما يمنحه لمسة ناعمة وأنيقة. قاعدته غنية بالمسك والعنبر، ليعطي رائحة متوازنة وعصرية تدوم طويلاً.",
        quote: "أفخر بعطري، فهو هويتي وشخصيتي.",
        bestseller: true,
        stock: 9,
        materials: ["عود", "أزهار", "مسك", "عنبر"],
        sku: "PER-008",
        isNew: false,
        onSale: false,
        mood: 'هادئ',
        occasion: 'يومي'
    },
    {
        id: 11,
        name_ar: "عطر قائد الفرسان",
        type: 'perfume',
        price: 259.00,
        images: ['./images/قائد الفرسان.webp'],
        description_ar: "عطر قائد الفرسان من لطافة يجسد الشجاعة والقوة. يتميز بمزيج فريد من الجلد المدبوغ والأخشاب في قاعدته، مع نفحات عليا من الفواكه والبرغموت. قلبه غني بلمسات حارة من الهيل والفلفل الوردي، مما يمنحه رائحة رجالية قوية ومثيرة للإعجاب.",
        quote: "كن قائدًا، ولا تتبع إلا شغفك، وعطرك هو سلاحك السري.",
        bestseller: false,
        stock: 6,
        materials: ["عود", "جلد", "أخشاب", "هيل", "برغموت"],
        sku: "PER-009",
        isNew: true,
        onSale: false,
        mood: 'قوي',
        occasion: 'مسائي'
    }
];

// بيانات الأسئلة الشائعة
const faqs = [
    { question: "ما هي طرق الدفع المتاحة؟", answer: "نوفر حالياً خيار الدفع عند الاستلام فقط لضمان راحتكم." },
    { question: "كم تستغرق مدة الشحن؟", answer: "تتراوح مدة الشحن داخل المغرب بين 2-5 أيام عمل." },
    { question: "هل يمكنني إرجاع المنتج؟", answer: "نعم، يمكنك إرجاع المنتج خلال 7 أيام من تاريخ الاستلام، بشرط أن يكون بحالته الأصلية." },
    { question: "كيف يمكنني تتبع طلبي؟", answer: "بعد تأكيد الطلب، سيتم إرسال رقم التتبع عبر رسالة نصية أو واتساب." }
];

// روابط صور السلايدر
const heroImages = [
    './images/khamrah.jpg',
    './images/ihsas.webp'
];

// المتغيرات الرئيسية
let currentPage = 'home';
let cart = []; 
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let productsToCompare = [];
let selectedProduct = null;
let activeFilter = 'all';
const discountEndTime = new Date().getTime() + 1200000;
let searchResults = [];
let appliedCoupon = null;
let loyaltyPoints = parseInt(localStorage.getItem('loyaltyPoints')) || 0;
let userName = localStorage.getItem('userName') || "عميلنا";

// عناصر DOM
const pageContent = document.getElementById('page-content');
const wishlistCountSpan = document.getElementById('wishlist-count');
const modal = document.getElementById("myModal");
const modalMessage = document.getElementById("modal-message");
const closeButton = document.querySelector(".close-button");
const searchToggleBtn = document.getElementById('search-toggle');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggleBtn = document.getElementById('theme-toggle');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const luckyWheelModal = document.getElementById('lucky-wheel-modal');
const spinWheelBtn = document.getElementById('spin-wheel-btn');
const wheelResult = document.getElementById('wheel-result');
const quickViewModal = document.getElementById('quick-view-modal');
const quickViewContent = document.getElementById('quick-view-content');
const closeQuickViewBtn = document.getElementById('close-quick-view');
const compareModal = document.getElementById('compare-modal');
const compareContent = document.getElementById('compare-content');
const closeCompareModal = document.getElementById('close-compare-modal');
const perfumeQuizModal = document.getElementById('perfume-quiz-modal');

// وظائف مساعدة
function showMessage(message) {
    modalMessage.textContent = message;
    modal.classList.remove('opacity-0', 'invisible');
    modal.classList.add('opacity-100', 'visible');
}

function hideMessage() {
    modal.classList.remove('opacity-100', 'visible');
    modal.classList.add('opacity-0', 'invisible');
}

function showLuckyWheel() {
    if (localStorage.getItem('wheel-spun') === 'true') {
        return;
    }
    luckyWheelModal.classList.remove('opacity-0', 'invisible');
    luckyWheelModal.classList.add('opacity-100', 'visible');
}

function hideLuckyWheel() {
    luckyWheelModal.classList.remove('opacity-100', 'visible');
    luckyWheelModal.classList.add('opacity-0', 'invisible');
}

function showQuickView(product) {
    quickViewContent.innerHTML = renderQuickView(product);
    quickViewModal.classList.remove('opacity-0', 'invisible');
    quickViewModal.classList.add('opacity-100', 'visible');
}

function hideQuickView() {
    quickViewModal.classList.remove('opacity-100', 'visible');
    quickViewModal.classList.add('opacity-0', 'invisible');
}

function showCompareModal() {
    compareContent.innerHTML = renderComparePage();
    compareModal.classList.remove('opacity-0', 'invisible');
    compareModal.classList.add('opacity-100', 'visible');
}

function hideCompareModal() {
    compareModal.classList.remove('opacity-100', 'visible');
    compareModal.classList.add('opacity-0', 'invisible');
}

function updateWishlistCount() {
    const count = wishlist.length;
    wishlistCountSpan.textContent = count;
    wishlistCountSpan.classList.toggle('scale-100', count > 0);
    wishlistCountSpan.classList.toggle('scale-0', count === 0);
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function saveLoyaltyPoints() {
    localStorage.setItem('loyaltyPoints', loyaltyPoints);
}

function toggleWishlist(product) {
    const index = wishlist.findIndex(item => item.id === product.id);
    if (index > -1) {
        wishlist.splice(index, 1);
        showMessage('تمت إزالة المنتج من المفضلة.');
    } else {
        wishlist.push(product);
        showMessage('تمت إضافة المنتج إلى المفضلة.');
    }
    updateWishlistCount();
    saveWishlist();
    renderPage();
}

function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    let starsHtml = '';
    for (let i = 0; i < fullStars; i++) {
        starsHtml += `<i class="fas fa-star text-amber-500"></i>`;
    }
    if (hasHalfStar) {
        starsHtml += `<i class="fas fa-star-half-alt text-amber-500"></i>`;
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += `<i class="far fa-star text-amber-500 dark:text-gray-400"></i>`;
    }
    return starsHtml;
}

function createProductCard(p) {
    const isWished = wishlist.some(item => item.id === p.id);
    const heartClass = isWished ? 'fas fa-heart text-red-500' : 'far fa-heart text-gray-500 dark:text-gray-400';
    
    let badgeHtml = '';
    if (p.isNew) {
        badgeHtml = `<span class="product-badge new-badge">جديد</span>`;
    } else if (p.onSale) {
        badgeHtml = `<span class="product-badge sale-badge">عرض</span>`;
    } else if (p.stock === 0) {
        badgeHtml = `<span class="product-badge sold-out-badge">نفد المخزون</span>`;
    } else if (p.stock > 0 && p.stock <= 5) { // خاصية جديدة: تنبيه المخزون المحدود
        badgeHtml = `<span class="product-badge limited-stock-badge">الكمية محدودة</span>`;
    }

    const priceHtml = p.old_price ?
        `<p class="text-gray-500 text-sm line-through ml-2">${p.old_price.toFixed(2)} درهم</p>
         <p class="text-amber-700 text-lg font-bold dark:text-amber-500">${p.price.toFixed(2)} درهم</p>`
        : `<p class="text-amber-700 text-lg font-bold dark:text-amber-500">${p.price.toFixed(2)} درهم</p>`;

    return `
        <div data-id="${p.id}" class="product-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer relative group">
            ${badgeHtml}
            <div class="product-image-container">
                <img src="${p.images[0]}" alt="${p.name_ar}" class="w-full h-72 object-cover product-main-image" data-action="view-product" data-id="${p.id}" />
                ${p.images.length > 1 ? `<img src="${p.images[1]}" alt="${p.name_ar}" class="w-full h-72 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 product-hover-image" data-action="view-product" data-id="${p.id}" />` : ''}
            </div>
            <div class="p-6 text-center">
                <h3 class="text-xl font-semibold text-gray-800 mb-2 dark:text-white" data-action="view-product" data-id="${p.id}">${p.name_ar}</h3>
                <div class="flex items-center justify-center">${priceHtml}</div>
                <div class="flex justify-center space-x-2 mt-4">
                    <button data-action="quick-view" data-id="${p.id}" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300 transition-colors dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">نظرة سريعة</button>
                    ${p.stock > 0 ? `<button data-action="checkout-now" data-id="${p.id}" class="bg-amber-700 text-white font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-colors">شراء الآن</button>` : `<span class="bg-gray-400 text-white font-bold py-2 px-6 rounded-full">نفد المخزون</span>`}
                </div>
            </div>
        </div>
    `;
}

function renderQuickView(product) {
    const isWished = wishlist.some(item => item.id === product.id);
    const heartIcon = isWished ? 'fas fa-heart text-red-500' : 'far fa-heart text-gray-500 dark:text-gray-400';
    
    const priceHtml = product.old_price ?
        `<p class="text-gray-500 text-lg line-through ml-2">${product.old_price.toFixed(2)} درهم</p>
         <p class="text-3xl font-bold text-amber-700 dark:text-amber-500">${product.price.toFixed(2)} درهم</p>`
        : `<p class="text-3xl font-bold text-amber-700 dark:text-amber-500">${product.price.toFixed(2)} درهم</p>`;

    const quickCheckoutBtn = product.stock > 0 ? `
        <button data-action="checkout-now" data-id="${product.id}" class="w-full bg-amber-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-600 transition-colors">
            شراء الآن
        </button>` : `
        <span class="w-full text-center bg-gray-400 text-white font-bold py-3 rounded-full shadow-lg">نفد المخزون</span>`;

    return `
        <div class="md:w-1/2">
            <img src="${product.images[0]}" alt="${product.name_ar}" class="w-full rounded-xl shadow-lg mb-4" />
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0 product-detail-box bg-white p-6 rounded-xl shadow-lg dark:bg-gray-700">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 dark:text-white">${product.name_ar}</h1>
             <div class="flex items-end mb-6">${priceHtml}</div>
            
            <p class="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">${product.description_ar}</p>
            
            ${quickCheckoutBtn}
            <button data-action="toggle-wishlist" data-id="${product.id}" class="w-full mt-2 bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition-colors dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                 <i class="${heartIcon} ml-2"></i>
                 <span>${isWished ? 'إزالة من المفضلة' : 'أضف إلى المفضلة'}</span>
            </button>
        </div>
    `;
}

function renderPage() {
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.classList.remove('hidden');
    setTimeout(() => {
        pageContent.innerHTML = '';
        switch (currentPage) {
            case 'home':
                pageContent.innerHTML = renderHomepage();
                startHeroSlider();
                startCountdownTimer();
                break;
            case 'shop':
                pageContent.innerHTML = renderShopPage();
                const sortSelect = document.getElementById('sort-by');
                if(sortSelect) {
                    sortSelect.value = localStorage.getItem('sortBy') || 'default';
                    sortSelect.addEventListener('change', () => {
                        localStorage.setItem('sortBy', sortSelect.value);
                        renderPage();
                    });
                }
                break;
            case 'product':
                if (selectedProduct) {
                    pageContent.innerHTML = renderProductPage(selectedProduct);
                    const mainProductImage = document.getElementById('main-product-image');
                    document.querySelectorAll('.thumbnail-img').forEach(thumbnail => {
                        thumbnail.addEventListener('mouseover', () => {
                            mainProductImage.src = thumbnail.dataset.src;
                        });
                    });
                }
                break;
            case 'checkout':
                pageContent.innerHTML = renderCheckoutPage();
                break;
            case 'about':
                pageContent.innerHTML = renderAboutPage();
                break;
            case 'privacy':
                pageContent.innerHTML = renderPrivacyPage();
                break;
            case 'terms':
                pageContent.innerHTML = renderTermsPage();
                break;
            case 'contact':
                pageContent.innerHTML = renderContactPage();
                break;
            case 'wishlist':
                pageContent.innerHTML = renderWishlistPage();
                break;
            case 'compare':
                pageContent.innerHTML = renderComparePage();
                break;
            case 'search':
                pageContent.innerHTML = renderSearchResultsPage(searchResults);
                break;
            case 'faq':
                pageContent.innerHTML = renderFaqPage();
                attachAccordionEventListeners();
                break;
            default:
                pageContent.innerHTML = renderHomepage();
                break;
        }
        loadingBar.classList.add('hidden');
    }, 300);
}

// دالة الواجهة الرئيسية
function renderHomepage() {
    const bestsellers = products.filter(p => p.bestseller);
    const topReviews = products.flatMap(p => p.reviews ? p.reviews.map(r => ({ ...r, product: p.name_ar, rating: p.rating })) : [])
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
    
    return `
        <section class="relative h-[80vh] flex items-center justify-center text-white hero-slider">
            ${heroImages.map((img, index) => `
                <div class="hero-slide h-full w-full ${index === 0 ? 'active' : ''}" style="background-image: url('${img}');"></div>
            `).join('')}
            <div class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
                <h1 class="text-4xl md:text-6xl font-extrabold text-amber-500 mb-4 animate-fade-in-up">
                    اكتشف أناقة العطور الفاخرة
                </h1>
                <p class="text-xl md:text-2xl font-light mb-8 max-w-3xl animate-fade-in-up delay-1">
                    أفخم العطور العربية بجودة لا مثيل لها
                </p>
                <div class="flex space-x-4 mb-8 justify-center">
                    <button data-page="shop" class="bg-amber-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-600 transition-colors animate-fade-in-up delay-2">تسوق الآن</button>
                </div>
                 <div class="mt-8 text-center bg-black/50 p-4 rounded-xl max-w-sm mx-auto">
                    <p class="text-xl font-bold mb-2 text-amber-500">خصم 10% ينتهي خلال:</p>
                    <div id="countdown-timer" class="countdown-timer flex justify-center space-x-2">
                            </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-white dark:bg-gray-800">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 dark:text-white">الأكثر مبيعاً</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${bestsellers.map(p => createProductCard(p)).join('')}
                </div>
            </div>
        </section>
        
        <section class="py-16 bg-gray-100 dark:bg-gray-700">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 dark:text-white">آراء العملاء</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${topReviews.map(review => `
                        <div class="bg-white p-6 rounded-xl shadow-lg dark:bg-gray-800">
                            <div class="flex items-center mb-4">
                                <span class="font-bold text-lg dark:text-white">${review.user}</span>
                            </div>
                            <p class="text-gray-600 italic mb-4 dark:text-gray-300">"${review.text}"</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">- عن منتج: ${review.product}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="py-16 bg-gray-900 text-white dark:bg-gray-900">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-amber-500 mb-4">قصتنا</h2>
                <p class="text-lg mb-8 max-w-3xl mx-auto">
                    في AzikiStore، نؤمن بأن العطور ليست مجرد منتجات، بل هي تعبير عن الهوية والأناقة.
                    نقدم لك تشكيلة فاخرة تجمع بين الأصالة العربية والحداثة، لتمنحك لمسة من الفخامة التي تستحقها.
                </p>
                <button data-page="about" class="text-amber-500 hover:text-amber-400 font-semibold transition-colors">
                    اكتشف المزيد
                    <i class="fas fa-arrow-left ml-2"></i>
                </button>
            </div>
        </section>
    `;
}

// دالة صفحة المتجر
function renderShopPage() {
    let filteredProducts = products.filter(p => activeFilter === 'all' || p.type === activeFilter || p.mood === activeFilter || p.occasion === activeFilter);
    const sortValue = localStorage.getItem('sortBy') || 'default';
    
    if (sortValue === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    const moods = [...new Set(products.map(p => p.mood).filter(Boolean))];
    const occasions = [...new Set(products.map(p => p.occasion).filter(Boolean))];
    const allFilters = [...new Set([...moods, ...occasions])];

    const filtersHtml = `
        <div class="flex space-x-4 flex-wrap gap-2">
            <button data-action="filter" data-filter="all" class="filter-btn py-2 px-4 rounded-full font-semibold transition-colors ${activeFilter === 'all' ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-amber-100'} dark:bg-gray-700 dark:text-white dark:hover:bg-amber-500 dark:hover:text-white">
                الكل
            </button>
            ${allFilters.map(filter => `
                <button data-action="filter" data-filter="${filter}" class="filter-btn py-2 px-4 rounded-full font-semibold transition-colors ${activeFilter === filter ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-amber-100'} dark:bg-gray-700 dark:text-white dark:hover:bg-amber-500 dark:hover:text-white">
                    ${filter}
                </button>
            `).join('')}
        </div>
    `;

    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 dark:text-white">منتجاتنا</h2>
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-8">
                    ${filtersHtml}
                    <div class="flex items-center space-x-2">
                        <label for="sort-by" class="text-gray-600 dark:text-gray-300">الترتيب حسب:</label>
                        <select id="sort-by" class="p-2 border rounded-md dark:bg-gray-700 dark:text-white">
                            <option value="default">افتراضي</option>
                            <option value="price-asc">السعر: من الأقل للأعلى</option>
                            <option value="price-desc">السعر: من الأعلى للأقل</option>
                        </select>
                    </div>
                </div>
                <div id="product-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${filteredProducts.map(p => createProductCard(p)).join('')}
                </div>
            </div>
        </div>
    `;
}

// دالة صفحة نتائج البحث
function renderSearchResultsPage(results) {
    const resultsHtml = results.length > 0 ?
        results.map(p => createProductCard(p)).join('') :
        `<p class="text-center text-lg text-gray-600 dark:text-gray-400">لا توجد نتائج مطابقة لبحثك.</p>`;
    
    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 dark:text-white">نتائج البحث</h2>
                <div id="product-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${resultsHtml}
                </div>
            </div>
        </div>
    `;
}

// دالة صفحة المنتج
function renderProductPage(product) {
    const limitedStockHtml = product.stock <= 5 && product.stock > 0 ?
        `<div class="flex items-center text-red-500 font-bold mb-4 animate-pulse">
            <i class="fas fa-exclamation-triangle ml-2"></i>
            <span>الكمية محدودة! بقي ${product.stock} قطع فقط.</span>
        </div>` : '';
    
    const soldOutHtml = product.stock === 0 ?
        `<div class="text-center text-red-500 font-bold text-xl my-4">نفد المخزون</div>` : '';
    
    const quoteHtml = product.quote ? `
        <div class="mt-8 p-4 bg-gray-100 rounded-lg text-center dark:bg-gray-700">
            <p class="italic text-gray-600 dark:text-gray-300">"${product.quote}"</p>
        </div>
    ` : '';
    
    const isWished = wishlist.some(item => item.id === product.id);
    const heartIcon = isWished ? 'fas fa-heart text-red-500' : 'far fa-heart text-gray-500 dark:text-gray-400';

    const qualityHtml = product.materials ? `
        <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
            ${product.materials.map(material => `<li>${material}</li>`).join('')}
        </ul>
    ` : '';
    
    const shareHtml = `
        <div class="flex space-x-4">
            <a href="https://www.facebook.com/sharer/sharer.php?u=${window.location.href}" target="_blank" class="text-blue-600 hover:text-blue-800 transition-colors"><i class="fab fa-facebook-square text-3xl"></i></a>
            <a href="https://wa.me/?text=${encodeURIComponent('ألقِ نظرة على هذا المنتج الرائع في AzikiStore: ' + product.name_ar + ' ' + window.location.href)}" target="_blank" class="text-green-500 hover:text-green-600 transition-colors"><i class="fab fa-whatsapp-square text-3xl"></i></a>
        </div>
    `;

    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4">
                <div class="md:flex gap-12">
                    <div class="md:w-1/2">
                        <img src="${product.images[0]}" alt="${product.name_ar}" class="w-full rounded-xl shadow-lg mb-4" id="main-product-image" />
                        <div class="flex space-x-2">
                            ${product.images.map(img => `<img src="${img}" alt="thumbnail" class="w-20 h-20 rounded-lg object-cover border-2 border-transparent hover:border-amber-700 transition-colors thumbnail-img cursor-pointer" data-src="${img}" />`).join('')}
                        </div>
                    </div>
                    <div class="md:w-1/2 mt-8 md:mt-0 product-detail-box bg-white p-6 rounded-xl shadow-lg dark:bg-gray-700">
                        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 dark:text-white">${product.name_ar}</h1>
                         <p class="text-3xl font-bold text-amber-700 mb-6 dark:text-amber-500">${product.price.toFixed(2)} درهم</p>
                        
                        ${limitedStockHtml}
                        ${soldOutHtml}
                        ${quoteHtml}

                        <div class="flex items-center space-x-4 mt-4">
                            <button data-action="toggle-wishlist" data-id="${product.id}" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                <i class="${isWished ? 'fas fa-heart text-red-500' : 'far fa-heart text-gray-500 dark:text-gray-400'} text-2xl"></i>
                            </button>
                            <button data-action="add-to-compare" data-id="${product.id}" class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors text-sm">
                                <i class="fas fa-balance-scale ml-2"></i>
                                مقارنة
                            </button>
                        </div>
                        
                        <div class="mt-8">
                            <div class="flex border-b-2 border-gray-200 dark:border-gray-600 mb-4">
                                <button class="tab-btn px-4 py-2 text-lg font-semibold border-b-2 border-transparent hover:border-amber-700 transition-colors duration-300 dark:text-white active-tab" data-tab="description">وصف المنتج</button>
                                <button class="tab-btn px-4 py-2 text-lg font-semibold border-b-2 border-transparent hover:border-amber-700 transition-colors duration-300 dark:text-white" data-tab="quality">الجودة والمواد</button>
                            </div>

                            <div id="tab-content-description" class="tab-content">
                                <p class="text-gray-600 leading-relaxed dark:text-gray-300">${product.description_ar}</p>
                            </div>
                            <div id="tab-content-quality" class="tab-content hidden">
                                <h3 class="text-xl font-semibold text-gray-800 mb-4 dark:text-white">شهادات الجودة والمواد</h3>
                                ${qualityHtml}
                            </div>
                        </div>
                        
                        ${product.stock > 0 ? `
                        <div class="flex items-center space-x-4 mb-6 mt-8">
                            <label for="product-quantity" class="font-semibold dark:text-white">الكمية:</label>
                            <input type="number" id="product-quantity" value="1" min="1" max="${product.stock}" class="w-20 p-2 text-center border rounded-md dark:bg-gray-600 dark:text-white dark:border-gray-500">
                            <button data-action="checkout-now" data-id="${product.id}" class="flex-1 bg-amber-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-600 transition-colors">
                                شراء الآن
                            </button>
                        </div>
                        ` : ''}
                        
                        <div class="mt-8 border-t pt-8 dark:border-gray-700">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4 dark:text-white">شارك المنتج</h3>
                            ${shareHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// دالة صفحة السلة (تم حذفها)

// دالة صفحة الدفع
function renderCheckoutPage() {
    // التأكد من وجود منتج في السلة المؤقتة
    if (cart.length === 0) {
        return `
            <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
                <div class="container mx-auto px-4 text-center max-w-3xl">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 dark:text-white">لا يوجد منتج لإتمام الطلب.</h2>
                    <p class="text-lg text-gray-600 mb-8 dark:text-gray-300">الرجاء اختيار منتج من المتجر أولاً.</p>
                    <button data-page="shop" class="mt-4 bg-amber-700 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-colors">
                        العودة للمتجر
                    </button>
                </div>
            </div>
        `;
    }
    
    const product = cart[0];
    const subtotal = product.price * cart[0].quantity;
    const shipping = subtotal >= 300 ? 0 : 30.00;
    let finalTotal = subtotal + shipping;

    const discountAmount = 0;
    finalTotal -= discountAmount;

    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4 max-w-3xl">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 dark:text-white">إتمام الطلب</h2>
                
                <div class="flex justify-between items-center mb-8">
                    <div class="text-center flex-1">
                        <div class="w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center justify-center bg-gray-400">
                            <i class="fas fa-check w-full"></i>
                        </div>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">1. عربة التسوق</p>
                    </div>
                    <div class="w-1/4 align-middle items-center text-center">
                        <div class="w-full h-1 rounded bg-gray-300"></div>
                    </div>
                    <div class="text-center flex-1">
                        <div class="w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center justify-center bg-amber-700">
                            <i class="fas fa-truck w-full"></i>
                        </div>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">2. معلومات الشحن</p>
                    </div>
                    <div class="w-1/4 align-middle items-center text-center">
                        <div class="w-full h-1 rounded bg-gray-300"></div>
                    </div>
                    <div class="text-center flex-1">
                        <div class="w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center justify-center bg-gray-400">
                            <i class="fas fa-check w-full"></i>
                        </div>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">3. تأكيد الطلب</p>
                    </div>
                </div>

                <div class="bg-white p-8 rounded-xl shadow-lg dark:bg-gray-700">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4 dark:text-white">معلومات الشحن</h3>
                    <form id="checkout-form" class="space-y-6 text-right">
                        <div>
                            <label for="checkout-name" class="block text-gray-700 font-semibold mb-2 dark:text-white">الاسم الكامل</label>
                            <input type="text" id="checkout-name" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-600 dark:text-white dark:border-gray-500" required>
                        </div>
                        <div>
                            <label for="checkout-phone" class="block text-gray-700 font-semibold mb-2 dark:text-white">رقم الهاتف</label>
                            <input type="tel" id="checkout-phone" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-600 dark:text-white dark:border-gray-500" required>
                        </div>
                        <div>
                            <label for="checkout-address" class="block text-gray-700 font-semibold mb-2 dark:text-white">العنوان</label>
                            <textarea id="checkout-address" rows="3" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-600 dark:text-white dark:border-gray-500" required></textarea>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input type="checkbox" id="cod-checkbox" checked disabled class="h-5 w-5 text-amber-700 rounded border-gray-300 focus:ring-amber-500">
                            <label for="cod-checkbox" class="text-gray-700 font-semibold dark:text-white">الدفع عند الاستلام</label>
                        </div>
                        <div class="text-center mt-8">
                                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">يمكنك تقسيط مبلغ الفاتورة عند استلام الطلب.</p>
                            <h4 class="text-xl font-bold text-gray-800 dark:text-white mb-2">الإجمالي النهائي: ${finalTotal.toFixed(2)} درهم</h4>
                            <div class="flex flex-col sm:flex-row-reverse space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center">
                                <button type="submit" data-action="checkout-whatsapp" class="w-full sm:w-auto bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-500 transition-colors flex-1 flex items-center justify-center">
                                    <i class="fab fa-whatsapp ml-2"></i>
                                    تأكيد الطلب عبر واتساب
                                </button>
                                <button type="button" data-action="cancel-checkout" class="w-full sm:w-auto bg-gray-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-500 transition-colors flex-1 flex items-center justify-center">
                                    <i class="fas fa-times ml-2"></i>
                                    إلغاء الطلب
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}

// دالة صفحة المفضلة
function renderWishlistPage() {
    const wishlistHtml = wishlist.length > 0 ?
        wishlist.map(p => createProductCard(p)).join('') :
        `<p class="text-center text-lg text-gray-600 dark:text-gray-400">قائمة المفضلة فارغة.</p>`;
    
    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 dark:text-white">قائمة المفضلة</h2>
                <div id="product-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${wishlistHtml}
                </div>
            </div>
        </div>
    `;
}

// دالة صفحة المقارنة
function renderComparePage() {
    if (productsToCompare.length < 2) {
        return `
            <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 dark:text-white">مقارنة المنتجات</h2>
                    <p class="text-lg text-gray-600 dark:text-gray-400">الرجاء اختيار منتجين أو أكثر للمقارنة.</p>
                </div>
            </div>
        `;
    }

    const firstProduct = productsToCompare[0];
    const secondProduct = productsToCompare[1];

    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 dark:text-white">مقارنة المنتجات</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-xl shadow-lg dark:bg-gray-700">
                        <img src="${firstProduct.images[0]}" alt="${firstProduct.name_ar}" class="w-full h-64 object-cover rounded-md mb-4">
                        <h3 class="text-2xl font-bold text-gray-800 mb-2 dark:text-white">${firstProduct.name_ar}</h3>
                        <p class="text-amber-700 text-xl font-bold dark:text-amber-500">${firstProduct.price.toFixed(2)} درهم</p>
                        <p class="mt-4 text-gray-600 dark:text-gray-300">${firstProduct.description_ar}</p>
                        <ul class="list-disc list-inside mt-4 text-gray-600 dark:text-gray-300">
                            ${firstProduct.materials.map(material => `<li>${material}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-lg dark:bg-gray-700">
                        <img src="${secondProduct.images[0]}" alt="${secondProduct.name_ar}" class="w-full h-64 object-cover rounded-md mb-4">
                        <h3 class="text-2xl font-bold text-gray-800 mb-2 dark:text-white">${secondProduct.name_ar}</h3>
                        <p class="text-amber-700 text-xl font-bold dark:text-amber-500">${secondProduct.price.toFixed(2)} درهم</p>
                        <p class="mt-4 text-gray-600 dark:text-gray-300">${secondProduct.description_ar}</p>
                        <ul class="list-disc list-inside mt-4 text-gray-600 dark:text-gray-300">
                            ${secondProduct.materials.map(material => `<li>${material}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="text-center mt-8">
                    <button data-action="clear-compare" class="bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition-colors">مسح المقارنة</button>
                </div>
            </div>
        </div>
    `;
}

// دالة صفحة من نحن
function renderAboutPage() {
    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4 text-center max-w-3xl">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 dark:text-white">من نحن</h2>
                <p class="text-lg text-gray-600 mb-8 dark:text-gray-300">
                    مرحباً بك في AzikiStore، حيث تلتقي الأصالة العربية بالفخامة العصرية.
                    نحن متخصصون في تقديم أفخم العطور الشرقية والساعات الرجالية والنسائية الأنيقة،
                    المختارة بعناية لتناسب ذوقك الرفيع. مهمتنا هي أن نقدم لك منتجات عالية الجودة
                    تجسد الجمال والأناقة، مع تجربة تسوق مريحة وموثوقة.
                </p>
                <div class="mt-8">
                    <a href="https://wa.me/212642163643?text=السلام عليكم، أرغب في التواصل معكم بخصوص متجر AzikiStore." class="inline-block bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-500 transition-colors flex items-center justify-center w-full sm:w-auto">
                        <i class="fab fa-whatsapp ml-2"></i>
                        تواصل معنا عبر واتساب
                    </a>
                </div>
            </div>
        </div>
    `;
}

// دالة صفحة سياسة الخصوصية
function renderPrivacyPage() {
    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 dark:text-white">سياسة الخصوصية</h2>
                <div class="prose max-w-none text-right dark:text-gray-300">
                    <p>في AzikiStore، خصوصية زوارنا ومستخدمينا لها أهمية قصوى. تهدف هذه السياسة إلى توضيح أنواع المعلومات الشخصية التي يتم جمعها وكيفية استخدامها.</p>
                    <h3 class="mt-6 text-xl font-semibold dark:text-white">1. المعلومات التي نجمعها</h3>
                    <ul>
                        <li>الاسم الكامل ورقم الهاتف عند إجراء طلب.</li>
                        <li>البريد الإلكتروني للتواصل بخصوص العروض.</li>
                        <li>بيانات تصفح الموقع لتحسين تجربتك.</li>
                    </ul>
                    <h3 class="mt-6 text-xl font-semibold dark:text-white">2. كيفية استخدام المعلومات</h3>
                    <p>نستخدم المعلومات المجمعة للأغراض التالية:</p>
                    <ul>
                        <li>معالجة طلبات الشراء وتوصيل المنتجات.</li>
                        <li>إرسال تحديثات وعروض تسويقية.</li>
                        <li>تحسين خدماتنا وتجربة المستخدم.</li>
                    </ul>
                    <h3 class="mt-6 text-xl font-semibold dark:text-white">3. حماية بياناتك</h3>
                    <p>نحن نلتزم بحماية بياناتك الشخصية ولا نشاركها مع أي جهة خارجية دون موافقتك الصريحة.</p>
                </div>
            </div>
        </div>
    `;
}

// دالة صفحة شروط الاستخدام
function renderTermsPage() {
    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 dark:text-white">شروط الاستخدام</h2>
                <div class="prose max-w-none text-right dark:text-gray-300">
                    <p>مرحباً بك في AzikiStore. باستخدامك لموقعنا، فإنك توافق على الشروط والأحكام التالية:</p>
                    <h3 class="mt-6 text-xl font-semibold dark:text-white">1. استخدام الموقع</h3>
                    <p>يجب أن يكون عمرك 18 عامًا فما فوق لاستخدام خدماتنا. أنت مسؤول عن الحفاظ على سرية حسابك.</p>
                    <h3 class="mt-6 text-xl font-semibold dark:text-white">2. الطلبات والدفع</h3>
                    <p>جميع الطلبات تخضع للتأكيد. نحتفظ بالحق في رفض أو إلغاء أي طلب لأي سبب.</p>
                    <h3 class="mt-6 text-xl font-semibold dark:text-white">3. حقوق الملكية الفكرية</h3>
                    <p>جميع محتويات الموقع، بما في ذلك الصور والنصوص، هي ملك لـ AzikiStore ولا يجوز استخدامها دون إذن مسبق.</p>
                </div>
            </div>
        </div>
    `;
}

// دالة صفحة اتصل بنا
function renderContactPage() {
    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4 text-center max-w-2xl">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 dark:text-white">اتصل بنا</h2>
                <p class="text-lg text-gray-600 mb-8 dark:text-gray-300">
                    نحن هنا للإجابة على استفساراتكم ومساعدتكم. يمكنكم التواصل معنا عبر النموذج التالي،
                    أو عبر أرقامنا ووسائل التواصل الاجتماعي.
                </p>
                <form class="bg-white p-8 rounded-xl shadow-lg space-y-6 text-right dark:bg-gray-700">
                    <div>
                        <label for="contact-name" class="block text-gray-700 font-semibold mb-2 dark:text-white">الاسم الكامل</label>
                        <input type="text" id="contact-name" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-600 dark:text-white dark:border-gray-500">
                    </div>
                    <div>
                        <label for="contact-email" class="block text-gray-700 font-semibold mb-2 dark:text-white">البريد الإلكتروني</label>
                        <input type="email" id="contact-email" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-600 dark:text-white dark:border-gray-500">
                    </div>
                    <div>
                        <label for="contact-message" class="block text-gray-700 font-semibold mb-2 dark:text-white">رسالتك</label>
                        <textarea id="contact-message" rows="5" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-amber-700 text-white font-bold py-3 rounded-full hover:bg-amber-600 transition-colors">
                        إرسال الرسالة
                    </button>
                </form>
            </div>
        </div>
    `;
}

// دالة صفحة الأسئلة الشائعة
function renderFaqPage() {
    return `
        <div class="pt-24 pb-12 bg-white min-h-screen dark:bg-gray-800">
            <div class="container mx-auto px-4 max-w-3xl">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 dark:text-white">الأسئلة الشائعة</h2>
                <div class="space-y-4">
                    ${faqs.map(faq => `
                        <div class="bg-gray-100 p-6 rounded-xl shadow accordion-item dark:bg-gray-700">
                            <div class="flex justify-between items-center cursor-pointer accordion-header">
                                <h3 class="text-lg font-bold text-gray-800 dark:text-white">${faq.question}</h3>
                                <i class="fas fa-chevron-down text-gray-500 transition-transform duration-300"></i>
                            </div>
                            <div class="accordion-content mt-4 hidden">
                                <p class="text-gray-600 dark:text-gray-300">${faq.answer}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function attachAccordionEventListeners() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
}

// وظائف إضافية
function startHeroSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

function startCountdownTimer() {
    const timerElement = document.getElementById('countdown-timer');
    if (!timerElement) return;

    function updateTimer() {
        const now = new Date().getTime();
        const distance = discountEndTime - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            timerElement.innerHTML = `<span>انتهى العرض</span>`;
        } else {
            timerElement.innerHTML = `
                <span>${minutes.toString().padStart(2, '0')}</span> :
                <span>${seconds.toString().padStart(2, '0')}</span>
            `;
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

function toggleSearch() {
    searchBar.classList.toggle('hidden');
    searchInput.focus();
}

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
}

function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
        searchResults = products.filter(p => p.name_ar.toLowerCase().includes(query) || p.description_ar.toLowerCase().includes(query));
        currentPage = 'search';
        renderPage();
    }
}

// وظيفة عجلة الحظ
function drawWheel(canvas, options) {
    const ctx = canvas.getContext('2d');
    const PI2 = Math.PI * 2;
    const arc = PI2 / options.length;

    options.forEach((option, i) => {
        ctx.beginPath();
        ctx.fillStyle = option.color;
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 150, i * arc, (i + 1) * arc);
        ctx.lineTo(150, 150);
        ctx.fill();

        ctx.save();
        ctx.fillStyle = "white";
        ctx.font = "bold 14px Arial";
        ctx.translate(150, 150);
        ctx.rotate(i * arc + arc / 2);
        ctx.textAlign = "center";
        ctx.fillText(option.label, 100, 10);
        ctx.restore();
    });
}

function spinWheel(canvas, options) {
    const ctx = canvas.getContext('2d');
    let angle = 0;
    const totalDuration = 5000;
    const startTime = performance.now();

    const resultIndex = Math.floor(Math.random() * options.length);
    const resultAngle = (resultIndex + 0.5) * (Math.PI * 2 / options.length);

    function animate() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);
        const easing = 1 - Math.pow(1 - progress, 3);

        ctx.clearRect(0, 0, 300, 300);
        angle = easing * (Math.PI * 8 + resultAngle);
        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate(-angle);
        ctx.translate(-150, -150);
        drawWheel(canvas, options);
        ctx.restore();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            const result = options[resultIndex].label;
            wheelResult.textContent = `تهانينا! لقد ربحت: ${result}`;
            wheelResult.classList.remove('hidden');
            localStorage.setItem('wheel-spun', 'true');
            if (result === 'خصم 5%') {
                localStorage.setItem('wheel-coupon', 'true');
            }
        }
    }
    requestAnimationFrame(animate);
}

// Event Listeners (تُدار عبر تفويض الأحداث)
document.addEventListener('DOMContentLoaded', () => {
    updateWishlistCount();
    renderPage();
    if (localStorage.getItem('wheel-spun') !== 'true') {
         setTimeout(showLuckyWheel, 5000);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
    const canvas = document.getElementById('lucky-wheel-canvas');
    if (canvas) {
        const options = [
            { label: "خصم 5%", color: "#f87171" },
            { label: "لا شيء", color: "#fcd34d" },
            { label: "خصم 5%", color: "#4ade80" },
            { label: "لا شيء", color: "#9ca3af" }
        ];
        drawWheel(canvas, options);
        spinWheelBtn.addEventListener('click', () => {
            spinWheel(canvas, options);
            spinWheelBtn.disabled = true;
        });
    }

    const sortSelect = document.getElementById('sort-by');
    if (sortSelect) {
        sortSelect.value = localStorage.getItem('sortBy') || 'default';
        sortSelect.addEventListener('change', () => {
            localStorage.setItem('sortBy', sortSelect.value);
            renderPage();
        });
    }
    
    // الكود الجديد للترحيب بالعميل
    let userName = localStorage.getItem('userName');
    if (!userName) {
        setTimeout(() => {
            userName = prompt("أهلاً بك في AzikiStore! ما هو اسمك؟");
            if (userName) {
                localStorage.setItem('userName', userName);
                showMessage(`أهلاً بك يا ${userName}، نتمنى لك تجربة تسوق ممتعة.`);
            }
        }, 3000); // يظهر بعد 3 ثوانٍ من تحميل الصفحة
    } else {
        // يمكنك إظهار رسالة ترحيب مخصصة للعميل العائد
        // showMessage(`مرحباً بعودتك يا ${userName}!`);
    }

    const productThumbnails = document.querySelectorAll('.thumbnail-img');
    const mainProductImage = document.getElementById('main-product-image');

    productThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', () => {
            mainProductImage.src = thumbnail.dataset.src;
        });
    });

    const quickViewButtons = document.querySelectorAll('[data-action="quick-view"]');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = products.find(p => p.id == button.dataset.id);
            if (product) {
                showQuickView(product);
            }
        });
    });
});

document.addEventListener('click', e => {
    const target = e.target;
    const action = target.dataset.action || target.closest('[data-action]')?.dataset.action;
    const id = target.dataset.id || target.closest('[data-id]')?.dataset.id;
    const type = target.dataset.type;
    const page = target.dataset.page || target.closest('[data-page]')?.dataset.page;
    const filter = target.dataset.filter || target.closest('[data-filter]')?.dataset.filter;
    const parentId = target.closest('.product-card')?.dataset.id;


    // Handle Quick View and Product View Clicks
    if (action === 'view-product') {
        const productForView = products.find(p => p.id == id || p.id == parentId);
        if (productForView) {
            selectedProduct = productForView;
            currentPage = 'product';
            renderPage();
        }
        return;
    }
    
    if (page) {
        currentPage = page;
        renderPage();
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
        return;
    }
    
    if (target.matches('.close-button') || target === modal) {
        hideMessage();
        return;
    }

    if (target.matches('#close-wheel-modal')) {
        hideLuckyWheel();
        return;
    }
    
    if (target.matches('#close-quick-view') || target === quickViewModal) {
        hideQuickView();
        return;
    }
    
    if (target.matches('#close-compare-modal') || target === compareModal) {
        hideCompareModal();
        return;
    }

    if (target.matches('.tab-btn')) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab'));
        target.classList.add('active-tab');
        document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
        document.getElementById(`tab-content-${target.dataset.tab}`).classList.remove('hidden');
        return;
    }


    switch (action) {
        case 'checkout-now':
            const productToCheckout = products.find(p => p.id == id);
            if (productToCheckout) {
                // إنشاء سلة مؤقتة تحتوي على المنتج المطلوب فقط
                cart = [{ ...productToCheckout, quantity: 1 }];
                localStorage.setItem('cart', JSON.stringify(cart)); // حفظ مؤقت للتوجه إلى صفحة الدفع
                currentPage = 'checkout';
                renderPage();
            }
            break;
        case 'quick-view':
            const productForView = products.find(p => p.id == id);
            if (productForView) {
                showQuickView(productForView);
            }
            break;
        case 'toggle-wishlist':
            const productToWishlist = products.find(p => p.id == id);
            if (productToWishlist) {
                toggleWishlist(productToWishlist);
            }
            break;
        case 'add-to-compare':
            const productToCompare = products.find(p => p.id == id);
            if (productsToCompare.length < 2 && !productsToCompare.some(p => p.id === productToCompare.id)) {
                productsToCompare.push(productToCompare);
                showMessage(`تمت إضافة ${productToCompare.name_ar} إلى قائمة المقارنة.`);
            } else if (productsToCompare.some(p => p.id === productToCompare.id)) {
                showMessage('هذا المنتج موجود بالفعل في قائمة المقارنة.');
            } else {
                showMessage('لا يمكنك مقارنة أكثر من منتجين.');
            }
            if (productsToCompare.length === 2) {
                setTimeout(showCompareModal, 1500);
            }
            break;
        case 'clear-compare':
            productsToCompare = [];
            hideCompareModal();
            showMessage('تم مسح قائمة المقارنة.');
            break;
        case 'checkout-whatsapp':
            const name = document.getElementById('checkout-name').value;
            const phone = document.getElementById('checkout-phone').value;
            const address = document.getElementById('checkout-address').value;

            if (!name || !phone || !address) {
                showMessage('الرجاء تعبئة جميع الحقول المطلوبة.');
                return;
            }
            
            const productForOrder = cart[0];
            const subtotalCheckout = productForOrder.price * cart[0].quantity;

            let discountAmountCheckout = 0;
            if (localStorage.getItem('wheel-coupon') === 'true') {
                 discountAmountCheckout = subtotalCheckout * 0.05;
            }

            const shippingCostCheckout = subtotalCheckout >= 300 ? 0 : 30;

            const finalTotal = (subtotalCheckout + shippingCostCheckout - discountAmountCheckout);
            
            const googleSheetURL = 'https://script.google.com/macros/s/AKfycbz_bz5yIeQEKGKkiI1Km-CU2SpPscPQ6pjxe9puvJAu3Lgba5L0L_RNzFUzY-caFH4R/exec';

            fetch(googleSheetURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    address: address,
                    orderDetails: `- ${productForOrder.name_ar} (الكمية: ${productForOrder.quantity})`,
                    total: finalTotal.toFixed(2)
                })
            }).then(response => {
                console.log('Data sent to Google Sheet successfully');
            }).catch(error => {
                console.error('Error sending data to Google Sheet:', error);
            });

            let whatsappMessage = `مرحباً، أود تأكيد طلبي:\n\n*الاسم:* ${name}\n*رقم الهاتف:* ${phone}\n*العنوان:* ${address}\n\n*تفاصيل الطلب:*\n`;
            whatsappMessage += ` - ${productForOrder.name_ar} (الكمية: ${productForOrder.quantity})`;
            whatsappMessage += ` - السعر: ${productForOrder.price.toFixed(2)} درهم\n`;
            whatsappMessage += `\n*ملخص الدفع:*\n`;
            whatsappMessage += `المجموع الفرعي: ${subtotalCheckout.toFixed(2)} درهم\n`;
            if (discountAmountCheckout > 0) {
                 whatsappMessage += `الخصم: -${discountAmountCheckout.toFixed(2)} درهم\n`;
            }
            whatsappMessage += `تكلفة الشحن: ${shippingCostCheckout.toFixed(2)} درهم\n`;
            whatsappMessage += `الإجمالي: ${finalTotal.toFixed(2)} درهم\n\n*طريقة الدفع:* الدفع عند الاستلام`;
            whatsappMessage = encodeURIComponent(whatsappMessage);
            window.open(`https://wa.me/212642163643?text=${whatsappMessage}`, '_blank');
            
            cart = [];
            localStorage.removeItem('cart');
            
            break;
        case 'cancel-checkout':
            cart = [];
            localStorage.removeItem('cart');
            currentPage = 'shop';
            renderPage();
            showMessage('تم إلغاء الطلب بنجاح.');
            break;

        case 'filter':
            activeFilter = filter;
            renderPage();
            break;
    }
});

document.addEventListener('mouseover', e => {
    const target = e.target;
    if (target.matches('.product-card .product-main-image') && target.nextElementSibling) {
        target.nextElementSibling.style.opacity = '1';
    }
});

document.addEventListener('mouseout', e => {
    const target = e.target;
    if (target.matches('.product-card .product-main-image') && target.nextElementSibling) {
        target.nextElementSibling.style.opacity = '0';
    }
});

searchToggleBtn.addEventListener('click', toggleSearch);
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

mobileMenuToggle.addEventListener('click', toggleMenu);
document.getElementById('wishlist-button').addEventListener('click', () => {
    currentPage = 'wishlist';
    renderPage();
});

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove('scale-0');
        scrollToTopBtn.classList.add('scale-100');
    } else {
        scrollToTopBtn.classList.remove('scale-100');
        scrollToTopBtn.classList.add('scale-0');
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
