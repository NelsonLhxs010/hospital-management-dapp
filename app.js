// Contract ABI - Replace with your contract's ABI after deployment
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
]; // You will fill this in later

// Contract address - Replace with your deployed contract address
const contractAddress = '0x9662b63975BC1f4204f8d5aFea6910Db95cDc201'; // 部署合约后填写合约地址 | Fill this after contract deployment

// Global variables
let web3;
let contract;
let accounts;
let currentAccount;
let userRole = null;
let toast;
let toastBootstrap;

// Initialize the application when the window loads
window.addEventListener('load', async () => {
    // Initialize Bootstrap toast
    toast = document.getElementById('toast');
    toastBootstrap = new bootstrap.Toast(toast);
    
    // Set up event listeners
    document.getElementById('connect-wallet').addEventListener('click', connectWallet);
    document.getElementById('director-btn').addEventListener('click', () => selectRole('director'));
    document.getElementById('doctor-btn').addEventListener('click', () => selectRole('doctor'));
    document.getElementById('patient-btn').addEventListener('click', () => selectRole('patient'));
    
    // Set up form event listeners
    setupFormListeners();
    
    // Check if MetaMask is installed
    if (window.ethereum) {
        try {
            // Request account access if needed
            web3 = new Web3(window.ethereum);
            // Check if already connected
            accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                currentAccount = accounts[0];
                onWalletConnected();
            }
        } catch (error) {
            showToast('错误 | Error', '无法连接到区块链网络 | Unable to connect to blockchain network');
            console.error(error);
        }
    } else {
        showToast('警告 | Warning', '请安装 MetaMask 钱包 | Please install MetaMask wallet');
    }
});

// Connect wallet function
async function connectWallet() {
    if (window.ethereum) {
        try {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            currentAccount = accounts[0];
            onWalletConnected();
        } catch (error) {
            showToast('错误 | Error', '连接钱包失败 | Failed to connect wallet');
            console.error(error);
        }
    } else {
        showToast('警告 | Warning', '请安装 MetaMask 钱包 | Please install MetaMask wallet');
    }
}

// Function called after wallet is connected
async function onWalletConnected() {
    try {
        // Initialize contract
        contract = new web3.eth.Contract(contractABI, contractAddress);
        
        // Update UI
        document.getElementById('wallet-status').innerHTML = `
            <span>钱包已连接 | Wallet connected</span><br>
            <small>${currentAccount}</small>
        `;
        document.getElementById('wallet-status').classList.remove('alert-warning');
        document.getElementById('wallet-status').classList.add('alert-success');
        
        // Hide connect button
        document.getElementById('connect-wallet').style.display = 'none';
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', function (accounts) {
            currentAccount = accounts[0];
            resetUI();
            showToast('通知 | Notification', '钱包账户已更改 | Wallet account changed');
        });
        
        // Check if user is a director
        const director = await contract.methods.director().call();
        if (currentAccount.toLowerCase() === director.toLowerCase()) {
            selectRole('director');
        }
    } catch (error) {
        showToast('错误 | Error', '连接到合约失败 | Failed to connect to contract');
        console.error(error);
    }
}

// Set up all form event listeners
function setupFormListeners() {
    // Director forms
    document.getElementById('add-doctor-form').addEventListener('submit', addDoctor);
    document.getElementById('revoke-doctor-form').addEventListener('submit', revokeDoctor);
    document.getElementById('get-stats-btn').addEventListener('click', getHospitalStats);
    
    // Doctor forms
    document.getElementById('set-fee-form').addEventListener('submit', setAppointmentFee);
    document.getElementById('add-patient-form').addEventListener('submit', addPatient);
    document.getElementById('add-medication-form').addEventListener('submit', addMedication);
    document.getElementById('get-doctor-appointments-btn').addEventListener('click', getDoctorAppointments);
    
    // Patient forms
    document.getElementById('register-patient-form').addEventListener('submit', registerAsSelfPatient);
    document.getElementById('list-doctors-btn').addEventListener('click', listAllDoctors);
    document.getElementById('book-appointment-form').addEventListener('submit', bookAppointment);
    document.getElementById('get-medical-record-btn').addEventListener('click', getMedicalRecord);
    document.getElementById('get-patient-appointments-btn').addEventListener('click', getPatientAppointments);
}

// Select user role and update UI
function selectRole(role) {
    userRole = role;
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`${role}-section`).classList.add('active');
    
    // Highlight active button
    document.querySelectorAll('#role-selection button').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
    });
    document.getElementById(`${role}-btn`).classList.remove('btn-outline-primary');
    document.getElementById(`${role}-btn`).classList.add('btn-primary');
    
    // Additional role-specific setup
    if (role === 'doctor') {
        checkDoctorStatus();
    } else if (role === 'patient') {
        checkPatientStatus();
    }
}

