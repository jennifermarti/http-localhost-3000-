/*import React from 'react';

export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-light" style={{backgroundColor: "#c8d4e1"}}>
                <a className="navbar-brand" href="x">Company name</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="x">Features</a>
                    <a className="nav-item nav-link" href="x">Enterprise</a>
                    <a className="nav-item nav-link" href="x">Support</a>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
*/































function Prueba(props){
    return(
        <main>
                
            <div className="carta">
                <img src={props.imagen}></img>
                <h3>{props.nombre}</h3>
                <p>{props.edad}</p>
            </div>
        </main>
    )
}
const PER = [
    {
        id:1,
        nombre:"Mario",
        edad:40,
        imagen:"https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"

    },
   { 
    id:2,
    nombre:"Dario",
    edad:25,
    imagen:"https://media.istockphoto.com/vectors/user-avatarmanager-a-handsome-manager-in-a-blue-shirt-with-a-black-vector-id948490378?k=20&m=948490378&s=170667a&w=0&h=uz3FsCazqOzwqaeCzbE5tqi3V0vSTrrm93zKG1RQvOw="
    },
    {
     id:3,
     nombre:"Lucas",
     edad:32,
     imagen:"http://assets.stickpng.com/images/585e4bd7cb11b227491c3397.png"
    },
    {
     id:4,
     nombre:"Melanie",
     edad:26,
     imagen:"http://assets.stickpng.com/thumbs/585e4bc4cb11b227491c3395.png"
    },
    {
     id:"5",
     nombre:"Lucia",
     edad:26,
     imagen:"https://cdn-icons-png.flaticon.com/512/180/180679.png"
    },
]


export default function App(){
return(


        <div className="Blanka">
          <h1 className="titulo">Repartido 1</h1>
          <Lista array= {PER}/>  
        </div>
)}

function Lista(datos){
    return(
<>      
            {datos.array.map((personas)=>{
                const {nombre,imagen,id,edad}=personas;
                return(
                    <Prueba nombre={nombre} imagen=
                    {imagen} key={id}  edad={edad}/>
                )
            })}
    )
    </>
    )
}


