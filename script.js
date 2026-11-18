
// ==========================================
// TECH HUB - INTERACTIVE GADGET EXHIBITION
// ==========================================


// 1. GADGET INFORMATION DATABASE

const gadgets = {

    smartphones: {
        name: "Smartphones",
        category: "Mobile Technology",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85",

        description: "Smartphones are portable computing devices that combine communication, photography, entertainment and internet access.",

        functions: [
            "Make calls and send messages.",
            "Run mobile applications and games.",
            "Capture photographs and videos.",
            "Connect to the internet.",
            "Navigate using satellite positioning."
        ],

        uses: [
            "Education and online research.",
            "Communication and social networking.",
            "Photography and content creation.",
            "Business and productivity.",
            "Entertainment."
        ],

        technology: [
            "Powerful mobile processors.",
            "AMOLED and OLED displays.",
            "Camera sensors and image processors.",
            "Artificial intelligence features.",
            "Biometric security systems.",
            "Wireless communication technology."
        ],

        how: "A smartphone uses a processor to execute instructions. Its operating system manages applications, while its memory stores active information. Sensors collect information from the environment, and wireless components connect it to other devices and networks.",

        advantages: [
            "Portable and convenient.",
            "Combines many tools in one device.",
            "Provides quick access to information."
        ],

        limitations: [
            "Requires regular charging.",
            "Some services require internet access.",
            "Storage and performance vary by model."
        ],

        fact: "Modern smartphones contain several sensors, including accelerometers, gyroscopes and proximity sensors."
    },


    laptops: {
        name: "Laptops & Computers",
        category: "Computing",

        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85",

        description: "A laptop is a portable personal computer designed for processing information, running software and performing digital tasks.",

        functions: [
            "Run computer programs.",
            "Process information.",
            "Store documents and files.",
            "Connect to the internet.",
            "Create and edit digital content."
        ],

        uses: [
            "Programming and software development.",
            "Schoolwork and research.",
            "Video editing and graphic design.",
            "Engineering and scientific calculations.",
            "Business and communication."
        ],

        technology: [
            "Central Processing Unit (CPU).",
            "Random Access Memory (RAM).",
            "Solid State Drive (SSD).",
            "Graphics Processing Unit (GPU).",
            "Cooling systems.",
            "Operating systems."
        ],

        how: "The CPU processes instructions from software. RAM temporarily holds information being used, while the storage drive saves files and programs. The GPU processes graphics for the display.",

        advantages: [
            "Portable computing.",
            "Supports a wide range of software.",
            "Useful for learning and professional work."
        ],

        limitations: [
            "Battery life is limited.",
            "Powerful models can be expensive.",
            "Some components are difficult to upgrade."
        ],

        fact: "Modern processors can contain billions of transistors."
    },


    smartwatches: {
        name: "Smartwatches",
        category: "Wearable Technology",

        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",

        description: "A smartwatch is a wearable electronic device that provides digital functions through a small display worn on the wrist.",

        functions: [
            "Display notifications.",
            "Show time and calendar information.",
            "Track physical activity.",
            "Run compatible applications.",
            "Connect to smartphones."
        ],

        uses: [
            "Everyday convenience.",
            "Activity tracking.",
            "Receiving notifications.",
            "Time management."
        ],

        technology: [
            "Motion sensors.",
            "Optical sensors.",
            "Touchscreen displays.",
            "Bluetooth connectivity.",
            "Miniature processors.",
            "Rechargeable batteries."
        ],

        how: "A smartwatch uses a miniature processor to run its software. Sensors collect measurements, while wireless connections allow it to communicate with compatible devices.",

        advantages: [
            "Convenient wearable design.",
            "Quick access to information.",
            "Useful activity tracking features."
        ],

        limitations: [
            "Requires regular charging.",
            "Small screens limit some activities.",
            "Some functions depend on a connected phone."
        ],

        fact: "A smartwatch is essentially a small computer designed to be worn on the wrist."
    },


    audio: {
        name: "Headphones & Earbuds",
        category: "Audio Technology",

        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",

        description: "Headphones and earbuds are personal audio devices designed to deliver sound directly to the listener.",

        functions: [
            "Play music and audio.",
            "Support voice calls.",
            "Deliver sound from computers and phones.",
            "Provide private listening."
        ],

        uses: [
            "Listening to music.",
            "Online classes.",
            "Gaming.",
            "Meetings and communication.",
            "Watching videos."
        ],

        technology: [
            "Speaker drivers.",
            "Bluetooth technology.",
            "Digital audio processing.",
            "Microphones.",
            "Active noise cancellation.",
            "Rechargeable batteries."
        ],

        how: "Audio signals are processed and sent to tiny speaker drivers. These drivers move rapidly to create sound waves that reach the listener's ears.",

        advantages: [
            "Portable and convenient.",
            "Provides private listening.",
            "Some models reduce background noise."
        ],

        limitations: [
            "Wireless models need charging.",
            "Sound quality varies between models.",
            "Listening at excessive volume can harm hearing."
        ],

        fact: "Active noise cancellation uses microphones and electronic processing to reduce unwanted background sound."
    },


    cameras: {
        name: "Digital Cameras",
        category: "Photography",

        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85",

        description: "A digital camera captures photographs and videos by converting incoming light into digital information.",

        functions: [
            "Capture photographs.",
            "Record videos.",
            "Adjust exposure and focus.",
            "Store digital images."
        ],

        uses: [
            "Photography.",
            "Filmmaking.",
            "Journalism.",
            "Scientific documentation.",
            "Content creation."
        ],

        technology: [
            "Digital image sensors.",
            "Camera lenses.",
            "Autofocus systems.",
            "Image processors.",
            "Optical image stabilisation.",
            "Digital storage."
        ],

        how: "Light enters through the camera lens and reaches an image sensor. The sensor converts the light into electrical signals, which are processed into a digital photograph.",

        advantages: [
            "Detailed image capture.",
            "Manual creative controls.",
            "Some models support interchangeable lenses."
        ],

        limitations: [
            "Professional equipment can be expensive.",
            "May require additional accessories.",
            "Image quality depends on several factors."
        ],

        fact: "A digital image sensor contains millions of light-sensitive pixels."
    },


    drones: {
        name: "Drones",
        category: "Flight Technology",

        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=85",

        description: "A drone is an unmanned aircraft that can be controlled remotely or operate using programmed instructions.",

        functions: [
            "Capture aerial photographs.",
            "Record aerial videos.",
            "Collect environmental information.",
            "Support aerial inspections."
        ],

        uses: [
            "Photography and filmmaking.",
            "Agricultural observation.",
            "Mapping.",
            "Environmental research.",
            "Infrastructure inspection."
        ],

        technology: [
            "Electric motors.",
            "Flight controllers.",
            "GPS positioning.",
            "Motion sensors.",
            "Digital cameras.",
            "Wireless communication."
        ],

        how: "The flight controller processes information from sensors and adjusts the motors to maintain stability and control movement.",

        advantages: [
            "Provides aerial viewpoints.",
            "Can access certain difficult-to-reach areas.",
            "Useful for collecting aerial data."
        ],

        limitations: [
            "Limited battery endurance.",
            "Weather can affect operation.",
            "Flight rules and safety restrictions apply."
        ],

        fact: "Many consumer camera drones use multiple rotors to control their movement and stability."
    },


    gaming: {
        name: "Gaming Consoles",
        category: "Gaming Technology",

        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1000&q=85",

        description: "Gaming consoles are specialised electronic systems designed to run video games and digital entertainment.",

        functions: [
            "Run video games.",
            "Display digital entertainment.",
            "Connect wireless controllers.",
            "Support multiplayer experiences."
        ],

        uses: [
            "Gaming.",
            "Entertainment.",
            "Interactive learning.",
            "Multiplayer activities."
        ],

        technology: [
            "Central processing units.",
            "Graphics processors.",
            "Solid-state storage.",
            "Wireless controllers.",
            "Digital audio systems.",
            "Game engines."
        ],

        how: "The processor executes game instructions while the graphics processor creates the images displayed on a television or monitor. Controllers send player input to the system.",

        advantages: [
            "Designed for gaming performance.",
            "Provides immersive entertainment.",
            "Easy access to compatible games."
        ],

        limitations: [
            "Requires a display.",
            "Games and accessories may cost extra.",
            "Hardware capabilities vary."
        ],

        fact: "Modern gaming consoles contain powerful processors designed to handle complex graphics and interactive environments."
    },


    vr: {
        name: "Virtual Reality Headsets",
        category: "Immersive Technology",

        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1000&q=85",

        description: "Virtual Reality headsets create computer-generated environments that users can experience through a wearable display.",

        functions: [
            "Display virtual environments.",
            "Track head movement.",
            "Provide immersive audio.",
            "Support interactive applications."
        ],

        uses: [
            "Education.",
            "Training simulations.",
            "Gaming.",
            "Architecture visualisation.",
            "Virtual demonstrations."
        ],

        technology: [
            "Display panels.",
            "Optical lenses.",
            "Motion tracking.",
            "Spatial audio.",
            "Position sensors.",
            "Computer graphics."
        ],

        how: "The headset displays slightly different images to each eye, creating a sense of depth. Tracking systems monitor movement and update the virtual environment as the user moves.",

        advantages: [
            "Creates immersive experiences.",
            "Useful for certain training simulations.",
            "Allows exploration of virtual environments."
        ],

        limitations: [
            "Some users experience discomfort.",
            "Requires compatible software.",
            "Advanced headsets can be expensive."
        ],

        fact: "Virtual Reality systems use motion tracking to make digital environments respond to the user's movements."
    }

};