// Reset UI when account changes
function resetUI() {
    userRole = null;
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Reset role selection
    document.querySelectorAll('#role-selection button').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
    });
}

// Show toast notification
function showToast(title, message) {
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-message').textContent = message;
    toastBootstrap.show();
}

// Format timestamp to readable date
function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
}

// Format address for display
function formatAddress(address) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

// ==================== DIRECTOR FUNCTIONS ====================

// Add a new doctor
async function addDoctor(event) {
    event.preventDefault();
    
    try {
        const doctorAddress = document.getElementById('doctor-address').value;
        const specialty = document.getElementById('doctor-specialty').value;
        const workingDays = document.getElementById('doctor-workdays').value;
        const qualification = document.getElementById('doctor-qualification').value;
        
        await contract.methods.addDoctor(doctorAddress, specialty, workingDays, qualification)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '医生已添加 | Doctor added successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', '添加医生失败 | Failed to add doctor');
        console.error(error);
    }
}

// Revoke doctor permissions
async function revokeDoctor(event) {
    event.preventDefault();
    
    try {
        const doctorAddress = document.getElementById('revoke-doctor-address').value;
        
        await contract.methods.revokeDoctor(doctorAddress)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '医生权限已撤销 | Doctor permissions revoked');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', '撤销医生权限失败 | Failed to revoke doctor');
        console.error(error);
    }
}

// Get hospital statistics
async function getHospitalStats() {
    try {
        const stats = await contract.methods.getHospitalStats().call({ from: currentAccount });
        
        const statsElement = document.getElementById('hospital-stats');
        statsElement.innerHTML = `
            <p>医生数量 | Doctor Count: ${stats.doctorCount}</p>
            <p>患者数量 | Patient Count: ${stats.patientCount}</p>
            <p>预约数量 | Appointment Count: ${stats.appointmentCount}</p>
        `;
        statsElement.classList.remove('d-none');
    } catch (error) {
        showToast('错误 | Error', '获取医院统计数据失败 | Failed to get hospital statistics');
        console.error(error);
    }
}

// ==================== DOCTOR FUNCTIONS ====================

// Check if current user is a doctor
async function checkDoctorStatus() {
    try {
        const doctor = await contract.methods.doctors(currentAccount).call();
        const statusElement = document.getElementById('doctor-status');
        
        if (doctor.isActive) {
            statusElement.innerHTML = `
                <p>医生状态: 活跃 | Doctor Status: Active</p>
                <p>专业: ${doctor.specialty} | Specialty: ${doctor.specialty}</p>
                <p>工作日: ${doctor.workingDays} | Working Days: ${doctor.workingDays}</p>
                <p>资质: ${doctor.qualification} | Qualification: ${doctor.qualification}</p>
                <p>预约费用: ${doctor.appointmentFee} Wei | Appointment Fee: ${doctor.appointmentFee} Wei</p>
            `;
            statusElement.classList.remove('alert-info', 'alert-danger');
            statusElement.classList.add('alert-success');
        } else {
            statusElement.textContent = '您不是活跃医生或尚未注册 | You are not an active doctor or not registered';
            statusElement.classList.remove('alert-info', 'alert-success');
            statusElement.classList.add('alert-danger');
        }
    } catch (error) {
        console.error(error);
        const statusElement = document.getElementById('doctor-status');
        statusElement.textContent = '检查医生状态失败 | Failed to check doctor status';
        statusElement.classList.remove('alert-info', 'alert-success');
        statusElement.classList.add('alert-danger');
    }
}

// Set appointment fee
async function setAppointmentFee(event) {
    event.preventDefault();
    
    try {
        const fee = document.getElementById('appointment-fee').value;
        
        await contract.methods.setAppointmentFee(fee)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '预约费用已设置 | Appointment fee set successfully');
        event.target.reset();
        checkDoctorStatus(); // Refresh doctor status
    } catch (error) {
        showToast('错误 | Error', '设置预约费用失败 | Failed to set appointment fee');
        console.error(error);
    }
}

// Add a new patient
async function addPatient(event) {
    event.preventDefault();
    
    try {
        const patientAddress = document.getElementById('patient-address').value;
        const age = document.getElementById('patient-age').value;
        const gender = document.getElementById('patient-gender').value;
        
        await contract.methods.addPatient(patientAddress, age, gender)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '患者已添加 | Patient added successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', '添加患者失败 | Failed to add patient');
        console.error(error);
    }
}

// Add medication record
async function addMedication(event) {
    event.preventDefault();
    
    try {
        const patientAddress = document.getElementById('medication-patient-address').value;
        const medication = document.getElementById('medication-record').value;
        
        await contract.methods.addMedication(patientAddress, medication)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '医疗记录已添加 | Medication record added successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', '添加医疗记录失败 | Failed to add medication record');
        console.error(error);
    }
}

