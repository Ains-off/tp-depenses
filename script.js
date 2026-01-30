let totalGeneral = 0;

function ajoutDepense() {
    let description = document.getElementById("description").value;
    let montant = document.getElementById("montant").value;
    let montantNombre = parseFloat(montant);

    const tr = document.createElement("tr");
    const tdDescription = document.createElement("td");
    const tdMontant = document.createElement("td");
    const tdTotal = document.createElement("td");
    const tdAction = document.createElement("td");

    tdDescription.innerText = description;
    tdMontant.innerText = montant + " €"; 
    tdTotal.innerText = "..."; 

    const btnSupprimer = document.createElement("button");
    btnSupprimer.innerText = "Supprimer";

    btnSupprimer.onclick = function () {
        tr.remove();
        toutRecalculer();
    };

    tdAction.appendChild(btnSupprimer);
    tr.appendChild(tdDescription);
    tr.appendChild(tdMontant);
    tr.appendChild(tdTotal);
    tr.appendChild(tdAction);

    document.getElementById("depense").appendChild(tr);

    toutRecalculer();

    document.getElementById("description").value = "";
    document.getElementById("montant").value = "";
}
function toutRecalculer() {
    let compteurTemporaire = 0;
    
    let tableau = document.getElementById("depense");
    let lesLignes = tableau.getElementsByTagName("tr");

    for (let i = 0; i < lesLignes.length; i++) {
        let celluleMontant = lesLignes[i].getElementsByTagName("td")[1];
        
        let texte = celluleMontant.innerText;
        
        let chiffreTexte = texte.replace(" €", "");
        let leNombre = parseFloat(chiffreTexte);

        compteurTemporaire = compteurTemporaire + leNombre;

        let celluleTotal = lesLignes[i].getElementsByTagName("td")[2];
        celluleTotal.innerText = compteurTemporaire + " €";
    }

    totalGeneral = compteurTemporaire;
}