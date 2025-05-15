// Contract address and ABI
const contractAddress = '0x4C9BBfb0072B1640980b2bC20122d5F1f9722913';

const contractABI = [
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
		"name": "AppointmentCancelled",
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
		"name": "cancelAppointment",
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
				"internalType": "uint8",
				"name": "rating",
				"type": "uint8"
			}
		],
		"name": "DoctorRated",
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
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_appointmentIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_rating",
				"type": "uint8"
			}
		],
		"name": "rateDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
		"stateMutability": "payable",
		"type": "receive"
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
			},
			{
				"internalType": "bool",
				"name": "cancelled",
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
			},
			{
				"internalType": "uint256",
				"name": "listIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalRating",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ratingCount",
				"type": "uint256"
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
					},
					{
						"internalType": "bool",
						"name": "cancelled",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "getDoctorRating",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "averageRating",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ratingCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "start",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pageSize",
				"type": "uint256"
			}
		],
		"name": "getDoctorsPage",
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
					},
					{
						"internalType": "bool",
						"name": "cancelled",
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
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"name": "getPatientDetails",
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
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hasRatedAppointment",
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
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "isDoctorWorkingOnDate",
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
			},
			{
				"internalType": "bool",
				"name": "cancelled",
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
			},
			{
				"internalType": "uint256",
				"name": "appointmentFee",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Global variables
let web3;
let contract;
let accounts;
let currentAccount;
let userRole = null;
let toast;
let toastBootstrap;
let doctorDetailsModal;
let appointmentDetailsModal;

// Initialize the application when the window loads
window.addEventListener('load', async () => {
    // Initialize Bootstrap toast and modals
    toast = document.getElementById('toast');
    toastBootstrap = new bootstrap.Toast(toast);
    doctorDetailsModal = new bootstrap.Modal(document.getElementById('doctorDetailsModal'));
    appointmentDetailsModal = new bootstrap.Modal(document.getElementById('appointmentDetailsModal'));
    
    // Set up event listeners
    document.getElementById('connect-wallet').addEventListener('click', connectWallet);
    document.getElementById('director-btn').addEventListener('click', () => selectRole('director'));
    document.getElementById('doctor-btn').addEventListener('click', () => selectRole('doctor'));
    document.getElementById('patient-btn').addEventListener('click', () => selectRole('patient'));
    
    // Director section event listeners
    document.getElementById('add-doctor-form').addEventListener('submit', addDoctor);
    document.getElementById('revoke-doctor-form').addEventListener('submit', revokeDoctor);
    document.getElementById('get-stats-btn').addEventListener('click', getHospitalStats);
    
    // Doctor section event listeners
    document.getElementById('set-fee-form').addEventListener('submit', setAppointmentFee);
    document.getElementById('add-patient-form').addEventListener('submit', addPatient);
    document.getElementById('add-medication-form').addEventListener('submit', addMedication);
    document.getElementById('get-doctor-appointments-btn').addEventListener('click', getDoctorAppointments);
    document.getElementById('complete-appointment-btn').addEventListener('click', completeAppointment);
    document.getElementById('cancel-appointment-btn').addEventListener('click', cancelAppointment);
    
    // Patient section event listeners
    document.getElementById('register-patient-form').addEventListener('submit', registerPatient);
    document.getElementById('list-doctors-btn').addEventListener('click', listAllDoctors);
    document.getElementById('book-appointment-form').querySelector('form').addEventListener('submit', bookAppointment);
    document.getElementById('get-medical-record-btn').addEventListener('click', getMedicalRecord);
    document.getElementById('get-patient-appointments-btn').addEventListener('click', getPatientAppointments);
    document.getElementById('rate-doctor-form').addEventListener('submit', rateDoctor);
});

// Connect to the blockchain and initialize the web3 instance
async function connectWallet() {
    if (window.ethereum) {
        try {
            // Request account access
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            currentAccount = accounts[0];
            
            // Initialize Web3 instance
            web3 = new Web3(window.ethereum);
            
            // Initialize contract instance
            contract = new web3.eth.Contract(contractABI, contractAddress);
            
            // Update wallet status
            document.getElementById('wallet-status').classList.remove('alert-warning');
            document.getElementById('wallet-status').classList.add('alert-success');
            document.getElementById('wallet-status').textContent = `已连接: ${formatAddress(currentAccount)} | Connected: ${formatAddress(currentAccount)}`;
            
            // Show role selection
            document.getElementById('role-selection').style.display = 'block';
            document.getElementById('connect-wallet').style.display = 'none';
            
            // Set up event handler for account changes
            window.ethereum.on('accountsChanged', (accounts) => {
                currentAccount = accounts[0];
                document.getElementById('wallet-status').textContent = `已连接: ${formatAddress(currentAccount)} | Connected: ${formatAddress(currentAccount)}`;
                
                // Reset UI when account changes
                resetUI();
            });
            
            showToast('成功 | Success', '钱包已连接 | Wallet connected');
        } catch (error) {
            showToast('错误 | Error', '连接钱包失败 | Failed to connect wallet');
            console.error(error);
        }
    } else {
        showToast('错误 | Error', '请安装MetaMask | Please install MetaMask');
    }
}

// Reset UI when account changes
function resetUI() {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show role selection
    document.getElementById('role-selection').style.display = 'block';
    userRole = null;
}

// Select a role and show the corresponding section
async function selectRole(role) {
    userRole = role;
    
    // Hide all sections and show the selected one
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById(`${role}-section`).classList.add('active');
    document.getElementById('role-selection').style.display = 'none';
    
    // Perform role-specific initialization
    if (role === 'director') {
        // Check if the current account is the director
        const director = await contract.methods.director().call();
        if (currentAccount.toLowerCase() !== director.toLowerCase()) {
            showToast('错误 | Error', '您不是院长 | You are not the director');
            resetUI();
            return;
        }
    } else if (role === 'doctor') {
        // Check if the current account is a doctor
        const doctor = await contract.methods.doctors(currentAccount).call();
        const doctorStatus = document.getElementById('doctor-status');
        
        if (doctor.isActive) {
            doctorStatus.classList.remove('alert-info');
            doctorStatus.classList.add('alert-success');
            doctorStatus.textContent = `医生状态: 已激活 | Doctor Status: Active`;
            
            // Show doctor speciality and other details
            doctorStatus.innerHTML += `<br>专业 | Specialty: ${doctor.specialty}<br>资质 | Qualification: ${doctor.qualification}`;
        } else {
            doctorStatus.classList.remove('alert-info');
            doctorStatus.classList.add('alert-danger');
            doctorStatus.textContent = `医生状态: 未激活 | Doctor Status: Inactive`;
            showToast('错误 | Error', '您不是激活状态的医生 | You are not an active doctor');
            resetUI();
            return;
        }
    } else if (role === 'patient') {
        // Check if the current account is a registered patient
        const patient = await contract.methods.patients(currentAccount).call();
        const patientStatus = document.getElementById('patient-status');
        
        if (patient.exists) {
            patientStatus.classList.remove('alert-info');
            patientStatus.classList.add('alert-success');
            patientStatus.textContent = `患者状态: 已注册 | Patient Status: Registered`;
            // Hide registration form for registered patients
            document.getElementById('patient-registration').classList.add('d-none');
        } else {
            patientStatus.classList.remove('alert-info');
            patientStatus.classList.add('alert-warning');
            patientStatus.textContent = `患者状态: 未注册 | Patient Status: Not Registered`;
            // Show registration form for unregistered patients
            document.getElementById('patient-registration').classList.remove('d-none');
        }
    }
}

// Director functions
async function addDoctor(event) {
    event.preventDefault();
    
    const doctorAddress = document.getElementById('doctor-address').value;
    const specialty = document.getElementById('doctor-specialty').value;
    const workingDays = document.getElementById('doctor-workdays').value;
    const qualification = document.getElementById('doctor-qualification').value;
    
    try {
        await contract.methods.addDoctor(doctorAddress, specialty, workingDays, qualification)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '医生添加成功 | Doctor added successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', `添加医生失败: ${error.message} | Failed to add doctor: ${error.message}`);
        console.error(error);
    }
}

