// Mock data for Electrical Sales Corporation
const mockData = {
    products: [
        {
            id: 1,
            title: "MCBs – Miniature Circuit Breakers",
            description: "Our MCBs are designed to instantly cut off power in case of overload or short circuit, protecting your home, office, or industrial facility from electrical hazards.",
            features: ["Advanced trip systems", "Durable construction", "Safe power distribution", "Instant overload protection"],
            image: "https://images.unsplash.com/photo-1566417110090-6b15a06ec800?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYnJlYWtlcnxlbnwwfHx8fDE3NTM5NjQ5MDF8MA&ixlib=rb-4.1.0&q=85",
            category: "Circuit Protection"
        },
        {
            id: 2,
            title: "Change-over Switches",
            description: "Our change-over switches make it easy to toggle between power sources like grid and generator. Essential for both residential and commercial backup systems.",
            features: ["Heavy usage resilience", "Variable load handling", "Easy power source switching", "Reliable backup systems"],
            image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxjaXJjdWl0JTIwYnJlYWtlcnxlbnwwfHx8fDE3NTM5NjQ5MDF8MA&ixlib=rb-4.1.0&q=85",
            category: "Power Management"
        },
        {
            id: 3,
            title: "Bus Bar Chambers",
            description: "Our Bus Bar Chambers provide a well-organized and efficient solution for current distribution within control panels and enclosures.",
            features: ["Premium metal enclosures", "Insulated materials", "Optimal performance", "Harsh condition resistance"],
            image: "https://images.unsplash.com/photo-1635335874521-7987db781153?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxjaXJjdWl0JTIwYnJlYWtlcnxlbnwwfHx8fDE3NTM5NjQ5MDF8MA&ixlib=rb-4.1.0&q=85",
            category: "Distribution"
        },
        {
            id: 4,
            title: "Fuse Units",
            description: "Essential safety components that protect circuits from overloads – reliable, user-friendly, and cost-effective solutions.",
            features: ["Easy to use", "Reliable protection", "Cost-effective", "Easy replacement"],
            image: "https://images.unsplash.com/photo-1607631697491-61972eecf928?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxlbGVjdHJpY2FsJTIwcGFuZWx8ZW58MHx8fHwxNzUzOTY0OTA3fDA&ixlib=rb-4.1.0&q=85",
            category: "Safety"
        },
        {
            id: 5,
            title: "Panel Accessories",
            description: "Complete range of accessories for electrical panels - terminal blocks, cable glands, push buttons, and indicators meeting international standards.",
            features: ["International standards", "Major manufacturer compatibility", "Complete panel solutions", "Quality accessories"],
            image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
            category: "Accessories"
        },
        {
            id: 6,
            title: "Distribution Boards (MCBDBs)",
            description: "Elegant, compact distribution boards for residential and commercial wiring applications with modern design and functionality.",
            features: ["Elegant design", "Compact size", "Residential & commercial use", "Modern functionality"],
            image: "https://images.pexels.com/photos/5691602/pexels-photo-5691602.jpeg",
            category: "Distribution"
        }
    ],

    additionalProducts: [
        { title: "Switch Gears", description: "Equipment for isolating, protecting, and controlling electrical devices", icon: "fa-bolt" },
        { title: "PVC Conduits", description: "Safe, corrosion-resistant, and lightweight conduits for cable protection", icon: "fa-shield-alt" },
        { title: "Trunking Systems", description: "Properly organize and route cables in ceiling or wall installations", icon: "fa-layer-group" },
        { title: "Capacitors", description: "Improve power factor and reduce energy losses in industrial applications", icon: "fa-battery-half" }
    ],

    services: [
        {
            title: "Technical Consultation",
            description: "Our experienced engineers provide expert advice for your electrical projects, ensuring optimal component selection and system design.",
            icon: "fa-users",
            features: ["Project planning", "Component selection", "System optimization", "Cost analysis"]
        },
        {
            title: "Installation Support",
            description: "Professional installation guidance and on-site support to ensure proper setup and commissioning of electrical systems.",
            icon: "fa-wrench",
            features: ["On-site guidance", "Installation training", "System commissioning", "Quality assurance"]
        },
        {
            title: "Maintenance Services",
            description: "Comprehensive maintenance programs to keep your electrical systems running efficiently and safely throughout their lifecycle.",
            icon: "fa-cogs",
            features: ["Preventive maintenance", "Emergency repairs", "System upgrades", "Performance monitoring"]
        },
        {
            title: "Custom Solutions",
            description: "Tailored electrical solutions designed to meet specific requirements of unique industrial and commercial applications.",
            icon: "fa-puzzle-piece",
            features: ["Custom design", "Prototype development", "Testing & validation", "Production scaling"]
        }
    ],

    industries: [
        {
            title: "Manufacturing Industries",
            description: "Power distribution solutions for factories, production facilities, and industrial complexes with heavy machinery requirements.",
            icon: "fa-industry",
            applications: ["Heavy machinery", "Production lines", "Quality control systems", "Safety equipment"]
        },
        {
            title: "Commercial Buildings",
            description: "Comprehensive electrical solutions for offices, shopping malls, hotels, and commercial complexes.",
            icon: "fa-building",
            applications: ["HVAC systems", "Lighting control", "Security systems", "Backup power"]
        },
        {
            title: "Residential Projects",
            description: "Safe and reliable electrical components for homes, apartments, and residential communities.",
            icon: "fa-home",
            applications: ["Home automation", "Solar integration", "Energy management", "Safety systems"]
        },
        {
            title: "Infrastructure Projects",
            description: "Robust electrical solutions for bridges, tunnels, airports, and large-scale infrastructure developments.",
            icon: "fa-road",
            applications: ["Public lighting", "Traffic systems", "Emergency power", "Communication networks"]
        }
    ],

    testimonials: [
        {
            name: "Rajesh Kumar",
            position: "Electrical Contractor",
            company: "Kumar Electricals, Mumbai",
            content: "Electrical Sales Corporation has been our trusted partner for over 5 years. Their MCBs and panel accessories are top-notch quality, and their technical support team is always ready to help.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
            name: "Priya Sharma",
            position: "Project Manager",
            company: "Metro Construction Ltd.",
            content: "The change-over switches we purchased for our commercial project have been working flawlessly for 3 years. Excellent build quality and reliable performance.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108755-2616b6c93382?w=150&h=150&fit=crop&crop=face"
        },
        {
            name: "Amit Patel",
            position: "Maintenance Engineer",
            company: "Gujarat Industries",
            content: "Their bus bar chambers have significantly improved our power distribution efficiency. Great product quality and competitive pricing.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
            name: "Dr. Sunitha Reddy",
            position: "Facility Manager",
            company: "Apollo Hospitals",
            content: "For critical healthcare infrastructure, we need the most reliable electrical components. Electrical Sales Corporation delivers exactly that with their premium quality products.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
        }
    ],

    faqs: [
        {
            question: "What is the warranty period for your electrical products?",
            answer: "We provide a comprehensive 2-year warranty on all our electrical products, covering manufacturing defects and performance issues. Extended warranty options are available for industrial applications."
        },
        {
            question: "Do you provide technical support for product selection?",
            answer: "Yes, our experienced technical team provides free consultation to help you select the right products for your specific requirements. We analyze your project needs and recommend optimal solutions."
        },
        {
            question: "What are your minimum order quantities?",
            answer: "Minimum order quantities vary by product type. For standard items like MCBs and switches, we accept orders as low as 10 pieces. For custom solutions, MOQ is determined based on specifications."
        },
        {
            question: "Do you ship pan-India?",
            answer: "Yes, we have a robust distribution network covering all major cities and towns across India. We ensure timely delivery through our network of authorized distributors and logistics partners."
        },
        {
            question: "Can you provide custom electrical solutions?",
            answer: "Absolutely! We specialize in developing custom electrical components based on your specific requirements. Our R&D team works closely with clients to design and manufacture tailored solutions."
        },
        {
            question: "What quality standards do your products meet?",
            answer: "All our products are manufactured according to Indian Standards (BIS), International Electrotechnical Commission (IEC) standards, and are CE marked for European compliance."
        }
    ],

    certifications: [
        { title: "ISO 9001:2015", description: "Quality Management System certification ensuring consistent quality in our manufacturing processes.", icon: "fa-award" },
        { title: "BIS Certification", description: "Bureau of Indian Standards certification for all our electrical products meeting Indian quality standards.", icon: "fa-shield-alt" },
        { title: "CE Marking", description: "European Conformity marking indicating compliance with EU safety, health, and environmental requirements.", icon: "fa-check-circle" },
        { title: "UL Listed", description: "Underwriters Laboratories certification ensuring our products meet rigorous safety standards.", icon: "fa-certificate" }
    ],

    whatSetsUsApart: [
        {
            title: "Premium Quality",
            description: "We test every product for durability, safety, and performance before it leaves our facility. We follow strict quality protocols to ensure maximum customer satisfaction.",
            icon: "fa-award"
        },
        {
            title: "In-House Manufacturing",
            description: "Our state-of-the-art manufacturing facility is equipped with modern machinery, ensuring precision, consistency, and efficiency across every product line.",
            icon: "fa-industry"
        },
        {
            title: "Extensive Product Range",
            description: "Our comprehensive portfolio ensures all your electrical requirements are met under one roof, whether for small-scale applications or large industrial systems.",
            icon: "fa-cogs"
        },
        {
            title: "Custom Solutions",
            description: "We understand every project is unique. Our team collaborates closely with clients to develop tailored electrical components that meet specific requirements.",
            icon: "fa-users"
        }
    ],

    whyChooseUs: [
        { title: "Comprehensive Product Range", description: "Everything from MCBs to capacitors under one roof", icon: "fa-boxes" },
        { title: "Quality Assurance", description: "Every product undergoes rigorous testing and meets Indian & international standards", icon: "fa-award" },
        { title: "Competitive Pricing", description: "Best value without compromising on quality", icon: "fa-dollar-sign" },
        { title: "Expert Consultation", description: "Need help choosing the right product? Our specialists are just a call away", icon: "fa-users" },
        { title: "Timely Delivery", description: "Quick shipping and nationwide delivery ensures your project never stops", icon: "fa-truck" }
    ],

    contactDetails: [
        {
            icon: "fa-phone",
            title: "Phone",
            value: "+91 98765 43210",
            description: "Call for immediate assistance"
        },
        {
            icon: "fa-envelope",
            title: "Email",
            value: "info@electricalsalescorp.com",
            description: "Send us your queries anytime"
        },
        {
            icon: "fa-map-marker-alt",
            title: "Address",
            value: "123 Industrial Estate, Electronic City, Bangalore - 560100, Karnataka, India",
            description: "Visit our facility"
        },
        {
            icon: "fa-clock",
            title: "Business Hours",
            value: "Mon - Sat: 9:00 AM - 6:00 PM",
            description: "We're here to help"
        }
    ]
};

