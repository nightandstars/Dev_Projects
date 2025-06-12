<?php

namespace App\Animals;

use App\Animal;
use App\Interfaces\CanSwim;
use App\Interfaces\CanWalk;

class Zebra extends Animal implements CanWalk, CanSwim
{
    protected function getNoise(): string
    {
        return "hiiiii";
    }
}
