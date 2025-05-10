// Hospital Management System DApp - JavaScript Implementation

// Contract ABI - This needs to be updated with your actual ABI after deployment
// For testing purposes this is a placeholder that will need to be replaced
const CONTRACT_ABI = [
[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_specialty",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_workingDays",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_qualification",
				"type": "string"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_medication",
				"type": "string"
			}
		],
		"name": "addMedication",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			}
		],
		"name": "AppointmentBooked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "AppointmentCompleted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "bookAppointment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_appointmentIndex",
				"type": "uint256"
			}
		],
		"name": "completeAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctorAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "specialty",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "workingDays",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			}
		],
		"name": "DoctorAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctorAddress",
				"type": "address"
			}
		],
		"name": "DoctorRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "medication",
				"type": "string"
			}
		],
		"name": "MedicationAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "gender",
				"type": "string"
			}
		],
		"name": "PatientAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			}
		],
		"name": "registerAsSelfPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "revokeDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "setAppointmentFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appointmentCountPerDay",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "director",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "doctorAppointments",
		"outputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "completed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "doctorList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "doctors",
		"outputs": [
			{
				"internalType": "address",
				"name": "doctorAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "specialty",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "workingDays",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "appointmentFee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDoctors",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDoctorAppointments",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "doctor",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "fee",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "completed",
						"type": "bool"
					}
				],
				"internalType": "struct HospitalManagement.Appointment[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "getDoctorDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "specialty",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "workingDays",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "appointmentFee",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHospitalStats",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "doctorCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "patientCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "appointmentCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyAppointments",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "doctor",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "fee",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "completed",
						"type": "bool"
					}
				],
				"internalType": "struct HospitalManagement.Appointment[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyMedicalRecord",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medicationRecord",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "isDoctorAvailable",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientAppointments",
		"outputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "completed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medicationRecord",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "verifyDoctor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isDoctor",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "specialty",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
];

// Contract address - Replace with your deployed contract address
const CONTRACT_ADDRESS = "0xf8e81D47203A594245E36C48e151709F0C19fBe8"; // Replace with your actual contract address

// Global variables
let web3;
let contract;
let accounts;
let currentAccount;
let isDirector = false;
let isDoctor = false;
let isPatient = false;

// Initialize the application
async function initApp() {
    showLoading(true);
    try {
        // Check if MetaMask is installed
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            try {
                // Request account access
                accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                currentAccount = accounts[0];
                
                // Set up listeners for account/network change
                window.ethereum.on('accountsChanged', handleAccountsChanged);
                window.ethereum.on('chainChanged', () => window.location.reload());
                
                // Initialize contract
                contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
                
                // Display connected account
                document.getElementById('accountDisplay').textContent = 
                    '账户 | Account: ' + currentAccount.substring(0, 6) + '...' + currentAccount.substring(38);
                
                // Check user roles
                await checkRoles();
                
                // Show content
                showContent(true);
            } catch (error) {
                console.error("User denied account access:", error);
                showConnectionError("用户拒绝访问账户。请在MetaMask中授权访问。 | User denied account access. Please authorize in MetaMask.");
            }
        } else {
            showConnectionError("请安装MetaMask浏览器扩展以使用此应用程序。 | Please install MetaMask browser extension to use this application.");
        }
    } catch (error) {
        console.error("Initialization error:", error);
        showConnectionError("初始化错误：" + error.message + " | Initialization error: " + error.message);
    }
    showLoading(false);
}

// Handle account change in MetaMask
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        showConnectionError("请连接到MetaMask。 | Please connect to MetaMask.");
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        document.getElementById('accountDisplay').textContent = 
            '账户 | Account: ' + currentAccount.substring(0, 6) + '...' + currentAccount.substring(38);
        checkRoles();
    }
}

// Check user roles (director, doctor, patient)
async function checkRoles() {
    try {
        // Check if user is director
        const director = await contract.methods.director().call();
        isDirector = (currentAccount.toLowerCase() === director.toLowerCase());
        
        // Check if user is doctor
        const doctorInfo = await contract.methods.doctors(currentAccount).call();
        isDoctor = doctorInfo.isActive;
        
        // Check if user is patient
        const patientInfo = await contract.methods.patients(currentAccount).call();
        isPatient = patientInfo.exists;
        
        // Update role status display
        updateRoleStatus();
        
        // Setup role-specific sections
        setupRoleSections();
    } catch (error) {
        console.error("Error checking roles:", error);
        showError("检查角色时出错：" + error.message + " | Error checking roles: " + error.message);
    }
}