// 2. CREATE THE GADGET DETAILS WINDOW

const modal = document.createElement("div");

modal.className = "tech-modal";

modal.innerHTML = `
    <div class="modal-content">

        <button class="modal-close" aria-label="Close details">
            &times;
        </button>

        <div class="modal-image-container">
            <img class="modal-image" src="" alt="">
        </div>

        <div class="modal-information">

            <span class="modal-category"></span>

            <h2 class="modal-title"></h2>

            <p class="modal-description"></p>

            <div class="modal-sections">

                <section>
                    <h3>⚙️ Main Functions</h3>
                    <ul id="modal-functions"></ul>
                </section>

                <section>
                    <h3>🎯 Uses & Applications</h3>
                    <ul id="modal-uses"></ul>
                </section>

                <section>
                    <h3>🚀 Cool Technology Inside</h3>
                    <ul id="modal-technology"></ul>
                </section>

                <section>
                    <h3>🧠 How Does It Work?</h3>
                    <p id="modal-how"></p>
                </section>

                <section>
                    <h3>✅ Advantages</h3>
                    <ul id="modal-advantages"></ul>
                </section>

                <section>
                    <h3>⚠️ Limitations</h3>
                    <ul id="modal-limitations"></ul>
                </section>

                <section class="modal-fact">
                    <h3>💡 Interesting Fact</h3>
                    <p id="modal-fact"></p>
                </section>

            </div>

        </div>

    </div>
`;

