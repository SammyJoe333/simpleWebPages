<?php

$numero_zona = $_POST['zona'];
$nomeFile = "ZONA " . $numero_zona . ".log";
$myfile = fopen($nomeFile, "a");

/* 
    QUAND APRO UN FILE:
    - "r": READ - apro in lettura  enon posserci scriverci dentro
    - "w": WRITE - apro in scrittua e posso scrivere resettando il file resettando
    - "a": APPEND - apro in concatenazione e posso scrivere mantenendo le cose vecchie 
*/

$azione = $_POST['comando'];
fwrite($myfile, date(DATE_RFC2822)." : " . $azione. "\n");
fclose($myfile);

//echo "zona".$numero_zona." ".$azione;
?> 