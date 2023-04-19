/*==================== GENERATE PDF ====================*/
// PDF generated area
let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button');

// Html2pdf options

let opt = {
    margin:          0.5,
    filename:        'myResume.pdf',
    image:           { type: 'jpeg', quality: 0.98 },
    html2canvas:     { scale: 4 },
    jsPDF:           { format: 'a4', orientation: 'portrait' }
}

// Function to call areaCv and Html2Pdf options
function generateResume(){
    html2pdf(areaCv, opt)
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () =>{
    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
    scaleCv()
    // 2. The PDF is generated
    generateResume()
    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
    setTimeout(removeScale, 5000)
})