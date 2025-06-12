<?php

namespace App\Animals;

use App\Interfaces\CanSwim;

class BubbleFish extends Fish
{
    protected function getNoise(): string
    {
        return "bloubloublou";
    }
}