// Update role status display
function updateRoleStatus() {
    let roleText = "";
    if (isDirector) roleText += "院长 | Director<br>";
    if (isDoctor) roleText += "医生 | Doctor<br>";
    if (isPatient) roleText += "患者 | Patient<br>";
    
    if (!roleText) {
        roleText = "您还没有角色，请选择一个角色注册或联系管理员。 | You don't have any roles yet. Please register for a role or contact administrator.";
        document.getElementById('roleButtons').style.display = 'block';
    } else {
        document.getElementById('roleButtons').style.display = 'none';
    }
    
    document.getElementById('roleStatus').innerHTML = roleText;
}

// Setup role-specific sections
function setupRoleSections() {
    // Hide all sections first
    document.querySelectorAll('.role-section').forEach(section => {
        section.classList.remove('role-active');
    });
    
    // Show appropriate sections based on roles
    if (isDirector) {
        document.getElementById('directorSection').classList.add('role-active');
        setupDirectorSection();
    }
    
    if (isDoctor) {
        document.getElementById('doctorSection').classList.add('role-active');
        setupDoctorSection();
    }
    
    if (isPatient) {
        document.getElementById('patientSection').classList.add('role-active');
        setupPatientSection();
    } else {
        // Show the registration form if not already a patient
        document.getElementById('patientSection').classList.add('role-active');
    }
}

// Setup Director Section
function setupDirectorSection() {
    // Set up event listeners for director actions
    document.getElementById('addDoctorForm').addEventListener('submit', addDoctor);
    document.getElementById('revokeDoctorForm').addEventListener('submit', revokeDoctor);
    document.getElementById('refreshStats').addEventListener('click', refreshHospitalStats);
    document.getElementById('refreshDoctors').addEventListener('click', refreshDoctorList);
    
    // Load initial data
    refreshHospitalStats();
    refreshDoctorList();
}

// Setup Doctor Section
function setupDoctorSection() {
    // Set up event listeners for doctor actions
    document.getElementById('setFeeForm').addEventListener('submit', setAppointmentFee);
    document.getElementById('addPatientForm').addEventListener('submit', addPatient);
    document.getElementById('addMedicationForm').addEventListener('submit', addMedication);
    document.getElementById('refreshDoctorAppointments').addEventListener('click', refreshDoctorAppointments);
    
    // Load initial data
    refreshDoctorAppointments();
}

// Setup Patient Section
function setupPatientSection() {
    // Set up event listeners for patient actions
    document.getElementById('registerPatientForm').addEventListener('submit', registerAsPatient);
    document.getElementById('refreshMedicalRecord').addEventListener('click', refreshMedicalRecord);
    document.getElementById('refreshAvailableDoctors').addEventListener('click', refreshAvailableDoctors);
    document.getElementById('refreshPatientAppointments').addEventListener('click', refreshPatientAppointments);
    document.getElementById('appointmentBookingForm').addEventListener('submit', bookAppointment);
    
    // Check if user is already a patient
    if (isPatient) {
        // Hide registration form
        document.getElementById('registerPatientForm').parentElement.parentElement.style.display = 'none';
        // Load patient-specific data
        refreshMedicalRecord();
        refreshPatientAppointments();
    }
}

// Role button handlers
document.getElementById('btnDirector').addEventListener('click', function() {
    alert("只有院长才能访问院长功能。 | Only the director can access director functions.");
});

document.getElementById('btnDoctor').addEventListener('click', function() {
    alert("只有已被添加的医生才能访问医生功能。请联系院长添加您为医生。 | Only added doctors can access doctor functions. Please contact the director to add you as a doctor.");
});

document.getElementById('btnPatient').addEventListener('click', function() {
    document.getElementById('patientSection').classList.add('role-active');
});