document.body.appendChild(modal);


// 3. ADD MODAL STYLING

const modalStyle = document.createElement("style");

modalStyle.textContent = `

.tech-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(3, 7, 18, 0.88);
    backdrop-filter: blur(12px);
    display: none;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.tech-modal.active {
    display: flex;
}

.modal-content {
    position: relative;
    width: 100%;
    max-width: 850px;
    max-height: 90vh;
    overflow-y: auto;
    background: #101827;
    color: #f1f5f9;
    border: 1px solid rgba(100, 150, 255, 0.2);
    border-radius: 18px;
    box-shadow: 0 20px 80px rgba(0,0,0,0.5);
}

.modal-close {
    position: absolute;
    top: 15px;
    right: 18px;
    z-index: 2;
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50%;
    background: rgba(0,0,0,0.7);
    color: white;
    font-size: 30px;
    cursor: pointer;
}

.modal-close:hover {
    background: #2563eb;
}

.modal-image-container {
    width: 100%;
    height: 280px;
    background: #080f1d;
}

.modal-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.modal-information {
    padding: 30px;
}

.modal-category {
    color: #60a5fa;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.modal-title {
    font-size: 30px;
    margin: 12px 0;
}

.modal-description {
    color: #b8c4d6;
    line-height: 1.8;
    margin-bottom: 25px;
}

.modal-sections {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
}

.modal-sections section {
    background: #182438;
    padding: 20px;
    border-radius: 12px;
}

.modal-sections h3 {
    font-size: 16px;
    color: #93c5fd;
    margin-bottom: 12px;
}

.modal-sections p,
.modal-sections li {
    color: #cbd5e1;
    font-size: 14px;
    line-height: 1.8;
}

.modal-sections ul {
    padding-left: 20px;
}

.modal-fact {
    grid-column: 1 / -1;
    border: 1px solid rgba(96, 165, 250, 0.3);
}

@media (max-width: 600px) {

    .tech-modal {
        padding: 8px;
    }

    .modal-content {
        max-height: 95vh;
    }

    .modal-image-container {
        height: 190px;
    }

    .modal-information {
        padding: 20px;
    }

    .modal-title {
        font-size: 24px;
    }

    .modal-sections {
        grid-template-columns: 1fr;
    }

}

`;

