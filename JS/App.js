firebase.initializeApp({
    apiKey: "AIzaSyCSPAq5bOstyiSd2qXxpI4TUVFRkVWgkk8",
    authDomain: "modelosfm-28b4e.firebaseapp.com",
    projectId: "modelosfm-28b4e",
  });

  var db = firebase.firestore();

  function registrar(){
    var Cliente = document.getElementById("cliente").value;
    var Fecha = document.getElementById("fecha").value;
    var Npieza = document.getElementById("npieza").value;
    var Nmodelo = document.getElementById("nmodelo").value;
    var Tamaño = document.getElementById("tamaño").value;
    var Hidraulica = document.getElementById("hidraulica").value;
    var Material = document.getElementById("material").value;
    var Presentacion = document.getElementById("presentacion").value;
    var Np = document.getElementById("np").value;
    var Descripcion =  document.getElementById("descripcion").value;
    var Idi = document.getElementById("idi").value;
    var Np1 = document.getElementById("np1").value;
    var Descripcion1 = document.getElementById("descripcion1").value;
    var Nota = document.getElementById("nota").value;

    if(Cliente == "" || Fecha == "" || Npieza == "" || Nmodelo == "" || Tamaño == "" || Hidraulica == "" || Material == "" || Presentacion == "" ||
    Np == "" || Descripcion == "" || Idi == "" || Np1 == "" || Descripcion1 == "" || Nota == ""){
        alert("Completa todos los campos!");
    }else{
        db.collection("Modelos por cliente")
        .add({
            Cliente: Cliente,
            Fecha: Fecha,
            Nompieza: Npieza,
            Nomodelo: Nmodelo,
            Tamaño: Tamaño,
            Hidraulica: Hidraulica,
            Material: Material,
            Presentación: Presentacion,
            Numpartes: Np,
            Descripción: Descripcion,
            Idi: Idi,
            Numpartes1: Np1,
            Descripción1: Descripcion1,
            Nota: Nota,

        })
        .then((docRef) => {
            alert("Registro guardado exitosamente", docRef.id);
      
            document.getElementById("cliente").value = "";
            document.getElementById("fecha").value = "";
            document.getElementById("npieza").value = "";
            document.getElementById("nmodelo").value = "";
            document.getElementById("tamaño").value = "";
            document.getElementById("hidraulica").value = "";
            document.getElementById("material").value = "";
            document.getElementById("presentacion").value = "";
            document.getElementById("np").value = "";
            document.getElementById("descripcion").value = "";
            document.getElementById("idi").value = "";
            document.getElementById("np1").value = "";
            document.getElementById("descripcion1").value = "";
            document.getElementById("nota").value = "";
            
          })
          .catch((error) => {
            console.error("Error al guardar el registro: ", error);
          });
        }
    }
  

var tab = document.getElementById("tab");
db.collection("Modelos por cliente").orderBy('Fecha', 'desc')
  .get()
  .then((querySnapshot) => {
    tab.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tab.innerHTML += `
       
      <div  class="table-responsive">
      <table  class="table table-dark table-success table-hover  table-bordered">

      <tr>
      <th scope="col">Cliente</th>
      <th scope="col">Nombre del modelo</th>
      <th scope="col">Fecha de registro</th>
     
      <th scope="col">Llamar registro</th>
     
    </tr>

<tr>

<td scope="row">${doc.data().Cliente}</td>
<td>
  <p>${doc.data().Nomodelo}</p>
</td>
<td>
  <p>${doc.data().Fecha}</p>
</td>
<td><button class="btn btn-warning" onclick="Editar('${doc.id}','${
      doc.data().Cliente
    }','${doc.data().Nomodelo}')">OK</button}</td>
</tr>

        
        </table>
        </div>

           
        `;
    });
  });

//Editar datos
function Editar(id,Cliente,Nomodelo) {

  
  document.getElementById("cliente").value = Cliente;
  document.getElementById("nmodelo").value = Nomodelo;

}

function reubicacion(){
  var Cliente = document.getElementById("cliente").value;
  var Nomodelo = document.getElementById("nmodelo").value;
  var Almacen = document.getElementById("almacen").value;
  var Ubicacion = document.getElementById("ubicacion").value;
  var Fecha = document.getElementById("fecha").value;
  

  if(Cliente == "" || Nomodelo == "" || Almacen == "" || Ubicacion == "" || Fecha == "" ){
      alert("Completa todos los campos!");
  }else{
      db.collection("Ubicacion de modelos por cliente")
      .add({
          Cliente: Cliente,
          Nomodelo: Nomodelo,
          Almacen: Almacen,
          Ubicacion: Ubicacion,
          Fecha: Fecha,
          
          
         
          

      })
      .then((docRef) => {
        
          document.getElementById("cliente").value = "";
          document.getElementById("nmodelo").value = "";
          document.getElementById("almacen").value = "";
          document.getElementById("ubicacion").value = "";
          document.getElementById("fecha").value = "";
          alert("Registro guardado exitosamente", docRef.id);

        
        
    
         
          
          
        })
        .catch((error) => {
          console.error("Error al guardar el registro: ", error);
        });
      }
  }
