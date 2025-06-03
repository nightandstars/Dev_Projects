<?php

switch($_GET["page"]){
    case "footer":
        include "footer.php";
        break;
    case "header":
        include "header.php";
        break;
    case "contact":
        include "contact.php";
        break;
    default:
        include "index.php";
        break;
}
