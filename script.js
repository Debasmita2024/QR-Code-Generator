function generateQR() {
    let qrText = document.getElementById("qr-text").value;
    let qrCodeDiv = document.getElementById("qr-code");
    
    // Clear previous QR code
    qrCodeDiv.innerHTML = "";

    if (qrText.trim() !== "") {
        let qr = new QRCode(qrCodeDiv, {
            text: qrText,
            width: 200,
            height: 200
        });
    } else {
        alert("Please enter text or a URL!");
    }
}
