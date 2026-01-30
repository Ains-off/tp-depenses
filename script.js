function ajoutDepense(){
    let description = document.getElementById("description").value;     //stockage de l'input description dans une variable
    let montant = document.getElementById("montant").value;     //idem pour montant

    const p = document.createElement("p");
    p.innerText = description + " : " + montant + " €";

    document.getElementById("depense").appendChild(p);
}