async function revokeDoctor(event) {
    event.preventDefault();
    
    const doctorAddress = document.getElementById('revoke-doctor-address').value;
    
    try {
        await contract.methods.revokeDoctor(doctorAddress)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '医生权限已撤销 | Doctor revoked successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', `撤销医生失败: ${error.message} | Failed to revoke doctor: ${error.message}`);
        console.error(error);
    }
}

async function getHospitalStats() {
    try {
        const stats = await contract.methods.getHospitalStats().call();
        
        const statsElement = document.getElementById('hospital-stats');
        statsElement.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">医院统计数据 | Hospital Statistics</h5>
                    <p class="card-text">医生数量 | Doctor Count: ${stats.doctorCount}</p>
                    <p class="card-text">患者数量 | Patient Count: ${stats.patientCount}</p>
                    <p class="card-text">预约数量 | Appointment Count: ${stats.appointmentCount}</p>
                </div>
            </div>
        `;
        statsElement.classList.remove('d-none');
    } catch (error) {
        showToast('错误 | Error', `获取统计数据失败: ${error.message} | Failed to get statistics: ${error.message}`);
        console.error(error);
    }
}

async function setAppointmentFee(event) {
    event.preventDefault();
    
    const fee = document.getElementById('appointment-fee').value;
    
    try {
        await contract.methods.setAppointmentFee(fee)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '预约费用设置成功 | Appointment fee set successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', `设置预约费用失败: ${error.message} | Failed to set appointment fee: ${error.message}`);
        console.error(error);
    }
}

async function addPatient(event) {
    event.preventDefault();
    
    const patientAddress = document.getElementById('patient-address').value;
    const age = document.getElementById('patient-age').value;
    const gender = document.getElementById('patient-gender').value;
    
    try {
        await contract.methods.addPatient(patientAddress, age, gender)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '患者添加成功 | Patient added successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', `添加患者失败: ${error.message} | Failed to add patient: ${error.message}`);
        console.error(error);
    }
}

async function addMedication(event) {
    event.preventDefault();
    
    const patientAddress = document.getElementById('medication-patient-address').value;
    const medication = document.getElementById('medication-record').value;
    
    try {
        await contract.methods.addMedication(patientAddress, medication)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '医疗记录添加成功 | Medication record added successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', `添加医疗记录失败: ${error.message} | Failed to add medication record: ${error.message}`);
        console.error(error);
    }
}

async function getDoctorAppointments() {
    try {
        const appointments = await contract.methods.getDoctorAppointments().call({ from: currentAccount });
        
        const appointmentsElement = document.getElementById('doctor-appointments');
        
        if (appointments.length === 0) {
            appointmentsElement.innerHTML = '<div class="alert alert-info">没有预约记录 | No appointments found</div>';
            return;
        }
        
        let html = '';
        for (let i = 0; i < appointments.length; i++) {
            const appointment = appointments[i];
            const date = new Date(appointment.date * 1000);
            const formattedDate = date.toLocaleString();
            
            html += `
                <div class="appointment-card">
                    <div class="float-end">
                        ${appointment.completed ? 
                            '<span class="badge bg-success">已完成 | Completed</span>' : 
                            appointment.cancelled ? 
                                '<span class="badge bg-danger">已取消 | Cancelled</span>' : 
                                '<span class="badge bg-warning">待完成 | Pending</span>'
                        }
                    </div>
                    <h5>患者 | Patient: ${formatAddress(appointment.patient)}</h5>
                    <p>预约时间 | Date: ${formattedDate}</p>
                    <p>费用 | Fee: ${web3.utils.fromWei(appointment.fee, 'ether')} ETH</p>
                    ${!appointment.completed && !appointment.cancelled ? 
                        `<button class="btn btn-success btn-sm me-2" onclick="showCompleteAppointmentForm('${appointment.patient}', ${i})">
                            完成预约 | Complete
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="showCancelAppointmentForm('${appointment.patient}', ${i})">
                            取消预约 | Cancel
                        </button>` : 
                        ''
                    }
                </div>
            `;
        }
        
        appointmentsElement.innerHTML = html;
    } catch (error) {
        showToast('错误 | Error', `获取预约失败: ${error.message} | Failed to get appointments: ${error.message}`);
        console.error(error);
    }
}

function showCompleteAppointmentForm(patientAddress, appointmentId) {
    const completeForm = document.getElementById('complete-appointment-form');
    completeForm.classList.remove('d-none');
    
    document.getElementById('complete-patient-address').value = patientAddress;
    document.getElementById('complete-appointment-id').value = appointmentId;
    
    // Scroll to the form
    completeForm.scrollIntoView({ behavior: 'smooth' });
}

function showCancelAppointmentForm(patientAddress, appointmentId) {
    const cancelForm = document.getElementById('cancel-appointment-form-doctor');
    cancelForm.classList.remove('d-none');
    
    document.getElementById('cancel-patient-address').value = patientAddress;
    document.getElementById('cancel-appointment-id').value = appointmentId;
    
    // Scroll to the form
    cancelForm.scrollIntoView({ behavior: 'smooth' });
}

async function completeAppointment() {
    const patientAddress = document.getElementById('complete-patient-address').value;
    const appointmentId = document.getElementById('complete-appointment-id').value;
    
    try {
        await contract.methods.completeAppointment(patientAddress, appointmentId)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '预约已完成 | Appointment completed successfully');
        document.getElementById('complete-appointment-form').classList.add('d-none');
        // Refresh appointments list
        getDoctorAppointments();
    } catch (error) {
        showToast('错误 | Error', `完成预约失败: ${error.message} | Failed to complete appointment: ${error.message}`);
        console.error(error);
    }
}

async function cancelAppointment() {
    const patientAddress = document.getElementById('cancel-patient-address').value;
    const appointmentId = document.getElementById('cancel-appointment-id').value;
    
    try {
        await contract.methods.cancelAppointment(patientAddress, appointmentId)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '预约已取消 | Appointment cancelled successfully');
        document.getElementById('cancel-appointment-form-doctor').classList.add('d-none');
        // Refresh appointments list
        getDoctorAppointments();
    } catch (error) {
        showToast('错误 | Error', `取消预约失败: ${error.message} | Failed to cancel appointment: ${error.message}`);
        console.error(error);
    }
}

// Patient functions
async function registerPatient(event) {
    event.preventDefault();
    
    const age = document.getElementById('self-age').value;
    const gender = document.getElementById('self-gender').value;
    
    try {
        await contract.methods.registerAsSelfPatient(age, gender)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '患者注册成功 | Patient registered successfully');
        event.target.reset();
        
        // Update patient status
        const patientStatus = document.getElementById('patient-status');
        patientStatus.classList.remove('alert-warning');
        patientStatus.classList.add('alert-success');
        patientStatus.textContent = `患者状态: 已注册 | Patient Status: Registered`;
        
        // Hide registration form
        document.getElementById('patient-registration').classList.add('d-none');
    } catch (error) {
        showToast('错误 | Error', `患者注册失败: ${error.message} | Failed to register patient: ${error.message}`);
        console.error(error);
    }
}

async function listAllDoctors() {
    try {
        const doctorAddresses = await contract.methods.getAllDoctors().call();
        
        const doctorsListElement = document.getElementById('doctors-list');
        
        if (doctorAddresses.length === 0) {
            doctorsListElement.innerHTML = '<div class="alert alert-info">没有医生记录 | No doctors found</div>';
            return;
        }
        
        let html = '';
        for (const doctorAddress of doctorAddresses) {
            // Get doctor details
            const doctor = await contract.methods.doctors(doctorAddress).call();
            const doctorDetails = await contract.methods.getDoctorDetails(doctorAddress).call();
            const doctorRating = await contract.methods.getDoctorRating(doctorAddress).call();
            
            // Convert rating to stars (out of 5)
            let ratingHtml = '';
            if (doctorRating.ratingCount > 0) {
                const averageRating = doctorRating.averageRating / 100; // Convert back from the scaled value
                const fullStars = Math.floor(averageRating);
                const halfStar = averageRating - fullStars >= 0.5;
                
                for (let i = 0; i < fullStars; i++) {
                    ratingHtml += '★';
                }
                if (halfStar) {
                    ratingHtml += '½';
                }
                ratingHtml += ` (${averageRating.toFixed(1)}/5 from ${doctorRating.ratingCount} ratings)`;
            } else {
                ratingHtml = 'No ratings yet';
            }
            
            html += `
                <div class="doctor-card">
                    <h5>医生 | Doctor: ${formatAddress(doctorAddress)}</h5>
                    <p>专业 | Specialty: ${doctorDetails.specialty}</p>
                    <p>资质 | Qualification: ${doctorDetails.qualification}</p>
                    <p>预约费用 | Fee: ${web3.utils.fromWei(doctorDetails.appointmentFee.toString(), 'ether')} ETH</p>
                    <p>评分 | Rating: <span class="rating-stars">${ratingHtml}</span></p>
                    <button class="btn btn-primary btn-sm" onclick="showDoctorDetails('${doctorAddress}')">
                        查看详情 | View Details
                    </button>
                    <button class="btn btn-success btn-sm" onclick="showBookAppointmentForm('${doctorAddress}')">
                        预约 | Book Appointment
                    </button>
                </div>
            `;
        }
        
        doctorsListElement.innerHTML = html;
    } catch (error) {
        showToast('错误 | Error', `获取医生列表失败: ${error.message} | Failed to get doctors list: ${error.message}`);
        console.error(error);
    }
}

async function showDoctorDetails(doctorAddress) {
    try {
        // Verify the doctor and get details
        const verificationResult = await contract.methods.verifyDoctor(doctorAddress).call();
        
        if (!verificationResult.isDoctor) {
            showToast('错误 | Error', '该地址不是激活状态的医生 | This address is not an active doctor');
            return;
        }
        
        const doctorDetails = await contract.methods.getDoctorDetails(doctorAddress).call();
        const doctorRating = await contract.methods.getDoctorRating(doctorAddress).call();
        
        // Format working days
        const workingDays = doctorDetails.workingDays.split('').map((day, index) => {
            const dayNames = ['一 | Mon', '二 | Tue', '三 | Wed', '四 | Thu', '五 | Fri', '六 | Sat', '日 | Sun'];
            return day === '1' ? dayNames[index] : null;
        }).filter(day => day !== null).join(', ');
        
        // Format rating
        let ratingText = '';
        if (doctorRating.ratingCount > 0) {
            const averageRating = doctorRating.averageRating / 100;
            ratingText = `${averageRating.toFixed(1)}/5 (${doctorRating.ratingCount} 评价 | ratings)`;
        } else {
            ratingText = '暂无评价 | No ratings yet';
        }
        
        // Update modal content
        const contentElement = document.getElementById('doctor-details-content');
        contentElement.innerHTML = `
            <div class="doctor-details">
                <p><strong>地址 | Address:</strong> ${doctorAddress}</p>
                <p><strong>专业 | Specialty:</strong> ${doctorDetails.specialty}</p>
                <p><strong>工作日 | Working Days:</strong> ${workingDays}</p>
                <p><strong>资质 | Qualification:</strong> ${doctorDetails.qualification}</p>
                <p><strong>预约费用 | Appointment Fee:</strong> ${web3.utils.fromWei(doctorDetails.appointmentFee.toString(), 'ether')} ETH</p>
                <p><strong>评分 | Rating:</strong> ${ratingText}</p>
            </div>
        `;
        
        // Show the modal
        doctorDetailsModal.show();
    } catch (error) {
        showToast('错误 | Error', `获取医生详情失败: ${error.message} | Failed to get doctor details: ${error.message}`);
        console.error(error);
    }
}

async function showBookAppointmentForm(doctorAddress) {
    try {
        const doctorDetails = await contract.methods.getDoctorDetails(doctorAddress).call();
        
        // Show the booking form
        const bookForm = document.getElementById('book-appointment-form');
        bookForm.classList.remove('d-none');
        
        // Set the doctor address in the form
        document.getElementById('appointment-doctor').value = doctorAddress;
        
        // Show fee information
        document.getElementById('fee-label').textContent = `费用 | Fee: ${web3.utils.fromWei(doctorDetails.appointmentFee.toString(), 'ether')} ETH`;
        document.getElementById('fee-info').classList.remove('d-none');
        
        // Show working days information
        document.getElementById('working-days-info').classList.remove('d-none');
        document.getElementById('working-days-info').textContent = `工作日: ${formatWorkingDays(doctorDetails.workingDays)} | Working Days: ${formatWorkingDaysEn(doctorDetails.workingDays)}`;
        
        // Add validation to the date input
        const dateInput = document.getElementById('appointment-date');
        dateInput.min = new Date().toISOString().slice(0, 16); // Set minimum to current date and time
        
        // Scroll to the form
        bookForm.scrollIntoView({ behavior: 'smooth' });
        
        // Add event listener for form submission
        bookForm.querySelector('form').onsubmit = (event) => {
            event.preventDefault();
            bookAppointment(doctorAddress);
        };
    } catch (error) {
        showToast('错误 | Error', `获取医生详情失败: ${error.message} | Failed to get doctor details: ${error.message}`);
        console.error(error);
    }
}

async function bookAppointment(doctorAddress) {
    const doctorAddressInput = document.getElementById('appointment-doctor').value;
    const dateTimeInput = document.getElementById('appointment-date').value;
    
    if (!doctorAddressInput || !dateTimeInput) {
        showToast('错误 | Error', '请填写所有必填字段 | Please fill all required fields');
        return;
    }
    
    const timestamp = Math.floor(new Date(dateTimeInput).getTime() / 1000);
    
    try {
        // Check if doctor is available on this date
        const isAvailable = await contract.methods.isDoctorAvailable(doctorAddressInput, timestamp).call();
        
        if (!isAvailable) {
            showToast('错误 | Error', '医生在该日期不可用 | Doctor is not available on this date');
            return;
        }
        
        // Get appointment fee
        const doctorDetails = await contract.methods.getDoctorDetails(doctorAddressInput).call();
        const fee = doctorDetails.appointmentFee;
        
        // Book appointment
        await contract.methods.bookAppointment(doctorAddressInput, timestamp)
            .send({ from: currentAccount, value: fee });
        
        showToast('成功 | Success', '预约成功 | Appointment booked successfully');
        
        // Reset the form
        document.getElementById('book-appointment-form').querySelector('form').reset();
        document.getElementById('book-appointment-form').classList.add('d-none');
        
        // Refresh appointments
        getPatientAppointments();
    } catch (error) {
        showToast('错误 | Error', `预约失败: ${error.message} | Failed to book appointment: ${error.message}`);
        console.error(error);
    }
}

async function getMedicalRecord() {
    try {
        const medicalRecord = await contract.methods.getMyMedicalRecord().call({ from: currentAccount });
        
        const recordElement = document.getElementById('medical-record');
        recordElement.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">我的医疗记录 | My Medical Record</h5>
                    <p class="card-text">年龄 | Age: ${medicalRecord.age}</p>
                    <p class="card-text">性别 | Gender: ${medicalRecord.gender}</p>
                    <p class="card-text">医疗记录 | Medication Record: ${medicalRecord.medicationRecord || '无 | None'}</p>
                </div>
            </div>
        `;
        recordElement.classList.remove('d-none');
    } catch (error) {
        showToast('错误 | Error', `获取医疗记录失败: ${error.message} | Failed to get medical record: ${error.message}`);
        console.error(error);
    }
}