// Director function implementations
async function addDoctor(event) {
    event.preventDefault();
    if (!isDirector) {
        alert("只有院长可以添加医生 | Only the director can add doctors");
        return;
    }
    
    const doctorAddress = document.getElementById('doctorAddress').value;
    const specialty = document.getElementById('specialty').value;
    const workingDays = document.getElementById('workingDays').value;
    const qualification = document.getElementById('qualification').value;
    
    try {
        showLoading(true);
        await contract.methods.addDoctor(doctorAddress, specialty, workingDays, qualification)
            .send({ from: currentAccount });
        
        alert("医生添加成功！ | Doctor added successfully!");
        document.getElementById('addDoctorForm').reset();
        refreshDoctorList();
    } catch (error) {
        console.error("Error adding doctor:", error);
        showError("添加医生时出错：" + error.message + " | Error adding doctor: " + error.message);
    } finally {
        showLoading(false);
    }
}

async function revokeDoctor(event) {
    event.preventDefault();
    if (!isDirector) {
        alert("只有院长可以撤销医生资格 | Only the director can revoke doctors");
        return;
    }
    
    const doctorAddress = document.getElementById('revokeDoctorAddress').value;
    
    try {
        showLoading(true);
        await contract.methods.revokeDoctor(doctorAddress)
            .send({ from: currentAccount });
        
        alert("医生资格撤销成功！ | Doctor revoked successfully!");
        document.getElementById('revokeDoctorForm').reset();
        refreshDoctorList();
    } catch (error) {
        console.error("Error revoking doctor:", error);
        showError("撤销医生资格时出错：" + error.message + " | Error revoking doctor: " + error.message);
    } finally {
        showLoading(false);
    }
}

async function refreshHospitalStats() {
    if (!isDirector) return;
    
    try {
        showLoading(true);
        const stats = await contract.methods.getHospitalStats().call({ from: currentAccount });
        
        document.getElementById('doctorCount').textContent = stats.doctorCount;
        document.getElementById('patientCount').textContent = stats.patientCount;
        document.getElementById('appointmentCount').textContent = stats.appointmentCount;
    } catch (error) {
        console.error("Error refreshing hospital stats:", error);
        showError("刷新医院统计数据时出错：" + error.message + " | Error refreshing hospital stats: " + error.message);
    } finally {
        showLoading(false);
    }
}

async function refreshDoctorList() {
    try {
        showLoading(true);
        const doctors = await contract.methods.getAllDoctors().call();
        const doctorListElement = document.getElementById('doctorList');
        doctorListElement.innerHTML = '';
        
        if (doctors.length === 0) {
            doctorListElement.innerHTML = '<div class="col-12"><p>没有医生记录 | No doctors found</p></div>';
            return;
        }
        
        for (const doctorAddress of doctors) {
            const details = await contract.methods.getDoctorDetails(doctorAddress).call();
            
            const doctorCard = document.createElement('div');
            doctorCard.className = 'col-md-4 mb-3';
            doctorCard.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h6 class="card-title">医生地址 | Doctor Address</h6>
                        <p class="card-text">${doctorAddress}</p>
                        <p><strong>专业 | Specialty:</strong> ${details.specialty}</p>
                        <p><strong>工作日 | Working Days:</strong> ${details.workingDays}</p>
                        <p><strong>资质 | Qualification:</strong> ${details.qualification}</p>
                        <p><strong>预约费用 | Fee:</strong> ${web3.utils.fromWei(details.appointmentFee, 'ether')} ETH</p>
                    </div>
                </div>
            `;
            doctorListElement.appendChild(doctorCard);
        }
    } catch (error) {
        console.error("Error refreshing doctor list:", error);
        showError("刷新医生列表时出错：" + error.message + " | Error refreshing doctor list: " + error.message);
    } finally {
        showLoading(false);
    }
}

// Doctor function implementations
async function setAppointmentFee(event) {
    event.preventDefault();
    if (!isDoctor) {
        alert("只有医生可以设置预约费用 | Only doctors can set appointment fees");
        return;
    }
    
    const fee = document.getElementById('appointmentFee').value;
    
    try {
        showLoading(true);
        await contract.methods.setAppointmentFee(fee)
            .send({ from: currentAccount });
        
        alert("预约费用设置成功！ | Appointment fee set successfully!");
        document.getElementById('set
