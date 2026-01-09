// ============================================
// PERSONAL DETAILS - EDIT THIS SECTION
// ============================================

const cvData = {
    // Your full name
    name: "Rania Chihaoui",

    // Your current profession/job title
    profession: "Architect / Design Technolgist / Sports&Events Junior Architect",

    // Brief about section
    about: "Architect with 4 years of experience on large-scale international projects, including stadiums and complex public buildings.Background in computational design and Revit-based delivery, from concept development through executive-phase coordination.",

    // Education details
    education: [
        {
            dates: "Oct 2025–Present",
            school: "IAAC, Barcelona, Spain",
            degree: "Master in Advanced Computational Design for Architecture",
            description: ""
        },
        {
            dates: "Jun 2025–Sep 2025",
            school: "YACademy–Bologna, Italy",
            degree: "Higher Education Course: Design Management",
            description: "In partnership with ARUP Italia, mentoring 15 selected participants."
        },
        {
            dates: "2020–2022",
            school: "Universidad de Granada – ETSAG, Granada, Spain",
            degree: "Master's Degree in Architecture",
            description: "<strong>Cum Laude Degree</strong>, first <strong>Tunisian</strong> student to graduate from this program."
        },
        {
            dates: "2016–2020",
            school: "Universidad de Granada – ETSAG, Granada, Spain",
            degree: "Bachelor's Degree in Architecture",
            description: "Graduation Thesis: <em>\"Adaptive Architecture: Reimagining Public Spaces\"</em>"
        }
    ],

    // Work experience
    experience: [
        {
            position: "Job Title",
            company: "Company Name",
            duration: "2023 - Present",
            description: "Brief description of your role and responsibilities"
        },
        // Add more experience entries as needed
        // {
        //     position: "Previous Job Title",
        //     company: "Previous Company",
        //     duration: "2022 - 2023",
        //     description: "Description of your role"
        // }
    ],

    // Your skills
    skills: [
        "Skill 1",
        "Skill 2",
        "Skill 3",
        "Skill 4",
        "Skill 5"
    ],

    // Contact information
    contact: {
        email: "your.email@example.com",
        phone: "+1 (555) 123-4567",
        location: "City, Country",
        linkedin: "linkedin.com/in/yourprofile",
        github: "github.com/yourprofile"
    }
};

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
    const educationDiv = document.getElementById("education");
    cvData.education.forEach(edu => {
        const eduItem = document.createElement("div");
        eduItem.className = "item";
        eduItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <p class="institution">${edu.institution}</p>
            <p class="year">${edu.year}</p>
        `;
        educationDiv.appendChild(eduItem);
    });

    // Render experience
    const experienceDiv = document.getElementById("experience");
    cvData.experience.forEach(exp => {
        const expItem = document.createElement("div");
        expItem.className = "item";
        expItem.innerHTML = `
            <h3>${exp.position}</h3>
            <p class="company">${exp.company}</p>
            <p class="duration">${exp.duration}</p>
            <p>${exp.description}</p>
        `;
        experienceDiv.appendChild(expItem);
    });

    // Render skills
    const skillsDiv = document.getElementById("skills");
    const skillsList = document.createElement("ul");
    cvData.skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
    skillsDiv.appendChild(skillsList);

    // Render contact
    const contactDiv = document.getElementById("contact");
    contactDiv.innerHTML = `
        <p><strong>Email:</strong> <a href="mailto:${cvData.contact.email}">${cvData.contact.email}</a></p>
        <p><strong>Phone:</strong> ${cvData.contact.phone}</p>
        <p><strong>Location:</strong> ${cvData.contact.location}</p>
        <p><strong>LinkedIn:</strong> <a href="https://${cvData.contact.linkedin}" target="_blank">${cvData.contact.linkedin}</a></p>
        <p><strong>GitHub:</strong> <a href="https://${cvData.contact.github}" target="_blank">${cvData.contact.github}</a></p>
    `;
}

// Initialize CV when page loads
document.addEventListener("DOMContentLoaded", renderCV);
