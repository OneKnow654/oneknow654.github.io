
function Generate_pdf(username){
    const message = `Hello, ${username || 'Guest'}!\n\n
       This webpage is currently in a testing phase.his webpage is in testing mode only. 
       It is not meant for real-life use.
       Please do not rely on this page for anything important. 
    `;

    // Use jsPDF to generate a PDF
    const { jsPDF } = window.jspdf; // get the jsPDF class
    const doc = new jsPDF();

    // Add the text to the PDF (x=10, y=10)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('NOTE', 10, 10);

    doc.setFontSize(12);
    doc.text(message, 20, 20);
    

    // Save the PDF with a filename
    doc.save('data.pdf');
}



document.getElementById('btn').addEventListener('click', function() {
    const username = document.getElementById('name').value.trim();
    let alert = document.getElementById("alert");
    
    
    if(username === null || username == ""){
        alert.innerHTML = "Please Enter Name ";
        let intervalId = setInterval(()=>{ alert.innerHTML=""
            console.log("df");
            clearInterval(intervalId);
        },3000);
        
    }else{
        document.getElementById("name").innerHTML = "";
        Generate_pdf(username);
    }
    
  });

// // script.js
// document.getElementById('btn').addEventListener('click', function() {
//     // Get the value from the text input
//     const text = document.getElementById('name').value;
  
//     // Create a Blob object with the text content
//     const blob = new Blob([text], { type: 'text/plain' });
  
//     // Create a link element
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
  
//     // Set the download attribute with a filename
//     link.download = 'data.txt';
  
//     // Append the link to the body (not visible)
//     document.body.appendChild(link);
  
//     // Programmatically click the link to trigger the download
//     link.click();
  
//     // Clean up by removing the link
//     document.body.removeChild(link);
//   });
  