async function getPatientAppointments() {
    try {
        const appointments = await contract.methods.getMyAppointments().call({ from: currentAccount });
        
        const appointmentsElement = document.getElementById('patient-appointments');
        
        if (appointments.length === 0) {
            appointmentsElement.innerHTML = '<div class="alert alert-info">没有预约记录 | No appointments found</div>';
            return;
        }
        
        let html = '';
        for (let i = 0; i < appointments.length; i++) {
            const appointment = appointments[i];
            const date = new Date(appointment.date * 1000);
            const formattedDate = date.toLocaleString();
            
            html += `
                <div class="appointment-card">
                    <div class="float-end">
                        ${appointment.completed ? 
                            '<span class="badge bg-success">已完成 | Completed</span>' : 
                            appointment.cancelled ? 
                                '<span class="badge bg-danger">已取消 | Cancelled</span>' : 
                                '<span class="badge bg-warning">待完成 | Pending</span>'
                        }
                    </div>
                    <h5>医生 | Doctor: ${formatAddress(appointment.doctor)}</h5>
                    <p>预约时间 | Date: ${formattedDate}</p>
                    <p>费用 | Fee: ${web3.utils.fromWei(appointment.fee, 'ether')} ETH</p>
                    ${appointment.completed && !hasRatedAppointment(currentAccount, i) ? 
                        `<button class="btn btn-primary btn-sm" onclick="showRateDoctorForm('${appointment.doctor}', ${i})">
                            评价医生 | Rate Doctor
                        </button>` : 
                        ''
                    }
                </div>
            `;
        }
        
        appointmentsElement.innerHTML = html;
    } catch (error) {
        showToast('错误 | Error', `获取预约失败: ${error.message} | Failed to get appointments: ${error.message}`);
        console.error(error);
    }
}

