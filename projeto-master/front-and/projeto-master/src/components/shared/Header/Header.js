import React from 'react';
import {Link} from 'react-router-dom';

const Header=() => {
    return(



        <ul class="nav nav-pills justify-content-center">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to='/'> Home </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" to='/tarefa'> Tarefa </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" to='/nova'> Nova Tarefa </Link>
  </li>

</ul>
    )
}
export default Header;
