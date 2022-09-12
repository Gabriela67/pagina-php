<?php

$direcion = $_SERVER["DOCUMENT_ROOT"].'/index2.html';
$direcion2= $_SERVER["DOCUMENT_ROOT"].'/about.html';
$direcion3 = $_SERVER["DOCUMENT_ROOT"].'/contactos.html';







class PaginaWed{



    public function index(){


        return $this->direccion;


    }
    public function about(){

        return $this->direccion2;

    }
    public function contactos(){

        return $this->direccion3;

    }




}


$direcion2 = new PaginaWed;
