
document.addEventListener('DOMContentLoaded', () => {
    const jobContainer = document.getElementById('job-container');

    const jobs = [
        { title: 'ওয়েব ডেভেলপার', company: 'টেক আইটি', location: 'ঢাকা' },
        { title: 'ডিজিটাল মার্কেটার', company: 'সফট সলিউশন', location: 'রংপুর' },
        { title: 'গ্রাফিক ডিজাইনার', company: 'ক্রিয়েটিভ এজেন্সি', location: 'চট্টগ্রাম' }
    ];

    jobs.forEach(job => {
        const div = document.createElement('div');
        div.classList.add('job-card');
        div.innerHTML = `
            <h3>${job.title}</h3>
            <p>প্রতিষ্ঠান: ${job.company}</p>
            <p>স্থান: ${job.location}</p>
        `;
        jobContainer.appendChild(div);
    });

    document.getElementById('cta-btn').addEventListener('click', () => {
        alert('আরও চাকরির সার্কুলার শীঘ্রই আসছে!');
    });
});
