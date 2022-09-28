function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if(ennemy.run_r != 0){
        ennemy.run_r--;
        ennemy.Right(rotateAngle, moveDistance);
    } else if (ennemy.run_l != 0){
        ennemy.run_l--;
        ennemy.Left(rotateAngle, -moveDistance);
    } else {
        ennemy.run_r = 120;
        ennemy.run_l = 120;
    }

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);




    player1.move();
    ennemy.move();
    controls.update();
}