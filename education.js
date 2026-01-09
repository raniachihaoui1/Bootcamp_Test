// Render education entries on the education page
function renderEducation() {
    const educationList = document.getElementById("educationList");
    
    if (!educationList || !cvData.education) return;
    
    educationList.innerHTML = "";
    
    cvData.education.forEach((edu) => {
        const eduItem = document.createElement("div");
        eduItem.className = "edu-item";
        
        // Create metadata line (dates | location)
        const metaLine = document.createElement("div");
        metaLine.className = "edu-meta";
        metaLine.innerHTML = `
            <span class="date">${edu.dates}</span>
            <span class="pipe">|</span>
            <span class="location">${edu.school}</span>
        `;
        
        // Create school name (bold)
        const schoolDiv = document.createElement("div");
        schoolDiv.className = "edu-school";
        schoolDiv.textContent = edu.school;
        
        // Create degree
        const degreeDiv = document.createElement("div");
        degreeDiv.className = "edu-degree";
        degreeDiv.textContent = edu.degree;
        
        // Create description if present
        let html = metaLine.outerHTML;
        html += `<div class="edu-degree">${edu.degree}</div>`;
        
        if (edu.description) {
            html += `<div class="edu-description">${edu.description}</div>`;
        }
        
        eduItem.innerHTML = html;
        educationList.appendChild(eduItem);
    });
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", renderEducation);
