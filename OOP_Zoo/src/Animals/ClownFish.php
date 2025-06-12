<?php

namespace App\Animals;

use App\Interfaces\CanSwim;

class ClownFish extends Fish
{
    protected function getNoise(): string
    {
        return "bloubloublou";
    }
}
