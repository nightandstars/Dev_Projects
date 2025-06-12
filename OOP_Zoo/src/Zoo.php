<?php

namespace App;

use App\Interfaces\CanFly;
use App\Interfaces\CanSwim;
use App\Interfaces\CanWalk;

class Zoo
{
    private static ?Enclosure $aquarium = null;
    private static ?Enclosure $aviary = null;
    private static ?Enclosure $fence = null;

    public static function addAnimal(Animal $animal){

        if($animal instanceof CanFly){
            if (self::$aviary == null){
                self::$aviary = new Enclosure();
            }
            self::$aviary->addAnimal($animal);
            return;
        }
        if($animal instanceof CanWalk){
            if (self::$fence == null){
                self::$fence = new Enclosure();
            }
            self::$fence->addAnimal($animal);
            return;
        }
        if($animal instanceof CanSwim){
            if (self::$aquarium == null){
                self::$aquarium = new Enclosure();
            }
                self::$aquarium->addAnimal($animal);
        }
    }
    public static function visitTheZoo(){
        echo "Aquarium: " . self::$aquarium . "\n";
        echo "Aviary: " . self::$aviary . "\n";
        echo "Fence: ". self::$fence . "\n";
    }
}