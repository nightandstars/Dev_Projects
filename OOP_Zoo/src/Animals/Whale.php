<?php

namespace App\Animals;

use App\Animal;
use App\Interfaces\CanSwim;
use App\Interfaces\CanWalk;

class Whale extends Animal implements CanSwim
{
    protected function getNoise(): string
    {
        return "whouuuuu";
    }
}
