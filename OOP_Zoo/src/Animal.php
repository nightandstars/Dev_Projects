<?php
namespace App;

abstract class Animal {
    private string $name;

    public function __construct(string $name){
        $this->name = $name;
    }

    public function getName(){
        return $this->name;
    }

    abstract protected function getNoise(): string;

    public function noise(){
        return $this->getNoise();
    }
}