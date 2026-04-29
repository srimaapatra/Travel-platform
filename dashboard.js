const ctx = document.getElementById('chart');

new Chart(ctx, {
type: 'line',
data: {
labels: ['Jan','Feb','Mar','Apr'],
datasets: [{
label: 'Bookings',
data: [10,25,30,50],
borderWidth: 2
}]
}
});