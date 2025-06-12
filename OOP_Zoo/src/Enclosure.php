<?php
namespace App;
class Enclosure{
    private array $animals = [];
    public function addAnimal(Animal $animal){
        $this->animals[] = $animal;
    }
    public function __toString(): string{
        $enclosure_animals = "";
        foreach($this->animals as $animal){
            $enclosure_animals .= $animal->getName() . " " .  $animal->noise() . "\n";
        }
        return $enclosure_animals;
    }
}