<?php

namespace App\Animals;

use App\Interfaces\CanSwim;
use App\Interfaces\CanWalk;

class CatFish extends Fish
{
    protected function getNoise(): string
    {
        return "bloubloublou";
    }
}
