<?php

namespace App\Animals;

use App\Animal;
use App\Interfaces\CanFly;
use App\Interfaces\CanSwim;
use App\Interfaces\CanWalk;

class
Duck extends Animal implements CanWalk, CanSwim, CanFly
{
    protected function getNoise(): string
    {
        return "quack";
    }
}
