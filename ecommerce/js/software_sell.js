document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sample Data (Replace with API calls in a real application) ---
    const dashboardData = {
        totalProducts: 258,
        approvedProducts: 190,
        rejectedProducts: 32
    };

    // --- Function to Update Stats ---
    const updateStats = () => {
        const totalElement = document.querySelector('.dashboard_sell_stat_value[data-total]');
        const approvedElement = document.querySelector('.dashboard_sell_stat_value[data-approved]');
        const rejectedElement = document.querySelector('.dashboard_sell_stat_value[data-rejected]');

        if (totalElement) {
            totalElement.textContent = dashboardData.totalProducts;
        }
        if (approvedElement) {
            approvedElement.textContent = dashboardData.approvedProducts;
        }
        if (rejectedElement) {
            rejectedElement.textContent = dashboardData.rejectedProducts;
        }
    };
    
    // --- Initialize Product Analytics Chart (Bar Chart) ---
    const productAnalyticsCtx = document.getElementById('productAnalyticsChart');
    if (productAnalyticsCtx) {
        new Chart(productAnalyticsCtx, {
            type: 'bar',
            data: {
                labels: ['Total Products', 'Approved Products', 'Rejected Products'],
                datasets: [{
                    label: 'Counts',
                    data: [dashboardData.totalProducts, dashboardData.approvedProducts, dashboardData.rejectedProducts],
                    backgroundColor: [
                        '#3498db', // Blue for Total
                        '#2ecc71', // Green for Approved
                        '#e74c3c'  // Red for Rejected
                    ],
                    borderColor: [
                        '#3498db',
                        '#2ecc71',
                        '#e74c3c'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, 
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Counts'
                        },
                        ticks: {
                            precision: 0 
                        }
                    },
                    x: {
                        grid: {
                            display: false 
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false 
                    }
                }
            }
        });
    }

    // --- Initialize Product Status Chart (Doughnut Chart) ---
    const productStatusCtx = document.getElementById('productStatusChart');
    if (productStatusCtx) {
        const pendingProducts = dashboardData.totalProducts - dashboardData.approvedProducts - dashboardData.rejectedProducts;
        new Chart(productStatusCtx, {
            type: 'doughnut',
            data: {
                labels: ['Approved Products', 'Rejected Products', 'Pending Products'],
                datasets: [{
                    label: 'Product Status',
                    data: [dashboardData.approvedProducts, dashboardData.rejectedProducts, pendingProducts],
                    backgroundColor: [
                        '#3498db', 
                        '#e74c3c', 
                        '#2ecc71'  
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, 
                plugins: {
                    legend: {
                        position: 'top', 
                        labels: {
                            usePointStyle: true, 
                        }
                    }
                }
            }
        });
    }


    // --- Initialization ---
    updateStats();
});