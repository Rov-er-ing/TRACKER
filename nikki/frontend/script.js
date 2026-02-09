
function handleNo() {
    const errorMsg = document.getElementById('error-message');
    errorMsg.classList.remove('hidden');
    
    // Make the No button smaller every time she clicks it (optional but funny)
    const noBtn = document.getElementById('no-btn');
    const currentScale = noBtn.style.transform || "scale(1)";
    const newScale = parseFloat(currentScale.replace("scale(", "")) * 0.9;
    noBtn.style.transform = `scale(${newScale})`;
}

function handleYes() {
    

    // 1. Trigger the Confetti!
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fb7185', '#e11d48', '#fecdd3', '#ffffff'] // Romantic pink/red/white colors
    });

    // 2. Hide the question
    document.getElementById('question-container').classList.add('hidden');
    
    // 3. Show the result
    document.getElementById('result-container').classList.remove('hidden');
}