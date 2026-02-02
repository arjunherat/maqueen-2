basic.forever(function () {
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 74)
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 74)
    basic.pause(500)
    Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
    basic.pause(5000)
})
