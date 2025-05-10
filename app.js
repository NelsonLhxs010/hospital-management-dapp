// 合约地址和ABI
const contractAddress = '0xf8e81D47203A594245E36C48e151709F0C19fBe8';
const contractABI = [
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


// 全局变量
let web3;
let contract;
let currentAccount;
let notificationModal;
// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM加载完成，初始化应用...");
    init();
});
// 初始化应用
async function init() {
    console.log("初始化应用...");
    
    // 初始化通知模态框
    if (document.getElementById('notification-modal')) {
        notificationModal = new bootstrap.Modal(document.getElementById('notification-modal'));
    }
    
    // 连接钱包按钮事件
    const connectButton = document.getElementById('connect-wallet');
    if (connectButton) {
        console.log("注册连接钱包按钮事件");
        connectButton.addEventListener('click', function() {
            console.log("连接钱包按钮被点击");
            connectWallet();
        });
    } else {
        console.error("找不到连接钱包按钮");
    }
    
    // 角色按钮事件
    document.getElementById('director-btn')?.addEventListener('click', () => switchRole('director'));
    document.getElementById('doctor-btn')?.addEventListener('click', () => switchRole('doctor'));
    document.getElementById('patient-btn')?.addEventListener('click', () => switchRole('patient'));
    
    // 院长功能表单提交事件
    document.getElementById('add-doctor-form')?.addEventListener('submit', addDoctor);
    document.getElementById('revoke-doctor-form')?.addEventListener('submit', revokeDoctor);
    document.getElementById('get-stats-btn')?.addEventListener('click', getHospitalStats);
    document.getElementById('get-doctors-btn')?.addEventListener('click', getAllDoctors);
    
    // 医生功能表单提交事件
    document.getElementById('add-patient-form')?.addEventListener('submit', addPatient);
    document.getElementById('add-medication-form')?.addEventListener('submit', addMedication);
    document.getElementById('set-fee-form')?.addEventListener('submit', setAppointmentFee);
    document.getElementById('get-doctor-appointments-btn')?.addEventListener('click', getDoctorAppointments);
    document.getElementById('complete-appointment-form')?.addEventListener('submit', completeAppointment);
    
    // 患者功能表单提交事件
    document.getElementById('register-self-form')?.addEventListener('submit', registerAsSelfPatient);
    document.getElementById('book-appointment-form')?.addEventListener('submit', bookAppointment);
    document.getElementById('get-medical-record-btn')?.addEventListener('click', getMyMedicalRecord);
    document.getElementById('get-patient-appointments-btn')?.addEventListener('click', getPatientAppointments);
    document.getElementById('get-available-doctors-btn')?.addEventListener('click', getAvailableDoctors);
    
    // 检查是否已有Web3
    checkWeb3();
}
// 检查Web3是否可用
async function checkWeb3() {
    console.log("检查Web3...");
    
    if (window.ethereum) {
        console.log("检测到ethereum对象");
        try {
            web3 = new Web3(window.ethereum);
            contract = new web3.eth.Contract(contractABI, contractAddress);
            
            // 检查是否已经连接
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                console.log("已检测到账户:", accounts[0]);
                await onConnected(accounts[0]);
            } else {
                console.log("未检测到已连接的账户");
            }
        } catch (error) {
            console.error("初始化Web3失败:", error);
            showNotification("错误", `初始化Web3失败: ${error.message}`);
        }
    } else if (window.web3) {
        console.log("检测到旧版web3对象");
        web3 = new Web3(window.web3.currentProvider);
        contract = new web3.eth.Contract(contractABI, contractAddress);
        
        try {
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                await onConnected(accounts[0]);
            }
        } catch (error) {
            console.error("获取账户失败:", error);
        }
    } else {
        console.log("未检测到Web3，请安装MetaMask");
        showNotification("错误", "请安装MetaMask以使用该应用。");
    }
}
// 连接钱包
async function connectWallet() {
    console.log("尝试连接钱包...");
    
    try {
        if (window.ethereum) {
            console.log("使用ethereum.request连接钱包");
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("获取到账户:", accounts);
            if (accounts.length > 0) {
                await onConnected(accounts[0]);
            } else {
                console.error("未获取到账户");
                showNotification("错误", "未能获取账户");
            }
        } else if (window.web3) {
            console.log("使用旧版web3连接钱包");
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                await onConnected(accounts[0]);
            } else {
                console.error("未获取到账户");
                showNotification("错误", "未能获取账户");
            }
        } else {
            console.error("未检测到Web3");
            showNotification("错误", "请安装MetaMask以使用该应用。");
        }
    } catch (error) {
        console.error("连接钱包失败:", error);
        showNotification("错误", `连接钱包失败: ${error.message}`);
    }
}
// 连接成功后的处理
async function onConnected(account) {
    console.log("连接成功，账户:", account);
    
    currentAccount = account;
    document.getElementById('current-address').textContent = account;
    document.getElementById('wallet-status').classList.remove('alert-warning');
    document.getElementById('wallet-status').classList.add('alert-success');
    document.getElementById('wallet-status').textContent = "钱包已连接 | Wallet Connected";
    document.getElementById('connect-wallet').style.display = 'none';
    
    // 显示角色选择
    document.getElementById('role-status').classList.remove('hidden');
    document.getElementById('role-selection').classList.remove('hidden');
    
    // 检查用户角色
    checkUserRole();
    
    // 设置地址变化监听
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', function (accounts) {
            console.log("账户已变更，刷新页面");
            window.location.reload();
        });
    }
}
// 检查用户角色
async function checkUserRole() {
    console.log("检查用户角色...");
    
    try {
        // 获取院长地址
        const director = await contract.methods.director().call();
        console.log("院长地址:", director);
        
        // 检查是否为院长
        if (currentAccount.toLowerCase() === director.toLowerCase()) {
            document.getElementById('user-role').textContent = "院长 | Director";
            return;
        }
        
        // 检查是否为医生
        const doctorInfo = await contract.methods.doctors(currentAccount).call();
        console.log("医生信息:", doctorInfo);
        if (doctorInfo.isActive) {
            document.getElementById('user-role').textContent = "医生 | Doctor";
            return;
        }
        
        // 检查是否为患者
        const patientInfo = await contract.methods.patients(currentAccount).call();
        console.log("患者信息:", patientInfo);
        if (patientInfo.exists) {
            document.getElementById('user-role').textContent = "患者 | Patient";
            return;
        }
        
        document.getElementById('user-role').textContent = "未注册用户 | Unregistered User";
    } catch (error) {
        console.error("检查角色失败:", error);
        document.getElementById('user-role').textContent = "角色检查失败 | Role Check Failed";
    }
}
// 切换角色部分
function switchRole(role) {
    console.log("切换到角色:", role);
    
    // 隐藏所有部分
    document.querySelectorAll('.section').forEach(el => {
        el.style.display = 'none';
    });
    
    // 显示选定的部分
    document.getElementById(`${role}-section`).style.display = 'block';
}
// 显示通知
function showNotification(title, message) {
    console.log(`通知: ${title} - ${message}`);
    
    if (notificationModal) {
        document.getElementById('notification-title').textContent = title;
        document.getElementById('notification-body').textContent = message;
        notificationModal.show();
    } else {
        alert(`${title}: ${message}`);
    }
}
// 时间戳转换为可读格式
function formatTimestamp(timestamp) {
    return moment(timestamp * 1000).format('YYYY-MM-DD HH:mm');
}
// 格式化地址显示
function formatAddress(address) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}
// ======= 院长功能 =======
// 添加医生
async function addDoctor(event) {
    event.preventDefault();
    
    const doctorAddress = document.getElementById('doctor-address').value;
    const specialty = document.getElementById('doctor-specialty').value;
    const workingDays = document.getElementById('doctor-working-days').value;
    const qualification = document.getElementById('doctor-qualification').value;
    
    try {
        await contract.methods.addDoctor(doctorAddress, specialty, workingDays, qualification)
            .send({ from: currentAccount });
        
        showNotification("成功", "医生添加成功");
        document.getElementById('add-doctor-form').reset();
    } catch (error) {
        showNotification("错误", `添加医生失败: ${error.message}`);
    }
}
// 撤销医生
async function revokeDoctor(event) {
    event.preventDefault();
    
    const doctorAddress = document.getElementById('revoke-doctor-address').value;
    
    try {
        await contract.methods.revokeDoctor(doctorAddress)
            .send({ from: currentAccount });
        
        showNotification("成功", "医生权限已撤销");
        document.getElementById('revoke-doctor-form').reset();
    } catch (error) {
        showNotification("错误", `撤销医生失败: ${error.message}`);
    }
}
// 获取医院统计信息
async function getHospitalStats() {
    try {
        const stats = await contract.methods.getHospitalStats().call({ from: currentAccount });
        
        document.getElementById('doctor-count').textContent = stats.doctorCount;
        document.getElementById('patient-count').textContent = stats.patientCount;
        document.getElementById('appointment-count').textContent = stats.appointmentCount;
    } catch (error) {
        showNotification("错误", `获取统计信息失败: ${error.message}`);
    }
}
// 获取所有医生
async function getAllDoctors() {
    try {
        const doctors = await contract.methods.getAllDoctors().call();
        const doctorListElement = document.getElementById('doctor-list');
        doctorListElement.innerHTML = '';
        
        if (doctors.length === 0) {
            doctorListElement.innerHTML = '<div class="alert alert-info">没有医生记录 | No doctors found</div>';
            return;
        }
        
        for (const doctorAddress of doctors) {
            const details = await contract.methods.getDoctorDetails(doctorAddress).call();
            
            const doctorItem = document.createElement('div');
            doctorItem.className = 'list-group-item';
            doctorItem.innerHTML = `
                <h5>医生地址 | Doctor Address: ${doctorAddress}</h5>
                <p>专业 | Specialty: ${details.specialty}</p>
                <p>工作日 | Working Days: ${details.workingDays}</p>
                <p>资质 | Qualification: ${details.qualification}</p>
                <p>预约费用 | Fee: ${web3.utils.fromWei(details.appointmentFee.toString(), 'ether')} ETH</p>
            `;
            doctorListElement.appendChild(doctorItem);
        }
    } catch (error) {
        showNotification("错误", `获取医生列表失败: ${error.message}`);
    }
}
// ======= 医生功能 =======
// 添加患者
async function addPatient(event) {
    event.preventDefault();
    
    const patientAddress = document.getElementById('patient-address').value;
    const age = document.getElementById('patient-age').value;
    const gender = document.getElementById('patient-gender').value;
    
    try {
        await contract.methods.addPatient(patientAddress, age, gender)
            .send({ from: currentAccount });
        
        showNotification("成功", "患者添加成功");
        document.getElementById('add-patient-form').reset();
    } catch (error) {
        showNotification("错误", `添加患者失败: ${error.message}`);
    }
}
// 添加药物记录
async function addMedication(event) {
    event.preventDefault();
    
    const patientAddress = document.getElementById('medication-patient-address').value;
    const medication = document.getElementById('medication-record').value;
    
    try {
        await contract.methods.addMedication(patientAddress, medication)
            .send({ from: currentAccount });
        
        showNotification("成功", "药物记录添加成功");
        document.getElementById('add-medication-form').reset();
    } catch (error) {
        showNotification("错误", `添加药物记录失败: ${error.message}`);
    }
}
// 设置预约费用
async function setAppointmentFee(event) {
    event.preventDefault();
    
    const fee = document.getElementById('appointment-fee').value;
    const feeWei = web3.utils.toWei(fee, 'ether');
    
    try {
        await contract.methods.setAppointmentFee(feeWei)
            .send({ from: currentAccount });
        
        showNotification("成功", "预约费用设置成功");
        document.getElementById('set-fee-form').reset();
    } catch (error) {
        showNotification("错误", `设置预约费用失败: ${error.message}`);
    }
}
// 获取医生预约
async function getDoctorAppointments() {
    try {
        const appointments = await contract.methods.getDoctorAppointments().call({ from: currentAccount });
        const appointmentsElement = document.getElementById('doctor-appointments');
        appointmentsElement.innerHTML = '';
        
        if (appointments.length === 0) {
            appointmentsElement.innerHTML = '<div class="alert alert-info">没有预约记录 | No appointments found</div>';
            return;
        }
        
        for (let i = 0; i < appointments.length; i++) {
            const appointment = appointments[i];
            const appointmentItem = document.createElement('div');
            appointmentItem.className = 'list-group-item';
            appointmentItem.innerHTML = `
                <h5>预约 #${i} | Appointment #${i}</h5>
                <p>患者 | Patient: ${appointment.patient}</p>
                <p>日期 | Date: ${formatTimestamp(appointment.date)}</p>
                <p>费用 | Fee: ${web3.utils.fromWei(appointment.fee, 'ether')} ETH</p>
                <p>状态 | Status: ${appointment.completed ? '已完成 | Completed' : '未完成 | Pending'}</p>
            `;
            appointmentsElement.appendChild(appointmentItem);
        }
    } catch (error) {
        showNotification("错误", `获取预约列表失败: ${error.message}`);
    }
}
// 完成预约
async function completeAppointment(event) {
    event.preventDefault();
    
    const patientAddress = document.getElementById('complete-patient-address').value;
    const appointmentIndex = document.getElementById('appointment-index').value;
    
    try {
        await contract.methods.completeAppointment(patientAddress, appointmentIndex)
            .send({ from: currentAccount });
        
        showNotification("成功", "预约已标记为完成");
        document.getElementById('complete-appointment-form').reset();
    } catch (error) {
        showNotification("错误", `完成预约失败: ${error.message}`);
    }
}
// ======= 患者功能 =======
// 自我注册
async function registerAsSelfPatient(event) {
    event.preventDefault();
    
    const age = document.getElementById('self-age').value;
    const gender = document.getElementById('self-gender').value;
    
    try {
        await contract.methods.registerAsSelfPatient(age, gender)
            .send({ from: currentAccount });
        
        showNotification("成功", "注册成功");
        document.getElementById('register-self-form').reset();
        
        // 更新用户角色
        checkUserRole();
    } catch (error) {
        showNotification("错误", `注册失败: ${error.message}`);
    }
}
// 预约医生
async function bookAppointment(event) {
    event.preventDefault();
    
    const doctorAddress = document.getElementById('book-doctor-address').value;
    const dateInput = document.getElementById('appointment-date').value;
    const payment = document.getElementById('appointment-payment').value;
    
    // 将日期转换为时间戳
    const timestamp = Math.floor(new Date(dateInput).getTime() / 1000);
    
    try {
        await contract.methods.bookAppointment(doctorAddress, timestamp)
            .send({ 
                from: currentAccount,
                value: web3.utils.toWei(payment, 'ether')
            });
        
        showNotification("成功", "预约成功");
        document.getElementById('book-appointment-form').reset();
    } catch (error) {
        showNotification("错误", `预约失败: ${error.message}`);
    }
}
// 获取医疗记录
async function getMyMedicalRecord() {
    try {
        const record = await contract.methods.getMyMedicalRecord().call({ from: currentAccount });
        
        document.getElementById('record-age').textContent = record.age;
        document.getElementById('record-gender').textContent = record.gender;
        document.getElementById('record-medication').textContent = record.medicationRecord || "无记录 | No records";
    } catch (error) {
        showNotification("错误", `获取医疗记录失败: ${error.message}`);
    }
}
// 获取患者预约
async function getPatientAppointments() {
    try {
        const appointments = await contract.methods.getMyAppointments().call({ from: currentAccount });
        const appointmentsElement = document.getElementById('patient-appointments');
        appointmentsElement.innerHTML = '';
        
        if (appointments.length === 0) {
            appointmentsElement.innerHTML = '<div class="alert alert-info">没有预约记录 | No appointments found</div>';
            return;
        }
        
        for (let i = 0; i < appointments.length; i++) {
            const appointment = appointments[i];
            const appointmentItem = document.createElement('div');
            appointmentItem.className = 'list-group-item';
            appointmentItem.innerHTML = `
                <h5>预约 #${i} | Appointment #${i}</h5>
                <p>医生 | Doctor: ${appointment.doctor}</p>
                <p>日期 | Date: ${formatTimestamp(appointment.date)}</p>
                <p>费用 | Fee: ${web3.utils.fromWei(appointment.fee, 'ether')} ETH</p>
                <p>状态 | Status: ${appointment.completed ? '已完成 | Completed' : '未完成 | Pending'}</p>
            `;
            appointmentsElement.appendChild(appointmentItem);
        }
    } catch (error) {
        showNotification("错误", `获取预约列表失败: ${error.message}`);
    }
}
// 获取可用医生
async function getAvailableDoctors() {
    try {
        const doctors = await contract.methods.getAllDoctors().call();
        const doctorsElement = document.getElementById('available-doctors');
        doctorsElement.innerHTML = '';
        
        if (doctors.length === 0) {
            doctorsElement.innerHTML = '<div class="alert alert-info">没有医生记录 | No doctors found</div>';
            return;
        }
        
        for (const doctorAddress of doctors) {
            const details = await contract.methods.getDoctorDetails(doctorAddress).call();
            const isAvailable = await contract.methods.isDoctorAvailable(doctorAddress, Math.floor(Date.now() / 1000)).call();
            
            const doctorItem = document.createElement('div');
            doctorItem.className = 'list-group-item';
            doctorItem.innerHTML = `
                <h5>医生地址 | Doctor Address: ${doctorAddress}</h5>
                <p>专业 | Specialty: ${details.specialty}</p>
                <p>工作日 | Working Days: ${details.workingDays}</p>
                <p>资质 | Qualification: ${details.qualification}</p>
                <p>预约费用 | Fee: ${web3.utils.fromWei(details.appointmentFee.toString(), 'ether')} ETH</p>
                <p>状态 | Status: ${isAvailable ? '可预约 | Available' : '已满 | Fully Booked'}</p>
            `;
            doctorsElement.appendChild(doctorItem);
        }
    } catch (error) {
        showNotification("错误", `获取医生列表失败: ${error.message}`);
    }
}