// Get doctor's appointments
async function getDoctorAppointments() {
    try {
        const appointments = await contract.methods.getDoctorAppointments().call({ from: currentAccount });
        
        const appointmentsElement = document.getElementById('doctor-appointments');
        if (appointments.length === 0) {
            appointmentsElement.innerHTML = '<div class="alert alert-info">没有预约记录 | No appointments found</div>';
            return;
        }
        
        let html = '<div class="list-group">';
        appointments.forEach((appointment, index) => {
            const status = appointment.completed ? 
                '<span class="badge bg-success">已完成 | Completed</span>' : 
                `<button class="btn btn-sm btn-primary complete-appointment" data-patient="${appointment.patient}" data-index="${index}">完成预约 | Complete</button>`;
            
            html += `
                <div class="list-group-item">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">患者: ${formatAddress(appointment.patient)} | Patient: ${formatAddress(appointment.patient)}</h5>
                        <small>预约费用: ${appointment.fee} Wei | Fee: ${appointment.fee} Wei</small>
                    </div>
                    <p class="mb-1">日期: ${formatTimestamp(appointment.date)} | Date: ${formatTimestamp(appointment.date)}</p>
                    <div class="d-flex justify-content-end">
                        ${status}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        
        appointmentsElement.innerHTML = html;
        
        // Add event listeners for complete buttons
        document.querySelectorAll('.complete-appointment').forEach(button => {
            button.addEventListener('click', async () => {
                const patientAddress = button.getAttribute('data-patient');
                const appointmentIndex = button.getAttribute('data-index');
                
                try {
                    await contract.methods.completeAppointment(patientAddress, appointmentIndex)
                        .send({ from: currentAccount });
                    
                    showToast('成功 | Success', '预约已完成 | Appointment completed successfully');
                    getDoctorAppointments(); // Refresh appointments
                } catch (error) {
                    showToast('错误 | Error', '完成预约失败 | Failed to complete appointment');
                    console.error(error);
                }
            });
        });
    } catch (error) {
        showToast('错误 | Error', '获取预约失败 | Failed to get appointments');
        console.error(error);
    }
}

// ==================== PATIENT FUNCTIONS ====================

// Check if current user is a patient
async function checkPatientStatus() {
    try {
        const patient = await contract.methods.patients(currentAccount).call();
        const statusElement = document.getElementById('patient-status');
        const registrationForm = document.getElementById('patient-registration');
        
        if (patient.exists) {
            statusElement.innerHTML = `
                <p>患者状态: 已注册 | Patient Status: Registered</p>
                <p>年龄: ${patient.age} | Age: ${patient.age}</p>
                <p>性别: ${patient.gender} | Gender: ${patient.gender}</p>
            `;
            statusElement.classList.remove('alert-info', 'alert-danger');
            statusElement.classList.add('alert-success');
            registrationForm.style.display = 'none';
        } else {
            statusElement.textContent = '您尚未注册为患者 | You are not registered as a patient';
            statusElement.classList.remove('alert-info', 'alert-success');
            statusElement.classList.add('alert-warning');
            registrationForm.style.display = 'block';
        }
    } catch (error) {
        console.error(error);
        const statusElement = document.getElementById('patient-status');
        statusElement.textContent = '检查患者状态失败 | Failed to check patient status';
        statusElement.classList.remove('alert-info', 'alert-success');
        statusElement.classList.add('alert-danger');
    }
}

// Register as a patient
async function registerAsSelfPatient(event) {
    event.preventDefault();
    
    try {
        const age = document.getElementById('self-age').value;
        const gender = document.getElementById('self-gender').value;
        
        await contract.methods.registerAsSelfPatient(age, gender)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '注册成功 | Registration successful');
        event.target.reset();
        checkPatientStatus(); // Refresh patient status
    } catch (error) {
        showToast('错误 | Error', '注册失败 | Registration failed');
        console.error(error);
    }
}

// List all active doctors
async function listAllDoctors() {
    try {
        const doctorAddresses = await contract.methods.getAllDoctors().call();
        
        const doctorsListElement = document.getElementById('doctors-list');
        if (doctorAddresses.length === 0) {
            doctorsListElement.innerHTML = '<div class="alert alert-info">没有活跃医生 | No active doctors found</div>';
            return;
        }
        
        let html = '<div class="list-group">';
        for (const address of doctorAddresses) {
            const details = await contract.methods.getDoctorDetails(address).call();
            
            html += `
                <div class="list-group-item">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">医生: ${formatAddress(address)} | Doctor: ${formatAddress(address)}</h5>
                        <small>预约费用: ${details.appointmentFee} Wei | Fee: ${details.appointmentFee} Wei</small>
                    </div>
                    <p class="mb-1">专业: ${details.specialty} | Specialty: ${details.specialty}</p>
                    <p class="mb-1">工作日: ${details.workingDays} | Working Days: ${details.workingDays}</p>
                    <p class="mb-1">资质: ${details.qualification} | Qualification: ${details.qualification}</p>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-sm btn-primary select-doctor" data-address="${address}" data-fee="${details.appointmentFee}">
                            选择医生 | Select Doctor
                        </button>
                    </div>
                </div>
            `;
        }
        html += '</div>';
        
        doctorsListElement.innerHTML = html;
        
        // Add event listeners for select buttons
        document.querySelectorAll('.select-doctor').forEach(button => {
            button.addEventListener('click', () => {
                const doctorAddress = button.getAttribute('data-address');
                const fee = button.getAttribute('data-fee');
                
                document.getElementById('appointment-doctor').value = doctorAddress;
                document.getElementById('fee-label').textContent = `费用 | Fee: ${fee} Wei`;
                document.getElementById('book-appointment-form').classList.remove('d-none');
            });
        });
    } catch (error) {
        showToast('错误 | Error', '获取医生列表失败 | Failed to get doctors list');
        console.error(error);
    }
}

// Book an appointment with a doctor
async function bookAppointment(event) {
    event.preventDefault();
    
    try {
        const doctorAddress = document.getElementById('appointment-doctor').value;
        const dateInput = document.getElementById('appointment-date').value;
        
        // Convert date to timestamp (seconds)
        const date = Math.floor(new Date(dateInput).getTime() / 1000);
        
        // Get doctor's fee
        const details = await contract.methods.getDoctorDetails(doctorAddress).call();
        const fee = details.appointmentFee;
        
        // Check if doctor is available
        const isAvailable = await contract.methods.isDoctorAvailable(doctorAddress, date).call();
        if (!isAvailable) {
            showToast('错误 | Error', '医生在该日期不可用 | Doctor is not available on this date');
            return;
        }
        
        await contract.methods.bookAppointment(doctorAddress, date)
            .send({ from: currentAccount, value: fee });
        
        showToast('成功 | Success', '预约成功 | Appointment booked successfully');
        event.target.reset();
        document.getElementById('book-appointment-form').classList.add('d-none');
    } catch (error) {
        showToast('错误 | Error', '预约失败 | Booking failed');
        console.error(error);
    }
}

// Get patient's medical record
async function getMedicalRecord() {
    try {
        const record = await contract.methods.getMyMedicalRecord().call({ from: currentAccount });
        
        const recordElement = document.getElementById('medical-record');
        recordElement.innerHTML = `
            <p>年龄 | Age: ${record.age}</p>
            <p>性别 | Gender: ${record.gender}</p>
            <p>医疗记录 | Medical Record: ${record.medicationRecord || '无记录 | No records'}</p>
        `;
        recordElement.classList.remove('d-none');
    } catch (error) {
        showToast('错误 | Error', '获取医疗记录失败 | Failed to get medical record');
        console.error(error);
    }
}

// Get patient's appointments
async function getPatientAppointments() {
    try {
        const appointments = await contract.methods.getMyAppointments().call({ from: currentAccount });
        
        const appointmentsElement = document.getElementById('patient-appointments');
        if (appointments.length === 0) {
            appointmentsElement.innerHTML = '<div class="alert alert-info">没有预约记录 | No appointments found</div>';
            return;
        }
        
        let html = '<div class="list-group">';
        for (const appointment of appointments) {
            const doctorDetails = await contract.methods.getDoctorDetails(appointment.doctor).call();
            const status = appointment.completed ? 
                '<span class="badge bg-success">已完成 | Completed</span>' : 
                '<span class="badge bg-warning text-dark">等待中 | Pending</span>';
            
            html += `
                <div class="list-group-item">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">医生: ${formatAddress(appointment.doctor)} | Doctor: ${formatAddress(appointment.doctor)}</h5>
                        <small>${status}</small>
                    </div>
                    <p class="mb-1">专业: ${doctorDetails.specialty} | Specialty: ${doctorDetails.specialty}</p>
                    <p class="mb-1">日期: ${formatTimestamp(appointment.date)} | Date: ${formatTimestamp(appointment.date)}</p>
                    <p class="mb-1">费用: ${appointment.fee} Wei | Fee: ${appointment.fee} Wei</p>
                </div>
            `;
        }
        html += '</div>';
        
        appointmentsElement.innerHTML = html;
    } catch (error) {
        showToast('错误 | Error', '获取预约失败 | Failed to get appointments');
        console.error(error);
    }
}