// Global variables
let currentTestimonialIndex = 0;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all functionality
function initializeWebsite() {
    initializeHeader();
    loadProducts();
    loadServices();
    loadIndustries();
    loadAboutSection();
    loadTestimonials();
    loadFAQ();
    loadContactDetails();
    initializeContactForm();
}

// Header functionality
function initializeHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        menuBtn.className = 'fas fa-bars';
    } else {
        mobileMenu.classList.add('show');
        menuBtn.className = 'fas fa-times';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    mobileMenu.classList.remove('show');
    menuBtn.className = 'fas fa-bars';
}

// Scroll functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load products
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const additionalGrid = document.getElementById('additionalGrid');
    
    // Load main products
    productsGrid.innerHTML = mockData.products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <div class="product-category">${product.category}</div>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-features">
                    ${product.features.map(feature => `
                        <div class="feature-item">
                            <i class="fas fa-check"></i>
                            <span>${feature}</span>
                        </div>
                    `).join('')}
                </div>
                <button class="btn btn-primary" onclick="handleGetQuote('${product.title}')">
                    Get Quote
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');

    // Load additional products
    additionalGrid.innerHTML = mockData.additionalProducts.map(product => `
        <div class="additional-item">
            <div class="additional-icon">
                <i class="fas ${product.icon}"></i>
            </div>
            <h4>${product.title}</h4>
            <p>${product.description}</p>
        </div>
    `).join('');

    // Initialize product filters
    initializeProductFilters();
}