document.head.appendChild(modalStyle);


// 4. DISPLAY GADGET INFORMATION

function showGadget(gadget) {

    document.querySelector(".modal-image").src = gadget.image;

    document.querySelector(".modal-image").alt = gadget.name;

    document.querySelector(".modal-category").textContent =
        gadget.category;

    document.querySelector(".modal-title").textContent =
        gadget.name;

    document.querySelector(".modal-description").textContent =
        gadget.description;

    document.querySelector("#modal-how").textContent =
        gadget.how;

    document.querySelector("#modal-fact").textContent =
        gadget.fact;


    // Display lists safely

    function displayList(elementId, items) {

        const list = document.querySelector(elementId);

        list.replaceChildren();

        items.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item;

            list.appendChild(li);

        });

    }


    displayList("#modal-functions", gadget.functions);

    displayList("#modal-uses", gadget.uses);

    displayList("#modal-technology", gadget.technology);

    displayList("#modal-advantages", gadget.advantages);

    displayList("#modal-limitations", gadget.limitations);


    // Open modal

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

    modal.querySelector(".modal-close").focus();

}


// 5. CONNECT EXISTING EXPLORE DEVICE BUTTONS

const gadgetLinks = document.querySelectorAll(".gadget-card a");

gadgetLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const gadgetId = this.getAttribute("href").replace("#", "");

        const gadget = gadgets[gadgetId];

        if (gadget) {

            showGadget(gadget);

        } else {

            console.warn("Gadget information not found:", gadgetId);

        }

    });

});


// 6. CLOSE MODAL

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


// Close button

modal.querySelector(".modal-close").addEventListener(
    "click",
    closeModal
);


// Close when clicking outside the information window

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeModal();

    }

});


// Close using Escape key

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && modal.classList.contains("active")) {

        closeModal();

    }

});


// 7. TECH HUB STARTUP MESSAGE

console.log("TECH HUB successfully loaded!");

console.log("Interactive gadget categories:", Object.keys(gadgets).length);

console.log("Explore device buttons connected!");
