        // ========== ENHANCED GLOBAL DATA ==========
        const doctors = [
            {
                id: 1,
                name: "Dr. Arjun Kumar",
                specialty: "General Physician",
                experience: "15 years",
                treats: "Fever, Cold, Cough, Headache, Weakness",
                fee: 500,
                availability: {
                    "09:00 AM": true,
                    "10:30 AM": true,
                    "02:00 PM": false, // Unavailable
                    "04:30 PM": true,
                    "06:00 PM": true
                },
                workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            },
            {
                id: 2,
                name: "Dr. Meera Srinivasan",
                specialty: "Cardiologist",
                experience: "12 years",
                treats: "Chest Pain, BP, Heart Disease, Dizziness",
                fee: 800,
                availability: {
                    "10:00 AM": true,
                    "11:30 AM": true,
                    "03:00 PM": true,
                    "05:00 PM": false
                },
                workingDays: ["Mon", "Wed", "Fri", "Sat"]
            },
            {
                id: 3,
                name: "Dr. Raghav Sharma",
                specialty: "Neurologist",
                experience: "18 years",
                treats: "Migraine, Vertigo, Seizures, Chronic Headache",
                fee: 700,
                availability: {
                    "09:30 AM": true,
                    "11:00 AM": true,
                    "04:00 PM": true,
                    "06:30 PM": true
                },
                workingDays: ["Tue", "Wed", "Thu", "Fri"]
            },
            {
                id: 4,
                name: "Dr. Priya Nair",
                specialty: "ENT Specialist",
                experience: "10 years",
                treats: "Cold, Cough, Sinus, Ear Pain, Throat Infection",
                fee: 600,
                availability: {
                    "09:00 AM": true,
                    "10:30 AM": true,
                    "02:00 PM": true,
                    "04:30 PM": true
                },
                workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            },
            {
                id: 5,
                name: "Dr. Mohammed Faisal",
                specialty: "Orthopedic",
                experience: "20 years",
                treats: "Body Pain, Joint Pain, Fracture",
                fee: 750,
                availability: {
                    "08:00 AM": true,
                    "12:00 PM": true,
                    "03:00 PM": true,
                    "05:00 PM": false
                },
                workingDays: ["Mon", "Tue", "Thu", "Fri"]
            }
        ];

        // Enhanced medicines with stock data
        const medicines = [
            {
                id: 1,
                name: "Paracetamol 500mg",
                category: "Common Symptoms",
                usedFor: "Fever, Headache, Body Pain",
                type: "Tablet",
                price: 20,
                prescription: false,
                stock: 45, // Stock count
                minStock: 20 // Minimum stock threshold
            },
            {
                id: 2,
                name: "Ibuprofen 400mg",
                category: "Common Symptoms",
                usedFor: "Pain, Fever",
                type: "Tablet",
                price: 35,
                prescription: false,
                stock: 30,
                minStock: 15
            },
            {
                id: 3,
                name: "Cetirizine 10mg",
                category: "Common Symptoms",
                usedFor: "Cold, Allergy",
                type: "Tablet",
                price: 30,
                prescription: false,
                stock: 60,
                minStock: 20
            },
            {
                id: 4,
                name: "Cough Syrup",
                category: "Common Symptoms",
                usedFor: "Cough",
                type: "Syrup",
                price: 90,
                prescription: false,
                stock: 25,
                minStock: 10
            },
            {
                id: 5,
                name: "ORS Powder",
                category: "Common Symptoms",
                usedFor: "Weakness, Dehydration",
                type: "Powder",
                price: 25,
                prescription: false,
                stock: 15, // Low stock
                minStock: 20
            },
            {
                id: 6,
                name: "Ondansetron 4mg",
                category: "Digestive",
                usedFor: "Nausea, Vomiting",
                type: "Tablet",
                price: 60,
                prescription: true,
                stock: 0, // Out of stock
                minStock: 10
            },
            {
                id: 7,
                name: "Domperidone 10mg",
                category: "Digestive",
                usedFor: "Vomiting, Acidity",
                type: "Tablet",
                price: 45,
                prescription: true,
                stock: 8, // Low stock
                minStock: 10
            },
            {
                id: 8,
                name: "Pantoprazole 40mg",
                category: "Digestive",
                usedFor: "Gastric Issues",
                type: "Tablet",
                price: 70,
                prescription: true,
                stock: 35,
                minStock: 10
            },
            {
                id: 9,
                name: "Vertin 16mg",
                category: "Neuro",
                usedFor: "Dizziness, Vertigo",
                type: "Tablet",
                price: 85,
                prescription: true,
                stock: 22,
                minStock: 10
            },
            {
                id: 10,
                name: "Amoxicillin 250mg",
                category: "Infections",
                usedFor: "Bacterial Infection",
                type: "Capsule",
                price: 80,
                prescription: true,
                stock: 40,
                minStock: 15
            }
        ];

        const patients = [
            { id: 1, name: "Ramesh Kumar", age: 45, gender: "Male", condition: "Fever", lastVisit: "2024-02-15" },
            { id: 2, name: "Anitha Devi", age: 32, gender: "Female", condition: "Vomiting", lastVisit: "2024-02-14" },
            { id: 3, name: "Suresh Babu", age: 60, gender: "Male", condition: "Dizziness", lastVisit: "2024-02-13" },
            { id: 4, name: "Priya Sharma", age: 25, gender: "Female", condition: "Headache", lastVisit: "2024-02-12" },
            { id: 5, name: "Rahman Ali", age: 50, gender: "Male", condition: "Chest Pain", lastVisit: "2024-02-11" }
        ];

        // ========== GLOBAL VARIABLES ==========
        let currentUser = null;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let selectedSymptoms = [];

        // NEW: Appointments and Prescriptions data
        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        let prescriptions = JSON.parse(localStorage.getItem('prescriptions')) || [];

        // ========== LOGIN FUNCTIONS ==========
        function switchTab(role) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.login-form').forEach(form => form.classList.remove('active'));

            document.querySelector(`.tab[onclick*="${role}"]`).classList.add('active');
            document.getElementById(`${role}-login`).classList.add('active');
        }

        function login(role) {
            let userId, password;

            switch (role) {
                case 'patient':
                    userId = document.getElementById('patient-email').value;
                    password = document.getElementById('patient-password').value;
                    break;
                case 'doctor':
                    userId = document.getElementById('doctor-id').value;
                    password = document.getElementById('doctor-password').value;
                    break;
                case 'admin':
                    userId = document.getElementById('admin-id').value;
                    password = document.getElementById('admin-password').value;
                    break;
            }

            if (!userId || !password) {
                alert('Please enter both ID and password');
                return;
            }

            currentUser = {
                role: role,
                name: role === 'patient' ? 'Patient User' :
                    role === 'doctor' ? 'Dr. Arjun Kumar' : 'Admin User',
                id: userId,
                avatar: role === 'patient' ? 'P' : role === 'doctor' ? 'D' : 'A'
            };

            showDashboard();
        }

        function showDashboard() {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';

            // Update user info
            document.getElementById('user-name').textContent = currentUser.name;
            document.getElementById('user-role').textContent = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1);
            document.getElementById('user-avatar').textContent = currentUser.avatar;

            // Hide/show menu items based on role
            const patientsMenu = document.getElementById('patients-menu');
            const prescriptionMenu = document.getElementById('prescription-menu');
            const manageAppointmentsTab = document.getElementById('manage-appointments-tab');

            if (currentUser.role === 'patient') {
                patientsMenu.style.display = 'none';
                prescriptionMenu.style.display = 'flex';
                if (manageAppointmentsTab) manageAppointmentsTab.style.display = 'none';
            } else {
                patientsMenu.style.display = 'flex';
                prescriptionMenu.style.display = 'none';
                if (manageAppointmentsTab) manageAppointmentsTab.style.display = 'inline-block';
            }

            // Load dashboard
            loadDashboardStats();
            updateCartCount();

            // Show dashboard home
            showPage('dashboard-home');
        }

        function logout() {
            currentUser = null;
            cart = [];
            appointments = [];
            prescriptions = [];
            localStorage.removeItem('cart');
            localStorage.removeItem('appointments');
            localStorage.removeItem('prescriptions');
            document.getElementById('login-container').style.display = 'block';
            document.getElementById('dashboard').style.display = 'none';

            // Reset login forms
            document.querySelectorAll('input').forEach(input => input.value = '');
            switchTab('patient');
        }

        // ========== PAGE NAVIGATION ==========
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            // Deactivate all menu items
            document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));

            // Show selected page
            document.getElementById(pageId).classList.add('active');

            // Activate corresponding menu item
            document.querySelectorAll('.menu-item').forEach(item => {
                if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(pageId)) {
                    item.classList.add('active');
                }
            });

            // Load page data
            loadPageData(pageId);
        }

        function loadPageData(pageId) {
            switch (pageId) {
                case 'dashboard-home':
                    loadDashboardStats();
                    break;
                case 'doctors':
                    loadDoctorsList();
                    break;
                case 'book-appointment':
                    loadAppointmentPage();
                    break;
                case 'pharmacy':
                    loadMedicinesList();
                    break;
                case 'chatbot':
                    // Chatbot is already loaded
                    break;
                case 'appointment-mgmt':
                    loadAppointments();
                    break;
                case 'prescription-history':
                    loadPrescriptions();
                    break;
                case 'patients':
                    loadPatientsList();
                    break;
            }
        }

        // ========== DASHBOARD FUNCTIONS ==========
        function loadDashboardStats() {
            let statsHTML = '';

            if (currentUser.role === 'patient') {
                const pendingApps = appointments.filter(a => a.patientId === currentUser.id && a.status === 'requested').length;
                const approvedApps = appointments.filter(a => a.patientId === currentUser.id && a.status === 'approved').length;

                statsHTML = `
                    <div class="stat-card">
                        <i class="fas fa-calendar-check"></i>
                        <h3>${approvedApps}</h3>
                        <p>Approved Appointments</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-clock"></i>
                        <h3>${pendingApps}</h3>
                        <p>Pending Appointments</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-pills"></i>
                        <h3>${cart.length}</h3>
                        <p>Medicines in Cart</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-prescription"></i>
                        <h3>${prescriptions.filter(p => p.patientId === currentUser.id).length}</h3>
                        <p>Active Prescriptions</p>
                    </div>
                `;
            } else if (currentUser.role === 'doctor') {
                const todaysApps = appointments.filter(a => a.doctorId == 1 && a.status === 'approved').length;
                const pendingApps = appointments.filter(a => a.doctorId == 1 && a.status === 'requested').length;

                statsHTML = `
                    <div class="stat-card">
                        <i class="fas fa-user-injured"></i>
                        <h3>${todaysApps}</h3>
                        <p>Today's Appointments</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-clock"></i>
                        <h3>${pendingApps}</h3>
                        <p>Pending Approvals</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-prescription"></i>
                        <h3>12</h3>
                        <p>Prescriptions Today</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-star"></i>
                        <h3>4.9</h3>
                        <p>Patient Rating</p>
                    </div>
                `;
            } else {
                const totalApps = appointments.length;
                const pendingApps = appointments.filter(a => a.status === 'requested').length;

                statsHTML = `
                    <div class="stat-card">
                        <i class="fas fa-users"></i>
                        <h3>1,245</h3>
                        <p>Total Patients</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-user-md"></i>
                        <h3>10</h3>
                        <p>Active Doctors</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-calendar-alt"></i>
                        <h3>${totalApps}</h3>
                        <p>Total Appointments</p>
                    </div>
                    <div class="stat-card">
                        <i class="fas fa-clock"></i>
                        <h3>${pendingApps}</h3>
                        <p>Pending Approvals</p>
                    </div>
                `;
            }

            document.getElementById('dashboard-stats').innerHTML = statsHTML;
        }

        // ========== DOCTORS FUNCTIONS ==========
        function loadDoctorsList() {
            let html = '';
            doctors.forEach(doctor => {
                // Calculate available slots
                const availableSlots = Object.values(doctor.availability).filter(slot => slot).length;
                const totalSlots = Object.keys(doctor.availability).length;
                const availabilityStatus = availableSlots > 0 ? 'available' : 'unavailable';

                html += `
                    <div class="doctor-card">
                        <div class="doctor-header">
                            <div class="doctor-avatar">${doctor.name.split(' ').map(n => n[0]).join('')}</div>
                            <div>
                                <h3>${doctor.name}</h3>
                                <div class="specialty-badge">${doctor.specialty}</div>
                                <span class="availability-badge ${availabilityStatus}">
                                    <i class="fas fa-${availabilityStatus === 'available' ? 'check-circle' : 'times-circle'}"></i>
                                    ${availableSlots}/${totalSlots} slots available
                                </span>
                            </div>
                        </div>
                        <p><strong>Experience:</strong> ${doctor.experience}</p>
                        <p><strong>Treats:</strong> ${doctor.treats}</p>
                        <p><strong>Working Days:</strong> ${doctor.workingDays.join(', ')}</p>
                        <p><strong>Consultation Fee:</strong> ₹${doctor.fee}</p>
                        ${currentUser.role === 'patient' ? `<button class="book-btn" onclick="bookDoctor(${doctor.id})">Book Appointment</button>` : ''}
                    </div>
                `;
            });
            document.getElementById('doctors-list').innerHTML = html;
        }

        function searchDoctors() {
            const searchTerm = document.getElementById('doctor-search').value.toLowerCase();
            const doctorCards = document.querySelectorAll('#doctors-list .doctor-card');

            doctorCards.forEach(card => {
                const doctorName = card.querySelector('h3').textContent.toLowerCase();
                const specialty = card.querySelector('.specialty-badge').textContent.toLowerCase();

                if (doctorName.includes(searchTerm) || specialty.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function bookDoctor(doctorId) {
            showPage('book-appointment');
            // Set the doctor in appointment form
            setTimeout(() => {
                document.getElementById('appointment-doctor').value = doctorId;
                updateConsultationFee();
                loadDoctorAvailability();
            }, 100);
        }

        // NEW: Load doctor availability time slots
        function loadDoctorAvailability() {
            const doctorId = document.getElementById('appointment-doctor').value;
            if (!doctorId) {
                document.getElementById('doctor-availability-section').style.display = 'none';
                return;
            }

            const doctor = doctors.find(d => d.id == doctorId);
            if (!doctor) return;

            const container = document.getElementById('time-slots-container');
            container.innerHTML = '';

            Object.entries(doctor.availability).forEach(([time, available]) => {
                const slot = document.createElement('div');
                slot.className = `time-slot ${available ? '' : 'unavailable'}`;
                slot.textContent = time;
                slot.onclick = available ? function () {
                    // Remove selected class from all slots
                    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                    // Add selected class to clicked slot
                    this.classList.add('selected');
                    // Update appointment time dropdown
                    document.getElementById('appointment-time').value = time;
                } : null;

                container.appendChild(slot);
            });

            document.getElementById('doctor-availability-section').style.display = 'block';
        }

        // ========== APPOINTMENT BOOKING FUNCTIONS ==========
        function loadAppointmentPage() {
            // Load doctors in dropdown
            const doctorSelect = document.getElementById('appointment-doctor');
            doctorSelect.innerHTML = '<option value="">-- Choose a specialist --</option>';
            doctors.forEach(doctor => {
                doctorSelect.innerHTML += `<option value="${doctor.id}">${doctor.name} - ${doctor.specialty}</option>`;
            });

            // Set minimum date to today
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('appointment-date').min = today;

            // Setup symptom cards
            document.querySelectorAll('.symptom-card').forEach(card => {
                card.addEventListener('click', function () {
                    this.classList.toggle('selected');
                    const symptom = this.dataset.symptom;
                    if (this.classList.contains('selected')) {
                        selectedSymptoms.push(symptom);
                    } else {
                        selectedSymptoms = selectedSymptoms.filter(s => s !== symptom);
                    }
                });
            });

            // Clear previous recommendations
            document.getElementById('doctor-recommendation').innerHTML = '';
        }

        function findDoctorBySymptoms() {
            const additionalSymptoms = document.getElementById('additional-symptoms').value;
            const recommendationDiv = document.getElementById('doctor-recommendation');

            if (selectedSymptoms.length === 0 && !additionalSymptoms) {
                alert('Please select symptoms or describe your condition');
                return;
            }

            // Symptom to doctor mapping
            const symptomMapping = {
                'Fever': ['General Physician', 'Infectious Disease Specialist'],
                'Headache': ['Neurologist', 'General Physician'],
                'Cough': ['ENT Specialist', 'Pulmonologist'],
                'Cold': ['ENT Specialist', 'General Physician'],
                'Dizziness': ['Neurologist', 'Cardiologist', 'Emergency Medicine'],
                'Vomiting': ['Gastroenterologist', 'Gynecologist', 'Emergency Medicine'],
                'Chest Pain': ['Cardiologist'],
                'Joint Pain': ['Orthopedic']
            };

            let matchedSpecialties = [];

            // Find matching specialties for symptoms
            selectedSymptoms.forEach(symptom => {
                if (symptomMapping[symptom]) {
                    matchedSpecialties = [...matchedSpecialties, ...symptomMapping[symptom]];
                }
            });

            // Check additional symptoms text
            if (additionalSymptoms) {
                const text = additionalSymptoms.toLowerCase();
                if (text.includes('fever')) matchedSpecialties.push('General Physician', 'Infectious Disease Specialist');
                if (text.includes('headache')) matchedSpecialties.push('Neurologist', 'General Physician');
                if (text.includes('cough') || text.includes('cold')) matchedSpecialties.push('ENT Specialist', 'Pulmonologist');
                if (text.includes('dizziness')) matchedSpecialties.push('Neurologist', 'Cardiologist');
                if (text.includes('vomit') || text.includes('nausea')) matchedSpecialties.push('Gastroenterologist');
                if (text.includes('chest')) matchedSpecialties.push('Cardiologist');
                if (text.includes('joint') || text.includes('pain')) matchedSpecialties.push('Orthopedic');
            }

            // Remove duplicates
            matchedSpecialties = [...new Set(matchedSpecialties)];

            if (matchedSpecialties.length === 0) {
                matchedSpecialties = ['General Physician'];
            }

            // Find matching doctors
            const matchingDoctors = doctors.filter(doctor =>
                matchedSpecialties.includes(doctor.specialty)
            );

            let html = `<h3 style="margin-bottom: 20px;"><i class="fas fa-user-md"></i> Recommended Specialists</h3>`;

            if (matchingDoctors.length > 0) {
                matchingDoctors.forEach(doctor => {
                    const availableSlots = Object.values(doctor.availability).filter(slot => slot).length;

                    html += `
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #1a2980;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <h4 style="margin-bottom: 5px;">${doctor.name}</h4>
                                    <div style="color: #666; font-size: 0.9rem;">${doctor.specialty}</div>
                                    <div style="color: #666; font-size: 0.9rem; margin-top: 5px;">Available slots: ${availableSlots}</div>
                                </div>
                                <button class="btn" onclick="bookDoctor(${doctor.id})" style="padding: 10px 20px;">
                                    <i class="fas fa-calendar-plus"></i> Book Now
                                </button>
                            </div>
                        </div>
                    `;
                });
            } else {
                html += '<p>No doctors available for these symptoms. Please consult a General Physician.</p>';
            }

            recommendationDiv.innerHTML = html;
        }

        function updateConsultationFee() {
            const doctorId = document.getElementById('appointment-doctor').value;
            const doctor = doctors.find(d => d.id == doctorId);
            if (doctor) {
                document.getElementById('consultation-fee').textContent = doctor.fee;
            }
        }

        function loadAvailableSlots() {
            const timeSelect = document.getElementById('appointment-time');
            timeSelect.innerHTML = '<option value="">-- Select Time --</option>';

            const slots = ['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM'];
            slots.forEach(slot => {
                timeSelect.innerHTML += `<option value="${slot}">${slot}</option>`;
            });
        }

        function bookAppointment() {
            const doctorId = document.getElementById('appointment-doctor').value;
            const date = document.getElementById('appointment-date').value;
            const time = document.getElementById('appointment-time').value;
            const symptoms = document.getElementById('appointment-symptoms').value;

            if (!doctorId || !date || !time || !symptoms) {
                alert('Please fill in all appointment details');
                return;
            }

            const doctor = doctors.find(d => d.id == doctorId);
            const consultationType = document.querySelector('input[name="consultation-type"]:checked').value;

            // Create appointment with workflow status
            const appointment = {
                id: appointments.length + 1,
                patientId: currentUser.id,
                patientName: currentUser.name,
                doctorId: doctor.id,
                doctorName: doctor.name,
                date: date,
                time: time,
                symptoms: symptoms,
                type: consultationType,
                fee: doctor.fee,
                status: 'requested', // Initial status
                createdAt: new Date().toISOString()
            };

            appointments.push(appointment);
            localStorage.setItem('appointments', JSON.stringify(appointments));

            alert(`Appointment requested successfully!\n\nStatus: Pending Approval\nDoctor: ${doctor.name}\nDate: ${date}\nTime: ${time}\n\nWe will notify you once approved.`);

            // Reset form
            document.getElementById('appointment-symptoms').value = '';
            showPage('appointment-mgmt');
        }

        // ========== PHARMACY FUNCTIONS WITH STOCK INDICATORS ==========
        function loadMedicinesList() {
            let html = '';
            medicines.forEach(medicine => {
                // Determine stock status
                let stockStatus = '';
                let stockClass = '';
                let stockIndicator = '';

                if (medicine.stock === 0) {
                    stockStatus = 'Out of Stock';
                    stockClass = 'out-of-stock';
                    stockIndicator = '<span class="stock-indicator stock-out"></span>';
                } else if (medicine.stock <= medicine.minStock) {
                    stockStatus = `Low Stock (${medicine.stock} left)`;
                    stockClass = 'low-stock';
                    stockIndicator = '<span class="stock-indicator stock-low"></span>';
                } else {
                    stockStatus = `In Stock (${medicine.stock})`;
                    stockClass = 'in-stock';
                    stockIndicator = '<span class="stock-indicator stock-in"></span>';
                }

                html += `
                    <div class="medicine-card">
                        <div class="medicine-header">
                            <div class="medicine-icon">
                                <i class="fas fa-pills"></i>
                            </div>
                            <h3>${medicine.name}</h3>
                            <div class="category-badge">${medicine.category}</div>
                            ${medicine.prescription ? '<span class="prescription-badge">Prescription Required</span>' : ''}
                        </div>
                        <p><strong>Used For:</strong> ${medicine.usedFor}</p>
                        <p><strong>Type:</strong> ${medicine.type}</p>
                        <div style="margin: 10px 0;">
                            ${stockIndicator}
                            <span class="${stockClass}">${stockStatus}</span>
                        </div>
                        <div class="price">₹${medicine.price}</div>
                        <button class="buy-btn" onclick="addToCart(${medicine.id})" ${medicine.stock === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                            <i class="fas fa-cart-plus"></i> ${medicine.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                    </div>
                `;
            });
            document.getElementById('medicines-list').innerHTML = html;
        }

        function searchMedicines() {
            const searchTerm = document.getElementById('medicine-search').value.toLowerCase();
            const medicineCards = document.querySelectorAll('#medicines-list .medicine-card');

            medicineCards.forEach(card => {
                const medicineName = card.querySelector('h3').textContent.toLowerCase();
                const usedFor = card.querySelector('p').textContent.toLowerCase();

                if (medicineName.includes(searchTerm) || usedFor.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function addToCart(medicineId) {
            const medicine = medicines.find(m => m.id === medicineId);
            if (!medicine) return;

            if (medicine.stock === 0) {
                alert('This medicine is currently out of stock.');
                return;
            }

            if (medicine.prescription) {
                if (!confirm('This medicine requires a doctor\'s prescription. Do you have a valid prescription?')) {
                    alert('Please consult a doctor and get a prescription before ordering this medicine.');
                    return;
                }
            }

            const existingItem = cart.find(item => item.id === medicineId);

            if (existingItem) {
                if (existingItem.quantity >= medicine.stock) {
                    alert(`Only ${medicine.stock} units available in stock.`);
                    return;
                }
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: medicine.id,
                    name: medicine.name,
                    price: medicine.price,
                    quantity: 1,
                    prescription: medicine.prescription
                });
            }

            updateCartCount();
            alert(`${medicine.name} added to cart!`);
            saveCart();
        }

        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cart-count').textContent = totalItems;
            document.getElementById('cart-count-header').textContent = totalItems;
        }

        function viewCart() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            const cartItemsDiv = document.getElementById('cart-items');
            const summaryDiv = document.getElementById('cart-summary');

            let cartHTML = '';
            let subtotal = 0;

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;

                cartHTML += `
                    <div class="cart-item">
                        <div style="flex: 1;">
                            <h4 style="margin-bottom: 5px;">${item.name}</h4>
                            <p style="color: #666; font-size: 0.9rem;">₹${item.price} each</p>
                        </div>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                            <span style="font-weight: bold; min-width: 30px; text-align: center;">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                        </div>
                        <div style="font-weight: bold; color: #1a2980; min-width: 80px; text-align: right;">
                            ₹${itemTotal}
                        </div>
                    </div>
                `;
            });

            const delivery = 50;
            const gst = subtotal * 0.05;
            const total = subtotal + delivery + gst;

            const summaryHTML = `
                <div style="border-top: 2px solid #eee; padding-top: 20px; margin-top: 20px;">
                    <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                        <span>Subtotal</span>
                        <span>₹${subtotal}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                        <span>Delivery Charge</span>
                        <span>₹${delivery}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                        <span>GST (5%)</span>
                        <span>₹${gst.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.2rem; margin: 20px 0; padding-top: 20px; border-top: 2px solid #1a2980;">
                        <span>Total</span>
                        <span>₹${total.toFixed(2)}</span>
                    </div>
                </div>
            `;

            cartItemsDiv.innerHTML = cartHTML;
            summaryDiv.innerHTML = summaryHTML;
            document.getElementById('cart-modal').classList.add('active');
        }

        function updateCartQuantity(medicineId, change) {
            const itemIndex = cart.findIndex(item => item.id === medicineId);

            if (itemIndex !== -1) {
                cart[itemIndex].quantity += change;

                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }
            }

            updateCartCount();
            saveCart();

            if (document.getElementById('cart-modal').classList.contains('active')) {
                viewCart();
            }
        }

        function closeCart() {
            document.getElementById('cart-modal').classList.remove('active');
        }

        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            // Check stock before checkout
            for (const item of cart) {
                const medicine = medicines.find(m => m.id === item.id);
                if (medicine && item.quantity > medicine.stock) {
                    alert(`Insufficient stock for ${medicine.name}. Only ${medicine.stock} units available.`);
                    return;
                }
            }

            alert('Order placed successfully!\n\nMedicines will be delivered within 2 hours.\nPlease keep your doctor\'s prescription ready for delivery verification.');

            // Update stock (in real system, this would be on server)
            cart.forEach(item => {
                const medicineIndex = medicines.findIndex(m => m.id === item.id);
                if (medicineIndex !== -1) {
                    medicines[medicineIndex].stock -= item.quantity;
                }
            });

            cart = [];
            updateCartCount();
            saveCart();
            closeCart();
            loadMedicinesList(); // Refresh medicine list
        }

        function uploadPrescription() {
            alert('Please upload your prescription during checkout.\n\nSupported formats: JPG, PNG, PDF\nMaximum size: 5MB');
        }

        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // ========== CHATBOT FUNCTIONS ==========
        function sendChatbotMessage() {
            const input = document.getElementById('chat-input');
            const message = input.value.trim();

            if (!message) return;

            addChatMessage(message, 'user');
            input.value = '';

            setTimeout(() => {
                const response = generateAIResponse(message);
                addChatMessage(response, 'bot');
            }, 1000);
        }

        function handleChatEnter(event) {
            if (event.key === 'Enter') {
                sendChatbotMessage();
            }
        }

        function askQuickQuestion(question) {
            document.getElementById('chat-input').value = question;
            sendChatbotMessage();
        }

        function addChatMessage(text, sender) {
            const messagesDiv = document.getElementById('chat-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;

            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            messageDiv.innerHTML = `
                <div class="message-content">${text}</div>
                <div class="message-time">${time}</div>
            `;

            messagesDiv.appendChild(messageDiv);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

        function generateAIResponse(userMessage) {
            const message = userMessage.toLowerCase();
            let response = '';

            if (message.includes('fever') && message.includes('headache')) {
                response = `🤒 Based on your symptoms of <strong>fever and headache</strong>:
                <br><br>
                <strong>Possible Causes:</strong>
                • Viral infection (common cold, flu)<br>
                • Bacterial infection<br>
                • Dehydration<br>
                • Sinusitis<br>
                <br>
                <strong>Immediate Care:</strong>
                • Take Paracetamol 500mg every 6-8 hours<br>
                • Drink plenty of fluids (water, ORS)<br>
                • Rest and monitor temperature every 4 hours<br>
                • Cold compress for headache relief<br>
                <br>
                <strong>Recommended Doctor:</strong> General Physician (Dr. Arjun Kumar)<br>
                <strong>Suitable Medicines:</strong> Paracetamol, Ibuprofen<br>
                <strong>Emergency signs:</strong> Fever above 103°F, severe headache with vomiting, stiff neck`;

            } else if (message.includes('cough') || message.includes('cold')) {
                response = `😷 For <strong>cough and cold</strong> symptoms:
                <br><br>
                <strong>Home Remedies:</strong>
                • Warm water with honey and lemon<br>
                • Steam inhalation 2-3 times daily<br>
                • Salt water gargle for throat pain<br>
                • Use humidifier at night<br>
                <br>
                <strong>Medications (if needed):</strong>
                • Cough Syrup as per symptoms<br>
                • Cetirizine for runny nose<br>
                • Paracetamol for fever<br>
                • Vitamin C supplements<br>
                <br>
                <strong>Recommended Doctor:</strong> ENT Specialist (Dr. Priya Nair)<br>
                <strong>Suitable Medicines:</strong> Cough Syrup, Cetirizine<br>
                <strong>Seek medical help if:</strong> Breathing difficulties, yellow/green mucus, symptoms worsen after 5 days`;

            } else if (message.includes('stomach') || message.includes('nausea') || message.includes('vomit')) {
                response = `🤢 For <strong>stomach issues</strong>:
                <br><br>
                <strong>Immediate Relief:</strong>
                • Ondansetron 4mg for nausea<br>
                • Domperidone for vomiting<br>
                • Drink small sips of water/ORS<br>
                • BRAT diet (Banana, Rice, Apple, Toast)<br>
                <br>
                <strong>Avoid:</strong>
                • Spicy/oily food<br>
                • Dairy products<br>
                • Caffeine and alcohol<br>
                • Raw vegetables<br>
                <br>
                <strong>Recommended Doctor:</strong> Gastroenterologist (Dr. Sanjay Verma)<br>
                <strong>Suitable Medicines:</strong> Ondansetron, Domperidone, Pantoprazole<br>
                <strong>Emergency:</strong> Severe abdominal pain, blood in vomit, dehydration signs`;

            } else if (message.includes('dizziness') || message.includes('vertigo')) {
                response = `💫 For <strong>dizziness</strong>:
                <br><br>
                <strong>Immediate Actions:</strong>
                • Sit or lie down immediately<br>
                • Drink water<br>
                • Avoid sudden movements<br>
                • Focus on a fixed point<br>
                <br>
                <strong>Medication (if prescribed):</strong>
                • Vertin 16mg<br>
                • Avoid driving or operating machinery<br>
                <br>
                <strong>Recommended Doctor:</strong> Neurologist (Dr. Raghav Sharma)<br>
                <strong>Suitable Medicines:</strong> Vertin, Diazepam (as prescribed)<br>
                <strong>Emergency signs:</strong> Chest pain, difficulty speaking, vision changes, loss of consciousness`;

            } else if (message.includes('medicine') || message.includes('pill') || message.includes('tablet')) {
                response = `💊 <strong>Medicine Information</strong>
                <br><br>
                I can provide information about common medicines. For specific queries:
                <br><br>
                • <strong>Dosage:</strong> Always follow doctor's prescription<br>
                • <strong>Side Effects:</strong> Check medicine leaflet or consult pharmacist<br>
                • <strong>Interactions:</strong> Inform doctor about all medicines you're taking<br>
                • <strong>Storage:</strong> Store in cool, dry place away from sunlight<br>
                <br>
                <strong>Important:</strong> Never self-medicate without doctor's advice.<br>
                Visit our Pharmacy section for medicine details.`;

            } else {
                response = `🤖 I understand you're asking about <strong>"${userMessage}"</strong>.
                <br><br>
                As an AI health assistant, I can help with:
                <br><br>
                • Symptom analysis and doctor recommendations<br>
                • General health information<br>
                • Medicine guidance<br>
                • First aid advice<br>
                • Preventive care tips<br>
                <br>
                For accurate diagnosis and treatment, please consult a doctor.<br>
                For emergencies, call <strong>108</strong> immediately.`;
            }

            return response;
        }

        // ========== NEW: APPOINTMENT MANAGEMENT FUNCTIONS ==========
        function showAppointmentTab(tabName) {
            // Hide all tab contents
            document.getElementById('my-appointments-content').style.display = 'none';
            document.getElementById('manage-appointments-content').style.display = 'none';

            // Remove active class from all tabs
            document.querySelectorAll('.sub-tab').forEach(tab => tab.classList.remove('active'));

            // Show selected tab and add active class
            if (tabName === 'my-appointments') {
                document.getElementById('my-appointments-content').style.display = 'block';
                document.querySelector('.sub-tab[onclick*="my-appointments"]').classList.add('active');
                loadAppointments();
            } else {
                document.getElementById('manage-appointments-content').style.display = 'block';
                document.querySelector('.sub-tab[onclick*="manage-appointments"]').classList.add('active');
                loadAllAppointments();
            }
        }

        function loadAppointments() {
            let userAppointments = [];

            if (currentUser.role === 'patient') {
                userAppointments = appointments.filter(a => a.patientId === currentUser.id);
            } else if (currentUser.role === 'doctor') {
                userAppointments = appointments.filter(a => a.doctorId == 1); // Assuming doctor ID 1
            } else {
                userAppointments = appointments; // Admin sees all
            }

            if (userAppointments.length === 0) {
                document.getElementById('appointments-list').innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #666;">
                        <i class="fas fa-calendar-times" style="font-size: 3rem; margin-bottom: 20px;"></i>
                        <h3>No Appointments Found</h3>
                        <p>You don't have any appointments yet.</p>
                    </div>
                `;
                return;
            }

            let html = '';
            userAppointments.forEach(appointment => {
                const statusClass = `status-${appointment.status}`;
                const statusText = appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1);

                html += `
                    <div class="appointment-card">
                        <div class="appointment-header">
                            <div>
                                <h3 style="margin-bottom: 5px;">Appointment #${appointment.id}</h3>
                                <p style="color: #666;">${appointment.doctorName} • ${appointment.date} at ${appointment.time}</p>
                            </div>
                            <div>
                                <span class="status-badge ${statusClass}">${statusText}</span>
                            </div>
                        </div>
                        
                        <p><strong>Symptoms:</strong> ${appointment.symptoms}</p>
                        <p><strong>Type:</strong> ${appointment.type === 'clinic' ? 'In-Clinic' : 'Video Call'}</p>
                        <p><strong>Fee:</strong> ₹${appointment.fee}</p>
                        
                        <div class="appointment-actions">
                            ${currentUser.role === 'patient' ? `
                                <button class="action-btn" onclick="cancelAppointment(${appointment.id})" ${appointment.status !== 'requested' ? 'disabled style="opacity: 0.5;"' : ''}>
                                    <i class="fas fa-times"></i> Cancel
                                </button>
                            ` : ''}
                            
                            ${(currentUser.role === 'doctor' || currentUser.role === 'admin') && appointment.status === 'requested' ? `
                                <button class="action-btn secondary" onclick="updateAppointmentStatus(${appointment.id}, 'approved')">
                                    <i class="fas fa-check"></i> Approve
                                </button>
                                <button class="action-btn" onclick="updateAppointmentStatus(${appointment.id}, 'cancelled')">
                                    <i class="fas fa-times"></i> Reject
                                </button>
                            ` : ''}
                            
                            ${appointment.status === 'approved' ? `
                                <button class="action-btn secondary" onclick="updateAppointmentStatus(${appointment.id}, 'completed')">
                                    <i class="fas fa-check-double"></i> Mark Complete
                                </button>
                            ` : ''}
                            
                            <button class="action-btn" onclick="printAppointment(${appointment.id})">
                                <i class="fas fa-print"></i> Print
                            </button>
                        </div>
                    </div>
                `;
            });

            document.getElementById('appointments-list').innerHTML = html;
        }

        function loadAllAppointments() {
            if (appointments.length === 0) {
                document.getElementById('all-appointments-list').innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #666;">
                        <i class="fas fa-calendar-times" style="font-size: 3rem; margin-bottom: 20px;"></i>
                        <h3>No Appointments Found</h3>
                        <p>There are no appointments in the system yet.</p>
                    </div>
                `;
                return;
            }

            let html = `
                <div style="overflow-x: auto;">
                    <table class="patients-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Date & Time</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

            appointments.forEach(appointment => {
                const statusClass = `status-${appointment.status}`;
                const statusText = appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1);

                html += `
                    <tr>
                        <td>#${appointment.id}</td>
                        <td>${appointment.patientName}</td>
                        <td>${appointment.doctorName}</td>
                        <td>${appointment.date} ${appointment.time}</td>
                        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                        <td>
                            ${appointment.status === 'requested' ? `
                                <button class="action-btn secondary" onclick="updateAppointmentStatus(${appointment.id}, 'approved')">
                                    <i class="fas fa-check"></i>
                                </button>
                                <button class="action-btn" onclick="updateAppointmentStatus(${appointment.id}, 'cancelled')">
                                    <i class="fas fa-times"></i>
                                </button>
                            ` : ''}
                            <button class="action-btn" onclick="viewAppointmentDetails(${appointment.id})">
                                <i class="fas fa-eye"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });

            html += `</tbody></table></div>`;
            document.getElementById('all-appointments-list').innerHTML = html;
        }

        function updateAppointmentStatus(appointmentId, newStatus) {
            const appointmentIndex = appointments.findIndex(a => a.id === appointmentId);

            if (appointmentIndex !== -1) {
                appointments[appointmentIndex].status = newStatus;
                appointments[appointmentIndex].updatedAt = new Date().toISOString();

                // If completing appointment, create a prescription
                if (newStatus === 'completed') {
                    createPrescription(appointments[appointmentIndex]);
                }

                localStorage.setItem('appointments', JSON.stringify(appointments));

                alert(`Appointment ${newStatus} successfully!`);
                loadAppointments();
                loadAllAppointments();
                loadDashboardStats();
            }
        }

        function cancelAppointment(appointmentId) {
            if (confirm('Are you sure you want to cancel this appointment?')) {
                updateAppointmentStatus(appointmentId, 'cancelled');
            }
        }

        function viewAppointmentDetails(appointmentId) {
            const appointment = appointments.find(a => a.id === appointmentId);
            if (appointment) {
                alert(`Appointment Details:\n\nID: #${appointment.id}\nPatient: ${appointment.patientName}\nDoctor: ${appointment.doctorName}\nDate: ${appointment.date}\nTime: ${appointment.time}\nSymptoms: ${appointment.symptoms}\nStatus: ${appointment.status}\nType: ${appointment.type === 'clinic' ? 'In-Clinic' : 'Video Call'}\nFee: ₹${appointment.fee}`);
            }
        }

        // ========== NEW: PRESCRIPTION FUNCTIONS ==========
        function createPrescription(appointment) {
            const prescription = {
                id: prescriptions.length + 1,
                appointmentId: appointment.id,
                patientId: appointment.patientId,
                patientName: appointment.patientName,
                doctorId: appointment.doctorId,
                doctorName: appointment.doctorName,
                date: new Date().toISOString().split('T')[0],
                medicines: [
                    { name: "Paracetamol 500mg", dosage: "1 tablet every 6 hours", duration: "3 days" },
                    { name: "Cetirizine 10mg", dosage: "1 tablet at night", duration: "5 days" }
                ],
                instructions: "Take after meals. Complete the full course. Avoid alcohol.",
                followUp: "Follow up after 5 days if symptoms persist."
            };

            prescriptions.push(prescription);
            localStorage.setItem('prescriptions', JSON.stringify(prescriptions));

            // Also add sample prescriptions for demo
            if (prescriptions.length === 1) {
                const samplePrescription = {
                    id: 2,
                    appointmentId: 0,
                    patientId: currentUser.id,
                    patientName: currentUser.name,
                    doctorId: 1,
                    doctorName: "Dr. Arjun Kumar",
                    date: "2024-02-10",
                    medicines: [
                        { name: "Amoxicillin 250mg", dosage: "1 capsule every 8 hours", duration: "7 days" },
                        { name: "Pantoprazole 40mg", dosage: "1 tablet before breakfast", duration: "14 days" }
                    ],
                    instructions: "Take antibiotic with plenty of water. Complete full course.",
                    followUp: "Schedule follow-up after 7 days."
                };
                prescriptions.push(samplePrescription);
                localStorage.setItem('prescriptions', JSON.stringify(prescriptions));
            }
        }

        function loadPrescriptions() {
            let userPrescriptions = [];

            if (currentUser.role === 'patient') {
                userPrescriptions = prescriptions.filter(p => p.patientId === currentUser.id);
            } else if (currentUser.role === 'doctor') {
                userPrescriptions = prescriptions.filter(p => p.doctorId == 1);
            } else {
                userPrescriptions = prescriptions;
            }

            if (userPrescriptions.length === 0) {
                document.getElementById('prescriptions-list').innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #666;">
                        <i class="fas fa-file-prescription" style="font-size: 3rem; margin-bottom: 20px;"></i>
                        <h3>No Prescriptions Found</h3>
                        <p>You don't have any prescriptions yet.</p>
                    </div>
                `;
                return;
            }

            let html = '';
            userPrescriptions.forEach(prescription => {
                let medicinesHtml = '';
                prescription.medicines.forEach(med => {
                    medicinesHtml += `
                        <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 5px 0;">
                            <strong>${med.name}</strong><br>
                            <small>Dosage: ${med.dosage} for ${med.duration}</small>
                        </div>
                    `;
                });

                html += `
                    <div class="prescription-card">
                        <div class="prescription-header">
                            <div>
                                <h3 style="margin-bottom: 5px;">Prescription #${prescription.id}</h3>
                                <p style="color: #666;">Dr. ${prescription.doctorName} • ${prescription.date}</p>
                            </div>
                            <div>
                                <button class="action-btn" onclick="printSinglePrescription(${prescription.id})">
                                    <i class="fas fa-print"></i> Print
                                </button>
                            </div>
                        </div>
                        
                        <p><strong>Patient:</strong> ${prescription.patientName}</p>
                        
                        <div style="margin: 15px 0;">
                            <strong>Medications:</strong>
                            ${medicinesHtml}
                        </div>
                        
                        <p><strong>Instructions:</strong> ${prescription.instructions}</p>
                        <p><strong>Follow-up:</strong> ${prescription.followUp}</p>
                    </div>
                `;
            });

            document.getElementById('prescriptions-list').innerHTML = html;
        }

        // ========== NEW: EXPORT & PRINT FUNCTIONS ==========
        function exportAppointments() {
            let userAppointments = [];

            if (currentUser.role === 'patient') {
                userAppointments = appointments.filter(a => a.patientId === currentUser.id);
            } else {
                userAppointments = appointments;
            }

            if (userAppointments.length === 0) {
                alert('No appointments to export');
                return;
            }

            // Create CSV content
            let csv = 'ID,Patient,Doctor,Date,Time,Status,Type,Fee\n';
            userAppointments.forEach(app => {
                csv += `${app.id},${app.patientName},${app.doctorName},${app.date},${app.time},${app.status},${app.type},${app.fee}\n`;
            });

            // Create download link
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `appointments_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            alert('Appointments exported successfully!');
        }

        function printAppointments() {
            let userAppointments = [];

            if (currentUser.role === 'patient') {
                userAppointments = appointments.filter(a => a.patientId === currentUser.id);
            } else {
                userAppointments = appointments;
            }

            if (userAppointments.length === 0) {
                alert('No appointments to print');
                return;
            }

            let printHTML = `
                <div class="print-content">
                    <h2>MediCare Hospital - Appointments Report</h2>
                    <p>Generated on: ${new Date().toLocaleDateString()}</p>
                    <p>User: ${currentUser.name} (${currentUser.role})</p>
                    <hr>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <thead>
                            <tr style="background: #f8f9fa;">
                                <th style="border: 1px solid #ddd; padding: 8px;">ID</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Doctor</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Date</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Time</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Status</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Fee</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

            userAppointments.forEach(app => {
                printHTML += `
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">#${app.id}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${app.doctorName}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${app.date}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${app.time}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${app.status}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">₹${app.fee}</td>
                    </tr>
                `;
            });

            printHTML += `
                        </tbody>
                    </table>
                    <div style="margin-top: 30px; text-align: center;">
                        <p>--- End of Report ---</p>
                    </div>
                </div>
            `;

            document.getElementById('print-content').innerHTML = printHTML;

            // Trigger print
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html>
                <head>
                    <title>Print Appointments</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        table { width: 100%; border-collapse: collapse; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                        @media print {
                            body { margin: 0; }
                        }
                    </style>
                </head>
                <body>
                    ${printHTML}
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }

        function printAppointment(appointmentId) {
            const appointment = appointments.find(a => a.id === appointmentId);
            if (!appointment) return;

            const printHTML = `
                <div class="print-content">
                    <div style="text-align: center; border-bottom: 2px solid #1a2980; padding-bottom: 20px; margin-bottom: 30px;">
                        <h1 style="color: #1a2980; margin-bottom: 5px;">MediCare Hospital</h1>
                        <p>123 Medical Street, Healthcare City</p>
                        <p>Phone: (123) 456-7890 | Email: info@medicare.com</p>
                    </div>
                    
                    <h2 style="color: #1a2980; border-bottom: 1px solid #eee; padding-bottom: 10px;">Appointment Receipt</h2>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                        <div>
                            <h3 style="color: #666; font-size: 1rem; margin-bottom: 5px;">Appointment Details</h3>
                            <p><strong>ID:</strong> #${appointment.id}</p>
                            <p><strong>Date:</strong> ${appointment.date}</p>
                            <p><strong>Time:</strong> ${appointment.time}</p>
                            <p><strong>Status:</strong> ${appointment.status}</p>
                        </div>
                        <div>
                            <h3 style="color: #666; font-size: 1rem; margin-bottom: 5px;">Consultation Details</h3>
                            <p><strong>Doctor:</strong> ${appointment.doctorName}</p>
                            <p><strong>Patient:</strong> ${appointment.patientName}</p>
                            <p><strong>Type:</strong> ${appointment.type === 'clinic' ? 'In-Clinic' : 'Video Call'}</p>
                            <p><strong>Fee:</strong> ₹${appointment.fee}</p>
                        </div>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #666; font-size: 1rem; margin-bottom: 10px;">Symptoms</h3>
                        <p>${appointment.symptoms}</p>
                    </div>
                    
                    <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #eee;">
                        <div style="text-align: center;">
                            <p>This is a computer-generated receipt. No signature required.</p>
                            <p>Thank you for choosing MediCare Hospital</p>
                            <p>Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
            `;

            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html>
                <head>
                    <title>Appointment Receipt #${appointment.id}</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 40px; }
                        @media print {
                            body { margin: 20px; }
                        }
                    </style>
                </head>
                <body>
                    ${printHTML}
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }

        function exportPrescriptions() {
            let userPrescriptions = [];

            if (currentUser.role === 'patient') {
                userPrescriptions = prescriptions.filter(p => p.patientId === currentUser.id);
            } else {
                userPrescriptions = prescriptions;
            }

            if (userPrescriptions.length === 0) {
                alert('No prescriptions to export');
                return;
            }

            // Create CSV content
            let csv = 'ID,Patient,Doctor,Date,Medicines,Instructions\n';
            userPrescriptions.forEach(pres => {
                const medicines = pres.medicines.map(m => m.name).join('; ');
                csv += `${pres.id},${pres.patientName},${pres.doctorName},${pres.date},"${medicines}","${pres.instructions}"\n`;
            });

            // Create download link
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `prescriptions_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            alert('Prescriptions exported successfully!');
        }

        function printPrescription() {
            // Print all prescriptions
            printSinglePrescription(null);
        }

        function printSinglePrescription(prescriptionId) {
            let printPrescriptions = [];

            if (prescriptionId) {
                const prescription = prescriptions.find(p => p.id === prescriptionId);
                if (prescription) printPrescriptions.push(prescription);
            } else {
                if (currentUser.role === 'patient') {
                    printPrescriptions = prescriptions.filter(p => p.patientId === currentUser.id);
                } else {
                    printPrescriptions = prescriptions;
                }
            }

            if (printPrescriptions.length === 0) {
                alert('No prescriptions to print');
                return;
            }

            let printHTML = '';
            printPrescriptions.forEach(prescription => {
                let medicinesHtml = '';
                prescription.medicines.forEach(med => {
                    medicinesHtml += `
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">${med.name}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${med.dosage}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${med.duration}</td>
                        </tr>
                    `;
                });

                printHTML += `
                    <div class="print-content" style="page-break-after: always;">
                        <div style="text-align: center; border-bottom: 2px solid #1a2980; padding-bottom: 20px; margin-bottom: 30px;">
                            <h1 style="color: #1a2980; margin-bottom: 5px;">MediCare Hospital</h1>
                            <p>123 Medical Street, Healthcare City</p>
                            <p>Phone: (123) 456-7890 | License: MED123456</p>
                        </div>
                        
                        <h2 style="color: #1a2980; border-bottom: 1px solid #eee; padding-bottom: 10px;">Medical Prescription</h2>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                            <div>
                                <h3 style="color: #666; font-size: 1rem; margin-bottom: 5px;">Patient Details</h3>
                                <p><strong>Name:</strong> ${prescription.patientName}</p>
                                <p><strong>Date:</strong> ${prescription.date}</p>
                                <p><strong>Prescription ID:</strong> #${prescription.id}</p>
                            </div>
                            <div>
                                <h3 style="color: #666; font-size: 1rem; margin-bottom: 5px;">Doctor Details</h3>
                                <p><strong>Name:</strong> Dr. ${prescription.doctorName}</p>
                                <p><strong>License:</strong> MED${String(prescription.doctorId).padStart(6, '0')}</p>
                                <p><strong>Date Issued:</strong> ${prescription.date}</p>
                            </div>
                        </div>
                        
                        <div style="margin: 20px 0;">
                            <h3 style="color: #666; font-size: 1rem; margin-bottom: 10px;">Medications</h3>
                            <table style="width: 100%; border-collapse: collapse;">
                                <thead>
                                    <tr style="background: #f8f9fa;">
                                        <th style="border: 1px solid #ddd; padding: 8px;">Medicine</th>
                                        <th style="border: 1px solid #ddd; padding: 8px;">Dosage</th>
                                        <th style="border: 1px solid #ddd; padding: 8px;">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${medicinesHtml}
                                </tbody>
                            </table>
                        </div>
                        
                        <div style="margin: 20px 0;">
                            <h3 style="color: #666; font-size: 1rem; margin-bottom: 10px;">Instructions</h3>
                            <p>${prescription.instructions}</p>
                        </div>
                        
                        <div style="margin: 20px 0;">
                            <h3 style="color: #666; font-size: 1rem; margin-bottom: 10px;">Follow-up</h3>
                            <p>${prescription.followUp}</p>
                        </div>
                        
                        <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #eee;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <div>
                                    <p style="border-top: 1px solid #000; width: 200px; padding-top: 5px;">
                                        Doctor's Signature
                                    </p>
                                </div>
                                <div style="text-align: right;">
                                    <p>Hospital Stamp</p>
                                </div>
                            </div>
                            <div style="text-align: center; margin-top: 20px;">
                                <p><em>This is a valid medical prescription. Do not share medications.</em></p>
                                <p>Generated on: ${new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html>
                <head>
                    <title>Medical Prescriptions</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 40px; }
                        @media print {
                            body { margin: 20px; }
                            .print-content { page-break-after: always; }
                        }
                    </style>
                </head>
                <body>
                    ${printHTML}
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }

        // ========== PATIENTS FUNCTIONS ==========
        function loadPatientsList() {
            if (currentUser.role === 'patient') {
                document.getElementById('patients-table').innerHTML = `
                    <div style="text-align: center; padding: 50px;">
                        <i class="fas fa-lock" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                        <h3>Access Restricted</h3>
                        <p>This section is only available for doctors and administrators.</p>
                    </div>
                `;
                return;
            }

            let html = `
                <table class="patients-table">
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Condition</th>
                            <th>Last Visit</th>
                            ${currentUser.role === 'doctor' ? '<th>Actions</th>' : ''}
                        </tr>
                    </thead>
                    <tbody>
            `;

            patients.forEach(patient => {
                html += `
                    <tr>
                        <td>P${String(patient.id).padStart(3, '0')}</td>
                        <td>${patient.name}</td>
                        <td>${patient.age}</td>
                        <td>${patient.gender}</td>
                        <td>${patient.condition}</td>
                        <td>${patient.lastVisit}</td>
                        ${currentUser.role === 'doctor' ? `
                            <td>
                                <button class="action-btn" onclick="prescribeForPatient(${patient.id})">
                                    <i class="fas fa-prescription"></i> Prescribe
                                </button>
                                <button class="action-btn secondary" onclick="viewPatient(${patient.id})">
                                    <i class="fas fa-eye"></i> View
                                </button>
                            </td>
                        ` : ''}
                    </tr>
                `;
            });

            html += `</tbody></table>`;
            document.getElementById('patients-table').innerHTML = html;
        }

        function prescribeForPatient(patientId) {
            const patient = patients.find(p => p.id === patientId);

            document.getElementById('modal-title').textContent = `Prescribe for ${patient.name}`;

            const modalBody = document.getElementById('modal-body');
            modalBody.innerHTML = `
                <div style="margin-bottom: 20px;">
                    <p><strong>Patient:</strong> ${patient.name}</p>
                    <p><strong>Condition:</strong> ${patient.condition}</p>
                </div>
                
                <div class="form-group">
                    <label>Select Medicine</label>
                    <select class="form-control" id="prescription-medicine">
                        <option value="">-- Select Medicine --</option>
                        <option value="paracetamol">Paracetamol 500mg</option>
                        <option value="ibuprofen">Ibuprofen 400mg</option>
                        <option value="cetirizine">Cetirizine 10mg</option>
                        <option value="ondansetron">Ondansetron 4mg</option>
                        <option value="vertin">Vertin 16mg</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Dosage Instructions</label>
                    <textarea class="form-control" id="dosage-instructions" rows="3" 
                              placeholder="E.g., Take 1 tablet twice daily after meals for 5 days..."></textarea>
                </div>
                
                <div class="form-group">
                    <label>Duration (Days)</label>
                    <input type="number" class="form-control" id="duration" value="7">
                </div>
                
                <button class="btn" onclick="savePrescription(${patientId})" style="width: 100%;">
                    <i class="fas fa-save"></i> Save Prescription
                </button>
            `;

            document.getElementById('appointment-modal').classList.add('active');
        }

        function viewPatient(patientId) {
            const patient = patients.find(p => p.id === patientId);
            alert(`Patient Details:\n\nName: ${patient.name}\nAge: ${patient.age}\nGender: ${patient.gender}\nCondition: ${patient.condition}\nLast Visit: ${patient.lastVisit}`);
        }

        function savePrescription(patientId) {
            const medicine = document.getElementById('prescription-medicine').value;
            const instructions = document.getElementById('dosage-instructions').value;
            const duration = document.getElementById('duration').value;

            if (!medicine || !instructions) {
                alert('Please select medicine and enter dosage instructions');
                return;
            }

            const patient = patients.find(p => p.id === patientId);
            alert(`Prescription saved for ${patient.name}\n\nMedicine: ${medicine}\nDuration: ${duration} days\nInstructions: ${instructions}`);
            closeModal();
        }

        // ========== MODAL FUNCTIONS ==========
        function closeModal() {
            document.getElementById('appointment-modal').classList.remove('active');
        }

        // ========== INITIALIZATION ==========
        document.addEventListener('DOMContentLoaded', function () {
            // Load cart from localStorage
            updateCartCount();

            // Load appointments and prescriptions from localStorage
            appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            prescriptions = JSON.parse(localStorage.getItem('prescriptions')) || [];

            // Set today's date for appointment booking
            const today = new Date().toISOString().split('T')[0];
            const dateInput = document.getElementById('appointment-date');
            if (dateInput) {
                dateInput.min = today;
                dateInput.value = today;
            }

            // Close modals when clicking outside
            document.getElementById('appointment-modal').addEventListener('click', function (e) {
                if (e.target === this) {
                    closeModal();
                }
            });

            document.getElementById('cart-modal').addEventListener('click', function (e) {
                if (e.target === this) {
                    closeCart();
                }
            });

            // Initialize with some demo data
            if (appointments.length === 0) {
                // Add demo appointments
                const demoAppointments = [
                    {
                        id: 1,
                        patientId: 'patient123',
                        patientName: 'Patient User',
                        doctorId: 1,
                        doctorName: 'Dr. Arjun Kumar',
                        date: '2024-02-20',
                        time: '10:30 AM',
                        symptoms: 'Fever and headache',
                        type: 'clinic',
                        fee: 500,
                        status: 'approved',
                        createdAt: '2024-02-15T10:30:00Z'
                    },
                    {
                        id: 2,
                        patientId: 'patient123',
                        patientName: 'Patient User',
                        doctorId: 3,
                        doctorName: 'Dr. Raghav Sharma',
                        date: '2024-02-22',
                        time: '04:00 PM',
                        symptoms: 'Dizziness and nausea',
                        type: 'video',
                        fee: 700,
                        status: 'requested',
                        createdAt: '2024-02-16T14:20:00Z'
                    }
                ];

                appointments = demoAppointments;
                localStorage.setItem('appointments', JSON.stringify(appointments));
            }
        });