// Product filters
function initializeProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Handle get quote
function handleGetQuote(productTitle) {
    showToast(`Quote request submitted for ${productTitle}. We'll contact you soon!`);
}

// Load services
function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    servicesGrid.innerHTML = mockData.services.map(service => `
        <div class="service-card">
            <div class="service-header">
                <div class="service-icon">
                    <i class="fas ${service.icon}"></i>
                </div>
                <h3 class="service-title">${service.title}</h3>
            </div>
            <p class="service-description">${service.description}</p>
            <div class="service-features">
                ${service.features.map(feature => `
                    <div class="feature-item">
                        <i class="fas fa-check"></i>
                        <span>${feature}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary">
                Learn More
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `).join('');
}

// Load industries
function loadIndustries() {
    const industriesGrid = document.getElementById('industriesGrid');
    
    industriesGrid.innerHTML = mockData.industries.map(industry => `
        <div class="industry-card">
            <div class="industry-icon">
                <i class="fas ${industry.icon}"></i>
            </div>
            <h3 class="industry-title">${industry.title}</h3>
            <p class="industry-description">${industry.description}</p>
            <div class="industry-applications">
                <h4>Key Applications:</h4>
                <div class="application-tags">
                    ${industry.applications.map(app => `
                        <span class="application-tag">${app}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Load about section
function loadAboutSection() {
    const apartGrid = document.getElementById('apartGrid');
    const chooseGrid = document.getElementById('chooseGrid');
    
    // What sets us apart
    apartGrid.innerHTML = mockData.whatSetsUsApart.map(item => `
        <div class="apart-item">
            <div class="card-icon">
                <i class="fas ${item.icon}"></i>
            </div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
        </div>
    `).join('');

    // Why choose us
    chooseGrid.innerHTML = mockData.whyChooseUs.map(item => `
        <div class="choose-item">
            <div class="card-icon">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="choose-item-content">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

// Load testimonials
function loadTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    const testimonialDots = document.getElementById('testimonialDots');
    
    // Load main testimonial
    updateMainTestimonial();
    
    // Load testimonial grid
    testimonialsGrid.innerHTML = mockData.testimonials.map((testimonial, index) => `
        <div class="testimonial-mini ${index === currentTestimonialIndex ? 'active' : ''}" onclick="setCurrentTestimonial(${index})">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
            <h4>${testimonial.name}</h4>
            <p class="author-position">${testimonial.position}</p>
            <div class="testimonial-rating">
                ${Array(testimonial.rating).fill().map(() => '<i class="fas fa-star star"></i>').join('')}
            </div>
        </div>
    `).join('');

    // Load dots
    testimonialDots.innerHTML = mockData.testimonials.map((_, index) => `
        <div class="dot ${index === currentTestimonialIndex ? 'active' : ''}" onclick="setCurrentTestimonial(${index})"></div>
    `).join('');
}

function updateMainTestimonial() {
    const mainTestimonial = document.getElementById('mainTestimonial');
    const testimonial = mockData.testimonials[currentTestimonialIndex];
    
    mainTestimonial.innerHTML = `
        <div class="testimonial-quote-icon">
            <i class="fas fa-quote-left"></i>
        </div>
        <div class="testimonial-rating">
            ${Array(testimonial.rating).fill().map(() => '<i class="fas fa-star star"></i>').join('')}
        </div>
        <blockquote class="testimonial-content">"${testimonial.content}"</blockquote>
        <div class="testimonial-author">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
            <div class="author-info">
                <h4>${testimonial.name}</h4>
                <p class="author-position">${testimonial.position}</p>
                <p class="author-company">${testimonial.company}</p>
            </div>
        </div>
    `;
}

function setCurrentTestimonial(index) {
    currentTestimonialIndex = index;
    updateMainTestimonial();
    
    // Update active states
    document.querySelectorAll('.testimonial-mini').forEach((mini, i) => {
        mini.classList.toggle('active', i === index);
    });
    
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % mockData.testimonials.length;
    setCurrentTestimonial(currentTestimonialIndex);
}

function previousTestimonial() {
    currentTestimonialIndex = currentTestimonialIndex === 0 
        ? mockData.testimonials.length - 1 
        : currentTestimonialIndex - 1;
    setCurrentTestimonial(currentTestimonialIndex);
}

// Load FAQ
function loadFAQ() {
    const faqAccordion = document.getElementById('faqAccordion');
    const certificationsList = document.getElementById('certificationsList');
    
    // Load FAQ items
    faqAccordion.innerHTML = mockData.faqs.map((faq, index) => `
        <div class="faq-item" onclick="toggleFAQ(${index})">
            <div class="faq-question">
                <i class="fas fa-question-circle"></i>
                <span>${faq.question}</span>
            </div>
            <div class="faq-answer">
                ${faq.answer}
            </div>
        </div>
    `).join('');

    // Load certifications
    certificationsList.innerHTML = mockData.certifications.map(cert => `
        <div class="certification-item">
            <div class="certification-icon">
                <i class="fas ${cert.icon}"></i>
            </div>
            <div class="certification-content">
                <h4>${cert.title}</h4>
                <p>${cert.description}</p>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqItem = faqItems[index];
    
    // Close all other FAQ items
    faqItems.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current FAQ item
    faqItem.classList.toggle('active');
}

// Load contact details
function loadContactDetails() {
    const contactDetails = document.getElementById('contactDetails');
    
    contactDetails.innerHTML = mockData.contactDetails.map(detail => `
        <div class="contact-detail-card">
            <div class="contact-detail-content">
                <div class="contact-detail-icon">
                    <i class="fas ${detail.icon}"></i>
                </div>
                <div class="contact-detail-text">
                    <h4>${detail.title}</h4>
                    <p class="contact-value">${detail.value}</p>
                    <span class="contact-label">${detail.description}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Mock form submission
        console.log('Form submitted:', data);
        
        // Show success message
        showToast('Message sent successfully! We\'ll get back to you within 24 hours.');
        
        // Reset form
        contactForm.reset();
    });
}

// Toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message p');
    
    if (toastMessage) {
        toastMessage.textContent = message;
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}