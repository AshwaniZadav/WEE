var scanElement = document.getElementById("scan");
var thankYouMessageElement = document.getElementById("thankYouMessage");

function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function showDonateForm() {
  document.getElementById("donateForm").style.display = "block";
  document.getElementById("donateButton").style.display = "none";

  thankYouMessageElement.style.display = "none";
  scanElement.style.display = "none"; // Hide thank you message initially
}
function showDonateForm() {
  document.getElementById("donateForm").style.display = "block";
  document.getElementById("donateButton").style.display = "none";
  thankYouMessageElement.style.display = "none";
  scanElement.style.display = "none";
}

function generateQR() {
  var amount = document.getElementById("amount").value;
  var qrCodeElement = document.getElementById("qrcode");

  if (!amount || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  qrCodeElement.innerHTML = ""; // Clear previous QR code

  // QR code data with UPI payment format
  var upiUrl = "upi://pay?pa=9599259157@ptyes&pn=Sir Syed Library&am=" + amount + "&cu=INR";

  // Generate the QR code
  new QRCode(qrCodeElement, {
    text: upiUrl,
    width: 200,
    height: 200,
  });

  qrCodeElement.style.display = "block";
  document.getElementById("downloadButton").style.display = "block"; // Show download button
  thankYouMessageElement.style.display = "block";
  scanElement.style.display = "block";
}

function downloadQR() {
  var qrCanvas = document.querySelector("#qrcode canvas");

  if (qrCanvas) {
    var qrDataUrl = qrCanvas.toDataURL("image/png");
    var downloadLink = document.createElement("a");
    downloadLink.href = qrDataUrl;
    downloadLink.download = "QR_Code.png";
    downloadLink.click();
  } else {
    alert("QR code not found. Please generate it first.");
  }
}