// Helper function to check if an appointment has been rated
async function hasRatedAppointment(patientAddress, appointmentIndex) {
    try {
        const hasRated = await contract.methods.hasRatedAppointment(patientAddress, appointmentIndex).call();
        return hasRated;
    } catch (error) {
        console.error("Error checking if appointment has been rated:", error);
        return false;
    }
}

function showRateDoctorForm(doctorAddress, appointmentId) {
    document.getElementById('rate-doctor-address').value = doctorAddress;
    document.getElementById('rate-appointment-id').value = appointmentId;
    
    // Scroll to the rating form
    document.querySelector('#rate-doctor-form').scrollIntoView({ behavior: 'smooth' });
}

async function rateDoctor(event) {
    event.preventDefault();
    
    const doctorAddress = document.getElementById('rate-doctor-address').value;
    const appointmentId = document.getElementById('rate-appointment-id').value;
    const rating = document.getElementById('doctor-rating').value;
    
    if (!rating) {
        showToast('错误 | Error', '请选择评分 | Please select a rating');
        return;
    }
    
    try {
        await contract.methods.rateDoctor(doctorAddress, appointmentId, rating)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '评价提交成功 | Rating submitted successfully');
        event.target.reset();
        
        // Refresh appointments to update rating status
        getPatientAppointments();
    } catch (error) {
        showToast('错误 | Error', `评价提交失败: ${error.message} | Failed to submit rating: ${error.message}`);
        console.error(error);
    }
}

// Utility Functions
function formatAddress(address) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

function formatWorkingDays(workingDays) {
    const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    let result = [];
    
    for (let i = 0; i < workingDays.length; i++) {
        if (workingDays[i] === '1') {
            result.push(days[i]);
        }
    }
    
    return result.join(', ');
}

function formatWorkingDaysEn(workingDays) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let result = [];
    
    for (let i = 0; i < workingDays.length; i++) {
        if (workingDays[i] === '1') {
            result.push(days[i]);
        }
    }
    
    return result.join(', ');
}

function showToast(title, message) {
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-message').textContent = message;
    toastBootstrap.show();
}
