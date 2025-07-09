//User Feedback Form

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const feedbackDisplay = document.getElementById('feedback-display');
    const charCount = document.getElementById('char-count');

    // Event Delegation for Inputs

    form.addEventListener('input', (e) => {
        if (e.target.id === 'comments') {
            // Live character count
            charCount.textContent = `${e.target.value.length} characters`;
        }
    });

    // Showing and Hiding Tooltips

    form.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            const tooltip = document.getElementById(`${e.target.id}-tooltip`) || document.getElementById(`${e.target.id}-tip`);
            if (tooltip) tooltip.style.display = 'inline';
        }
    });

    form.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            const tooltip = document.getElementById(`${e.target.id}-tooltip`) || document.getElementById(`${e.target.id}-tip`);
            if (tooltip) tooltip.style.display = 'none';
        }
    });

    // Form Submission

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
       
        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const comments = form.comments.value.trim();

        // Basic Validation

        if (!username || !email || !comments) {
            alert('Please fill out all required fields.');
            return;
        }

        // Appending Feedback

        const feedbackEntry = document.createElement('div');
        feedbackEntry.classList.add('feedback-entry');
        feedbackEntry.innerHTML = `
            <h3>${username}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p>${comments}</p>
            <hr/>
        `;
        feedbackDisplay.appendChild(feedbackEntry);

        // Resetting the form

        form.reset();
        charCount.textContent = '0 characters';
    });

    // Preventing background clicks from triggering form-related events

    document.body.addEventListener('click', (e) => {
        if (!form.contains(e.target)) {
            e.stopPropagation();
        }
    });
});
