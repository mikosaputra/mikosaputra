function searchFlights() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; // Kolom dengan nomor penerbangan
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function showFlightDetails(flightNumber) {
    const modal = document.getElementById("flightDetailsModal");
    const modalFlightNumber = document.getElementById("modalFlightNumber");
    const modalFlightDetails = document.getElementById("modalFlightDetails");
 
    // Set informasi penerbangan pada modal
    modalFlightNumber.textContent = `Penerbangan ${flightNumber}`;
    modalFlightDetails.textContent = `Informasipenerbangan${flightNumber}.`;
    
    // Tampilkan modal
    modal.style.display = "block";
}

function closeFlightDetailsModal() {
    const modal = document.getElementById("flightDetailsModal");

    // Tutup modal
    modal.style.display = "none";
}

// Menutup modal jika pengguna mengklik di luar area modal
window.onclick = function (event) {
    const modal = document.getElementById("flightDetailsModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
