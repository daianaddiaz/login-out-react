import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import '../css/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../img/hands-full-of-colors.jpg';

const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        console.log('apellido_materno: '+cookies.get('apellido_materno'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        return (
            <div className="conteiner_1">
              <h1>Welcome back!</h1>
              <h2>What do you want to do next?</h2>
              <div className='imagen'>
              <button className="btn btn-light" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
              <img src={Image} class="img-fluid"/> 
              </div>
            </div>
        );
    }
}

export default Menu;