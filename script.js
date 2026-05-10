document.addEventListener('DOMContentLoaded', () => {
    const jobContainer = document.getElementById('job-container');

    // এখানে আপনি নতুন প্রোডাক্ট বা জব অ্যাড করবেন
    const products = [
        { 
            title: 'স্মার্ট ওয়াচ - সিরিজ ৮', 
            company: 'গ্যাজেট শপ', 
            description: 'এটি একটি উন্নত মানের ওয়াটারপ্রুফ স্মার্ট ওয়াচ।',
            link: 'https://yourproductlink.com' 
        },
        { 
            title: 'ফুল স্ট্যাক ওয়েব ডেভেলপার', 
            company: 'সফট আইটি', 
            description: 'আমরা একজন দক্ষ ডেভেলপার খুঁজছি। আজই আবেদন করুন।',
            link: 'https://yourjoblink.com' 
        }
    ];

    products.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('job-card');
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p><strong>প্রতিষ্ঠান:</strong> ${item.company}</p>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank" style="display: inline-block; margin-top: 10px; color: #27ae60; font-weight: bold; text-decoration: none;">বিস্তারিত দেখুন →</a>
        `;
        jobContainer.appendChild(div);
    });
});
