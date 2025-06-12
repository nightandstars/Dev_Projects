<?php

use App\Zoo;

require __DIR__ . '/vendor/autoload.php';

$animals = [];
$animals[] = new \App\Animals\Fish("Bob");
$animals[] = new \App\Animals\Fish("Bubulle");
$animals[] = new \App\Animals\Fish("Dory");
$animals[] = new \App\Animals\Fish("Georges");
$animals[] = new \App\Animals\Fish("Marc");
$animals[] = new \App\Animals\BubbleFish("Pear");
$animals[] = new \App\Animals\BubbleFish("Mc");
$animals[] = new \App\Animals\BubbleFish("Apple");
$animals[] = new \App\Animals\CatFish("Orlando");
$animals[] = new \App\Animals\CatFish("Harrison");
$animals[] = new \App\Animals\ClownFish("Nemo");
$animals[] = new \App\Animals\Elephant("Alaska");
$animals[] = new \App\Animals\Elephant("Phoenix");
$animals[] = new \App\Animals\Zebra("Snow");
$animals[] = new \App\Animals\Parrot("Red");
$animals[] = new \App\Animals\Parrot("Green");
$animals[] = new \App\Animals\Parrot("Blue");
$animals[] = new \App\Animals\Parrot("Yellow");
$animals[] = new \App\Animals\Parrot("Orange");
$animals[] = new \App\Animals\Parrot("Black");
$animals[] = new \App\Animals\Parrot("Lime");
$animals[] = new \App\Animals\Parrot("Grey");
$animals[] = new \App\Animals\Parrot("Brown");
$animals[] = new \App\Animals\Parrot("Cyan");
$animals[] = new \App\Animals\Dove("Liberty");
$animals[] = new \App\Animals\Dove("Peace");

foreach ($animals as $animal) {
    Zoo::addAnimal($animal);
}
Zoo::visitTheZoo();
