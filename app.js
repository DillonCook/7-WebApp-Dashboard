const alert = document.querySelector('.alert');
const hourly = document.querySelector('.hourly');
const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('ul>li');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('nav>.nav-icon');


const hourlyTraffic = [109, 156, 116, 154, 144, 160, 210, 99, 171];
const hourlyLabel = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

const dailyTraffic = [1909, 1128, 2849, 1899, 1920, 2299, 1493];
const dailyLabel = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const weeklyTraffic = [13009, 11228, 20419, 18959, 21210];
const weeklyLabel = ['1-7', '8-14', '15-21', '22-28', '29-4'];

const monthlyTraffic = [91008, 89466, 92100, 90964, 89455, 91533];
const monthlyLabel = ['January', 'February', 'March', 'April', 'May', 'June'];


// ------------- Fades allows CSS time to fade into background before removing completely ---------------------------------
document.querySelector('.close-button').addEventListener('click', () => {
    alert.style.opacity = '0';
    setTimeout(function(){alert.parentNode.removeChild(alert);}, 1000);
});

// --------------------------------- Event Listener to place and remove "active" class on MAIN TRAFFIC CHART -----------------
ul.addEventListener('click', (e) => {
    let target = e.target;
    for(let i = 0; i < li.length; i++) {
        
        if (target === li[i]){

            if (target.classList !== 'active') {
                for (let index = 0; index < li.length; index++) {
                    li[index].classList.remove("active");
                }    
            }

            target.classList.add("active");
            if (target.classList[0] == "hourly") {
                hourlyChart();
            } else if (target.classList[0] == "daily") {
                dailyChart();
            } else if (target.classList[0] == "weekly") {
                weeklyChart();
            } else if (target.classList[0] == "monthly") {
                monthlyChart();
            }
        } 
    }
});

// ---------------------------- Event Listener to place and remove "active" class on NAV ICONS -------------------------------
nav.addEventListener('click', (e) => {
    let target = e.target;
    for(let i = 0; i < navIcon.length; i++) {

        
        if (target === navIcon[i]){
            if (target.classList !== 'active-icon') {
                for (let index = 0; index < navIcon.length; index++) {
                    navIcon[index].classList.remove("active-icon");
                }    
            }
            target.classList.add("active-icon");
        } 
    }
});


// -------------------- Chart.js Code -------------------------------------------------------------------------------------
// ------  Main Traffic Chart
var ctx = document.getElementById('traffic-chart');
var trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: hourlyLabel,
        datasets: [{
            label: 'Traffic',
            data: hourlyTraffic,
            backgroundColor: [
                'rgba(36, 113, 185, .4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        elements: {
            line: {
                tension: .1
            }
        }
    }
});
// ----------- Daily Traffic Chart
var dtc = document.getElementById('daily-traffic-chart');
var myBarChart = new Chart(dtc, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Daily Traffic',
            data: [1909, 1128, 2849, 1899, 1920, 2299, 2877],
            backgroundColor: [
                'rgb(36, 113, 185)',
                'rgb(36, 113, 185)',
                'rgb(36, 113, 185)',
                'rgb(36, 113, 185)',
                'rgb(36, 113, 185)',
                'rgb(36, 113, 185)',
                'rgb(36, 113, 185)'
            ]
        }]
    },
});

// ---------- Mobile Users Chart
var muc = document.getElementById('mobile-users-chart');
var myDoughnutChart = new Chart(muc, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktops'],
        datasets: [{
            label: 'Mobile Users',
            data: [2909, 1528, 2849],
            backgroundColor: [
                'rgb(36, 113, 185)',
                'rgb(72, 167, 255)',
                'rgba(0, 224, 0, .6)'
            ]
        }]
    },
});



// -------------------- Functions to update Chart dynamically ------------------------------------------
function hourlyChart() {
    trafficChart.data.datasets[0].data = hourlyTraffic;
    trafficChart.data.labels = hourlyLabel;
    trafficChart.update();
}

function dailyChart() {
    trafficChart.data.datasets[0].data = dailyTraffic;
    trafficChart.data.labels = dailyLabel;
    trafficChart.update();
}

function weeklyChart() {
    trafficChart.data.datasets[0].data = weeklyTraffic;
    trafficChart.data.labels = weeklyLabel;
    trafficChart.update();
}

function monthlyChart() {
    trafficChart.data.datasets[0].data = monthlyTraffic;
    trafficChart.data.labels = monthlyLabel;
    trafficChart.update();
}

// --------------------------- Autocomplete ------------------

var options = {
	data: ["Victoria Chambers", "Dale Byrd", "Dillon Cook", "Dan Oliver", "Dawn wood"]
};

$("#names").easyAutocomplete(options);
