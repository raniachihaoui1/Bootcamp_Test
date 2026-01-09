// ============================================
// PERSONAL DETAILS - LOADED FROM HTML
// ============================================

// cvData is now defined in index.html and available globally here

// ============================================
// RENDERING FUNCTIONS - DO NOT MODIFY
// ============================================

function renderCV() {
    // Render name and profession
    document.getElementById("name").textContent = cvData.name;
    document.getElementById("profession").textContent = cvData.profession;

    // Render about section (each sentence on its own line)
    const aboutEl = document.getElementById("about");
    aboutEl.innerHTML = cvData.about
        .split('. ')
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => s.endsWith('.') ? s : s + '.')
        .join('<br>');

    // Render education
    const educationList = document.getElementById("educationList");
   
    cvData.education.forEach((edu) => {
        const eduItem = document.createElement("div");
        eduItem.className = "section-item";
        
        let html = `
            <div class="section-meta">
                <span class="date">${edu.dates || ''}</span>
                <span class="pipe">|</span>
                <span class="section-school">${edu.school || ''}</span>
            </div>
        `;
        html += `<div class="section-degree">${edu.degree || ''}</div>`;
        html += `<div class="section-description">${edu.description || ''}</div>`;
        
        eduItem.innerHTML = html;
        educationList.appendChild(eduItem);
    });

    // Render experience
    const experienceList = document.getElementById("experienceList");
    cvData.experience.forEach(exp => {
        const expItem = document.createElement("div");
        expItem.className = "section-item";
        expItem.innerHTML = `
            <div class="section-meta">
                <span class="date">${exp.duration || ''}</span>
                <span class="pipe">|</span>
                <span class="location">${exp.company || ''}</span>
            </div>
            <div class="section-school">${exp.position || ''}</div>
            <div class="section-degree">${exp.company || ''}</div>
            <div class="section-description">${exp.description || ''}</div>
        `;
        experienceList.appendChild(expItem);
    });

    // Render projects
    const projectsList = document.getElementById("projectsList");
    if (cvData.projects && Array.isArray(cvData.projects)) {
        cvData.projects.forEach(project => {
            const projItem = document.createElement("div");
            projItem.className = "section-item project-item";
            projItem.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.name || ''}" class="project-img">
                </div>
                <div class="project-content">
                    <div class="section-meta">
                        <span class="date">${project.date || ''}</span>
                        <span class="pipe">|</span>
                        <span class="location">${project.type || ''}</span>
                    </div>
                    <div class="section-school">${project.name || ''}</div>
                    <div class="section-degree">${project.role || ''}</div>
                    <div class="section-description">${project.description || ''}</div>
                </div>
            `;
            projectsList.appendChild(projItem);
        });
    }

    // Render skills
    const skillsList = document.getElementById("skillsList");
    cvData.skills.forEach(skill => {
        const skillItem = document.createElement("div");
        skillItem.className = "section-item";
        skillItem.innerHTML = `
            <div class="section-meta">
                <span class="date"></span>
                <span class="pipe"></span>
                <span class="location"></span>
            </div>
            <div class="section-school"></div>
            <div class="section-degree">${skill || ''}</div>
            <div class="section-description"></div>
        `;
        skillsList.appendChild(skillItem);
    });

    // Render contact
    const contactInfo = document.getElementById("contactInfo");
    const contactHTML = `
        <div class="section-item">
            <div class="section-meta">
                <span class="date"></span>
                <span class="pipe"></span>
                <span class="location"></span>
            </div>
            <div class="section-school">Email</div>
            <div class="section-degree"><a href="mailto:${cvData.contact.email || ''}">${cvData.contact.email || ''}</a></div>
            <div class="section-description"></div>
        </div>
        <div class="section-item">
            <div class="section-meta">
                <span class="date"></span>
                <span class="pipe"></span>
                <span class="location"></span>
            </div>
            <div class="section-school">Phone</div>
            <div class="section-degree">${cvData.contact.phone || ''}</div>
            <div class="section-description"></div>
        </div>
        <div class="section-item">
            <div class="section-meta">
                <span class="date"></span>
                <span class="pipe"></span>
                <span class="location"></span>
            </div>
            <div class="section-school">Location</div>
            <div class="section-degree">${cvData.contact.location || ''}</div>
            <div class="section-description"></div>
        </div>
        <div class="section-item">
            <div class="section-meta">
                <span class="date"></span>
                <span class="pipe"></span>
                <span class="location"></span>
            </div>
            <div class="section-school">LinkedIn</div>
            <div class="section-degree"><a href="https://${cvData.contact.linkedin || ''}" target="_blank">${cvData.contact.linkedin || ''}</a></div>
            <div class="section-description"></div>
        </div>
        <div class="section-item">
            <div class="section-meta">
                <span class="date"></span>
                <span class="pipe"></span>
                <span class="location"></span>
            </div>
            <div class="section-school">GitHub</div>
            <div class="section-degree"><a href="https://${cvData.contact.github || ''}" target="_blank">${cvData.contact.github || ''}</a></div>
            <div class="section-description"></div>
        </div>
    `;
    contactInfo.innerHTML = contactHTML;
}

// Initialize CV when page loads
document.addEventListener("DOMContentLoaded", () => {
    renderCV();
    setupScrollToTop();
    setupAvatarClick();
});

// Scroll to Top functionality
function setupScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
// Avatar click functionality to change colors
function setupAvatarClick() {
    const ppimage = document.querySelector('.ppimage');
    const projectImages = document.querySelectorAll('.project-img');
    const body = document.body;
    
    ppimage.addEventListener('click', () => {
        ppimage.classList.toggle('active');
        body.classList.toggle('active');
        
        // Toggle between images
        if (ppimage.classList.contains('active')) {
            ppimage.src = 'images/avatar/rc.png';
        } else {
            ppimage.src = 'images/avatar/ppimage.png';
        }
        
        // Toggle active class on all project images
        projectImages.forEach(img => {
            img.classList.toggle('active');
        });
        
        if (ppimage.classList.contains('active')) {
            document.documentElement.style.setProperty('--primary-color', '#7A4595');
            document.documentElement.style.setProperty('--accent-color', '#DDDF61');
        } else {
            document.documentElement.style.setProperty('--primary-color', '#000000');
            document.documentElement.style.setProperty('--accent-color', '#000000');
        }
    });
}