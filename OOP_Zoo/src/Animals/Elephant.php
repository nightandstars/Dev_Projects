<?php

namespace App\Animals;

use App\Animal;
use App\Interfaces\CanSwim;
use App\Interfaces\CanWalk;

class Elephant extends Animal implements CanWalk, CanSwim
{
    protected function getNoise(): string
    {
        return "toooooout";
    }
}
