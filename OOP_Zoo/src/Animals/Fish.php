<?php

namespace App\Animals;

use App\Interfaces\CanSwim;

class Fish extends \App\Animal implements CanSwim{
    protected function getNoise(): string
    {
        return "bloubloublou";
    }
}
